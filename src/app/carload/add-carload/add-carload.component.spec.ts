import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddCarloadComponent} from './add-carload.component';

describe('AddCarloadComponent', () => {
  let component: AddCarloadComponent;
  let fixture: ComponentFixture<AddCarloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCarloadComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddCarloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
