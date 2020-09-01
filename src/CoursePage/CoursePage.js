import React, { Component } from 'react'
import CourseItem from 


class NotePageMain extends Component {

  render() {


  return (
    <section className='NotePageMain'>
      <Note
        id={note.id}
        name={note.name}
        date_modified={note.date_modified}
        delete= {this.onDelete}
      />
      <div className='NotePageMain__content'>
        {note.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>{para}</p>
        )}
      </div>
    </section>
  )
}
}

export default NotePageMain;
