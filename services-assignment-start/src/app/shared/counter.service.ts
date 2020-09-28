import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {
  private activeToInactiveCount = 0;
  private inactiveToActiveCount = 0;

  activeToInactiveOccured = new EventEmitter<void>();
  inactiveToActiveOccured = new EventEmitter<void>();

  constructor() {
    this.activeToInactiveOccured.subscribe(() => {
      this.activeToInactiveCount++;
      console.log('Active -> Inactive (Count) = ' + this.activeToInactiveCount);
    });

    this.inactiveToActiveOccured.subscribe(() => {
      this.inactiveToActiveCount++;
      console.log('Inactive -> Active (Count) = ' + this.inactiveToActiveCount);
    });
  }
}
