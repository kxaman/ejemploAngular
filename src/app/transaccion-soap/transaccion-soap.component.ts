import { Component, OnInit } from '@angular/core';

import { TransaccionSoapService } from './transaccion-soap.service';

@Component({
  selector: 'app-transaccion-soap',
  templateUrl: './transaccion-soap.component.html',
  styleUrls: ['./transaccion-soap.component.css'],
  providers:[TransaccionSoapService]
})
export class TransaccionSoapComponent implements OnInit {

  constructor(private transaccionSoapService: TransaccionSoapService) { }

  ngOnInit() {
  }

}
