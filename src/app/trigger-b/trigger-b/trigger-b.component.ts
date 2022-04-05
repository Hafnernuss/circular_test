import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalBComponent } from 'src/app/modal-b/modal-b/modal-b.component';

@Component({
  selector: 'trigger-b',
  templateUrl: './trigger-b.component.html',
  styleUrls: ['./trigger-b.component.scss']
})
export class TriggerBComponent implements OnInit {

  constructor(
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  public triggerB() {
    console.log(this.modalService)
    this.modalService.open(ModalBComponent);
  }

}
