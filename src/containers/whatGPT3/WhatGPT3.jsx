import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin mrg" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Co-Lowyer?" text="Our AI-powered legal assistance platform is designed to revolutionize the way legal professionals and law students access and utilize legal information. Leveraging advanced natural language processing (NLP) technology, the platform can understand and respond to complex legal queries, providing accurate and contextually relevant answers in real-time.
" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text rtl">الاحتمالات هي أبعد من خيالك.</h1>
      {/* <p>Explore the Library</p> */}
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Simulate human-like conversations using Natural Language Processing (NLP)." />
      <Feature title="Knowledgebase" text="Integration with extensive legal databases to ensure up-to-date and comprehensive information retrieval" />
      <Feature title="Quick Legal Answers" text="Instant responses to legal questions, significantly reducing the time needed for legal research." />
    </div>
  </div>
);

export default WhatGPT3;