import PropTypes from "prop-types";

import UsersItem from "./UsersItem";

import "./Users.scss";

const UsersList = (props) => {
   const { users } = props;

   const renderListUsers = () => {
      if (!users) return <div>loadeng</div>;

      if (users) {
         return (
            users &&
            users.map((user) => <UsersItem key={user.id} user={user} />)
         );
      }
   };

   return <ul className="users">{renderListUsers()}</ul>;
};

UsersList.propTypes = {
   users: PropTypes.arrayOf(
      PropTypes.shape({
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
      })
   ),
};

export default UsersList;
