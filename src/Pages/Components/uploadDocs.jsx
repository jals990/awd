import ErrorList from "antd/lib/form/ErrorList";
import React from "react";

function UploadDocs({ register, errors }) {
  return (
    <>
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
        <label>Documentos complementares: </label>
        <input
          type="file"
          id="documents"
          multiple="multiple"
          accept="image/jpeg, image/png, application/pdf"
          {...register("documents")}
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
