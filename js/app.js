function login() {
  const id = document.getElementById("idMaquina").value;
  const senha = document.getElementById("senha").value;

  // Simulação
  if (id.startsWith("TEC")) {
    window.location.href = "tecnico.html";
  } else {
    window.location.href = "usuario.html";
  }
}