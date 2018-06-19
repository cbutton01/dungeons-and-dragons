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
        } else if (this.readyState === 4 && this.status != 200) {
          spells = "No spells";
        }
    }

    request.open("GET", url, true);
    request.send();

    return spells;
  }

  getSpellById(spellId: number) {
    let request = new XMLHttpRequest();
    let url = "https://dnd-spell-organizer.herokuapp.com/spells/"+spellId;
    let spells;
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          spells = JSON.parse(this.response);
        } else if (this.readyState === 4 && this.status != 200) {
          spells = "This class has no spells.";
        }
    }

    request.open("GET", url, true);
    request.send();

    return spells;
  }

  getSpellsByClass(classId: number) {
    let request = new XMLHttpRequest();
    let url = "https://dnd-spell-organizer.herokuapp.com/classes/"+classId+"/spells";
    let spells;
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          spells = JSON.parse(this.response);
        } else if (this.readyState === 4 && this.status != 200) {
          spells = "No spells";
        }
    }

    request.open("GET", url, true);
    request.send();

    return spells;
  }
}
