export class AppConstant {
  // Add this class to make body height 100%
  static readonly FULL_HEIGHT_DOCUMENT_CLASS = "full-height";

  // Local Storage Keys
  static readonly LS_TOKEN_KEY = "token";
  static readonly LS_PROFILE_STATUS_KEY = "__PPP_STORAGE__";

  // OTP Interval
  static readonly OTP_TIME_INTERVAL = 30;

  // Validator Regex
  static readonly PHONE_PATTERN = /^[6789]{1}[0-9]{9}$/;
  // tslint:disable-next-line:max-line-length
  static readonly EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  static readonly DEFAULT_PAGE_LIMIT = 21;

  static readonly DEFAULT_SEARCH_PARAMS: { [key: string]: string | number } = {
    limit: AppConstant.DEFAULT_PAGE_LIMIT,
  };
}
