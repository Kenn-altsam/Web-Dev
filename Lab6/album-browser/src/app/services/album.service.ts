import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private http = inject(HttpClient);
  private base = 'https://jsonplaceholder.typicode.com';
  private albumsSubject = new BehaviorSubject<Album[]>([]);
  albums$ = this.albumsSubject.asObservable();
  private localChanges = new Map<number, Album>();
  private deletedIds = new Set<number>();

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.base}/albums`).pipe(
      tap((data) => {

        const merged = data
          .filter(album => !this.deletedIds.has(album.id))
          .map(album => this.localChanges.get(album.id) || album);
        this.albumsSubject.next(merged);
      })
    );
  }

  getAlbum(id: number): Observable<Album> {

    const localChange = this.localChanges.get(id);
    if (localChange) {
      return of(localChange);
    }
    
    const albums = this.albumsSubject.value;
    const cached = albums.find((a) => a.id === id);
    if (cached) {
      return of(cached);
    }
    return this.http.get<Album>(`${this.base}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.base}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    this.localChanges.set(album.id, album);
    
    const albums = this.albumsSubject.value;
    const index = albums.findIndex((a) => a.id === album.id);
    if (index !== -1) {
      albums[index] = album;
    } else {
      albums.push(album);
    }
    this.albumsSubject.next([...albums]);
    return of(album);
  }

  deleteAlbum(id: number): Observable<void> {
    this.deletedIds.add(id);
    this.localChanges.delete(id);
    
    const albums = this.albumsSubject.value;
    const filtered = albums.filter((a) => a.id !== id);
    this.albumsSubject.next(filtered);
    return of(undefined);
  }
}