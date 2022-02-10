import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mostrar: boolean = true;
  constructor() {
    
  }

  ngOnInit(): void {
    
  }
  i(opcion){
    let parent = document.getElementById("container").parentElement.parentElement;
    let h1 = document.getElementById("titulo")
    if(opcion == true){
      parent.className = "site-header inicio";
      h1.style.display = "block";
    }
}
}
