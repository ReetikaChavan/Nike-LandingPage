import { render, screen, waitFor } from '@testing-library/react';
import Running from './running';  
import App from './App';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';  
import { BrowserRouter } from 'react-router-dom';

test('renders shoes in sidebar', () => {
    render(<Running />);

    const shoesElement = screen.getByText(/Shoes/i);
    expect(shoesElement).toBeInTheDocument();
});

test('hover effect on sidebar', async () => {
    render(<Running />);
    
    const shoesButton = screen.getByRole('button', { name: /Shoes/i });
    
    expect(shoesButton).toHaveClass('running-button');
    
    await userEvent.hover(shoesButton);

    const styles = window.getComputedStyle(shoesButton);
    console.log('Computed styles during hover:', styles.backgroundColor);

    expect(shoesButton).toHaveStyle({
        'background-color': 'ButtonFace'  
    });
});

test('main page test', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Wait for the "Support" text to appear, using findByText for async content
  const footermain = await screen.findByText(/About Us/i, {}, { timeout: 3000 });

  expect(footermain).toBeInTheDocument();
});