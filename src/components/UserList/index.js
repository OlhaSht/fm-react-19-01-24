import React, { Component } from 'react';
import UserCard from "../UserCard";

const userDB =  [
    { id: 1, fname: "Joi" },
    { id: 2, fname: "Mol" },
    { id: 3, fname: "Boi" },
    { id: 4, fname: "Roi" },
    { id: 5, fname: "Voi" },
  ];
class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:userDB,
        }
    }

    mapUsers = (user) =><UserCard key={user.id} user = {user}/>;
    
    
    
    render() {
        const {users} = this.state;
        return (
            <section>
                <h1>Users List</h1>
                {users.map(this.mapUsers)}
            </section>
        );
    }
}

export default UserList;
