import { useNavigate } from 'react-router-dom';

const RedirectExample = () => {

    let navigate = useNavigate();

    const handleClick = () => {
        console.log("clicked");

        navigate("/");
    };

    return (
        <>
            <h1>Hello from NavigateExample</h1>
            <button onClick={handleClick}>Click to redirect</button>
        </>
    );

};

export default RedirectExample;