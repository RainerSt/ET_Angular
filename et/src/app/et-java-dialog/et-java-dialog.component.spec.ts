import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtJavaDialogComponent } from './et-java-dialog.component';

describe('EtHelpDialogComponent', () => {
  let component: EtJavaDialogComponent;
  let fixture: ComponentFixture<EtJavaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtJavaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtJavaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
