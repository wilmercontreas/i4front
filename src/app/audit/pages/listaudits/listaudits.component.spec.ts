import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListauditsComponent } from './listaudits.component';

describe('ListauditsComponent', () => {
  let component: ListauditsComponent;
  let fixture: ComponentFixture<ListauditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListauditsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListauditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
