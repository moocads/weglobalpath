export const state = () => {
  return {
    province: undefined,
    ee: undefined
  }
}

export const mutations = {
  setProvince(state, payload) {
    state.province = payload
  },
  setEe(state, payload) {
    state.ee = payload
  },
}