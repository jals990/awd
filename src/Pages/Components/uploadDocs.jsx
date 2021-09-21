import ErrorList from "antd/lib/form/ErrorList";
import React from "react";

function UploadDocs({ register, errors }) {
  return (
    <>
      <h1>Upload de documentos</h1>
      <div className="formGroup large">
        <label>
          <span className="required">* </span>Scaner da CNH:{" "}
        </label>
        <input
          type="file"
          id="cnh"
          {...register("cnh")}
          accept="image/jpeg, image/png, application/pdf"
        />
        <p>{errors.cnh?.message}</p>
      </div>
      <div className="formGroup large">
        <label>IRPF Recibo e Declaração completa: </label>
        <input
          type="file"
          id="documents"
          accept="application/pdf"
          {...register("documents")}
        />
      </div>
      <div className="formGroup large">
        <label>Holerites ou Extrato C/C: </label>
        <input
          type="file"
          id="documents"
          accept="application/pdf"
          {...register("documents1")}
        />
        <p>
          Neste campo, você pode anexar fotos de documentos complementares.
          Nesta etapa de simulação eles não são obrigatórios porém, podem te
          ajudar para uma pré aprovação se ja anexados. - IRPF Recibo e
          Declaração completa - Holerites ou Extrato C/C
        </p>
      </div>
    </>
  );
}

export default UploadDocs;
