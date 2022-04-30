import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from '../../Components/Footer'

const Ambassador = () => {
  return (
    <>
      <Navbar />
      <div className="speaker">
        <div className="container pt-5">
          <h3 className="black">Youth Ambassador Registration </h3>
          <h5 className="black">
            We are looking for <span className="underline">enthusiastic</span> ambassador to promote our brand and
            join us in our mission
          </h5>
          <h6>Are you the 1? then fill the form!</h6>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="contact">Email </label>
            <input
              type="text"
              name="contact"
              id="contact"
              placeholder="features of your land"
            />
            <label htmlFor="introduce">Why should we consider you? </label>
            <textarea
              name="introduce"
              id="introduce"
              placeholder="your unique qualities"
              cols="30"
              rows="3"
            ></textarea>
            <label htmlFor="address">Address </label>
            <textarea
              name="address"
              id="address"
              placeholder="your address please"
              cols="30"
              rows="3"
            ></textarea>

            <input type="submit" className="btn submit btn-4 mt-3" value="SUBMIT" />
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Ambassador;
