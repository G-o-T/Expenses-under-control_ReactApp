import "./text.css";

const Text = ({children}) => {
    return (
        <p className="text">
            {children}
        </p>
    )
}

export default Text;