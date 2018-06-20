import { Injectable } from '@angular/core';
import { Spell } from './models/spell.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor(private http:HttpClient) { }

  getSpells(){
    let url = "https://dnd-spell-organizer.herokuapp.com/spells";
    return this.http.get(url).toPromise().then(result => {
      return result;
    });
  }

  getSpellById(spellId: number) {
    let url = "https://dnd-spell-organizer.herokuapp.com/spells/"+spellId;
    return this.http.get(url).toPromise().then(result => {
      return result;
    });
  }

  getSpellsByClass(classId: number) {
    let url = "https://dnd-spell-organizer.herokuapp.com/classes/"+classId+"/spells";
    return this.http.get(url).toPromise().then(result => {
      return result;
    });
  }
}
