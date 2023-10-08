import React from "react";

const Playlist = () => {
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

        <section className="playlist-details">
          <h1 className="heading">playlist details</h1>
          <div className="row">
            <div className="column">
              <form action="" method="post" className="save-playlist">
                <button type="submit">
                  <i className="far fa-bookmark"></i> <span>save playlist</span>
                </button>
              </form>
              <div className="thumb">
                <img src="images/thumb-1.png" alt="" />
                <span>10 videos</span>
              </div>
            </div>
            <div className="column">
              <div className="tutor">
                <img src="images/pic-2.jpg" alt="" />
                <div>
                  <h3>john deo</h3>
                  <span>21-10-2022</span>
                </div>
              </div>
              <div className="details">
                <h3>complete HTML tutorial</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illum minus reiciendis, error sunt veritatis exercitationem
                  deserunt velit doloribus itaque voluptate.
                </p>
                <a href="teacher_profile.html" className="inline-btn">
                  view profile
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="playlist-videos">
          <h1 className="heading">playlist videos</h1>
          <div className="box-container">
            <a className="box" href="watch-video.html">
              <i className="fas fa-play"></i>
              <img src="images/post-1-1.png" alt="" />
              <h3>complete HTML tutorial (part 01)</h3>
            </a>
            <a className="box" href="watch-video.html">
              <i className="fas fa-play"></i>
              <img src="images/post-1-2.png" alt="" />
              <h3>complete HTML tutorial (part 02)</h3>
            </a>
            <a className="box" href="watch-video.html">
              <i className="fas fa-play"></i>
              <img src="images/post-1-3.png" alt="" />
              <h3>complete HTML tutorial (part 03)</h3>
            </a>
            <a className="box" href="watch-video.html">
              <i className="fas fa-play"></i>
              <img src="images/post-1-4.png" alt="" />
              <h3>complete HTML tutorial (part 04)</h3>
            </a>
            <a className="box" href="watch-video.html">
              <i className="fas fa-play"></i>
              <img src="images/post-1-5.png" alt="" />
              <h3>complete HTML tutorial (part 05)</h3>
            </a>
            <a className="box" href="watch-video.html">
              <i className="fas fa-play"></i>
              <img src="images/post-1-6.png" alt="" />
              <h3>complete HTML tutorial (part 06)</h3>
            </a>
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

export default Playlist;
