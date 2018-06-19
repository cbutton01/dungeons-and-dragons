import { Injectable } from '@angular/core';
import { Spell } from './models/spell.model'

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor() { }

  getSpells(){
    let request = new XMLHttpRequest();
    let url = "https://dnd-spell-organizer.herokuapp.com/spells";
    let spells;
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          spells = JSON.parse(this.response);
        }
    }

    request.open("GET", url, true);
    request.send();

    return spells;
  }
}
