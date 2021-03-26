import { Component } from 'react';
import HandymanForm from './HandymanForm';
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
        <h1> Title : {title} </h1>
        <h3> Specialty : {specialty}</h3>
        {
          editing? 
            <HandymanForm 
              {...this.props}
              toggleForm={this.toggleForm}
            />
          :
          <button onClick={()=> this.toggleForm()}> Edit </button>
        }
        <button onClick={()=> deleteHandyman(id)}> Delete </button>

      </>
    )
  }
}
export default Handyman;