import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './login.component.html'
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
