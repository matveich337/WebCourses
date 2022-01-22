import Users from '../../components/users/users';
import { useQuery } from 'react-query';
import { getUsers } from "./api/crud";

const UserContainer = () => {
    const { isFetching, refetch, data } = useQuery('users', () => getUsers());
    const users = data?.data;

    return (
        <Users users={users}/>
    )
}

export default UserContainer;
