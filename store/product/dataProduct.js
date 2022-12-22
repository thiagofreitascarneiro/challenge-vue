import Vue from 'vue';
import Vuex from 'vuex';
import gql from 'graphql-tag';

import graphqlClient from '../../utils/graphql';

Vue.use(Vuex);

export const state = {
  productId: '',
};

export const mutations = {
  SET_PRODUCT_ID(state, id) {
    state.productId = id
    console.log(state.productId)
  }

};

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
          id: this.productId
        }
      }
    });
  },
};

export default new Vuex.Store({
  mutations,
  actions,
  state,
});
