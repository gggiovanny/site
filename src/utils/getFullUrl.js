export const getFullUrl = (url, sitePrefix, baseUrl = window.location.origin) => {
  if (url.startsWith('/')) {
    const scopedSitePrefix = baseUrl.includes('localhost') ? '' : sitePrefix;
    return `${baseUrl}${scopedSitePrefix}/${url}`.replace(/(?<!http:|https:)\/\//g, '/');
  }
  return url;
};
