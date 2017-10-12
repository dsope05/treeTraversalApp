import { connect } from 'react-redux';
import stayWoke from '../components/stayWoke';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => {

  return {
    woke: 'yah' 
  }

}

const mapDispatchToProps = (dispatch) => {
  
  return {
    clearIndexArray: () => {
      dispatch({type: 'CLEAR_INDEX_ARRAY'}) 
    }
  }
}

const Woke = connect(mapStateToProps, mapDispatchToProps)(stayWoke);

export default Woke
