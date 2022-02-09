/**
 * Dynamically loading scripts
 * @param {string} _url
 * @return {*}
 */
const loadScript = (_url: string) => {
  const head = document.getElementsByTagName('head')[0];
  // Check whether it has been loaded
  const scriptNodes = Array.from(head.childNodes).filter(
    (v) => v.nodeName === 'SCRIPT',
  ) as HTMLScriptElement[];
  const index = scriptNodes.findIndex((v) => v.outerHTML.includes(_url));
  if (index > -1) return Promise.reject("Don't reload！");
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = _url;
  head.appendChild(script);
  return new Promise((resolve, reject) => {
    script.onload = () => {
      resolve(true);
    };
    script.onerror = (error) => {
      reject(error);
    };
  });
};

export default loadScript;
