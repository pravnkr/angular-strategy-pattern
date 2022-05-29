import { InjectionToken } from '@angular/core';

export interface MessageTranslator {
  getKey(): string;
  translate(): string;
}

export const MESSAGE_TRANSLATORS = new InjectionToken<MessageTranslator>('MessageTranslator');
