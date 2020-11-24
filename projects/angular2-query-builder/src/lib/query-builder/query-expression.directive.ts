import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({selector: '[queryExpression]'})
export class QueryExpressionDirective {
  constructor(public template: TemplateRef<any>) {}
}
