import { combineReducers } from 'redux';

const treeData = (
  state = {
    treeDisplayArr: [],
    trees: [],
    nodes: [],
    childrenDisplayArr: []
  }
  , action) => {

  switch (action.type) {
    case 'GET_APP_DATA':
      if (!state.treeDisplayArr.length) {
        action.trees.forEach((tree, i)=> {
          state.treeDisplayArr.push(tree);
        });
      }
      return Object.assign({}, state, {
        trees: action.trees,
        nodes: action.nodes });
    case 'DEPTH_PLUS_ONE':
      console.log('reduceraction', action);
        state.childrenDisplayArr.push(action.value.children);
      return Object.assign({}, state);
    case 'CLEAR_INDEX_ARRAY':
      return Object.assign({}, state, {childrenDisplayArr: []});
    case 'GO_BACK':
      let length = state.childrenDisplayArr.length;
      if (length >0) {
        state.childrenDisplayArr.splice(length - 1, 1);
      }
      return Object.assign({}, state);
    default:
      return state;
  }

  }

const wokeApp = combineReducers({
  treeData 
});

export default wokeApp


