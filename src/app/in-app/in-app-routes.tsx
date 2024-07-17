import { redirect } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import Discover from './discover/discover';
import TravelLists from './travel-lists/travel-lists';
import Articles from './articles/articles';
import FAQ from './faq/faq';

export const routes = [
  { index: true, loader: () => redirect('dashboard') },
  { path: 'dashboard', element: <Dashboard />, text: 'Dashboard' },
  { path: 'discover', element: <Discover />, text: 'Discover' },
  { path: 'travel-lists', element: <TravelLists />, text: 'Travel Lists' },
  { path: 'articles', element: <Articles />, text: 'Articles' },
  { path: 'faq', element: <FAQ />, text: 'FAQ' }
];
