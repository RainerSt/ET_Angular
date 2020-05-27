import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ETService} from "../et.service";
import {ETBundle} from "../etbundle";


@Component({
  selector: 'app-etbundle-edit',
  templateUrl: './etbundle-edit.component.html',
  styleUrls: ['./etbundle-edit.component.scss']
})
export class ETBundleEditComponent implements OnInit {
  public id: number;
  public etbundle: ETBundle;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private etService: ETService
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.etService.getOneETBundle(this.id)
      .subscribe((etbundle) => {
        this.etbundle = etbundle as ETBundle;
      })
  }
  dismiss() {
    this.router.navigate(['/etbundle']);
  }
  modify() {
    this.etService.updateETBundle(this.etbundle)
      .subscribe(() => {
        this.dismiss();
      })
  }

  createET(){
    console.log("create new et");
    this.etService.createNewETinBundle(this.etbundle);

  }
 
}
