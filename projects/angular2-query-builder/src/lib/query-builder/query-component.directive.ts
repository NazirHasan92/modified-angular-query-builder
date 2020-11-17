import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({selector: '[queryComponent]'})
export class QueryComponentDirective {
  /** Unique name for query input type. */
  @Input()
  get queryComponentType(): string { return this._type; }
  set queryComponentType(value: string) {
    // If the directive is set without a type (updated programatically), then this setter will
    // trigger with an empty string and should not overwrite the programatically set value.
    if (!value) { return; }
    this._type = value;
  }
  private _type: string;

  constructor(public template: TemplateRef<any>) {}
}
