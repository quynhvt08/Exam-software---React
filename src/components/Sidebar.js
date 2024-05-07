import React from 'react';

const Navbar = () => {
  return (
    <nav className="mnb navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <i className="ic fa fa-bars"></i>
          </button>
          <div style={{ padding: '15px 0' }}>
            <a href="#" id="msbo"><i className="ic fa fa-bars"></i></a>
          </div>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">En</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Draude Oba <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Settings</a></li>
                <li><a href="#">Upgrade</a></li>
                <li><a href="#">Help</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </li>
            <li><a href="#"><i className="fa fa-bell-o"></i></a></li>
            <li><a href="#"><i className="fa fa-comment-o"></i></a></li>
          </ul>
          <form className="navbar-form navbar-right">
            <input type="text" className="form-control" placeholder="Search..." />
          </form>
        </div>
      </div>
    </nav>
  );
};

const MainSidebar = () => {
  return (
    <div className="msb" id="msb">
      <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <div className="brand-wrapper">
            <div className="brand-name-wrapper">
              <a className="navbar-brand" href="#">
                SAITAMA
              </a>
            </div>
          </div>
        </div>
        <div className="side-menu-container">
          <ul className="nav navbar-nav">
            <li><a href="#"><i className="fa fa-dashboard"></i> Dashboard</a></li>
            <li className="active"><a href="#"><i className="fa fa-puzzle-piece"></i> Components</a></li>
            <li><a href="#"><i className="fa fa-heart"></i> Extras</a></li>
            {/* Dropdown and other menu items */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="mcw">
      <div className="cv">
        <div>
          <div className="inbox">
            <div className="inbox-sb"></div>
            <div className="inbox-bx container-fluid">
              {/* Main content structure */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar, MainSidebar, MainContent };
