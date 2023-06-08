import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'slide-in');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const elementPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + window.innerHeight;

    if (scrollPosition > elementPosition) {
      this.renderer.addClass(this.el.nativeElement, 'slide-in-active');
    }
  }
}
