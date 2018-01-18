import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionSoapComponent } from './transaccion-soap.component';

describe('TransaccionSoapComponent', () => {
  let component: TransaccionSoapComponent;
  let fixture: ComponentFixture<TransaccionSoapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaccionSoapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionSoapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
