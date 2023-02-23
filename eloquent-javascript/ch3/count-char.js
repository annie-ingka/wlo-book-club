export default function countChar(str, char) {
  return str.match(new RegExp(char, 'g'))?.length || 0;
}
