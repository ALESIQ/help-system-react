import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';


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
      <div class="card">
        <div class="flex flex-wrap align-items-center justify-content-center card-container" >
          <div className='align-items-center content-center' style={{ width: '30%', paddingTop: '11%' }}>

            <div className="flex flex-wrap align-items-center justify-content-center card-container">
              <div className='align-items-center content-center'>
                <Image src='http://tri7.com.br/skin/theme/images/tri7.png' width='250' />
              </div>
            </div>

            <div className="p-inputgroup" style={{ paddingTop: '20px' }}>

              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>

              <span className="p-float-label">
                <InputText id="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                <label htmlFor="email">Email</label>
              </span>
            </div>



            <div className="p-inputgroup" style={{ paddingTop: '20px' }}>
              <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
              </span>

              <span className="p-float-label">
                <Password inputId="Senha" value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} toggleMask />
                <label htmlFor="Senha">Senha</label>
              </span>
            </div>
            <div className="flex flex-wrap align-items-center card-container" style={{paddingTop: '5px'}}>          
                <a href= 'tela cadastro'>Esqueci minha senha</a>              
            </div>              

            <div className="flex flex-wrap align-items-center justify-content-center card-container" style={{ paddingTop: '20px' }}>
              <div className='align-items-center content-center' style={{ width: '50%', }}>
                <Button label="Login" className="p-button-rounded" style={{ width: '100%', backgroundColor: '#4baaf5' }} />
              </div>
            </div>

            <div className="flex flex-wrap align-items-center justify-content-center card-container" style={{paddingTop: '5px'}}>
              <div className='align-items-center content-center' >
                <a href= 'tela recuperar senha'> Cadastrar</a>
              </div>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}
export default Login; 
