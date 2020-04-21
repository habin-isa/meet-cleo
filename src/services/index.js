import axios from 'axios';

const billsUrl = 'http://localhost:3002/bills/';

export const getBills = async () => {
  const response = await axios.get(billsUrl);
  return response;
};

// export const removeBill = async (id) => {
//   const url = updateUrl + `${id}`;
//   const response = await axios({
//     method: 'patch',
//     url: url,
//     data: {
//       isBill: false
//     }
//   });
//   return response;
// };

// export const removeBill = async (id) => {
//   const url = updateUrl + `${id}`;
//   const response = await axios.post(url, {
//     isBill: false
//   });
//   debugger;
//   return response;
// };

export const updateBill = async (id, data) => {
  const url = billsUrl + `${id}`;
  return fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      isBill: data
    })
  }).then((resp) => resp.json());
};
