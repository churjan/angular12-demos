import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.scss'],
})
export class TechNewsComponent implements OnInit {
  topTechData: any[] = [];
  constructor(private api: NewsapiService) {}

  ngOnInit(): void {
    this.api.techHeadlines().subscribe((result) => {
      console.log(result);
      this.topTechData = result.articles;
    });
  }
}
