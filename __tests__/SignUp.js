/**
 * @jest-environment jsdom
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import {
  render,
  screen,
  waitFor,
  fireEvent,
  getByRole,
} from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';
import '@testing-library/jest-dom';
import SignUp from '../src/components/SignUp';
import { BrowserRouter } from 'react-router-dom';

//Does Sign Up page render all elements
describe('SignUp page', () => {
  it('SignUp page correctly renders elements', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    //select elements from page
    const mainHeader = screen.getByText(/LunchBox/i);
    const username = screen.getByPlaceholderText(/username/i);
    const password = screen.getByPlaceholderText(/password/i);
    const createUserButton = screen.getByRole('button', {
      name: /Create Account/i,
    });
    const alreadyUserButton = screen.getByRole('button', { name: /Login/i });

    //check that each exists in document
    expect(mainHeader).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(createUserButton).toBeInTheDocument();
    expect(alreadyUserButton).toBeInTheDocument();
  });
  it('Should be able to type into username input field', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const username = screen.getByPlaceholderText(/username/i);
    fireEvent.change(username, { target: { value: 'testUser' } });
    expect(username.value).toBe('testUser');
  });
  it('Should be able to type into password input field', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const password = screen.getByPlaceholderText(/password/i);
    fireEvent.change(password, { target: { value: 'testPass' } });
    expect(password.value).toBe('testPass');
  });
  it('Password input field should not show real password when typed', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const password = screen.getByPlaceholderText(/password/i);
    expect(password).toHaveAttribute('type', 'password');
  });
});
