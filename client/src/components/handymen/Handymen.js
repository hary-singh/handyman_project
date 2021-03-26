import { useState, useEffect } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import Elliot from '../images/elliot.jpg';
import axios from 'axios';
const Handymen = () => {
  
  const [handymen, setHandymen] = useState([])
  useEffect( () => {
    axios.get("/api/handymen")
      .then( res => {
        setHandymen(res.data)
      })
      .catch( err => console.log(err) )
  }, [])

  const addHandyman = (handyman) => {
    axios.post("/api/handymen", { handyman })
      .then( res => {
        setHandymen([...handymen, res.data])
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
      <h1>All the Handymen shown Below:</h1>
        <Card.Group>
        { handymen.map( b => 
          <Card>
            <Card.Content>
            <Image
              floated='right'
              size='mini'
              src={Elliot}
            />
              <Card.Header>{b.title}</Card.Header>
              <Card.Description>{b.specialty}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  View Details
                </Button>
              </div>
            </Card.Content>
          </Card>  
        )}
        </Card.Group>
    </>
  )
}
export default Handymen;