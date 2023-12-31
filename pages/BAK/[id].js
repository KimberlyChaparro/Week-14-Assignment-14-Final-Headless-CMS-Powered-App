import Layout from '../../components/layout';
import Link from 'next/link';
import { getAllIds, getData } from '../../lib/data';
import { getSortedPurchasesList } from '../../lib/purchases_data';


// define a getStaticProps() function to have next.js retrieve data to use for the dynamic page
// - this name is defined by next.js
export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  const allPurchasesData = await getSortedPurchasesList();
  return {
    props: {
      itemData,
      allPurchasesData
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
export default function Entry({ itemData, allPurchasesData }) {
  return (
    <Layout>
      <article className="card text-center mt-3">
        <div className="card-body">
          <h5>This is the post title:</h5>
          <h5 className="card-title">{itemData.post_title}</h5>
          <h6>User Login:</h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">{itemData.user_login}</h6>
          <h6>Purchase DATA: </h6>
          {/* <div className="list-group">
            {allPurchasesData.map(({ id, purchase_description }) => (
              <Link key={id} href={`/${id}`}>
                <a className="list-group-item list-group-item-action">{purchase_description}</a>
              </Link>
            ))}
          </div> */}
          <a href="#" className="card-link link-primary">{itemData.website}</a>
          <div className="mt-3">
            <button type="button" class="btn btn-secondary"><Link href={`/purchases/${allPurchasesData.id}`} className="list-group-item list-group-item-action">Post Content</Link></button>
          </div>
        </div>
      </article>
    </Layout>
  );
}
