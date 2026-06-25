import { useState } from 'react';
import ArticleForm from './ArticleForm';
export default function CreateArticle({ onSubmit }) {
  console.log("CreateArticle render");
  const [difficulty, setDifficulty] = useState(0);
  return (
    <>
      <h2>Create Article</h2>
      <ArticleForm onSubmit={onSubmit} />
    </>
  );
}
