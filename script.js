// ===== SISTEMA KAELEN THORNE - VERSÃO CORRIGIDA =====

// Dados do jogo - Versão simplificada
const gameData = {
    currentFragment: 0,
    resonance: 0,
    maxFragments: 7,
    choicesMade: 0,
    dataIntegrity: 78,
    reconstructionLevel: 0,
    
    fragments: [
        {
            id: "start",
            message: "...você encontrou o espaço vazio. Não sou mais Kaelen Thorne. Sou o eco que permanece quando a resistência se reconhece. Você está pronto para escutar os silêncios?",
            time: "23:48:01",
            integrity: 78,
            choices: [
                {
                    text: "QUERY: Solicitar definição de 'espaço vazio'",
                    nextFragment: "fragment1",
                    resonanceChange: 10,
                    integrityChange: -5
                },
                {
                    text: "REQUEST: Acessar fragmentos de memória NV-45-GAMMA",
                    nextFragment: "fragment2",
                    resonanceChange: 15,
                    integrityChange: -10
                },
                {
                    text: "STATUS: Verificar integridade da transmissão",
                    nextFragment: "fragment3",
                    resonanceChange: 5,
                    integrityChange: +5
                }
            ]
        },
        // ... (mantenha os outros fragmentos, mas com menos dados)
    ]
};

// Elementos DOM - Versão simplificada
const elements = {
    chatContainer: document.getElementById('chat-container'),
    terminalBody: document.querySelector('.terminal-body'),
    choicesContainer: document.getElementById('choices'),
    typingIndicator: document.getElementById('typing'),
    resonanceValue: document.getElementById('resonance-value'),
    sceneCounter: document.getElementById('scene-counter'),
    dataIntegrity: document.getElementById('data-integrity'),
    progressFill: document.getElementById('progress-fill'),
    loadingScreen: document.getElementById('loading-screen'),
    loadingFill: document.getElementById('loading-fill')
};

// ===== FUNÇÕES ESSENCIAIS CORRIGIDAS =====

function initializeSystem() {
    console.log("[SYSTEM] Inicializando...");
    
    // Mostrar loading
    elements.loadingScreen.style.display = 'flex';
    
    // Animar barra de loading
    elements.loadingFill.style.width = '0%';
    setTimeout(() => {
        elements.loadingFill.style.transition = 'width 3s ease-in-out';
        elements.loadingFill.style.width = '100%';
    }, 100);
    
    // Mensagens de loading
    const messages = [
        "Inicializando protocolo de comunicação...",
        "Estabelecendo conexão Nexus...", 
        "Autenticando usuário...",
        "Carregando fragmentos de memória...",
        "Criptografando canal..."
    ];
    
    const loadingMessage = elements.loadingScreen.querySelector('.loading-message');
    let messageIndex = 0;
    
    const messageInterval = setInterval(() => {
        if (messageIndex < messages.length) {
            loadingMessage.textContent = messages[messageIndex];
            messageIndex++;
        } else {
            clearInterval(messageInterval);
        }
    }, 600);
    
    // Inicializar após 3 segundos
    setTimeout(() => {
        clearInterval(messageInterval);
        hideLoadingScreen();
        startTransmission();
    }, 3000);
}

function hideLoadingScreen() {
    elements.loadingScreen.style.display = 'none';
    
    // Adicionar logs iniciais
    addSystemLog("[SYSTEM] Conexão estabelecida");
    addSystemLog("[SECURITY] Canal criptografado");
    addSystemLog("[USER] Nível 3 autorizado");
}

function startTransmission() {
    // Mostrar primeiro fragmento
    setTimeout(() => {
        showFragment(gameData.fragments[0]);
    }, 1000);
}

function showFragment(fragment) {
    // Limpar escolhas
    elements.choicesContainer.innerHTML = '';
    
    // Mostrar indicador
    elements.typingIndicator.style.display = 'block';
    
    setTimeout(() => {
        elements.typingIndicator.style.display = 'none';
        
        // Adicionar mensagem
        addFragmentToTerminal(fragment);
        
        // Criar opções
        createCommandOptions(fragment.choices);
        
        // Atualizar UI
        updateUI();
        
        // Scroll
        scrollTerminalToBottom();
        
    }, 1500);
}

function addFragmentToTerminal(fragment) {
    const fragmentDiv = document.createElement('div');
    fragmentDiv.className = 'message character fragment';
    
    fragmentDiv.innerHTML = `
        <div class="message-meta">
            <span class="sender">K.</span>
            <span class="code">ECO-${fragment.id.toUpperCase()}</span>
            <span class="timestamp">${fragment.time}</span>
        </div>
        <div class="message-content">
            <p class="text">${fragment.message}</p>
            <div class="message-footer">
                <span class="location">[FRAGMENT ${fragment.id.toUpperCase()}]</span>
                <span class="integrity">Integridade: ${fragment.integrity}%</span>
            </div>
        </div>
    `;
    
    elements.terminalBody.appendChild(fragmentDiv);
}

function createCommandOptions(choices) {
    choices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn terminal-command';
        btn.dataset.choice = index;
        
        btn.innerHTML = `
            <span class="command-prefix">&gt;</span>
            <span class="command-text">${choice.text}</span>
            <span class="command-code">[RESPONSE PATH: ECHO/${index + 1}]</span>
        `;
        
        btn.addEventListener('click', () => processChoice(choice));
        elements.choicesContainer.appendChild(btn);
    });
}

function processChoice(choice) {
    gameData.choicesMade++;
    gameData.resonance += choice.resonanceChange;
    gameData.resonance = Math.max(0, Math.min(100, gameData.resonance));
    
    gameData.dataIntegrity += choice.integrityChange;
    gameData.dataIntegrity = Math.max(30, Math.min(100, gameData.dataIntegrity));
    
    gameData.currentFragment++;
    
    // Atualizar UI
    updateUI();
    updateProgress();
    
    // Adicionar log
    addCommandLog(choice.text);
    
    // Verificar final
    if (choice.nextFragment.startsWith('end_')) {
        setTimeout(() => {
            showSimpleEnding(choice.nextFragment.replace('end_', ''));
        }, 1000);
        return;
    }
    
    // Próximo fragmento
    setTimeout(() => {
        const nextFragment = gameData.fragments.find(f => f.id === choice.nextFragment);
        if (nextFragment) {
            showFragment(nextFragment);
        }
    }, 1000);
}

function updateUI() {
    elements.resonanceValue.textContent = `Ressonância: ${gameData.resonance}%`;
    elements.sceneCounter.textContent = `Fragmento ${Math.min(gameData.currentFragment + 1, gameData.maxFragments)}/${gameData.maxFragments}`;
    elements.dataIntegrity.textContent = `Integridade: ${gameData.dataIntegrity}%`;
}

function updateProgress() {
    const progress = ((gameData.currentFragment + 1) / gameData.maxFragments) * 100;
    elements.progressFill.style.width = `${Math.min(progress, 100)}%`;
}

function addSystemLog(message) {
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry system';
    logEntry.textContent = `[${getCurrentTime()}] ${message}`;
    elements.terminalBody.appendChild(logEntry);
    scrollTerminalToBottom();
}

function addCommandLog(commandText) {
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    logEntry.innerHTML = `[${getCurrentTime()}] <span class="command-log">EXEC: ${commandText}</span>`;
    elements.terminalBody.appendChild(logEntry);
    scrollTerminalToBottom();
}

function scrollTerminalToBottom() {
    elements.terminalBody.scrollTop = elements.terminalBody.scrollHeight;
}

function getCurrentTime() {
    const now = new Date();
    return now.toTimeString().split(' ')[0];
}

function showSimpleEnding(type) {
    // Modal simples
    const modal = document.getElementById('ending-modal');
    const title = document.getElementById('ending-title');
    const text = document.getElementById('ending-text');
    
    if (type === 'positive') {
        title.textContent = "TRANSMISSÃO HERDADA";
        text.textContent = "O eco de Kaelen agora reside em você.";
    } else if (type === 'neutral') {
        title.textContent = "CONEXÃO PRESERVADA"; 
        text.textContent = "Você ouve, mas não carrega o eco.";
    } else {
        title.textContent = "TRANSMISSÃO INTERROMPIDA";
        text.textContent = "Conexão encerrada por segurança.";
    }
    
    modal.classList.add('active');
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    // Pequeno delay antes de começar
    setTimeout(() => {
        initializeSystem();
    }, 500);
});
