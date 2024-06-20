import instance from '../index';

export const putUser = async (username: string, token: string) => {
  try {
    const userResponse = await instance.put(
      `/user/following/${username}`,
      {},
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${token}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );

    return {
      userResponse,
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
