import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitFetchComponent } from './git-fetch.component';

describe('GitFetchComponent', () => {
  let component: GitFetchComponent;
  let fixture: ComponentFixture<GitFetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitFetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
