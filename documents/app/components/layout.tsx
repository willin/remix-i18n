import { Footer } from './footer';
import { Header } from './header';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className='w-full lg:max-w-7xl mx-auto my-4'>
        <article className='prose max-w-none'>{children}</article>
      </main>
      <Footer />
    </div>
  );
}
