let currentQuestion = 0;
let answers = [];
let questions = [];
let archetypes = {};

// Load data from HTML
function loadData() {
    // Load questions
    const questionElements = document.querySelectorAll('.question-data');
    questions = Array.from(questionElements).map(qEl => {
        const type = qEl.getAttribute('data-type');
        const questionText = qEl.querySelector('.question-text').textContent;
        const optionElements = qEl.querySelectorAll('.option-data');
        
        const options = Array.from(optionElements).map(optEl => ({
            text: optEl.getAttribute('data-text'),
            value: optEl.getAttribute('data-value'),
            emoji: optEl.getAttribute('data-emoji') || ''
        }));
        
        return { question: questionText, type, options };
    });
    
    // Load archetypes
    const archetypeElements = document.querySelectorAll('.archetype');
    archetypeElements.forEach(archEl => {
        const id = archEl.getAttribute('data-id');
        const name = archEl.querySelector('.archetype-name').textContent;
        const description = archEl.querySelector('.archetype-description').textContent;
        
        const matchElements = archEl.querySelectorAll('.match');
        const matches = Array.from(matchElements).map(matchEl => ({
            name: matchEl.querySelector('.match-name').textContent,
            type: matchEl.querySelector('.match-type').textContent,
            description: matchEl.querySelector('.match-description').textContent,
            highlight: matchEl.querySelector('.match-highlight').textContent
        }));
        
        archetypes[id] = { name, description, matches };
    });
}

// Initialize quiz
function startQuiz() {
    if (questions.length === 0) loadData();
    currentQuestion = 0;
    answers = [];
    showScreen('quiz-screen');
    displayQuestion();
}

// Display current question
function displayQuestion() {
    const question = questions[currentQuestion];
    
    document.getElementById('current-q').textContent = currentQuestion + 1;
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // Set grid layout based on question type
    if (question.type === 'image') {
        optionsContainer.className = 'options-grid two-column';
    } else {
        optionsContainer.className = 'options-grid single-column';
    }
    
    // Create option cards
    question.options.forEach((option, index) => {
        const card = document.createElement('div');
        card.className = question.type === 'image' ? 'option-card image-option' : 'option-card text-option';
        
        if (question.type === 'image') {
            card.innerHTML = `
                <div class="option-emoji">${option.emoji}</div>
                <div>${option.text}</div>
            `;
        } else {
            card.textContent = option.text;
        }
        
        card.onclick = () => selectOption(option.value, card);
        optionsContainer.appendChild(card);
    });
}

// Option selection
function selectOption(value, card) {
    // Visual feedback
    const allCards = document.querySelectorAll('.option-card');
    allCards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    
    // Store answer
    answers[currentQuestion] = value;
    
    // Move to next question after a short delay
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            calculateResults();
        }
    }, 300);
}

// Calculate results based on answers
function calculateResults() {
    const scores = {
        night_owl: 0,
        brunch_loyalist: 0,
        adventurous_eater: 0,
        comfort_seeker: 0,
        budget_king: 0
    };
    
    answers.forEach(answer => {
        switch(answer) {
            case 'night':
            case 'rowdy':
                scores.night_owl += 2;
                break;
            case 'brunch':
            case 'chill':
                scores.brunch_loyalist += 2;
                break;
            case 'adventurous':
                scores.adventurous_eater += 3;
                break;
            case 'comfort':
                scores.comfort_seeker += 2;
                break;
            case 'budget':
                scores.budget_king += 3;
                break;
            case 'moderate':
                scores.comfort_seeker += 1;
                break;
            case 'splurge':
                scores.adventurous_eater += 1;
                break;
            case 'alone':
                scores.comfort_seeker += 1;
                break;
            case 'date':
                scores.brunch_loyalist += 1;
                break;
            case 'friends':
                scores.night_owl += 1;
                break;
        }
    });
    
    // Find highest score
    let highestScore = 0;
    let resultType = 'comfort_seeker';
    
    for (let type in scores) {
        if (scores[type] > highestScore) {
            highestScore = scores[type];
            resultType = type;
        }
    }
    
    displayResults(resultType);
}

// Display results
function displayResults(type) {
    const archetype = archetypes[type];
    
    document.getElementById('archetype-name').textContent = archetype.name;
    document.getElementById('archetype-description').textContent = archetype.description;
    
    const matchesContainer = document.getElementById('matches-container');
    matchesContainer.innerHTML = '';
    
    archetype.matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        matchCard.innerHTML = `
            <h4>${match.name}</h4>
            <div class="match-type">${match.type}</div>
            <p>${match.description}</p>
            <p class="match-highlight">${match.highlight}</p>
        `;
        matchesContainer.appendChild(matchCard);
    });
    
    showScreen('results-screen');
}

// Screen navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Action buttons
function shareResults() {
    const archetypeName = document.getElementById('archetype-name').textContent;
    const text = `I'm ${archetypeName}! Find out your East Village eating personality.`;
    
    if (navigator.share) {
        navigator.share({
            title: 'East Village Compatibility Test',
            text: text
        });
    } else {
        alert('Share this: ' + text);
    }
}

function restartQuiz() {
    startQuiz();
}

function takeForFriend() {
    if (confirm('Start a new quiz for a friend?')) {
        startQuiz();
    }
}