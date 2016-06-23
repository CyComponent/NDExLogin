import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NDExLogin from './component/NDExLogin'

import sample, * as sampleActions from './store/sample'

import * as serverActions from './store/server'

require("./style/component.scss")

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    serverActions: bindActionCreators(serverActions, dispatch)
  }
}

const component = connect(
    mapStateToProps,
    mapDispatchToProps
  )(NDExLogin)

const storeName = 'login'
const store = { sample }

export {
  component,
  storeName,
  store,
  sampleActions
}
