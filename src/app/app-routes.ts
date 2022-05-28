import { Routes } from '@angular/router';
import { ButtonPage } from './button/button.page';
import { CheckboxPage } from './checkbox/checkbox.page';

export const appRoutes: Routes = [
  { path: 'button', title: 'Button', component: ButtonPage },
  { path: 'checkbox', title: 'Checkbox', component: CheckboxPage },
];