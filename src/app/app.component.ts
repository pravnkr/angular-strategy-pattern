import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MessageTranslatorMap } from './message-translators/message-translator-map.service';
import { produceMessage } from './mock/message-producer.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  messageKeyStream$: Observable<string>;

  constructor(private messageTranslator: MessageTranslatorMap) {
    /**
     * return a stream where each emitted item will serve as a key for the strategy.
     */
    this.messageKeyStream$ = produceMessage();
  }

  getTranslatedMessageFor(key: string) {
    return this.messageTranslator.getMap().get(key);
  }

}
