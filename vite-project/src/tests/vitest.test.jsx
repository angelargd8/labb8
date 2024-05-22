import Calculadora from "../elementos/calculadora";
import {describe, it, expect} from 'vitest'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Calculadora', () => {
  it('renders correctly', () => {
    expect(render(<Calculadora />)).toBeTruthy();
  }
  )
});

it('renders all buttons', () => {
  render(<Calculadora />);
  const buttons = ['C','<-','-/+','%','7','8','9','*','4','5','6','-','1','2','3','+','0','.','/','='];
  buttons.forEach(button => {
    expect(screen.getAllByText(button)[0]).not.to.be.null;
  });
});


it('clicking buttons', () => {
  render(<Calculadora />);
  const buttons = ['C','<-','-/+','%','7','8','9','*','4','5','6','-','1','2','3','+','0','.','/','='];
  buttons.forEach(button => {
    const buttonElements = screen.getAllByText(button);
    buttonElements.forEach(buttonElement => {
      userEvent.click(buttonElement);
    });
  });
});

it('clicking buttons and checking the result', () => {
  render(<Calculadora />);
  const buttons = ['3', '+', '='];
  buttons.forEach(button => {
    const buttonElements = screen.getAllByText(button);
    buttonElements.forEach(buttonElement => {
      userEvent.click(buttonElement);
    });
  });
  const textareas = screen.getAllByRole('textbox');
  const textarea = textareas[0]; 
  expect(textarea.value).to.equal('');
});




