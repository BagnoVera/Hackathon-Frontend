const state = {
  header: 'Как выглядит насилие?',
  subheader: 'Пройди тест и узнай, сможешь ли ты помочь ребенку в опасности.',
  description:'Этот анонимный опрос поможет в исследовании проблемы сексуализированного насилия над детьми.',
  questions: [{
    description:'Фейк или правда?',
    responce:'Эта фотография распространяется по социальным сетям много лет, но не известно ни одного случая вовлечения детей таким способом. По данным экспертов, работающих с темой сексуализированного насилия над детьми, 80% детей подверглись насилию от людей из ближайшего окружения ребенка.',
    image:'https://iili.io/ROo7Zx.jpg',
    responces: [{
      text: 'Фейк',
      correct: true
    },{
      text: 'Правда',
      correct: false
    }]
  },{
    description:'Как ведет себя ребенок, который подвергается насилию?',
    responce:'С первого взгляда можно не узнать, что ребенок подвергается сексуальному насилию. Преступники манипулируют ребенком так, что со стороны может показаться, что ничего страшного не происходит, однако, ребенку нужна помощь.',
    responces: [{
      text: 'Ребенок кричит, плачет, зовет на помощь',
      correct: false
    },{
      text: 'Ребенок сопротивляется и выражает протест ',
      correct: false
    },{
      text: 'Ребенок ведет себя и выглядит как обычно',
      correct: true
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
