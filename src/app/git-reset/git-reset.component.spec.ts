import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitResetComponent } from './git-reset.component';

describe('GitResetComponent', () => {
  let component: GitResetComponent;
  let fixture: ComponentFixture<GitResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
