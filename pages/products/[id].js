import Layout from '../../components/layout';
import Link from 'next/link';
import { getAllIds, getData } from '../../lib/products_data';

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
export default function ProductsEntry({ itemData }) {
  return (
    <Layout>
      <article className="card text-center mt-3">
        <div className="card-body">
          <h5>This is the post title:</h5>
          <h5 className="card-title">{itemData.post_title}</h5>
          <h6>Product Name:</h6>
          <h5 className="card-title">{itemData.product_name}</h5>
          <h6>Product Inventory:</h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">{itemData.product_inventory}</h6>
          <h6>Product Availability, if 1 then true, if 0 then false:</h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">{itemData.product_availability}</h6>
          <div className="mt-3">
            <button type="button" className="btn btn-secondary">
              <Link href={`/products/products_info/${itemData.id}`} className="list-group-item list-group-item-action">Post Content</Link>
            </button>
          </div>
        </div>
      </article>
    </Layout>
  );
}

