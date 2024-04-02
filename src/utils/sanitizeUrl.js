export const sanitizeUrl = url => {
  // Normalize the string to a form where accented characters are represented as their base characters followed by a combining diacritical mark
  const normalizedUrl = url.normalize('NFD');

  // Regular expression to match accented characters and replace them with their non-accented counterparts
  const regex = /[\u0300-\u036f]/g; // This matches combining diacritical marks
  const replacementMap = {
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u',
    Á: 'A',
    É: 'E',
    Í: 'I',
    Ó: 'O',
    Ú: 'U',
    // Add more mappings as needed
  };

  // Replace accented characters with their non-accented counterparts
  const replacedUrl = normalizedUrl.replace(regex, match => replacementMap[match] || match);

  // Regular expression to match non-URL characters
  const urlRegex = /[^a-zA-Z0-9\-_]/g;
  // Replace non-URL characters with an empty string
  return replacedUrl.replace(urlRegex, '');
};
