import { BlogList } from './model/blog-list.model';
import { BlogsService } from './service/blogs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogList: BlogList[] = [];
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.onGetBlogsList();
  }

  getPageHeaderContent(): string {
    return `Total Users: ${this.blogList.length}`;
  }

  onGetBlogsList() {
    this.blogsService.getBlogsList().subscribe(
      (res) => {
        this.blogList = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
