import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galary-items',
  templateUrl: './galary-items.component.html',
  styleUrls: ['./galary-items.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('0.6s ease-in', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class GalaryItemsComponent {
  leftData: any = {
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWIRyPZoItmIB1W5j2MinGPATQZyUsPDe9mg&s",
    "title": "PERISI SIDE TABLE COLLECTION",
    "description": "The Perisi Coffee Table starts with a thick wood top with a demi-bullnose edge giving it a soft yet great character."
  }

  rightData: any[] = [
    {
      "src": "https://www.refinery29.com/images/10264897.png",
      "label": ""
    },
    {
      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHiVLrujL1_gGM80WZLETeR5woTMX_tzYGnA&s",
      "label": "Best Seller"
    },
    {
      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2chs_RMG7gSB8V2LjNAsihVBjOGRpLrGTg&s",
      "label": "Best Seller"
    },
    {
      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75RTkL6uA9IpBRvLHC79FT4G5TLpFA04-Hg&s",
      "label": ""
    }
  ]
}
