import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NDExLogin from './component/NDExLogin'

import * as serverActions from './store/server'

import './style/component.scss'

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    serverActions: bindActionCreators(serverActions, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NDExLogin)
