import { useEffect, useState } from "react";

import axios from "axios";

import "./App.css";

const App = () => {
   const [users, setUsers] = useState(null);
   console.log(users)
   const getUser = async () => {
      try {
         const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
         );
         setUsers(response.data);
      } catch (error) {
         console.error(error);
      }
   }

   useEffect(() => {
      getUser();
   }, []);

   return <div className="App"/>;
}

export default App;
