import Layout from '../../../components/layout';
import { getNewAllIds, getNewData } from '../../../lib/data';

// define a getStaticProps() function to have next.js retrieve data to use for the dynamic page
// - this name is defined by next.js
export async function getStaticProps({ params }) {
  const itemData = await getNewData(params.id);
  return {
    props: {
      itemData
    }
  };
}

// define a getStaticPaths() function to tell next.js all valid URLs: 1,2,3,4 
// - this name is defined by next.js
export async function getStaticPaths() {
  const paths = await getNewAllIds();
  return {
    paths,
    fallback: false
  };
}

//export our dynamically routed page component Entry
export default function PurchaseInfo({ itemData }) {
  return (
    <Layout>
      <article className="card col-6 margin-auto">
        <div className="card-body">
          <h5>All Post Content</h5>
          <div className="card-text" dangerouslySetInnerHTML={{ __html: itemData.post_content }}>
          </div>
        </div>
      </article>
    </Layout >
  );
}


