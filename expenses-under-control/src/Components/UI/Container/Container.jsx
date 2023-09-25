import "./container.css"

const Container = ({children, className=""}) => {

    const containerClassName = "container " + className;

    return (
        <div className={containerClassName}>
            {children}
        </div>
    )
}

export default Container;