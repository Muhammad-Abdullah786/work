import { useContext, createContext, useState, useId } from "react";
import { socialSvg, insta, react, svg, cat } from "../Constant/index";

// createign  the context
export const UserContext = createContext({
  user: [],
  addUser: (accountName) => {},
  deleteUser: (id) => {},
  updateUser: (id, accountName) => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([
    {
      id: useId(),
      name: "Samantha",
      pic: socialSvg,
      tag: insta,
      followers: "57,800",
      mentions: "567",
      completed: false,
    },
    {
      id: useId(),
      name: "The Late Late Show",
      pic: cat,
      tag: svg,
      followers: "6,547",
      mentions: "59,893",
      completed: false,
    },
    {
      id: useId(),
      name: "Devon Webb",
      pic: socialSvg,
      tag: svg,
      followers: "99",
      mentions: "39,000",
      completed: false,
    },
    {
      id: useId(),
      name: "ken Webb",
      pic: socialSvg,
      tag: svg,
      followers: "99",
      mentions: "39,000",
      completed: false,
    },
    {
      id: useId(),
      name: "abdd Webb",
      pic: socialSvg,
      tag: svg,
      followers: "99",
      mentions: "39,000",
      completed: false,
    },
    {
      id: useId(),
      name: "Devfadfon Webb",
      pic: socialSvg,
      tag: svg,
      followers: "99",
      mentions: "39,000",
      completed: false,
    },
    {
      id: useId(),
      name: "Devofadfadn Webb",
      pic: socialSvg,
      tag: svg,
      followers: "99",
      mentions: "39,000",
      completed: false,
    },
  ]);

  const deleteUser = (id) => {
    setUser(user.filter((u) => u.id !== id));
  };

  const updateUser = (id, newName) => {
    setUser(user.map((u) => (u.id === id ? { ...u, name: newName } : u)));
  };

  return (
    <UserContext.Provider value={{ user, deleteUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook to use the context
export const useUser = () => {
  return useContext(UserContext);
};
