/**
 * @jest-environment jsdom
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';
import '@testing-library/jest-dom';
import App from '../src/App';
import Home from '../src/components/Home.js';
import { BrowserRouter } from 'react-router-dom';

describe('Home page renders correctly', () => {
  it('Home page renders correctly', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const pickProtein = screen.getByText(/choose your protein/i);
    const nutritionButton = screen.getByRole('button', { name: /Nutrition/i });
    const recipeButton = screen.getByRole('button', { name: /recipe/i });
    const timerButton = screen.getByRole('button', { name: /timer/i });
    const accountButton = screen.getByRole('button', { name: /account/i });
    const recipeSearch = screen.getByPlaceholderText(/search for a recipe/i);
    const beefButton = screen.getByRole('button', { name: /beef/i });
    const chickenButton = screen.getByRole('button', { name: /chicken/i });
    const turkeyButton = screen.getByRole('button', { name: /turkey/i });
    const fishButton = screen.getByRole('button', { name: /fish/i });
    const vegButton = screen.getByRole('button', { name: /Vegetarian/i });

    expect(pickProtein).toBeInTheDocument();
    expect(nutritionButton).toBeInTheDocument();
    expect(recipeButton).toBeInTheDocument();
    expect(timerButton).toBeInTheDocument();
    expect(accountButton).toBeInTheDocument();
    expect(recipeSearch).toBeInTheDocument();
    expect(beefButton).toBeInTheDocument();
    expect(chickenButton).toBeInTheDocument();
    expect(turkeyButton).toBeInTheDocument();
    expect(fishButton).toBeInTheDocument();
    expect(vegButton).toBeInTheDocument();
  });

  test('Navigation bar buttons take user to correct location', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const nutritionButton = screen.getByRole('button', { name: /Nutrition/i });
    const recipeButton = screen.getByRole('button', { name: /recipe/i });
    const timerButton = screen.getByRole('button', { name: /timer/i });
    const accountButton = screen.getByRole('button', { name: /account/i });

    fireEvent.click(nutritionButton);
    expect(nutritionButton.nextElementSibling);
    fireEvent.click(recipeButton);
    expect(recipeButton.nextElementSibling);
    fireEvent.click(timerButton);
    expect(timerButton.nextElementSibling);
    fireEvent.click(accountButton);
    expect(accountButton.nextElementSibling);
  });
  test('Different protein buttons take user to correct ', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const beefButton = screen.getByRole('button', { name: /beef/i });
    const chickenButton = screen.getByRole('button', { name: /chicken/i });
    const turkeyButton = screen.getByRole('button', { name: /turkey/i });
    const fishButton = screen.getByRole('button', { name: /fish/i });
    const vegButton = screen.getByRole('button', { name: /Vegetarian/i });

    fireEvent.click(beefButton);
    expect(beefButton.nextElementSibling);
    fireEvent.click(chickenButton);
    expect(chickenButton.nextElementSibling);
    fireEvent.click(turkeyButton);
    expect(turkeyButton.nextElementSibling);
    fireEvent.click(fishButton);
    expect(fishButton.nextElementSibling);
    fireEvent.click(vegButton);
    expect(vegButton.nextElementSibling);
  });
});
