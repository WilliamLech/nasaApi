import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsImage } from './mars-image';

describe('MarsImage', () => {
  let component: MarsImage;
  let fixture: ComponentFixture<MarsImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarsImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarsImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
