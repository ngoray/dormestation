import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  regUser(username: string, nric: string, room: string) {
    return this.http.get('/api/reguser/' 
    + username + "/" + nric + "/" + room );
  }
  authUser(username: string, nric: string) {
    return this.http.get('/api/authuser/' 
    + username + "/" + nric);
  }

  setSecureToken(secure_token: string) {
    sessionStorage.setItem("LoggedIn", secure_token)
  }

  getSecureToken() {
    return sessionStorage.getItem("LoggedIn")
  }
  
  setUserName(username: string) {
    sessionStorage.setItem("UserName", username);
  }

  getUserName() {
    return sessionStorage.getItem("UserName")
  }

  logout() {
    sessionStorage.removeItem("LoggedIn"); 
    sessionStorage.removeItem("UserName");
  }

  getAllPosts() {    
    return this.http.get<any[]>('./api/posts');   
  }

  deletePost(id: string) { 
    return this.http.delete<any[]>('./api/posts/' + id);   
  }  

  updatePost(id: string, booking) {
    return this.http.put(`./api/booking/update/${id}`, booking);
  }

  getPost(keyword: string) {
    return this.http.get('./api/' + keyword);

  }

  getComment() {    
    return this.http.get<any[]>('./api/quotes');   
  }

  addComment(name: string, email: string, rating: string, comment: string){
    return this.http.get('/api/quotes/' 
    + name + "/" + email + "/" + rating + "/" + comment );
  }
}

