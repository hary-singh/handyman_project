import Handyman from './Handyman';
import { Card } from 'semantic-ui-react';
const HandymanList = ({ handymen, deleteHandyman, updateHandyman}) => {
  return(
    <>
      { handymen.map(h =>
        <div className="ui cards">
          <Handyman
            key={h.id}
            {...h}
            deleteHandyman={deleteHandyman}
            updateHandyman={updateHandyman}
          />
        </div>
        )} 
    </>
  )
}
export default HandymanList;