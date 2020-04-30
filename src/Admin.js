import React, {Component} from 'react';

export default class Admin extends Component {
    state={
        username:'',
        password:'',
    }

  render() {
    return (
      <div className="text-center mt-3">
        <h1>Admin Panel Giriş Formu</h1>
        <div className="mx-auto w-25 mt-5">
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Kullanıcı adı</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Kullanıcı adı"
              value={this.state.username}
              onChange={(e) => this.setState({username: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput2">Şifre</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Şifre"
              value={this.state.password}
              onChange={(e) => this.setState({password: e.target.value})}
            />
          </div>
          <button className="btn btn-success w-100" onClick={this.formuGonder}>
            Gönder
          </button>
        </div>
      </div>
    );
  }
}
