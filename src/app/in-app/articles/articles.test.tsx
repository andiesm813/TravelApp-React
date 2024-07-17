import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Articles from './articles';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders Articles component', () => {
  const wrapper = render(<Articles />);
  expect(wrapper).toBeTruthy();
});