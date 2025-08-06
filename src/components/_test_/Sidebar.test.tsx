// src/components/__tests__/Sidebar.test.tsx

/// <reference types="vitest" />

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For matchers like toBeInTheDocument
import Sidebar from '../../components/SideBar'; // Adjust this path if necessary

describe('Sidebar Component', () => {
  it('renders the drawer handle', () => {
    render(<Sidebar />);
    expect(screen.getByText(/❯|❮/)).toBeInTheDocument();
  });

  it('toggles sidebar open and closed when handle is clicked', () => {
    render(<Sidebar />);
    const handle = screen.getByText('❯'); // Initial icon when closed
    fireEvent.click(handle);
    expect(screen.getByText('❮')).toBeInTheDocument(); // Icon after open
  });

  it('shows nav item content when opened', () => {
    render(<Sidebar />);
    const handle = screen.getByText('❯');
    fireEvent.click(handle); // Open the sidebar
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Users/i)).toBeInTheDocument();
  });
});
