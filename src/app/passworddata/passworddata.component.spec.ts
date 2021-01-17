import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassworddataComponent } from './passworddata.component';

describe('PassworddataComponent', () => {
  let component: PassworddataComponent;
  let fixture: ComponentFixture<PassworddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassworddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassworddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
