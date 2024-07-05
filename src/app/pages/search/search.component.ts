import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  result: any= [];
  name: any="";

  constructor(private postService: PostService, private snackBar:MatSnackBar){}

  searchByName(){
    this.postService.searchByName(this.name).subscribe(res=>{
      this.result = res;
    }, error=>{
      this.snackBar.open("Something Went Wrong!", "Ok")
    })
  }
}

