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


.container {
  transition: 0.3s;
  padding: 20px;
  opacity: 0.4;
}

.container:hover {
  opacity: 1;
}

.container1 {
  border-radius: 5px;
  padding: 25px; 
  float: left;
  background: rgba(0, 0, 0, 0.6);
}

img {
  border-radius: 10%;
}

#modalbg{
  width:100%;
  height:100vh;
  position: absolute;
  left: 0%;
  top: 0%;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
}

#modalbox{
  width:50%;
  height:350px;
  z-index: 70;
  padding: 20px;
  color: white;
}

#modalbg1{
  width:100%;
  height:100vh;
  position: absolute;
  left: 0%;
  top: 0%;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
}

#modalbox1{
  width:50%;
  height:350px;
  z-index: 70;
  padding: 20px;
  color: white;
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
  
  btn:hover {
    background: rgba(0, 0, 0, 0.432)!important;
    color: white!important;
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

.position3 {

  position: absolute;
  bottom: 7%;
  right: 50%;
}
</style>

<table>

<tr>

<td class="container" (click)="openModal(room)" *ngFor="let room of rooms" align ="center">

<img src="{{room.image}}" height="200px" width="300px" />

<h4>{{room.name}}</h4>

</td>

</tr>

</table>

<div class="position3">
<a (click)="openModal1()" class="tooltip">
  <img src="assets/viewc.png" height="55px" width="50px"> 
  <span class="tooltiptext">Reviews</span>
</a>
</div>

<div id="modalbg" style="display:none">
<br>
<div id="modalbox">
<table style="border-radius: 5px;padding: 20px;border: 1px solid #ccc;">
<tr>
<td colspan="2">
<h2>{{room.name}}</h2>
</td>
</tr>
<tr>
<td >
<p>{{room.description}}</p>
</td>
<td>
<img src="{{room.image}}" height="200px" width="300px" />
</td>
</tr>
<tr>
<td>
</td>
<td>
<br>
<button
class ="btn" 
style="
float: right;border: none;
color: white;
padding: 16px 32px;
text-align: center;
font-size: 16px;
margin: 4px 2px;
transition: 0.3s;
background: #6B78AF;"
(click)="closeModal(room)">Cancel</button>
</td>
</tr>
</table>
</div>
</div>


<div id="modalbg1" style="display:none">
<br>
<div id="modalbox1">
<table>
<tr>
<td>
<h2>Reviews</h2>
</td>
</tr>
<tr>
<td>
<div class="container1" *ngFor="let quote of quotes" style="float: left; padding: 10px;">
<h4>Name:    {{quote.name}}</h4>
<h4>Email:   {{quote.email}}</h4>
<h4>Rating:  {{quote.rating}}</h4>
<h4>Comment: {{quote.comment}}</h4>
<button
class ="btn" 
style="
float: right;border: none;
color: white;
padding: 16px 32px;
text-align: center;
font-size: 16px;
margin: 4px 2px;
transition: 0.3s;
background: #6B78AF;"
(click)="closeModal1()">Cancel</button>
</div>
</td>
</tr>
</table>
`,
})
export class BookingComponent implements OnInit {

  rooms: any = [];
  public room: any = {};
  quotes: any[];

  openModal(room) {
    const modal = document.getElementById('modalbg');
    modal.style.display = 'flex';

    this.room.name = room.name;
    this.room.image = room.image;
    this.room.description = room.description;
    this.room.id = room.id;

  }

  closeModal(room) {
    const modal = document.getElementById('modalbg');
    modal.style.display = 'none';

  }

  openModal1() {
    const modal = document.getElementById('modalbg1');
    modal.style.display = 'flex';

  }

  closeModal1() {
    const modal = document.getElementById('modalbg1');
    modal.style.display = 'none';

  }

  getComment(){
    this.postsService.getComment().subscribe(quotes => {       
      this.quotes = quotes;     
  });
}

getRoom(){
  this.postsService.getRoom().subscribe(rooms => {       
    this.rooms = rooms;     
});
}

  constructor(private fb: FormBuilder, private postsService: PostsService,
    private router: Router) {  
      this.getRoom();
      this.getComment();
    }

  ngOnInit() {
    window.onclick = (event) => {
      const modal = document.getElementById('modalbg');
      const modal1 = document.getElementById('modalbg1');
      if (event.target === modal) {
        modal.style.display = "none";
      }

      else if (event.target === modal){
        modal.style.display="none";
      }
    }
  }

  
}