import React from 'react';
import Ciao from '../Ciao';

const CiaoList = (props) => {
    const {users} = props;
    const mapUsers = ({ fname }, id) => (
        <Ciao key={id} name={fname} />
      )
    return (
        <div>
            {users.map(mapUsers)}
        </div>
    );
}

export default CiaoList;
