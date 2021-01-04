import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {


  constructor(private bdModalService:  BsModalService) { }

  private showAlert(message: string, type: string){
    const bdModalRef: BsModalRef = this.bdModalService.show(AlertasComponent)
    bdModalRef.content.type = type
    bdModalRef.content.message = message
  }

  showAlertDanger(message: string){
    this.showAlert(message, 'danger')
  }

  showAlertSuccess(message: string){    
    this.showAlert(message, 'success')
  }
  
  showAlertInfo(message: string){
    this.showAlert(message, 'info')
  }


}