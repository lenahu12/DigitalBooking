import React, { useContext } from "react";
import { CreatePoliciesContext } from "../../context/Admin/CreatePoliciesContext";

const AdminPolicies = ({errors}) => {

  const {setTermsContent, setSafetyContent, setCancellationContent} = useContext(CreatePoliciesContext);

  return (
    <div className="adminForm-divPolicies">
      <h2>Políticas del producto</h2>
      <div className="adminForm-divPolicies-containerPolicies">
        <div className="adminForm-containerPolices-Policies">
          <h3>Normas del auto</h3>
          <label className="adminForm-Label">
            Descripción
            <textarea
              className="adminForm-textarea"
              name=""
              id=""
              placeholder="Escribir aquí"
              onChange={e => setTermsContent(e.target.value)}
            />
            <small className="errors">{errors.termsContent}</small>
          </label>
        </div>
        <div className="adminForm-containerPolices-Policies">
          <h3>Salud y seguridad</h3>
          <label className="adminForm-Label">
            Descripción
            <textarea
              className="adminForm-textarea"
              name=""
              id=""
              placeholder="Escribir aquí"
              onChange={e => setSafetyContent(e.target.value)}
            />
          <small className="errors">{errors.safetyContent}</small>
          </label>
        </div>
        <div className="adminForm-containerPolices-Policies">
          <h3>Política de cancelación</h3>
          <label className="adminForm-Label">
            Descripción
            <textarea
              className="adminForm-textarea"
              name=""
              id=""
              placeholder="Escribir aquí"
              onChange={e => setCancellationContent(e.target.value)}
            />
            <small className="errors">{errors.cancellationContent}</small>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdminPolicies;
