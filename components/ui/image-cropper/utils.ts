/* Copyright https://github.com/DanteCoder/react-resizableBox */

export const LEFT_MOUSE_BUTTON = 0;

/**
 * Calculates the length of a vector.
 * @param x - The x component of the vector
 * @param y - The y component of the vector
 */
export const vectorLength = (x: number, y: number) => Math.sqrt(x * x + y * y);

/**
 * Calculates the angle of a vector.
 * @param x - The x component of the vector
 * @param y - The y component of the vector
 */
export const vectorAngle = (x: number, y: number) => Math.atan2(y, x);

/**
 * Calculates the center of a rectangle.
 * @param top - The top position of the rectangle
 * @param left - The left position of the rectangle
 * @param width - The width of the rectangle
 * @param height - The height of the rectangle
 */
export const topLeft2Center = (
  top: number,
  left: number,
  width: number,
  height: number
) => ({
  x: left + width / 2,
  y: top + height / 2
});

/**
 * Calculates the top left corner of a rectangle.
 * @param centerX - The center x position of the rectangle
 * @param centerY - The center y position of the rectangle
 * @param width - The width of the rectangle
 * @param height - The height of the rectangle
 */
export const center2TopLeft = (
  centerX: number,
  centerY: number,
  width: number,
  height: number
) => ({
  left: centerX - width / 2,
  top: centerY - height / 2
});

/**
 * Stops the next click event propagation
 */
export const captureClick = () => {
  const onClickHandler = (e: MouseEvent) => {
    e.stopPropagation();
    requestAnimationFrame(() => {
      document.removeEventListener('click', onClickHandler, true);
    });
  };

  document.addEventListener('click', onClickHandler, true);
};

/**
 * Returns the normalized x and y coordinates for mouse and touch events.
 */
export function getEventCoordinates(e: MouseEvent | TouchEvent) {
  if ('touches' in e) {
    const { clientX: x, clientY: y } = e.touches[0];
    return {
      x,
      y
    };
  }

  return {
    x: e.clientX,
    y: e.clientY
  };
}

export function degreesToRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}
