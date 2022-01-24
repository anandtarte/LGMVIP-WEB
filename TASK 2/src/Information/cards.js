import React from "react";
const Users = ({ loading, users }) => {
  const mainstyle = {
    display: "flex"
  };
  return loading ? (
    <div id="main" align="center">
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/04de2e31234507.564a1d23645bf.gif"
        alt="loading.."
        className="loader"
      />
    </div>
  ) : (
    <div id="main" style={mainstyle}>
      {users.map((user) => (
        <div className="profile_cont" key={user.id}>
          {console.log(user)}

          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
          <h1 className="name">
            {user.first_name} {user.last_name}
          </h1>
          <p className="email">Email: {user.email}</p>
          <p>User: {user.id}</p>
        </div>
      ))}
    </div>
  );
};
export default Users;