import { useMutation, useQueryClient } from 'react-query';
import { getUser } from '@apis/users/getUser';
import { useUserStore } from '@hooks/users/useUserStore';
import { User } from '@typings/users/usersType';

export const useFetchUser = () => {
  const setUser = useUserStore((state) => state.setUser);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (token: string) => getUser(token),
    onSuccess: (data: User) => {
      setUser(data);
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => {
      console.error('유저 정보 get 실패 : ', error);
    },
  });

  return mutation;
};
