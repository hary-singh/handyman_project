import Handyman from './Handyman';
import { Grid } from 'semantic-ui-react';
const HandymanList = ({ handymen, deleteHandyman, updateHandyman}) => {
  return(
    <>
        <Grid columns="2">
      { handymen.map(h =>
          <Grid.Column>

          <Handyman
            key={h.id}
            {...h}
            deleteHandyman={deleteHandyman}
            updateHandyman={updateHandyman}
            />
            </Grid.Column>
        )} 
        </Grid>
    </>
  )
}
export default HandymanList;