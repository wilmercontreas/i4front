import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { GetPhotosResponse, GetPostsResponse, GetUsersResponse } from '../interfaces/accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  // get api from environment
  private api: string = environment.api;

  getUsers() {
    const endPoint = `${this.api}/accounts/users`;
    // list all users request and show only data response 
    return this.http.get<GetUsersResponse>(endPoint).pipe(
      map( resp => resp.data ),
    );
  }

  getPosts() {
    const endPoint = `${this.api}/accounts/posts`;
    // list all posts request and show only data response 
    return this.http.get<GetPostsResponse>(endPoint).pipe(
      map( resp => resp.data ),
    );
  }

  getPhotos() {
    const endPoint = `${this.api}/accounts/photos`;
    // list all photos request and show only data response 
    return this.http.get<GetPhotosResponse>(endPoint).pipe(
      map( resp => resp.data ),
    );
  }

}
