import apiSeleccion from "../api/apiSeleccion";
import { SeleccionFinalResponse } from "../interfaces/seleccionFinalResponse";


export const useSearchClient = () => {

  const getClientInformation= async (rut:string): Promise<SeleccionFinalResponse | undefined> => {
    try {
      const { data } = await apiSeleccion.get<SeleccionFinalResponse>(`/seleccion/seleccionar?rut=${rut}`);
      return data;
    } catch (error) {
      console.log("No se encontró cliente");
      return undefined;  
    }
  };

  return {
    getClientInformation,
  };
};
