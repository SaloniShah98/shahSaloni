import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isDarkTheme = false;
  currentLang = 'EN';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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
