// Shuffle function to randomize the order of the answers
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // Swap elements
    }
    return array;
}

// Questions for Kids (Under 10)
let questionsForKids = [
    {
        question: "You see a post that says, 'Eating too many carrots will turn you orange!' Should you believe it?",
        options: [
            { text: "Yes, because the post has a picture of a carrot.", correct: false },
            { text: "No, it's a silly rumor. Eating carrots doesn't turn you orange.", correct: true },
            { text: "Yes, because everyone says it's true.", correct: false }
        ],
        tip: "Not everything you see online is true, even if it has a picture! Always check facts before believing them."
    },
    {
        question: "A meme says, 'All sharks are friendly.' What should you do?",
        options: [
            { text: "Believe it, because memes are funny and true.", correct: false },
            { text: "Check if the meme is from a reliable source.", correct: true },
            { text: "It must be true because it’s funny!", correct: false }
        ],
        tip: "Memes are made for fun, not for spreading facts. Check the sources before you believe them."
    },
    {
        question: "A friend posts that they found a treasure chest on the beach. Is it true?",
        options: [
            { text: "Yes, because they are your friend and you trust them.", correct: false },
            { text: "No, it could be a prank or made-up story. Always ask for proof!", correct: true },
            { text: "Yes, because treasure chests are real and everywhere!", correct: false }
        ],
        tip: "Friends might not always post the full truth. Ask for more information and proof before believing it."
    },
    {
        question: "You see a picture of a cat that says, 'Cats can talk like humans!' Should you believe it?",
        options: [
            { text: "Yes, because the cat is cute!", correct: false },
            { text: "No, cats can’t talk like humans. It’s a joke.", correct: true },
            { text: "Yes, because cats are magical creatures.", correct: false }
        ],
        tip: "Just because something is cute doesn’t mean it’s true! Always check the facts, especially when it sounds unbelievable."
    },
    {
        question: "An ad pops up saying, 'Get a free iPhone if you share this post!' Is it real?",
        options: [
            { text: "Yes, because it’s a free gift!", correct: false },
            { text: "No, it’s likely a scam. Companies don’t give away phones for free.", correct: true },
            { text: "Yes, because it’s too good to pass up!", correct: false }
        ],
        tip: "Free gifts are often used to trick people into giving away personal information. Always be cautious with ads and offers."
    },
    {
        question: "You see a post saying, 'The moon is made of cheese.' Is it true?",
        options: [
            { text: "Yes, because it sounds funny.", correct: false },
            { text: "No, the moon is made of rock, not cheese.", correct: true },
            { text: "Yes, because it’s on the internet.", correct: false }
        ],
        tip: "Be careful of silly statements that sound funny. Always check facts and scientific evidence!"
    },
    {
        question: "A meme says, 'All superheroes wear capes.' Should you believe it?",
        options: [
            { text: "Yes, because all superheroes are the same.", correct: false },
            { text: "No, not all superheroes wear capes. Some might have different powers.", correct: true },
            { text: "Yes, because it’s in the meme.", correct: false }
        ],
        tip: "Memes are fun, but they often simplify things. Don’t believe everything you see in them!"
    },
    {
        question: "A friend tells you that their new pet rabbit can do tricks. Should you believe it?",
        options: [
            { text: "Yes, because rabbits are very smart.", correct: false },
            { text: "No, rabbits are cute, but they can't do tricks like dogs.", correct: true },
            { text: "Yes, because rabbits can learn tricks if you train them.", correct: false }
        ],
        tip: "Animals are amazing, but be cautious of stories that sound too good to be true."
    },
    {
        question: "A post on social media says, 'Drinking soda every day makes you super strong!' Is this true?",
        options: [
            { text: "Yes, because it sounds exciting!", correct: false },
            { text: "No, drinking soda every day can be harmful to your health.", correct: true },
            { text: "Yes, because soda makes you feel happy!", correct: false }
        ],
        tip: "Be careful with posts that make things sound too good. Health claims should come from **trusted sources**."
    },
    {
        question: "You see a post saying, 'The Earth is flat.' Should you believe it?",
        options: [
            { text: "Yes, because it’s something new!", correct: false },
            { text: "No, the Earth is round. This is a common myth.", correct: true },
            { text: "Yes, because it’s on the internet.", correct: false }
        ],
        tip: "Just because something is online doesn’t mean it’s true. Always **verify facts** before believing them!"
    }
];

// Questions for Teens (10–18 years old)
let questionsForTeens = [
    // Same pattern, but more complex questions based on social media and critical thinking
        {
        question: "A viral tweet says, 'If you don’t share this, something bad will happen to you!' Should you share it?",
        options: [
            { text: "Yes, because everyone is sharing it.", correct: false },
            { text: "No, it’s just a superstition designed to scare you.", correct: true },
            { text: "Yes, because it’s trending.", correct: false }
        ],
        tip: "Superstitions often spread on social media. Don’t share posts that scare you into action!"
    },
    {
        question: "You see an Instagram story that says, 'I found a way to make $1000 in one day online!' Should you believe it?",
        options: [
            { text: "Yes, because it sounds exciting and easy.", correct: false },
            { text: "No, it’s probably a scam or exaggeration.", correct: true },
            { text: "Yes, because a popular influencer posted it.", correct: false }
        ],
        tip: "Online money-making schemes are often scams. Always check for **reliable** sources before believing them."
    },
    {
        question: "A meme says, 'Humans only use 10% of their brain.' Should you believe this?",
        options: [
            { text: "Yes, because it sounds interesting.", correct: false },
            { text: "No, it’s a myth. We use all parts of our brain.", correct: true },
            { text: "Yes, because it’s on the internet.", correct: false }
        ],
        tip: "Just because something sounds exciting doesn’t make it true. Always **verify** the facts."
    },
    {
        question: "An article says, 'The world is ending tomorrow. Scientists found a huge asteroid heading towards Earth.' What should you do?",
        options: [
            { text: "Panic and share the news immediately!", correct: false },
            { text: "Check trusted news sources to see if it’s true.", correct: true },
            { text: "Ignore it because it sounds fake.", correct: false }
        ],
        tip: "Before believing wild claims, check **reputable news sources** for verification."
    },
    {
        question: "You see a post that says, 'Drinking 5 cups of coffee every day will make you immortal.' Should you believe it?",
        options: [
            { text: "Yes, because coffee is good for you!", correct: false },
            { text: "No, this is not scientifically supported.", correct: true },
            { text: "Yes, because it has a lot of likes and comments.", correct: false }
        ],
        tip: "Just because something is popular doesn’t mean it’s true. Always look for **scientific evidence**."
    },
    {
        question: "A friend sends you a link to an article claiming, 'AI will replace all jobs by 2040.' Should you believe it?",
        options: [
            { text: "Yes, AI is already replacing jobs.", correct: false },
            { text: "No, AI might change some jobs, but humans are still needed for many roles.", correct: true },
            { text: "Yes, because the article is from a tech website.", correct: false }
        ],
        tip: "AI is powerful, but it’s not likely to **replace all jobs**. Check for more **balanced views**."
    },
    {
        question: "You come across a tweet that says, 'If you don't forward this message, something bad will happen.' Should you forward it?",
        options: [
            { text: "Yes, because it’s better to be safe than sorry.", correct: false },
            { text: "No, it’s a common tactic to manipulate people into sharing.", correct: true },
            { text: "Yes, because your friends might find it useful.", correct: false }
        ],
        tip: "Forwarding these types of messages only helps **spread misinformation**. Think before you share!"
    },
    {
        question: "A meme says, 'This product will change your life!' Should you buy it?",
        options: [
            { text: "Yes, because the meme is convincing.", correct: false },
            { text: "No, memes are designed to entertain, not inform. Research the product first.", correct: true },
            { text: "Yes, because everyone in your feed is talking about it.", correct: false }
        ],
        tip: "Don’t let memes influence your decisions. **Research** products and reviews before purchasing!"
    },
    {
        question: "A YouTube video claims, 'This app will make you rich overnight.' Should you download it?",
        options: [
            { text: "Yes, because it sounds too good to miss.", correct: false },
            { text: "No, apps that promise quick wealth are often scams.", correct: true },
            { text: "Yes, because it has great reviews.", correct: false }
        ],
        tip: "Apps that promise instant wealth often **hide scams**. Always be cautious with financial apps."
    },
    {
        question: "You see a post saying, 'The world is flat, and NASA has been hiding the truth for years.' Should you believe it?",
            options: [
                { text: "Yes, because it sounds like a huge conspiracy.", correct: false },
                { text: "No, the Earth is round and this is a common myth.", correct: true },
                { text: "Yes, because it's a popular conspiracy theory.", correct: false }
            ],
            tip: "Conspiracy theories can spread easily. Always check **scientific facts** to separate truth from fiction."
        }
    ];

// Questions for Young Adults (18-24 years old)
let questionsForYoungAdults = [
    // Complex questions based on AI, fake news, and media literacy
    {
        question: "You see a trending article claiming that 'AI will soon be able to think like humans.' Is this true?",
        options: [
            { text: "Yes, AI is already smarter than humans.", correct: false },
            { text: "No, AI is still far from having human-like thoughts.", correct: true },
            { text: "Yes, AI will replace all human jobs soon.", correct: false }
        ],
        tip: "AI is great at solving problems, but it doesn’t have emotions or creativity like humans."
    },
    {
        question: "You see a viral post that says, 'There’s a secret government plan to control the weather.' Should you believe it?",
        options: [
            { text: "Yes, because the government controls everything.", correct: false },
            { text: "No, it sounds like a conspiracy theory. Check trusted sources.", correct: true },
            { text: "Yes, because it has a lot of likes and shares.", correct: false }
        ],
        tip: "Conspiracy theories often spread quickly on social media. Always look for facts and evidence before believing or sharing."
    },
    {
        question: "A website says, 'Get rich by investing in this new cryptocurrency!' Should you invest?",
        options: [
            { text: "Yes, because it sounds like a quick way to get rich.", correct: false },
            { text: "No, be cautious with investments and research thoroughly.", correct: true },
            { text: "Yes, because everyone is talking about it.", correct: false }
        ],
        tip: "Cryptocurrency is highly volatile. Always do thorough research and avoid risky investments."
    },
    {
        question: "A post on social media claims, 'Drinking green tea can cure all diseases.' Should you believe it?",
        options: [
            { text: "Yes, because green tea is healthy.", correct: false },
            { text: "No, no single food can cure all diseases. Always check scientific evidence.", correct: true },
            { text: "Yes, because it’s backed by a lot of social media posts.", correct: false }
        ],
        tip: "Claims like this are often exaggerated. It’s important to rely on evidence from trusted health sources."
    },
    {
        question: "You see a news article that says, 'AI is taking over the workforce.' Is this true?",
        options: [
            { text: "Yes, AI will replace all jobs in the next few years.", correct: false },
            { text: "No, AI is an assistant, not a replacement for most jobs.", correct: true },
            { text: "Yes, but only for tech-related jobs.", correct: false }
        ],
        tip: "AI is a tool that helps people, but it won't replace every job. People will always be needed for creativity, leadership, and decision-making."
    },
    {
        question: "You find an article saying, 'This supplement will make you live forever.' Should you trust it?",
        options: [
            { text: "Yes, because supplements can fix all health problems.", correct: false },
            { text: "No, always check for scientific research and FDA approval.", correct: true },
            { text: "Yes, because it’s backed by influencers.", correct: false }
        ],
        tip: "Don’t trust health claims without credible **scientific backing**. Always check the source!"
    },
    {
        question: "A meme says, 'All animals are equally intelligent.' Should you believe it?",
        options: [
            { text: "Yes, because all animals are smart in their own way.", correct: false },
            { text: "No, different species have different types of intelligence.", correct: true },
            { text: "Yes, because memes tell the truth.", correct: false }
        ],
        tip: "Animals are amazing, but their intelligence varies by species. Not everything in memes is scientifically accurate."
    },
    {
        question: "You see a post about a famous celebrity saying, 'I never eat anything unhealthy.' Is this believable?",
        options: [
            { text: "Yes, because celebrities are role models.", correct: false },
            { text: "No, everyone enjoys unhealthy foods sometimes.", correct: true },
            { text: "Yes, because they have perfect diets.", correct: false }
        ],
        tip: "Celebrities often show only the best parts of their lives. Remember, they are human, too."
    },
    {
        question: "You come across an article claiming, 'This technology will change the world overnight.' Should you believe it?",
        options: [
            { text: "Yes, because new technology is always revolutionary.", correct: false },
            { text: "No, changes take time. Check for detailed analysis.", correct: true },
            { text: "Yes, because the article is from a tech website.", correct: false }
        ],
        tip: "New technology often promises big changes, but real progress takes time. Look for in-depth, **trusted** reviews."
    },
    {
        question: "A post claims, 'This AI tool can solve all of your problems.' Should you trust it?",
        options: [
            { text: "Yes, AI can fix everything.", correct: false },
            { text: "No, AI can assist, but human judgment is still essential.", correct: true },
            { text: "Yes, because AI is flawless.", correct: false }
        ],
        tip: "AI is powerful, but it’s **not a magic solution**. Always use it in combination with human expertise."
    }
];

const questionHeaders = [
    // Teens (10 questions)
    "Every clue counts. Every answer is a lead. Let’s uncover the truth behind AI.",
    "A great detective never takes anything at face value. Question what you see, trust what you prove.",
    "The best detectives ask: ‘Is it true?’ and ‘How can I prove it?’ Are you ready to start the case?",
    "Logic is your best tool. Don’t follow the crowd — follow the evidence.",
    "To catch a mistake, you must first know how to spot the truth. Are you ready to investigate?",
    "Observe carefully. Every detail might hold a hidden clue.",
    "Curiosity is the first step to discovery. Question everything.",
    "Evidence doesn’t lie, but misinterpretation does. Check twice.",
    "A sharp mind sees patterns where others see chaos.",
    "Remember, in investigation, patience is as important as knowledge.",

    // Young Adults 18-24 (10 questions)
    "In the world of AI, assumptions are often wrong. Investigate thoroughly.",
    "A true detective tests the facts, not the rumors.",
    "Every anomaly is an opportunity to learn something new.",
    "Even the most believable statements can be false. Stay alert.",
    "Question the obvious; truth often hides in plain sight.",
    "Patterns tell stories. Analyze before you conclude.",
    "Trust your reasoning; verify the sources.",
    "Small inconsistencies can reveal a larger truth.",
    "Critical thinking turns data into insight.",
    "Every correct deduction is a step closer to the ultimate answer.",

    // Adults 25+ (10 questions)
    "Experience teaches that the first answer is rarely the correct one.",
    "Observation and logic together uncover hidden truths.",
    "Bias clouds judgment. Approach each clue neutrally.",
    "Verification is the backbone of a sound conclusion.",
    "Details matter. The smallest fact can change the outcome.",
    "Question assumptions, even those you consider obvious.",
    "A detective’s success depends on patience and careful analysis.",
    "The truth is often layered. Peel back each layer systematically.",
    "Evidence may be subtle, but it is never meaningless.",
    "Every investigation is a journey. Keep your eyes open."
];

let currentQuestionIndex = 0;
let questions = questionsForKids; // Default to kids' questions

function startGame(ageGroup) {
    document.querySelector('#intro-page').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';

    // Set the correct question set based on the age group
    if (ageGroup === 'kid') {
        questions = questionsForKids;
    } else if (ageGroup === 'teen') {
        questions = questionsForTeens;
    } else if (ageGroup === 'young-adult') {
        questions = questionsForYoungAdults;
    }

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestionIndex];
    let questionContainer = document.getElementById('question-container');
    let feedbackContainer = document.getElementById('feedback-container');
    let tipContainer = document.getElementById('tip-container');
    let questionHeaderContainer = document.getElementById('question-header');

    // Clear previous feedback
    feedbackContainer.innerHTML = "";
    tipContainer.innerHTML = "";

    // Show per-question header
    if (questionHeaders[currentQuestionIndex]) {
        questionHeaderContainer.innerHTML = `<p style="font-weight: normal; font-size: 16px; color: #202650; margin-bottom:10px;">${questionHeaders[currentQuestionIndex]}</p>`;
    }

    // Show question text
    questionContainer.innerHTML = `<p style="font-weight:bold; font-size: 20px; color:#202650;">${question.question}</p>`;

    // Shuffle the answer options
    let shuffledOptions = shuffleArray(question.options);

    let optionsHtml = '';
    shuffledOptions.forEach((option, index) => {
        optionsHtml += `<button onclick="checkAnswer(${index})">${option.text}</button>`;
    });

    questionContainer.innerHTML += optionsHtml;

    // Display the tip
    if (question.tip) {
        tipContainer.innerHTML = `<p>${question.tip}</p>`;
    }
}

function checkAnswer(selectedIndex) {
    let question = questions[currentQuestionIndex];
    let feedbackContainer = document.getElementById('feedback-container');
    let nextButton = document.getElementById('next-button');

    // Clear previous feedback
    feedbackContainer.innerHTML = "";

    let option = question.options[selectedIndex];

    if(option.isCorrect){
        feedbackContainer.innerHTML = `<p style="color:#427642;font-weight:bold;">Correct!</p>`;
        nextButton.disabled = false; // Enable Next button
    } else {
        feedbackContainer.innerHTML = `<p style="color:#ff4d4d;font-weight:bold;">Incorrect! Try again.</p>`;
        nextButton.disabled = true; // Keep Next disabled
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById('next-button').style.display = 'none';
    } else {
        finishGame();
    }
}

function finishGame() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('end-game').style.display = 'block';
}

function proceedToConsent() {
    document.getElementById('end-game').style.display = 'none';
    document.getElementById('consent-page').style.display = 'block';
}

function generateBadge() {
    let badgeImage = document.createElement('img');
    badgeImage.src = 'badge.png';  // Path to the badge image
    badgeImage.style.width = '100px';  // Set the width of the badge
    badgeImage.style.height = 'auto';  // Maintain aspect ratio

    document.getElementById('badge-section').style.display = 'block';
    document.getElementById('badge-section').appendChild(badgeImage);

    let downloadButton = document.getElementById('badge-download');
    downloadButton.href = 'badge.png';
    downloadButton.download = 'AI_Detective_Badge.png';
    downloadButton.innerHTML = 'Download Your Badge';
}
