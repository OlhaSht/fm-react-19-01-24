import React from 'react';
import styles from './UsersList.module.scss'

const users = [
          {
            "id": 1,
            "name": "Іван Петрович",
            "age": 25,
            "email": "ivan@example.com"
          },
          {
            "id": 2,
            "name": "Марія Іванівна",
            "age": 30,
            "email": "maria@example.com"
          },
          {
            "id": 3,
            "name": "Петро Васильович",
            "age": 35,
            "email": "petro@example.com"
          },
          {
            "id": 4,
            "name": "Олена Миколаївна",
            "age": 28,
            "email": "olena@example.com"
          },
          {
            "id": 5,
            "name": "Андрій Олександрович",
            "age": 40,
            "email": "andriy@example.com"
          }
        ]
const UsersCard = users =>{
           return users.map(u =>(
           <li key={u.id} className={styles.userWrapper}>
          <h2 className={styles.userName}>{u.name}</h2>
          <p className={styles.userAge}>{u.age}</p>
          <h3 className={styles.userEmail}>{u.email}</h3>
      </li>
      )); }
const UsersList = () => {
  return (
    <div className={styles.userContainer}>
      <ul className={styles.userBlock}>{UsersCard(users)}</ul>
    </div>
    
  );
}

export default UsersList;


  
 
  
  