import { LoaderFunction, redirect } from 'remix';

export const loader: LoaderFunction = () => redirect('/zh/blog');
