import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { Class } from '../models/class.model'
import { CharacterService } from '../character.service';
import { ClassService } from '../class.service';
import { SpellService } from '../spell.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  providers: [CharacterService, ClassService, SpellService]
})
export class PlayerComponent implements OnInit {

  constructor(private router: ActivatedRoute, private characterService: CharacterService, private classService: ClassService, private spellService: SpellService, private http:HttpClient) { }
  currentCharacter;
  characterClass;
  characterId: number;
  equippedSpells = [];
  ngOnInit() {
    // this.router.params.forEach((urlParameters) => {
    //     this.characterId = parseInt(urlParameters['id']);
    // });
    // this.currentCharacter = this.characterService.getCharacterById(this.characterId);
    // this.characterClass = this.classService.getClassById(this.currentCharacter.classId);
    // let tempSpells = this.currentCharacter.preparedSpells.split(",");
    // for (let i = 0; i < tempSpells.length; i++) {
    //     let spell = this.spellService.getSpellById(parseInt(tempSpells[i]));
    //     this.equippedSpells.push(spell);
    // }
  }

}
