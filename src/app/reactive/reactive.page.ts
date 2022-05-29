import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.comp';
import { CheckboxComponent } from '../checkbox/checkbox.comp';
import { TextInputComponent } from '../text-input/text-input.comp';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TextInputComponent, ButtonComponent, CheckboxComponent],
  templateUrl: './reactive.page.html',
  styleUrls: ['./reactive.page.scss']
})
export class ReactivePage implements OnInit {

  formGroup = new FormGroup({
    'text1': new FormControl(''),
    'check1': new FormControl(false),
  });
  
  logs: { msg: string, event: any }[] = [];

  constructor() { }

  ngOnInit(): void {
    const v = this.formGroup.value
  }


  emit(msg: string, event: any): void {
    this.logs.unshift({ msg, event });
  }
}
