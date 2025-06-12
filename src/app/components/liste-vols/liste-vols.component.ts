import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vol } from '../../models/vol.model';
import { COMPAGNIE_LOGOS } from '../../constants/compagnie.constant';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { VolComponent } from "../vol/vol.component";

@Component({
    selector: 'app-liste-vols',
    imports: [MatIconModule, CommonModule, VolComponent],
    templateUrl: './liste-vols.component.html',
    styleUrls: ['./liste-vols.component.scss']
})
export class ListeVolsComponent {
    @Input() vols: Vol[] = [];
    @Output() volSelectionne = new EventEmitter<Vol>();
  compagnieLogos = COMPAGNIE_LOGOS;

  ngOnChanges() {
  console.log('Vols reçus par ListeVolsComponent :', this.vols);
}

  selectedVol: Vol | null = null;

  selectionnerVol(vol: Vol) {
    this.selectedVol = vol;
    this.volSelectionne.emit(vol);
  }
}
