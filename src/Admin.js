import React, {Component} from 'react';
import axios from 'axios';

export default class Admin extends Component {
  state = {
    username: '',
    password: '',
    basariliGiris: false,
    fikirler: '',
  };

  girisYap = () => {
    const {username, password} = this.state;
    // key : value -> username : username -> username
    axios
      .post('http://localhost:5555/giris', {username, password})
      .then((res) => {
        if (res.data === 'basarili') {
          this.setState({basariliGiris: true});
          this.fikirleriCek();
        }
      });
  };

  fikirleriCek = () => {
    axios.get('http://localhost:5555/fikirler').then((res) => {
      this.setState({fikirler: res.data});
    });
  };

  render() {
    if (this.state.basariliGiris)
      return (
        <div className="text-center mt-3">
          <h1 onClick={() => console.log(this.state.fikirler)}>Fikirler</h1>
          <ul>
            {this.state.fikirler
              ? this.state.fikirler.map((item) => <li key={item._id}>{item.fikir}</li>)
              : null}
          </ul>
        </div>
      );
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
              type="password"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Şifre"
              value={this.state.password}
              onChange={(e) => this.setState({password: e.target.value})}
            />
          </div>
          <button className="btn btn-success w-100" onClick={this.girisYap}>
            Gönder
          </button>
        </div>
      </div>
    );
  }
}
