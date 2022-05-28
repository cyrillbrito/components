import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.comp';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss']
})
export class ButtonPage implements OnInit {

  content = 'Button text';
  disabled: boolean;

  logs: { msg: string, event: any }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  emit(msg: string, event: any): void {
    this.logs.unshift({ msg, event });
  }
}
