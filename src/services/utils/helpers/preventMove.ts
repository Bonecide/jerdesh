export const handlePreventScroll = (e: React.TouchEvent) => {
  e.stopPropagation();
  e.cancelable && e.preventDefault();
};
