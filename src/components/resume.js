import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Ayush R Sachan</h2>
            <h4 style={{color: 'grey'}}>Coding enthusiast||Mechanchie</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Dummy text.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1190 W-2 Basant Vihar Kanpur</p>
            <h5>Phone</h5>
            <p>7388572255</p>
            <h5>Email</h5>
            <p>ayush.sachan1@gmail.com</p>
            <h5>Web</h5>
            <p>to be website: https://www.ayushsachan.tech/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2004}
              endYear={2016}
              schoolName="Puranchandra Vidyaniketan"
              schoolDescription="Dummy text for school"
               />

               <Education
                 startYear={2018}
                 endYear={2022}
                 schoolName="Pranveer Singh Institute of Technology"
                 schoolDescription="Dummy text for college  "
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear="May 2020"
              endYear="June 2020"
              jobName="JP Morgan Software Engineering internship"
              jobDescription="Dummy text for jp internship"
              />

              <Experience
                startYear="June 2020"
                endYear="July 2020"
                jobName="Codespeedy Technologies Pvt Ltd"
                jobDescription="Dummy text for second internship"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
