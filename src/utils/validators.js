export const createUniqueNameValidator = (existingNames) => {
  return (_, value) => {
    if (!value) return Promise.reject("Name is required");
    if (value.length > 200) return Promise.reject("Max 200 characters");
    if (existingNames.includes(value.trim().toLowerCase())) {
      return Promise.reject("Name must be unique");
    }
    return Promise.resolve();
  };
};

export const validateOptionalPositive = (_, value) => {
  if (value === undefined || value === null || value === "") {
    return Promise.resolve();
  }
  return value > 0
    ? Promise.resolve()
    : Promise.reject("Price must be greater than 0");
};
