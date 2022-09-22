import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListphotosComponent } from './listphotos.component';

describe('ListphotosComponent', () => {
  let component: ListphotosComponent;
  let fixture: ComponentFixture<ListphotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListphotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
