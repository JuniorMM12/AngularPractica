import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfohomeService } from 'src/app/services/infohome.service';

@Component({
  selector: 'app-info-publication',
  templateUrl: './info-publication.component.html',
  styleUrls: ['./info-publication.component.css']
})
export class InfoPublicationComponent implements OnInit {
  data: object;
  id: number;
  constructor(private infoPublication: InfohomeService,
    private activeRouter: ActivatedRoute) {
    this.ocultarBarra();

    let id = activeRouter.params.subscribe(parametro => {
      this.id = parametro.id;
    })
    this.data = infoPublication.getInfoPublication(this.id);
    this.organizarImg(this.data);
  }

  ngOnInit(): void {
  }

  organizarImg(data: object) {
    let seccion_img;
    setTimeout(() => {
      seccion_img = document.getElementById("img-info");
      seccion_img.style.backgroundImage = "`url(${data.img})`";
      seccion_img.style.backgroundSize = "cover";
      seccion_img.style.backgroundPosition = "center center";
      seccion_img.style.height = "100vh";
      seccion_img.style.maxHeight  = "750px";
    }, 1000)

  }

  ocultarBarra() {
    let parent = document.getElementById("container").parentElement.parentElement;
    parent.className = "site-header";
    let h1 = document.getElementById("titulo").style.display = "none";
  }

}
