const questionsDatabase = [
    // El Alarmista
    { id: 1, text: "Ante ruidos o movimientos fuera de lo habitual, vocaliza y va de un lugar a otro como “patrullando”.", archetype: "Alarmista", type: "+" },
    { id: 2, text: "Cuando hay cambios en casa (visitas, muebles, obras), recorre con frecuencia las mismas rutas para “comprobar” el entorno.", archetype: "Alarmista", type: "+" },
    { id: 3, text: "Si percibe actividad en el exterior (pasillo/ventana), se queda vigilando durante largos ratos.", archetype: "Alarmista", type: "+" },
    { id: 4, text: "En días “raros”, cambia de zona de descanso varias veces sin asentarse.", archetype: "Alarmista", type: "+" },
    { id: 5, text: "Tras un evento estresante, aumenta su marcaje (frotarse/arañar/orinar) en áreas clave del hogar.", archetype: "Alarmista", type: "+" },
    { id: 6, text: "Cuando el ambiente está cargado (tensión entre animales o personas), está más pendiente de puertas, ventanas o puntos de paso.", archetype: "Alarmista", type: "+" },
    { id: 7, text: "Si otro animal usa un recurso (arenero/comedero/cama), luego va a revisar ese recurso con insistencia.", archetype: "Alarmista", type: "+" },
    { id: 8, text: "En contextos de incomodidad, su actividad aumenta: camina, inspecciona, revisa.", archetype: "Alarmista", type: "+" },
    { id: 9, text: "Si nota un olor nuevo (limpieza/perfume/objeto), lo inspecciona repetidamente y se mantiene alerta.", archetype: "Alarmista", type: "+" },
    { id: 10, text: "Cuando hay incertidumbre (sonidos nocturnos, cambios de rutina), le cuesta “desconectar” y está hipervigilante.", archetype: "Alarmista", type: "+" },
    { id: 11, text: "Aunque haya cambios o estímulos nuevos, mantiene rutinas normales sin aumentar vigilancia o deambulación.", archetype: "Alarmista", type: "-" },
    { id: 12, text: "Después de un susto, se recupera rápido y vuelve a descansar con normalidad.", archetype: "Alarmista", type: "-" },
    { id: 13, text: "Puede quedarse relajado en una zona sin necesidad de controlar lo que ocurre alrededor.", archetype: "Alarmista", type: "-" },
    { id: 14, text: "Si algo le incomoda, suele reducir actividad en lugar de activarse más.", archetype: "Alarmista", type: "-" },
    { id: 15, text: "Cuando está mal, no aumenta vocalización, patrullaje ni cambios de escondite.", archetype: "Alarmista", type: "-" },

    // El Desconfiado
    { id: 16, text: "Ante personas nuevas o visitas, se esconde y evita salir incluso si lo llaman.", archetype: "Desconfiado", type: "+" },
    { id: 17, text: "Si hay cambios en casa, reduce la exploración y prefiere zonas seguras (rincones, alturas, detrás de muebles).", archetype: "Desconfiado", type: "+" },
    { id: 18, text: "Cuando alguien se acerca, se aparta o se va antes de que haya contacto.", archetype: "Desconfiado", type: "+" },
    { id: 19, text: "Si hay ruidos repentinos, su primera respuesta es huir y ocultarse.", archetype: "Desconfiado", type: "+" },
    { id: 20, text: "En momentos de estrés, evita pasar por zonas “expuestas” y elige rutas escondidas.", archetype: "Desconfiado", type: "+" },
    { id: 21, text: "Si un humano intenta interactuar (caricias, cogerlo), muestra señales de incomodidad y escapa.", archetype: "Desconfiado", type: "+" },
    { id: 22, text: "Cuando no controla el entorno (puerta abierta, gente moviéndose), se mantiene inhibido o congelado.", archetype: "Desconfiado", type: "+" },
    { id: 23, text: "Si otro animal se acerca, tiende a retirarse antes que confrontar.", archetype: "Desconfiado", type: "+" },
    { id: 24, text: "En situaciones nuevas, tarda en salir y puede permanecer mucho tiempo oculto.", archetype: "Desconfiado", type: "+" },
    { id: 25, text: "Si el arenero/comedero está en una zona transitada, reduce su uso o espera a momentos de máxima seguridad.", archetype: "Desconfiado", type: "+" },
    { id: 26, text: "Se acerca con facilidad a desconocidos y busca contacto.", archetype: "Desconfiado", type: "-" },
    { id: 27, text: "Frente a ruidos o cambios, mantiene la exploración y no necesita refugiarse.", archetype: "Desconfiado", type: "-" },
    { id: 28, text: "Tolera bien que lo miren, lo sigan o lo alcancen; no evita la interacción.", archetype: "Desconfiado", type: "-" },
    { id: 29, text: "En momentos de tensión, su reacción principal no es huir, sino mantenerse presente.", archetype: "Desconfiado", type: "-" },
    { id: 30, text: "Puede comer, jugar o usar recursos con normalidad aunque haya novedades alrededor.", archetype: "Desconfiado", type: "-" },

    // El Demandante
    { id: 31, text: "Cuando se siente incómodo, busca activamente a su persona y reclama atención (maúlla, roza, insiste).", archetype: "Demandante", type: "+" },
    { id: 32, text: "Si la familia está ocupada, aumenta conductas para “ser atendido” (interrumpir, subirse encima, tirar objetos).", archetype: "Demandante", type: "+" },
    { id: 33, text: "Ante estrés, pide más contacto: se pega, sigue a la gente o intenta mantener proximidad constante.", archetype: "Demandante", type: "+" },
    { id: 34, text: "Si una puerta se cierra y le impide acceder a su persona, vocaliza o rasca para que le abran.", archetype: "Demandante", type: "+" },
    { id: 35, text: "Cuando no obtiene respuesta, su insistencia sube de intensidad (más maullidos, más presión, más interrupciones).", archetype: "Demandante", type: "+" },
    { id: 36, text: "Si cambia la rutina humana (horarios/salidas), se nota un aumento de búsqueda de atención.", archetype: "Demandante", type: "+" },
    { id: 37, text: "En casa, suele elegir actividades que impliquen interacción humana (juego “a demanda”, pedir comida, pedir brazos).", archetype: "Demandante", type: "+" },
    { id: 38, text: "Cuando está inquieto, recurre a un objeto específico (mantita/juguete) y lo usa como fuente principal de calma.", archetype: "Demandante", type: "+" },
    { id: 39, text: "Si no puede acceder a su “figura de apego” u objeto, muestra señales de frustración (quejas, inquietud, destructividad leve).", archetype: "Demandante", type: "+" },
    { id: 40, text: "Si la interacción termina, intenta reengancharla (vuelve, insiste, no se regula solo con facilidad).", archetype: "Demandante", type: "+" },
    { id: 41, text: "Cuando está incómodo, prefiere regularse solo sin buscar a humanos u objetos específicos.", archetype: "Demandante", type: "-" },
    { id: 42, text: "Si no le atienden, se retira y se calma sin insistir.", archetype: "Demandante", type: "-" },
    { id: 43, text: "Tolera bien estar separado de su persona favorita, manteniendo descanso o juego independiente.", archetype: "Demandante", type: "-" },
    { id: 44, text: "Aunque haya cambios, no aumenta su demanda de atención ni su necesidad de acompañamiento.", archetype: "Demandante", type: "-" },
    { id: 45, text: "Si se frustra, se recupera rápido sin escalar conductas de exigencia.", archetype: "Demandante", type: "-" },

    // El Déspota
    { id: 46, text: "En contextos de tensión, intenta controlar recursos (comida, alturas, pasos, areneros), bloqueando o desplazando a otros.", archetype: "Déspota", type: "+" },
    { id: 47, text: "Si otro gato se acerca a un recurso, responde con intimidación (mirada fija, postura, persecución) para hacerlo retroceder.", archetype: "Déspota", type: "+" },
    { id: 48, text: "Cuando hay pocos recursos disponibles, aumenta conductas de guardia o “posesión” (se planta, vigila, patrulla puntos clave).", archetype: "Déspota", type: "+" },
    { id: 49, text: "Ante competencia, usa acciones rápidas para acaparar (comer primero, expulsar, ocupar la mejor zona).", archetype: "Déspota", type: "+" },
    { id: 50, text: "Si no puede acceder a lo que quiere, escala con señales ofensivas (amenaza, embiste, muerde) más que retirarse.", archetype: "Déspota", type: "+" },
    { id: 51, text: "Tiende a elegir zonas de paso para interceptar a otros animales.", archetype: "Déspota", type: "+" },
    { id: 52, text: "Su lenguaje corporal en conflicto suele ser de avance (se aproxima) más que de huida.", archetype: "Déspota", type: "+" },
    { id: 53, text: "Cuando un humano intenta moverlo o limitarle acceso, responde con resistencia (bufidos, zarpazos) para mantener control.", archetype: "Déspota", type: "+" },
    { id: 54, text: "Si entra un nuevo animal o hay cambios, aumenta su conducta de marcar control (ocupar, vigilar, desplazar).", archetype: "Déspota", type: "+" },
    { id: 55, text: "En presencia de otros gatos, busca situarse en una posición ventajosa (altura, centro, bloqueo) para dominar el espacio.", archetype: "Déspota", type: "+" },
    { id: 56, text: "Ante competencia, prefiere ceder recursos y evitar el conflicto.", archetype: "Déspota", type: "-" },
    { id: 57, text: "Si otro animal se acerca a un recurso, mantiene calma y comparte sin bloquear.", archetype: "Déspota", type: "-" },
    { id: 58, text: "Su reacción típica ante tensión es retirarse o esconderse, no confrontar.", archetype: "Déspota", type: "-" },
    { id: 59, text: "Tolera límites humanos (cerrar puertas, moverlo) sin responder con intimidación o agresión.", archetype: "Déspota", type: "-" },
    { id: 60, text: "Con recursos limitados, no aumenta control del espacio ni intentos de desplazar a otros.", archetype: "Déspota", type: "-" }
];

const archetypeData = {
    "Alarmista": {
        desc: "Cuando se siente mal (por estrés, dolor o cambios ambientales), intenta resolverlo haciendo más: controlando, vigilando y marcando de forma exagerada todo su territorio. Deambula, vocaliza y cambia de escondite con mucha frecuencia buscando recuperar la seguridad.",
        problems: ["<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Trastorno de ansiedad generalizada y estado de paranoia continua.</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Marcaje territorial exagerado (orina, rascado o frotamiento compulsivo).</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Hipervigilancia crónica e incapacidad para alcanzar descanso profundo.</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Vocalizaciones por desasosiego y patrullaje constante.</li>"]
    },
    "Desconfiado": {
        desc: "Cuando se siente mal, intenta resolverlo aislándose y evitando cualquier interacción que le genere incomodidad. Se esconde, desconfía de absolutamente todo y su principal mecanismo de defensa es huir antes de tener que confrontar la amenaza.",
        problems: ["<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Desarrollo de miedos crónicos y fobias específicas.</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Aislamiento social severo y evitación extrema de estímulos nuevos.</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Inhibición del comportamiento exploratorio normal.</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Riesgo de problemas médicos por ocultación prolongada (retención de orina/heces).</li>"]
    },
    "Demandante": {
        desc: "Cuando se siente mal, intenta resolverlo a través de un uso 'utilitario' de los humanos u objetos de apego. Exige atención inmediata para satisfacer sus deseos, creyendo que esta mediación externa es su única fuente de bienestar.",
        problems: ["<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Frustración crónica ante la incapacidad humana de estar siempre disponibles.</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Hiperapego y exigencias vocalizadas muy persistentes.</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Destructividad o interrupciones activas como llamada de atención.</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Falta de herramientas de autorregulación emocional independiente.</li>"]
    },
    "Déspota": {
        desc: "Cuando se siente mal, intenta resolverlo acaparando activamente todos los recursos (comida, alturas, areneros) y desplazando a los competidores mediante intimidación. Usa el control espacial para forzar un entorno predecible.",
        problems: ["<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Agresividad ofensiva hacia otros gatos del hogar.</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Protección severa de recursos, bloqueos de paso y emboscadas.</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Generación de estrés crónico en otros animales convivientes.</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Resistencia agresiva al manejo o límites impuestos por el tutor humano.</li>"]
    }
};

let testQuestions = [];
let userAnswers = {};
let currentPage = 0;
const questionsPerPage = 10;
let totalPages = 0;

const options = [
    { value: 1, label: "Nunca" },
    { value: 2, label: "Pocas veces" },
    { value: 3, label: "Muchas veces" },
    { value: 4, label: "Siempre" }
];

window.onload = function() {
    document.getElementById('evalDate').valueAsDate = new Date();
};

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function startTest() {
    const requiredIds = ['catName', 'catAge', 'catSex', 'catBreed', 'catStatus', 'catOutdoors', 'catCompanions', 'ownerName', 'profName', 'evalDate', 'ownerEmail', 'ownerPhone'];
    let isValid = true;
    requiredIds.forEach(id => {
        const el = document.getElementById(id);
        if(!el.value) {
            isValid = false;
            el.classList.add('border-red-400');
        } else {
            el.classList.remove('border-red-400');
        }
    });

    if(!isValid) {
        document.getElementById('form-error').classList.remove('hidden');
        return;
    }
    document.getElementById('form-error').classList.add('hidden');

    testQuestions = shuffle([...questionsDatabase]);
    totalPages = Math.ceil(testQuestions.length / questionsPerPage);
    currentPage = 0;
    userAnswers = {};

    document.getElementById('phase-1').classList.add('hidden-phase');
    document.getElementById('phase-2').classList.remove('hidden-phase');
    
    renderPage();
    setTimeout(() => { document.querySelector('header').scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 10);
}

function renderPage() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';

    const startIdx = currentPage * questionsPerPage;
    const endIdx = Math.min(startIdx + questionsPerPage, testQuestions.length);

    for (let i = startIdx; i < endIdx; i++) {
        const q = testQuestions[i];
        
        const questionDiv = document.createElement('div');
        questionDiv.id = `q-container-${q.id}`;
        questionDiv.className = "pb-8 border-b border-zinc-100 last:border-0 last:pb-0";
        
        let html = `<p class="text-lg text-zinc-800 font-medium mb-4 md:mb-5 leading-snug">${q.text}</p>`;
        html += `<div class="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 radio-btn-group">`;
        
        options.forEach(opt => {
            const isChecked = userAnswers[q.id] === opt.value;
            const id = `q${q.id}_opt${opt.value}`;
            html += `
                <div>
                    <input type="radio" id="${id}" name="q${q.id}" value="${opt.value}" class="hidden" ${isChecked ? 'checked' : ''} onchange="saveAnswer(${q.id}, ${opt.value})">
                    <label for="${id}" class="block w-full text-center py-3 md:py-2.5 px-2 border border-zinc-200 rounded-xl md:rounded-full cursor-pointer text-sm font-medium text-zinc-600 bg-white shadow-sm md:shadow-none hover:bg-zinc-50 transition-colors">
                        ${opt.label}
                    </label>
                </div>
            `;
        });
        
        html += `</div>`;
        questionDiv.innerHTML = html;
        container.appendChild(questionDiv);
    }

    document.getElementById('current-q-num').innerText = endIdx;
    const progress = (Object.keys(userAnswers).length / testQuestions.length) * 100;
    document.getElementById('progress-bar-fill').style.width = `${progress}%`;

    document.getElementById('btn-prev').classList.toggle('hidden', currentPage === 0);
    document.getElementById('btn-next').classList.toggle('hidden', currentPage === totalPages - 1);
    document.getElementById('btn-submit').classList.toggle('hidden', currentPage !== totalPages - 1);
    document.getElementById('test-error').classList.add('hidden');
}

function saveAnswer(qId, value) {
    userAnswers[qId] = value;
    const progress = (Object.keys(userAnswers).length / testQuestions.length) * 100;
    document.getElementById('progress-bar-fill').style.width = `${progress}%`;
    
    const qContainer = document.getElementById(`q-container-${qId}`);
    qContainer.classList.remove('border-red-400', 'bg-red-50', 'p-4', 'rounded-2xl');
}

function changePage(direction) {
    if (direction > 0) {
        const startIdx = currentPage * questionsPerPage;
        const endIdx = Math.min(startIdx + questionsPerPage, testQuestions.length);
        let allAnswered = true;
        
        for (let i = startIdx; i < endIdx; i++) {
            const q = testQuestions[i];
            if (!userAnswers[q.id]) {
                allAnswered = false;
                const el = document.getElementById(`q-container-${q.id}`);
                el.classList.add('border-red-400', 'bg-red-50', 'p-4', 'rounded-2xl');
            }
        }

        if (!allAnswered) {
            document.getElementById('test-error').classList.remove('hidden');
            return;
        }
    }

    currentPage += direction;
    renderPage();
    setTimeout(() => { document.querySelector('header').scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 10);
}

async function finishTest() {
    const startIdx = currentPage * questionsPerPage;
    const endIdx = Math.min(startIdx + questionsPerPage, testQuestions.length);
    let allAnswered = true;
    for (let i = startIdx; i < endIdx; i++) {
        if (!userAnswers[testQuestions[i].id]) {
            allAnswered = false;
            document.getElementById(`q-container-${testQuestions[i].id}`).classList.add('border-red-400', 'bg-red-50', 'p-4', 'rounded-2xl');
        }
    }
    if (!allAnswered) {
        document.getElementById('test-error').classList.remove('hidden');
        return;
    }

    const scores = { "Alarmista": 0, "Desconfiado": 0, "Demandante": 0, "Déspota": 0 };

    testQuestions.forEach(q => {
        const rawVal = userAnswers[q.id];
        const finalVal = q.type === '-' ? (5 - rawVal) : rawVal; 
        scores[q.archetype] += finalVal;
    });

    const btnSubmit = document.getElementById('btn-submit');
    const originalText = btnSubmit.innerHTML;
    btnSubmit.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Analizando datos...`;
    btnSubmit.disabled = true;

    const payload = {
        fecha: document.getElementById('evalDate').value,
        gato: document.getElementById('catName').value,
        edad: document.getElementById('catAge').value,
        sexo: document.getElementById('catSex').value,
        raza: document.getElementById('catBreed').value,
        estado: document.getElementById('catStatus').value,
        exterior: document.getElementById('catOutdoors').value,
        convive: document.getElementById('catCompanions').value,
        tutor: document.getElementById('ownerName').value,
        email: document.getElementById('ownerEmail').value,
        telefono: document.getElementById('ownerPhone').value,
        alarmista: scores["Alarmista"],
        desconfiado: scores["Desconfiado"],
        demandante: scores["Demandante"],
        despota: scores["Déspota"],
        respuestas: JSON.stringify(userAnswers)
    };

    try {
        // IMPORTANTE: REEMPLAZA ESTO CON LA URL DE TU NUEVO GOOGLE APPS SCRIPT
        const googleUrl = "https://script.google.com/macros/s/AKfycbwc5ZgvPs8uGjmP6Es_-L1M7VVj83RZbTv3Bcy6cI-Zy2kkOvIsgiO5FESHtFekPR44tg/exec"; 
        
        await fetch(googleUrl, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
    } catch (error) {
        console.error("Error al guardar en la base de datos", error);
    }

    btnSubmit.innerHTML = originalText;
    btnSubmit.disabled = false;
    mostrarResultados(scores);
}

function mostrarResultados(scores) {
    document.getElementById('res-cat-name').innerText = document.getElementById('catName').value;
    document.getElementById('res-cat-age-sex').innerText = `${document.getElementById('catAge').value} / ${document.getElementById('catSex').value} (${document.getElementById('catStatus').value})`;
    
    const ext = document.getElementById('catOutdoors').value === 'Sí' ? 'Con acceso ext.' : 'Indoor';
    const comp = document.getElementById('catCompanions').value === 'Sí' ? 'Multigato' : 'Gato único';
    document.getElementById('res-cat-env').innerText = `${ext} / ${comp}`;
    
    const dateStr = new Date(document.getElementById('evalDate').value).toLocaleDateString('es-ES');
    document.getElementById('res-date-prof').innerText = `${document.getElementById('profName').value} - ${dateStr}`;

    const chartsContainer = document.getElementById('charts-container');
    chartsContainer.innerHTML = '';
    
    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const maxScore = sortedScores[0][1];
    
    const primaryArchetypes = sortedScores.filter(item => item[1] === maxScore);
    const primaryArchetypeNames = primaryArchetypes.map(item => item[0]);
    
    const nonPrimaryArchetypes = sortedScores.filter(item => item[1] < maxScore);
    const nextHighestScore = nonPrimaryArchetypes.length > 0 ? nonPrimaryArchetypes[0][1] : 0;
    const scoreDifference = maxScore - nextHighestScore;

    sortedScores.forEach(([arch, score]) => {
        const percentage = (score / 60) * 100;
        const isPrimary = primaryArchetypeNames.includes(arch);
        const barClass = isPrimary ? 'bg-gradient-to-r from-brand to-[#e67500] print:bg-brand' : 'bg-zinc-200';
        const textColor = isPrimary ? 'text-brand font-bold' : 'text-zinc-500';
        
        chartsContainer.innerHTML += `
            <div>
                <div class="flex justify-between items-end mb-2">
                    <span class="${textColor} text-sm uppercase tracking-wide font-semibold">${arch}</span>
                    <span class="${textColor} text-sm font-bold bg-white px-2 py-0.5 rounded-md shadow-sm border border-zinc-100 print:border-none print:shadow-none">${score} pts</span>
                </div>
                <div class="w-full bg-zinc-100 rounded-full h-2.5 overflow-hidden print:border print:border-zinc-200">
                    <div class="${barClass} h-2.5 rounded-full" style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
    });

    const diagnosticoContainer = document.getElementById('diagnostico-container');
    diagnosticoContainer.innerHTML = '';

    primaryArchetypes.forEach(([arch, score]) => {
        const data = archetypeData[arch];
        diagnosticoContainer.innerHTML += `
            <div class="mb-10 last:mb-0 relative">
                <div class="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 md:w-1.5 bg-accent rounded-r-full print:hidden"></div>
                <h3 class="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                    <div class="p-2 bg-accent/10 rounded-lg text-accent">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    Tendencia Principal: <span class="text-brand">${arch}</span>
                </h3>
                <p class="text-zinc-600 text-lg leading-relaxed mb-6">${data.desc}</p>
                
                <div class="bg-brand-50 p-6 rounded-2xl print:bg-white print:border print:border-zinc-200">
                    <h4 class="font-bold text-brand mb-4 flex items-center gap-2">
                        <svg class="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        Propensión a problemas conductuales:
                    </h4>
                    <ul class="grid md:grid-cols-2 gap-3 text-zinc-600 text-[15px]">
                        ${data.problems.join('')}
                    </ul>
                </div>
            </div>
        `;
    });

    const mixedNoteEl = document.getElementById('mixed-profile-note');
    mixedNoteEl.className = "hidden font-medium p-4 rounded-xl print:bg-transparent print:p-0 print:border-l-4 print:pl-4";
    
    if (primaryArchetypes.length > 1) {
        const archNamesStr = primaryArchetypeNames.map(name => `<em>${name}</em>`).join(' / ');
        mixedNoteEl.innerHTML = `<strong>⚠️ Empate Detectado:</strong> El gato ha obtenido exactamente la misma puntuación máxima en los arquetipos ${archNamesStr}. Esto indica que utiliza mecanismos de afrontamiento de esos perfiles con igual intensidad y frecuencia. La pauta terapéutica debe abordarlos de manera integrada.`;
        mixedNoteEl.classList.remove('hidden');
        mixedNoteEl.classList.add('bg-brand-50', 'text-brand', 'print:border-brand');
    } else if (scoreDifference > 0 && scoreDifference <= 6 && nonPrimaryArchetypes.length > 0) {
        const secondaryArchetype = nonPrimaryArchetypes[0][0];
        mixedNoteEl.innerHTML = `<strong>⚠️ Perfil de Riesgo Mixto:</strong> Existe una diferencia muy estrecha (${scoreDifference} pts) entre el arquetipo principal (<em>${primaryArchetypeNames[0]}</em>) y la tendencia secundaria (<em>${secondaryArchetype}</em>). Esto indica que el gato alterna ambos mecanismos de afrontamiento.`;
        mixedNoteEl.classList.remove('hidden');
        mixedNoteEl.classList.add('bg-zinc-100', 'text-zinc-800', 'print:border-zinc-800');
    }

    document.getElementById('phase-2').classList.add('hidden-phase');
    document.getElementById('phase-3').classList.remove('hidden-phase');
    
    setTimeout(() => { document.querySelector('header').scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 10);
}
