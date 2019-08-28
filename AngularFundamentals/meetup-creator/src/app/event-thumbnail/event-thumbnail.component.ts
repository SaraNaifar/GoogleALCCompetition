import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  //we use the decorator input to tell angular that this component is receving data from other component
  @Input() eventThumbnail:any;
  @Output() eventClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  handleClickMe(){
    this.eventClick.emit(this.eventThumbnail.name);
    
  }
}