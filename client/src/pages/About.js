import React from 'react';
import { useNavigate } from 'react-router-dom';

import aboutImg from '../assets/about.svg';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className=' mx-auto'>
      <div className='flex justify-center items-center h-screen'>
        <div className='glass' style={{ width: '45%', paddingTop: '3em' }}>
          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'>What is Splitwise?</h4>
            <p className='mt-4'>
              Splitwise is a Providence, RI-based company that makes it easy to
              split bills with friends and family.
            </p>
            <p>
              We organize all your shared expenses and IOUs in one place, so
              that everyone can see who they owe.
            </p>
            <p>
              Whether you are sharing a ski vacation, splitting rent with
              roommates,
            </p>
            <p>
              or paying someone back for lunch, Splitwise makes life easier.
            </p>
            <p>
              We store your data in the cloud so that you can access it
              anywhere: on iPhone, Android, or on your computer.
            </p>
            <h2 className='mt-4 font-bold text-lg'>We focus on fairness</h2>
            <p>
              Most people want to be fair to each other, but sometimes they
              forget, or can’t decide on what fair is.
            </p>
            <p>In addition to helping people honor their debts,</p>
            <p>
              we provide mediation advice about fairness issues through our
              “fairness calculators.”
            </p>
            <p>
              These calculators turn our crowdsourced data into a neutral
              fairness opinion about your personal situation.
            </p>

            <img src={aboutImg} alt='logo' className='mt-10 w-52' />
            <div className='text-center mt-20'>
              <span
                onClick={() => navigate('/dashboard')}
                className='text-gray-500 cursor-pointer'
              >
                Back to Dashboard
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;