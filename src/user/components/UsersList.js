import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";

const UsersList = (props) => {
  // Check if there are users
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found...</h2>
      </div>
    );
  }

  //If there are users then return an unordered list
  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
