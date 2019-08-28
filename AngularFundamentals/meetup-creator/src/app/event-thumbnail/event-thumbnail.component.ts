import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  //we use the decorator input to tell angular that this component is receving data from its parent component
  @Input() eventThumbnail:any;
    //we use the decorator input to tell angular that this component is emmiting data to its parent component

  @Output() eventClick = new EventEmitter();
  someVar:any= "saroooora";
  constructor() { }

  ngOnInit() {
  }
  
  handleClickMe(){
    this.eventClick.emit(this.eventThumbnail.name);
    
  }
}
