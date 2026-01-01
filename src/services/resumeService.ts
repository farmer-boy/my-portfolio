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

export const downloadCoverLetter = async () => {
  try {
    // Fetch cover letter from public folder
    const response = await fetch('/letter.pdf');

    if (!response.ok) {
      throw new Error('Failed to download cover letter');
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'FARHAN_RIAZ_Cover_Letter.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading cover letter:', error);
    alert('Failed to download cover letter. Please try again.');
  }
};