import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: 'span[classeVol][nbBagages]',
  standalone: true
})
export class LimiteBagagesDirective implements OnChanges {

  @Input() classeVol!: string;
  @Input() nbBagages!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    const max = {
      STANDARD: 1,
      BUSINESS: 2,
      PREMIUM: 3
    };

    const limite = max[this.classeVol?.toUpperCase() as keyof typeof max] ?? 0;

    if (this.nbBagages > limite) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#ffcccc');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  }
}
