export const downloadResume = async () => {
  try {
    // Fetch resume from public folder
    const response = await fetch('/resume.pdf');

    if (!response.ok) {
      throw new Error('Failed to download resume');
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'FARHAN_RIAZ_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading resume:', error);
    alert('Failed to download resume. Please try again.');
  }
};
