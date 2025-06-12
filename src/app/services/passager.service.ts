import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Passager, IPassagerDto } from '../models/passager.model';

@Injectable({
  providedIn: 'root'
})
export class PassagerService {
  constructor(private http: HttpClient) {}

  getPassagers(seed: string): Observable<Passager[]> {
    const url = `https://randomuser.me/api/?results=20&inc=name,picture,email&seed=${seed}`;
    return this.http.get<any>(url).pipe(
      map((response) =>
        response.results.map((dto: IPassagerDto) => new Passager(dto))
      )
    );
  }
}
