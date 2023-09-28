export const state = () => {
  return {
    province: undefined,
    ee: undefined,
    pageInfo: {pageSize: 8, page: 1}
  }
}

export const mutations = {
  setProvince(state, payload) {
    state.province = payload
  },
  setEe(state, payload) {
    state.ee = payload
  },
  setPageInfo(state, payload) {
    state.pageInfo = payload;
  },
}