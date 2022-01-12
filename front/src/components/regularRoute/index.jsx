import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router';

const RegularRoute = () => {
    const params = useParams();
    const {id} = params;
    console.log(params)

    const renderString = () => {
        if(id.match(/^\d+$/)) {
            return <div>digits</div>
        } else if(id.match(/^[A-Z]*$/)) {
            return <div>capital letters</div>
        } else if(id.match(/([A-Za-z0-9])+.(doc|jpeg|pdf)/)) {
            return <div>files</div>
        } else {
            return <Navigate to="/" />
        }
    } 
    return <div>
        {renderString()}
    </div>
}

export default RegularRoute;