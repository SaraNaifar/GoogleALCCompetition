import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventInitial={
    id:1,
    name:"React js meetup",
    date: "24/01/2020",
    time:"10:00 am",
    price:520.00,
    imageUrl:"/assets/images/angularconnect-shield.png",
    location: {
      adress: "Street roses",
      city:"London",
      country:"England"
    }
  }
  constructor() { }

  ngOnInit() {
  }
  handlefromchildcomponent(data){
    console.log("***********"+data)
  }
}
