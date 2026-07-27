import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Command } from 'lucide-react';
import '../../aegis-chat.css';

type Message = {
  id: string;
  sender: 'system' | 'user';
  text: string;
};

export const AegisChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'system',
      text: 'AEGIS Oracle online. How can I assist you with fleet telemetry or policy governance today?',
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue,
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');

    // Mock response logic
    setTimeout(() => {
      const responses = [
        "Querying fleet telemetry...",
        "Simulating policy impact across 14,204 active agents.",
        "I have flagged 3 borderline transactions in the Constitutional Court.",
        "Z3 Theorem Prover confirms this state is cryptographically sound.",
        "Adjusting global spend throttle to $8,500,000.",
        "Web Application Firewall rules have been successfully propagated."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const newSystemMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'system',
        text: randomResponse,
      };
      setMessages(prev => [...prev, newSystemMsg]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="aegis-chat-widget">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chat-window"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="chat-header">
              <div className="chat-title-group">
                <div className="chat-avatar">
                  <Bot size={16} color="#F8FAFC" />
                </div>
                <div>
                  <div className="chat-title">AEGIS Oracle</div>
                  <div className="chat-subtitle">AI GOVERNANCE COPILOT</div>
                </div>
              </div>
              <button className="chat-close" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="chat-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-msg ${msg.sender}`}>
                  <span className="msg-sender">{msg.sender === 'system' ? 'AEGIS' : 'OPERATOR'}</span>
                  <div className="msg-bubble">{msg.text}</div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="chat-input-area">
              <div className="chat-input-container">
                <input 
                  type="text" 
                  className="chat-input"
                  placeholder="Issue command or ask a question..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
                <button className="chat-send" onClick={handleSend}>
                  <Send size={14} color="#F8FAFC" style={{ marginLeft: '-2px' }} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X color="#F8FAFC" /> : <Command color="#F8FAFC" size={24} />}
      </div>
    </div>
  );
};
