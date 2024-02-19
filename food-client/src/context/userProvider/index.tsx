"use client";

import { PropsWithChildren, createContext, useState } from "react";
import axios from "axios"
import { useRouter } from "next/navigation";
import {toast} from "react-toastify"

interface IUser {
  name: string;
  email: string;
  address: string;
  password?: string;
}

interface IUserContext {
  user: IUser;
  login: (name: string, password: string) => void;
  // signup: (name:string, password:string, address:string) => void;
}

export const UserContext = createContext<IUserContext>({
  user: {
    name: "",
    email: "",
    address: "",
  },
  login: function () {},
});


export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<IUser>({
    name: "Test User",
    email: "",
    address: "",
    password: "",
  });

  const login = async (email: string, password: string) => {
    // console.log("email", user.email);
    // console.log("pass", user.password);
    if (user.email != user.password) {
      alert("Email эсвэл Password buruu baina");
      return;
    // }
    // if (!user.email.includes("@")) {
    //   alert("Email эсвэл Password Заавал бөглөх ёстой");
    //   return;
    }
    try {
      const { data } = await axios.post("http://localhost:8080/auth/login", {
        userEmail: user.email,
        userPassword: user.password,
      });
      console.log("DDD++++++>", data.user);
      setUser(data.user);
      router.push("/");
    } catch (error) {
      console.log("error", error);
      toast.error(`${error}`, { autoClose: 3000 });
    } finally {
    }
  };
   const signup = async (email: string, password: string, address:string) => {
    if (
      user.email ||
      user.password ||
      user.name ||
      user.address
    ) {
      alert("Хоосон талбаруууд байж болохгүй");
      return;
    }
  try  {
    const { data } = await axios.post("http://localhost:8080/auth/signup", {
      email: user.email,
      password: user.password,
      name: user.name,  
      address:user.address
    });
    console.log(data);
    setUser(data.user);
  } catch (error) {
    console.log(error);
    toast.error(`${error}`, { autoClose: 3000 });
  }};

  return (
    <UserContext.Provider value={{ user, login, }}>
      {children}
    </UserContext.Provider>
  );
  };
export default UserProvider;








