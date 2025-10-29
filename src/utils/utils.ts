export const extractText = (str: string | undefined) => {
  if (!str) return;

  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'text/html');
  return doc.body.textContent || '';
};
