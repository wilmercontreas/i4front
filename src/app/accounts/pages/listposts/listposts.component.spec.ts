import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpostsComponent } from './listposts.component';

describe('ListpostsComponent', () => {
  let component: ListpostsComponent;
  let fixture: ComponentFixture<ListpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
