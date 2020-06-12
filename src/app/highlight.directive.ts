import { Directive, ElementRef, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elem: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
  this.highlight('#FFFF00');
}
@HostListener('mouseleave') onMouseLeave() {
  this.highlight(null);
}
    private highlight(color: string) {
  this.elem.nativeElement.style.backgroundColor = color;
}
}
