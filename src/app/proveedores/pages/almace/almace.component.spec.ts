import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmaceComponent } from './almace.component';

describe('AlmaceComponent', () => {
  let component: AlmaceComponent;
  let fixture: ComponentFixture<AlmaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
