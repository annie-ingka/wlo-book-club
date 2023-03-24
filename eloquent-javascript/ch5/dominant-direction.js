import characterScript from './character-script';
import countBy from './county-by';

function dominantDirection(text) {
  const scripts = countBy(text, (char) => {
    const script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({ direction }) => direction !== 'none');

  return scripts.reduce((prev, curr) => {
    return curr.count > prev.count ? curr : prev;
  }).direction;
}

export default dominantDirection;
