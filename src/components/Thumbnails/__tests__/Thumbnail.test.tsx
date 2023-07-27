import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { mockScenes } from '@/lib/mocks/scenes';

import Thumbnail from '../Thumbnail';

const mockScene = mockScenes[0];

describe('Thumbnail component', () => {
  test('renders thumbnail image and overlay icon when selected', () => {
    const mockOnClick = jest.fn();
    render(
      <Thumbnail
        selected={true}
        thumbnail={mockScene}
        onClick={mockOnClick}
        priority={true}
      />
    );

    // Thumbnail image should be rendered
    const thumbnailImage = screen.getByAltText('Test Scene 1');
    expect(thumbnailImage).toBeInTheDocument();
    const imgURL = thumbnailImage.getAttribute('src');
    expect(imgURL).toContain('test-image.jpg');

    // Thumbnail overlay should be rendered
    const thumbnailOverlay = screen.getByTestId('thumbnail-overlay');
    expect(thumbnailOverlay).toBeInTheDocument();

    // Overlay icon should be rendered
    const overlayIcon = screen.getByAltText('selected');
    expect(overlayIcon).toBeInTheDocument();
    expect(overlayIcon).toHaveAttribute('src', '/images/landscape.svg');
  });

  test('calls onClick callback when the button is clicked', () => {
    const mockOnClick = jest.fn();
    render(
      <Thumbnail selected={false} thumbnail={mockScene} onClick={mockOnClick} />
    );

    // Click the thumbnail button
    const thumbnailButton = screen.getByRole('button');
    fireEvent.click(thumbnailButton);

    // Check if the onClick function is called with the correct argument
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith(mockScene);
  });
});
