import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

it('pressing the button calls the handler function', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}></Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
});
