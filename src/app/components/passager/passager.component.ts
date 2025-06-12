import { Component, Input } from '@angular/core';
import { Passager } from '../../models/passager.model';
import { MatIconModule } from '@angular/material/icon';
import { ClasseVolColorDirective } from '../../directives/ClasseVolColorDirective.directive';
import { LimiteBagagesDirective } from '../../directives/LimiteBagagesDirective.directive';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-passager',
  standalone: true,
imports: [
  MatIconModule,
  ClasseVolColorDirective,
  LimiteBagagesDirective,
  CommonModule,
  MatTooltipModule
],
  templateUrl: './passager.component.html',
  styleUrls: ['./passager.component.scss']
})
export class PassagerComponent {
    @Input() passager!: Passager;
    @Input() afficherPhoto: boolean = false;
}
