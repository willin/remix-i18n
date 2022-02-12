import { LoaderFunction, redirect } from 'remix';

export const loader: LoaderFunction = ({ params }) =>
  redirect(`/${params.locale ?? 'zh'}/blog`);
