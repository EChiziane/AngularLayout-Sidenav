import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsManagerComponent } from './details-manager.component';

describe('DetailsManagerComponent', () => {
  let component: DetailsManagerComponent;
  let fixture: ComponentFixture<DetailsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
