import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, home }) {
  return (
    <div className="text-center">
      <Head>
        <title>Basic Next.js App</title>
      </Head>
      <header>
        <h1>Final Headless CMS-Powered App</h1>
        <h2>Purpose:</h2>
        <p>Display lists and details for the content from at least three different custom post types, with at least three custom fields each</p>
      </header>
      <main className="col-6 margin-auto">
        {children}
      </main>
      {!home && (
        <Link href="/" className="btn btn-primary mt-3">
          ← Back to home
        </Link>
      )
      }
      <footer className="mt-3 link-primary">
        <a href="https://www.sonomacounty.com/articles/best-italian-restaurants-sonoma-county">Read about the best Italian resturants in Sonoma County here</a>
      </footer>
    </div>
  );
}