import { useState } from "react"

const Formulario = () => {
  const [nombre, setNombre] = useState('')

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
      <p className=" text-xl mt-5 text-center mb-10  bg-green-400/70 rounded-xl">
        Añadade a tus pacientes y {''} <span className="text-orange-600 font-bold text-lg">Administralos</span>
      </p>

      <form  className="bg-sky-700/[0.5] shadow-xl rounded-lg py-10 px-5 mb-10">
        <div className="mb-3">
          <label htmlFor="mascota" className="block text-gray-800 font-bold uppercase">
            Nombre Mascota
          </label>

          <input 
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className=" bg-gray-700/[0.35]  border-2 w-full p-2 mt-2 placeholder-lime-300 rounded-md "
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
            className="bg-gray-700/[0.35] border-2 w-full p-2 mt-2 placeholder-lime-300 rounded-md "
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
            className=" bg-gray-700/[0.35] border-2 w-full p-2 mt-2 placeholder-lime-300 rounded-md "
          />
        </div>

        <div className="mb-3">
          <label htmlFor="alta" className="block text-gray-800 font-bold uppercase">
            Alta
          </label>

          <input 
            id="alta"
            type="date"
            className=" bg-gray-700/[0.35] border-2 w-full p-2 mt-2 placeholder-lime-300 rounded-md "
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
          />
        </div>

        <input 
          type="submit" 
          className="bg-orange-600/[0.5] w-full p-3 hover:bg-orange-400/[0.7] cursor-pointer rounded-md"
          value="Agregar Paciente" 
          id="" 
        />
      </form>
    </div>
  )
}

export default Formulario
