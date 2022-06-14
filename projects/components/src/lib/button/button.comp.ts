import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'cb-button',
  standalone: true,
  imports: [],
  templateUrl: './button.comp.html',
  styleUrls: ['./button.comp.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() disabled: boolean;

  @Output() cbClick = new EventEmitter<void>();

}
