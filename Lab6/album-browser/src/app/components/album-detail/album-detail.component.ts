import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
})
export class AlbumDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);
  private cdr = inject(ChangeDetectorRef);

  album: Album | null = null;
  editTitle = '';
  loading = true;
  saving = false;
  saved = false;
  error: string | null = null;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = Number(params.get('id'));
          console.log('Album ID from route:', id);
          return this.albumService.getAlbum(id);
        })
      )
      .subscribe({
        next: (data) => {
          console.log('Album loaded:', data);
          this.album = data;
          this.editTitle = data.title;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error loading album:', err);
          this.error = 'Failed to load album. Please try again.';
          this.loading = false;
        },
      });
  }

  save(): void {
    if (!this.album) return;
    this.saving = true;
    const updated: Album = { ...this.album, title: this.editTitle };
    this.albumService.updateAlbum(updated).subscribe({
      next: () => {
        this.album = updated;
        this.saving = false;
        this.saved = true;
        setTimeout(() => (this.saved = false), 2500);
      },
      error: () => {
        this.saving = false;
      },
    });
  }

  viewPhotos(): void {
    this.router.navigate(['/albums', this.album!.id, 'photos']);
  }

  back(): void {
    this.router.navigate(['/albums']);
  }
}