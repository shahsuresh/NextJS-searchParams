"use client";
import React, { useEffect, useState } from "react";

const SpeechExample = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speakHindi = () => {
    const nepaliText = "कृपया काउन्टर नम्बर ३ मा जानुहोस्।";

    const hindiText = "कृपया काउंटर नंबर ५ पर जाएं।";
    const utterance = new SpeechSynthesisUtterance(hindiText + nepaliText);
    utterance.lang = "hi-IN";

    const hindiVoice = voices.find((v) => v.lang === "hi-IN");
    if (hindiVoice) {
      utterance.voice = hindiVoice;
    }

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  const speakNepali = () => {
    const nepaliText = "कृपया काउन्टर नम्बर ३ मा जानुहोस्।";
    const utterance = new SpeechSynthesisUtterance(nepaliText);
    utterance.lang = "ne-NP";

    const nepaliVoice = voices.find((v) => v.lang === "ne-NP");
    if (nepaliVoice) {
      utterance.voice = nepaliVoice;
    }

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  return (
    <div className='p-6 space-y-4'>
      <h2 className='text-xl font-semibold'>Token Announcer</h2>
      <button
        onClick={speakHindi}
        className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
      >
        Speak in Hindi
      </button>
      <button
        onClick={speakNepali}
        className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700'
      >
        Speak in Nepali
      </button>
    </div>
  );
};

export default SpeechExample;
