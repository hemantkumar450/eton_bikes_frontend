import { Directive, Input, HostBinding } from "@angular/core";
import { environment } from 'src/environments/environment';
@Directive({
  selector: "img[default]",
  host: {
    "(error)": "updateUrl()",
    "(load)": "load()",
    "[src]": "src",
  },
})
export class DefaultImageDirective {
  @Input() src: string;
  @Input() default: string;
  @HostBinding("class") className;
 noImage = environment.noImagePath
  updateUrl() {
      this.default = this.default ? this.default : this.noImage;
      console.log(this.default, 'default image');
    this.src = this.default;
  }
  load() {
    console.log(this.default, 'default image');
    //   this.className = 'image-loaded';
  }
}
