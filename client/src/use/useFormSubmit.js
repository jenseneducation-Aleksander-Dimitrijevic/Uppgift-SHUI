import axios from "axios";

export default function useFormSubmit(endPoint, credentials, root) {
  const handleSubmit = async () => {
    const RESPONSE = await axios.post(endPoint.toString(), credentials);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${RESPONSE.data.token}`;
    sessionStorage.setItem("user", JSON.stringify(RESPONSE.data));
    root.$router.push({ name: "dashboard" });
  };
  return { handleSubmit };
}
