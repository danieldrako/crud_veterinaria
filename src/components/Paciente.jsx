const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = ()=>{
    const respuesta = confirm('¿Deseas eliminar este registro?');

    if(respuesta){
      eliminarPaciente(id)
    }
  }
  return (
    <div className='mx-3 my-5 bg-green-400/80 shadow-lg px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-blue-600 uppercase'>Nombre: {''}
          <span className='font-normal normal-case '>{nombre}</span>
        </p>

        <p className='font-bold mb-3 text-blue-600 uppercase'>Propietario: {''}
          <span className='font-normal normal-case '>{propietario}</span>
        </p>

        <p className='font-bold mb-3 text-blue-600 uppercase'>Email: {''}
          <span className='font-normal normal-case '>{email}</span>
        </p>

        <p className='font-bold mb-3 text-blue-600 uppercase'>Fecha Alta: {''}
          <span className='font-normal normal-case '>{fecha}</span>
        </p>

        <p className='font-bold mb-3 text-blue-600 uppercase'>Síntomas: {''}
          <span className='font-normal normal-case '>{sintomas}</span>
        </p>
        <div className="flex justify-between mt-7">
          <button
            type="button"
            className="py-2 px-10 bg-sky-500 hover:bg-sky-600 text-gray-200 font-bold uppercase rounded-lg"
            onClick={()=>setPaciente(paciente)}
          >Editar</button>

          <button
            type="button"
            className="py-2 px-10  text-gray-200 font-bold uppercase rounded-lg bg-orange-500/90  hover:bg-orange-600/90"
            onClick={handleEliminar}
          >Eliminar</button>
        </div>
      </div>
  )
}

export default Paciente