import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Top from './Top'

const mapStateToProps = (State) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Top))
