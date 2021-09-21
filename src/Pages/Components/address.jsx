import React from "react";
import InputMask from "react-input-mask";

function Address({ register, errors }) {
  return (
    <>
    <h1>Insira seu endereço</h1>
      <div className="formGroup large">
        <label>
          <span className="required">* </span>Logradouro:{" "}
        </label>
        <input id="logradouro" {...register("logradouro")} />
        <p>{errors.logradouro?.message}</p>
      </div>
      <div className="formGroup small">
        <label>
          <span className="required">* </span>Numero:{" "}
        </label>
        <input id="numero" {...register("numero")} />
        <p>{errors.numero?.message}</p>
      </div>
      <div className="formGroup large">
        <label>
          <span className="required">* </span>CEP:{" "}
        </label>
        <InputMask 
        mask="99999-999"
        id="cep" 
        {...register("cep")} />
        <p>{errors.cep?.message}</p>
      </div>
      <div className="formGroup small">
        <label>
          <span className="required">* </span>Cidade:{" "}
        </label>
        <input id="cidade" {...register("cidade")} />
        <p>{errors.cidade?.message}</p>
      </div>
      <div className="formGroup large">
        <label>
          <span className="required">* </span>Estado:{" "}
        </label>
        <input id="estado" {...register("estado")} />
        <p>{errors.estado?.message}</p>
      </div>
      <div className="formGroup small">
        <label>
          <span className="required">* </span>O Imóvel onde reside é:{" "}
        </label>
        <select id="imovel" {...register("imovel")}>
          <option value="proprio">Próprio</option>
          <option value="alugado">Alugado</option>
          <option value="deFamiliar">De familiar</option>
        </select>
        <p>{errors.imovel?.message}</p>
      </div>
    </>
  );
}

export default Address;
