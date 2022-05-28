import { Routes } from '@angular/router';
import { ButtonPage } from './button/button.page';
import { CheckboxPage } from './checkbox/checkbox.page';
import { ReactivePage } from './reactive/reactive.page';
import { SelectPage } from './select/select.page';
import { TextPage } from './text/text.page';

export const appRoutes: Routes = [
  { path: 'button', title: 'Button', component: ButtonPage },
  { path: 'checkbox', title: 'Checkbox', component: CheckboxPage },
  { path: 'text', title: 'Text', component: TextPage },
  { path: 'reactive', title: 'Reactive', component: ReactivePage },
  { path: 'select', title: 'Select', component: SelectPage },
];