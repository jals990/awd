import React from "react";

function InfoBank({ register, errors }) {
  return (
    <>
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
        <input id="agency" {...register("agency")} />
        <p>{errors.agency?.message}</p>
      </div>
      <div className="formGroup  large">
        <label>
          <span className="required">* </span>Conta:{" "}
        </label>
        <input
          placeholder="Conta com dígito"
          id="account"
          {...register("account")}
        />
        <p>{errors.account?.message}</p>
      </div>
    </>
  );
}

export default InfoBank;
