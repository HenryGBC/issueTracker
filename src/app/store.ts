import { createAction, createReducer, on, ActionReducerMap } from '@ngrx/store';

export interface State {
  count: number;
}

export const increment = createAction('[Counter] Increment');

export const countReducer = createReducer(
  0,
  on(increment, (count) => {
    return count + 1;
  })
);

export const reducers: ActionReducerMap<State> = {
  count: countReducer,
};
