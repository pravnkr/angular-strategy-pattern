import { Injectable } from '@angular/core';
import { MessageTranslator } from './message-translator';

@Injectable({
  providedIn: 'root',
})
export class IncorrectUserNameOrPasswordMessageTranslator implements MessageTranslator {
  getKey() {
    return 'IncorrectUserNameOrPasswordMessage';
  }
  translate(): string {
    return 'Wrong Username or Password - Please try again or contact Customer Support Team.';
  }
}
