import React, { Component, Fragment } from "react";
import Input from './Input';


class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: this.props.name1,
      name2: this.props.name2,
      winNo: this.props.winNo,
      serve: this.props.serve,
      submit:this.props.submit,
    };
    this.handleName1 = this.handleName1.bind(this);
    this.handleName2 = this.handleName2.bind(this);
    this.handleWinNo =this.handleWinNo.bind(this);
    this.handleServe = this.handleServe.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }


  handleServe(e) {
    this.setState({
      serve : +e.currentTarget.value,
    });
  }

  handleName1(e) {
    this.setState({
      name1 : e.currentTarget.value,
    });
  }

  handleName2(e) {
    this.setState({
      name2 : e.currentTarget.value,
    });
  }

  handleWinNo(e) {
    this.setState({
      winNo: +e.currentTarget.value,
    })
  }

  handleSave(e) {
    e.preventDefault();
    this.props.handleSave(this.state);
    this.setState({submit: !this.state.submit })
  }


  render() {
    let { name1, name2, winNo, serve } = this.state;

      return  (
      <Fragment>
      <h2>Start Game</h2>
      <h3>enter names to start</h3>
      <form onSubmit={ this.handleSave }>
        <div className="form-group">
          <Input
          label="Player 1 name"
          handler={this.handleName1}
          value={name1}
          />
          <Input
          label="Player 2 name"
          handler={this.handleName2}
          value={name2}
          />
           <Input
          label="Winning Score"
          handler={this.handleWinNo}
          value={winNo}
          />
          <Input
          label="Serve change on"
          handler={this.handleServe}
          value={serve}
          />
        </div>
        <button className="btn btn-primary">Save</button>
      </form>
      </Fragment>
    );
  }
}

export default Settings;