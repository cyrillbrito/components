import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, style, transition, animate } from '@angular/animations';
import { ButtonComponent } from '../button/button.comp';


@Component({
  selector: 'cb-toast',
  standalone: true,
  imports: [BrowserAnimationsModule, ButtonComponent],
  templateUrl: './toast.comp.html',
  styleUrls: ['./toast.comp.scss'],
  animations: [
    trigger('enterLeave', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100px)' }),
        animate('250ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('250ms', style({ opacity: 0, transform: 'translateX(100px)' })),
      ]),
    ]),
  ],
  // host: {
  //   // '@fadeSlideInOut': 'a'
  // },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent implements OnInit {

  @Input() type: 'success' | 'error';
  @Input() text: string;

  @Output() closed = new EventEmitter<void>();

  @HostBinding('@enterLeave') enterLeave = true;

  constructor() { }

  ngOnInit(): void {
  }

}
