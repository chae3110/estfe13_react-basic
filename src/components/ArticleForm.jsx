import { useState } from "react";

function ArticleForm({
  initTitle = "",
  initDesc = "",
  initDifficulty = 0,
  onSubmit,
}) {
  const [content, setContent] = useState({
    title: initTitle,
    desc: initDesc,
    difficulty: initDifficulty,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContent((prev) => {
      if (name === "difficulty") {
        const num = Number(value);
        if (num < 0 || num > 5) return prev;

        return { ...prev, difficulty: num };
      }

      return { ...prev, [name]: value };
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(content.title, content.desc, content.difficulty);
      }}
    >
      <div>
        <label>title</label>
        <input
          type="text"
          name="title"
          value={content.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>desc</label>
        <textarea
          name="desc"
          value={content.desc}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>difficulty</label>
        <input
          type="number"
          name="difficulty"
          min="0"
          max="5"
          value={content.difficulty}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ArticleForm;