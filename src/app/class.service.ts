import { Injectable } from '@angular/core';
import { Class } from "./models/class.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http:HttpClient) { }

  getClasses(){
    let url = "https://dnd-spell-organizer.herokuapp.com/classes";
    return this.http.get(url).toPromise().then(result => {
      return result;
    });
  }

  getClassById(classId: number){
    let url = "https://dnd-spell-organizer.herokuapp.com/classes/" + classId;
    return this.http.get(url).toPromise().then(result => {
      return result;
    });
  }
}
