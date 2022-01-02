import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent implements OnInit {
  topHeadlinesData:any[]=[];
  constructor(private api:NewsapiService) { }

  ngOnInit(): void {
    this.api.topHeadlines().subscribe(result=>{
      console.log(result)
      this.topHeadlinesData=result.articles;
    })
  }

}
