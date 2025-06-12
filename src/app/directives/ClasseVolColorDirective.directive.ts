import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appClasseVolColor]',
  standalone: true
})
export class ClasseVolColorDirective implements OnChanges {

  @Input() appClasseVolColor!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appClasseVolColor']) {
      const classe = this.appClasseVolColor;
      let color = 'black';

      switch (classe?.toUpperCase()) {
        case 'BUSINESS':
          color = 'red';
          break;
        case 'PREMIUM':
          color = 'green';
          break;
        case 'STANDARD':
          color = 'blue';
          break;
      }

      this.renderer.setStyle(this.el.nativeElement, 'color', color);
    }
  }
}
