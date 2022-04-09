export default {
    state: {
        name: 'default'
      },
      mutations: {
        name: (state, newValue) => {
          state.name = newValue
        }
      },
      actions: {
        setName: (ctx, value) => {
          ctx.commit('name', value)
        }
      }
};
