import { render, screen } from '@testing-library/react';
import ProjectList from '../components/ProjectList';

describe('ProjectList', () => {
  test('renders a card for each project', () => {
    const projects = [
      { id: 1, title: 'Alpha', description: 'First' },
      { id: 2, title: 'Beta', description: 'Second' },
    ];

    render(<ProjectList projects={projects} />);

    expect(screen.getByText('Alpha')).toBeInTheDocument();
    expect(screen.getByText('Beta')).toBeInTheDocument();
  });

  test('shows an empty message when there are no matches', () => {
    render(<ProjectList projects={[]} />);

    expect(
      screen.getByText(/no projects match your search/i)
    ).toBeInTheDocument();
  });
});
