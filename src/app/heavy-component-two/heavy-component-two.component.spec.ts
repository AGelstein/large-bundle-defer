import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyComponentTwoComponent } from './heavy-component-two.component';

describe('HeavyComponentTwoComponent', () => {
  let component: HeavyComponentTwoComponent;
  let fixture: ComponentFixture<HeavyComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyComponentTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeavyComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
