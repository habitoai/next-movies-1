import { useState } from 'react';
import Button from 'components/UI/Button';
import withTheme from 'utils/hocs/withTheme';

const Download = ({ theme, id }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const downloadLinks = {
    '4K': `${process.env.NEXT_PUBLIC_DOWNLOAD_SMART_LINK_4K}${id}`,
    '1080p': `${process.env.NEXT_PUBLIC_DOWNLOAD_SMART_LINK_1080P}${id}`,
    '720p': `${process.env.NEXT_PUBLIC_DOWNLOAD_SMART_LINK_720P}${id}`
  };

  return (
    <div className="download-container">
      <Button
        title="DOWNLOAD NOW"
        className="download-main-button"
        onClick={toggleExpanded} 
      />
      
      {expanded && (
        <div className="download-options">
          {Object.entries(downloadLinks).map(([quality, link]) => (
            <a 
              key={quality} 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="download-option"
            >
              Download {quality}
            </a>
          ))}
        </div>
      )}
      
      <style jsx>{`
        .download-container {
          position: relative;
          margin: 0 2rem 2rem 0;
          width: 100%;
          max-width: 300px;
        }
        
        .download-options {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #252525;
          border-radius: 5px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          margin-top: 0.5rem;
          width: 100%;
          z-index: 10;
        }
        
        .download-option {
          display: block;
          padding: 1rem;
          color: white;
          text-decoration: none;
          transition: background-color 0.2s;
          text-align: center;
          font-weight: 500;
        }
        
        .download-option:hover {
          background-color: #e4d804;
          color: #252525;
        }
        
        .download-option:first-child {
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
        
        .download-option:last-child {
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }
        
        :global(.download-main-button) {
          background-color: #ff4500;
          padding: 1.5rem 2rem;
          font-weight: 700;
          font-size: 1.8rem;
          width: 100%;
          text-align: center;
          color: white;
          border: none;
          border-radius: 5px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          transition: all 0.2s;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        :global(.download-main-button:hover) {
          background-color: #ff5722;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
        }
        
        :global(.download-main-button:active) {
          transform: translateY(1px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default withTheme(Download);