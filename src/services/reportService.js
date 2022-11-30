import axios from "axios";

export const getReport = async (leaderId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_KPIS_API_URL}/v1/report/leader/${leaderId}/subordinates`
  );

  return response.data;
};