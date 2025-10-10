import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './styles.css'

function Accordion({ items }) {
    const [open, setOpen] = useState(null)

    const handleToggle = (index) => {
        setOpen(open === index ? null : index)
    }

    return !items || items.length === 0 ? "No items available" : (
        <div className="accordion">
            {items.map((ele, index) => (
                <div key={index} className="accordion-item">
                    <button onClick={() => handleToggle(index)} className="accordion-title">{ele.title}

                        {open === index ? <FaChevronUp className="arrow" /> : <FaChevronDown className="arrow" />}

                    </button>
                    {open === index && <div className="accordion-content">{ele.content}</div>}

                </div>

            ))}
        </div>
    );
}

export default Accordion;
