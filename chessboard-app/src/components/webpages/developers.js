import React, { useState } from "react";
import "./../../index.css";
import JacobKresak from "./../images/JacobKresak.jpg";
import profilepic from "./../images/profilepic.jpg";
import headshot from "./../images/headshot.png";
import unknown from "./../images/unknown.png";
import { Link } from "react-router-dom";

export default function Developers() {
  return (
    <>
      <div className="developerpage">
        <h1 className="header">Meet The Development Team</h1>
        <div className="top">
          <div>
            <img src={profilepic}></img>
            <p>
              KOLTON KOESTER
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/KKoester10"
              >
                Go to Kolton's Github
              </a>
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/kkoester10/"
              >
                Go to Kolton's LinkedIn
              </a>
              <br />
            </p>
          </div>
          <div>
            <img src={headshot}></img>
            <p>
              SKIP TOWNSEND
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/skiptownsend"
              >
                Go to Skip's Github
              </a>
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/skiptownsend/"
              >
                Go to Skip's LinkedIn
              </a>
              <br />
            </p>
          </div>
        </div>
        {/* top class ------------- */}

        <div className="Middle">
          <div>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQFUpksLgaQjWw/profile-displayphoto-shrink_800_800/0/1662396897053?e=1674691200&v=beta&t=tticW78PzVgeXVfM7s8C9s4vIJA1OTGfaSeXUIxYZG0"
              alt=""
            ></img>
            <p>
              KEVIN DAGES
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Kevin-Dages"
              >
                Go to Kevin's Github
              </a>
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/kevin-dages/"
              >
                Go to Kevin's LinkedIn
              </a>
              <br />
            </p>
          </div>
          <div>
            <img src={JacobKresak}></img>
            <p>
              JACOB KRESAK
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/jkresak101"
              >
                Go to Jacob's Github
              </a>
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/jacob-kresak/"
              >
                Go to Jacob's LinkedIn
              </a>
              <br />
            </p>
          </div>
        </div>
        {/* Middle ------------------ */}

        <div className="abu">
          <div>
            <img src={unknown}></img>
            <p>
              ABUUKAR ABUKKAR <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/abuukar90"
              >
                Go to Abuukar's Github
              </a>
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/abuukar-abuukar-44a489174/"
              >
                Go to Abuukar's LinkedIn
              </a>
              <br />
            </p>
          </div>
        </div>
        {/* Abu Class ------------- */}

      </div>
    </>
  );
}
