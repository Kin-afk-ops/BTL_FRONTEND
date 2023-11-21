const validateEmail = (data) => {
  /* eslint-disable */
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) return true;
  return false;
};

export default validateEmail;
