declare var google: any
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '945629627731-vsomrpoj49kafkd167rb9o7qdoa4c161.apps.googleusercontent.com',
      callback: (res: any) =>  this.handleLogIn(res)
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      width: 350,
      shape: 'rectangle',
    });

    
  }

private decodeToken(token: string) {
  return JSON.parse(atob(token.split(".")[1]));
}

  handleLogIn(response: any) {
    if(response){
      const payload = this.decodeToken(response.credential);
      console.log(payload);
      
      sessionStorage.setItem("loggedInUser", JSON.stringify(payload));
      this.router.navigate(['browse']);
    }
    
  }
}
