import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../../pages/Login'; // Adjust path if needed

describe('Login', () => {
  it('renders login button', () => {
    render(<MemoryRouter>
        <Login />
      </MemoryRouter>);
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });
});
