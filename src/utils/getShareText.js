export const getShareText = ({ fullPhotoUrl, technicalDescription }) => {
  return [
    technicalDescription,
    `📷 HD en 👉 ${fullPhotoUrl}`
  ].join('\n');
};
