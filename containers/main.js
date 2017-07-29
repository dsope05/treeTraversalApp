import { connect } from 'react-redux';
import stayWoke from '../components/stayWoke';
const mapStateToProps = (state) => {

  return {
    woke: 'yah' 
  }

}

const mapDispatchToProps = (dispatch) => {
  
  return {
    button: () => {
      dispatch({type: 'STAY_WOKE'}) 
    }
  }
}

const Woke = connect(mapStateToProps, mapDispatchToProps)(stayWoke);

export default Woke
