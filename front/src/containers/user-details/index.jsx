import UserDetails from "../../components/user-details";
import { useQuery } from 'react-query';
import { useParams } from "react-router";
import { getUser } from "./api/crud";

const UserDetailsContainer = () => {
    const params = useParams();
    const {id} = params;
    const { isFetching, refetch, data } = useQuery('user', () => getUser(id));
    const user = data?.data;

    return (
        <UserDetails {...user}/>
    )
}

export default UserDetailsContainer;
