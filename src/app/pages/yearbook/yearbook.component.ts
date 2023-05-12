import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yearbook',
  templateUrl: './yearbook.component.html',
  styleUrls: ['./yearbook.component.scss']
})
export class YearbookComponent implements OnInit {
  students = [
    {
      name: 'Lorem Ipsum',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEN59-81G1RHdwO1TdxNrQl6D_Kuz_c9diBBAard0rAYG3Ggt-Ln3OBPOFc0LnA7qM_s&usqp=CAU',
      quote: 'Lorem Ipsum'
    },
  ]

  async loadHiddenElementsObserver(observer: any) {
    let hiddenElements = document.querySelectorAll('.hiddenV')
    hiddenElements.forEach((el) => observer.observe(el));
  }

  ngOnInit() {
    for (let i = 0; i < 40; i++) {
      if (!this.students[i]) {
        this.students.push(
          {
            name: 'Lorem Ipsum',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEN59-81G1RHdwO1TdxNrQl6D_Kuz_c9diBBAard0rAYG3Ggt-Ln3OBPOFc0LnA7qM_s&usqp=CAU',
            quote: 'Lorem Ipsum'
          },
        )
      }
    }
    this.students.sort((a, b) => a.name.localeCompare(b.name));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    this.loadHiddenElementsObserver(observer);
  }
}
