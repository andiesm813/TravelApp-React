import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Discover from './discover';
import 'element-internals-polyfill';

test('renders Discover component', () => {
  const wrapper = render(<Discover />);
  expect(wrapper).toBeTruthy();
});