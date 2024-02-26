
import Dropdown from 'react-bootstrap/Dropdown';

export default function Select() {
    return (
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                ComingSoon!
              </Dropdown.Toggle>
        
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Coming Soon</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Coming Soon</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Coming Soon</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

    )
}