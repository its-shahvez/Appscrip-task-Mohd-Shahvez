
import React, { useState } from 'react'; // useState ko import karein
import { ChevronDown } from 'lucide-react';
import './Filters.css';

// Hum data ko update kar rahe hain taaki har title ke paas options hon
const filterSections = [
  { 
    title: "IDEAL FOR", 
    options: ["Unselect all", "Men", "Women", "Baby & Kids"] 
  },
  { 
    title: "OCCASION", 
    options: ["All", "Casual", "Formal", "Party"] 
  },
  { 
    title: "WORK", 
    options: ["All", "Office", "Work From Home"] 
  },
  { 
    title: "FABRIC", 
    options: ["All", "Cotton", "Linen", "Silk"] 
  },
  { 
    title: "SEGMENT", 
    options: ["All", "Segment 1", "Segment 2"] 
  },
  { 
    title: "SUITABLE FOR", 
    options: ["All", "Teens", "Adults"] 
  },
  { 
    title: "RAW MATERIALS", 
    options: ["All", "Material 1", "Material 2"] 
  },
  { 
    title: "PATTERN", 
    options: ["All", "Solid", "Printed", "Checks"] 
  },
];

const Filters = () => {
  // Yeh state track karega ki kaun sa filter khula hai
  // Screenshot ke hisaab se 'IDEAL FOR' default khula rakhte hain
  const [openFilter, setOpenFilter] = useState('IDEAL FOR');

  // Yeh function filter ko kholega ya band karega
  const handleToggle = (title) => {
    // Agar pehle se khula hai, toh band kar do (null)
    // Varna naye waale ko khol do
    setOpenFilter(openFilter === title ? null : title);
  };

  return (
    <aside className="filters-aside">
      {/* Customization Checkbox */}
      <div className="checkbox-container">
        <input type="checkbox" id="customizable" />
        <label htmlFor="customizable">
          CUSTOMIZBLE
        </label>
      </div>

      <div className="separator"></div>

      {/* Baaki ke filters */}
      {filterSections.map((section) => {
        // Check karein ki current section khula hai ya nahi
        const isOpen = openFilter === section.title;

        return (
          <React.Fragment key={section.title}>
            <div className="filter-section">
              <button 
                className="filter-section-header" 
                onClick={() => handleToggle(section.title)} // Click par toggle function call karein
              >
                <span>{section.title}</span>
                {/* Icon ko rotate karein agar khula hai */}
                <ChevronDown size={20} className={isOpen ? 'chevron-open' : ''} />
              </button>
              
              {/* Naya hissa: Agar 'isOpen' true hai, tabhi options dikhayein */}
              {isOpen && (
                <div className="filter-options-list">
                  {section.title === "IDEAL FOR" && (
                    <span className="unselect-all">Unselect all</span>
                  )}
                  {section.options.map((option) => (
                    <div key={option} className="filter-option-item">
                      <input type="checkbox" id={option} name={option} />
                      <label htmlFor={option}>{option}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="separator"></div>
          </React.Fragment>
        )
      })}
    </aside>
  );
};

export default Filters;