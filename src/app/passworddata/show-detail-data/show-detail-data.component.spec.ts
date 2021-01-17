import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailDataComponent } from './show-detail-data.component';

describe('ShowDetailDataComponent', () => {
  let component: ShowDetailDataComponent;
  let fixture: ComponentFixture<ShowDetailDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
