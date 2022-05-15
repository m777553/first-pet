import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {HeaderModule} from "../common/header/header.module";
import {PageTplModule} from "../common/page-tpl/page-tpl.module";
import {FooterModule} from "../common/footer/footer.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HeaderModule, PageTplModule, FooterModule],
  exports: [HomeComponent]
})

export class HomeModule{}
