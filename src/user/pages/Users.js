import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Miguel Chiau",
      image:
        "https://www.google.com/search?q=maputo+sunrise&safe=strict&rlz=1C5CHFA_enCA850CA850&sxsrf=ALeKk00tKtJxcVLp93tQ4EyRIPM_zsXfmA:1590517211738&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjnpKirktLpAhVGIDQIHWsaCeUQ_AUoAXoECA0QAw&biw=1440&bih=820#imgrc=zMcTdm3MS9_4oM",
      places: 3,
    },
  ];

  return <UsersList />;
};

export default Users;
