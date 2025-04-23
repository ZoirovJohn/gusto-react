import { useState } from "react";
import AccordionItem from "./accordionItem";

function Accordion() {
  const [activeAccrodion, setActiveAccrodion] = useState<string | null>(null);

  const toggleAccordion = (title: string) => {
    if (activeAccrodion === title) {
      setActiveAccrodion(null); // close if already open
    } else {
      setActiveAccrodion(title); // open the clicked one
    }
  };

  return (
    <div className="faq-main">
      <div className="accordion" id="accordionExample">
        <AccordionItem
          title="What type of cuisine does your restaurant offer?"
          summery="We offer Italian cuisine that combines traditional flavors with modern twists."
          isActive={activeAccrodion}
          setActive={toggleAccordion}
        />
        <AccordionItem
          title="Can I make a reservation online?"
          summery="Yes, you can reserve a table through our website."
          isActive={activeAccrodion}
          setActive={toggleAccordion}
        />
        <AccordionItem
          title="Is there a dress code for dining at your restaurant?"
          summery="Smart casual attire is recommended."
          isActive={activeAccrodion}
          setActive={toggleAccordion}
        />
        <AccordionItem
          title="Is there a dress code for dining your restaurant?"
          summery="Smart casual is preferred."
          isActive={activeAccrodion}
          setActive={toggleAccordion}
        />
      </div>
    </div>
  );
}

export default Accordion;
