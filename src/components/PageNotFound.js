import React from "react";
import myImage from "./images/no_trespassing.jpg";
// const myImage = url("./images/no_trespassing.jpg");

const PageNotFound = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center mt-5">
            {/* <h1 className="display-4 text-center">404</h1> */}
            <h2>404 Page Not Found</h2>
            {/* <p className="lead">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p> */}
            <img
              src={myImage}
              // src="./images/no_trespassing.jpg"
              // src={require("/images/no_trespassing.jpg")}
              alt="Page Not Found"
              height={400}
              width={850}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
