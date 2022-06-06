import { useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import AddArtist from './AddArtist'
import NavbarElement from './NavbarElement'

const AddSong = () => {

    const [name, setName] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [artist, setArtist] = useState<string>("");

  return (
    <div>
        <NavbarElement />
        <div className='song'>
        <Card className="add-card">
            <p className="login-card-title">Add Song</p>
            <form className="login-form">
                <input 
                type="text" 
                placeholder="Song Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required/>
                <input 
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)} 
                required/>
                <input type="file" required/>
                <div className="wrap">
                    <select value={artist} onChange={(e) => setArtist(e.target.value)}>
                        <option>Select artist</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <br />
                    <AddArtist />
                </div>
                <br />
                <Button type="submit" variant="dark">Add</Button>
            </form>
        </Card>
        </div>
    </div>
  )
}

export default AddSong