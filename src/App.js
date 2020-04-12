import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  state = {
    tamIsim:'',
    emailAdres:'',
    fikirTuru:'Öneri',
    fikir:''
  }

  formuGonder = () => {
    const {tamIsim,emailAdres,fikirTuru,fikir} = this.state;
    axios.post('http://localhost:5555/fikirkaydet',{tamIsim,emailAdres,fikirTuru,fikir});
  }

  render() {
    return (
      <div className="text-center mt-3">
        <h1>Fikir İlet Uygulaması</h1>
        <div className="mx-auto w-25 mt-5">
          
            <div class="form-group">
              <label for="exampleFormControlInput1">Ad Soyad</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Ad Soyad"
                value={this.state.tamIsim}
                onChange={e => this.setState({tamIsim:e.target.value})}
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput2">Email adresi</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput2"
                placeholder="name@example.com"
                value={this.state.emailAdres}
                onChange={e => this.setState({emailAdres:e.target.value})}
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Fikir Türü</label>
              <select class="form-control" id="exampleFormControlSelect1" onChange={e => this.setState({fikirTuru:e.target.value})}>
                <option>Öneri</option>
                <option>Hata Bildirme</option>
                <option>3</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Fikir</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={this.state.fikir}
                onChange={e => this.setState({fikir:e.target.value})}
              ></textarea>
            </div>
            <button className="btn btn-success" onClick={this.formuGonder}>Gönder</button>
          
        </div>
      </div>
    );
  }
}
