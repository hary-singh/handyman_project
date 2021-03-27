import { Component } from 'react';
import HandymanForm from './HandymanForm';
import HandymanList from './HandymanList';
import axios from 'axios';
import { Container, Divider, Icon, Header } from 'semantic-ui-react';
class Handymen extends Component{
  state = { handymen: [] }
  componentDidMount(){
    axios.get('/api/handymen')
    .then(res => {
      this.setState({ handymen: res.data })
    })
    .catch( err => console.log(err))
  }

  addHandyman = ( handyman ) => {
    axios.post('/api/handymen', { handyman })
    .then( res => {
      const { handymen } = this.state
      this.setState({ handymen: [...handymen, res.data] })
    })
    .catch( err => console.log(err))
  }

  updateHandyman = (id, handyman ) => {
    axios.put(`/api/handymen/${id}`, { handyman })
    .then( res => {
      const handymen = this.state.handymen.map( h => {
        if(h.id === id){
          return res.data
        }
        return h
      })
      this.setState({handymen})
    })
    .catch(err => console.log(err))
  }

  deleteHandyman = (id) => {
    axios.delete(`/api/handymen/${id}`)
    .then( res => {
      const { handymen } = this.state
      this.setState({ handymen: handymen.filter( h => h.id !== id)})
      alert(res.data.message)
    })
    .catch( err => console.log(err))
  }

  render(){
    const { handymen } = this.state
    return(
      <Container textAlign="center">
        <h1> Handyman List </h1>
        <Divider horizontal>
          <Header>
            <Icon name='user circle' />
            Add a new Handyman
          </Header>
        </Divider>
        <HandymanForm addHandyman={this.addHandyman}/>
        <Divider horizontal>
          <Header>
            <Icon name='group' />
              Available Handymen
          </Header>
        </Divider>
        <HandymanList
          handymen={handymen}
          deleteHandyman={this.deleteHandyman}
          updateHandyman={this.updateHandyman}
          />
      </Container>
    )}

}
export default Handymen;