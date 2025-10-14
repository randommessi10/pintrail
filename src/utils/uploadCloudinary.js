export async function uploadImageToCloudinary(file) {
    const cloudName = "dqspii5do";
    const uploadPreset = "pintrail";
  
  
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) throw new Error('Upload failed');
  
      const data = await response.json();
      return data.secure_url;
    } catch (err) {
      console.error('Cloudinary upload error:', err);
      throw err;
    }
  }
  