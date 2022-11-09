const { useEffect } = require("react");

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - QuickTax`;
  }, [title]);
};

export default useTitle;
