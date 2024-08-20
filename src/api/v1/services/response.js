const customResponse = ({
  res,
  object = null,
  code = 200,
  message = "",
  data = null,
  errors,
  pagination,
}) => {
  if (object) {
    res.status(object.code).json(object);
  } else {
    // code
    var finalCode = code;
    if (errors && !code) {
      finalCode = 400;
    } else if (errors && code === 200) {
      finalCode = 400;
    }

    // errors
    var finalErrors = [];
    // Jika error berupa array, maka langsung digunakan
    if (Array.isArray(errors)) {
      finalErrors = errors;
    }
    // Jika ada error dan error bukan array, maka error dimasukkan ke dalam array
    else if (errors) {
      finalErrors.push(errors);
    } else {
      finalErrors = errors;
    }

    // pagination

    res.status(finalCode).json({
      code: finalCode,
      message: message,
      data: data,
      errors: finalErrors,
      pagination: pagination,
    });
  }
};

export default customResponse;
