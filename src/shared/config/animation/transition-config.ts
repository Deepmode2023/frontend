export const springConfig = (springType: SpringConfigType = "BOUNCE") => {
  const springConfig = {
    type: "spring",
    stiffness: 0, // Жесткость пружины (чем больше значение, тем быстрее анимация)
    damping: 30, // Сопротивление (чем больше значение, тем медленнее затухает движение)
    mass: 5, // Масса объекта (чем больше, тем медленнее будет движение)
    restDelta: 0.001, // Порог, при котором анимация остановится (чем меньше, тем дольше анимация)
  };

  switch (springType) {
    case "BOUNCE":
      springConfig.stiffness = 400;
      break;
    case "QUICKLY":
      springConfig.stiffness = 700;
      break;
    default:
      springConfig.stiffness = 100;
  }
  return springConfig;
};

export const inertiaConfig = (
  inertiaType: InertiaConfigType = "SHORT_PATH"
) => {
  return {
    type: "inertia",
    velocity: inertiaType === "LONG_PATH" ? 1000 : 300, // Начальная скорость движения
    bounceStiffness: 100, // Жесткость отскока при достижении границы
    bounceDamping: 20, // Сопротивление отскока
    power: 0.5, // Усиление инерции (чем больше, тем дольше анимация)
    timeConstant: 300, // Время инерции, чтобы остановиться
    restDelta: 0.0001, // Точность, до которой инерция будет продолжаться
  };
};
