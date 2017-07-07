import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureComponent } from './future.component';

describe('FutureComponent', () => {
  let component: FutureComponent;
  let fixture: ComponentFixture<FutureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
