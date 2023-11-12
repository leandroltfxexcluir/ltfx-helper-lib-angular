import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtfxHelperComponent } from './ltfx-helper.component';

describe('LtfxHelperComponent', () => {
  let component: LtfxHelperComponent;
  let fixture: ComponentFixture<LtfxHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtfxHelperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtfxHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
