import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service'; 
import { Router } from '@angular/router';
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
    }
    
    .btn:hover {
      background: rgba(0, 0, 0, 0.432);
      color: white;
    }

    #modalbg{
      width:100%;
      height:100vh;
      position: absolute;
      left: 0%;
      top: 0%;
      justify-content: center;
      align-items: center;
  }
  
  #modalbox{
      background: rgba(0, 0, 0, 0.9);
      width:50%;
      height:350px;
      z-index: 70;
      padding: 20px;
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

    <div class="container" *ngFor="let post of posts" style="float: left; padding: 10px;">
    <h4>Name:     {{post.name}}</h4>
    <h4>NRIC:     {{post.nric}}</h4>
    <h4>RoomType: {{post.room}}</h4>
    <button class="btn" (click)="deletePost(post._id)">Delete</button> 
    <button class="btn" (click)="openModal(post)">Update</button>    
    </div>

    <div id="modalbg" style="display:none">
    <br>
    <div id="modalbox">
    <h2>Update Data</h2>
    <div>
    <input type="text" (input)="onChangeNameUpdate($event.target.value)" value = "{{post.name}}" placeholder="name" />
    <br>
    <input type="text" (input)="onChangeNRICUpdate($event.target.value)" value = "{{post.nric}}" placeholder="nric" />
    <br>
    <select id="room" (input)="onChangeRoomUpdate($event.target.value)" formControlName="room">
      <option value="single bed">Single bed</option>
      <option value="super single bed">Super Single bed</option>
      <option value="queen size bed">Queen Size bed</option>
      <option value="king size bed">King Size bed</option>
    </select>
    <br>
    <button class ="btn" (click)="update(post._id)" id="btnUpdate">Update</button>
    <button class ="btn" (click)="closeModal(posts)" id="btnUpdate">Cancel</button>
    </div>
    </div>
    `,
  })

export class DetailsComponent implements OnInit {

  public postsUpdate: any = {
    name: '',
    nric: '',
    room: ''
  };
  
  public post: any = {};
  public postsUpdateId: any = '';

  onChangeIdUpdate(value) { this.postsUpdateId = value }
  onChangeNameUpdate(value) { this.postsUpdate.name = value }
  onChangeNRICUpdate(value) { this.postsUpdate.nric = value }
  onChangeRoomUpdate(value) { this.postsUpdate.room = value }

  update(id) {
    this.postsService.updatePost(id, this.postsUpdate).subscribe(result => {
      this.getAllPosts();
    });
    const modal = document.getElementById('modalbg');
    modal.style.display = 'none';
  }
  openModal(post) {
    const modal = document.getElementById('modalbg');
    modal.style.display = 'flex';

    this.post._id = post._id;
    this.post.name = post.name;
    this.post.nric = post.nric;
    this.post.room = post.room;

  }

  closeModal(posts) {
    const modal = document.getElementById('modalbg');
    modal.style.display = 'none';

  }

    ngOnInit() {

      window.onclick = (event) => {
        const modal = document.getElementById('modalbg');
        if (event.target === modal) {
          modal.style.display = "none";
        }
      }
    }

    getAllPosts(){
      this.postsService.getAllPosts().subscribe(posts => {       
        this.posts = posts;     
    });
  }
  
    posts: any = [];     
    constructor(private postsService: PostsService, private router: Router) {

      this.getAllPosts();

    }  
  

     deletePost(id){
      alert("Do you want to cancel your booking application?");    
      this.postsService.deletePost(id).subscribe(posts => {       
        this.getAllPosts();  
      });     
    }
}
  