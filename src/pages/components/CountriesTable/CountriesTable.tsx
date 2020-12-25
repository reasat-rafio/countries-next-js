import {
   KeyboardArrowDownRounded,
   KeyboardArrowUpRounded,
} from "@material-ui/icons";
import { useState } from "react";
import Link from "next/link";

interface Icounties {
   alpha2Code: string;
   alpha3Code: string;
   altSpellings: string[];
   area: number;
   borders: string[];
   callingCodes: string[];
   capital: string;
   cioc: string;
   currencies: any;
   demonym: string;
   flag: string;
   gini: number;
   languages: any;
   latlng: number[];
   name: string;
   nativeName: string;
   numericCode: string;
   population: number;
   region: string;
   regionalBlocs: any;
   subregion: string;
   timezones: string[];
   topLevelDomain: string;
   translations: any;
}

const orderBy = (
   countries: Icounties[],
   direction: string,
   name: string
): Icounties[] => {
   if (name === "population") {
      if (direction === "asc")
         countries.sort((a, b) => (a.population > b.population ? 1 : -1));

      if (direction === "desc")
         countries.sort((a, b) => (a.population > b.population ? -1 : 1));

      if (direction === null) return countries;
   }

   if (name === "name") {
      if (direction === "asc")
         countries.sort((a, b) => (a.name > b.name ? 1 : -1));

      if (direction === "desc")
         countries.sort((a, b) => (a.name > b.name ? -1 : 1));

      if (direction === null) return countries;
   }
   return countries;
};

const SortArrow = ({ direction }) => {
   if (!direction) return;

   if (direction === "desc") {
      return <KeyboardArrowDownRounded />;
   } else {
      return <KeyboardArrowUpRounded />;
   }
};

const CountriesTable = ({ countries }): JSX.Element => {
   const [directionName, setDirectionName] = useState<string>("asc");
   const orderByName = () => {
      setDirectionName((prev) => (prev === "desc" ? "asc" : "desc"));
      orderBy(countries, directionName, "name");
   };

   const [directionPopulation, setDirectionPopulation] = useState<string>(
      "asc"
   );
   const oderByPopulation = () => {
      setDirectionPopulation((prev) => (prev === "desc" ? "asc" : "desc"));
      orderBy(countries, directionPopulation, "population");
   };

   return (
      <div className="CountriesTable">
         <div className="_countriesTable-heading">
            <button className="_countriesTable-name" onClick={orderByName}>
               <div>Name</div>
               <SortArrow direction={directionName} />
            </button>

            <button
               className="_countriesTable-population_name"
               onClick={oderByPopulation}
            >
               <div>Population</div>
               <SortArrow direction={directionPopulation} />
            </button>
         </div>
         {countries.map((country: Icounties, i: number) => (
            <Link href={`/c/${country.alpha3Code}`}>
               <div key={i} className="_countriesTable-row">
                  <div className="_countriesTable-name">{country.name}</div>
                  <div className="_countriesTable-population">
                     {country.population}
                  </div>
               </div>
            </Link>
         ))}
      </div>
   );
};

export default CountriesTable;
