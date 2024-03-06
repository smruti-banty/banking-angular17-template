import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { CurrencyPipe } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    ModalComponent,
    AlertComponent,
    CurrencyPipe,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  modalVisible = false;
  showAlert = false;
}
