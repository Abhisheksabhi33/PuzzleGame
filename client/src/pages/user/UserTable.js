import React from 'react';
import Table from 'react-bootstrap/Table'

function UserTable({ users }) {
  // sort the users by score
  users.sort((a, b) => b.score - a.score);
  return (
     <div className='container mt-3'>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Rank</th>
          <th>User</th>
          <th>Score</th>
          <th>Total Attempt</th>
          <th>Correct Attempt</th>
          <th>Accuracy</th>
          {/* <th>Duration</th> */}
        </tr>
      </thead>
      <tbody>
        
        {users.map((user, index) => (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{user.username}</td>
                <td>{user.score}</td>
                <td>{user.total_attempted}</td>
                <td>{user.total_attempted - user.wrong_attempted}</td>
                {/* const Accuracy = (res.data.total_attempted - res.data.wrong_attempted)/res.data.total_attempted; */}
                <td>{ user.total_attempted===0? '0.00' :((user.total_attempted-user.wrong_attempted)/user.total_attempted).toFixed(2)}</td>
                {/* <td>{(Date(user.end_time)-Date(user.start_time))/1000}</td> */}
            </tr>
        ))}

      </tbody>
    </Table>
     </div>
  );
}

export default UserTable;
