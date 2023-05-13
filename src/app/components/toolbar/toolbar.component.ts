import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  isContentHidden = true;
  currentRoute?: string;

  constructor(private route: Router) { }

  toggleContent() {
    this.isContentHidden = !this.isContentHidden;
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  ngAfterContentChecked() {
    const formattedText = this.capitalizeFirstLetter(this.route.url.replace('/', ''));
    this.currentRoute = formattedText;
  }

}
