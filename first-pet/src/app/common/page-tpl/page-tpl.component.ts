import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'pet-page-tpl',
  templateUrl: 'page-tpl.component.html',
  styleUrls: ['page-tpl.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PageTplComponent{}
