import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitPushComponent } from './git-push.component';

describe('GitPushComponent', () => {
  let component: GitPushComponent;
  let fixture: ComponentFixture<GitPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
