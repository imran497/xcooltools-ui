import api from '@/lib/utilities/api';

export const getGptsListAPI = async () => {
  const data = await api.get('/gpts-directory/data');
  return data.content || [];
};

export const saveNewGptAPI = async (reqData) => {
  const data = await api.post('/gpts-directory/new', reqData);
  return data;
};
