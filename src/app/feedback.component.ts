import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service'; 
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  template: `
  
  <style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

.text{
  width: 50%;
  padding: 12px;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;

}

.text2{
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
  width: 100%;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15;
}

input[type=submit]:hover {
  background: rgba(0, 0, 0, 0.644);
}

.container {
  border-radius: 5px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>

  <div class="container">
  <form novalidate [formGroup]="myForm" (ngSubmit)="onSubmit(myForm)">
  <h1>Feedback</h1>
  <p>Please provide your feedback below:</p>

  <div style="float:left;" class="text">
  <p>Your Name</p>
  <input type="text" id="name"  formControlName="name" class="text2" name="name" placeholder="Your name">
  </div>
  <div style="float:left;" class="text">
  <p>Email:</p>
  <input type="text" class="text2"  formControlName="email" id="email" name="Email" placeholder="example@gmail.com">
  </div>

  <h4>How do you rate your overall experience?</h4>

  <input formControlName="rating" type="radio" name="rating" value="bad">Bad <br>
  <input formControlName="rating" type="radio" name="rating" value="average">Average <br>
  <input formControlName="rating" type="radio" name="rating" value="good">Good <br><br>

  <p>Comments:</p>
  <textarea id="comment"  formControlName="comment" name="comment" placeholder="Write something.." style="height:200px"></textarea>

  <input type="submit" value="Submit">
  </form>
</div>
`,
})
export class FeedbackComponent  {

  myForm: FormGroup;
  posts: any = [];  

  constructor(private fb: FormBuilder, private authService: PostsService,
    private router: Router) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      email: '',
      rating: '',
      comment:''
    });
  }
  onSubmit() { 
    console.log(this.myForm);
    this.authService.addComment(this.myForm.value.name, 
      this.myForm.value.email, this.myForm.value.rating, this.myForm.value.comment).subscribe(); 
      this.router.navigateByUrl('/track'); }
    
}