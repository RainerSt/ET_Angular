import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ETBundle} from "../etbundle";
import {ETService} from "../et.service";

@Component({
  selector: 'app-etbundle-new',
  templateUrl: './etbundle-new.component.html',
  styleUrls: ['./etbundle-new.component.scss']
})
export class ETBundleNewComponent implements OnInit {

  @Output() formClose = new EventEmitter();

  public etbundle: ETBundle = {} as ETBundle;

  constructor(private etService: ETService) {
  }

  ngOnInit() {
  }
  dismiss() {
    this.formClose.emit(false);
  }

  create() {
    this.etService.createETBundle(this.etbundle)
      .subscribe(() => {
        this.formClose.emit(true);
      })
  }

}
