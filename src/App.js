import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import logo from "./assets/logo.png";
import Lottie from "react-lottie";
import Loader from "react-loader-spinner";
import successmessage from "./assets/success.json";
import axios from "axios";
import BasicData from "./Pages/Components/basicData";
import Address from "./Pages/Components/address";
import Imovel from "./Pages/Components/imovel";
import InfoBank from "./Pages/Components/infoBank";
import UploadDocs from "./Pages/Components/uploadDocs";
import "./App.css";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const API_PATH = "./services/index.php";

function App() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState(0);
  const [data, setData] = useState([]);
  const concluido = "Concluir";
  const returnSuccess = {
    loop: false,
    autoplay: true,
    animationData: successmessage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const routeProps = {
    0: { name: "Dados pessoais", route: "personal" },
    1: { name: "Logradouro", route: "address" },
    2: { name: "dados bancarios", route: "bank" },
    3: { name: "imóvel", route: "property" },
    4: { name: "Documentação", route: "documents" },
  };

  const schemaFields = {
    personal: {
      name: Yup.string().required("Campo nome obrigatório"),
      taxId: Yup.string().required("Campo CPF obrigatório"),
      email: Yup.string().required("Campo e-mail obrigatório"),
      nationality: Yup.string().required("Campo nacionalidade obrigatório"),
      profession: Yup.string().required("Campo profissão obrigatório"),
      monthlyIncome: Yup.string().required("Campo renda mensal obrigatório"),
      maritalStatus: Yup.string().required("Campo estado civil obrigatório"),
    },
    address: {
      street: Yup.string().required("Campo Logradouro obrigatório"),
      number: Yup.string().required("Campo Numero obrigatório"),
      cep: Yup.string().required("Campo CEP obrigatório"),
      city: Yup.string().required("Campo Cidade obrigatório"),
      state: Yup.string().required("Campo Estado obrigatório"),
      immobile: Yup.string().required("Campo Imóvel obrigatório"),
    },
    bank: {
      bank: Yup.string().required("Campo Banco obrigatório"),
      agency: Yup.string().required("Campo Agência obrigatório"),
      account: Yup.string().required("Campo Conta obrigatório"),
    },
    property: {
      propertyValue: Yup.string().required("Campo Valor do imóvel obrigatório"),
      financingAmount: Yup.string().required(
        "Campo Valor pretendido do financiamento obrigatório"
      ),
      fgtsAmount: Yup.string().when("willYouUseFgts", {
        is: "true", // alternatively: (val) => val == true
        then: Yup.string().required("Campo Valor do FGTS obrigatório"),
      }),
      iqBank: Yup.string().when("iq", {
        is: "true", // alternatively: (val) => val == true
        then: Yup.string().required("iqBank Valor do FGTS obrigatório"),
      }),

      payingIntervener: Yup.string().required(
        "Campo Interveniente Quitante obrigatório"
      ),
    },
    documents: {
      cnh: Yup.mixed()
        .required("You need to provide a file")
        .test("fileSize", "The file is too large", (value) => {
          return value && value[0]?.size <= 2000000;
        })
        .test("type", "We only support jpeg", (value) => {
          return (
            value &&
            ["image/jpeg", "image/png", "application/pdf"].includes(
              value[0]?.type
            )
          );
        }),
    },
  };

  const schema = Yup.object().shape({
    ...schemaFields.personal,
    ...schemaFields.address,
    ...schemaFields.bank,
    ...schemaFields.property,
    ...schemaFields.documents,
  });

  async function validateStep() {
    const values = getValues();

    const sc = schemaFields[routeProps[step].route];
    const stepSchema = Yup.object().shape(sc);
    let valid = false;

    try {
      await stepSchema.validate(values, { abortEarly: false });
      valid = true;
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          setError(err.path, { message: err.message });
        });
      }
    }

    return valid;
  }

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  async function onNext(e) {
    const valid = await validateStep();
    if (valid === false) return false;
    setStep(step + 1);
  }

  function onPrev() {
    setStep(step - 1);
  }

  const render = () => {
    if (step === 0) {
      return <BasicData {...{ register, errors, getValues, watch }} />;
    } else if (step === 1) {
      return <Address {...{ register, errors }} />;
    } else if (step === 2) {
      return <InfoBank {...{ register, errors }} />;
    } else if (step === 3) {
      return <Imovel {...{ register, errors }} />;
    } else if (step === 4) {
      return <UploadDocs {...{ register, errors }} />;
    }
  };

  async function handleFormSubmit(value) {
    const valid = await validateStep();
    if (valid === false) return false;
    try {
      setLoading(true);
      const formData = new FormData();
      const cnhFile = value.cnh[0];
      const documentsFile = value.documents[0];

      Object.keys(value).forEach((name) => {
        if (name === "cnh") {
          formData.append("cnh", cnhFile);
          formData.append("documents", documentsFile);
        } else {
          formData.append(name, value[name]);
        }
      });

      axios({
        method: "post",
        url: `${API_PATH}`,
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
        data: formData,
      })
        .then((result) => {
          setLoading(false);
          setSuccess(true);
        })
        .catch((error) => console.log({ error: error.message }));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <div className="form">
        <img className="form-img" alt="logo-awd" src={logo} />
        {success ? (
          <>
            <Lottie options={returnSuccess} height={250} width={250} />
            <strong>em breve entraremos em contato</strong>
          </>
        ) : (
          <>
            <span>
              Usamos tecnologia para te conectar ao crédito imobiliário que você
              precisa. Em vez de procurar de banco em banco, gastando tempo e
              dinheiro, nós fazemos a busca e encontramos a melhor condição de
              financiamento imobiliário para você. Com acesso a todos os maiores
              Bancos e Instituições Financeiras do Brasil, para garantir a sua
              liberdade de escolha!
            </span>
            <strong>entre em contato</strong>

            <form onSubmit={handleSubmit(handleFormSubmit)}>
              {render()}

              <div>
                <button
                  type="button"
                  onClick={(e) => {
                    step < 4 ? onNext(e) : handleFormSubmit(getValues());
                  }}
                  disabled={loading}
                >
                  {loading ? (
                    <Loader
                      type="TailSpin"
                      color="#ffffff"
                      height={20}
                      width={20}
                    />
                  ) : step >= 4 ? (
                    concluido
                  ) : (
                    "Próximo"
                  )}
                </button>
                {step > 0 ? (
                  <button onClick={() => onPrev()} disabled={loading}>
                    Voltar
                  </button>
                ) : null}
              </div>
            </form>
            <button onClick={() => console.log(getValues())}>teste</button>
          </>
        )}

        <p className="form-p">
          Avenida Guapira, 701 contato@awdbank.com.br 38.368.975/0001-40
        </p>
      </div>

      <div className="intro">
        <img className="custom-img" alt="logo-awd" src={logo} />
        <p>Avenida Guapira, 701 contato@awdbank.com.br 38.368.975/0001-40</p>
      </div>
    </div>
  );
}

export default App;
