import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
})
export class AlbumPhotosComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);
  private cdr = inject(ChangeDetectorRef);

  photos: Photo[] = [];
  loading = true;
  albumId = 0;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.albumId = Number(params.get('id'));
          console.log('Album ID from route:', this.albumId);
          return this.albumService.getAlbumPhotos(this.albumId);
        })
      )
      .subscribe({
        next: (data) => {
          console.log('Photos loaded:', data);
          this.photos = data;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error loading photos:', err);
          this.loading = false;
        },
      });
  }

  back(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}