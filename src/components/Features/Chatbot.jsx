import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, X, User, MessageCircle } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm Nikesh's AI assistant. I can tell you everything about Nikesh Sahoo - his education, skills, projects, and more. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Nikesh's information database
  const nikeshInfo = {
    personal: {
      name: "Nikesh Sahoo",
      education: "Final year B.Tech student at Lovely Professional University",
      specialization: "Computer Science and Engineering",
      location: "India",
      email: "nikeshsahoo@gmail.com",
      passion: "Web development and creating intuitive user experiences"
    },
    skills: {
      fullstack: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Material-UI", "Bootstrap", "Node.js", "Express.js", "MongoDB", "Firebase"],
      tools: ["Git & GitHub", "VS Code", "Vite", "Webpack", "npm/yarn"],
      additional: ["RESTful APIs", "Firebase", "Responsive Design", "Performance Optimization", "Cross-browser Compatibility", "SEO Best Practices", "Accessibility (WCAG)", "Progressive Web Apps"]
    },
    experience: {
      years: "Fresher",
      focus: "Full Stack development and modern web technologies",
      projects: "Multiple portfolio projects and web applications"
    },
    interests: ["Web Development","Data Science", "UI/UX Design", "Modern Technologies", "Problem Solving", "Continuous Learning"]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn about Nikesh Sahoo. What would you like to know?";
    }
    
    if (message.includes('name') || message.includes('who')) {
      return `Nikesh Sahoo is a final year B.Tech student at Lovely Professional University, specializing in Computer Science and Engineering. He's passionate about web development and creating modern, responsive web applications.`;
    }
    
    if (message.includes('education') || message.includes('study') || message.includes('university')) {
      return `Nikesh is currently a final year B.Tech student at Lovely Professional University, pursuing Computer Science and Engineering. He's dedicated to learning modern web technologies and best practices.`;
    }
    
    if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
      return `Nikesh's technical skills include:
• Full Stack: React.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Material-UI, Bootstrap, Node.js, Express.js, MongoDB, Firebase
• Tools: Git & GitHub, VS Code, Vite, Webpack, npm/yarn, ESLint
• Additional: RESTful APIs, Firebase, Responsive Design, Performance Optimization, Cross-browser Compatibility, SEO, Accessibility, Progressive Web Apps`;
    }
    
    if (message.includes('experience') || message.includes('work') || message.includes('project')) {
      return `Nikesh has 2+ years of experience in full stack development, focusing on modern web technologies. He has worked on multiple portfolio projects and web applications, demonstrating his skills in React.js, Node.js, responsive design, and modern development practices.`;
    }
    
    if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
      return `You can reach Nikesh at nikeshsahoo@gmail.com. He's always open to new opportunities and collaborations in web development!`;
    }
    
    if (message.includes('interest') || message.includes('hobby') || message.includes('passion')) {
      return `Nikesh is passionate about web development, UI/UX design, modern technologies, problem solving, and continuous learning. He enjoys staying updated with the latest trends in full stack development.`;
    }
    
    if (message.includes('react') || message.includes('javascript')) {
      return `Nikesh is proficient in React.js and JavaScript. He uses these technologies to build modern, interactive web applications with responsive design and optimal performance.`;
    }
    
    if (message.includes('portfolio') || message.includes('project')) {
      return `Nikesh has worked on various projects including this portfolio website, which showcases his skills in React.js, Tailwind CSS, and modern web development practices. He's always working on new projects to enhance his skills.`;
    }
    
    if (message.includes('thank')) {
      return "You're welcome! Feel free to ask me anything else about Nikesh. I'm here to help!";
    }
    
    return `I'm not sure about that specific question, but I can tell you about Nikesh's education, skills, experience, projects, or contact information. What would you like to know?`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateResponse(inputValue);
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chatbot Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Nikesh's AI Assistant</h3>
                <p className="text-xs text-gray-400">Ask me anything about Nikesh</p>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 h-64 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white'
                      : 'bg-white/10 text-white border border-white/20'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-white border border-white/20 p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Nikesh..."
                className="flex-1 bg-white/10 text-white placeholder-gray-400 rounded-xl px-4 py-2 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white p-2 rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot; 