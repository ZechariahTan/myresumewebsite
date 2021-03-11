import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var experience = this.props.data.experience.map(function(experience){
        return <div key={experience.company}><h3>{experience.company}</h3>
            <p className="info">{experience.title}<span>&bull;</span> <em className="date">{experience.years}</em></p>
            <p>{experience.description}</p>
        </div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var extracurriculars = this.props.data.extracurriculars.map(function(extracurriculars){
        return <div key={extracurriculars.company}><h3>{extracurriculars.company}</h3>
            <p className="info">{extracurriculars.title}<span>&bull;</span> <em className="date">{extracurriculars.years}</em></p>
            <p>{extracurriculars.description}</p>
        </div>
      })
      var awards = this.props.data.awards.map(function(awards){
        return <div key={awards.company}><h3>{awards.company}</h3>
            <p className="info">{awards.title}<span>&bull;</span> <em className="date">{awards.years}</em></p>
            <p>{awards.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Experience</span></h1>
         </div>

         <div className="nine columns main-col">
          {experience}
        </div>
    </div>

    <div className="row work">

         <div className="three columns header-col">
            <h1><span>Extra-Curriculars</span></h1>
         </div>

         <div className="nine columns main-col">
          {extracurriculars}
        </div>
    </div>

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Projects</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>
    
    <div className="row work">

         <div className="three columns header-col">
            <h1><span>Awards</span></h1>
         </div>

         <div className="nine columns main-col">
          {awards}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
