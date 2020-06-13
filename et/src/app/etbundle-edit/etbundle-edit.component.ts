import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ETService} from "../et.service";
import {ETBundle} from "../etbundle";
import { ET } from '../et';

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
    public etService: ETService,

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
  modifyAndReload() {
    this.etService.updateETBundle(this.etbundle)
      .subscribe(() => {
        this.dismiss();
      })
  }

  createET(){
    console.log("create new et");
    this.etService.createNewETinBundle(this.etbundle);

  }
  receiveDeleteETMessage($toDelete:ET){
    console.log("receiveDeleteETMessage " + $toDelete.name);
    for (let index = 0; index < this.etbundle.ets.length; index++) {
      if (this.etbundle.ets[index].id === $toDelete.id){
        console.log("receiveDeleteETMessage et NR" + index);
        this.etbundle.ets.splice(index, 1)
      } 
    }
    this.modifyAndReload()
  }
  
}
