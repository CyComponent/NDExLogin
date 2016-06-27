import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

export default class CyComponent extends React.Component {

  static defaultProps = {
    style: {
      height: '100%',
      width: '100%'
    },
    defaults: {
      serverName: "NDEx",
      serverAddress: "http://public.ndexbio.org",
      user: "",
      pass: ""
    },
    onSubmit: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      serverName: this.props.defaults.serverName,
      serverAddress: this.props.defaults.serverAddress,
      user: this.props.defaults.user,
      pass: this.props.defaults.pass
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

  render() {
    return (
      <MuiThemeProvider>
        <Paper zDepth={3} style={this.props.style}>
          <TextField
            hintText="Server Name"
            floatingLabelText="Server Name"
            fullWidth={true}
            value={this.state.serverName}
            onChange={this.updateServerName}
          />
          <br/>
          <TextField
            hintText="Server Address"
            floatingLabelText="Server Address"
            fullWidth={true}
            value={this.state.serverAddress}
            onChange={this.updateServerAddress}
          />
          <br/>
          <TextField
            hintText="Username Field"
            floatingLabelText="Username"
            fullWidth={true}
            value={this.state.user}
            onChange={this.updateUser}
          />
          <br/>
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            fullWidth={true}
            value={this.state.pass}
            onChange={this.updatePass}
          />
          <br/>
          <RaisedButton
            label="Submit"
            secondary={true}
            style={{ width: '100%'}}
            onClick={this.login}
          />
          <br/>
        </Paper>
      </MuiThemeProvider>
    )
  }

}
