"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Lead {
  email: string;
  name?: string;
  timestamp: string;
  source: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [emailError, setEmailError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Check if already unlocked (localStorage)
  useEffect(() => {
    const savedEmail = localStorage.getItem("expatbro_email");
    if (savedEmail) {
      setEmail(savedEmail);
      setIsUnlocked(true);
      setMessages([
        {
          role: "assistant",
          content: `Welcome back! 🌎 Ask me anything about moving to Mexico, Colombia, Venezuela, or Brazil.`,
        },
      ]);
    }
  }, []);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    // Save to localStorage
    localStorage.setItem("expatbro_email", email);
    if (name) localStorage.setItem("expatbro_name", name);

    // Send to API
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: name || undefined,
          source: "chat_widget",
        }),
      });
    } catch (error) {
      console.error("Failed to save lead:", error);
    }

    // Unlock chat
    setIsUnlocked(true);
    setMessages([
      {
        role: "assistant",
        content: `Thanks${name ? `, ${name}` : ""}! 🌎 I'm the Expat Bro AI. Ask me anything about moving to Mexico, Colombia, Venezuela, or Brazil.\n\nI can help with:\n• Cost of living\n• Best neighborhoods\n• Visa requirements\n• Safety info\n• Dating & social life\n• Banking setup\n\nWhat would you like to know?`,
      },
    ]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: messages.slice(-6),
          email,
        }),
      });

      const data = await response.json();

      if (data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, I had trouble with that. Try asking again!" },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Connection error. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-amber-500 hover:bg-amber-400 text-slate-900 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="Chat with AI"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-xl">
                🌎
              </div>
              <div>
                <h3 className="font-bold text-white">Expat Bro AI</h3>
                <p className="text-xs text-slate-400">Your LATAM relocation guide</p>
              </div>
            </div>
          </div>

          {!isUnlocked ? (
            /* Email Gate */
            <div className="flex-1 flex flex-col justify-center p-6">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🌎</div>
                <h3 className="text-xl font-bold text-white mb-2">Free AI Relocation Advisor</h3>
                <p className="text-slate-400 text-sm">
                  Get instant answers about moving to Mexico, Colombia, Venezuela, or Brazil. Enter your email to start chatting.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name (optional)"
                    className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    placeholder="Your email *"
                    className={`w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      emailError ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  {emailError && <p className="text-red-400 text-sm mt-1">{emailError}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 rounded-lg transition"
                >
                  Start Chatting →
                </button>
              </form>

              <p className="text-center text-slate-500 text-xs mt-4">
                We&apos;ll send occasional tips. Unsubscribe anytime.
              </p>
            </div>
          ) : (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        msg.role === "user"
                          ? "bg-amber-500 text-slate-900"
                          : "bg-slate-700 text-white"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-700 rounded-2xl px-4 py-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.1s]" />
                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-slate-700">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about visas, cost of living, safety..."
                    className="flex-1 bg-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 font-bold px-4 rounded-xl transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
