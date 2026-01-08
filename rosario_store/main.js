// --- 1. DATA ---
const products = {
    networking: { title: "PROJETOS EXCLUSIVOS", price: "19.000 AOA", desc: "O código para infiltrar o mercado sendo ainda estudante." },
    cinematic: { title: "VISUALIZAÇÃO CINEMÁTICA", price: "19.000 AOA", desc: "Como vender projetos através de storytelling visual de elite." },
    ai: { title: "ARQUITETO HÍBRIDO", price: "19.000 AOA", desc: "Domine IA e automação para vender mais projetos em menos tempo." },
    bundle: { title: "FULL STACK ARCHITECT V2", price: "39.000 AOA", desc: "O arsenal completo para o arquiteto do futuro." }
};

// --- 2. CINEMATIC BACKGROUND (Flowing Terrain) ---
const canvas = document.getElementById('lidar-canvas');
const ctx = canvas.getContext('2d');
let width, height;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Wave Parameters
let time = 0;
const lines = 30; // Number of horizontal lines

function drawTerrain() {
    ctx.fillStyle = '#0b0908'; // Clean BG
    ctx.fillRect(0, 0, width, height);

    // Color: Brown/Copper fade
    ctx.lineWidth = 1;

    for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        // Spacing lines vertically
        let yBase = (height * 0.4) + (i * 30);

        ctx.moveTo(0, yBase);

        // Color gradient from dark to copper
        const alpha = 0.1 + (i / lines) * 0.2; // Fade in at bottom
        ctx.strokeStyle = `rgba(205, 133, 63, ${alpha})`;

        for (let x = 0; x <= width; x += 20) {
            // Simple sine wave layering to simulate organic terrain
            // We mix two waves for irregularity
            const wave1 = Math.sin(x * 0.003 + time + i * 0.2) * 40;
            const wave2 = Math.cos(x * 0.01 - time) * 20;
            const yOffset = wave1 + wave2;

            ctx.lineTo(x, yBase + yOffset);
        }
        ctx.stroke();
    }

    time += 0.005; // Slow movement
    requestAnimationFrame(drawTerrain);
}

drawTerrain();

// --- 3. MODAL LOGIC (Elegant Injection) ---
window.openModal = (id) => {
    const p = products[id];
    if (!p) return;

    // Remove existing if any
    const existing = document.querySelector('.modal-overlay');
    if (existing) existing.remove();

    const modalHtml = `
    <div class="modal-overlay active" onclick="if(event.target === this) this.remove()">
        <div class="modal-content">
            <button class="modal-close" onclick="this.parentElement.parentElement.remove()">×</button>
            <h2 style="font-family: 'Syncopate'; font-size: 1.5rem; margin-bottom: 1rem; color: #cd853f;">${p.title}</h2>
            <p style="color: #bbb; margin-bottom: 2rem;">${p.desc}</p>
            
            <div style="background: rgba(62, 39, 35, 0.3); padding: 1.5rem; border: 1px solid #3e2723; text-align: center;">
                <p style="font-size: 0.8rem; color: #8d8175;">TRANSFERÊNCIA DE ATIVOS</p>
                <p style="font-family: monospace; font-size: 1.2rem; color: #fff; margin: 0.5rem 0;">AO06.0000.0000.0000</p>
                <p style="font-size: 0.7rem; color: #8d8175;">ROSARIO AC</p>
            </div>
            
            <a href="https://wa.me/244900000000" class="btn-glitch" style="display:block; text-align:center; margin-top:2rem; text-decoration:none;">
                INICIAR TRANSFERÊNCIA
            </a>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
};
