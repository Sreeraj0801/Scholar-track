import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniFormComponent } from './mini-form.component';

describe('MiniFormComponent', () => {
  let component: MiniFormComponent;
  let fixture: ComponentFixture<MiniFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniFormComponent]
    });
    fixture = TestBed.createComponent(MiniFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
