import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ETBundleNewComponent } from './etbundle-new.component';

describe('CustomerNewComponent', () => {
  let component: ETBundleNewComponent;
  let fixture: ComponentFixture<ETBundleNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ETBundleNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ETBundleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
