import React, { useState } from 'react';
import { mRTJImage } from './images';
import './css/mrtj.css';

const MRTJ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const questions = [
        {
            question: "What is Netflix?",
            answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br /><br />You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
        },
        {
            question: "How much does Netflix cost?",
            answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from N2,200 to N7,000 a month. No extra costs, no contracts."
        },
        {
            question: "Where can i watch?",
            answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or any internet-connected devices that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br /><br />You can also download your favorite shows with the IOS or Android app. Use downloads to watch while youre oion the go without an internet connection. Take Netflix with you anywhere."
        },
        {
            question: "How do i cancel?",
            answer: "Netflix is flexible. There are no pesky contracts and no commitment. You can easily cancel your accounbt online in two click. There are no cancellation fees - start or stop your account anytime."
        },
        {
            question: "What can i watch on Netflix?",
            answer: "Netflix has an extensive library of feature films, documentries, TV shows, anime, award-winning Netflix orginals, and more. Watch as much as you want."
        },
        {
            question: "Is Netflix good for kids?",
            answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br /><br />Kids profiles come with PIN - protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
        }
    ];

    return (
        <div id="mrtjParent">
            <div id="mrtjChild">
                <span>More Reasons to Join</span>
                <div className="mP">
                    <span>Stories tailored to your taste</span>
                    <div><img src={mRTJImage[0]} alt="image" /></div>
                </div>
                <div className="mP">
                    <span>Cancel or switch plan at anytime</span>
                    <div><img src={mRTJImage[1]} alt="image" /></div>
                </div>
                <div className="mP">
                    <span>A place just for kids</span>
                    <div><img src={mRTJImage[2]} alt="image" /></div>
                </div>
                <div className="mP">
                    <span>For your phone, tablet, laptop and TV</span>
                    <div><img src={mRTJImage[3]} alt="image" /></div>
                </div>
            </div>
            <div className="faq-container">
                <span>Frequently Asked Questions</span>
                {questions.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFaq(index)}>
                            <span>{item.question}</span>
                            <div id="PlusDiv" className={activeIndex === index ? "turn" : "turnOpp"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 36 36" data-icon="PlusLarge" aria-hidden="true" className="elj7tfr3 default-ltr-cache-1sju7il-Icon-StyledAccordionIcon e164gv2o4">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                        <div
                            className={`faq-answer ${activeIndex === index ? "active" : ""}`}
                            dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                    </div>
                ))}
            </div>
            <div id="getStarted">
                <div id="gsButton"><button>Get Started</button></div>
                <span>Create or restart your membership</span>
            </div>
        </div>
    );
};
export default MRTJ;
