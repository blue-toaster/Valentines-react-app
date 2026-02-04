import confetti from 'canvas-confetti';

export default function Celebrate() {
  confetti(
    {
      particleCount: 100,
      spread: 70,
      origin: { y:  0.6 }
    }
  )
}