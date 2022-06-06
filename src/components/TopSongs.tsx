import { Card, Table } from "react-bootstrap"
import NavbarElement from "./NavbarElement"

const TopSongs = () => {
  return (
    <div>
        <NavbarElement />
        <Card className="songs">
            <p className="songs__title">Top 10 Songs</p>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Artists</th>
                        <th>Date of Birth</th>
                        <th>songs</th>
                    </tr>
                </thead>
            </Table>
        </Card>
    </div>
  )
}

export default TopSongs