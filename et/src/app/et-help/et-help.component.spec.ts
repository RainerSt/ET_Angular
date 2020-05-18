import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ETHelpComponent } from './et-help.component';

describe('EtHelpComponent', () => {
  let component: ETHelpComponent;
  let fixture: ComponentFixture<ETHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ETHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ETHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
