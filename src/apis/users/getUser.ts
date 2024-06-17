import { User } from '@typings/users/usersType';
import instance from '../index';

export const getUser = async (token: string) => {
  try {
    const userResponse = await instance.get(`/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const username = userResponse.data.login;

    const [followersResponse, followingResponse] = await Promise.all([
      instance.get(`/users/${username}/followers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      instance.get(`/users/${username}/following`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    ]);

    const followingSet = new Set(followingResponse.data.map((user: User) => user.login));

    const followForFollow = followersResponse.data.filter((user: User) =>
      followingSet.has(user.login)
    );
    const nonFollowForFollow = followersResponse.data.filter(
      (user: User) => !followingSet.has(user.login)
    );

    return {
      ...userResponse.data,
      followForFollow,
      nonFollowForFollow,
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
