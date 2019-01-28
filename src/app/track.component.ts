import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service'; 
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms'
import { keyframes } from '@angular/animations';

@Component({
    selector: 'app-track',
    template: `

    <style>
  body {font-family: Arial, Helvetica, sans-serif;}
  * {box-sizing: border-box;}
  
  input[type=text],[type=password], select, textarea {
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
  
  .btn-group button {
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    transition: 0.3s;
    background: #6B78AF; 
    cursor: pointer; /* Pointer/hand icon */
    float: left; /* Float the buttons side by side */
  }
  
  /* Clear floats (clearfix hack) */
  .btn-group:after {
    content: "";
    clear: both;
    display: table;
  }
  
  .btn-group button:not(:last-child) {
    border-right: none; /* Prevent double borders */
  }
  
  /* Add a background color on hover */
  .btn-group button:hover {
     background: rgba(0, 0, 0, 0.432);
    color: white;
  }
  </style>
  
  
  <form [formGroup]="myForm" novalidate (ngSubmit)="onSubmit(myForm)">
  <div class="login-box">
    <h1>View My Application</h1>

    <div class="textbox">
      <input type="text" formControlName="name" id="name1" placeholder="Your name" />
    </div>

    <div class="textbox">
      <input type="password" formControlName="nric" id="nric1" placeholder="NRIC" />
    </div>
    <input type="submit" value="Track"/>
  </div>
</form>
    `,
  })

export class TrackComponent implements OnInit {
    
  myForm: FormGroup;
  results: any = false;

  getPost(keyword){
    this.authService.getPost(keyword).subscribe(posts => {       
      this.posts = posts;
    });
  }     

  constructor(private fb: FormBuilder, private authService: PostsService,
    private router: Router) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      nric: ''
    });

  }

  posts: any = []; 

  onSubmit() {

  if (this.myForm.value.name == ('administrator') && this.myForm.value.nric == ('S9813266Z'))
    {
      this.authService.setSecureToken(this.myForm.value.name);
      this.router.navigateByUrl('/details');     
    }
  else if (this.myForm.value.name == ('administrator')){

    alert("Invalid NRIC please type in again");
  }
  else {
    this.authService.authUser(this.myForm.value.name,
      this.myForm.value.nric).subscribe(data => {
        this.results = data; 
        if (this.results[0].auth) 
        {   
          this.authService.setSecureToken(this.myForm.value.name);
          this.getPost(this.myForm.value.nric);
          this.router.navigateByUrl(`/getpost/${this.myForm.value.nric}`);
         }

         else {
          alert("Invalid NRIC please type in again");
         }
      });
    }
  }
}
  