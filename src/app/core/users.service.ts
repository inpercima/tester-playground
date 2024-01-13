import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Album } from '../shared/album.model';
import { User } from '../shared/user.model';
import { Photo } from '../shared/photo.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  listUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }

  listAlbums(userId: number): Observable<Album[]> {
    return this.http.get<Album[]>(`http://jsonplaceholder.typicode.com/users/${userId}/albums`);
  }

  addAlbum(userId: number, title: string): Observable<Album> {
    return this.http.post<Album>('http://jsonplaceholder.typicode.com/albums', {
      userId,
      title,
    });
  }

  listPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`http://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }
}
