import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://medical-camp-server-phi.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
