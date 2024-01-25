const Content = ({children} : {children: any}) => {
    return (
        <div className="h-screen" style={{ marginBottom: "100vh" }}>
            {children}
        </div>
    )
}

export default Content