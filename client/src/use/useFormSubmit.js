import axios from "axios";

export default function useFormSubmit(credentials, endPoint) {
  const handleSubmit = async () => {
    const RESPONSE = await axios.post(endPoint, credentials);
    return RESPONSE.data;
  };
  return { handleSubmit };
}
