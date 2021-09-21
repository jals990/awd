import React, { useState } from "react";

function Imovel({ register, errors }) {
  const [checked, setChecked] = useState(false);
  const [checkedIq, setCheckedIq] = useState(false);

  const handleChangeFgts = () => {
    setChecked(!checked);
  };

  const handleChangeIq = () => {
    setCheckedIq(!checkedIq);
  };

  return (
    <>
      <div className="formGroup large">
        <label>
          <span className="required">* </span>Valor do imóvel:{" "}
        </label>
        <input id="propertyValue" {...register("propertyValue")} />
        <p>{errors.propertyValue?.message}</p>
      </div>
      <div className="formGroup small">
        <label>
          <span className="required">* </span>Valor pretendido do financiamento:{" "}
        </label>
        <input id="financingAmount" {...register("financingAmount")} />
        <p>{errors.financingAmount?.message}</p>
      </div>
      <div className="formGroup large">
        <label>Irá utilizar FGTS? </label>
        <input
          type="checkbox"
          id="willYouUseFgts"
          value={checked}
          onClick={handleChangeFgts}
          {...register("willYouUseFgts")}
        />
      </div>

      {checked && (
        <div className="formGroup large">
          <label>
            <span className="required">* </span>Valor do FGTS:{" "}
          </label>
          <input id="fgtsAmount" {...register("fgtsAmount")} />
          <p>{errors.fgtsAmount?.message}</p>
        </div>
      )}

      <div className="formGroup small">
        <label>IQ: </label>
        <input
          type="checkbox"
          id="iq"
          value={checkedIq}
          onClick={handleChangeIq}
          {...register("iq")}
        />
      </div>

      {checkedIq && (
        <>
          <div className="formGroup small">
            <label>
              <span className="required">* </span>Banco IQ:{" "}
            </label>
            <input id="iqBank" {...register("iqBank")} />
          </div>
          <div className="formGroup small">
            <label>
              <span className="required">* </span>Tipo do imóvel:{" "}
            </label>
           <select id="kindOfProperty" {...register("kindOfProperty")}>
             <option value="residential">
               Residencial
             </option>
             <option value="commercial">
               Comercial
             </option>
             <option value="vacationsHouse">
               Veraneio
             </option>
           </select>
          </div>
          <div className="formGroup small">
            <label>
              <span className="required">* </span>É novo?{" "}
            </label>
            <div className="d-flex radio-group">
              <label>Sim</label>
              <input 
              type="radio" 
              id="new"
              value="yes"
              {...register("new")} 
              />
            </div>
            <div className="d-flex radio-group">
              <label>Não</label>
              <input 
              type="radio" 
              id="new" 
              value="no"
              {...register("new")} 
              />
            </div>
          </div>
        </>
      )}

      <div className="formGroup large">
        <label>
          <span className="required">* </span>Interveniente Quitante:{" "}
        </label>
        <input id="payingIntervener" {...register("payingIntervener")} />
        <p>{errors.payingIntervener?.message}</p>
      </div>
    </>
  );
}

export default Imovel;
