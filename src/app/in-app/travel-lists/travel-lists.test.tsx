import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import TravelLists from './travel-lists';
import 'element-internals-polyfill';

test('renders TravelLists component', () => {
  const wrapper = render(<TravelLists />);
  expect(wrapper).toBeTruthy();
});