import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss'
})
export class ViewPostComponent {

  postId = this.activatedRoute.snapshot.params['id'];
  postData: any;

  constructor(private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,){}

    ngOnInit(){

    }

    getPostById(){
      this.postService.getPostById(this.postId).subscribe(res=>{
        this.postData = res;
      }, error=>{
        this.matSnackBar.open("Something Went Wrong!", "ok")
      })
    }

}
