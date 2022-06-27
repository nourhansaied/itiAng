import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocilaMediaComponent } from './socila-media.component';

describe('SocilaMediaComponent', () => {
  let component: SocilaMediaComponent;
  let fixture: ComponentFixture<SocilaMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocilaMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocilaMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
