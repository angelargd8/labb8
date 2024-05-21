import './calculadora.css'
import React, {useState} from 'react';

function Calculadora(){
    const arrayBotones = ['C','<-','-/+','%','7','8','9','*','4','5','6','-','1','2','3','+','0','.','='];
    
    const [operacion, setOperacion] = useState('');

    const handleClickBoton= (boton) => {
        if(boton === 'C'){
            setOperacion('');
            return;
        }
        if(boton === '<-'){
            setOperacion(operacion.slice(0, -1));
            return;
        }
        if(boton === '-/+'){
            setOperacion(operacion * -1);
            return;
        }
        if (boton === '='){
            try{
                console.log(operacion)
                console.log(eval(operacion))
                setOperacion(eval(operacion));
            }catch(e){
                setOperacion('Error');
            }
            return;
        }
        else{
            setOperacion(operacion + boton);
        }
        
    };

    const botones = arrayBotones.map((boton, index) => (
        <button key={index} className="boton" onClick={() => handleClickBoton(boton)}>
            {boton}
        </button>
    ));
    return(
        <>
        <div className="contenedor">
            <div className="pantalla">
                <textarea value={operacion} readOnly className="textarea" id="textarea">
                </textarea>
            </div>
            <div className="areaBotones">
                {botones}
            </div>
        </div>
        </>
    )
}
export default Calculadora;