import './calculadora.css'
import  {useState, useEffect} from 'react';

function Calculadora(){
    const arrayBotones = ['C','<-','-/+','%','7','8','9','*','4','5','6','-','1','2','3','+','0','.','/','='];
    
    const [operacion, setOperacion] = useState('');

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key;
            if (arrayBotones.includes(key)) {
                handleClickBoton(key);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [operacion]); 

    const handleClickBoton= (boton) => {
        if(boton === 'C' || boton === 'c' ){
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
                let resultado = eval(operacion).toString();
                if (resultado.length > 9){
                    resultado = resultado.slice(0, 9);
                }
                setOperacion(resultado);
                
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

    useEffect(() => {
        const textarea = document.getElementById('textarea');
        textarea.scrollTop = textarea.scrollHeight;
    }, [operacion]);


    return(
        <>
        <div className="contenedor" id="contenedor">
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