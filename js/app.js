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
function login() {
  const id = document.getElementById("idMaquina").value.trim();
  const senha = document.getElementById("senha").value.trim();

  // validação mínima
  if (!id || !senha) {
    alert("Preencha ID e senha");
    return;
  }

  // identifica perfil
  if (id.toUpperCase().startsWith("TEC")) {
    window.location.href = "tecnico.html";
  } else {
    window.location.href = "usuario.html";
  }
}