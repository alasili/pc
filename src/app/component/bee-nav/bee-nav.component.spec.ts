import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeNavComponent } from './bee-nav.component';

describe('BeeNavComponent', () => {
  let component: BeeNavComponent;
  let fixture: ComponentFixture<BeeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
