import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar implements OnInit {
  isDarkTheme = false;
  currentLang = 'EN';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

  ngOnInit() {
    // Navigate to /about on load if on root path
    if (this.router.url === '/') {
      this.router.navigate(['/about']);
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark' : 'light';
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  }

  setLang(lang: string) {
    this.currentLang = lang;
    // Implement actual translation logic here later
  }
}
