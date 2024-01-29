import React, { Component } from 'react';
import CiaoList from '../CiaoList';

const userDB = [
    { id: 3, fname: "Joi" },
    { id: 2, fname: "Mol" },
    { id: 1, fname: "Boi" },
    { id: 4, fname: "Roi" },
    { id: 5, fname: "Voi" },
  ]
class CiaoSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStraightSortName: true,
            users: userDB,
          }; 
    }
    sortUsers = () => {
        const { users } = this.state;
        const copyUsers = JSON.parse(JSON.stringify(users));
        copyUsers.sort((prev, next) => {
          return prev.id - next.id;
        });
        this.setState({ users: copyUsers });
      };
      sortFname = () => {
        const { users, isStraightSortName } = this.state;
        const copyFname = JSON.parse(JSON.stringify(users));
        copyFname.sort((prev, next) => {
          if (prev.fname > next.fname) {
            return isStraightSortName ? 1 : -1;
          }
          if (prev.fname < next.fname) {
            return isStraightSortName ? -1 : 1;
          }
        });
        this.setState({
          users: copyFname,
          isStraightSortName: !isStraightSortName,
        });
      };
    
      render() {
        const { users, isStraightSortName: isUp } = this.state;
    
        return (
          <>
            <button onClick={this.sortFname}>
              sort by fname {isUp ? "Up" : "Down"}
            </button>
            <button onClick={this.sortUsers}>sort by id</button>
            <CiaoList users = {users}/>
          </>
        );
      }
   
}


export default CiaoSection;
