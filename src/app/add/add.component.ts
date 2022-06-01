
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Contact} from '../models/contact';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Output() contactEvent  = new EventEmitter

  nouveauContact:Contact = new Contact();

  constructor() { }

  ngOnInit(): void {
  }

  submitContact(){
    this.contactEvent.emit(this.nouveauContact);

  }

}
