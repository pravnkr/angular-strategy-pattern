import { Injectable } from '@angular/core';
import { MessageTranslator } from './message-translator';

@Injectable({
  providedIn: 'root',
})
export class SessionExpiredMessageTranslator implements MessageTranslator {
  getKey() {
    return 'SessionExpiredMessage';
  }
  translate(): string {
    return 'The session has expired, to continue please relogin.';
  }
}
