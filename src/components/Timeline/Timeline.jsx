import React from 'react'
import classes from "./Timeline.module.css"
import {
    VerticalTimeline,
    VerticalTimelineElement
  } from 'react-vertical-timeline-component';
  import 'react-vertical-timeline-component/style.min.css';
  

  

const Timeline = () => {
    const timelineEvents = [
        {title: 'Project Kickoff', description: 'Initial project kickoff meeting.' },
        {title: 'Requirement Analysis', description: 'Detailed requirement analysis and gathering.' },
        {title: 'Design Phase', description: 'Designing the architecture and UI/UX.' },
        {title: 'Development Phase', description: 'Development of the project components.' },
        {title: 'Deployment', description: 'Deployment and final delivery.' },
      ];
  return (
    <div>
        <VerticalTimeline>
          {timelineEvents.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              date={event.date}
              iconStyle={{ background: '#f3d30d', color: '#f3d30d' }}
              icon={<i className="fas fa-briefcase"></i>}
            >
              <h3 className="vertical-timeline-element-title">{event.title}</h3>
              <h4 className={classes.desc}>{event.description}</h4>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
    </div>
  )
}

export default Timeline



// import React, { useEffect, useRef, useState } from 'react';
// import TimelineObserver from 'react-timeline-animation';
// // import { fireConfetti } from './confetti'; // Ensure the path to confetti.js is correct
// // import './styles.css'; // Ensure the path to styles.css is correct

// const Timeline = ({ setObserver, callback }) => {
//   const [message1, setMessage1] = useState('');
//   const [message2, setMessage2] = useState('');
//   const [message3, setMessage3] = useState('');

//   const timeline1 = useRef(null);
//   const timeline2 = useRef(null);
//   const timeline3 = useRef(null);
//   const circle1 = useRef(null);
//   const circle2 = useRef(null);
//   const circle3 = useRef(null);

//   const someCallback = () => {
//     setMessage1('okjadsadskojadskojdaskokjodsako');
//     callback();
//   };

//   const someCallback2 = () => {
//     setMessage2('Step two');
//   };

//   const someCallback3 = () => {
//     setMessage3('Finish');
//     fireConfetti();
//   };

//   useEffect(() => {
//     setObserver(timeline1.current);
//     setObserver(timeline2.current);
//     setObserver(timeline3.current);
//     setObserver(circle1.current, someCallback);
//     setObserver(circle2.current, someCallback2);
//     setObserver(circle3.current, someCallback3);
//   }, [setObserver]);

//   return (
//     <div className="wrapper">
//       <div id="timeline1" ref={timeline1} className="timeline" />
//       <div className="circleWrapper">
//         <div id="circle1" ref={circle1} className="circle"></div>
//         <div className="message">{message1}</div>
//       </div>
//       <div id="timeline2" ref={timeline2} className="timeline" />
//       <div className="circleWrapper">
//         <div id="circle2" ref={circle2} className="circle">2</div>
//         <div className="message">{message2}</div>
//       </div>
//       <div id="timeline3" ref={timeline3} className="timeline" />
//       <div className="circleWrapper">
//         <div id="circle3" ref={circle3} className="circle">3</div>
//         <div className="message">{message3}</div>
//       </div>
//     </div>
//   );
// };

// const TimelineWrapper = ({ onCallback }) => {
//   return (
//     <TimelineObserver
//       initialColor="#e5e5e5"
//       fillColor="black"
//       handleObserve={(setObserver) => (
//         <Timeline
//           callback={onCallback}
//           setObserver={setObserver}
//         />
//       )}
//     />
//   );
// };

// export default TimelineWrapper;
