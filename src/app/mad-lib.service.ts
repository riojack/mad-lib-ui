import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MadLib } from './mad-lib';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MadLibService {
  constructor(private http: HttpClient) { }

  saveMadLib(madLib: MadLib): Observable<MadLib> {
    return this.http.post<MadLib>('/madlib', <MadLib>{});
  }
}
