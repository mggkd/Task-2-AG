import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownformComponent } from './dropdownform.component';

describe('DropdownformComponent', () => {
  let component: DropdownformComponent;
  let fixture: ComponentFixture<DropdownformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
