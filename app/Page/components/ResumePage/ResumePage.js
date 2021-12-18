import React from "react";

const ResumePage = () => (
  <div className="page">
    <div className="page__header">
      <h2 className="page__title">RESUME</h2>
    </div>
    <div className="page__content">
      <div className="resumePage__sub">
        <div>
          <h3 className="resumeSub__title">Education</h3>
          <div className="timelines">
            <div className="timeline">
              <h4 className="experience__title">
                Graduate Diploma in Computer Science
              </h4>
              <div className="experience__meta">
                <span className="experience__year">2019 - 2021</span>
                &nbsp;
                <i className="experience__divider"></i>
                &nbsp;
                <span className="experience__company">
                  University of Adelaide
                </span>
              </div>
            </div>
            <div className="timeline">
              <h4 className="experience__title">
                Bachelor of Laws in Investigation
              </h4>
              <div className="experience__meta">
                <span className="experience__year">2012 - 2016</span>
                &nbsp;
                <i className="experience__divider"></i>
                &nbsp;
                <span className="experience__company">
                  Guangdong Police College
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="resumeSub__title">Experience</h3>
          <div className="timelines">
            <div className="timeline">
              <h4 className="experience__title">Business-like project</h4>
              <div className="experience__meta">
                <span className="experience__year">Aug 2021 - Present</span>
                &nbsp;
                <i className="experience__divider"></i>
                &nbsp;
                <span className="experience__company">Full stack Developer</span>
              </div>
              <div className="experience__description">
                <li>Personal website</li>
                <li>Weather app</li>
              </div>
            </div>
            <div className="timeline">
              <h4 className="experience__title">
                Dog Groomer / Handler (Part-Time)
              </h4>
              <div className="experience__meta">
                <span className="experience__year">Dec 2019 - Jun 2021</span>
                &nbsp;
                <i className="experience__divider"></i>
                &nbsp;
                <span className="experience__company">Self-employed</span>
              </div>
              <div className="experience__description">
                <li>
                  Providing basic grooming service in high quality to 2 show
                  dogs
                </li>
                <li>
                  Assisting obedience and manner training for 2 show dogs which
                  helped them accomplish Life Skills & Obedience Level 3 in
                  Advanced Behavioural Training
                </li>
              </div>
            </div>
            <div className="timeline">
              <h4 className="experience__title">
                Police Officer (Permanent Full-Time)
              </h4>
              <div className="experience__meta">
                <span className="experience__year">Sep 2016 - Jul 2019</span>
                &nbsp;
                <i className="experience__divider"></i>
                &nbsp;
                <span className="experience__company">
                  Procuratorate of Tianhe
                </span>
              </div>
              <div className="experience__description">
                <li>
                  Assisting Prosecutors in about 430 criminal cases per year
                  with interrogating, investigating and case analysis
                </li>
                <li>
                  Conducting data entry, bookkeeping, and other administration
                  works within the Department of Bailiff
                </li>
                <li>
                  Coordinating in the new security system development project
                  which was successfully delivered in time within the budget
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ResumePage;
