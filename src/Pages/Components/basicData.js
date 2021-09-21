import React, { useEffect, useState, useRef } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";

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
            <input id="taxId" {...register("taxId")} />
            <p>{errors.taxId?.message}</p>
          </div>
          <div className="formGroup  large">
            <label>
              <span className="required">* </span>E-mail:{" "}
            </label>
            <input id="email" {...register("email")} />
            <p>{errors.email?.message}</p>
          </div>
          <div className="formGroup small">
            <label>
              <span className="required">* </span>Nacionalidade:{" "}
            </label>
            <input id="nationality" {...register("nationality")} />
            <p>{errors.nationality?.message}</p>
          </div>
          <div className="formGroup large">
            <label>
              <span className="required">* </span>Profissão:{" "}
            </label>
            <input id="profession" {...register("profession")} />
            <p>{errors.profession?.message}</p>
          </div>
          <div className="formGroup small">
            <label>
              <span className="required">* </span>Renda mensal:{" "}
            </label>
            <input id="monthlyIncome" {...register("monthlyIncome")} />
            <p>{errors.monthlyIncome?.message}</p>
          </div>
          <div className="formGroup small">
            <label>
              <span className="required">* </span>Estado civil:{" "}
            </label>
            <input id="maritalStatus" {...register("maritalStatus")} />
            <p>{errors.maritalStatus?.message}</p>
          </div>
          <div className="formGroup small">
            <label>Irá compor renda?</label>
            <div className="d-flex">
              <input
                {...register("makesUpIncome")}
                type="checkbox"
                id="makesUpIncome"
                value={checked}
                onClick={handleChangeIncome}
              />
              <button
                type="button"
                onClick={showModal}
                disabled={!watch("makesUpIncome")}
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
              <input id="fname" {...register("fname")} />
              <p>{errors.name?.message}</p>
            </div>
            <div className="formGroupModal">
              <label>
                <span className="required">* </span>Cpf:{" "}
              </label>
              <input id="ftaxId" {...register("ftaxId")} />
              <p>{errors.taxId?.message}</p>
            </div>
            <div className="formGroupModal">
              <label>
                <span className="required">* </span>E-mail:{" "}
              </label>
              <input id="femail" {...register("femail")} />
              <p>{errors.email?.message}</p>
            </div>
            <div className="formGroupModal">
              <label>
                <span className="required">* </span>Nacionalidade:{" "}
              </label>
              <input id="fnationality" {...register("fnationality")} />
              <p>{errors.nationality?.message}</p>
            </div>
            <div className="formGroupModal">
              <label>
                <span className="required">* </span>Profissão:{" "}
              </label>
              <input id="fprofession" {...register("fprofession")} />
              <p>{errors.profession?.message}</p>
            </div>
            <div className="formGroupModal">
              <label>
                <span className="required">* </span>Renda mensal:{" "}
              </label>
              <input id="fmonthlyIncome" {...register("fmonthlyIncome")} />
              <p>{errors.monthlyIncome?.message}</p>
            </div>
            <div className="formGroupModal">
              <label>
                <span className="required">* </span>Estado civil:{" "}
              </label>
              <input id="fmaritalStatus" {...register("fmaritalStatus")} />
              <p>{errors.maritalStatus?.message}</p>
            </div>
          </Modal>
        </>
      </div>
    </>
  );
}

export default BasicData;
