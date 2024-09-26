import { useEffect, useState } from "react";
import "./App.css";
import { NewsCard, NewsCardProps } from "./components/NewsCard";

function App() {
  const [news, setNews] = useState<NewsCardProps[]>([]);
  const [searchInput, setSearchInput] = useState("tesla");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${searchInput}&from=2024-08-25&sortBy=publishedAt&apiKey=e0ac1515602d4adb92ad466c2ff0871b`
    )
      .then((response) => response.json())
      .then((json) => {
        setNews(json.articles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [searchInput]);

  if (news.length === 0) {
    return "Loading...";
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(searchInput);
  };

  return (
    <main>
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
            value={searchInput}
            id="input"
            placeholder="Type to search"
            type="text"
          />
          <button type="submit">Search</button>
        </form>
      </section>
      <div>
        {news.map((singleNews) => {
          return <NewsCard singleNews={singleNews} />;
        })}
      </div>
    </main>
  );
}

export default App;
