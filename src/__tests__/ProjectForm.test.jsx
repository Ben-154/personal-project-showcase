import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectForm from '../components/ProjectForm';

describe('ProjectForm', () => {
  test('calls onAddProject with trimmed values and clears inputs', async () => {
    const user = userEvent.setup();
    const onAddProject = jest.fn();

    render(<ProjectForm onAddProject={onAddProject} />);

    await user.type(screen.getByLabelText(/^title$/i), '  New App  ');
    await user.type(screen.getByLabelText(/^description$/i), '  Built with React  ');
    await user.click(screen.getByRole('button', { name: /^add$/i }));

    expect(onAddProject).toHaveBeenCalledWith({
      title: '  New App  ',
      description: '  Built with React  ',
    });
    expect(screen.getByLabelText(/^title$/i)).toHaveValue('');
    expect(screen.getByLabelText(/^description$/i)).toHaveValue('');
  });

  test('shows validation when fields are empty', async () => {
    const user = userEvent.setup();
    const onAddProject = jest.fn();

    render(<ProjectForm onAddProject={onAddProject} />);
    await user.click(screen.getByRole('button', { name: /^add$/i }));

    expect(
      screen.getByText(/please enter both a title and a description/i)
    ).toBeInTheDocument();
    expect(onAddProject).not.toHaveBeenCalled();
  });
});
