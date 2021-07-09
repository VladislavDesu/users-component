import { useEffect, useState } from "react";

import axios from "axios";

import "./App.css";

function App() {
   const [users, setUsers] = useState(null);

   async function getUser() {
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
      console.log(users);
   }, [users]);

   return <div className="App"></div>;
}

export default App;
