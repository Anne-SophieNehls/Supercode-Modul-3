interface NewsCardProps {
  singleNews: {
    author: string;
    content?: string;
    description: string;
    publishedAt: string;
    source?: { id: null; name: string };
    title: string;
    url?: string;
    urlToImage: string;
  };
}

function NewsCard({ singleNews }: NewsCardProps) {
  return (
    <div className="news-card">
      <h3>{singleNews.title}</h3>
      <img src={singleNews.urlToImage} alt="" />
      <p>{singleNews.description}</p>
      <div>
        <p>{singleNews.author}</p>
        <p>{singleNews.publishedAt}</p>
      </div>
    </div>
  );
}

export default NewsCard;
