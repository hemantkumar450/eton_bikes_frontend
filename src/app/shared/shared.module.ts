import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TabComponent } from "./tab/tab.component";
import { TabsComponent } from "./tabs/tabs.component";

const MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
const DIRECTIVES = [];
const COMPONENTS = [TabsComponent, TabComponent];

@NgModule({
  declarations: [DIRECTIVES, COMPONENTS],
  imports: [MODULES],
  exports: [MODULES, DIRECTIVES, COMPONENTS],
  entryComponents: [],
  providers: [],
})
export class SharedModule {}
