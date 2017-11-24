import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:Http){}
  userName="";
  name="";
  location="";
  following="";
  avatar="";
  repo="";
  pageUrl="";


userLookup(){
this.http.get("https://api.github.com/users/"+this.userName)
.subscribe(
  (response:Response)=>{
    const userData=response.json();
    this.name=userData.name;
    this.avatar=userData.avatar;
    this.following=userData.following;
    this.location=userData.location;
    this.pageUrl=userData.pageUrl;
    this.repo=userData.repo;

    console.log(userData);
  }
)


}
}
