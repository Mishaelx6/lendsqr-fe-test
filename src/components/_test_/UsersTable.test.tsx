import { describe, it, expect } from 'vitest';
import { render, screen, } from '@testing-library/react';
import UsersTable from '../../components/UsersTable';

const mockUsers = [
  {
    organization: 'Org 1',
    username: 'user1',
    email: 'user1@email.com',
    phone: '1234567890',
    dateJoined: '2022-01-01',
    status: 'Active'
  },
  {
    organization: 'Org 2',
    username: 'user2',
    email: 'user2@email.com',
    phone: '0987654321',
    dateJoined: '2022-02-01',
    status: 'Blacklisted'
  }
];

describe('UsersTable', () => {
  it('renders the table and users', () => {
    render(<UsersTable users={mockUsers} />);

    expect(screen.getByText('Org 1')).toBeInTheDocument();
    expect(screen.getByText('user2')).toBeInTheDocument();
    expect(screen.getAllByText(/View/i)).toHaveLength(2); 
  
  });

  it('shows all columns in the table', () => {
    const { getByText } = render(<UsersTable users={mockUsers} />);
    expect(getByText('Organization')).toBeInTheDocument();
    expect(getByText('Username')).toBeInTheDocument();
    expect(getByText('Status')).toBeInTheDocument();
  });

  it('has working view button for user row', () => {
    render(<UsersTable users={mockUsers} />);
    const viewButtons = screen.getAllByText('View');
    expect(viewButtons.length).toBe(2);
  });
});
