import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.scss'
})
export class ViewAllComponent {

  allPosts:any;

  constructor(private postService: PostService,
    private snackBar: MatSnackBar){}

  ngOnInit(){
    this.getAllPosts();
  }

  getAllPosts(){
    this.postService.getAllPosts().subscribe(res=>{
      console.log(res);
      this.allPosts = res;
    }, error=>{
      this.snackBar.open("Something went wrong !", "ok")
    }
  )
  }
}
