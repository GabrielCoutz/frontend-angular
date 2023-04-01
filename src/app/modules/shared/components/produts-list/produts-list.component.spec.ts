import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutsListComponent } from './produts-list.component';

describe('ProdutsListComponent', () => {
  let component: ProdutsListComponent;
  let fixture: ComponentFixture<ProdutsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
