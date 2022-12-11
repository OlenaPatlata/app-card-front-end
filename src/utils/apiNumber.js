import axios from 'axios';

axios.defaults.baseURL = 'https://api.bincodes.com/bin/json/7b594cc864ca6e39b5cd42580299d287/';

const getBankInfo = async (number) => {
  const { data } = await axios.get(
    `/${number}/`
  );
  return data;
};

export { getBankInfo };