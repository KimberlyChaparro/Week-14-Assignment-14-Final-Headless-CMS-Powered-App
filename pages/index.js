import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';
import { getSortedPurchasesList } from '../lib/purchases_data';

export async function getStaticProps() {
  const allData = await getSortedList();
  const allPurchasesData = await getSortedPurchasesList();
  return {
    props: {
      allData,
      allPurchasesData
    }
  };
}
export default function Home({ allData, allPurchasesData }) {
  return (
    <Layout home>
      <h1>List of All Posts</h1>
      <div className="list-group">
        {allData.map(
          ({ id, name }) => (
            <Link key={id} href={`/posts/${id}`} className="list-group-item list-group-item-action">
              {name}
            </Link>
          )
        )
        }
      </div>
      <h1>List of Purchases</h1>
      {/* <div className="list-group">
        {allPurchasesData.map(({ id, purchase_description }) => (
          <Link key={id} href={`/purchases/${id}`}>
            <a className="list-group-item list-group-item-action">{purchase_description}</a>
          </Link>
        ))}
      </div> */}
      <div className="list-group">
        {allPurchasesData.map(
          ({ id, name }) => (
            <Link key={id} href={`/purchases/${id}`} className="list-group-item list-group-item-action">
              {name}
            </Link>
          )
        )
        }
      </div>
    </Layout>
  );
}
