import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  mostrar: boolean = false;
  constructor() {
    let parent = document.getElementById("container").parentElement.parentElement;
    parent.className = "site-header";
    let h1 = document.getElementById("titulo").style.display = "none";
  }

  ngOnInit(): void {
  }
}
