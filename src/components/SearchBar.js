import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './searchBar.css';

// SearchBar component
const SearchBar = ({ coins, setSearchResults }) => {
    const handleSubmit = (e) => { e.preventDefault(); } // prevent page reload on submit

    const handleSearchChange = (e) => {
        if (!e.target.value) {
            return setSearchResults(coins);
        }
        const searchValue = e.target.value.toLowerCase();
        const filteredCoins = coins.filter(coin => {
            return coin.name.toLowerCase().includes(searchValue) || coin.symbol.toLowerCase().includes(searchValue);
        });
        setSearchResults(filteredCoins);
    } // filter coins based on search value

    return (
        <header className="searchHeader">
            
            <form className="search" onSumbit={handleSubmit}>
                <input
                    className='searchInput'
                    type="text"
                    placeholder="Search"
                    onChange={handleSearchChange}
                    
                />
                <button className="searchButton">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </header>
    )
};

export default SearchBar;