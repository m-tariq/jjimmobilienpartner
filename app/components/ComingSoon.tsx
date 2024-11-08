"use client";

import { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const ComingSoonPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Set your launch date here
  const launchDate = new Date("2024-12-31T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email subscription logic here
    setIsSubscribed(true);
    setEmail("");
  };

  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm w-24">
      <span className="text-4xl font-bold text-white">{value}</span>
      <span className="text-sm text-gray-300">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-4">
      {/* Main Content Container */}
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Logo or Brand Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-300">
          We're working hard to bring you something amazing. Stay tuned!
        </p>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-4">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* Email Subscription Form */}
        <div className="max-w-md mx-auto">
          {!isSubscribed ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-white/40"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <div className="text-green-400 font-semibold">
              Thanks for subscribing! We'll keep you updated.
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-8">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
