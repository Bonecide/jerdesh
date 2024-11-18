export const createFormData = (
  json: Record<string, any>,
  files?: Record<string, File | "null">
) => {
  const formData = new FormData();

  if (files) {
    Object.keys(files).forEach((key) => {
      formData.append(key, files[key]);
    });
  }
  if (json) {
    Object.keys(json).forEach((key) => {
      if (json[key]) {
        formData.append(key, json[key]);
      }
    });
  }
  return formData;
};
