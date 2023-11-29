import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, home }) {
  return (
    <div className="text-center">
      <Head>
        <title>Pottery Catalog</title>
      </Head>
      <header className="mt-5">
        <h1>Pottery Catalog</h1>
        <h5>Form: Headless CMS-Powered App</h5>
        <h5 className="col-6 margin-auto">Fuction: To display lists and details for the pottery catalog with content from at least three different custom post types, with at least three custom fields each</h5>
      </header>
      <main className="col-6 margin-auto mt-5">
        {children}
      </main>
      {!home && (
        <Link href="/" className="btn btn-primary mt-3">
          ← Back to home
        </Link>
      )
      }
      <footer className="mt-3">
        <p>Photography from Unsplash by <a href="https://unsplash.com/@heftiba" target="_blank" className="bg-body-secondary">Toa Heftiba</a>, <a href="https://unsplash.com/@molnj" target="_blank" className="bg-body-secondary">Jocelyn Morales</a>, and <a href="https://unsplash.com/@khloephoto" target="_blank" className="bg-body-secondary">Khloe Arledge</a></p>
      </footer>
    </div >
  );
}