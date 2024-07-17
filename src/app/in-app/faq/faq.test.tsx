import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import FAQ from './faq';
import 'element-internals-polyfill';

test('renders FAQ component', () => {
  const wrapper = render(<FAQ />);
  expect(wrapper).toBeTruthy();
});