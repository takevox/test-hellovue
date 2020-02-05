export const Counter = {
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count ++;
        },
        decrement (state) {
            state.count --;
        },
        reset (state) {
            state.count = 0;
        }
    }
}
