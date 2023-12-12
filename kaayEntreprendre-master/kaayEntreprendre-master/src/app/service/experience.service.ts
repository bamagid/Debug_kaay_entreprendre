import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  apiUrl = 'http://127.0.0.1:8000/api';


  constructor(private http: HttpClient) { }
  getExperience() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userOnline")??'{}').token
      })
    };
    return this.http.get(`${this.apiUrl}/experience`,httpOptions);
  }

  // Méthode pour ajouter une experience
  postExperience(experience: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userOnline")??'{}').token
      })
    };
    return this.http.post<any>(`${this.apiUrl}/experience`, experience,httpOptions);
  }

  // Méthode pour supprimer une experience
  deleteExperience(experienceId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${experienceId}`);
  }
}
