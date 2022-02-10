import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'selenium-webdriver';
import { InfohomeService } from 'src/app/services/infohome.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  @Input() datosParent: any = [];
  data: any[] = [];
  botton: boolean = true;

  constructor(private dataDeparta: InfohomeService, private router: Router) {
    setTimeout(() => {
      if (this.datosParent.length == 0) {
        this.data = dataDeparta.getDataHome();
      } else {
        this.data = this.datosParent;
        this.botton = false;
      }
    }, 100);
  }

  ngOnInit(): void {
  }

  irPublications() {
    this.router.navigate(['publications'])
  }
}
