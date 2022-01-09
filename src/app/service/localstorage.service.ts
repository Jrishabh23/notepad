import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  getData(): Observable<any> {
    const list: any = localStorage.getItem('list');
    const lists = JSON.parse(list);
    return lists ?? [];
  }
}
