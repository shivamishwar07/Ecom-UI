import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerSections = [
    {
      title: 'Living',
      items: ['Sofas', 'Armchairs', 'Coffee Tables']
    },
    {
      title: 'Dining',
      items: ['Sideboards', 'Tables', 'Chairs']
    },
    {
      title: 'Bedroom',
      items: ['Bedsteads', 'Nightstands', 'Dressers']
    },
    {
      title: 'Accessories',
      items: ['Lighting']
    }
  ];

  socialIcons = [
    { name: 'Discord', icon: 'bi-discord', link: '#' },
    { name: 'Github', icon: 'bi-github', link: '#' },
    { name: 'Mail', icon: 'bi-envelope-at-fill', link: '#' },
    { name: 'Youtube', icon: 'bi-youtube', link: '#' },
    { name: 'Telegram', icon: 'bi-telegram', link: '#' }
  ];
}
