import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({selector: '[queryComponent]'})
export class QueryComponentDirective {
  constructor(public template: TemplateRef<any>) {}
}
