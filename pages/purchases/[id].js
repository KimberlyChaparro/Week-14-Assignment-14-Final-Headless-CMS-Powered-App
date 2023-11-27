import Layout from '../../components/layout';
import Link from 'next/link';
import { getAllIds, getData } from '../../lib/purchases_data';

// define a getStaticProps() function to have next.js retrieve data to use for the dynamic page
// - this name is defined by next.js
export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  return {
    props: {
      itemData
    }
  };
}

// define a getStaticPaths() function to tell next.js all valid URLs: 1,2,3,4 
// - this name is defined by next.js
export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false
  };
}

// export our dynamically routed page component Entry
export default function PurchasesEntry({ itemData }) {
  return (
    <Layout>
      <article className="card text-center mt-3">
        <div className="card-body">
          <h5>This is the post title:</h5>
          <h5 className="card-title">{itemData.post_title}</h5>
          <h6>Purchase Description:</h6>
          <h5 className="card-title">{itemData.purchase_description}</h5>
          <h6>Purchase Date:</h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">{itemData.purchase_date}</h6>
          <h6>Purchase Quantity:</h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">{itemData.purchase_total}</h6>
          <div className="mt-3">
            <button type="button" className="btn btn-secondary">
              <Link href={`/purchases/purchases_info/${itemData.id}`} className="list-group-item list-group-item-action">Post Content</Link>
            </button>
          </div>
        </div>
      </article>
    </Layout>
  );
}

