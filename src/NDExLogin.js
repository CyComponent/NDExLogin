import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NDExLogin from './component/NDExLogin'

import sample, * as sampleActions from './store/sample'

require("./style/component.scss")

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    sampleActions: bindActionCreators(sampleActions, dispatch)
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
