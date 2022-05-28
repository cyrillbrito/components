import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { wrapperValueAccessor } from '../value-accessor';

@Component({
  selector: 'cb-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkbox.comp.html',
  styleUrls: ['./checkbox.comp.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements OnInit {

  control = wrapperValueAccessor();

  @HostBinding('class.disabled') get disabled() { return this.control.disabled }

  constructor() { }

  ngOnInit(): void {
  }

}
