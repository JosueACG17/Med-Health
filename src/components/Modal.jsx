import logo from '../img/logo.png';

function Modal() {
    
    return (
        <>
           <div className="rounded bg-emerald-400 border-black items-center text-center">

           <img src={logo}></img>
            <a className=''>MED-HEALTH</a>
            <br></br>
            <a> La TAA o Terapia Asitida por Animales</a>
           </div>
        </>

    );
}

export default Modal;