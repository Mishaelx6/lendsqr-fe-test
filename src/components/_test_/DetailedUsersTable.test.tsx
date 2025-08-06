import { render, screen } from '@testing-library/react';
import DetailedUsersTable from '../../components/DetailedUsersTable';
import '@testing-library/jest-dom';

const mockUsers = [
  {
    university: 'Lendsqr Academy',
    username: 'user1',
    email: 'user1@email.com',
    phone: '1234567890',
    date: '2022-01-01',
    status: 'Active',
  },
  {
    university: 'Microverse',
    username: 'user2',
    email: 'user2@email.com',
    phone: '0987654321',
    date: '2022-02-01',
    status: 'Blacklisted',
  },
];

describe('DetailedUsersTable', () => {
  it('renders the table headers correctly', () => {
    render(<DetailedUsersTable users={mockUsers} />);
    
    const headers = screen.getAllByRole('columnheader');
    const headerTexts = headers.map(h => h.textContent?.trim());

    expect(headerTexts).toEqual(
      expect.arrayContaining([
        'Organization',
        'Username',
        'Email',
        'Phone Number',
        'Date Joined',
        'Status'
      ])
    );
  });

  it('renders user data correctly', () => {
    render(<DetailedUsersTable users={mockUsers} />);

    expect(screen.getByText('Lendsqr Academy')).toBeInTheDocument();
    expect(screen.getByText('user1')).toBeInTheDocument();
    expect(screen.getByText('user1@email.com')).toBeInTheDocument();
    expect(screen.getByText('1234567890')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();

    expect(screen.getByText('Microverse')).toBeInTheDocument();
    expect(screen.getByText('user2')).toBeInTheDocument();
    expect(screen.getByText('user2@email.com')).toBeInTheDocument();
    expect(screen.getByText('0987654321')).toBeInTheDocument();
    expect(screen.getByText('Blacklisted')).toBeInTheDocument();
  });

  it('renders dropdown actions', () => {
    render(<DetailedUsersTable users={mockUsers} />);

    expect(screen.getAllByText(/View Details/i)).toHaveLength(2);
    expect(screen.getAllByText(/Blacklist User/i)).toHaveLength(2);
    expect(screen.getAllByText(/Activate User/i)).toHaveLength(2);
  });
});
