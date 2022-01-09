import "./style.css"

const Body = ({component}) => {

    return (
        <div>
            {component()}
        </div>
    )
}

export default Body;