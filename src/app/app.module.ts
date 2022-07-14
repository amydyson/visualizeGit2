import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from './add/add.component';
import { CommitComponent } from './commit/commit.component';
import { InitComponent } from './init/init.component';
import { CloneComponent } from './clone/clone.component';
import { PushComponent } from './push/push.component';
import { PullComponent } from './pull/pull.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    CommitComponent,
    InitComponent,
    CloneComponent,
    PushComponent,
    PullComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
