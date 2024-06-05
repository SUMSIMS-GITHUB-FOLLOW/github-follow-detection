import instance from '../index';

export const getUser = async (token: string) => {
  try {
    const response = await instance.get(`/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
