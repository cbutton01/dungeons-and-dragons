import { Injectable } from '@angular/core';
import { Class } from "./models/class.model";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor() { }

  getClasses(){
    let request = new XMLHttpRequest();
    let url = "https://dnd-spell-organizer.herokuapp.com/classes";
    let classes;
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          classes = JSON.parse(this.response);
        } else if (this.readyState === 4 && this.status != 200) {
          classes = "No classes";
        }
    }

    request.open("GET", url, true);
    request.send();

    return classes;
  }

  getClassById(classId: number){
    let request = new XMLHttpRequest();
    let url = "https://dnd-spell-organizer.herokuapp.com/classes/" + classId;
    let classes;
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          classes = JSON.parse(this.response);
        } else if (this.readyState === 4 && this.status != 200) {
          classes = "This class does not exist.";
        }
    }

    request.open("GET", url, true);
    request.send();

    return classes;
  }
}
