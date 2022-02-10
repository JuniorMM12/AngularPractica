import { Component, Input, OnInit } from '@angular/core';
import { InfohomeService } from 'src/app/services/infohome.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input() blogpage: any = [];

  data: any[] = [];

  constructor(private dataBlog: InfohomeService) {
    setTimeout(()=>{
      if (this.blogpage.length == 0) {
        this.data = dataBlog.getDataBlog();
      }else{
        this.data = this.blogpage
      }
    },2000)
  }

  ngOnInit(): void {
  }

}
