import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CurrencyPipe } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    ModalComponent,
    AlertComponent,
    CurrencyPipe,
  ],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css',
})
export class DepositComponent {
  totalRecord = Array(10);
  modalVisible = false;
  showAlert = false;
}
