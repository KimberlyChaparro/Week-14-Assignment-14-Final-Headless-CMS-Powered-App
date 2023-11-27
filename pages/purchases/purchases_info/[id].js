import Layout from '../../../components/layout';
import { getAllIds, getData } from '../../../lib/purchases_data';

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

//export our dynamically routed page component Entry
export default function Purchase_Info({ itemData }) {
  return (
    <Layout>
      <article className="card col-6 margin-auto">
        <div className="card-body">
          <h5>Purchase Content</h5>
          <div className="card-text" dangerouslySetInnerHTML={{ __html: itemData.purchase_description }}>

          </div>
          <h5 className="card-title">{itemData.dessert2}</h5>
          <h5 className="card-title">{itemData.dessert3}</h5>
          <h5 className="card-title">{itemData.dessert4}</h5>
          <h5 className="card-title">{itemData.dessert5}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{itemData.phone}</h6>
          <a href="#" className="card-link">{itemData.website}</a>

        </div>
      </article>
    </Layout >
  );
}


