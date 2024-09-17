function Formulario() {
  return (
    <div>
      <h2>Complete el formulario</h2>
      <form className="Formulario">
        <div className="form-group">
          <label className="form-label">Nombre </label>
          <input className="form-input" type="text" />
        </div>
        <div className="form-group">
          <label className="form-label">Apellido </label>
          <input className="form-input" type="text" />
        </div>
        <div className="form-group">
          <label className="form-label">Email </label>
          <input className="form-input" type="email" />
        </div>
        <div className="form-group">
          <label className="form-label">Telefono </label>
          <input className="form-input" type="text" />
        </div>
        <div className="form-group">
          <label className="form-label">Password </label>
          <input className="form-input" type="text" />
        </div>
        <div className="form-group">
          <label className="form-label">Confirmar Paswword </label>
          <input className="form-input" type="text" />
        </div>
        <button type="submit">Enviar Formulario</button>
      </form>
    </div>
  );
}
export default Formulario;
