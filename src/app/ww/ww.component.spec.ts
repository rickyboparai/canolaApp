import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WwComponent } from './ww.component';

describe('WwComponent', () => {
  let component: WwComponent;
  let fixture: ComponentFixture<WwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
