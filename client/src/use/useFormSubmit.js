import axios from "axios";

export default function useFormSubmit(endPoint, credentials) {
  const handleSubmit = async () => {
    const RESPONSE = await axios.post(endPoint.toString(), credentials);
    console.log(RESPONSE.data);
    return RESPONSE.data;
  };
  return { handleSubmit };
}
