import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const AddArtist = () => {

    const [show, setShow] = useState(false);
    const [name, setName] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [bio, setBio] = useState<string>("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <Button variant="dark" style={{ padding: "10px" }} onClick={handleShow}>Add Artist</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Artist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="login-form">
            <input 
            type="text" 
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required/>
            <input 
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required/>
            <input 
            type="text" 
            placeholder='Bio'
            value={bio}
            onChange={(e) => setBio(e.target.value)} 
            required/>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddArtist