import { useState } from 'react';
export default function CreateArticle({ onSubmit }) {
  console.log("CreateArticle render");
  const [difficulty, setDifficulty] = useState(0);
  return (
    <>
      <h2>Create Article</h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const desc = e.target.desc.value;
          onSubmit(title, desc, difficulty);
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc"></textarea>
        </div>
        <div>
          <label htmlFor="difficulty">difficulty</label>
          <input
            type="number"
            id="difficulty"
            name="difficulty"
            min="0"
            max="5"
            value={difficulty}
            onChange={(e) => {
              const value = Number(e.target.value);
              if(value < 0 || value > 5) return;
              setDifficulty(value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
