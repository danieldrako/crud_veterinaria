const Paciente = () => {
  return (
    <div className='m-3 bg-green-400/70 shadow-lg px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-blue-600 uppercase'>Nombre: {''}
          <span className='font-normal normal-case '>Hook</span>
        </p>

        <p className='font-bold mb-3 text-blue-600 uppercase'>Propietario: {''}
          <span className='font-normal normal-case '>Yo Mero</span>
        </p>

        <p className='font-bold mb-3 text-blue-600 uppercase'>Email: {''}
          <span className='font-normal normal-case '>yomero@yomero.com</span>
        </p>

        <p className='font-bold mb-3 text-blue-600 uppercase'>Fecha Alta: {''}
          <span className='font-normal normal-case '>1 de enero de 2021</span>
        </p>

        <p className='font-bold mb-3 text-blue-600 uppercase'>Síntomas: {''}
          <span className='font-normal normal-case '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia neque, deserunt hic incidunt rerum voluptatibus odit quam earum aut! Animi quis distinctio voluptatibus at voluptas, cum numquam quia architecto hic.</span>
        </p>
      </div>
  )
}

export default Paciente