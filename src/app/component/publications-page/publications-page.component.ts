import { Component, OnInit } from '@angular/core';
import { InfohomeService } from 'src/app/services/infohome.service';

@Component({
  selector: 'app-publications-page',
  templateUrl: './publications-page.component.html',
  styleUrls: ['./publications-page.component.css']
})
export class PublicationsPageComponent implements OnInit {

  data: any = [];
  

  constructor(private dataServicesPublications: InfohomeService) {
    this.data = dataServicesPublications.getDataPublications();
    let parent = document.getElementById("container").parentElement.parentElement;
    parent.className = "site-header";
    let h1 = document.getElementById("titulo").style.display = "none";
  }

  ngOnInit(): void {
  }

}
