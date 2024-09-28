import { useState, useEffect } from "react";
import CountdownService from "../../domain/services/countdownService";

export default function useCountdown(targetDate: number) {
  const [timeLeft, setTimeLeft] = useState<{
    dias: number;
    horas: number;
    minutos: number;
    segundos: number;
  } | null>(null);
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

  useEffect(() => {
    const updateCountdown = () => {
      const newTimeLeft = CountdownService.calculateTimeLeft(targetDate);
      if (newTimeLeft) {
        setTimeLeft(newTimeLeft);
      } else {
        setIsAvailable(true);
      }
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return { timeLeft, isAvailable };
}
