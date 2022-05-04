import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';


export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: ''
    };
  }

  render() {
    return (
      <div>    
          <div className="p-inputgroup">

            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>

            <span className="p-float-label">
              <InputText id="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
              <label htmlFor="email">Email</label>
            </span>
          </div>



          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-lock"></i>
            </span>

            <span className="p-float-label">
              <Password inputId="Senha" value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} />
              <label htmlFor="Senha">Senha</label>
            </span>

          </div>        

      </div>
    );
  }
}
export default Login; 