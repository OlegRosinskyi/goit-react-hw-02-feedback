//import PropTypes from 'prop-types';

import { ButtonStyl } from "./Button.styled";
import { ButtonStylActiv } from "./ButtonActiv.syiled";
import { ButtonStylActivCirc } from "./ButtonActiv.syiled";

const ButtonSingl = ({NameButton,id,activeStateHandler,buttonActiv}) =>
{
    //console.log(buttonActiv);
    return (
        <> 
            {(buttonActiv === NameButton) ? <><ButtonStylActiv type="button" id={id} onClick={activeStateHandler} value={id}> {NameButton} </ButtonStylActiv>
                <ButtonStylActivCirc value={id}> </ButtonStylActivCirc></>
            
            : <><ButtonStyl type="button" id={id} onClick={activeStateHandler}> {NameButton} </ButtonStyl> </>}
            
               
        </>
     )
}
export default ButtonSingl;

//Statistics.propTypes = {
 // stats: PropTypes.exact({
 //   id: PropTypes.string.isRequired,
//    label: PropTypes.string.isRequired,
//    percentage: PropTypes.number.isRequired, 
//    }).isRequired,
//}