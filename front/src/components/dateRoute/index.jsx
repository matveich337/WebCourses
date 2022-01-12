import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router';

const DateRoute = () => {
    const params = useParams();
    const {DATE} = params;

    const renderDate = () => {
        if(new Date(DATE) < new Date() && DATE.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)) {
            return <div>date</div>
        } else {
            return <Navigate to="/" />
        }
    }
    return <div>
        {renderDate()}
    </div>
}

export default DateRoute;
