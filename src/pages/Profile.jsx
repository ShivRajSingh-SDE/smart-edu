import React from "react";

const Profile = () => {
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

        <section className="user-profile">
          <h1 className="heading">your profile</h1>
          <div className="info">
            <div className="user">
              <img src="images/pic-1.jpg" alt="" />
              <h3>shaikh anas</h3>
              <p>student</p>
              <a href="update.html" className="inline-btn">
                update profile
              </a>
            </div>
            <div className="box-container">
              <div className="box">
                <div className="flex">
                  <i className="fas fa-bookmark"></i>
                  <div>
                    <span>4</span>
                    <p>saved playlist</p>
                  </div>
                </div>
                <a href="#" className="inline-btn">
                  view playlists
                </a>
              </div>
              <div className="box">
                <div className="flex">
                  <i className="fas fa-heart"></i>
                  <div>
                    <span>33</span>
                    <p>videos liked</p>
                  </div>
                </div>
                <a href="#" className="inline-btn">
                  view liked
                </a>
              </div>
              <div className="box">
                <div className="flex">
                  <i className="fas fa-comment"></i>
                  <div>
                    <span>12</span>
                    <p>videos comments</p>
                  </div>
                </div>
                <a href="#" className="inline-btn">
                  view comments
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          &copy; copyright @ 2022 by <span>mr. web designer</span> | all rights
          reserved!
        </footer>
      </div>
    </div>
  );
};

export default Profile;
