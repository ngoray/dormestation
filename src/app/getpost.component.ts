import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-track',
  template: `

    <style>
    .container {
      border-radius: 5px;
      padding: 20px; 
      float: left;
      background: rgba(0, 0, 0, 0.6);
    }

    .btn {
      border: none;
      color: white;
      padding: 16px 32px;
      text-align: center;
      font-size: 16px;
      margin: 4px 2px;
      transition: 0.3s;
      background: #6B78AF;  
      width: 100%;
    }
    
    .btn:hover {
      background: rgba(0, 0, 0, 0.432);
      color: white;
    }

  input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }

    </style>

    <div class="container" style="float: left; padding: 10px;">
    <h4>Name:     {{post.name}}</h4>
    <h4>NRIC:     {{post.nric}}</h4>
    <h4>RoomType: {{post.room}}</h4>
    <button class="btn" (click)="deletePost(post._id)">Cancel Application</button>  
    </div>
    `,
})

export class GetpostComponent implements OnInit {

  ngOnInit() {
    this.postsService.getPost(this.route.snapshot.params['nric']).subscribe(post => {
      this.post = post;
    });
  }

  post: any = {};

  constructor(private postsService: PostsService, private router: Router, private route: ActivatedRoute) { }

  getPost() {

  }
}

