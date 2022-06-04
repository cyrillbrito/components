import { InjectFlags, Injector } from "@angular/core";
import { FormControl, NgControl, FormControlName, FormGroupDirective, FormControlDirective, NgModel, ControlValueAccessor } from "@angular/forms";


/**
 * Enables a component to behave as a formControl without implementing ControlValueAccessor.
 * Call this method on the ngOnInit function of the component.
 * This works by accessing the ngControl(object that handles the formControl/ngModel)
 * and settings a fake valueAccessor and grabbing the control.
 * 
 * https://stackoverflow.com/questions/47377411/wrapping-a-formcontrol-in-angular-2
 */
export function wrapperValueAccessor(injector: Injector): FormControl {

  const ngControl = injector.get(NgControl, null, InjectFlags.Self + InjectFlags.Optional);

  if (ngControl != null) {
    ngControl.valueAccessor = EMPTY_VALUE_ACCESSOR;
  }

  if (ngControl instanceof FormControlName) {
    const formGroupDirective = ngControl.formDirective as FormGroupDirective;
    if (formGroupDirective) {
      return formGroupDirective.form.controls[ngControl.name!] as FormControl;
    }
  }

  if (ngControl instanceof FormControlDirective) {
    return ngControl.control;
  }

  if (ngControl instanceof NgModel) {
    ngControl.control.valueChanges.subscribe(x => ngControl.viewToModelUpdate(ngControl.control.value));
    return ngControl.control;
  }

  return new FormControl();
}

export const EMPTY_VALUE_ACCESSOR: ControlValueAccessor = {
  writeValue() { },
  registerOnChange() { },
  registerOnTouched() { },
};
