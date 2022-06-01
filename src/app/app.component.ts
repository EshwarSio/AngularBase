import { Component, OnInit } from '@angular/core';
import {Contact} from './models/contact';
import { StorageService } from './service/storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {
  
  constructor(private storageService: StorageService){


  }
 
  //déclaration d'une variable
  title = 'Gestion de contacts';
  contactActif :Contact;


  //déclaration d'un objet
  unContact = {
    id:1,
    name:'Tillai',
    username: 'Eshwar',
    email : 'eshwar@gmail.com'
  };

  mesContacts:Contact[] = [
    {
      id:1,
      name:'Shigaraki Tomura',
      username: 'Shigaraki',
      email : 'Shigaraki@gmail.com'

    },
    {
      id:2,
      name:'Uchiha Madara',
      username: 'Madara',
      email : 'Goat@gmail.com'

    },
    {
      id:3,
      name:'Sosuke Aizen',
      username: 'Aizen',
      email : 'Aizen@gmail.com'

    },
    {
      id:4,
      name:'Don Quichotte Doflamingo ',
      username: 'Doflamingo',
      email : 'Doffy@gmail.com'

    }

  ];

  displayProfil(contact:Contact){
    //console.log(contact);
    this.contactActif= contact;
  }

  addContact(nouveauContact:Contact){
    this.mesContacts.push(nouveauContact);
    this.storageService.saveContacts(this.mesContacts);

    
  }

  ngOnInit():void{
    this.mesContacts = this.storageService.getContacts();
  }

  

  

  /**
   * 
   */

}

