import { GetStaticProps } from "next";
import Layout from "./components/Layout/Layout";
import axios from "axios";
import SearchInput from "./components/Search_Input/SearchInput";
import CountriesTable from "./components/CountriesTable/CountriesTable";
import { useEffect, useState } from "react";

export default function Home({ countries }) {
   const [keyword, setKeyWord] = useState<string>("");

   const [filterCountries, setFilterCountries] = useState(countries);

   useEffect(() => {
      setFilterCountries(() =>
         countries.filter((country: any) =>
            country.name.toLowerCase().includes(keyword)
         )
      );
   }, [keyword]);

   const onInoputChange = (e: any) => {
      e.preventDefault();
      setKeyWord(e.target.value.toLowerCase());
   };

   return (
      <>
         <Layout>
            <div className="_index-counts">
               Found {filterCountries.length} countries
            </div>
            <SearchInput
               onChange={onInoputChange}
               placeholder="Filter By Name, Region, SubRegion"
            />
            <CountriesTable countries={filterCountries} />
         </Layout>
      </>
   );
}

export const getStaticProps: GetStaticProps = async () => {
   const { data } = await axios("https://restcountries.eu/rest/v2/all");

   return {
      props: {
         countries: data,
      },
   };
};
