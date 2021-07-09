import { Component,  EventEmitter,  forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }],
})

export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() label;
  @Input() placeholder: string = "";
  value;
  @Input() type;
  @Input() disabled: boolean;
  @Input() classList;

  private onChange = (_: any) => { };
  private onTouched = (_: any) => { };
  isVisible = false;

  constructor() { }
  ngOnInit(): void {
  }

  emitChange() {
    this.onChange(this.value);
  }

  // 
  writeValue(value: any) {
    this.value = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState(isDisable: boolean) {
  }
}
