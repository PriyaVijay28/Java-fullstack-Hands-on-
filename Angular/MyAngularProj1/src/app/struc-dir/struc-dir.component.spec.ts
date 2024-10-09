import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucDirComponent } from './struc-dir.component';

describe('StrucDirComponent', () => {
  let component: StrucDirComponent;
  let fixture: ComponentFixture<StrucDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrucDirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrucDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
