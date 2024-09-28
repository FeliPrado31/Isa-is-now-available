export default class CountdownService {
  static calculateTimeLeft(
    targetDate: number
  ): { dias: number; horas: number; minutos: number; segundos: number } | null {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      return null;
    }
  }
}
