import { Component, HostListener } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [MaterialModule,RouterLink,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = false;
  isSmallScreen = false;
  selectedRole  = 'consumer'


  private subscription!: Subscription;

  constructor(
    private authService: Auth
  ) { }
  userData = {
    username:"",
    email:"",
    address:"",
    cart:[]
  }
  ngOnInit() {
    this.subscription = this.authService.user$.subscribe((res: any) => {
      if (res) {
        this.userData = res;
        this.selectedRole = res.selectedRole
      }
    })
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollY > 100;

  }

  @HostListener('window:resize', [])
  onResize() {
    this.isSmallScreen = window.innerWidth <= 990;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
