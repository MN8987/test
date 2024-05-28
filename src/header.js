function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand d-flex">

                    
                    <h5 className="m-2" > Basics Responsive Task </h5>
                    
                <div>
                    <svg style={{height:"35px",width:"220px" , marginLeft:"650px"}}>
                        <circle cx="80" cy="20" r="15" fill="#2ecc71" > </circle>
                        <circle cx="115" cy="20" r="15" fill="#2ecc71" > </circle>
                        <circle cx="150" cy="20" r="15" fill="#2ecc71" > </circle>
                        <circle cx="185" cy="20" r="15" fill="#2ecc71" > </circle>
                    </svg>
                    <input type="button" value="Login" className="btn btn-light"/>
                </div>
                </div>
            </div>
        </nav>

    );
}

export default Header;
