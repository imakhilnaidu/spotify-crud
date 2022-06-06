import { Card, Table } from "react-bootstrap"
import NavbarElement from "./NavbarElement"

const TopArtists = () => {
  return (
    <div>
        <NavbarElement />
        <Card className="artist">
            <p className="artist__title">Top 10 Artists</p>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Artwrok</th>
                        <th>Song</th>
                        <th>Date of Release</th>
                        <th>Artists</th>
                        <th>Rate</th>
                    </tr>
                </thead>
            </Table>
        </Card>
    </div>
  )
}

export default TopArtists