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
            users:userDB.map((user)=>{return {...user, isSelected:false}}),
        }
    }

    userSelector = (id)=>{
        const {users} = this.state;
        const newUsers = users.map((user)=>({...user,  
            isSelected: id===user.id ? !user.isSelected : user.isSelected,
        }))
        this.setState({users:newUsers})
    }

    mapUsers = (user) =><UserCard key={user.id} user = {user} 
    userSelector={this.userSelector}/>;
    
    
    
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
