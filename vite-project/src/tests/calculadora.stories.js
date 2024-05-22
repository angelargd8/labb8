import Calculadora from "../elementos/calculadora";
import { fn } from '@storybook/test'
import {action} from '@storybook/addon-actions'

const meta ={
    title: 'Calculadora',
    component: Calculadora,

}
export default meta


export const Default = {
    args: {
        operacion: '3+3',
        onclick : action('onClick event') 
    },
}

export const Decimal = {
    args: {
        operacion: '2.5+2.5', 
        onclick : fn()
    },
}

export const ComplexOperations = {
    args: {
        operacion: '2+2*2', 
        onclick : fn()
    },
}

export const ZeroOperations = {
    args: {
        operacion: '0+0', 
        onclick : fn()
    },
}

export const Error = {
    args: {
        operacion: '2+2*', 
        onclick : fn()
    },
}

export const IncompleteOperation = {
    args: {
        operacion: '2+', 
        onClick: action('onclick event triggered')
    },
}