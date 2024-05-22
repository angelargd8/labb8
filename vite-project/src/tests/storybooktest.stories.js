import Calculadora from "../elementos/calculadora";
//import { fn } from '@storybook/test'

const meta ={
    title: 'Calculadora',
    component: Calculadora,
}
export default meta


export const Default = {
    render: () => <Calculadora />

}