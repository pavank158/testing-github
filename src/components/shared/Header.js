


import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const Header = ({username, isAuth , logout}) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">BookWithMe</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2 bwm-search" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-bwm-main btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <ul className="navbar-nav ml-auto">
          { isAuth &&
            <li className="nav-item">
              <div 
                className="nav-link">Welcome {username} 
              </div>
            </li>
          }
          <li className="nav-item active">
            <Link 
              className="nav-link" 
              to="/">Home 
              <span className="sr-only">(current)</span>
            </Link>
          </li>

          { isAuth &&
            <>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Manage
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <div
                 onClick={logout}
                  className="nav-link">Logout
                </div>
              </li>
            </>
          }
          { !isAuth &&
            <>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/register">Register</Link>
              </li>
            </>
          }
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = ({auth: {username, isAuth}}) => {
  return {
    username,
    isAuth
  }
}

export default connect(mapStateToProps)(Header); 




































// import React from 'react';

// const RentalCard = ({rental}) =>{

//   return(
//     <div className="card bwm-card">
//         <img 
//            className="card-img-top" 
//            src={rental.image} 
//            alt={rental.title} />
//            <div className="card-body">
//            <h6 className={`card-subtitle mb-0 type-${rental.category}`}>
//              {/*</h6> <h6 className="card-subtitle mb-0 text-muted">*/} 
//                {rental.shared ? 'shared' : 'whole'}{rental.category} &#183; {rental.city}
//              </h6>
//              <h5 className="card-title big-font">{rental.title}</h5>
//              <p className="card-text">${rental.dailyPrice} per Night &#183; Free Cancelation</p>
//            </div>
//          </div>

//   )
// }

// export default RentalCard;