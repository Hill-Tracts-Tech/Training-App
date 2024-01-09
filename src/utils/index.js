import toast from "react-hot-toast";
import { ImageUrl } from "./imageUrl";

export const handleDownloadRegFrom = async () => {
  try {
    const response = await fetch(`${ImageUrl}/notices/applicaiton-form.jpeg`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "application-form.jpeg");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  } catch (error) {
    toast.error("Fail to download registration form. try again later");
  }
};
