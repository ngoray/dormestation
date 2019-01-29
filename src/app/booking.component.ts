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
</div>`,
})
export class BookingComponent implements OnInit {

  rooms: any = [];
  public room: any = {};

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

  constructor(private fb: FormBuilder, private postsService: PostsService,
    private router: Router) {  

        this.postsService.getRoom().subscribe(rooms => {       
          this.rooms = rooms;   

      });
    }

  ngOnInit() {
    window.onclick = (event) => {
      const modal = document.getElementById('modalbg');
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  }

}