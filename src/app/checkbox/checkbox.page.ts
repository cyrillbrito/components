import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.comp';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule, CheckboxComponent],
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss']
})
export class CheckboxPage implements OnInit {

  checked: boolean;
  disabled: boolean;

  logs: { msg: string, event: any }[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  emit(msg: string, event: any): void {
    this.logs.unshift({ msg, event });
  }
}
