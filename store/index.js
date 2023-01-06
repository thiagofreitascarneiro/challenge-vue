
export const state = () => ({
  cardId: 'aaaaaaaaaa',
  cardList: {},
})

export const mutations = {
  SET_PRODUCT_ID(state, id) {
    console.log(state.cardId)
    state.cardId = id
    console.log(state.cardId)
  },
  SET_PRODUCT_LIST(state, payload) {
    state.cardList = payload
  }
}


