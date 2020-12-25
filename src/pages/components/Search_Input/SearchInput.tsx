import SearchRounded from "@material-ui/icons/SearchRounded";

const SearchInput = ({ ...rest }): JSX.Element => {
   return (
      <div className="searchInput-wrapper">
         <SearchRounded color="inherit" />
         <input className="searchInput-input" {...rest} />
      </div>
   );
};

export default SearchInput;
