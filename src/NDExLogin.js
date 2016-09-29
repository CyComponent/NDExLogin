import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NDExLogin from './component/NDExLogin'

import { serverActions, settingActions } from  'ndex-store'

import './style/component.scss'

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    serverActions: bindActionCreators(serverActions, dispatch),
    settingActions: bindActionCreators(settingActions, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NDExLogin)
