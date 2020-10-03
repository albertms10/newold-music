const getFormData = (formElement: HTMLFormElement) => {
  const formData = new FormData(formElement);
  const data = {};

  formData.forEach((value, key) => (data[key] = value));

  return data;
};

export default getFormData;
