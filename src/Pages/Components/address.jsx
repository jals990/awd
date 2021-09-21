import React from "react";

function Address({ register, errors }) {
  return (
    <>
      <div className="formGroup large">
        <label>
          <span className="required">* </span>Logradouro:{" "}
        </label>
        <input id="street" {...register("street")} />
        <p>{errors.street?.message}</p>
      </div>
      <div className="formGroup small">
        <label>
          <span className="required">* </span>Numero:{" "}
        </label>
        <input id="number" {...register("number")} />
        <p>{errors.number?.message}</p>
      </div>
      <div className="formGroup large">
        <label>
          <span className="required">* </span>CEP:{" "}
        </label>
        <input id="cep" {...register("cep")} />
        <p>{errors.cep?.message}</p>
      </div>
      <div className="formGroup small">
        <label>
          <span className="required">* </span>Cidade:{" "}
        </label>
        <input id="city" {...register("city")} />
        <p>{errors.city?.message}</p>
      </div>
      <div className="formGroup large">
        <label>
          <span className="required">* </span>Estado:{" "}
        </label>
        <input id="state" {...register("state")} />
        <p>{errors.state?.message}</p>
      </div>
      <div className="formGroup small">
        <label>
          <span className="required">* </span>O Imóvel onde reside é:{" "}
        </label>
        <select id="immobile" {...register("immobile")}>
          <option value="proprio">Próprio</option>
          <option value="alugado">Alugado</option>
          <option value="deFamiliar">De familiar</option>
        </select>
        <p>{errors.immobile?.message}</p>
      </div>
    </>
  );
}

export default Address;
