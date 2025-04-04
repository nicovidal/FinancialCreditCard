import { useState } from "react";
import { useSearchClient } from "../../hooks/useSearchClient";

export const SearchPage = () => {
  const { getClientInformation } = useSearchClient();
  const [searchTerm, setSearchTerm] = useState(""); 
  const [clientData, setClientData] = useState<any>(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); 

  const handleSearch = async () => {
    if (!searchTerm) {
      setError("Por favor ingrese un RUT.");
      return;
    }
    setLoading(true);
    setError(null); 
    try {
      const data = await getClientInformation(searchTerm); 
      console.log(data)
      setClientData(data);
    } catch (err) {
      setError("No se encontró cliente");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ width: "25rem" }}>
        <h2 className="text-center mb-4">Buscar</h2>
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese su búsqueda..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Buscar
          </button>
        </div>

        {loading && <p>Cargando...</p>}
        {error && <p className="text-danger">{error}</p>}
        {clientData && (
          <div className="mt-4">
            <h4>Información del Cliente:</h4>
            <pre>{JSON.stringify(clientData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};
