import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMaterialsComponent } from './details-materials.component';

describe('DetailsMaterialsComponent', () => {
  let component: DetailsMaterialsComponent;
  let fixture: ComponentFixture<DetailsMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsMaterialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
