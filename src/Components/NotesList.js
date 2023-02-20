import Note from './Note'

function NotesList({notes, setNotes,starTest,handleStarTest}) {
  const handleDelete = (id) => {
    setNotes(notes.filter((note ,index)=> index !== id))
  }
  console.log(setNotes);
  //"index" là số id trong notes , còn "id" là cái số id mà ta thực hiện sự kiện onclick
  const handleStar = (id, star) => {
    setNotes(notes.map((note ,index)=> {
       if(index == id){
        return {
          ...note,star:!star,
        }
       }else{
         return{
           ...note,
         }
       }
    }))
  }
  const cha = 200;
  const handleCount = (e) => {
    if(cha - notes.length >= 0){
       setNotes(e.target.value)
    }
  }
  return (
	  <div className='notes-list '>
      {notes.map((note,index) => (
         <Note
         key={index}
         note={note}
         id={index}
         starTest={starTest}
         handleStarTest={handleStarTest}
         Count={() => handleCount()}
         handleDelete={() => handleDelete(index)}
         handleStar={() => handleStar(index,note.star)}
         />
      ))}
    </div>
  )
}

export default NotesList;