import { useState } from "react";
import ArticleForm from './ArticleForm';

function UpdateArticle({ title, desc, difficulty, onSubmit }) {
  console.log("UpdateArticle render");
  const [content, setContent] = useState({
    title: title,
    desc: desc,
    difficulty: difficulty,
  });
  /* const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(desc);
  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  }
  const handleDescChange = (e) => {
    setNewDesc(e.target.value);
  } */

  return (
    <>
      <h2>Update Article</h2>
      <ArticleForm initTitle={title} initDesc={desc} initDifficulty={difficulty} onSubmit={onSubmit} />
    </>
  );
}

export default UpdateArticle;
