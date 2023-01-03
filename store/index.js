// import gql from 'graphql-tag';
// import apolloClient from '../utils/apolloClient';


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

// export const actions = {
//   async fetchContentCard({commit}) {
//     const response = await query({
//       query: gql`
//         query getProductId($id: String!) {
//           getContent(id: $id) {
//               title
//               embeddable
//               allow_download
//               description
//             }
//           }
//         `,
//         variables: { id: cardId},
//     });
//     console.log('caiu na action')
//     commit('SET_PRODUCT_LIST', response.data.getContent)
//   },
// }

// export const actions = {
//   async fetchContentCard({ commit }) {
//     console.time('fetchContentCard')

//     const response = await apolloClient.query({
//       query: gql`
//       query getProductId($id: String!) {
//         getContent(id: $id) {
//           title
//           embeddable
//           allow_download
//           description
//         }
//       }
//       `,
//        variables: { id: cardId},
//     })

//     const { cardList } = response.data
//     commit('SET_PRODUCT_LIST', { cardList })

//     console.timeEnd('tuimmmmmmmm')
//   }
// }

