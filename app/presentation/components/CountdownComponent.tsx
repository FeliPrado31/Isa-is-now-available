"use client";

import { motion } from "framer-motion";
import useCountdown from "../../application/useCases/useCountdown";

interface CountdownComponentProps {
  targetDate: number;
}

export default function CountdownComponent({
  targetDate,
}: CountdownComponentProps) {
  const { timeLeft, isAvailable } = useCountdown(targetDate);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800'>
      <div className='text-center p-8 rounded-lg shadow-2xl bg-gray-800 bg-opacity-50 backdrop-blur-md'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-100 mb-8'>
          {isAvailable
            ? "Isa ahora está disponible 🥳"
            : "Isa estará disponible en 🕒: "}
        </h1>
        {!isAvailable && timeLeft && (
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                className='bg-gray-700 p-4 rounded-lg'
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  className='text-4xl md:text-5xl font-mono text-cyan-300'
                  key={value}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {value}
                </motion.span>
                <p className='text-gray-400 text-sm md:text-base mt-2'>
                  {unit}
                </p>
              </motion.div>
            ))}
          </div>
        )}
        {!isAvailable && timeLeft && (
          <motion.div
            className='w-full bg-gray-700 rounded-full h-4 overflow-hidden'
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className='bg-cyan-300 h-full'
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: calculateTotalSeconds(timeLeft),
                ease: "linear",
              }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function calculateTotalSeconds(timeLeft: {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}): number {
  return (
    timeLeft.dias * 86400 +
    timeLeft.horas * 3600 +
    timeLeft.minutos * 60 +
    timeLeft.segundos
  );
}
