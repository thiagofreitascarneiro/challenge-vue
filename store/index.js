import gql from 'graphql-tag';
import graphqlClient from '../utils/graphql';


export const state = () => ({
  cardId: 'aaaaaaaaaa'
})

export const mutations = {
  SET_PRODUCT_ID(state, id) {
    console.log(state.cardId)
    state.cardId = id
    console.log(state.cardId)
  }
}

export const actions = {
  async fetchContentCard() {
    await graphqlClient.query({
      query: gql`
        query getProductId($id: String!) {
          getContent(id: $id) {
              id
              title
            }
          }
        `,
      variables() {
        return {
          id: this.cardId
        }
      }
    });
  },
}


