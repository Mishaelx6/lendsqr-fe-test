import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from '../../pages/Dashboard';
import '@testing-library/jest-dom';

// Mock the fetch call and localStorage
beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          users: [
            {
              id: 1,
              username: 'john_doe',
              email: 'john@example.com',
              phone: '1234567890',
              date: '2023-01-01',
              status: 'Active',
              university: 'Lendsqr'
            }
          ]
        })
    })
  ) as jest.Mock;

  localStorage.clear();
});

describe('Dashboard', () => {
  it('renders dashboard with title and metrics', async () => {
  render(<Dashboard />);

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'Users' })).toBeInTheDocument();
    expect(screen.getByText(/Active Users/i)).toBeInTheDocument();
    expect(screen.getByText(/Users with Loans/i)).toBeInTheDocument();
    expect(screen.getByText(/Users with Savings/i)).toBeInTheDocument();
  });
});

  it('renders users table when data is fetched', async () => {
    render(<Dashboard />);

    await waitFor(() => {
      expect(screen.getByText(/Users Table/i)).toBeInTheDocument();
      expect(screen.getByText('john_doe')).toBeInTheDocument();
      expect(screen.getByText('1234567890')).toBeInTheDocument();
    });
  });
});