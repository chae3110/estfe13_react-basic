export default function MyArticle({ title, desc }) {
    console.log('MyArticle render');
  return (
    <article>
      <h2>{title}</h2>
      <p>{desc}</p>
    </article>
  );
}