const entregas = [
  { id: 1, cliente: "João Silva", endereco: "Rua das Flores, 123", status: "pendente" },
  { id: 2, cliente: "Maria Oliveira", endereco: "Av. Brasil, 456", status: "pendente" },
  { id: 3, cliente: "Carlos Souza", endereco: "Rua Central, 789", status: "pendente" }
];

function buscarEntregas() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(entregas), 1000);
  });
}

function atualizarStatusEntrega(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const entrega = entregas.find(e => e.id === id);
      if (entrega) {
        entrega.status = "entregue";
        resolve(entrega);
      }
    }, 3000);
  });
}

function exibirEntregas(lista) {
  const container = document.getElementById("entregas-container");
  container.innerHTML = "";

  lista.forEach(entrega => {
    const div = document.createElement("div");
    div.className = "entrega" + (entrega.status === "entregue" ? " entregue" : "");
    div.innerHTML = `
      <p><strong>ID:</strong> ${entrega.id}</p>
      <p><strong>Cliente:</strong> ${entrega.cliente}</p>
      <p><strong>Endereço:</strong> ${entrega.endereco}</p>
      <p class="status"><strong>Status:</strong> ${entrega.status}</p>
    `;
    container.appendChild(div);
  });
}

async function iniciarSistema() {
  document.querySelector("button").disabled = true;

  const dados = await buscarEntregas();
  exibirEntregas(dados);

  const entregaAtualizada = await atualizarStatusEntrega(2);
  exibirEntregas(entregas);

  alert(`Entrega ID ${entregaAtualizada.id} atualizada para: ${entregaAtualizada.status}`);
}
