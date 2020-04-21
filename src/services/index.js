import axios from 'axios';

const billsUrl = 'http://localhost:3002/bills';

export const getBills = async () => {
  const response = await axios.get(billsUrl);
  return response;
};
