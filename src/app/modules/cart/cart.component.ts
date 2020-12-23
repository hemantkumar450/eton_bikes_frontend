import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "src/app/core/services/product.service";

@Component({
  selector: "app-wheels",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.getCartDetails();
  }

  route() {
    this.router.navigateByUrl("/");
  }

  getCartDetails() {
    this.productService.getCartDetails().subscribe((res) => {
      console.log(res);
    });
  }
}
