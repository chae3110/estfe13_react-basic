export default function Controls({onChangeMode}) {
  console.log("Controls render");
  return(
    <div className="menu">
      <button className="btn btn-primary" onClick={()=>{onChangeMode('create')}}>Create</button>
    </div>
  );
}