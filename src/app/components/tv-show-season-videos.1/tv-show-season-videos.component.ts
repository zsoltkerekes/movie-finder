import { ApiService } from './../../services/api.service';
import { Component, OnChanges, Input } from '@angular/core';
import { Videos, videosData } from '../../models/videos.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'mf-tv-show-season-videos',
  templateUrl: './tv-show-season-videos.component.html',
  styleUrls: ['./tv-show-season-videos.component.scss']
})
export class TvShowSeasonVideosComponent implements OnChanges {

  @Input('id') id;
  @Input('season') season;
  videos: Videos;
  videoSrc: SafeResourceUrl;
  selectedVideo: string;

  constructor(
    private api: ApiService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnChanges() {
    this.videoSrc = undefined;
    this.videos = videosData;
    if (this.id) {
      this.api.getTvShowsSeasonVideos(this.id, this.season)
        .subscribe(response => {
          const output = response.json();
          this.videos = {
            ...output,
            results: output.results.map(row => row || {})
          };
          if (this.videos.results[0].key) {
            this.setVideoUrl(this.videos.results[0].key);
          }
        });
    }
  }

  setVideoUrl = key => {
    this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`);
    this.selectedVideo = key;
  }

  getSelectedVideo = i => this.videos.results[i].key === this.selectedVideo;


}
