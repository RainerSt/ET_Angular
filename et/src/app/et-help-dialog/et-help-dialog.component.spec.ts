import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtHelpDialogComponent } from './et-help-dialog.component';

describe('EtHelpDialogComponent', () => {
  let component: EtHelpDialogComponent;
  let fixture: ComponentFixture<EtHelpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtHelpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtHelpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
