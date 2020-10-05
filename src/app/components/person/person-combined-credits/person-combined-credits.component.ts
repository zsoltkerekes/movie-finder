import { ApiService } from '../../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import {
  ICombinedCredits,
  CombinedCreditsInitData,
} from '../../../interfaces/combined-credits.interface';

@Component({
  selector: 'mf-person-combined-credits',
  templateUrl: './person-combined-credits.component.html',
  styleUrls: ['./person-combined-credits.component.scss'],
})
export class PersonCombinedCreditsComponent implements OnInit {
  @Input() id: number;

  combinedCredits: ICombinedCredits;
  isLoading: boolean;

  combinedCreditsText: string;
  noResultText: string;

  constructor(private api: ApiService, private language: LanguageService) {}

  loadContent(): void {
    this.isLoading = true;
    this.api.getCombinedPersonCredits(this.id).subscribe((response) => {
      const output = response.json();
      this.combinedCredits = output;
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.combinedCredits = CombinedCreditsInitData;
    this.combinedCreditsText = this.language.getText(
      'Combined Credits',
      this.api.getGlobal()
    );
    this.noResultText = this.language.getText(
      'No results',
      this.api.getGlobal()
    );
    this.loadContent();
  }
}
