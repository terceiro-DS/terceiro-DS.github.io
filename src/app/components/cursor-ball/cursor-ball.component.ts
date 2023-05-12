import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-cursor-ball',
  templateUrl: './cursor-ball.component.html',
  styleUrls: ['./cursor-ball.component.scss']
})
export class CursorBallComponent implements OnInit {

  ngOnInit(): void {
    let cursor: HTMLElement | any = document.querySelector('.cursor');
    let cursorinner: any = document.querySelector('.cursor2');
    let a: any = document.querySelectorAll('a');

    document.addEventListener('mousemove', function (e) {
      let x: any = e.clientX;
      let y: any = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });

    document.addEventListener('mousemove', function (e) {
      let x: any = e.clientX;
      let y: any = e.clientY;
      cursorinner.style.left = x + 'px';
      cursorinner.style.top = y + 'px';
    });

    document.addEventListener('mousedown', function () {
      cursor.classList.add('click');
      cursorinner.classList.add('cursorinnerhover')
    });

    document.addEventListener('mouseup', function () {
      cursor.classList.remove('click')
      cursorinner.classList.remove('cursorinnerhover')
    });

    a.forEach((item: any) => {
      item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
      });
      item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    })
  }
}
