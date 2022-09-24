import Coin from "./Coin"
import AnimatedPage from "./AnimatedPage";
import './listPage.css';

const ListPage = ({ searchResults }) => { // searchResults is an array of coins
    const results = searchResults.map((coin) => <Coin key={coin.id} coin={coin} />) // map through search results and return Coin component for each coin
    const content = searchResults.length ? results :
        <article>
            <AnimatedPage>
                <p className="noResults">NO RESULTS</p>
            </AnimatedPage>
        </article> // if no results, display "no results" message
    return (

        <main>
            <AnimatedPage>
                {content}
            </AnimatedPage>
        </main>
    )
}

export default ListPage