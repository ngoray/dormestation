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
      border: 1px solid #ccc; 
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
    
    .position3 {

      position: absolute;
      bottom: 7%;
      right: 7%;
    }

    .tooltip {
      position: relative;
      display: inline-block;
      border-bottom: 1px dotted black;
    }
    
    .tooltip .tooltiptext {
      visibility: hidden;
      width: 120px;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;
      
      /* Position the tooltip */
      position: absolute;
      z-index: 1;
      top: -5px;
      right: 105%;
    }
    
    .tooltip:hover .tooltiptext {
      visibility: visible;
    }
    
    </style>

    <div class="container">
    <table>
    <tr>
    <td><h2>{{post.name}}'s Application</h2></td>
    <td></td>
    </tr>
    <tr>
    <td colspan="2">
    <label>Name: </label>
    <input type="text" value="{{post.name}}" disabled>
    </td>
    </tr>
    <tr>
    <td colspan="2">
    <label>NRIC: </label>
    <input type="text" value="{{post.nric}}" disabled>
    </td>
    </tr>
    <tr>
    <td>
    <label>RoomType: </label>
    <input type="text" value="{{post.room}}" disabled>
    </td>
    <td>
    <label>No. Of Guest: </label>
    <input type="text" value="{{post.guest}}" disabled>
    </td>
    </tr>
    <tr>
    <td>
    <label>Check-in Date: </label>
    <input type="text" value="{{post.checkin}}" disabled>
    </td>
    <td>
    <label>Check-out Date: </label>
    <input type="text" value="{{post.checkout}}" disabled>
    </td>
    </tr>
    <tr>
    <td colspan="2"> <button class="btn" (click)="delete(post._id)">Cancel Application</button></td>
    </tr>
    </table> 
    </div>

    <div class="position3">
          <a (click)="logout()" class="tooltip">
            <img src="assets/logout.png" height="45px" width="50px"> 
            <span class="tooltiptext">Logout</span>
          </a>
    </div>
    `,
})

export class GetpostComponent implements OnInit {

  ngOnInit() {
    this.postsService.getPost(this.route.snapshot.params['nric']).subscribe(post => {
      this.post = post;
    });
  }

  logout(){
    this.postsService.logout();    
    this.router.navigateByUrl('/track');
  }
  post: any = {};

  constructor(private postsService: PostsService, private router: Router, private route: ActivatedRoute) { }

  getPost() {

  }

  deletePost(id){
    alert("Do you want to remove the booking application?");   
    this.postsService.deletePost(id).subscribe(posts => {      
    this.getPost(); 
    });     
  }

  delete(id){
    this.deletePost(id);
    this.router.navigateByUrl('/track');
  }
}

