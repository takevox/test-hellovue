export class CounterState {
    constructor(
        public count: number = 0,
    ) { }
}

export const Counter = {
    namespaced: true,
    state: new CounterState(),
    mutations: {
        increment (state: CounterState) {
            state.count ++;
        },
        decrement (state: CounterState) {
            state.count --;
        },
        reset (state: CounterState) {
            state.count = 0;
        }
    }
}
