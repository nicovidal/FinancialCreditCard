

export const SearchPage = () => {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="card p-4" style={{ width: "25rem" }}>
          <h2 className="text-center mb-4">Buscar</h2>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su búsqueda..."
            />
            <button className="btn btn-primary">Buscar</button>
          </div>
        </div>
      </div>
    );
  };
  