import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectComponent, SelectOption } from './select.comp';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectComponent],
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss']
})
export class SelectPage implements OnInit {

  content: string;
  disabled: boolean;

  options: SelectOption[] = [
    { value: 'k', label: 'ola' },
    { value: 'k2', label: 'ola2' },
    { value: 'k3', label: 'ola3' }
  ];

  logs: { msg: string, event: any }[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  emit(msg: string, event: any): void {
    this.logs.unshift({ msg, event });
  }
}
