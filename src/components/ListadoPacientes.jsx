import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        {pacientes.length > 0 ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {""}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p> 

            {pacientes.map( (paciente) =>{
                return  <Paciente key={paciente.id} mascota={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/> 
            })}

          </>
        ): (
          <>
            <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Comienza Agregando Pacientes {""}
                <span className="text-indigo-600 font-bold">Y Aparecerán en este lugar</span>
            </p>
          </>
        )}
    </div>
  )
}

export default ListadoPacientes;
