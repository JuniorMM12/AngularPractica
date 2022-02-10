import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPublicationComponent } from './info-publication.component';

describe('InfoPublicationComponent', () => {
  let component: InfoPublicationComponent;
  let fixture: ComponentFixture<InfoPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
