export default function CreateArticle({ onSubmit }) {
  console.log("CreateArticle render");
  return (
    <>
      <h2>Create Article</h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e.target.title.value, e.target.desc.value);
          console.log(e.target.title.value);
          console.log(e.target.desc.value);
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
          <input type="number" id="difficulty"
           name="difficulty" min="0" max="5" />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
