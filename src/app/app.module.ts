import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IncorrectUserNameOrPasswordMessageTranslator } from './message-translators/incorrect-user-name-message-translator.service';
import { MESSAGE_TRANSLATORS } from './message-translators/message-translator';
import { SessionExpiredMessageTranslator } from './message-translators/session-expired-message-translator.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: MESSAGE_TRANSLATORS, useClass: IncorrectUserNameOrPasswordMessageTranslator, multi: true },
    { provide: MESSAGE_TRANSLATORS, useClass: SessionExpiredMessageTranslator, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
