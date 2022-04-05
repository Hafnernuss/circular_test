import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAComponent } from 'src/app/modal-a/modal-a/modal-a.component';

@Component({
  selector: 'trigger-a',
  templateUrl: './trigger-a.component.html',
  styleUrls: ['./trigger-a.component.scss']
})
export class TriggerAComponent implements OnInit {

  constructor(
    public modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  public triggerA() {
    console.log(this.modalService)
    this.modalService.open(ModalAComponent);
  }

}
