import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-b',
  templateUrl: './modal-b.component.html',
  styleUrls: ['./modal-b.component.scss']
})
export class ModalBComponent implements OnInit {

  constructor(
    private _active: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    console.log(this._active)
  }

}
