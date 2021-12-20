export const getProtocolAndDomain = (): string => {
  return location.protocol + '//' + location.host;
};
