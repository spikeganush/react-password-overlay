import React, { FC } from 'react';
import { useEffect, useState } from 'react';
import '../../sass/app.scss';
import { IPasswordVerifProps } from './passwordType';
import { handlePasswordVerif } from '../Utils';

const PasswordOverlay: FC<IPasswordVerifProps> = ({
  password,
  overlayVisibile,
  checkError,
  passwordRef,
  minLength = 8,
  position = 'top',
}) => {
  const [passwordVerif, setPasswordVerif] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false,
  });

  const [passwordVerifError, setPasswordVerifError] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false,
  });

  const listPasswordVerif = [
    {
      text: 'One number',
      verif: passwordVerif.number,
      error: passwordVerifError.number,
    },
    {
      text: 'One uppercase character',
      verif: passwordVerif.upper,
      error: passwordVerifError.upper,
    },
    {
      text: 'One lowercase character',
      verif: passwordVerif.lower,
      error: passwordVerifError.lower,
    },
    {
      text: 'One special character',
      verif: passwordVerif.special,
      error: passwordVerifError.special,
    },
    {
      text: `${minLength} characters minimum`,
      verif: passwordVerif.length,
      error: passwordVerifError.length,
    },
  ];

  const handleVerifError = () => {
    // Go through each keys of passwordVerif and check if there is any false
    // If there is, set the error to true
    Object.keys(passwordVerif).forEach((key) => {
      if (!passwordVerif[key as keyof typeof passwordVerif]) {
        setPasswordVerifError((prevState) => ({
          ...prevState,
          [key]: true,
        }));
        passwordRef.current?.focus();
      }
    });
  };

  useEffect(() => {
    let subscribe = true;
    if (subscribe) {
      const verif = handlePasswordVerif(password, minLength);
      setPasswordVerif(verif);
    }
    return () => {
      subscribe = false;
    };
  }, [password, minLength]);

  useEffect(() => {
    let subscribe = true;
    if (subscribe && checkError) {
      handleVerifError();
    }
    return () => {
      subscribe = false;
    };
  }, [checkError]);

  useEffect(() => {
    let subscribe = true;
    if (subscribe) {
      setPasswordVerif({
        length: false,
        upper: false,
        lower: false,
        number: false,
        special: false,
      });
      setPasswordVerifError({
        length: false,
        upper: false,
        lower: false,
        number: false,
        special: false,
      });
    }
    return () => {
      subscribe = false;
    };
  }, []);

  return (
    <div
      className={`password-popup ${position}`}
      style={{ display: overlayVisibile ? 'flex' : 'none' }}
    >
      <div className="password-popup__title">
        <svg
          fill="#ffffff"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 416.979 416.979"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {' '}
            <g>
              {' '}
              <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786 c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576 c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765 c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z" />{' '}
            </g>{' '}
          </g>
        </svg>
        <h4>Password must have</h4>
      </div>
      <ul>
        {listPasswordVerif.map((item, index) => (
          <li
            key={index}
            style={{ listStyle: item.verif || item.error ? 'none' : 'disc' }}
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#008000"
              style={{ display: item.verif ? 'inline-block' : 'none' }}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {' '}
                <g id="Interface / Check">
                  {' '}
                  <path
                    id="Vector"
                    d="M6 12L10.2426 16.2426L18.727 7.75732"
                    stroke="#008000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{' '}
                </g>{' '}
              </g>
            </svg>
            <svg
              fill="#ff0000"
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                display: item.error && !item.verif ? 'inline-block' : 'none',
              }}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {' '}
                <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z" />{' '}
              </g>
            </svg>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordOverlay;
