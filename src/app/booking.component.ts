import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from './posts.service'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  template: `

<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

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

input[type=submit] {
  background-color: #6B78AF;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15;

button {
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    transition: 0.3s;
    background: #6B78AF;  
  }
  
button:hover {
    background: rgba(0, 0, 0, 0.432);
    color: white;
  }
}

input[type=submit]:hover {
  background: rgba(0, 0, 0, 0.644);
}

.container {
  border-radius: 5px;
  padding: 20px; 
  float: left;
  background: #6B78AF; 
}

</style>


<form [formGroup]="myForm" novalidate (ngSubmit)="onSubmit(myForm)">
<div class="register-box">
  <h1>Booking Application</h1>

    <input type="text" formControlName="name" id="name" placeholder="Your name" />


    <input type="text" formControlName="nric" id="nric" placeholder="Your NRIC" />

<select id="room" formControlName="room">
  <option value="single bed">Single bed</option>
  <option value="super single bed">Super Single bed</option>
  <option value="queen size bed">Queen Size bed</option>
  <option value="king size bed">King Size bed</option>
</select>


  <input type="submit" value="Submit"/>
</div>
</form>
  `,
})
export class BookingComponent implements OnInit {

  myForm: FormGroup;
  posts: any = [];  

  constructor(private fb: FormBuilder, private authService: PostsService,
    private router: Router) {

    // // Retrieve posts from the API     
    // this.authService.getAllPosts().subscribe(posts => {       
    //   this.posts = posts;     
    // });   
     }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      nric: '',
      room: ''
    });
  }
  onSubmit() { 
    this.authService.regUser(this.myForm.value.name, 
      this.myForm.value.nric, this.myForm.value.room).subscribe(); 
      this.router.navigateByUrl('/track'); }

}