import React from 'react';
import FaqCard from "./FAQCard";
import s from './FAQ.module.css'
import Container from "../UI/Container/Container";
import {faqQuestions} from '../../store'

const Faq = () => {

    const faqQuestionList = faqQuestions
        .map(question => <FaqCard id={question.id}
                                  key={question.id}
                                  text={question.text}/>

   )
    return (
        <Container>
            <h1 className={s.faqTitle}>FAQ</h1>
            {faqQuestionList}
        </Container>
    );
};

export default Faq;