import Layout from '../../components/layout';
import { getNewAllIds, getNewData } from '../../lib/data';

// define a getStaticProps() function to have next.js retrieve data to use for the dynamic page
// - this name is defined by next.js
export async function getStaticProps( { params } ) {
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
  const paths = getNewAllIds();
  return {
    paths,
    fallback: false
  };
}

// export our dynamically routed page component Entry
export default function DessertEntry( { itemData } ) {
  return (
    <Layout>
      <article className="card col-6 margin-auto">
        <div className="card-body">
          <h5 className="card-title">{itemData.dessert1}</h5>
          <h5 className="card-title">{itemData.dessert2}</h5>
          <h5 className="card-title">{itemData.dessert3}</h5>
          <h5 className="card-title">{itemData.dessert4}</h5>
          <h5 className="card-title">{itemData.dessert5}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{itemData.phone}</h6>
          <a href="#" className="card-link">{itemData.website}</a>
          
        </div>
      </article>
    </Layout>
  );
}

