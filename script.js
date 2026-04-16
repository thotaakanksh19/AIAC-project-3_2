// Get DOM elements
const chatArea = document.getElementById('chat-area');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const clearButton = document.getElementById('clear-button');

// Function to get response based on keywords
function getResponse(userText) {
    const lower = userText.toLowerCase();
    if (lower.includes('fee') || lower.includes('cost') || lower.includes('price')) {
        return "The fee structure varies by course:\n- B.Tech: ₹80,000 – ₹1,20,000 per year\n- MBA: ₹1,50,000 per year\n- Degree Courses: ₹30,000 – ₹60,000 per year\nScholarships are available for merit students and financially weaker sections.";
    }
    if (lower.includes('course') || lower.includes('offered') || lower.includes('program')) {
        return "Here are all the courses offered at our college:\n\nUndergraduate Courses:\n• B.Tech (Computer Science & Engineering)\n• B.Tech (Electronics & Communication Engineering)\n• B.Tech (Electrical & Electronics Engineering)\n• B.Tech (Mechanical Engineering)\n• BBA (Bachelor of Business Administration)\n• B.Sc (Bachelor of Science)\n\nPostgraduate Courses:\n• M.Tech (Master of Technology)\n• MBA (Master of Business Administration)\n• MCA (Master of Computer Applications)\n\nDiploma & Certification Courses:\n• Diploma in Engineering\n• Various certification programs in emerging technologies\n\nFor detailed syllabus and admission requirements, please visit our website or contact the admission office.";
    }
    if (lower.includes('admission') || lower.includes('apply') || lower.includes('enroll')) {
        return "Admissions for the academic year begin in June. Students can apply online through the college website or offline by visiting the admission office. Required documents include 10th and 12th mark sheets, transfer certificate, ID proof, and passport-size photographs. Some courses require entrance exam scores.";
    }
    if (lower.includes('timing') || lower.includes('holiday') || lower.includes('schedule')) {
        return "College Timings:\n- Monday to Friday: 9:00 AM – 4:00 PM\n- Saturday: 9:00 AM – 1:00 PM\n\nHolidays include:\n- Sundays\n- National holidays (Independence Day, Republic Day)\n- Festival holidays (Diwali, Pongal, etc.)\n- Semester breaks as per academic calendar";
    }
    if (lower.includes('contact') || lower.includes('phone') || lower.includes('email') || lower.includes('address')) {
        return "Contact Information:\nPhone: +91 6309798982\nEmail: helpdesk@college.edu\nAddress: SR University Campus, Warangal, Telangana\nOffice Hours: Monday to Friday, 9 AM – 5 PM";
    }
    if (lower.includes('scholarship') || lower.includes('financial aid') || lower.includes('aid')) {
        return "Scholarships are available for merit students and financially weaker sections. Contact the admission office for application details and eligibility.";
    }
    if (lower.includes('entrance') || lower.includes('exam') || lower.includes('test')) {
        return "Some courses require entrance exam scores. Check the college website or admission office for specific exam details and preparation resources.";
    }
    if (lower.includes('facility') || lower.includes('infrastructure') || lower.includes('campus')) {
        return "The campus includes modern classrooms, well-equipped labs, a library, sports facilities, cafeteria, and hostel accommodations for students.";
    }
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('help') || lower.includes('start')) {
        return "Hello! I'm the college helpdesk chatbot. Ask me about admissions, fees, courses, campus facilities, scholarships, or contact details.";
    }
    if (lower.includes('bye') || lower.includes('goodbye') || lower.includes('see you')) {
        return "Goodbye! If you have more questions, feel free to come back anytime.";
    }
    if (lower.includes('thank') || lower.includes('thanks')) {
        return "You're welcome! Is there anything else I can help you with?";
    }
    return "I'm sorry, I can only answer questions about admissions, fees, courses, campus, scholarships, and contact info. Please ask about those topics.";
}

// Async function to send user message and get bot response
async function sendMessage(userText = null) {
    const inputBox = messageInput;
    const chatBox = chatArea;

    let text = userText || inputBox.value.trim();

    if (!text) return; // Don't send empty messages

    // Display user message
    chatBox.innerHTML += `<div class="message user">${text}</div>`;

    inputBox.value = "";

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Add typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot typing';
    typingDiv.textContent = 'Bot is typing';
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate delay for typing
    setTimeout(() => {
        // Get response
        const botReply = getResponse(text);

        // Remove typing indicator
        chatBox.removeChild(typingDiv);

        // Display bot response
        chatBox.innerHTML += `<div class="message bot">${botReply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000); // 1 second delay
}

// Event listeners
sendButton.addEventListener('click', () => {
    sendMessage();
});

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Clear chat
clearButton.addEventListener('click', () => {
    chatArea.innerHTML = `
        <div class="message bot">Hello! How can I help you today?</div>
        <div class="message user">Hi, I'm looking for information.</div>
        <div class="message bot">Sure, what would you like to know?</div>
    `;
});