import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import "./App.scss";
import Header from "../Header/Header";
import UsersList from "../Users/UsersList";
import UserInfo from "../Users/UserInfo";
import Footer from "../Footer/Footer";

const App = () => {
   const [users, setUsers] = useState(null);

   const getUser = async () => {
      try {
         const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
         );
         setUsers(response.data);
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      getUser();
   }, []);

   return (
      <div className="App">
         <Router>
            <Header />
            <main className="content">
               <Switch>
                  <Route exact path="/">
                     <h1>Welcome</h1>
                  </Route>
                  <Route path="/users">
                     <UsersList users={users} />
                  </Route>
                  <Route path={`/:topicId`}>
                     <UserInfo users={users} />
                  </Route>
               </Switch>
            </main>
            <Footer />
         </Router>
      </div>
   );
};

export default App;
