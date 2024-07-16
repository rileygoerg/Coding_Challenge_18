import React, {useState} from 'react';

export default function UploadButton(){
  const [uploading, setUploading] = useState(false);

  function upload() {
    setUploading(true);
    alert('Uploading Image....');
    alert('Image uploaded.')
    setUploading(false);
  };

  return (
    <button onClick={upload} disabled={uploading}>
      {uploading ? 'Uploading Image' : 'Upload Image'}
    </button>
  );
};
