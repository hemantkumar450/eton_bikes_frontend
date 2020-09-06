import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'faqs',
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./privacy/privacy.module').then(m => m.PrivacyModule)
  },
  {
    path: 'terms-condition',
    loadChildren: () => import('./terms/terms.module').then(m => m.TermsModule)
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: 'refund',
    loadChildren: () =>
      import('./refund/refund.module').then(m => m.RefundModule)
  }
];
