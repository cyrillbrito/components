import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextComponent } from './text.comp';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule, TextComponent],
  templateUrl: './text.page.html',
  styleUrls: ['./text.page.scss']
})
export class TextPage implements OnInit {

  content: string;
  disabled: boolean;

  logs: { msg: string, event: any }[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  emit(msg: string, event: any): void {
    this.logs.unshift({ msg, event });
  }
}
