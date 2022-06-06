import { Card, Table } from "react-bootstrap"
import "../style.css"
import NavbarElement from "./NavbarElement"

const HomePage = () => {
  return (
    <div className="main">
        <NavbarElement />
        <div className="home">
            
            <Card className="artist">
                <p className="artist__title">All Songs</p>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Song</th>
                            <th>Aritst</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                </Table>
            </Card>
        </div>
    </div>
  )
}

export default HomePage