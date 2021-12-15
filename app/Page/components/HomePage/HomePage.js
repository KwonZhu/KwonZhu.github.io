import React from 'react';

const HomePage = () => (
  <div className="page page--active"> 
    <div className="page__header homepage__header">
      <img className="homepage__avatar" src="" alt="" />
      <div className="homepage__title">
      <h2 className="homepage__name">Kwon Zhu</h2>
      <div className="homepage__position">Junior Software Engineer</div>
      <div className="homepage__socialMedias">
          <i className="fab fa-twitter homepage__socialMediaItem"></i>
          <i className="fab fa-facebook-f homepage__socialMediaItem"></i>
          <i className="fab fa-instagram homepage__socialMediaItem"></i>
      </div>
    </div>
  </div>
  <div className="page__content homepage__content">
      <div>
      <h3 className="homepage__aboutMeHeader">
          About
          <span className="homepage__aboutMeHeaderHighlight">Me</span>
      </h3>
      <div className="homepage__aboutMeContent">
        Hi there, I'm Kwon and I am a Junior Software Engineer. I have finished
        Graduate Diploma in Computer Science in University of Adelaide.
        This is my personal web project, and I hope you could enjoy it!
      </div>
      </div>
      <table className="homepage__contact">
          <tbody>
              <tr>
                  <td>Residence</td>
                  <td>Adelaide, SA</td>
              </tr>
              <tr>
                  <td>Email</td>
                  <td>
                  <a href="mailto:kwonzhu@gmail.com">
                    kwonzhu@gmail.com
                  </a>
                  </td>
              </tr>
              <tr>
                  <td>Mobile</td>
                  <td>+61 043 4837 886</td>
              </tr>
          </tbody>
      </table>
  </div>
  </div>
);
export default HomePage;