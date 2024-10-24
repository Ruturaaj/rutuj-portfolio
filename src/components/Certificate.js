import React, { useState } from 'react';
import './css/Certificates.css'; // Ensure the CSS is available
import MicrosoftPDF from '../assets/Microsoft.pdf'; // Import the PDF file
import NPTELPDF from '../assets/NPTEL.pdf';
import FORAGEPDF from '../assets/FORAGE.pdf';
import CISCOPDF from '../assets/CISCO.pdf';
import VNITPDF from '../assets/VNIT.pdf';
import RCOEMPDF from '../assets/RCOEM.pdf';
import CyberPunkPDF from '../assets/CYBER.pdf';

const Certificates = () => {
  const [selectedIndex, setSelectedIndex] = useState(null); // State to track the selected certificate index

  const certificatesData = [
    {
      title: 'Microsoft Co-pilot',
      organization: 'LinkedIn Learning',
      date: 'Completed: Oct 2024',
      description: 'In this course, I learned to effectively use Microsoft Co-pilot across various applications, enhancing productivity and collaboration. I explored AI-driven features that streamline workflows and improve decision-making in tools like Word, Excel, and PowerPoint. This training equipped me with practical skills to harness AI in my projects, making me more efficient with Microsoft software.',
      certificateLink: MicrosoftPDF,
    },
    {
      title: 'CyberPunk 2.0',
      organization: 'Department of C.S.E.(Cyber Security)',
      date: 'Completed: Oct 2024',
      description: 'In this role, I led the documentation efforts, ensuring clear communication and organization for the event. This experience enhanced my leadership skills and deepened my passion for cybersecurity.',
      certificateLink: CyberPunkPDF,
    },
    {
      title: 'Data Visualization',
      organization: 'Forage [TATA]',
      date: 'Completed: July 2024',
      description: 'TATA Virtual Internship: Data Visualization - Empowering Business with Effective Insights',
      certificateLink: FORAGEPDF,
    },
    {
      title: 'Introduction to Cybersecurity',
      organization: 'CISCO [Networking Academy]',
      date: 'Completed: June 2024',
      description: 'The "Introduction to Cybersecurity" course from Cisco provides foundational knowledge of cybersecurity concepts, threats, protective measures, and career pathways.',
      certificateLink: CISCOPDF,
    },
    {
      title: 'Information Security',
      organization: 'NPTEL SWAYAM',
      date: 'Completed: May 2024',
      description: 'The Information Security course on NPTEL SWAYAM covers essential principles, practices, and technologies for protecting information assets in various environments.',
      certificateLink: NPTELPDF,
    },
    {
      title: 'AI & ML',
      organization: 'SKILLiGENCE [VNIT]',
      date: 'Completed: March 2024',
      description: 'The AI & ML course offers foundational knowledge in artificial intelligence and machine learning, covering key concepts, algorithms, and practical applications.',
      certificateLink: VNITPDF,
    },
    {
      title: 'Machine Learning and IoT',
      organization: 'RCOEM',
      date: 'Completed: August 2023',
      description: 'The ML & IoT course covers the integration of machine learning techniques with Internet of Things technologies, enabling smarter data-driven decision-making and automation.',
      certificateLink: RCOEMPDF,
    },
  ];

  const handleDetailsClick = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index); // Toggle the selected index
  };

  return (
    <section className="certificates section" id="certificates">
      <div className="section-title padd-15">
        <h2>Certificates</h2>
      </div>

      <div className="certificates-content">
        {certificatesData.map((certificate, index) => (
          <div className="certificate-item" key={certificate.title}>
            <h4>{certificate.title}</h4>
            <p><strong>Organization:</strong> {certificate.organization}</p>
            <p><strong>Date:</strong> {certificate.date}</p>
            <div className="certificate-links">
              <a
                href={certificate.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="view-certificate"
              >
                View Certificate
              </a>
              <button className="details-button" onClick={() => handleDetailsClick(index)}>
                {selectedIndex === index ? 'Hide Details' : 'Details'}
              </button>
            </div>
            {selectedIndex === index && <p className="certificate-description">{certificate.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
