import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (

    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
  </form>*/}
          </div>



          {/* darkMode button  */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>   {/* if else used here is --> ternary operator */}
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>

          {/* Light-Blue Mode button 
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>   
            <input className="form-check-input" onClick={props.anotherMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Light-Blue</label>
          </div> */}

        </div>
      </nav>
    </>
  )
}




// propTypes                     they are used when you want to pass number,array,object in place of home about us contact us.
Navbar.propTypes = {
  title: PropTypes.string.isRequired, // you can remove isRequired also
  AboutText: PropTypes.string,
};

// default props                they are used when you don't or forget to pass value in the props like if you forget to pass the home, about, contact in the navbar then these value will show up there.
Navbar.defaultProps = {
  title: "Set title here",
  AboutText: "set title here",
};
