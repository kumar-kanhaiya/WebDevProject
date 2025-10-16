import React from 'react';
import Card from './components/Card/card';

const jobOpenings = [
  {
    logo: "https://logo.clearbit.com/google.com",
    title: "Google",
    date: "5 days ago",
    dis: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    amount: "$65/hr",
    add: "Bangalore, India"
  },
  {
    logo: "https://logo.clearbit.com/amazon.com",
    title: "Amazon",
    date: "2 weeks ago",
    dis: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    amount: "$58/hr",
    add: "Hyderabad, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png",
    title: "Meta (Facebook)",
    date: "10 days ago",
    dis: "Frontend Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    amount: "$72/hr",
    add: "London, UK"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    title: "Apple",
    date: "3 weeks ago",
    dis: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    amount: "$60/hr",
    add: "Cupertino, USA"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_N_logo.svg",
    title: "Netflix",
    date: "1 week ago",
    dis: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    amount: "$80/hr",
    add: "Los Gatos, USA"
  },
  {
    logo: "https://logo.clearbit.com/microsoft.com",
    title: "Microsoft",
    date: "4 days ago",
    dis: "Cloud Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    amount: "$75/hr",
    add: "Seattle, USA"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    title: "Tesla",
    date: "8 days ago",
    dis: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Research Level",
    amount: "$85/hr",
    add: "Berlin, Germany"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    title: "OpenAI",
    date: "6 days ago",
    dis: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    amount: "$90/hr",
    add: "San Francisco, USA"
  },
  {
    logo: "https://logo.clearbit.com/ibm.com",
    title: "IBM",
    date: "2 weeks ago",
    dis: "DevOps Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    amount: "$55/hr",
    add: "Pune, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Adobe_Corporate_Logo.png",
    title: "Adobe",
    date: "9 days ago",
    dis: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    amount: "$52/hr",
    add: "Noida, India"
  }
];


 

  const App = () =>{
  return (
    <>
    <div className="parent">
      {jobOpenings.map(function(jobs){
        return (
          <Card
            key={jobs.title}
            logo={jobs.logo}
            title={jobs.title}
            dis={jobs.dis}
            date={jobs.date}
            tag1={jobs.tag1}
            tag2={jobs.tag2}
            amount={jobs.amount}
            add={jobs.add}
          />
        );
      })}
    </div>
    </>
  )
}


export default App
