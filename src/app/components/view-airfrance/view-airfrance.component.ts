import { Component } from '@angular/core';
import { FiltresComponent } from '../filtres/filtres.component';
import { ListeVolsComponent } from '../liste-vols/liste-vols.component';
import { ListePassagersComponent } from '../liste-passagers/liste-passagers.component';
import { VolService } from '../../services/vol.service';
import { Vol } from '../../models/vol.model';
import { Passager } from '../../models/passager.model';
import { PassagerService } from '../../services/passager.service';
import { ActivatedRoute } from '@angular/router';

type TypeRecherche = 'departure' | 'arrival';

@Component({
    selector: 'app-view-airfrance',
    imports: [FiltresComponent, ListeVolsComponent, ListePassagersComponent],
    templateUrl: './view-airfrance.component.html',
    styleUrls: ['./view-airfrance.component.scss']
})
export class ViewAirFranceComponent {
    typeRecherche: TypeRecherche = 'departure';
    vols: Vol[] = [];
    
    constructor(
      private volService: VolService,
      private passagerService: PassagerService,
      private route: ActivatedRoute
    ) {
      this.route.data.subscribe((data) => {
        this.typeRecherche = data['type'] || 'departure';
        console.log('Type de recherche détecté :', this.typeRecherche);
      });
    }

    appliquerFiltres(event: { aeroport: any, debut: Date, fin: Date }) {
      const aeroportCode = event.aeroport.code;
      const debutSeconds = Math.floor(event.debut.getTime() / 1000);
      const finSeconds = Math.floor(event.fin.getTime() / 1000);

      if (this.typeRecherche === 'departure') {
        this.volService.getVolsDepart(aeroportCode, debutSeconds, finSeconds).subscribe({
          next: (data) => {
            console.log('Vols départ récupérés :', data);
            this.vols = data;
          },
          error: (err) => console.error('Erreur vols départ :', err),
        });
      } else {
        this.volService.getVolsArrivee(aeroportCode, debutSeconds, finSeconds).subscribe({
          next: (data) => {
            console.log('Vols arrivée récupérés :', data);
            this.vols = data;
          },
          error: (err) => console.error('Erreur vols arrivée :', err),
        });
      }
    }

    passagers: Passager[] = [];

    chargerPassagers(vol: Vol) {
  console.log('Vol sélectionné dans parent :', vol);
  this.passagerService.getPassagers(vol.icao).subscribe({
    next: (data: Passager[]) => {
      console.log('Passagers récupérés :', data);
      this.passagers = data;
    },
    error: (err: any) => {
      console.error('Erreur lors de la récupération des passagers :', err);
    }
  });
}
}
