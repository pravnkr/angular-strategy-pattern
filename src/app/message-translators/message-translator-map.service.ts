import { Inject, Injectable } from '@angular/core';
import { MessageTranslator, MESSAGE_TRANSLATORS } from './message-translator';

@Injectable({
  providedIn: 'root',
})
export class MessageTranslatorMap {
  private map = new Map<string, string>();

  constructor(@Inject(MESSAGE_TRANSLATORS) translators: MessageTranslator[]) {
    for (let translator of translators) {
      this.map.set(translator.getKey(), translator.translate());
    }
  }

  getMap(): ReadonlyMap<string, string> {
    return this.map;
  }
}
