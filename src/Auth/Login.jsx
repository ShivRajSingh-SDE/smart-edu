import React from "react";

const Login = () => {
  return (
    <div>
      <div>
        <header className="header">
          <section className="flex">
            <a href="home.html" className="logo">
              Educa.
            </a>
            <form action="search.html" method="post" className="search-form">
              <input
                type="text"
                name="search_box"
                required
                placeholder="search courses..."
                maxLength="100"
              />
              <button type="submit" className="fas fa-search"></button>
            </form>
            <div className="icons">
              <div id="menu-btn" className="fas fa-bars"></div>
              <div id="search-btn" className="fas fa-search"></div>
              <div id="user-btn" className="fas fa-user"></div>
              <div id="toggle-btn" className="fas fa-sun"></div>
            </div>
            <div className="profile">
              <img src="images/pic-1.jpg" className="image" alt="" />
              <h3 className="name">shaikh anas</h3>
              <p className="role">student</p>
              <a href="profile.html" className="btn">
                view profile
              </a>
              <div className="flex-btn">
                <a href="login.html" className="option-btn">
                  login
                </a>
                <a href="register.html" className="option-btn">
                  register
                </a>
              </div>
            </div>
          </section>
        </header>

        <div className="side-bar">
          <div id="close-btn">
            <i className="fas fa-times"></i>
          </div>
          <div className="profile">
            <img src="images/pic-1.jpg" className="image" alt="" />
            <h3 className="name">shaikh anas</h3>
            <p className="role">student</p>
            <a href="profile.html" className="btn">
              view profile
            </a>
          </div>
          <nav className="navbar">
            <a href="home.html">
              <i className="fas fa-home"></i>
              <span>home</span>
            </a>
            <a href="about.html">
              <i className="fas fa-question"></i>
              <span>about</span>
            </a>
            <a href="courses.html">
              <i className="fas fa-graduation-cap"></i>
              <span>courses</span>
            </a>
            <a href="teachers.html">
              <i className="fas fa-chalkboard-user"></i>
              <span>teachers</span>
            </a>
            <a href="contact.html">
              <i className="fas fa-headset"></i>
              <span>contact us</span>
            </a>
          </nav>
        </div>

        <section className="form-container">
          <form action="" method="post" encType="multipart/form-data">
            <h3>login now</h3>
            <p>
              your email <span>*</span>
            </p>
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              required
              maxLength="50"
              className="box"
            />
            <p>
              your password <span>*</span>
            </p>
            <input
              type="password"
              name="pass"
              placeholder="enter your password"
              required
              maxLength="20"
              className="box"
            />
            <input
              type="submit"
              value="login new"
              name="submit"
              className="btn"
            />
          </form>
        </section>

        <footer className="footer">
          &copy; copyright @ 2022 by <span>mr. web designer</span> | all rights
          reserved!
        </footer>
      </div>
    </div>
  );
};

export default Login;
