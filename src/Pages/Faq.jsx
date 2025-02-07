import React, { useState } from 'react';
import HelloImage from '../Components/HelloImage';
import user from '../Images/user.png';
import './Faq.css';

const questionsData = [
  {
    title: "Your question title here?",
    answer: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Energistically embrace progressive web services for out-of-the-box communities. Synergistically expedite timely channels with sustainable innovation. Collaboratively reinvent open-source customer service with extensive testing procedures. Compellingly."
  },
  {
    title: "Do eiusmod tempor incidit?",
    answer: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Energistically embrace progressive web services for out-of-the-box communities. Synergistically expedite timely channels with sustainable innovation. Collaboratively reinvent open-source customer service with extensive testing procedures. Compellingly."
  },
  {
    title: "Cupidatat iusmod tempor incid idun?",
    answer: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Energistically embrace progressive web services for out-of-the-box communities. Synergistically expedite timely channels with sustainable innovation. Collaboratively reinvent open-source customer service with extensive testing procedures. Compellingly."
  },
  {
    title: "Excepteur sint occaecat cupidatat iusmod tempor incid idun?",
    answer: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Energistically embrace progressive web services for out-of-the-box communities. Synergistically expedite timely channels with sustainable innovation. Collaboratively reinvent open-source customer service with extensive testing procedures. Compellingly."
  },
  {
    title: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt?",
    answer: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Energistically embrace progressive web services for out-of-the-box communities. Synergistically expedite timely channels with sustainable innovation. Collaboratively reinvent open-source customer service with extensive testing procedures. Compellingly."
  }
];
const Faq = () => {
  const [openQuestions, setOpenQuestions] = useState(
    questionsData.map((_, index) => index === 0)
  );

  const handleFaq = (index) => {
    setOpenQuestions(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className='faq'>
      <HelloImage text='FAQ' />
      <img src={user} alt="User Icon" />
      <h5>FREQUENTLY ASKED QUESTIONS</h5>
      <h2>Do you have any questions?</h2>
      <p>Please read the questions below, and if you cannot find your answer,
        please send us your question. We will answer you as soon as possible.
      </p>
      <div className="questions">
        {questionsData.map((q, index) => (
          <div className={`qLeft ${openQuestions[index] ? "active" : ""}`} key={index} onClick={() => handleFaq(index)}>
            <div className="head">
              <div className="question">
                <span className="material-icons-outlined">bookmark</span>
                <h3>{q.title}</h3>
              </div>
              <button
                className="toggleBtn"
                aria-expanded={openQuestions[index]}
              >
                <span className="material-icons-outlined">
                  {openQuestions[index] ? "keyboard_double_arrow_up" : "keyboard_double_arrow_down"}
                </span>
              </button>
            </div>
            {openQuestions[index] && <p className="answer">{q.answer}</p>}
          </div>
        ))}
      </div>
      <div className="askUs">
        <div className="logo">
          <span className="material-icons-outlined">chat</span>
          <div className="logohead">
            <h4>Ask Us..</h4>
            <p>Have questions?</p>
          </div>
        </div>
        <form>
          <div className="name">
          <label htmlFor="name">Your Name (*)</label>
          <input type="text" id="name" name="name" />
          </div>
          <div className="email">
          <label htmlFor="email">Your Email (*)</label>
          <input type="email" id="email" name="email" />
          </div>
          <div className="department">
          <label htmlFor="department">Department</label>
          <select id="department" name="department">
            <option value="Business Department">Business Department</option>
            <option value="Personal Department">Personal Department</option>
            <option value="Support Department">Support Department</option>
            <option value="Others">Others</option>
          </select>
          </div>
          <div className="subject">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />
          </div>
          <div className="question">
          <label htmlFor="question">Your Question (*)</label>
          <textarea id="question" name="question" cols="30"></textarea>
          </div>
        </form>
        <div className="btn">
            <button type="submit">Ask</button>
          </div>
      </div>
    </div>
  );
};

export default Faq;
