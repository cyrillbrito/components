import { ChangeDetectionStrategy, Component, forwardRef, HostBinding, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';

export type SelectOption = {
  value: string,
  label: string,
}

/**
 * TODO:
 * - Nullable
 * - Generic options
 * - Option Template pass the generic option
 */
@Component({
  selector: 'cb-select',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SelectComponent), multi: true }],
  templateUrl: './select.comp.html',
  styleUrls: ['./select.comp.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements ControlValueAccessor {

  @HostBinding('class.disabled') disabled: boolean;

  @ViewChild('trigger') trigger: CdkOverlayOrigin;

  @Input() options: SelectOption[];

  selected?: SelectOption;
  isOpen: boolean;
  width: number;

  private onChange: (option: string) => void;
  private onTouched: () => void;

  constructor() { }

  writeValue(value: string): void {
    this.selected = this.options.find(option => option.value === value);
  }

  registerOnChange(fn: any): void { this.onChange = fn }
  registerOnTouched(fn: any): void { this.onTouched = fn }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  blur() { this.onTouched() }

  clickSelect(option: SelectOption): void {
    this.select(option);
    this.close();
  }

  private select(option: SelectOption): void {
    this.selected = option;
    this.onChange(option.value);
  }

  keydown(event: KeyboardEvent): void {
    if (event.key === ' ' || event.key === 'Enter') {
      this.toggle();
      event.preventDefault();
    } else if (event.key === 'Escape') {
      this.close();
      event.preventDefault();
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      this.selectNext();
      event.preventDefault();
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      this.selectPrevious();
      event.preventDefault();
    }
  }

  toggle(): void {
    this.isOpen ? this.close() : this.open();
  }

  open(): void {
    const select = this.trigger.elementRef.nativeElement as Element;
    this.width = select.getBoundingClientRect().width;
    this.isOpen = true;

  }

  close(): void {
    this.isOpen = false;
  }

  private selectNext(): void {
    const index = this.selectedIndex();
    if (index < this.options.length - 1) {
      this.select(this.options[index + 1])
    }
  }

  private selectPrevious(): void {
    const index = this.selectedIndex();
    if (0 < index) {
      this.select(this.options[index - 1])
    }
  }

  private selectedIndex(): number {
    return this.selected == null ? -1 : this.options.indexOf(this.selected);
  }
}
