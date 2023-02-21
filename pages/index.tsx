import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Header from '@/layouts/Header';
import Categories from '@/layouts/Categories';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Commerce</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <Header />
      <div className='px-2 lg:px-0'>
        {' '}
        <Categories />
      </div>
    </>
  );
}
