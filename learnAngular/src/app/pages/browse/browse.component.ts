import { AuthService } from './../../services/auth.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {

  auth = inject(AuthService);

  public signOut() {
    sessionStorage.clear();
    this.auth.signOut();
  }
}
