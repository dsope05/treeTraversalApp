import { connect } from 'react-redux';
import treeComponent from '../components/treeComponent';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => {
  const childrenDisplayArr = state.treeData.childrenDisplayArr;
  console.log('childrenDisplayArr', childrenDisplayArr);
  // display last elem of array 

  const childrenArrLastElem = childrenDisplayArr[childrenDisplayArr.length - 1] 
  const childArrLength = childrenDisplayArr.length;
  return {
    childrenArrLastElem,
    childArrLength

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (elem) => {
      dispatch({
        type: 'DEPTH_PLUS_ONE',
        value: elem 
      }) 
    },
    clearIndexArray: () => {
      dispatch({type: 'CLEAR_INDEX_ARRAY'}) 
    },
    goBack: (childArrLength, history) => {
      console.log('hist', history);
      if (childArrLength > 1) {
        dispatch({type: 'GO_BACK'}); 
      } else {
        history.goBack();
        dispatch({type: 'CLEAR_INDEX_ARRAY'});
      }
    }
  }
}

const TreeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(treeComponent));

export default TreeContainer; 
