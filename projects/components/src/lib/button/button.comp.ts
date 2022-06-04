import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cb-button',
  standalone: true,
  imports: [],
  templateUrl: './button.comp.html',
  styleUrls: ['./button.comp.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input() disabled: boolean;

  @Output() cbClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
}
