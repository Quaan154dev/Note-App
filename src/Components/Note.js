import React from 'react'
import {BsFillTrash2Fill} from 'react-icons/bs'
import {AiFillStar}from 'react-icons/ai'

function Note({cha,note,handleDelete,handleCount,handleStar,id,handleStarTest,starTest}) {

  return (
    <div className='note'>
       <div className='note-header'>
           <AiFillStar className={(note.star == true )?"note-star-true":"note-star-false"}
            size='1.5em'
            onClick={() => handleStar(id,note.star)}
            // onClick={() => handleStarTest(
            //   (previousDarkMode) => !previousDarkMode
            // )}
           ></AiFillStar>
           <span className='note-span'>{(note.title == "") ? "New Note" :note.title}</span>
           <BsFillTrash2Fill 
           onClick={() => handleDelete(id)}
           className='delete-icon' size='1.4em'
           ></BsFillTrash2Fill>
       </div>
       <div className={(note.star == true ) ? "note-content-true" :"note-content"}>{note.content}</div>
       {/* <div id="note-content" className={`${starTest && 'dark-star'}`}>{note.content}</div> */}
       <div className='note-footer'>
          <small 
           onChange={(e) => handleCount(e)}
          >{cha - note.length}</small>
          <small>{note.date}</small>
       </div>
    </div>
  )
}

export default Note