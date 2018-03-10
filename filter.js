// Convert HTMLCollection/NodeList to common JavaScript array with spread operator
const elements = [...document.getElementsByTagName('*')];

const politicsNames = ['Lula', 'Bolsonaro', 'Bolsomito', 'Dilmãe'];

elements.forEach((element) => {
  const validNodes = [...element.childNodes].filter(n => n.nodeType === 3);

  validNodes.forEach((node) => {
    const text = node.nodeValue;
    const politicsSUX = text.replace(new RegExp(politicsNames.join('|'), 'ig'), 'lorem ipsum');

    if (politicsSUX !== text) {
      node.nodeValue = politicsSUX;
    }
  });
});
