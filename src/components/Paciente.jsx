
const Paciente = ({mascota, setPaciente, eliminarPaciente}) => {
  
    const handleEliminar = () =>{
        const respuesta = confirm('Deseas Eliminar Este Paciente?');

        if(respuesta){
            eliminarPaciente(mascota.id);
        }
    }
    
    return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{mascota.nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">{mascota.propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">{mascota.email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className="font-normal normal-case">{mascota.fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
            <span className="font-normal normal-case">{mascota.sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
            <button 
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white  font-bold uppercase rounded"
                onClick={()=>setPaciente(mascota)}
            >Editar</button>

            <button 
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white  font-bold uppercase rounded"
                onClick={handleEliminar}
            >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente;
