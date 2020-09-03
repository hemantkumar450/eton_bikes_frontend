export class PaymentDetail {
  appId: string;
  customerEmail: string;
  customerName: string;
  customerPhone: number;
  notifyUrl: string;
  orderAmount: 999;
  orderCurrency: string;
  orderId: string;
  orderNote: string;
  paymentToken: string;
}

export class PaymentMethod {
  bankCode: number;
  walletCode: number;
  upiCode: number;
  paymentOption: string;
  card: paymentBank = new paymentBank();
  nb: PaymentBankAndWallet = new PaymentBankAndWallet();
  upi: PaymentUpi = new PaymentUpi();
  wallet: PaymentBankAndWallet = new PaymentBankAndWallet();
}

export class paymentBank {
  number: any;
  cvv: string;
  expiryMonth: string;
  expiryYear: string;
  holder: string;
}

export class PaymentBankAndWallet {
  code: number;
}

export class PaymentUpi {
  vpa: string;
}
