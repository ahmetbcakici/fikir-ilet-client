import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Admin from './Admin';

export default class App extends Component {
  state = {
    tamIsim: '',
    emailAdres: '',
    fikirTuru: 'Öneri',
    fikir: '',
    alertSuccessDisplay: 'none',
    alertErrorDisplay: 'none',
    adminPanelMi: false,
  };

  alanlariTemizle = () => {
    this.setState({tamIsim: '', emailAdres: '', fikirTuru: 'Öneri', fikir: ''});
  };

  formValidation = () => {
    const {tamIsim, emailAdres, fikirTuru, fikir} = this.state;

    if (!tamIsim || !emailAdres || !fikirTuru || !fikir) return false;

    return true;
  };

  formuGonder = () => {
    const {tamIsim, emailAdres, fikirTuru, fikir} = this.state;

    if (!this.formValidation()) return;

    axios
      .post('http://localhost:5555/fikirkaydet', {
        tamIsim,
        emailAdres,
        fikirTuru,
        fikir,
      })
      .then((res) => {
        this.alanlariTemizle();
        this.setState({alertSuccessDisplay: 'block'});
        setTimeout(() => {
          this.setState({alertSuccessDisplay: 'none'});
        }, 1500);
      })
      .catch((err) => {
        this.setState({alertErrorDisplay: 'block'});
      });
  };

  render() {
    if (this.state.adminPanelMi) return <Admin />;
    return (
      <div className="text-center mt-3">
        <h1>Fikir İlet Uygulaması</h1>

        <div className="mx-auto w-25 mt-5">
          <div
            className="alert alert-success"
            role="alert"
            style={{display: this.state.alertSuccessDisplay}}
          >
            Fikriniz başarı ile iletildi!
          </div>

          <div
            className="alert alert-danger"
            role="alert"
            style={{display: this.state.alertErrorDisplay}}
          >
            This is a danger alert—check it out!
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Ad Soyad</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Ad Soyad"
              value={this.state.tamIsim}
              onChange={(e) => this.setState({tamIsim: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput2">Email adresi</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Mail adresiniz"
              value={this.state.emailAdres}
              onChange={(e) => this.setState({emailAdres: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Fikir Türü</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={(e) => this.setState({fikirTuru: e.target.value})}
            >
              <option>Öneri</option>
              <option>Hata Bildirme</option>
              <option>3</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Fikir</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={this.state.fikir}
              onChange={(e) => this.setState({fikir: e.target.value})}
            ></textarea>
          </div>
          <button className="btn btn-success" onClick={this.formuGonder}>
            Gönder
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <button className="btn btn-dark" onClick={() => this.setState({adminPanelMi:true})}>
          ADMIN PANEL
        </button>
      </div>
    );
  }
}
