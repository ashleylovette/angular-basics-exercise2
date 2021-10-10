import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  title: string = "Whatever you want!";
  content: string = "Some content goes here.";
  isTechRelated: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    return this.isTechRelated = !this.isTechRelated;
  }

}
