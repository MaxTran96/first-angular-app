import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  greeting:any;
  constructor() {
    console.log('constructor ran ...');
  }

  ngOnInit() {
  	console.log('ngOnInit ran ...');
  	this.name = 'Max Tran';
  	this.age = 22;
  	this.email = 'maxtran3005@gmail.com'
  	this.address={
  	  street: '740 North 32nd Street',
  	  city: 'Renton',
  	  state:'WA'

  	}
  	this.hobbies = ['write code', 'dance', 'listen to music'];
  	this.greeting = "hello";

  }

  onClick(){
  	console.log('HELLO');
  	this.name='Loc Tran';
  	this.hobbies.push('New Hobby');
  }
  addHobby(hobby){
  	console.log(hobby);
  	this.hobbies.unshift(hobby);
  	return false;
  }

  deleteHobby(hobby){
  	console.log('Hobby deleted');
  	for(let i = 0;i<this.hobbies.length;i++){
  		if(this.hobbies[i] == hobby){
  			this.hobbies.splice(i,1);
  		}
  	}
  }

}
interface Address{
	street:string,
	city:string,
	state:string
}
