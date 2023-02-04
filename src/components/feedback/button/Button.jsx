//import PropTypes from 'prop-types';

import { ButtonStyl } from "./Button.styled";

const ButtonSingl = ({NameButtonOn,id}) =>
{
    return (
        <ButtonStyl type="button" id={id} onClick={event => {
            console.log("Increment button was clicked!", event);
            console.log("this.props: ", event.target.id);
        }}> {NameButtonOn} </ButtonStyl>
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