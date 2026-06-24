export default function Controls({onChangeMode}) {
  console.log("Controls render");
  return(
    <div className="menu">
      <button onClick={()=>{onChangeMode('create')}}>Create</button>
    </div>
  );
}