export const getFullUrl = (url, sitePrefix, baseUrl) => {
  if (url.startsWith('/')) {
    const scopedSitePrefix = baseUrl.includes('localhost') ? '' : sitePrefix;
    return `${baseUrl}${scopedSitePrefix}/${url}`.replace(/(?<!http:|https:)\/\//g, '/');
  }
  return url;
};
