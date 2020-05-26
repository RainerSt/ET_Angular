import {Component, OnInit} from '@angular/core';
import {ETBundle} from "../etbundle";
import {ETService} from "../et.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";



@Component({
  selector: 'app-etbundle-list',
  templateUrl: './etbundle-list.component.html',
  styleUrls: ['./etbundle-list.component.scss']
})
export class ETBundleListComponent implements OnInit {
  public etbundles: Observable<ETBundle[]>;

  public flag = false;
  //Delete-Popup
  popoverTitle = 'Lösche ET-Bundle';
  popoverMessage = 'Soll dieses ET-Bundle endgültig gelöscht werden ?      ' +
                    'Dies kann nicht rückgängig gemacht werden !';
  confirmClicked = false;
  cancelClicked = false;
  queryString: string = "";
  
  constructor(
    private etService: ETService,
    private router: Router) {
  }
  editETBundle(id: number) {
     this.router.navigate(['/etbundle', id]);
  }
  // life cycle hook
  ngOnInit() {
    this.getETBundles();
  }

  getETBundles() {
    this.etbundles = this.etService.getETBundles();
  }

  deleteETBundle(id: number) {
    this.etService.deleteETBundle(id)

    //Arrow Function
      .subscribe(() => {
        this.getETBundles();
      });
  }
  searchInBundle(){
    console.log("searchInBundle")
  }
}
