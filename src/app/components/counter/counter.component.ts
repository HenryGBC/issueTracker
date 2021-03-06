import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, multiply, State } from '../../store';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;
  constructor(private store: Store<State>) {
    this.count$ = this.store.select((state) => state.count);
  }

  ngOnInit(): void {}

  increment(): void {
    this.store.dispatch(increment());
  }

  multiply(factor: string): void {
    this.store.dispatch(multiply({ factor: parseFloat(factor) }));
  }
}
