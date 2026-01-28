export const getPoint = (angle, radius, center) => {
  return {
    x: center + radius * Math.cos(angle),
    y: center + radius * Math.sin(angle),
  };
};
