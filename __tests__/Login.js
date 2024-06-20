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
import Login from '../src/components/Login';
import { BrowserRouter } from 'react-router-dom';

//Does Login page render all elements
describe('Login page', () => {
  it('Login page correctly renders elements', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    //select elements from page
    const mainHeader = screen.getByText(/LunchBox/i);
    const subHeader = screen.getByText(/Log in/i);
    const username = screen.getByPlaceholderText(/username/i);
    const password = screen.getByPlaceholderText(/password/i);
    const loginButton = screen.getByRole('button', { name: /Login/i });

    //check that each exists in document
    expect(mainHeader).toBeInTheDocument();
    expect(subHeader).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
  it('Should be able to type into username input field', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const username = screen.getByPlaceholderText(/username/i);
    fireEvent.change(username, { target: { value: 'testUser' } });
    expect(username.value).toBe('testUser');
  });
  it('Should be able to type into password input field', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const password = screen.getByPlaceholderText(/password/i);
    fireEvent.change(password, { target: { value: 'testPass' } });
    expect(password.value).toBe('testPass');
  });
  it('Password input field should not show real password when typed', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const password = screen.getByPlaceholderText(/password/i);
    expect(password).toHaveAttribute('type', 'password');
  });
});
