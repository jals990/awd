import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from "react-hook-form";
import './App.css';
import logo from './assets/logo.png';
import Lottie from "react-lottie";
import Loader from "react-loader-spinner";
import successmessage from "./assets/success.json";
import countryList from 'react-select-country-list';
import axios from 'axios'

const API_PATH = './services/index.php'

function App() {

  const {register, handleSubmit, formState: { errors }} = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const options = useMemo(() => countryList().getData(), []);
  const returnSuccess = {
    loop: false,
    autoplay: true,
    animationData: successmessage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  function handleFormSubmit(value){
    setLoading(true)
    const {name, email, tel} = value
    console.log('res', name, email, tel)
    axios({
      method: 'post',
      url:`${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: value
      })
    .then(result => {
      console.log('Enviado com sucesso!!!');
      setLoading(false)
    })
    .catch(error => console.log({ error: error.message }));
  }
  

  return (
    <div className="App">
      <div className="form">
      <img className="form-img" alt="logo-awd" src={logo} />
        {success ? (
          <>
          <Lottie
              options={returnSuccess}
              height={250}
              width={250}
          />
          <strong>em breve entraremos em contato</strong>
          </>
        ): (
          <>
            <span>
              Usamos tecnologia para te conectar ao crédito imobiliário que você precisa. Em vez de procurar de banco em banco, gastando tempo e dinheiro, nós fazemos a busca e encontramos a melhor condição de financiamento imobiliário para você. Com acesso a todos os maiores Bancos e Instituições Financeiras do Brasil, para garantir a sua liberdade de escolha!
            </span>
            <strong>entre em contato</strong>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <label>Nome</label>
              <input type="text" id="name" {...register('name')} />
              <label>Seu melhor e-mail</label>
              <input type="text" id="email" {...register('email')} />
              <label>Seu melhor telefone</label>
              <input type="text" id="tel" {...register('tel')} />
              <button
                type="submit"
                disabled={loading}
              >
                {loading ? (
                    <Loader type="TailSpin" color="#ffffff" height={20} width={20} />
                ) : (
                  "Enviar"
                )}
              </button>
            </form>
          </>
        )}
        
        <p className="form-p">
        Avenida Guapira, 701 
        contato@awdbank.com.br 
        38.368.975/0001-40 
        </p>
      </div>

      <div className="intro">
        <img className="custom-img" alt="logo-awd" src={logo} />
        <p>
          Avenida Guapira, 701 
          contato@awdbank.com.br 
          38.368.975/0001-40 
        </p>
      </div>
    </div>
        
  );
}

export default App;
