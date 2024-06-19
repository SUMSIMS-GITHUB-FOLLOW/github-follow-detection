import { useMutation, useQueryClient } from 'react-query';
import { getUser } from '@apis/users/getUser';
import { useUserStore } from '@hooks/users/useUserStore';

export const useFetchUser = () => {
  const setUser = useUserStore((state) => state.setUser);
  const setFollowForFollow = useUserStore((state) => state.setFollowForFollow);
  const setNonFollowForFollow = useUserStore((state) => state.setNonFollowForFollow);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (token: string) => getUser(token),
    onSuccess: (data) => {
      setUser(data);
      setFollowForFollow(data.followForFollow);
      setNonFollowForFollow(data.nonFollowForFollow);
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => {
      console.error('유저 정보 get 실패 : ', error);
    },
  });

  return mutation;
};
