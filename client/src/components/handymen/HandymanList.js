import Handyman from './Handyman';
const HandymanList = ({ handymen, deleteHandyman, updateHandyman}) => {
  return(
    <>
      { handymen.map(h =>
        <Handyman
        key={h.id}
        {...h}
        deleteHandyman={deleteHandyman}
        updateHandyman={updateHandyman}
        />
        )} 
    </>
  )
}
export default HandymanList;