/**
 * @jest-environment jsdom
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';
import '@testing-library/jest-dom';
import App from '../src/App';
import SignUp from '../src/components/SignUp';
import { BrowserRouter } from 'react-router-dom';

//SignUp
//Does Sign Up page render

describe('SignUp page renders correctly', () => {
  it('SignUp page renders correctly', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const mainHeader = screen.getByText(/LunchBox/i);
    const username = screen.getByPlaceholderText(/username/i);
    const password = screen.getByPlaceholderText(/password/i);
    //const failCheck = screen.getByPlaceholderText(/failCheck/i);
    const createUserButton = screen.getByRole('button', {
      name: /Create Account/i,
    });
    const alreadyUserButton = screen.getByRole('button', { name: /Login/i });
    expect(mainHeader).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    //expect(failCheck).toBeInTheDocument();
    expect(createUserButton).toBeInTheDocument();
    expect(alreadyUserButton).toBeInTheDocument();
  });
});
