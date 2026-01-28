import "../css/NavBar.css";

const Navbar = () => {
    const now = new Date();

    const day = now.toLocaleDateString("en-US", { weekday: "long" });
    const month = now.toLocaleDateString("en-US", { month: "short" });
    const date = now.getDate();
    const year = now.getFullYear();

    return (
        <nav className="navbar">
            <div className="nav-left">
                <span className="nav-accent" />

                <div className="nav-title">
                    <h1>EXPENSE TRACKER</h1>
                    <p>TRACK YOUR FINANCES WITH PRECISION</p>
                </div>
            </div>

            <div className="nav-right">
                <div className="nav-date-main">
                    {month.toUpperCase()} {date}
                </div>
                <div className="nav-date-sub">
                    {day.toUpperCase()}, {year}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
