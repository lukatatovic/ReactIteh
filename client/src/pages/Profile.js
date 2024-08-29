import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';

import avatar from '../assets/favicon.png';
import { profileValidate } from '../utils/validate';
import { convertToBase64 } from '../utils/convert';
import { useGlobalContext } from '../hooks/useGlobalContext.hook';

const Profile = () => {
  const [file, setFile] = useState();
  const navigate = useNavigate();
  const { userData, setUserData } = useGlobalContext();

  const formik = useFormik({
    initialValues: {
      firstName: userData?.firstName || '',
      lastName: userData?.lastName || '',
      username: userData?.username || '',
      email: userData?.email || '',
    },
    enableReinitialize: true,
    validate: profileValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = Object.assign(values, {
        profile: file || userData?.profile || '',
      });
      setUserData({
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        email: values.email,
        profile: values.profile,
      });
      toast.success(<b>Updated profile information!</b>);
    },
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  const onLogout = () => {
    // Logout logic
    navigate('/');
  };

  return (
    <div className=' mx-auto '>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='flex justify-center items-center h-screen'>
        <div className='glass' style={{ width: '45%', paddingTop: '3em' }}>
          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'>Profile Settings</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Edit your Information
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <label htmlFor='profile'>
                <img
                  src={file || userData?.profile || avatar}
                  alt='avatar'
                  className='profile_img'
                />
              </label>
              <input
                type='file'
                id='profile'
                name='profile'
                onChange={onUpload}
              />
            </div>

            <div className='flex flex-col items-center gap-6'>
              <div className='name flex w-3/4 gap-10'>
                <input
                  type='text'
                  placeholder='First Name'
                  {...formik.getFieldProps('firstName')}
                  className='textbox'
                />
                <input
                  type='text'
                  placeholder='Last Name'
                  {...formik.getFieldProps('lastName')}
                  className='textbox'
                />
              </div>
              <input
                type='text'
                placeholder='Email'
                {...formik.getFieldProps('email')}
                className='textbox'
              />
              <input
                type='text'
                placeholder='Username'
                {...formik.getFieldProps('username')}
                className='textbox'
              />

              <button type='submit' className='btn'>
                Update Details
              </button>
            </div>

            <div className='text-center py-4'>
              <span className='text-gray-500'>
                That's it for now?{' '}
                <button onClick={onLogout} className='text-red-500'>
                  Logout
                </button>
              </span>
            </div>
            <div className='text-center'>
              <span
                onClick={() => navigate('/dashboard')}
                className='text-gray-500 cursor-pointer'
              >
                Back to Dashboard
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;