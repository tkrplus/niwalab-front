import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  sampleAction,
  sampleCounterAction
} from 'src/redux/modules/Top'
import Sample from './Sample'

const mapStateToProps = (state) => {
  const sample = state.Top.sample
  const count = state.Top.count
  return {
    sample,
    count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sampleAction: () => {
      dispatch(sampleAction())
    },
    sampleCounterAction: () => {
      dispatch(sampleCounterAction())
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Sample))
