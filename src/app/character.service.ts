import { Injectable } from '@angular/core';
import { Character } from "./models/character.model";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  getCharacters(){
    let request = new XMLHttpRequest();
    let url = "https://dnd-spell-organizer.herokuapp.com/characters";
    let characters;
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          characters = JSON.parse(this.response);
        } else if (this.readyState === 4 && this.status != 200) {
          characters = "No characters";
        }
    }

    request.open("GET", url, true);
    request.send();

    return characters;
  }

  getCharacterById(characterId: number){
    let request = new XMLHttpRequest();
    let url = "https://dnd-spell-organizer.herokuapp.com/characters/" + characterId;
    let characters;
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          characters = JSON.parse(this.response);
        } else if (this.readyState === 4 && this.status != 200) {
          characters = "No characters";
        }
    }

    request.open("GET", url, true);
    request.send();

    return characters;
  }

  addNewCharacter(newCharacter: Character){
    let request = new XMLHttpRequest();
    let url = "https://dnd-spell-organizer.herokuapp.com/characters/add";
    let characters;
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 201) {
          characters = JSON.parse(this.response);
        } else if (this.readyState === 4 && this.status != 201) {
          characters = "New character not added";
        }
    }

    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/JSON");
    request.send(JSON.stringify(newCharacter));

    return characters;
  }

  updateCharacterById(propertiesToUpdate: Map<String, Object>, characterId: number){
    let request = new XMLHttpRequest();
    let url = "https://dnd-spell-organizer.herokuapp.com/characters/" + characterId + "/update";
    let characters;
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 201) {
          characters = JSON.parse(this.response);
        } else if (this.readyState === 4 && this.status != 201) {
          characters = "Update not processed";
        }
    }

    request.open("PUT", url, true);
    request.send(JSON.stringify(propertiesToUpdate));

    return characters;
  }

  deleteCharacterById(characterId: number){
    let request = new XMLHttpRequest();
    let url = "https://dnd-spell-organizer.herokuapp.com/characters/" + characterId + "/delete";
    let characters;
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          characters = JSON.parse(this.response);
        } else if (this.readyState === 4 && this.status != 200) {
          characters = "Character not deleted";
        }
    }

    request.open("DELETE", url, true);
    request.send();

    return characters;
  }
}
