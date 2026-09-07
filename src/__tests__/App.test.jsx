import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App', () => {
  test('renders the showcase title and seed projects', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /personal project showcase app/i })
    ).toBeInTheDocument();
    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('Project 2')).toBeInTheDocument();
    expect(screen.getByText('Project 3')).toBeInTheDocument();
  });

  test('adds a new project from the form', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText(/^title$/i), 'Portfolio Site');
    await user.type(
      screen.getByLabelText(/^description$/i),
      'A responsive React portfolio'
    );
    await user.click(screen.getByRole('button', { name: /^add$/i }));

    expect(screen.getByText('Portfolio Site')).toBeInTheDocument();
    expect(
      screen.getByText('A responsive React portfolio')
    ).toBeInTheDocument();
  });

  test('filters projects with the search bar', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByRole('searchbox'), 'Project 2');

    expect(screen.getByText('Project 2')).toBeInTheDocument();
    expect(screen.queryByText('Project 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Project 3')).not.toBeInTheDocument();
  });
});
