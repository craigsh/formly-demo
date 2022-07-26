import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, tap, withLatestFrom } from 'rxjs';

export interface StoreState {
	count: number;
	advancedMode: boolean;
}

const defaultState = {
	count: 0,
	advancedMode: false,
};

@Injectable()
export class MyStore extends ComponentStore<StoreState> {
	constructor() {
		super(defaultState);
	}

	readonly count$ = this.select((state) => state.count);

	readonly countTooHigh$ = this.select(this.count$, (count) => count > 10);
	readonly advancedMode$ = this.select((state) => state.advancedMode);
	readonly notAdvancedMode$ = this.select((state) => !state.advancedMode);

	readonly staffCodeInit = this.effect((trigger$: Observable<void>) => {
		return trigger$.pipe(
			tap(() => {
				console.log('staffCodeInit');
			}),
		);
	});

	readonly bumpClickCount = this.effect((trigger$: Observable<void>) => {
		return trigger$.pipe(
			tap(() => {
				const { count } = this.get();
				this.patchState({
					count: count + 1,
				});
			}),
		);
	});

	readonly resetCount = this.effect((trigger$: Observable<void>) => {
		return trigger$.pipe(
			tap(() => {
				this.patchState({
					count: 0,
				});
			}),
		);
	});

	readonly toggleAdvancedMode = this.effect((trigger$: Observable<void>) => {
		return trigger$.pipe(
			withLatestFrom(this.advancedMode$),
			tap(([, advancedMode]) => {
				this.patchState({
					advancedMode: !advancedMode,
				});

				console.log('advanced mode toggled', advancedMode);
			}),
		);
	});
}
