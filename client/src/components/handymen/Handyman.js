import { Component } from 'react';
import HandymanForm from './HandymanForm';
import {Button, Card, CardContent, Image} from 'semantic-ui-react';
import Elliot from '../images/elliot.jpg';
class Handyman extends Component{
  state = { editing: false }
  
  toggleForm = () => {
    const { editing } = this.state
    this.setState({ editing: !editing })
  }

  render(){
    const { editing } = this.state
    const { id, title, specialty, deleteHandyman } = this.props
    return(
      <>
        {
          editing? 
            <HandymanForm 
              {...this.props}
              toggleForm={this.toggleForm}
            />
          :
          <Card>
            <CardContent>
              <Image floated="right" size="mini" src={Elliot} />
              <Card.Header>{title}</Card.Header>
              <Card.Meta>{specialty}</Card.Meta>
            </CardContent>
            <CardContent extra>
              <div className="ui three buttons">
                <Button basic color="green"> View Services </Button>
                <Button basic color="green" onClick={()=> this.toggleForm()}> Edit </Button>
                <Button basic color="red" onClick={()=> deleteHandyman(id)}> Delete </Button>
              </div>
            </CardContent>
          </Card>
          }
      </>
    )
  }
}
export default Handyman;