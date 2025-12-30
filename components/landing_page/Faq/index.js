import { useState } from "react";
import { FiChevronDown } from "react-icons/fi"; // arrow import
import styles from "./Faq.module.scss";
import { Fade } from "react-awesome-reveal";

const faqData = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web Development is the work of creating and maintaining websites or web-based applications...",
  },
  {
    id: 2,
    question: "What services does Digital Minds On provide?",
    answer:
      "Digital Minds On offers a wide range of digital solutions...",
  },
  {
    id: 3,
    question: "How does Digital Minds On approach project development?",
    answer: "We follow a structured and collaborative approach...",
  },
  {
    id: 4,
    question: "Do you offer customized solutions for networking needs?",
    answer: "Yes, we offer companies and businesses networking solutions...",
  },
  {
    id: 5,
    question: "Can you handle e-commerce website maintenance?",
    answer:
      "Absolutely. We specialize in maintaining e-commerce platforms...",
  },
  {
    id: 6,
    question: "What is UI/UX design, and why is it important for my business?",
    answer:
      "UI (User Interface) focuses on the visual elements...",
  },
  {
    id: 7,
    question: "How long does it take to develop a game?",
    answer:
      "The timeline depends on the game's complexity...",
  },
  {
    id: 8,
    question: "Does Digital Minds On provide customer support for its services?",
    answer:
      "Yes, we offer comprehensive customer support...",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <Fade direction="up" triggerOnce>
        <h2 className={styles.title}>
          FAQ & <span className={styles.support}>Support</span>
        </h2>
        </Fade>

        {faqData.map((faq, index) => (
           <Fade
              key={faq.id}
              direction="up"
              delay={index * 80}   // 🔥 each FAQ delayed
              triggerOnce
            >
          <div
            key={faq.id}
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            <div className={styles.faqHeader} onClick={() => toggleFAQ(index)}>
              <div
                className={`${styles.number} ${
                  activeIndex === index ? styles.numberActive : ""
                }`}
              >
                {`0${faq.id}`}
              </div>
              <p className={styles.question}>{faq.question}</p>

              {/* Arrow Icon */}
              <FiChevronDown
                className={`${styles.arrow} ${
                  activeIndex === index ? styles.rotate : ""
                }`}
              />
            </div>

            <div
              className={`${styles.answerWrapper} ${
                activeIndex === index ? styles.open : ""
              }`}
            >
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
