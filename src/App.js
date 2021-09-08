import React, { useMemo, useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import Lottie from "react-lottie";
import Loader from "react-loader-spinner";
import { Form, Input } from "@rocketseat/unform";
import { sendMail } from './services/mail';
import successmessage from "./assets/success.json";
import countryList from 'react-select-country-list'

function App() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const options = useMemo(() => countryList().getData(), [])
  const returnSuccess = {
    loop: false,
    autoplay: true,
    animationData: successmessage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  async function handleSubmit(values){
    setLoading(!loading);
    await sendMail(values).then(setSuccess(true))
    
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
            <PhoneInput
              country={'us'}
            />
            <Form onSubmit={handleSubmit}>
              <label>Nome</label>
              <Input type="text" id="name" name="name" />
              <label>Seu melhor e-mail</label>
              <Input type="text" id="email" name="email" />
              <label>Seu melhor telefone</label>
              <Input type="text" id="tel" name="tel" />
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
            </Form>
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
