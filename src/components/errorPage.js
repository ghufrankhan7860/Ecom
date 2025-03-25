import { NavLink } from 'react-router';

const Error = () => {
    return (
        <div className="error-page">
            <h1>Oops!</h1>
            <h2>Something went wrong</h2>
            

            <NavLink to="/">
                <button>Back to Home</button>
            </NavLink>
        </div>
    )
}
export default Error;