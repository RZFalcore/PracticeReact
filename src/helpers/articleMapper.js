export default function mapper(articles) {
  return articles.map(({ created_at_i: id, url: link, ...props }) => ({
    id,
    link,
    ...props,
  }));
}
