import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const FLEX_CONTAINER_ROW = {
  display: 'flex',
  'flex-direction': 'row',
  'justify-content': 'center'
}

export default class CyComponent extends React.Component {

  static defaultProps = {
    style: {
      display: 'flex',
      'flex-direction': 'column',
      height: '100%',
      width: '100%',
      paddingLeft: '1em',
      paddingRight: '1em',
      paddingTop: '0',
      paddingBottom: '0.1em'
    },
    theme: {},
    defaults: {
      serverName: "NDEx",
      serverAddress: "http://public.ndexbio.org",
      userName: "",
      userPass: ""
    },
    onSubmit: () => {},
    onLogout: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      serverName: this.props.defaults.serverName,
      serverAddress: this.props.defaults.serverAddress,
      user: this.props.defaults.userName,
      pass: this.props.defaults.userPass
    }
  }

  updateServerName = (event) => {
    this.setState({ serverName: event.target.value })
  }

  updateServerAddress = (event) => {
    this.setState({ serverAddress: event.target.value })
  }

  updateUser = (event) => {
    this.setState({ user: event.target.value })
  }

  updatePass = (event) => {
    this.setState({ pass: event.target.value })
  }

  login = () => {
      this.props.serverActions.setServer(this.state.serverName, this.state.serverAddress)
      if (this.state.user != "" && this.state.pass != "") {
        this.props.serverActions.login(this.state.user, this.state.pass)
      }
      this.props.onSubmit()
  }

  logout = () => {
    this.props.onLogout()
  }

  render() {
    const theme = getMuiTheme(this.props.theme)
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Paper zDepth={3} style={this.props.style}>
          <TextField
            hintText="Server Name"
            floatingLabelText="Server Name"
            fullWidth={true}
            value={this.state.serverName}
            onChange={this.updateServerName}
          />
          <TextField
            hintText="Server Address"
            floatingLabelText="Server Address"
            fullWidth={true}
            value={this.state.serverAddress}
            onChange={this.updateServerAddress}
          />
          <TextField
            hintText="Username Field"
            floatingLabelText="Username"
            fullWidth={true}
            value={this.state.user}
            onChange={this.updateUser}
          />
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            fullWidth={true}
            value={this.state.pass}
            onChange={this.updatePass}
          />
          <div style={FLEX_CONTAINER_ROW}>
            <RaisedButton
              label="Logout"
              style={{width: '50%'}}
              onClick={this.logout}
            />
            <RaisedButton
              label="Login"
              secondary={true}
              style={{width: '50%', marginLeft: '4px'}}
              onClick={this.login}
            />
          </div>
        </Paper>
      </MuiThemeProvider>
    )
  }

}
