export const useWhatsApp = () => {
  const sendMessage = (phone: string, message: string) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return { sendMessage };
};
