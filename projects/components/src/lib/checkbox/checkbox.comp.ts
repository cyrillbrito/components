import { ChangeDetectionStrategy, Component, HostBinding, Injector, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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

  control: FormControl;

  @HostBinding('class.disabled') get disabled() { return this.control.disabled }

  constructor(private injector: Injector) { }

  ngOnInit(): void {
    this.control = wrapperValueAccessor(this.injector);
  }

}
