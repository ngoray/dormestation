import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, state, transition, trigger, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  template: `
  <style>
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

a{
  text-decoration: none;
  color: white;
}

.container {
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.432);
  padding: 20px;
  width: 80%;
  position: absolute;
  bottom: 8%;
  left: 13%;
}

input[type=text], select, textarea {
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;

  [type="date"] {
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVOD5BrUAnsG1rvlXA_wXTmgNZxJ3Y-MS2hMq49hryiN_q9ru1A");
  }

  input[type=text], select, textarea {
    width: 90%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }
}
</style>

<div style="position: absolute; top:30%; left:15%;" align="center">
    <p><font size="5">Taking a break from your busy life?</font></p>  
    <h1><font size="10">Relax Your Mind</font></h1>
    <p><font size="5">At Dormestation, we provide explicit services and provide the most wonderful experience to our guests during their stay</font></p> 
    <p><font size="5">Refunds are Guaranteed if our guests are not satisfied</font></p> 
</div>

<form [formGroup]="myForm" novalidate (ngSubmit)="onSubmit(myForm)">
<table class="container">
<tr>
<td>Name</td>
<td>NRIC/FIN</td>
<td>No. of Guest</td>
<td align="center" rowspan="4">
<button type="submit" class="btn"><font size="4">Book Now
</font>
</button>
</td>
</tr>
<tr>
<td>
<input type="text" formControlName="name" id="name" placeholder="Your name" required>
</td>
<td>
<input type="text" formControlName="nric" id="nric" placeholder="Your NRIC" required>
</td>
<td>
<select id="guest" formControlName="guest" name="guest" required>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
</td>
</tr>
<tr>
<td>Check-In Date</td>
<td>Check-Out Date</td>
<td>Type of Room</td>
</tr>
<tr>
<td>
<input formControlName="checkin" style="width:90%; padding: 12px;border: 1px solid #ccc;border-radius: 4px;box-sizing: border-box;margin-top: 6px;margin-bottom: 16px;resize: vertical;" id="check-in" type="date" required>
</td>
<td>
<input formControlName="checkout" style="width:90%; padding: 12px;border: 1px solid #ccc;border-radius: 4px;box-sizing: border-box;margin-top: 6px;margin-bottom: 16px;resize: vertical;" id="check-out" type="date" required>
</td>
<td>
<select id="room" formControlName="room" required>
  <option value="single bed">Single bed</option>
  <option value="super single bed">Super Single bed</option>
  <option value="queen size bed">Queen Size bed</option>
  <option value="king size bed">King Size bed</option>
</select>
</td>
</tr>
</table>
</form>
  `,

  animations:[
    trigger('show', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate(200, style({ opacity: 1 }))
        ]),
        transition(':leave', [
            style({ opacity: 1 }),
            animate(300, style({ opacity: 0 }))
        ])
    ])
  ]


  
})
export class HomeComponent implements OnInit  {

  myForm: FormGroup;
  posts: any = [];  

  constructor(private fb: FormBuilder, private authService: PostsService,
    private router: Router) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      nric: '',
      room: '',
      guest: '',
      checkin: '',
      checkout: '',
      
    });
  }
  onSubmit() { 
    this.authService.regUser(this.myForm.value.name, 
      this.myForm.value.nric, this.myForm.value.room, 
      this.myForm.value.guest, this.myForm.value.checkin, 
      this.myForm.value.checkout,).subscribe(); 
      this.router.navigateByUrl('/track'); 
    }

}