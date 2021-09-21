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
    <h1>Dados do imóvel</h1>
      <div className="formGroup large">
        <label>
          <span className="required">* </span>Valor do imóvel:{" "}
        </label>
        <input id="valorDoImovel" {...register("valorDoImovel")} />
        <p>{errors.valorDoImovel?.message}</p>
      </div>
      <div className="formGroup small">
        <label>
          <span className="required">* </span>Valor pretendido do financiamento:{" "}
        </label>
        <input id="valorDoFinanciamento" {...register("valorDoFinanciamento")} />
        <p>{errors.finanvalorDoFinanciamentocingAmount?.message}</p>
      </div>
      <div className="formGroup large">
        <label>Irá utilizar FGTS? </label>
        <input
          type="checkbox"
          id="utilizaFgts"
          value={checked}
          onClick={handleChangeFgts}
          {...register("utilizaFgts")}
        />
      </div>

      {checked && (
        <div className="formGroup large">
          <label>
            <span className="required">* </span>Valor do FGTS:{" "}
          </label>
          <input id="ValorFgts" {...register("ValorFgts")} />
          <p>{errors.ValorFgts?.message}</p>
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
          <p>{errors.iqBank?.message}</p>
          </div>
          <div className="formGroup small">
            <label>
              <span className="required">* </span>Tipo do imóvel:{" "}
            </label>
           <select id="tipoImovel" {...register("tipoImovel")}>
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
          <p>{errors.tipoImovel?.message}</p>
          </div>
          <div className="formGroup small">
            <label>
              <span className="required">* </span>É novo?{" "}
            </label>
            <div className="d-flex radio-group">
              <label>Sim</label>
              <input 
              type="radio" 
              id="novo"
              value="yes"
              {...register("novo")} 
              />
            </div>
            <div className="d-flex radio-group">
              <label>Não</label>
              <input 
              type="radio" 
              id="novo" 
              value="no"
              {...register("novo")} 
              />
              <p>{errors.novo?.message}</p>
            </div>
          </div>
        </>
      )}

      <div className="formGroup large">
        <label>
          <span className="required">* </span>Interveniente Quitante:{" "}
        </label>
        <input id="intervenienteQuitante" {...register("intervenienteQuitante")} />
        <p>{errors.intervenienteQuitante?.message}</p>
      </div>
    </>
  );
}

export default Imovel;
