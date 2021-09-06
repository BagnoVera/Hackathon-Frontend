const state = {
  header: 'This is a test header',
  subheader: 'This is a test subheader',
  description:'This is a long test description Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  questions: [{
    description:' this is question 1 description',
    responces: [{
      text: 'this is question 1 responce 1',
      correct: false
    },{
      text: 'this is question 1 responce 2',
      correct: false
    },{
      text: 'this is question 1 responce 3',
      correct: true
    },{
      text: 'this is question 1 responce 4',
      correct: false
    }]
  },{
    description:' this is question 2 description',
    responces: [{
      text: 'this is question 2 responce 1',
      correct: false
    },{
      text: 'this is question 2 responce 2',
      correct: true
    },{
      text: 'this is question 2 responce 3',
      correct: false
    },{
      text: 'this is question 2 responce 4',
      correct: false
    }]
  }],
  results:[]
};

const getters = {
  header(state) {
    return state.header;
  },
  subheader(state) {
    return state.subheader;
  },
  description(state) {
    return state.description;
  },
  questions(state) {
    return state.questions;
  },
  results(state) {
    return state.results;
  }
};
const mutations = {
  setResponce(state, result) {
    state.results.push(result);
  }
}
export default {
  state,
  getters,
  mutations
};
