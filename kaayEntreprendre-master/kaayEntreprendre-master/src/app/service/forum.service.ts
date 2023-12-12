import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  apiUrl = 'http://127.0.0.1:8000/api';


  constructor(private http: HttpClient) { }
  getForum() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userOnline")??'{}').token
      })
    };
    return this.http.get(`${this.apiUrl}/forum`,httpOptions);
  }

  // Méthode pour ajouter un forum
  postForum(forum: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userOnline")??'{}').token
      })
    };
    return this.http.post<any>(`${this.apiUrl}/forum`, forum,httpOptions);
  }

  // Méthode pour supprimer un forum
  deleteForum(forumId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${forumId}`);
  }
}
