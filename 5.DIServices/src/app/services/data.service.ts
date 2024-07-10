import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //provideHttpClient also needs to be declared in app.config.tes
import { Observable } from 'rxjs'; //https://www.google.com/search?q=the+only+way+to+avoid+criticism+quote&rlz=1C1ONGR_enUS1110US1110&oq=the+only+way+to+avoid+critic&gs_lcrp=EgZjaHJvbWUqBwgCEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIHCAIQABiABDIKCAMQABgPGBYYHjIICAQQABgWGB4yDQgFEAAYhgMYgAQYigUyDQgGEAAYhgMYgAQYigUyDQgHEAAYhgMYgAQYigUyCggIEAAYgAQYogTSAQg3MjE2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8
import { Data } from '../interfaces/data'; //imports the structured data from the interface

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //url for the api
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getData() {
    return ['data 1', 'data 2', 'data 3', 'data Dada'];
  }

  getPosts(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl); //fetches data of an array type
  }
}
