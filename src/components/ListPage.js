import Coin from "./Coin"
import AnimatedPage from "./AnimatedPage";
import './listPage.css';

const ListPage = ({ searchResults }) => { // searchResults is an array of coins
    const results = searchResults.map((coin) => <Coin key={coin.id} coin={coin} />) // map through search results and return Coin component for each coin
    const content = searchResults.length ? results : // if search results is not empty, return results
        <div className="box1">
        <article className="article">
            <AnimatedPage>
                <p className="noResults">No results</p>
            </AnimatedPage>
        </article>
        </div>
    return (

        <main>
            <AnimatedPage>
                {content}
            </AnimatedPage>
        </main>
    )
}

export default ListPage