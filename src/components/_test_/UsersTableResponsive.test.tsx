import { render, screen, fireEvent, within } from '@testing-library/react';
import UsersTable from '../../components/UsersTableResponsive';
import '@testing-library/jest-dom';

const mockUsers = [
  {
    organization: 'Lendsqr',
    username: 'john_doe',
    email: 'john@example.com',
    phone: '1234567890',
    dateJoined: '2022-01-01',
    status: 'Active',
  },
];

describe('UsersTableResponsive', () => {
  it('expands and collapses mobile cards', () => {
    render(<UsersTable users={mockUsers} />);

    // Scope to mobile-cards only
    const mobileCards = screen.getByRole('region', { name: /mobile/i }) || screen.getByTestId('mobile-cards');
    const { getByText, queryByText } = within(mobileCards);

    // Click to expand
    fireEvent.click(getByText('john_doe'));

    // Check for expanded details
    expect(getByText(/Organization:/i)).toBeInTheDocument();

    // Click again to collapse
    fireEvent.click(getByText('john_doe'));

    // Check if it collapses
    expect(queryByText(/Organization:/i)).not.toBeInTheDocument();
  });
});
