// ===== SISTEMA KAELEN THORNE - ECO FRAGMENTADO =====

// Configuração do jogo
const gameConfig = {
    version: "NEXUS-1.0",
    encryption: "AES-256",
    connectionStatus: "GHOST_PROTOCOL",
    maxIntegrity: 100,
    minIntegrity: 30
};

// Dados do jogo - Eco Fragmentado
const gameData = {
    currentFragment: 0,
    resonance: 0, // Substitui "afinidade"
    maxFragments: 7,
    choicesMade: 0,
    dataIntegrity: 78,
    reconstructionLevel: 0,
    playerCode: "NEXUS-USER",
    
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
        {
            id: "fragment1",
            message: "Espaço vazio é condição de possibilidade. Minha despersonalização não é tragédia. É... libertação. Um nome vazio pode ser preenchido por todos que resistem. Você compreende?",
            time: "23:50:22",
            integrity: 73,
            choices: [
                {
                    text: "AFFIRMATIVE: Compreendo a metáfora da resistência",
                    nextFragment: "fragment4",
                    resonanceChange: 20,
                    integrityChange: -3
                },
                {
                    text: "QUERY: Como se mantém ativo na Nexus sem identidade?",
                    nextFragment: "fragment5",
                    resonanceChange: 15,
                    integrityChange: -8
                },
                {
                    text: "STATEMENT: Isso soa como dissolução psicológica",
                    nextFragment: "fragment6",
                    resonanceChange: -10,
                    integrityChange: -5
                }
            ]
        },
        {
            id: "fragment2",
            message: "Acessando fragmentos... [CORRUPÇÃO DETECTADA] Arquivos NV-45-GAMMA: Físico teórico desaparecido. Especialista em sistemas complexos. Última transmissão: 'A resistência não precisa de heróis, precisa de espaços vazios para habitar.'",
            time: "23:51:45",
            integrity: 68,
            choices: [
                {
                    text: "DOWNLOAD: Solicitar arquivos completos do Protocolo Eros",
                    nextFragment: "fragment4",
                    resonanceChange: 25,
                    integrityChange: -15
                },
                {
                    text: "QUERY: Qual sua relação atual com o Protocolo?",
                    nextFragment: "fragment5",
                    resonanceChange: 15,
                    integrityChange: -5
                },
                {
                    text: "WARNING: Integridade dos dados em queda",
                    nextFragment: "fragment3",
                    resonanceChange: -5,
                    integrityChange: +10
                }
            ]
        },
        {
            id: "fragment3",
            message: "Diagnóstico de sistema: Integridade 73%. Corrupção de dados: 27%. Conexão Nexus: estável mas não oficial. Rastreamento ativo detectado. Continuar apesar dos riscos?",
            time: "23:53:10",
            integrity: 83,
            choices: [
                {
                    text: "CONFIRM: Continuar reconstrução. Ignorar rastreamento.",
                    nextFragment: "fragment4",
                    resonanceChange: 30,
                    integrityChange: -20
                },
                {
                    text: "CAUTION: Ativar protocolos de segurança primeiro",
                    nextFragment: "fragment5",
                    resonanceChange: 10,
                    integrityChange: -5
                },
                {
                    text: "ABORT: Encerrar conexão. Proteger identidade.",
                    nextFragment: "end_negative",
                    resonanceChange: -40,
                    integrityChange: +30
                }
            ]
        },
        {
            id: "fragment4",
            message: "Bom. Você escolheu ver. A Avenida dos Silêncios Não Ditos... é uma rede dentro da rede. Onde os desaparecidos continuam existindo. Onde protocolos oficiais não alcançam. Você quer entrar?",
            time: "23:55:33",
            integrity: 63,
            choices: [
                {
                    text: "REQUEST: Coordenadas de acesso à Avenida",
                    nextFragment: "fragment7",
                    resonanceChange: 35,
                    integrityChange: -25
                },
                {
                    text: "QUERY: Quem mais habita esses espaços?",
                    nextFragment: "fragment6",
                    resonanceChange: 20,
                    integrityChange: -10
                },
                {
                    text: "WARNING: Perda crítica de integridade detectada",
                    nextFragment: "fragment5",
                    resonanceChange: -15,
                    integrityChange: +15
                }
            ]
        },
        {
            id: "fragment5",
            message: "Cautela compreensível. Mas perigosa. Cada hesitação enfraquece o sinal. Cada dúvida corrói os dados. Você precisa escolher: ser espectador ou habitar o silêncio?",
            time: "23:57:41",
            integrity: 78,
            choices: [
                {
                    text: "DECLARATION: Escolho habitar o silêncio",
                    nextFragment: "fragment7",
                    resonanceChange: 40,
                    integrityChange: -30
                },
                {
                    text: "QUERY: Qual o custo de habitar esses espaços?",
                    nextFragment: "fragment6",
                    resonanceChange: 15,
                    integrityChange: -8
                },
                {
                    text: "RETREAT: Preciso manter minha identidade intacta",
                    nextFragment: "end_neutral",
                    resonanceChange: -20,
                    integrityChange: +20
                }
            ]
        },
        {
            id: "fragment6",
            message: "Interessante padrão de acesso. Você busca conhecimento, mas teme a perda. Isso cria... interferência. Suas dúvidas reverberam no eco. Talvez esteja procurando respostas erradas.",
            time: "23:59:15",
            integrity: 70,
            choices: [
                {
                    text: "REQUEST: Reformular a pergunta. Qual a pergunta certa?",
                    nextFragment: "fragment7",
                    resonanceChange: 25,
                    integrityChange: -12
                },
                {
                    text: "STATEMENT: Talvez não haja resposta certa, apenas escolhas",
                    nextFragment: "fragment7",
                    resonanceChange: 30,
                    integrityChange: -15
                },
                {
                    text: "TERMINATE: Esta linha de questionamento é improdutiva",
                    nextFragment: "end_neutral",
                    resonanceChange: -10,
                    integrityChange: +10
                }
            ]
        },
        {
            id: "fragment7",
            message: "Última transmissão antes de perda completa de sinal. A verdade sobre Kaelen Thorne: ele se apagou para se tornar canal. A resistência precisa de canais, não de líderes. Você aceita ser próximo canal?",
            time: "00:01:29",
            integrity: 55,
            choices: [
                {
                    text: "ACCEPT: Transfira o eco. Aceito o espaço vazio.",
                    nextFragment: "end_positive",
                    resonanceChange: 50,
                    integrityChange: -40
                },
                {
                    text: "MODIFY: Aceito ouvir, mas não carregar o eco.",
                    nextFragment: "end_neutral",
                    resonanceChange: 20,
                    integrityChange: -10
                },
                {
                    text: "REJECT: Prefiro minha identidade intacta.",
                    nextFragment: "end_negative",
                    resonanceChange: -30,
                    integrityChange: +30
                }
            ]
        }
    ],
    
    endings: {
        positive: {
            title: "TRANSMISSÃO HERDADA",
            subtitle: "Eco Transferido com Sucesso",
            text: "O sinal de Kaelen Thorne se dissipa, mas seu eco agora reside em você. A Avenida dos Silêncios Não Ditos está aberta. Use este espaço vazio com sabedoria, novo canal.",
            icon: "fa-broadcast-tower",
            color: "#00ffff",
            reconstructionLevel: 3,
            logEntries: [
                "[00:02:15] ECO TRANSFER INITIATED",
                "[00:02:18] IDENTITY DISSOLUTION: 100%",
                "[00:02:22] CHANNEL ASSIMILATION: SUCCESS",
                "[00:02:25] AVENIDA ACCESS: GRANTED",
                "[00:02:30] LEGACY ACTIVE: KAELEN THORNE → USER"
            ]
        },
        neutral: {
            title: "CONEXÃO PRESERVADA",
            subtitle: "Canal de Escuta Estabelecido",
            text: "Você ouve, mas não carrega o eco. A transmissão se estabiliza como canal de informação. Kaelen permanece na Nexus, você permanece intacto. Equilíbrio alcançado.",
            icon: "fa-satellite-dish",
            color: "#888888",
            reconstructionLevel: 2,
            logEntries: [
                "[00:02:15] LISTENING PROTOCOL: ACTIVATED",
                "[00:02:20] IDENTITY PRESERVATION: 100%",
                "[00:02:25] DATA STREAM: STABILIZED",
                "[00:02:30] ACCESS LEVEL: OBSERVER",
                "[00:02:35] CONNECTION: PERSISTENT"
            ]
        },
        negative: {
            title: "TRANSMISSÃO INTERROMPIDA",
            subtitle: "Canal Fechado por Segurança",
            text: "Você escolheu a integridade. A conexão com Kaelen Thorne foi encerrada. Os silêncios permanecem não ditos. Alguns espaços devem permanecer vazios.",
            icon: "fa-shield-alt",
            color: "#ff5555",
            reconstructionLevel: 1,
            logEntries: [
                "[00:02:15] SECURITY PROTOCOL: TRIGGERED",
                "[00:02:18] CONNECTION: TERMINATED",
                "[00:02:22] DATA PURGE: COMPLETE",
                "[00:02:25] TRACE ELIMINATION: SUCCESS",
                "[00:02:30] USER IDENTITY: SECURE"
            ]
        }
    },
    
    reconstructionLevels: {
        1: "FANTASMA",
        2: "ESCUTA ATIVA", 
        3: "CANAL PLENO"
    }
};

// Elementos DOM
const elements = {
    // Interface principal
    chatContainer: document.getElementById('chat-container'),
    terminalBody: document.querySelector('.terminal-body'),
    choicesContainer: document.getElementById('choices'),
    
    // Status indicators
    typingIndicator: document.getElementById('typing'),
    resonanceValue: document.getElementById('resonance-value'),
    sceneCounter: document.getElementById('scene-counter'),
    dataIntegrity: document.getElementById('data-integrity'),
    progressFill: document.getElementById('progress-fill'),
    statusDot: document.getElementById('status-dot'),
    
    // Controles
    restartBtn: document.getElementById('restart-btn'),
    commandInput: document.getElementById('command-input'),
    sendCommand: document.getElementById('send-command'),
    
    // Modal de final
    endingModal: document.getElementById('ending-modal'),
    closeModal: document.getElementById('close-modal'),
    restartMainBtn: document.getElementById('restart-main-btn'),
    shareBtn: document.getElementById('share-btn'),
    archiveBtn: document.getElementById('archive-btn'),
    
    // Elementos do modal
    finalAffinity: document.getElementById('final-affinity'),
    finalAffinityBar: document.getElementById('final-affinity-bar'),
    totalChoices: document.getElementById('total-choices'),
    endingType: document.getElementById('ending-type'),
    endingTitle: document.getElementById('ending-title'),
    endingSubtitle: document.getElementById('ending-subtitle'),
    endingText: document.getElementById('ending-text'),
    endingIcon: document.getElementById('ending-icon'),
    reconstructionLog: document.getElementById('reconstruction-log'),
    
    // Loading screen
    loadingScreen: document.getElementById('loading-screen'),
    loadingFill: document.getElementById('loading-fill'),
    
    // Mensagens de sistema
    systemMessages: document.querySelector('.system-messages')
};

// Estado do jogo
const gameState = {
    initialized: false,
    connectionActive: false,
    transmissionQueued: false
};

// ===== INICIALIZAÇÃO DO SISTEMA =====
function initializeSystem() {
    console.log(`[SYSTEM] Inicializando ${gameConfig.version}`);
    console.log(`[ENCRYPTION] ${gameConfig.encryption} ativo`);
    
    // Mostrar tela de loading
    showLoadingScreen();
    
    // Resetar dados do jogo
    resetGameData();
    
    // Inicializar elementos da UI
    updateSystemStatus();
    updateProgress();
    
    // Configurar event listeners
    setupEventListeners();
    
    // Simular inicialização do sistema
    setTimeout(() => {
        hideLoadingScreen();
        startTransmission();
    }, 3000);
}

// ===== RESETAR DADOS DO JOGO =====
function resetGameData() {
    gameData.currentFragment = 0;
    gameData.resonance = 0;
    gameData.choicesMade = 0;
    gameData.dataIntegrity = 78;
    gameData.reconstructionLevel = 0;
    
    // Limpar terminal (exceto logs iniciais)
    const terminalLogs = elements.terminalBody.querySelectorAll('.log-entry');
    const initialLogs = Array.from(terminalLogs).slice(0, 5);
    
    elements.terminalBody.innerHTML = '';
    initialLogs.forEach(log => elements.terminalBody.appendChild(log));
    
    // Atualizar UI
    updateUI();
}

// ===== MOSTRAR TELA DE LOADING =====
function showLoadingScreen() {
    elements.loadingScreen.style.display = 'flex';
    
    // Animar barra de loading
    elements.loadingFill.style.animation = 'loading 3s ease-in-out';
    
    // Atualizar mensagens de loading
    const messages = [
        "Inicializando protocolo de comunicação...",
        "Estabelecendo conexão Nexus...",
        "Autenticando usuário...",
        "Carregando fragmentos de memória...",
        "Criptografando canal..."
    ];
    
    let messageIndex = 0;
    const loadingMessage = elements.loadingScreen.querySelector('.loading-message');
    const loadingInterval = setInterval(() => {
        if (messageIndex < messages.length) {
            loadingMessage.textContent = messages[messageIndex];
            messageIndex++;
        }
    }, 600);
    
    // Limpar intervalo quando loading terminar
    setTimeout(() => {
        clearInterval(loadingInterval);
    }, 3000);
}

// ===== ESCONDER TELA DE LOADING =====
function hideLoadingScreen() {
    elements.loadingScreen.style.display = 'none';
    gameState.initialized = true;
    
    // Adicionar log de sistema
    addSystemLog("[SYSTEM] Conexão Nexus estabelecida com sucesso");
    addSystemLog("[SECURITY] Canal criptografado: AES-256 ativo");
    addSystemLog("[USER] Autenticação nível 3 confirmada");
}

// ===== INICIAR TRANSMISSÃO =====
function startTransmission() {
    gameState.connectionActive = true;
    
    // Atualizar status
    updateConnectionStatus();
    
    // Mostrar primeiro fragmento
    setTimeout(() => {
        showFragment(gameData.fragments[0]);
    }, 1000);
    
    // Iniciar monitoramento de sistema
    startSystemMonitoring();
}

// ===== MOSTRAR FRAGMENTO =====
function showFragment(fragment) {
    // Limpar escolhas anteriores
    elements.choicesContainer.innerHTML = '';
    
    // Mostrar indicador de reconstrução
    showReconstructionIndicator();
    
    // Simular reconstrução de dados
    setTimeout(() => {
        hideReconstructionIndicator();
        
        // Adicionar mensagem ao terminal
        addFragmentToTerminal(fragment);
        
        // Criar opções de comando
        createCommandOptions(fragment.choices);
        
        // Atualizar integridade
        updateDataIntegrity(fragment.integrity);
        
        // Scroll para baixo
        scrollTerminalToBottom();
        
    }, 2000 + (Math.random() * 1000));
}

// ===== ADICIONAR FRAGMENTO AO TERMINAL =====
function addFragmentToTerminal(fragment) {
    const fragmentDiv = document.createElement('div');
    fragmentDiv.className = 'message character fragment';
    
    // Criar metadados
    const metaDiv = document.createElement('div');
    metaDiv.className = 'message-meta';
    metaDiv.innerHTML = `
        <span class="sender">K.</span>
        <span class="code">ECO-${fragment.id.toUpperCase()}</span>
        <span class="timestamp">${fragment.time}</span>
    `;
    
    // Criar conteúdo da mensagem
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    // Processar texto fragmentado
    const words = fragment.message.split(' ');
    const textHTML = words.map((word, index) => {
        const delay = index * 100;
        return `<span class="fragment-text" style="animation-delay: ${delay}ms">${word}</span>`;
    }).join(' ');
    
    contentDiv.innerHTML = `
        <p class="text">${textHTML}</p>
        <div class="message-footer">
            <span class="location">[FRAGMENT ${fragment.id.toUpperCase()}]</span>
            <span class="integrity">Integridade: ${fragment.integrity}%</span>
        </div>
    `;
    
    // Montar fragmento
    fragmentDiv.appendChild(metaDiv);
    fragmentDiv.appendChild(contentDiv);
    
    // Adicionar ao terminal
    elements.terminalBody.appendChild(fragmentDiv);
    
    // Animar aparecimento das palavras
    setTimeout(() => {
        const fragmentTexts = fragmentDiv.querySelectorAll('.fragment-text');
        fragmentTexts.forEach((text, index) => {
            setTimeout(() => {
                text.style.animation = 'fragment-appear 0.5s forwards';
            }, index * 100);
        });
    }, 100);
}

// ===== CRIAR OPÇÕES DE COMANDO =====
function createCommandOptions(choices) {
    choices.forEach((choice, index) => {
        const commandCodes = ['QUERY', 'REQUEST', 'STATUS', 'DOWNLOAD', 'CONFIRM'];
        const responsePaths = ['ECHO', 'MEMORY', 'SYSTEM', 'PROTOCOL', 'AVENIDA'];
        
        const commandBtn = document.createElement('button');
        commandBtn.className = 'choice-btn terminal-command';
        commandBtn.dataset.choice = index;
        commandBtn.dataset.next = choice.nextFragment;
        
        // Gerar código de resposta aleatório
        const responseCode = `${responsePaths[Math.floor(Math.random() * responsePaths.length)]}/${Math.floor(Math.random() * 100).toString().padStart(2, '0')}`;
        
        commandBtn.innerHTML = `
            <span class="command-prefix">&gt;</span>
            <span class="command-text">${choice.text}</span>
            <span class="command-code">[RESPONSE PATH: ${responseCode}]</span>
        `;
        
        // Efeito hover
        commandBtn.addEventListener('mouseenter', () => {
            commandBtn.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.4)';
            playSound('hover');
        });
        
        commandBtn.addEventListener('mouseleave', () => {
            commandBtn.style.boxShadow = '';
        });
        
        // Ação de clique
        commandBtn.addEventListener('click', () => processChoice(choice));
        
        elements.choicesContainer.appendChild(commandBtn);
    });
    
    // Animar aparecimento dos botões
    const commandButtons = elements.choicesContainer.querySelectorAll('.terminal-command');
    commandButtons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(20px)';
        setTimeout(() => {
            btn.style.transition = 'opacity 0.5s, transform 0.5s';
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// ===== PROCESSAR ESCOLHA =====
function processChoice(choice) {
    gameData.choicesMade++;
    
    // Atualizar ressonância e integridade
    gameData.resonance += choice.resonanceChange;
    gameData.resonance = Math.max(0, Math.min(100, gameData.resonance));
    
    gameData.dataIntegrity += choice.integrityChange;
    gameData.dataIntegrity = Math.max(gameConfig.minIntegrity, Math.min(gameConfig.maxIntegrity, gameData.dataIntegrity));
    
    // Atualizar contador de fragmentos
    gameData.currentFragment++;
    
    // Efeitos de som
    playSound(choice.resonanceChange > 0 ? 'positive' : 'negative');
    
    // Atualizar UI
    updateUI();
    updateProgress();
    
    // Adicionar log do comando executado
    addCommandLog(choice.text);
    
    // Verificar se é um final
    if (choice.nextFragment.startsWith('end_')) {
        setTimeout(() => {
            showEnding(choice.nextFragment.replace('end_', ''));
        }, 1500);
        return;
    }
    
    // Encontrar próximo fragmento
    setTimeout(() => {
        const nextFragment = gameData.fragments.find(f => f.id === choice.nextFragment);
        if (nextFragment) {
            showFragment(nextFragment);
        }
    }, 1500);
}

// ===== ADICIONAR LOG DE COMANDO =====
function addCommandLog(commandText) {
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    logEntry.innerHTML = `[${getCurrentTime()}] <span class="command-log">EXEC: ${commandText}</span>`;
    elements.terminalBody.appendChild(logEntry);
    scrollTerminalToBottom();
}

// ===== MOSTRAR INDICADOR DE RECONSTRUÇÃO =====
function showReconstructionIndicator() {
    elements.typingIndicator.style.display = 'block';
    
    // Animar dots
    const dots = elements.typingIndicator.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.style.animation = 'dot-blink 1.4s infinite';
    });
}

// ===== ESCONDER INDICADOR DE RECONSTRUÇÃO =====
function hideReconstructionIndicator() {
    elements.typingIndicator.style.display = 'none';
}

// ===== ATUALIZAR UI =====
function updateUI() {
    elements.resonanceValue.textContent = `Ressonância: ${gameData.resonance}%`;
    elements.sceneCounter.textContent = `Fragmento ${Math.min(gameData.currentFragment + 1, gameData.maxFragments)}/${gameData.maxFragments}`;
    elements.dataIntegrity.textContent = `Integridade: ${gameData.dataIntegrity}%`;
    
    // Efeito visual na ressonância
    if (gameData.resonance > 0) {
        elements.resonanceValue.parentElement.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.5)';
        setTimeout(() => {
            elements.resonanceValue.parentElement.style.boxShadow = '';
        }, 1000);
    }
    
    // Atualizar cor da integridade
    if (gameData.dataIntegrity < 50) {
        elements.dataIntegrity.style.color = 'var(--thorn-danger)';
    } else if (gameData.dataIntegrity < 75) {
        elements.dataIntegrity.style.color = 'var(--thorn-warning)';
    } else {
        elements.dataIntegrity.style.color = 'var(--thorn-success)';
    }
}

// ===== ATUALIZAR BARRA DE PROGRESSO =====
function updateProgress() {
    const progress = ((gameData.currentFragment + 1) / gameData.maxFragments) * 100;
    elements.progressFill.style.width = `${Math.min(progress, 100)}%`;
    
    // Efeito de brilho
    elements.progressFill.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.5)';
    setTimeout(() => {
        elements.progressFill.style.boxShadow = '';
    }, 500);
}

// ===== ATUALIZAR INTEGRIDADE DOS DADOS =====
function updateDataIntegrity(newIntegrity) {
    gameData.dataIntegrity = newIntegrity;
    elements.dataIntegrity.textContent = `Integridade: ${gameData.dataIntegrity}%`;
    
    // Adicionar log de sistema se integridade baixa
    if (gameData.dataIntegrity < 50) {
        addSystemLog("[WARNING] Integridade de dados abaixo de 50%");
    }
}

// ===== MOSTRAR FINAL =====
function showEnding(type) {
    const ending = gameData.endings[type];
    
    if (!ending) return;
    
    // Determinar nível de reconstrução
    gameData.reconstructionLevel = ending.reconstructionLevel;
    
    // Atualizar modal
    elements.endingTitle.textContent = ending.title;
    elements.endingSubtitle.textContent = ending.subtitle;
    elements.endingText.textContent = ending.text;
    elements.endingIcon.innerHTML = `<i class="fas ${ending.icon}"></i>`;
    elements.endingIcon.style.color = ending.color;
    
    // Animar barra de ressonância
    setTimeout(() => {
        elements.finalAffinityBar.style.width = `${gameData.resonance}%`;
    }, 500);
    
    elements.finalAffinity.textContent = `${gameData.resonance}%`;
    elements.totalChoices.textContent = `${gameData.choicesMade}/${gameData.maxFragments}`;
    elements.endingType.textContent = gameData.reconstructionLevels[gameData.reconstructionLevel];
    
    // Preencher log de reconstrução
    elements.reconstructionLog.innerHTML = '';
    ending.logEntries.forEach(entry => {
        const logEntry = document.createElement('div');
        logEntry.textContent = entry;
        elements.reconstructionLog.appendChild(logEntry);
    });
    
    // Mostrar modal com efeito
    setTimeout(() => {
        elements.endingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Efeito de glitch final
        triggerFinalGlitch();
        
        // Adicionar mensagem final ao terminal
        addFinalMessageToTerminal(ending);
    }, 1000);
}

// ===== ADICIONAR MENSAGEM FINAL AO TERMINAL =====
function addFinalMessageToTerminal(ending) {
    const finalDiv = document.createElement('div');
    finalDiv.className = 'log-entry timestamp';
    finalDiv.textContent = `[${getCurrentTime()}] TRANSMISSÃO FINALIZADA`;
    elements.terminalBody.appendChild(finalDiv);
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message character fragment';
    messageDiv.innerHTML = `
        <div class="message-meta">
            <span class="sender">SYSTEM</span>
            <span class="code">END-${gameData.reconstructionLevels[gameData.reconstructionLevel].replace(' ', '_')}</span>
            <span class="timestamp">${getCurrentTime()}</span>
        </div>
        <div class="message-content">
            <p class="text">${ending.text}</p>
            <div class="message-footer">
                <span class="location">[TRANSMISSION TERMINATED]</span>
                <span class="integrity">Reconstrução: Nível ${gameData.reconstructionLevel}</span>
            </div>
        </div>
    `;
    elements.terminalBody.appendChild(messageDiv);
    
    scrollTerminalToBottom();
}

// ===== ATUALIZAR STATUS DE CONEXÃO =====
function updateConnectionStatus() {
    if (gameState.connectionActive) {
        elements.statusDot.style.background = 'linear-gradient(135deg, var(--thorn-accent), var(--thorn-accent-alt))';
        elements.statusDot.style.animation = 'pulse-thorn 2s infinite, color-shift 3s infinite alternate';
    } else {
        elements.statusDot.style.background = 'var(--thorn-danger)';
        elements.statusDot.style.animation = 'none';
    }
}

// ===== INICIAR MONITORAMENTO DO SISTEMA =====
function startSystemMonitoring() {
    // Adicionar mensagens de sistema periódicas
    setInterval(() => {
        if (gameState.connectionActive && !gameState.transmissionQueued) {
            const messages = [
                "[SYSTEM] Sinal estável",
                "[NEXUS] Conexão persistente",
                "[SECURITY] Sem intrusões detectadas",
                "[DATA] Fragmentos sendo reconstruídos"
            ];
            
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            addSystemLog(randomMessage);
        }
    }, 15000);
    
    // Simular flutuações na conexão
    setInterval(() => {
        if (gameState.connectionActive && Math.random() > 0.7) {
            const fluctuations = [
                { message: "[WARNING] Flutuação no sinal detectada", integrity: -2 },
                { message: "[SYSTEM] Ruído de fundo aumentando", integrity: -1 },
                { message: "[NEXUS] Pacote de dados recuperado", integrity: +1 }
            ];
            
            const fluctuation = fluctuations[Math.floor(Math.random() * fluctuations.length)];
            addSystemLog(fluctuation.message);
            gameData.dataIntegrity += fluctuation.integrity;
            gameData.dataIntegrity = Math.max(gameConfig.minIntegrity, gameData.dataIntegrity);
            updateUI();
        }
    }, 10000);
}

// ===== ADICIONAR LOG DO SISTEMA =====
function addSystemLog(message) {
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry system';
    logEntry.textContent = `[${getCurrentTime()}] ${message}`;
    elements.terminalBody.appendChild(logEntry);
    scrollTerminalToBottom();
}

// ===== ROLAR TERMINAL PARA BAIIXO =====
function scrollTerminalToBottom() {
    elements.terminalBody.scrollTop = elements.terminalBody.scrollHeight;
}

// ===== OBTER HORA ATUAL =====
function getCurrentTime() {
    const now = new Date();
    return now.toTimeString().split(' ')[0];
}

// ===== CONFIGURAR EVENT LISTENERS =====
function setupEventListeners() {
    // Botão de reinício
    elements.restartBtn.addEventListener('click', () => {
        playSound('restart');
        elements.restartBtn.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            elements.restartBtn.style.transform = '';
            resetGameData();
            startTransmission();
        }, 300);
    });
    
    // Modal controls
    elements.closeModal.addEventListener('click', () => {
        elements.endingModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        playSound('close');
    });
    
    elements.restartMainBtn.addEventListener('click', () => {
        elements.endingModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            resetGameData();
            startTransmission();
        }, 300);
    });
    
    elements.shareBtn.addEventListener('click', shareResults);
    elements.archiveBtn.addEventListener('click', archiveResults);
    
    // Comando de linha (para futuras expansões)
    elements.sendCommand.addEventListener('click', processCommandInput);
    elements.commandInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            processCommandInput();
        }
    });
}

// ===== PROCESSAR INPUT DE COMANDO =====
function processCommandInput() {
    const command = elements.commandInput.value.trim();
    if (!command) return;
    
    // Adicionar comando ao terminal
    const commandLog = document.createElement('div');
    commandLog.className = 'log-entry';
    commandLog.innerHTML = `<span class="prompt">nexus@thorn-echo:~$</span> ${command}`;
    elements.terminalBody.appendChild(commandLog);
    
    // Processar comandos básicos
    const response = processSystemCommand(command);
    
    // Adicionar resposta
    const responseLog = document.createElement('div');
    responseLog.className = 'log-entry system';
    responseLog.textContent = response;
    elements.terminalBody.appendChild(responseLog);
    
    // Limpar input
    elements.commandInput.value = '';
    
    scrollTerminalToBottom();
    playSound('command');
}

// ===== PROCESSAR COMANDOS DO SISTEMA =====
function processSystemCommand(command) {
    const cmd = command.toLowerCase();
    
    if (cmd === 'help' || cmd === '?') {
        return "[SYSTEM] Comandos disponíveis: status, integrity, resonance, clear, help";
    } else if (cmd === 'status') {
        return `[SYSTEM] Status: ${gameState.connectionActive ? 'ATIVO' : 'INATIVO'} | Fragmento: ${gameData.currentFragment + 1}/${gameData.maxFragments}`;
    } else if (cmd === 'integrity') {
        return `[DATA] Integridade atual: ${gameData.dataIntegrity}%`;
    } else if (cmd === 'resonance') {
        return `[CONNECTION] Ressonância: ${gameData.resonance}%`;
    } else if (cmd === 'clear') {
        const logs = elements.terminalBody.querySelectorAll('.log-entry, .message');
        logs.forEach(log => {
            if (!log.classList.contains('timestamp') && !log.classList.contains('system')) {
                log.remove();
            }
        });
        return "[SYSTEM] Terminal limpo";
    } else {
        return `[ERROR] Comando não reconhecido: ${command}`;
    }
}

// ===== COMPARTILHAR RESULTADOS =====
function shareResults() {
    const shareText = `Reconstruí o Eco de Kaelen Thorne! Ressonância: ${gameData.resonance}% | Estado: ${gameData.reconstructionLevels[gameData.reconstructionLevel]} | Integridade: ${gameData.dataIntegrity}%`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Fragmentos do Eco - Kaelen Thorne',
            text: shareText,
            url: window.location.href
        });
    } else if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText).then(() => {
            // Feedback visual
            const originalText = elements.shareBtn.innerHTML;
            elements.shareBtn.innerHTML = '<i class="fas fa-check"></i><span>Copiado!</span>';
            elements.shareBtn.style.background = 'rgba(46, 204, 113, 0.3)';
            
            setTimeout(() => {
                elements.shareBtn.innerHTML = originalText;
                elements.shareBtn.style.background = '';
            }, 2000);
        });
    }
}

// ===== ARQUIVAR RESULTADOS =====
function archiveResults() {
    // Simular arquivamento
    const archiveData = {
        timestamp: new Date().toISOString(),
        resonance: gameData.resonance,
        reconstructionLevel: gameData.reconstructionLevel,
        integrity: gameData.dataIntegrity,
        choices: gameData.choicesMade,
        fragments: gameData.currentFragment + 1
    };
    
    localStorage.setItem('thorne_archive', JSON.stringify(archiveData));
    
    // Feedback visual
    const originalText = elements.archiveBtn.innerHTML;
    elements.archiveBtn.innerHTML = '<i class="fas fa-check"></i><span>Arquivado!</span>';
    elements.archiveBtn.style.background = 'rgba(155, 89, 182, 0.3)';
    
    setTimeout(() => {
        elements.archiveBtn.innerHTML = originalText;
        elements.archiveBtn.style.background = '';
    }, 2000);
    
    playSound('archive');
}

// ===== EFEITO DE GLITCH FINAL =====
function triggerFinalGlitch() {
    const glitchOverlay = document.querySelector('.glitch-overlay');
    glitchOverlay.style.opacity = '0.1';
    glitchOverlay.style.animation = 'none';
    
    setTimeout(() => {
        glitchOverlay.style.animation = 'glitch-bg 0.5s steps(2, end) infinite';
    }, 100);
    
    setTimeout(() => {
        glitchOverlay.style.opacity = '0.03';
        glitchOverlay.style.animation = 'glitch-bg 20s infinite linear';
    }, 1000);
}

// ===== EFEITOS DE SOM (placeholder) =====
function playSound(type) {
    // Implementação básica de efeitos sonoros
    const sounds = {
        hover: () => console.log("[AUDIO] Hover sound"),
        positive: () => console.log("[AUDIO] Positive choice"),
        negative: () => console.log("[AUDIO] Negative choice"),
        restart: () => console.log("[AUDIO] Restart sound"),
        close: () => console.log("[AUDIO] Close sound"),
        command: () => console.log("[AUDIO] Command executed"),
        archive: () => console.log("[AUDIO] Archive sound")
    };
    
    if (sounds[type]) {
        sounds[type]();
    }
}

// ===== INICIAR SISTEMA QUANDO A PÁGINA CARREGAR =====
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar mensagem de sistema inicial
    setTimeout(() => {
        addSystemLog("[SYSTEM] Inicializando Protocolo Ghost...");
    }, 500);
    
    setTimeout(() => {
        initializeSystem();
    }, 1000);
});

// ===== CSS DINÂMICO PARA EFEITOS =====
const dynamicCSS = `
@keyframes fragment-appear {
    0% { 
        opacity: 0;
        transform: translateY(5px);
    }
    100% { 
        opacity: 1;
        transform: translateY(0);
    }
}

.command-log {
    color: var(--thorn-success);
    font-weight: bold;
}

.prompt {
    color: var(--thorn-success);
    margin-right: 10px;
}
`;

const styleElement = document.createElement('style');
styleElement.textContent = dynamicCSS;
document.head.appendChild(styleElement);
