import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const UsersItem = (props) => {
   const { user } = props;

   return (
      <li className="users__item">
         <Link to={user.username.toLowerCase()} className="users__link">
            {user.username}
         </Link>
      </li>
   );
};

UsersItem.propTypes = {
   user: PropTypes.shape({
      id: PropTypes.number,
      email: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
      username: PropTypes.string,
      website: PropTypes.string,

      address: PropTypes.shape({
         city: PropTypes.string,
         street: PropTypes.string,
         suite: PropTypes.string,
         zipcode: PropTypes.string,

         geo: PropTypes.shape({
            lat: PropTypes.string,
            lng: PropTypes.string,
         }),
      }),

      company: PropTypes.shape({
         name: PropTypes.string,
         bs: PropTypes.string,
         catchPhrase: PropTypes.string,
      }),
   }),
};

export default UsersItem;
