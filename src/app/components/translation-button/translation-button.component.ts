import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

import { setLanguage } from '../../utilities/getLanguage';
import { Language } from '../../interfaces/language';

@Component({
  selector: 'app-translation-button',
  templateUrl: './translation-button.component.html',
  styleUrls: ['./translation-button.component.scss'],
})
export class TranslationButtonComponent {
  constructor(private translocoService: TranslocoService) {}

  toggleTranslation(lang: Language) {
    this.translocoService.setActiveLang(lang);

    setLanguage(lang);
  }
}
