import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { Class } from '../models/class.model'
import { CharacterService } from '../character.service';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss'],
  providers: [CharacterService, ClassService]
})
export class CharacterFormComponent implements OnInit {

  constructor(private characterService: CharacterService, private classService: ClassService) { }
  classList;
  ngOnInit() {
    this.characterService.getCharacters().subscribe(dataLastEmitted =>{
      this.classList = dataLastEmitted;
    })
  }

  addCharacter(newName, newRace, newClassId, newCastingLevel, newSpellCount){
    let newCharacter = new Character(newName, newRace, newClassId, newCastingLevel, newSpellCount, "", 0)
    this.characterService.addNewCharacter(newCharacter);
  }
}
