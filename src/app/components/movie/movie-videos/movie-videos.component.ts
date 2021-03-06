import { ApiService } from '../../../services/api.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from '../../../services/language.service';
import { Videos, videosData } from '../../../interfaces/videos.interface';

@Component({
  selector: 'mf-movie-videos',
  templateUrl: './movie-videos.component.html',
  styleUrls: ['./movie-videos.component.scss'],
})
export class MovieVideosComponent implements OnInit, OnChanges {
  @Input() id: number;
  videos: Videos;
  videoSrc: SafeResourceUrl;
  selectedVideo: string;
  embedOptions = '?iv_load_policy=3&rel=0&showinfo=0';

  recommendedVideos: string;
  videoText: string;

  setVideoUrl = (key: string): void => {
    this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${key}${this.embedOptions}`
    );
    this.selectedVideo = key;
  };

  getSelectedVideo = (i: number): boolean =>
    this.videos.results[i].key === this.selectedVideo;

  constructor(
    private api: ApiService,
    private sanitizer: DomSanitizer,
    private language: LanguageService
  ) {}

  ngOnInit(): void {
    this.recommendedVideos = this.language.getText(
      'Recommended videos',
      this.api.getGlobal()
    );
    this.videoText = this.language.getText('video', this.api.getGlobal());
    this.videos = videosData;
  }

  ngOnChanges(): void {
    this.videoSrc = undefined;
    this.videos = videosData;
    if (this.id) {
      this.api.getMovieVideos(this.id).subscribe((response) => {
        const output = response.json();
        this.videos = {
          ...output,
          results: output.results.map((row) => row || {}),
        };
        if (this.videos.results.length > 0) {
          this.setVideoUrl(this.videos.results[0].key + this.embedOptions);
          this.selectedVideo = this.videos.results[0].key;
        }
      });
    }
  }
}
