import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error,setError] = useState(false)

  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  const generarId = ()=>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    //Validación del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('hay al menos un campo vacío');

      setError(true)
      return;
    } 

    setError(false)

    //Objeto de Paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }

    if(paciente.id){
      //Editando registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState =>pacienteState.id === paciente.id? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    }else{
      //Nuevo regitro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }



    // Reiniciar Formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-3">
      <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>

      <p className=" text-xl mt-5 text-center mb-10  bg-green-400/70 rounded-xl">
        Añadade a tus pacientes y {''} 
        <span className="text-orange-600 font-bold text-lg">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-sky-700/[0.7] shadow-xl rounded-lg py-10 px-5 mb-10"
        >
          {error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <div className="mb-3">
          <label htmlFor="mascota" className="block text-gray-800 font-bold uppercase">
            Nombre Mascota
          </label>

          <input 
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className=" bg-gray-700/[0.35]  border-2 w-full p-2 mt-2 placeholder-lime-200 rounded-md "
            value={nombre}
            onChange = {(e)=>setNombre(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="propietario" className="block text-gray-800 font-bold uppercase">
            Nombre Propietario
          </label>

          <input 
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="bg-gray-700/[0.35] border-2 w-full p-2 mt-2 placeholder-lime-200 rounded-md "
            value={propietario}
            onChange = {(e)=>setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-800 font-bold uppercase">
            email
          </label>
          <input 
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className=" bg-gray-700/[0.35] border-2 w-full p-2 mt-2 placeholder-lime-200 rounded-md "
            value={email}
            onChange = {(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="alta" className="block text-gray-800 font-bold uppercase">
            Alta
          </label>

          <input 
            id="alta"
            type="date"
            className=" bg-gray-700/[0.35] border-2 w-full p-2 mt-2 placeholder-lime-200 rounded-md "
            value={fecha}
            onChange = {(e)=>setFecha(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="sintomas" className="block text-gray-800 font-bold uppercase">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className=" bg-gray-700/[0.35] border-2 w-full p-2 mt-2 placeholder-lime-300 rounded-md text-gray-200"
            placeholder="Describe los Síntomas"
            value={sintomas}
            onChange = {(e)=>setSintomas(e.target.value)}
          />
        </div>

        <input 
          type="submit" 
          className="bg-orange-600/[0.7] w-full p-3 hover:bg-orange-400/[0.8] cursor-pointer rounded-md"
          value={paciente.id? "Editar Paciente" :"Agregar Paciente" }
          id="" 
        />
      </form>
    </div>
  )
}

export default Formulario
