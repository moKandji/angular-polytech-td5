import { Component, Input } from '@angular/core';
import { Passager } from '../../models/passager.model';
import { MatIconModule } from '@angular/material/icon';
import { PassagerComponent } from "../passager/passager.component";
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-liste-passagers',
    imports: [MatIconModule, PassagerComponent, CommonModule, MatSlideToggleModule, FormsModule],
    standalone: true,
    templateUrl: './liste-passagers.component.html',
    styleUrls: ['./liste-passagers.component.scss']
})
export class ListePassagersComponent {
    @Input() passagers: Passager[] = [];

    afficherPhotos = false;
}
