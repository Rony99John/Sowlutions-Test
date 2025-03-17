import { Component, OnInit } from '@angular/core';
import { Posts } from './../../assets/mock-posts';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.scss'],
})
export class SearchScreenComponent implements OnInit {
  searchValue: string = '';
  posts = Posts;

  constructor() {}

  ngOnInit(): void {}

  get filteredPosts() {
    if (!this.searchValue) {
      return this.posts;
    }
    const lowerCasesearchValue = this.searchValue.toLowerCase();
    return this.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerCasesearchValue) ||
        post.date.toLowerCase().includes(lowerCasesearchValue) ||
        post.textBody.toLowerCase().includes(lowerCasesearchValue)
    );
  }

  highlightText(text: string): string {
    if (!this.searchValue) return text;
    const searchValue = this.searchValue.toLowerCase();
    const regex = new RegExp(`(${searchValue})`, 'gi');
    return text.replace(regex, `<mark>$1</mark>`);
  }
}
