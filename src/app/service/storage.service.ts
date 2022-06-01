import { Injectable } from '@angular/core';
import {Contact} from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   *  Permet de save le nouveau contact 
   * dans le local storage
   */
   saveContacts(contacts:Contact[]){
    localStorage.setItem('contacts', JSON.stringify(contacts));
   }

    /**
     * Permet de recuperer les contacts du storage
     */
    getContacts():Contact[]{
      const contacts = JSON.parse( localStorage.getItem('contacts') !);

      if(contacts !== null){
        return contacts;
      }
      
      else{
        return [];
      }

    }


  }

