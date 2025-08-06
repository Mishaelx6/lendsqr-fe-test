import { render, screen, within } from '@testing-library/react';
import UsersPage from '../../components/Users;

const mockUsers = [
  {
    organization: 'Lendsqr',
    username: 'john_doe',
    email: 'john@example.com',
    phone: '08012345678',
    dateJoined: '2023-01-01',
    status: 'Active',
  },
  {
    organization: 'Irorun',
    username: 'jane_doe',
    email: 'jane@example.com',
    phone: '08098765432',
    dateJoined: '2023-02-01',
    status: 'Blacklisted',
  },
];

beforeEach(() => {
  localStorage.setItem('users', JSON.stringify(mockUsers));
});

afterEach(() => {
  localStorage.clear();
});

describe('UsersPage', () => {
  test('renders metrics cards and users table', () => {
    render(<UsersPage />);

    // Heading
    const headings = screen.getAllByRole('heading', { name: /users/i });
    expect(headings.length).toBeGreaterThan(0);

    // Table: scoped check for Username in the desktop table
    const table = screen.getByRole('table');
    expect(within(table).getByText('Username')).toBeInTheDocument();

    // Check rendered users
    expect(screen.getAllByText('john_doe').length).toBeGreaterThan(0);
    expect(screen.getAllByText('jane_doe').length).toBeGreaterThan(0);

    // View buttons
    const viewButtons = screen.getAllByRole('button', { name: /view/i });
    expect(viewButtons.length).toBeGreaterThanOrEqual(2);
  });
});
