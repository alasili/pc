import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeFooterComponent } from './bee-footer.component';

describe('BeeFooterComponent', () => {
  let component: BeeFooterComponent;
  let fixture: ComponentFixture<BeeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
