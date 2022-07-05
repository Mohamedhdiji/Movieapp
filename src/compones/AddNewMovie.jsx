import React, { useState } from 'react'
import Modal from 'react-modal';
import StartRating from './StartRating';


const AddNewMovie = ({addNew}) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [rating, setERating] = useState(1);
    const [date, setDate] = useState ("")
    const handelRating=(x)=>setERating(x)
    const handelSubmit=(e)=>{
        e.preventDefault()
        const newOne={name,image,rating,date,id:Math.random()}
        addNew(newOne)
    }


    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');
      let subtitle;
      const [modalIsOpen, setIsOpen] = React.useState(false);
    
      function openModal() {
        setIsOpen(true);
      }
    
      
    
      function closeModal() {
        setIsOpen(false);
      }
  return (
    <div>
        <button onClick={openModal}>Add New Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal" >
            <form onSubmit={handelSubmit}>
                <label>Movie Title </label>
                <input type="text" placeholder='Movie Tilte...' value={name} onChange={e=>setName(e.target.value)} />
                <label>Movie Poster</label>
                <input type="url" placeholder='Movie Poster URL ...' value={image} onChange={e=>setImage(e.target.value)}/>
                <label>Movie Rating </label>
                <StartRating rating={rating} handelRating={handelRating} />
                <label>Movie Date</label>
                <input type="date" value={date}  onChange={e=>setDate(e.target.value)}/>
                <div>
                    <button type='submit'>Add</button>
                    <button onClick={closeModal}>cancel</button>
                </div>
            </form>
      </Modal>
    </div>
  )
}

export default AddNewMovie