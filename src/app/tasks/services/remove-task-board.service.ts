import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoveTaskBoardService {

  cancelledDelete$ = new Subject<any>();
  removeRecord$ = new Subject<string>();

  constructor() { }
}
