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
import { ResetComponent } from './reset/reset.component';
import { LogComponent } from './log/log.component';
import { BranchComponent } from './branch/branch.component';
import { StatusComponent } from './status/status.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StashComponent } from './stash/stash.component';
import { MergeComponent } from './merge/merge.component';
import { GitPullComponent } from './git-pull/git-pull.component';
import { GitPushComponent } from './git-push/git-push.component';
import { GitFetchComponent } from './git-fetch/git-fetch.component';
import { GitResetComponent } from './git-reset/git-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    CommitComponent,
    InitComponent,
    CloneComponent,
    ResetComponent,
    LogComponent,
    BranchComponent,
    StatusComponent,
    CheckoutComponent,
    StashComponent,
    MergeComponent,
    GitPullComponent,
    GitPushComponent,
    GitFetchComponent,
    GitResetComponent
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
