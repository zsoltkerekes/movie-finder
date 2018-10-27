import {ApiService} from "../../services/api.service";
import {Component, Input, OnChanges} from "@angular/core";
import {Videos, videosData} from "../../models/videos.model";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'mf-tv-show-videos',
  templateUrl: './tv-show-videos.component.html',
  styleUrls: ['./tv-show-videos.component.scss']
})
export class TvShowVideosComponent implements OnChanges {

  @Input('id') id;
  videos: Videos;
  videoSrc: SafeResourceUrl;
  selectedVideo: string;
  getGlobal = this.api.getGlobal;
  embedOptions = '?iv_load_policy=3&rel=0&showinfo=0';

  constructor(private api: ApiService,
              private sanitizer: DomSanitizer) {
  }

  ngOnChanges() {
    this.videoSrc = undefined;
    this.videos = videosData;
    if (this.id) {
      this.api.getTvShowsVideos(this.id)
        .subscribe(response => {
          const output = response.json();
          this.videos = {
            ...output,
            results: output.results.map(row => row || {})
          };
          if (this.videos.results.length > 0) {
            this.setVideoUrl(this.videos.results[0].key + this.embedOptions);
            this.selectedVideo = this.videos.results[0].key;
          }
        });
    }
  }

  setVideoUrl = key => {
    this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}${this.embedOptions}`);
    this.selectedVideo = key;
  };

  getSelectedVideo = i => this.videos.results[i].key === this.selectedVideo;


}
