import React from "react";
import InputMask from "react-input-mask";

function InfoBank({ register, errors }) {
  return (
    <>
    <h1>Dados bancários</h1>
      <div className="formGroup large">
        <label>
          <span className="required">* </span>Em qual Banco você tem conta PF:{" "}
        </label>
        <input id="bank" {...register("bank")} />
        <p>{errors.bank?.message}</p>
      </div>
      <div className="formGroup small">
        <label>
          <span className="required">* </span>Agência:{" "}
        </label>
        <InputMask 
        mask="9999"
        id="agencia" 
        {...register("agencia")} />
        <p>{errors.agencia?.message}</p>
      </div>
      <div className="formGroup  large">
        <label>
          <span className="required">* </span>Conta:{" "}
        </label>
        <input
          placeholder="Conta com dígito"
          id="conta"
          {...register("conta")}
        />
        <p>{errors.conta?.message}</p>
      </div>
    </>
  );
}

export default InfoBank;
