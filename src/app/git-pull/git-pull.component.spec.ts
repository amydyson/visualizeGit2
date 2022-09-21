import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitPullComponent } from './git-pull.component';

describe('GitPullComponent', () => {
  let component: GitPullComponent;
  let fixture: ComponentFixture<GitPullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitPullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitPullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
