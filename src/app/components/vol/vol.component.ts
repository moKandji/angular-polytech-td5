import { Component } from '@angular/core';
import { COMPAGNIE_LOGOS } from '../../constants/compagnie.constant';

@Component({
    selector: 'app-vol',
    imports: [],
    templateUrl: './vol.component.html',
    styleUrls: ['./vol.component.scss']
})
export class VolComponent {
getLogo(compagnie: string): string {
  return COMPAGNIE_LOGOS[compagnie] || 'assets/default.png';
}
}
