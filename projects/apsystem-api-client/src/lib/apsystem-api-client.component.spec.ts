import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApsystemApiClientComponent } from './apsystem-api-client.component';

describe('ApsystemApiClientComponent', () => {
  let component: ApsystemApiClientComponent;
  let fixture: ComponentFixture<ApsystemApiClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApsystemApiClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApsystemApiClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
