import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';
import { getSortedPurchasesList } from '../lib/purchases_data';
import { getSortedContactsList } from '../lib/contacts_data';
import { getSortedRecipientsList } from '../lib/recipients_data';

export async function getStaticProps() {
  const allData = await getSortedList();
  const allContactsData = await getSortedContactsList();
  const allPurchasesData = await getSortedPurchasesList();
  const allRecipientsData = await getSortedRecipientsList();
  return {
    props: {
      allData,
      allContactsData,
      allPurchasesData,
      allRecipientsData
    }
  };
}
export default function Home({ allData, allContactsData, allPurchasesData, allRecipientsData }) {
  return (
    <Layout home>
      <h3>List of All Posts</h3>
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
      <h3>List of All Contacts</h3>
      <div className="list-group">
        {allContactsData.map(
          ({ id, name }) => (
            <Link key={id} href={`/contacts/${id}`} className="list-group-item list-group-item-action">
              {name}
            </Link>
          )
        )
        }
      </div>
      <h3>List of Purchases</h3>
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
      <h3>List of Recipients</h3>
      <div className="list-group">
        {allRecipientsData.map(
          ({ id, name }) => (
            <Link key={id} href={`/recipients/${id}`} className="list-group-item list-group-item-action">
              {name}
            </Link>
          )
        )
        }
      </div>
    </Layout>
  );
}
