import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";

const Country = ({ country }) => {
   console.log(country);

   return <div>country</div>;
};

export default Country;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//    const res = context.params.country;

//    return {
//   props: {
//      country: res,
//   },
//    };
// };

export const getStaticPaths: GetStaticPaths = async () => {
   const res = await fetch("https://restcountries.eu/rest/v2/all");
   const countries = await res.json();

   const paths = countries.map((country) => ({
      params: { country: country.alpha3Code },
   }));

   return {
      paths,
      fallback: false,
   };
};

export const getStaticProps: GetStaticProps = async (context) => {
   const res = context.params.country;
   return {
      props: {
         country: res,
      },
   };
};
