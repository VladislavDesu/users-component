import PropTypes from "prop-types";

import { useParams } from "react-router-dom";

const UserInfo = (props) => {
   const { users } = props;

   const { topicId } = useParams();

   const user =
      users &&
      users.filter((user) => user.username.toLowerCase() === topicId)[0];

   return user ? (
      <div>
         <h1>{user.username}</h1>
         <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Phone: {user.phone}</li>
            <li>Website: {user.website}</li>
         </ul>
         <div>
            <h2>Company</h2>
            <ul>
               <li>Name: {user.company.name}</li>
               <li>BS: {user.company.bs}</li>
               <li>Catch Phrase: {user.company.catchPhrase}</li>
            </ul>
         </div>
         <div>
            <h2>Address</h2>
            <ul>
               <li>City: {user.address.city}</li>
               <li>Street: {user.address.street}</li>
               <li>Suite: {user.address.suite}</li>
               <li>Zipcode: {user.address.zipcode}</li>
               <li>
                  <div>lat: {user.address.geo.lat}</div>
                  <div>lng: {user.address.geo.lng}</div>
               </li>
            </ul>
         </div>
      </div>
   ) : (
      <h1>Загрузка...</h1>
   );
};

UserInfo.propTypes = {
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

export default UserInfo;
