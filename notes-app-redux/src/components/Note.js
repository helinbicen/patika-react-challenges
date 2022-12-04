
import { useSelector } from 'react-redux'

function Note() {
  const items = useSelector((state) => state.notes.items);
  const filteredText = useSelector((state) => state.notes.filtered);


  const filtered = items.filter((item) => {
      return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(filteredText.toLowerCase())
      );
  });
  console.log(items);
  return (
    <div className="note">

   
      
      {filtered.map((item) => (
        <div className="list-item" key={item.id}>
          <div className={`${item.colorCategory}`}>
            {item.title}
            {/* {item.colorCategory} */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Note;
