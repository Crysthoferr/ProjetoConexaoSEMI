const form = document.getElementById('video-form');
const container = document.getElementById('videos-container');
const apiUrl = 'http://localhost:3333/videos';

async function carregarVideos() {
    const res =  await fetch(apiUrl);
    const videos = await res.json();

    container.innerHTML = '';

    await videos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-item';
        card.innerHTML = `
            <h3>${video.title}</h3>
            <p>${video.description}</p>
            <p>Duração: ${video.duration} min</p>
            <button onclick='deletarVideo("${video.id}")'>Excluir</button>
            <button onclick='editarVideo("${video.id}","${video.title}", "${video.description}", "${video.duration}")'>Editar</button>
        `;

        container.appendChild(card);
    });
}

async function deletarVideo(id) {
    await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    });
    carregarVideos();
}

form.addEventListener('submit', async(e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;

    await fetch(apiUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, duration})
    });

    form.reset();
    carregarVideos();
});

async function editarVideo(id, title, description, duration) {
    const novoTitulo = prompt("Novo título", title);
    const novaDescricao = prompt("Nova descrição", description);
    const novaDuracao = prompt("Nova duração", duration);

    if(!novoTitulo || !novaDescricao || !novaDuracao) return;

    await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            title: novoTitulo,
            description: novaDescricao,
            duration: parseInt(novaDuracao)
        })
    });

    carregarVideos();
};

carregarVideos();

