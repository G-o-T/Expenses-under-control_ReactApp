import "./title.css";

const Title = ({children, className=""}) => {

    const titleClassName = "title " + className;

    return (
        <div className={titleClassName}>
            {children}
        </div>
    )
}

export default Title;