import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

export default class CyComponent extends React.Component {

  static defaultProps = {
    onSubmit: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      serverName: "",
      serverAddress: "",
      user: "",
      pass: ""
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
      console.log("Login was")
      console.log(this.state.serverName),
      console.log(this.state.serverAddress),
      console.log(this.state.user),
      console.log(this.state.pass),
      this.props.onSubmit()
  }

  render() {
    return (
      <MuiThemeProvider>
        <Paper zDepth={3} style={{ width: '40%'}}>
          <TextField
            hintText="Server Name"
            floatingLabelText="Server Name"
            fullWidth={true}
            onChange={this.updateServerName}
          />
          <br/>
          <TextField
            hintText="Server Address"
            floatingLabelText="Server Address"
            fullWidth={true}
            onChange={this.updateServerAddress}
          />
          <br/>
          <TextField
            hintText="Username Field"
            floatingLabelText="Username"
            fullWidth={true}
            onChange={this.updateUser}
          />
          <br/>
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            fullWidth={true}
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
