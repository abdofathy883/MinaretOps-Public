import { Injectable } from '@angular/core';
import { Api } from '../global-api/api';
import { ISubmitEntry } from '../../models/contact/i-submit-entry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private endpoint: string = 'contactform';
  constructor(private api: Api) {}

  submit(entry: ISubmitEntry): Observable<boolean> {
    return this.api.post<boolean>(this.endpoint, entry);
  }
}
