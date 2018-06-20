import { Component, OnInit } from '@angular/core';
// import { SpellService } from '../spell.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type' : 'application/json'})
// };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(){}

  // constructor(private http:HttpClient, private characterService:SpellService) { }
  // classes;

  ngOnInit() {
    // this.classes = this.characterService.getSpells();
  }

}
