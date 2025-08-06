import { render, screen } from '@testing-library/react';
import Navbar from '../../components/NavBar';

describe('Navbar', () => {
  it('renders search input', () => {
    render(<Navbar />);
    const input = screen.getByPlaceholderText(/search for anything/i);
    expect(input).toBeInTheDocument();
  });

  it('renders Docs link', () => {
    render(<Navbar />);
    const docsLink = screen.getByText(/docs/i);
    expect(docsLink).toBeInTheDocument();
    expect(docsLink).toHaveAttribute('href');
  });

  it('renders profile image and name', () => {
    render(<Navbar />);
    const profileImage = screen.getByAltText(/user/i);
    expect(profileImage).toBeInTheDocument();

    const profileName = screen.getByText(/mishael/i);
    expect(profileName).toBeInTheDocument();
  });

  it('renders notification icon', () => {
    render(<Navbar />);
    const bellIcon = screen.getByRole('img', { hidden: true });
    expect(bellIcon).toBeInTheDocument();
  });
});
