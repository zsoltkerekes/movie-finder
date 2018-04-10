import { ApiService } from './../../services/api.service';
import { Component, OnChanges, Input } from '@angular/core';
import { Videos, videosData } from '../../models/videos.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'mf-movie-videos',
  templateUrl: './movie-videos.component.html',
  styleUrls: ['./movie-videos.component.scss']
})
export class MovieVideosComponent implements OnChanges {

  @Input('id') id;
  videos: Videos;
  videoSrc: SafeResourceUrl;
  selectedVideo: string;
  getGlobal = this.api.getGlobal;

  constructor(
    private api: ApiService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnChanges() {
    this.videoSrc = undefined;
    this.videos = videosData;
    if (this.id) {
      this.api.getMovieVideos(this.id)
        .subscribe(response => {
          const output = response.json();
          this.videos = {
            ...output,
            results: output.results.map(row => row || {})
          };
          if (this.videos.results.length > 0) {
            this.setVideoUrl(this.videos.results[0].key);
          }
        });
    }
  }

  setVideoUrl = key => {
    this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`),
    this.selectedVideo = key;
  }

  getSelectedVideo = i => this.videos.results[i].key === this.selectedVideo;


}
