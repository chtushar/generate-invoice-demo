export const downloadInvoice = (uri: string, fileName: string) => {
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style.display = "none";

  // const url = window.URL.createObjectURL(blob);
  a.href = uri;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(uri);
};
