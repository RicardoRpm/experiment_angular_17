import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}
  

  redirectToHomePage() {
    alert("Ricardo Miguel")
    this.router.navigate(['/home']);
  }
  
}
