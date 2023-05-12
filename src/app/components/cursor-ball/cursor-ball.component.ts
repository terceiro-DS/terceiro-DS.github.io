import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cursor-ball',
  templateUrl: './cursor-ball.component.html',
  styleUrls: ['./cursor-ball.component.scss']
})
export class CursorBallComponent implements OnInit {

  @ViewChild('cursor', {read: ElementRef, static: false})
  public cursor: ElementRef | any;

  @ViewChild('cursorpointer', {read: ElementRef, static: false})
  public cursor2: ElementRef | any;

  public x: number | any;
  public y: number | any;
  public enabled = true;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    let a: any = this.el.nativeElement.querySelectorAll('a');

    document.addEventListener('mousemove', e => {
      this.x = e.clientX;
      this.y = e.clientY;

      this.cursor.nativeElement.style.transform = `translate3d(calc(${this.x}px - 50%), calc(${this.y}px - 50%), 0)`;

      this.cursor2.nativeElement.style.top = `${this.y}px`;
      this.cursor2.nativeElement.style.left = `${this.x}px`;
    });

    document.addEventListener('mousedown', () => {
      this.cursor.nativeElement.classList.add('click');
      this.cursor2.nativeElement.classList.add('cursorinnerhover')
    });

    document.addEventListener('mouseup', () => {
      this.cursor.nativeElement.classList.remove('click')
      this.cursor2.nativeElement.classList.remove('cursorinnerhover')
    });

    a.forEach((item: any) => {
      item.addEventListener('mouseover', () => {
        this.cursor.nativeElement.classList.add('hover');
      });
      item.addEventListener('mouseleave', () => {
        this.cursor.nativeElement.classList.remove('hover');
      });
    })
  }
}
