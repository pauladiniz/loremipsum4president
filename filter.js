// Convert HTMLCollection/NodeList to common JavaScript array with spread operator
const elements = [...document.getElementsByTagName('*')];

//Corrupt will not pass
const politicsNames = [
'Luiz Inácio Lula da Silva', 'Luiz Inácio da Silva', 'Lula', 'Bolsonaro', 
'Bolsomito', 'Dilmãe', 'Dilma', 'Ciro Gomes', 
'Marina Silva', 'Geraldo Alckmin', 'Michel Temer', 'Dilma Rousseff', 
'Bolsominnion', 'Bolsominion', 'José Serra', 'Marta Suplicy', 
'Eduardo Suplicy', 'Fernando Haddad', 'Paulo Maluf', 'José Sarney',
'Romero Jucá Filho', 'Aécio Neves', 'Renan Calheiros', 'José Serra',
'Marco Maia', 'Rodrigo Maia', 'Zeca Dirceu', 'José Dirceu', 'meubolsominiondeestimacao', 'Boulos'
];

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
