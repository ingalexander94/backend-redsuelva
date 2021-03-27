const sendSuccess = (msg = "") => ({
  ok: true,
  msg,
});

const sendError = (msg = "Hable con el administrador", param = "") => {
  if (param && param.length !== 24) {
    msg = "Error en el enlace de la petición";
  }
  return { ok: false, msg };
};

module.exports = {
  sendSuccess,
  sendError,
};
