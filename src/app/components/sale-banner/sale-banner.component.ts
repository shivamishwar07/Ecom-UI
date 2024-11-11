import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-sale-banner',
  templateUrl: './sale-banner.component.html',
  styleUrls: ['./sale-banner.component.scss'],
  animations: [
    trigger('textAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ])
    ]),
    trigger('imageAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('buttonAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('0.5s', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class SaleBannerComponent {
  items: any = [
    {
      "id": 1,
      "title": "Modern Table",
      "description": "Minimalist wooden table",
      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9j4kbwcVTvmSlF3-P7usOp1RID3KxxNUSzA&s"
    },
    {
      "id": 2,
      "title": "Comfortable Chair",
      "description": "Soft and cozy lounge chair",
      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFfmflXemkgJmGvfInU6n2Nr5nyPFGyCgYyg&s"
    },
    {
      "id": 3,
      "title": "Red Armchair",
      "description": "Elegant armchair with a retro feel",
      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMehebjQ2dpnHRK1epkS_xFf9eoZcDNCwfyw&s"
    }
  ];


  saleEndsIn = {
    days: '12',
    hours: '16',
    minutes: '23'
  };

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    const countdownDate = new Date('Oct 31, 2024 23:59:59').getTime();

    setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.saleEndsIn.days = this.addLeadingZero(days);
      this.saleEndsIn.hours = this.addLeadingZero(hours);
      this.saleEndsIn.minutes = this.addLeadingZero(minutes);
    }, 1000);
  }

  addLeadingZero(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
}
