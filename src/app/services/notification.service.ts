import { Injectable } from '@angular/core';
import { ToastrService, ToastrIconClasses } from "ngx-toastr";
@Injectable({
  providedIn: 'root'  
})
export class NotificationService {

constructor(private toaster:ToastrService) { }

recordSaved(){
  this.toaster.success("Record Saved"," ",{positionClass: 'toast-bottom-right'})
}

recordUpdated(){
this.toaster.warning("Record Updated"," ",{positionClass: 'toast-bottom-right'})
}

recordDeleted(){
  this.toaster.error("Record Deleted"," ",{positionClass: 'toast-bottom-right'})
}

}
