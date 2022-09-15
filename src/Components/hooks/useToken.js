import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState();
  useEffect(() => {
    const getToken = async () => {
      const uid = user?.user?.uid;
      if (uid) {
        const { data } = await axios.post("http://localhost:5000/login", {
          uid: uid,
        });
        setToken(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
      }
    };
    getToken();
  }, [user]);
  return [token];
};

export default useToken;
