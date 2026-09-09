// Lightweight Web Audio API synthesizer for tactile UI interactions
// Inspired by Christoph Nagel's sensory portfolio experience
// Starts muted by default; respects user preference

let audioCtx: AudioContext | null = null;
let soundEnabled = false;

export const toggleSound = (): boolean => {
  soundEnabled = !soundEnabled;
  if (soundEnabled && !audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  return soundEnabled;
};

export const isSoundEnabled = (): boolean => soundEnabled;

export const playUiSound = (type: 'tick' | 'click' | 'pop' | 'open') => {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'tick') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.06);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.06);
    } else if (type === 'open') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(620, now + 0.1);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === 'pop') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(750, now);
      osc.frequency.exponentialRampToValueAtTime(950, now + 0.07);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
      osc.start(now);
      osc.stop(now + 0.07);
    }
  } catch {
    // Fail silently if audio context cannot play
  }
};
