import { Component, Input, OnInit } from '@angular/core';
import { InfohomeService } from 'src/app/services/infohome.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
  
})
export class BlogPageComponent implements OnInit {

  dataBlog: any[];

  constructor(private serviceBlog: InfohomeService) {
    this.ocultarBarra();
    this.dataBlog = serviceBlog.dataBlogPage;
  }

  ngOnInit(): void {
  }
  ocultarBarra() {
    let parent = document.getElementById("container").parentElement.parentElement;
    parent.className = "site-header";
    let h1 = document.getElementById("titulo").style.display = "none";
  }
}
