import React, { useEffect, useState, useRef } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import InputMask from "react-input-mask";

export function BasicData({ register, errors, getValues, watch }) {
  const [checked, setChecked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const inputRef = useRef(null);

  function handleChangeIncome(e) {
    setChecked(!checked);
  }
  useEffect(() => {}, [checked]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <div className="formGroup large">
            <label>
              <span className="required">* </span>Nome:{" "}
            </label>
            <input id="name" {...register("name")} />
            <p>{errors.name?.message}</p>
          </div>
          <div className="formGroup small">
            <label>
              <span className="required">* </span>Cpf:{" "}
            </label>
            <InputMask
              mask="999.999.999-99"
              id="cpf"
              {...register("cpf")}
            />
            <p>{errors.cpf?.message}</p>
          </div>
          <div className="formGroup  large">
            <label>
              <span className="required">* </span>E-mail:{" "}
            </label>
            <input type="email" id="email" {...register("email")} />
            <p>{errors.email?.message}</p>
          </div>
          <div className="formGroup small">
            <label>
              <span className="required">* </span>Nacionalidade:{" "}
            </label>
            <input id="nacionalidade" {...register("nacionalidade")} />
            <p>{errors.nacionalidade?.message}</p>
          </div>
          <div className="formGroup large">
            <label>
              <span className="required">* </span>Profissão:{" "}
            </label>
            <input id="profissao" {...register("profissao")} />
            <p>{errors.profissao?.message}</p>
          </div>
          <div className="formGroup small">
            <label>
              <span className="required">* </span>Renda mensal:{" "}
            </label>
            <input id="rendaMensal" {...register("rendaMensal")} />
            <p>{errors.rendaMensal?.message}</p>
          </div>
          <div className="formGroup small">
            <label>
              <span className="required">* </span>Estado civil:{" "}
            </label>
            <select id="estadoCivil" {...register("estadoCivil")}>
              <option value="solteiro(a)">Solteiro(a)</option>
              <option value="casado(a)">Casado(a)</option>
              <option value="separado(a)">Separado(a)</option>
              <option value="divorciado(a)">Divorciado(a)</option>
              <option value="viuvo(a)">Viúvo(a)</option>
            </select>
            <p>{errors.estadoCivil?.message}</p>
          </div>
          <div className="formGroup small">
            <label>Irá compor renda?</label>
            <div className="d-flex">
              <input
                {...register("vaiComporRenda")}
                type="checkbox"
                id="vaiComporRenda"
                value={checked}
                onClick={handleChangeIncome}
              />
              <button
                type="button"
                onClick={showModal}
                disabled={!watch("vaiComporRenda")}
              >
                Dados do dependente
              </button>
            </div>
          </div>
        </div>
        <>
          <Modal
            closable={false}
            title="Dados do dependente"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div className="formGroupModal">
              <label>
                <span className="required">* </span>Nome:{" "}
              </label>
              <input id="fname" {...register("nameDependente")} />
              <p>{errors.name?.message}</p>
            </div>
            <div className="formGroupModal">
              <label>
                <span className="required">* </span>Cpf:{" "}
              </label>
              <InputMask
              mask="999.999.999-99"
              id="cpfDependente" 
              {...register("cpfDependente")} />
              <p>{errors.cpfDependente?.message}</p>
            </div>
            <div className="formGroupModal">
              <label>
                <span className="required">* </span>E-mail:{" "}
              </label>
              <input id="femail" {...register("emailDependente")} />
              <p>{errors.email?.message}</p>
            </div>
            <div className="formGroupModal">
              <label>
                <span className="required">* </span>Nacionalidade:{" "}
              </label>
              <input id="nacionalidadeDependente" {...register("nacionalidadeDependente")} />
              <p>{errors.nacionalidadeDependente?.message}</p>
            </div>
            <div className="formGroupModal">
              <label>
                <span className="required">* </span>Profissão:{" "}
              </label>
              <input id="profissaoDependente" {...register("profissaoDependente")} />
              <p>{errors.profissaoDependente?.message}</p>
            </div>
            <div className="formGroupModal">
              <label>
                <span className="required">* </span>Renda mensal:{" "}
              </label>
              <input id="rendaMensalDependente" {...register("rendaMensalDependente")} />
              <p>{errors.rendaMensalDependente?.message}</p>
            </div>
            <div className="formGroupModal">
              <label>
                <span className="required">* </span>Estado civil:{" "}
              </label>
              <input id="estadoCiviDependentel" {...register("estadoCiviDependentel")} />
              <p>{errors.estadoCiviDependentel?.message}</p>
            </div>
          </Modal>
        </>
      </div>
    </>
  );
}

export default BasicData;
