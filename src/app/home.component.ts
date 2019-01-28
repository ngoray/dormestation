import { Component } from '@angular/core';
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
  width: 100%;
}

input[type=text], select, textarea {
  width: 30%;
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
    width: 30%;
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
<div align="center">
    <p><font size="5">Taking a break from your busy life?</font></p>  
    <h1><font size="10">Relax Your Mind</font></h1>
    <p><font size="5">At Dormestation, we provide explicit services and provide the most wonderful experience to our guests during their stay</font></p> 
    <p><font size="5">Refunds are Guaranteed if our guests are not satisfied</font></p> 
</div>
<br>
<br>



<div class="container"> 
<label for="date">Date</label><br><br>
<input style = "width: 30%;padding: 12px;border: 1px solid #ccc;border-radius: 4px;box-sizing: border-box;margin-top: 6px;margin-bottom: 16px;resize: vertical;" type="date">

<label style="color: rgba(0, 0, 0, 0.432);; opacity: .4;" for="guest">No. of Guest</label>
<label style="position: absolute; top: 58.5%;" for="guest">No. of Guest</label>
<select hspace="20" id="guest" name="guest">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>

<button style="position: absolute; right:22%;" class="btn"><a routerLink="/booking"><font size="4">Book Now</font></a></button>

</div>
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
export class HomeComponent  {
}