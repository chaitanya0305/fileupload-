// FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';
import CloudFilesSVG from './undraw_cloud_files_wmo8.svg'; // Adjust the path accordingly

const mainColor = '#5f6982';
const darkGrey = '#595959'; // Dark grey color

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const onUpload = async () => {
    // (...rest of the code remains unchanged)
  };

  return (
    <div style={outerBoxStyles}>
      <div style={innerBoxStyles} className="drop-box">
        <h2 style={headingStyles}>File Upload </h2>
        <img
          src={CloudFilesSVG}
          alt="Cloud Files"
          style={{ width: '120px', height: '120px', marginBottom: '10px' }}
        />
        <label htmlFor="fileInput" style={selectStyles}>
          Select a File or Drag Here
        </label>
        <input
          type="file"
          id="fileInput"
          onChange={onFileChange}
          style={{ display: 'none' }}
        />
        {selectedFile && (
          <div>
            <p style={{ ...selectedFileStyles, fontWeight: 'bold' }}>
              Selected File: {selectedFile.name}
            </p>
            {/* Add image preview here if needed */}
          </div>
        )}
        <button onClick={onUpload} style={uploadButtonStyles}>
          Upload File
        </button>
      </div>
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress.toFixed(2)}%</p>}
    </div>
  );
};

const outerBoxStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: darkGrey, // Dark grey background color
  border: `2px solid ${mainColor}`, // Border color using main color
  margin: '10px', // Subtle black margin
  boxShadow: `0 0 20px rgba(0, 0, 0, 0.8)`, // Deep shadow effect
  transition: 'border-color 0.3s ease', // Smooth transition for border color change
};

const innerBoxStyles = {
  border: `2px outset ${mainColor}`, // 2px outset blue border
  padding: '40px', // Increase the padding to increase the inside box size
  textAlign: 'center',
  marginBottom: '40px', // Increase the margin at the bottom
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center vertically
  backgroundColor: '#f5f5f5', // Light grey background color
  boxShadow: `0 0 15px rgba(0, 0, 0, 0.5)`, // Light shadow effect
};

const headingStyles = {
  color: mainColor, // Heading color
  marginBottom: '5px', // Reduced margin between heading and other elements
};

const subHeadingStyles = {
  color: mainColor, // Subheading color
  marginTop: '5px', // Reduced margin between subheading and other elements
};

const selectStyles = {
  backgroundColor: mainColor,
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px', // Adjust the space between the heading and select box
};

const uploadButtonStyles = {
  backgroundColor: mainColor, // Blue background by default
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '20px', // Adjust the space between the select box and upload button
  border: `2px solid ${mainColor}`, // Initially dark gray border
  transition: 'margin 0.3s ease', // Smooth transition for margin change
};

uploadButtonStyles[':hover'] = {
  margin: '0', // Remove margin on hover
};

const selectedFileStyles = {
  marginTop: '10px',
};

export default FileUpload;
