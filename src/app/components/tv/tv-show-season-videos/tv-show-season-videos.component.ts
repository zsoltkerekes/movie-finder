import { ApiService } from '../../../services/api.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Videos, videosData } from '../../../interfaces/videos.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-tv-show-season-videos',
  templateUrl: './tv-show-season-videos.component.html',
  styleUrls: ['./tv-show-season-videos.component.scss'],
})
export class TvShowSeasonVideosComponent implements OnInit, OnChanges {
  @Input() id;
  @Input() season;
  videos: Videos;
  videoSrc: SafeResourceUrl;
  selectedVideo: string;
  getGlobal = this.api.getGlobal;
  embedOptions = '?iv_load_policy=3&rel=0&showinfo=0';
  recommendedVideosText: string;

  setVideoUrl = (key) => {
    this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${key}${this.embedOptions}`
    );
    this.selectedVideo = key;
  };

  getSelectedVideo = (i) => this.videos.results[i].key === this.selectedVideo;

  constructor(
    private api: ApiService,
    private sanitizer: DomSanitizer,
    private language: LanguageService
  ) {}

  ngOnInit() {
    this.recommendedVideosText = this.language.getText(
      'Recommended videos',
      this.api.getGlobal()
    );
  }

  ngOnChanges() {
    this.videoSrc = undefined;
    this.videos = videosData;
    if (this.id) {
      this.api
        .getTvShowsSeasonVideos(this.id, this.season)
        .subscribe((response) => {
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
