import { connect } from 'react-redux';
import main from '../components/main';
import getAppData from '../actions/getAppData';
import traverseTree from '../actions/traverse';

const mapStateToProps = (state) => {
  const trees = state.treeData.trees;
  const indexArray = state.treeData.index;
  const treeDisplayArr = state.treeData.treeDisplayArr;
  return {
    trees, 
    nodes: state.treeData.nodes,
    treeDisplayArr 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (elem) => {
      dispatch({
        type: 'DEPTH_PLUS_ONE',
        value: elem
      }) 
    }
  }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(main);

export default MainContainer
