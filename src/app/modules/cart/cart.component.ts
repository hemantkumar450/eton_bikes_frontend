import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "src/app/core/services/product.service";
import { AuthService } from "src/app/core/services/auth.service";
import { environment } from "src/environments/environment";

declare let Razorpay: any;

@Component({
  selector: "app-wheels",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  totalAmnt = 0;
  bookingId = "";
  loading = false;
  userProfile = null;
  RAZORPAY_OPTIONS = {
    key: environment.rzp_key,
    amount: "",
    name: "Eton Bikes",
    order_id: "",
    description: "Load Wallet",
    prefill: {
      name: "",
      email: "",
      contact: "",
      method: "",
    },
    modal: {},
    theme: {
      color: "#98FC01",
    },
  };
  constructor(
    private router: Router,
    private productService: ProductService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.loggedInUser$.subscribe((data) => {
      if (data) {
        this.RAZORPAY_OPTIONS.prefill.name = data.name;
        this.RAZORPAY_OPTIONS.prefill.email = data.email_detail.email;
      } else {
        this.router.navigateByUrl("/");
      }
    });
    this.getCartDetails();
  }
  proceedToBuy() {
    this.totalAmnt = 0;
    this.bookingId = "";
    this.productService.createOrder().subscribe(
      (data) => {
        // console.log(data, 'DAta');
        this.totalAmnt = data.data.amount;
        this.bookingId = data.data.booking_id;
        this.RAZORPAY_OPTIONS.amount = data.data.amount + "00";
        this.RAZORPAY_OPTIONS.order_id = data.data.order_id;
        this.RAZORPAY_OPTIONS["handler"] = this.razorPaySuccessHandler.bind(
          this
        );
        let razorpay = new Razorpay(this.RAZORPAY_OPTIONS);
        razorpay.on("payment.failed", this.razorpayError.bind(this));
        razorpay.open();
      },
      (error) => {
        console.error(error, "Error");
      }
    );
  }
  razorpayError(response) {
    console.log(response, "Error REsponse");
    this.productService
      .updateBookingFailed(
        Object.assign({}, { booking_id: this.bookingId }, response)
      )
      .subscribe(
        (data) => {
          console.log(data, "Update booking failed");
        },
        (error) => {
          console.log(error, "Update booking failed");
        }
      );
  }

  public razorPaySuccessHandler(response) {
    console.log(response, "Razorpay response");
    this.productService
      .capturePayment({
        booking_id: this.bookingId,
        payment_id: response.razorpay_payment_id,
        amount: this.totalAmnt,
        data: response
      })
      .subscribe(
        (data) => {
          alert("Booking successfull");
          this.getCartDetails();
        },
        (error) => {
          alert(`Error Occured: ${error.meesage}`);
        }
      );
  }

  route() {
    this.router.navigateByUrl("/");
  }

  getCartDetails() {
    this.loading = true;
    this.productService.getCartDetails().subscribe(
      (res: any) => {
        // console.log(res);
        const tempArr = [];
        res.data.forEach((el) => {
          const price = el.sub_product.build_specs.find(
            (p) => p.key === "Price"
          );
          const ind = tempArr.findIndex((ele) => ele.id === el.sub_product.id);
          if (ind > -1) {
            tempArr[ind].count += 1;
            tempArr[ind].items.push(el);
            tempArr[ind].total = parseInt(price.value) * tempArr[ind].count;
          } else {
            tempArr.push({
              id: el.sub_product.id,
              count: 1,
              price,
              rate: parseInt(price.value),
              name: `${el.sub_product.product.name} (${el.sub_product.name})`,
              items: [el],
              sub_product: el.sub_product,
              total: parseInt(price.value),
            });
          }
        });
        this.loading = false;
        console.log(tempArr, "Cart Items");
        this.cartItems = tempArr;
        this.calculateTotal();
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  calculateTotal() {
    let total = 0;
    this.cartItems.forEach((element) => {
      total += +element.total;
    });
    this.totalAmnt = total;
  }
  handlePrice(event: Event, item: any) {
    event.stopImmediatePropagation();
    console.log((<HTMLInputElement>event.target).value, item);
    const val = (<HTMLInputElement>event.target).value;
    const ind = this.cartItems.findIndex((e) => e.id === item.id);
    if (this.cartItems[ind].count < val) {
      this.increaseCartItem(this.cartItems[ind]);
    } else {
      this.decreaseCartItem(this.cartItems[ind]);
    }
    this.cartItems[ind].total = parseInt(item.price.value) * parseInt(val);
    this.cartItems[ind].count = val;
    this.calculateTotal();
  }

  removeItem(event: Event, item: any) {
    this.loading = true;
    this.productService.removeCartItem({ sub_product: item.id }).subscribe(
      (data) => {
        this.loading = false;
        this.getCartDetails();
      },
      (error) => {
        this.loading = false;
      }
    );
  }
  decreaseCartItem(item: any) {
    console.log("In decreased");
    this.loading = true;
    this.productService.removeCartOneItem({ sub_product: item.id }).subscribe(
      (data) => {
        this.loading = false;
        this.getCartDetails();
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  increaseCartItem(item: any) {
    this.loading = true;
    this.productService.addToCart({ sub_product: item.id }).subscribe(
      (data) => {
        this.loading = false;
        this.getCartDetails();
      },
      (error) => {
        this.loading = false;
      }
    );
  }
}
