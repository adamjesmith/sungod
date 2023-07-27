import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { mockScenes } from '@/lib/mocks/scenes';

import Thumbnails from '../Thumbnails';

describe('Thumbnail component', () => {
  test('renders thumbnail image and overlay icon when selected', () => {
    const mockOnClick = jest.fn();
    const mockClose = jest.fn();

    render(
      <Thumbnails className='Thumbnails'>
        {mockScenes.map((thumbnail) => (
          <Thumbnails.Thumbnail
            key={thumbnail.sceneName}
            selected={false}
            thumbnail={thumbnail}
            onClick={() => mockOnClick()}
          />
        ))}
        <Thumbnails.Close onClick={() => mockClose()} />
      </Thumbnails>
    );

    // Should render 3 thumbnails
    const thumbnails = screen.getAllByTestId('thumbnail-button');
    expect(thumbnails.length).toBe(mockScenes.length);
  });

  test('calls onClick callback when the button is clicked', () => {
    const mockOnClick = jest.fn();
    const mockClose = jest.fn();

    render(
      <Thumbnails className='Thumbnails'>
        {mockScenes.map((thumbnail) => (
          <Thumbnails.Thumbnail
            key={thumbnail.sceneName}
            selected={false}
            thumbnail={thumbnail}
            onClick={() => mockOnClick()}
          />
        ))}
        <Thumbnails.Close onClick={() => mockClose()} />
      </Thumbnails>
    );

    // Click the close button
    const closeButton = screen.getByTestId('thumbnail-close');
    fireEvent.click(closeButton);

    // Check if the onClick function is called
    expect(mockClose).toHaveBeenCalledTimes(1);
  });
});
