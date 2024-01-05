// FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const onUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await axios.post('/upload', formData, {
          onUploadProgress: (progressEvent) => {
            const progress = (progressEvent.loaded / progressEvent.total) * 100;
            setUploadProgress(progress);
          },
        });

        console.log('File uploaded successfully:', response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.warn('No file selected.');
    }
  };

  return (
    <div style={containerStyles}>
      <label htmlFor="fileInput" style={buttonStyles}>
        Choose File
      </label>
      <input
        type="file"
        id="fileInput"
        onChange={onFileChange}
        style={{ display: 'none' }}
      />
      {selectedFile && (
        <p style={{ ...selectedFileStyles, fontWeight: 'bold' }}>
          Selected File: {selectedFile.name}
        </p>
      )}
      <button onClick={onUpload} style={buttonStyles}>
        Upload
      </button>
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress.toFixed(2)}%</p>}
    </div>
  );
};

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px', // Adjust the space from the top
};

const buttonStyles = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginBottom: '10px',
};

const selectedFileStyles = {
  marginTop: '10px',
};

export default FileUpload;