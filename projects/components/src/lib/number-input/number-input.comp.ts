import { ChangeDetectionStrategy, Component, HostBinding, Injector, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { wrapperValueAccessor } from '../value-accessor';

@Component({
  selector: 'cb-number-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './number-input.comp.html',
  styleUrls: ['./number-input.comp.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumberInputComponent implements OnInit {

  control: FormControl;

  constructor(private injector: Injector) { }

  ngOnInit(): void {
    this.control = wrapperValueAccessor(this.injector);
  }

}
