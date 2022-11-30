import axios from "axios";

export const validateUser = async (email) => {
  const response = await axios.post(
    `${process.env.REACT_APP_KPIS_API_URL}/v1/validateUserEmail`,
    {
      email,
    }
  );

  return response.data;
};
