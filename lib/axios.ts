import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface errorCatch {
  message: string;
}

interface FormResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  weapons: Array<any>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface axiosResponse {
  data: FormResponse;
}

export const getUrl = async (url: string) => {
  const result = await axios.get(url);

  return result;
};
