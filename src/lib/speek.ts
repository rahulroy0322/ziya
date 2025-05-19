const synth = window.speechSynthesis;
const utter = new SpeechSynthesisUtterance();
utter.lang = 'en-US';

const speak = (text: string) => {
  utter.text = text;
  if (synth.speaking) {
    synth.cancel();
  }

  synth.speak(utter);
};

const changeVoice = (voiceIndex: number) => {
  utter.voice = synth.getVoices()[voiceIndex] || null;
};

export { speak, changeVoice };
