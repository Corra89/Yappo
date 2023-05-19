function aggiungi() {
    var paragrafo= document.createElement("p");
    var testo = document.createTextNode("Coding Creativo");
    paragrafo.appendChild(testo);
    document.getElementById("testo").appendChild(paragrafo);
  }
  function inserisci_frase()
{
  if(document.getElementById && document.createTextNode)
  {
    // inanzitutto creiamo un nuovo nodo di testo
    frase = document.createTextNode("Iniziamo con un esempio semplice");

    // poi, recuperiamo l'elemento con l'attributo ID pari "par_pre"
    // e appendiamoci il nodo di testo appena creato
    document.getElementById("par_pre").appendChild(frase);
  }
}