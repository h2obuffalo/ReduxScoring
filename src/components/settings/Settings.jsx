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


  render() {
    let { name1, name2, winNo, serve } = this.state;

      return  (this.state.submit) ? null :(
      <Fragment>
      <h2>Settings</h2>
      <form onSubmit={ (e) => this.props.handleSave(e, this) }>
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