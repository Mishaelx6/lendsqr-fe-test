import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserDetails from '../../pages/UserDetails';

// Mock localStorage with a sample user
beforeEach(() => {
  const mockUser = {
    id: '123456',
    email: 'johndoe@example.com',
    accountBalance: '50000',
    accountNumber: '1234567890',
    profile: {
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '08012345678',
      bvn: '12345678901',
      gender: 'Male'
    },
    education: {
      level: 'B.Sc',
      employmentStatus: 'Employed',
      sector: 'Tech',
      duration: '2 years',
      officeEmail: 'john.doe@company.com',
      monthlyIncome: ['200000', '250000'],
      loanRepayment: '15000'
    },
    socials: {
      twitter: '@johndoe',
      facebook: 'facebook.com/johndoe',
      instagram: '@instajohn'
    },
    guarantor: {
      firstName: 'Jane',
      lastName: 'Doe',
      phoneNumber: '08098765432',
      address: '123, Lagos Street'
    }
  };

  localStorage.setItem('selectedUser', JSON.stringify(mockUser));
});

afterEach(() => {
  localStorage.clear();
});

describe('UserDetails', () => {
  it('renders user details page correctly', () => {
    render(<UserDetails />);

    // Full name in header and details
    const nameOccurrences = screen.getAllByText(/John Doe/i);
    expect(nameOccurrences.length).toBeGreaterThanOrEqual(2); // Allow for avatar, header, and details

    // Check dashboard layout loads
    expect(screen.getByText(/Back to Users/i)).toBeInTheDocument();

    // Account Balance
    expect(screen.getByText(/₦50000/i)).toBeInTheDocument();

    // Phone number
    expect(screen.getByText('08012345678')).toBeInTheDocument();

    // Loan Repayment
    expect(screen.getByText(/₦15000/i)).toBeInTheDocument();

    // Guarantor info
    expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();

    // Socials
    expect(screen.getByText('@johndoe')).toBeInTheDocument();
    expect(screen.getByText('@instajohn')).toBeInTheDocument();
    expect(screen.getByText('facebook.com/johndoe')).toBeInTheDocument();

    // Employment info
    expect(screen.getByText('Tech')).toBeInTheDocument();
    expect(screen.getByText('2 years')).toBeInTheDocument();
  });
});
