import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailsCarloadComponent} from './details-carload.component';

describe('DetailsCarloadComponent', () => {
  let component: DetailsCarloadComponent;
  let fixture: ComponentFixture<DetailsCarloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsCarloadComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DetailsCarloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
