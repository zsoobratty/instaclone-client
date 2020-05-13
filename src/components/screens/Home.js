import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="card home-card">
        <h5>Dude 1</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>Title</h6>
          <p>This is the post</p>
          <input type="text" placeholder="Add a comment" />
        </div>
      </div>
    </div>
  );
};

export default Home;
