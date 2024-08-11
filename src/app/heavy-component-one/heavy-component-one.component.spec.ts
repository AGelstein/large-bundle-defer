import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyComponentOneComponent } from './heavy-component-one.component';

describe('HeavyComponentOneComponent', () => {
  let component: HeavyComponentOneComponent;
  let fixture: ComponentFixture<HeavyComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyComponentOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeavyComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
