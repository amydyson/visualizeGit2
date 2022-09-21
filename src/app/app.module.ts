import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from './add/add.component';
import { CommitComponent } from './commit/commit.component';
import { InitComponent } from './init/init.component';
import { CloneComponent } from './clone/clone.component';
import { PushComponent } from './push/push.component';
import { PullComponent } from './pull/pull.component';
import { ResetComponent } from './reset/reset.component';
import { LogComponent } from './log/log.component';
import { BranchComponent } from './branch/branch.component';
import { StatusComponent } from './status/status.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StashComponent } from './stash/stash.component';
import { MergeComponent } from './merge/merge.component';
import { FetchComponent } from './fetch/fetch.component';
import { GitPullComponent } from './git-pull/git-pull.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    CommitComponent,
    InitComponent,
    CloneComponent,
    PushComponent,
    PullComponent,
    ResetComponent,
    LogComponent,
    BranchComponent,
    StatusComponent,
    CheckoutComponent,
    StashComponent,
    MergeComponent,
    FetchComponent,
    GitPullComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
