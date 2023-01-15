import React from "react";
import AboutCard from "./Card.jsx";
import { BsBullseye } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { GiLaurelsTrophy } from "react-icons/gi";

const Info = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <p>
            We serve our customers at every project phase, from strategy
            formulation and Business Analysis through design, project management
            and implementation right through to support and upgrades. We are
            committed to best practices and professional integrity to ensure we
            deliver quality. Customer satisfaction drives every aspect of our
            business. These time-honoured qualities are incorporated into every
            project.
          </p>
        </div>
      </div>

      <div className="about">
        <div className="container">
          <h2> Services</h2>

          <div className="card-container">
            <div className="card">
              <AboutCard
                icon={<BsBullseye className="icon" />}
                heading="Software Development"
                text="Our mission is to maintain the highest levels of professionalism, integrity,
                            honesty and fairness."
              />
            </div>
            <div className="card">
              <AboutCard
                icon={<BsBullseye className="icon" />}
                heading="Website Development"
                text="At MUO, we professionally design, redesign and continuously support customer-facing 
                and enterprise web apps to achieve 
                high conversion and adoption rates"
              />
            </div>

            <div className="card">
              <AboutCard
                icon={<HiLightBulb className="icon" />}
                heading="Software Testing(Manual & Automation)"
                text=" MUO’s test
                 automation team to validates and re-validates the performance 
                 of it's partners. The collaboration helped stabilize the store’s performance and ensure
                  its full compliance with the performance requirements.

                "
              />
            </div>
            <div className="card">
              <AboutCard
                icon={<HiLightBulb className="icon" />}
                heading="Robotic Process Automation(RPA)"
                text="MUO investments is an IT company recognized for exceptional
              services."
              />
            </div>
            <div className="card">
              <AboutCard
                icon={<GiLaurelsTrophy className="icon" />}
                heading="IT Project Management"
                text="Outline the scope of IT services you might need, and we’ll come up with a best-priced offer to ensure the stability and evolution of the required IT components and processes.

                GET A MANAGED IT SERVICE OFFER"
              />
            </div>

            <div className="card">
              <AboutCard
                icon={<GiLaurelsTrophy className="icon" />}
                heading="ERP Implementation"
                text="Our mission for high standards and quality and commitments towards
                         our client satisfaction is directly related to our Values"
              />
            </div>

            <div className="card">
              <AboutCard
                icon={<GiLaurelsTrophy className="icon" />}
                heading="IT Audit"
                text="We help evaluate  an organization's information 
                technology infrastructure, policies and operations.
                 We determine whether IT controls protect corporate assets, 
                 ensure data integrity and are 
                aligned with the business's overall goals."
              />
            </div>

            <div className="card">
              <AboutCard
                icon={<GiLaurelsTrophy className="icon" />}
                heading="Data analytics"
                text="Data analytics implies building an infrastructure
                 for data aggregation, analysis, and reporting. An experienced 
                 provider of data analytics services, MUO delivers on simple and complex needs 
                with tailored business analytics solutions."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
