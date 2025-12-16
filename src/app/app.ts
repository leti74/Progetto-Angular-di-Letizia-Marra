import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Login } from './pages/login/login';
import { AuthService } from './auth/auth-service';
import { Router, RouterModule } from '@angular/router';
import { Footer } from './components/footer/footer';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Login, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  

  constructor(private authService: AuthService, public router: Router){
    const w: Window = window;
    w.addEventListener('pageshow', () => {
     if (this.router.url.includes('login')) {
       this.authService.logout();
     }
   });
  }

  isSubscribed!: boolean
  ngOnInit(): void {
   this.isSubscribed = this.authService.isAuthenticated()
  }
 


  

  
  


}
