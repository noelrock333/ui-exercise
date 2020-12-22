import { render, screen } from '@testing-library/react';
import EmailRow from './components/EmailRow';

test('renders learn react link', () => {
  const email = {
    subject: 'Hello friend',
  };
  render(<EmailRow email={email} />);
  const linkElement = screen.getByText(/Hello friend/i);
  expect(linkElement).toBeInTheDocument();
});
