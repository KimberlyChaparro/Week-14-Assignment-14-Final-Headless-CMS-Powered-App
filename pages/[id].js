import Layout from '../components/layout';
import Link from 'next/link';
import { getAllIds, getData } from '../lib/data';

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
export default function Entry({ itemData }) {
  return (
    <Layout>
      <article className="card text-center mt-3">
        <div className="card-body">
          <h5>Post Author:</h5>
          <h5 className="card-title">{itemData.post_author}</h5>
          <h6>Post Status:</h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">{itemData.post_status}</h6>
          <a href="#" className="card-link link-primary">{itemData.website}</a>
          <div className="mt-3">
            <button type="button" class="btn btn-secondary"><Link href={`/menu/${itemData.ID}`} className="list-group-item list-group-item-action">Date details</Link></button>
          </div>
        </div>
      </article>
    </Layout>
  );
}
