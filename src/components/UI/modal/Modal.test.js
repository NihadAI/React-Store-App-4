import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from './Modal';

describe('Modal', () => {
    test('renders modal header and content correctly', () => {
        const headerText = 'Test Header';
        const contentText = 'Test Content';

        render(<Modal header={headerText} text={contentText} onClose={jest.fn()} />);

        const headerElement = screen.getByText(headerText);
        const contentElement = screen.getByText(contentText);

        expect(headerElement).toBeInTheDocument();
        expect(contentElement).toBeInTheDocument();
    });

    test('calls onClose when clicking outside the modal', () => {
        const onCloseMock = jest.fn();

        render(<Modal header="Test Header" text="Test Content" onClose={onCloseMock} />);

        const modalElement = screen.getByTestId('modal');
        fireEvent.click(modalElement);

        expect(onCloseMock).toHaveBeenCalled();
    });

    test('calls onClose when clicking the close button', () => {
        const onCloseMock = jest.fn();

        render(<Modal header="Test Header" text="Test Content" closeButton onClose={onCloseMock} />);

        const closeButton = screen.getByText('×');
        fireEvent.click(closeButton);

        expect(onCloseMock).toHaveBeenCalled();
    });
});
