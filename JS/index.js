let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Termine de Preencher sua Nota!";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})

$('ul.tabs').tabs({
    swipeable: true,
    responsiveThreshold: Infinity
  });

/* Initialize the select */

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });
  
  $(document).ready(function () {
    $("select").material_select();
});

          const danfe = document.querySelector('#Danfe');

          // Função para verificar e ajustar a classe .tabs com base no tamanho da janela
          function adjustTabsClass() {
              if (window.innerWidth < 768) {
                  danfe.classList.remove('tabs');
              } else {
                  danfe.classList.add('tabs');
              }
          }

          // Chamada da função ao carregar a página
          window.addEventListener('load', adjustTabsClass);

          // Event listener para ajustar a classe .tabs ao redimensionar a janela
          window.addEventListener('resize', adjustTabsClass);


        function transferirDados() {
          // Recupera os dados do Local Storage que deseja transferir

          //Dados Nota
          var numeroNotaFiscal = localStorage.getItem('NumNotaFiscal');
          var SerieNotaFiscal = localStorage.getItem('SerieNotaFiscal');
          var data_emissao = localStorage.getItem('data_emissao');
          var Naturezaoper = localStorage.getItem('Naturezaoper');
          var entrada = localStorage.getItem('entrada');
          
          //Dados Emitente

          var Cliente = localStorage.getItem('Cliente');
          var CpfCnpj = localStorage.getItem('CpfCnpj');
          var CpfCnpj = localStorage.getItem('CpfCnpj');
          var InscricaoEstadual = localStorage.getItem('InscricaoEstadual');
          var Contato = localStorage.getItem('Contato');
          var cep = localStorage.getItem('CEP');
          var uf = localStorage.getItem('UF');
          var Municipio = localStorage.getItem('Municipio');
          var Bairro = localStorage.getItem('Bairro');
          var rua = localStorage.getItem('rua');
          var Numero = localStorage.getItem('Numero');
          var Complemento = localStorage.getItem('Complemento');
          var Telefone = localStorage.getItem('Telefone');
          var IEdoSubstitulotributario = localStorage.getItem('IEdoSubstitulotributario');

          //Dados Transportadora
          var RazaoSocial = localStorage.getItem('RazaoSocial');
          var ValorFrete = localStorage.getItem('ValorFrete');
          var Frete = localStorage.getItem('Frete');
          var cnpj = localStorage.getItem('CNPJ');
          var ie = localStorage.getItem('IE');
          var cep2 = localStorage.getItem('CEP2');
          var UF_transpor = localStorage.getItem('UF_transpor');
          var Logradouro_transpor = localStorage.getItem('Logradouro_transpor');
          var Municipio2 = localStorage.getItem('Municipio2');
          var Quantidade = localStorage.getItem('Quantidade');
          var Especie = localStorage.getItem('Especie');
          var Marca = localStorage.getItem('Marca');
          var Numeracao = localStorage.getItem('Numeracao');
          var pesoB = localStorage.getItem('pesoB');
          var pesoL = localStorage.getItem('pesoL');

          //Dados Do Produto

          var produtosString = JSON.stringify(produtos);
          var vlr_total = localStorage.getItem(vlr_total);

          // Constrói a string de consulta na URL com os dados

          var queryString = '?numeroNotaFiscal=' + encodeURIComponent(numeroNotaFiscal) +
                            '&SerieNotaFiscal=' + encodeURIComponent(SerieNotaFiscal) +
                            '&data_emissao=' + encodeURIComponent(data_emissao) +
                            '&Naturezaoper=' + encodeURIComponent(Naturezaoper) +
                            '&entrada=' + encodeURIComponent(entrada) +
                            '&Cliente=' + encodeURIComponent(Cliente) +
                            '&CpfCnpj=' + encodeURIComponent(CpfCnpj) +
                            '&InscricaoEstadual=' + encodeURIComponent(InscricaoEstadual) +
                            '&Contato=' + encodeURIComponent(Contato) +
                            '&cep=' + encodeURIComponent(cep) +
                            '&uf=' + encodeURIComponent(uf) +
                            '&Municipio=' + encodeURIComponent(Municipio) +
                            '&Bairro=' + encodeURIComponent(Bairro) +
                            '&rua=' + encodeURIComponent(rua) +
                            '&Complemento=' + encodeURIComponent(Complemento) +
                            '&Numero=' + encodeURIComponent(Numero) +
                            '&Telefone=' + encodeURIComponent(Telefone) +
                            '&IEdoSubstitulotributario=' + encodeURIComponent(IEdoSubstitulotributario) +
                            '&RazaoSocial=' + encodeURIComponent(RazaoSocial) +
                            '&ValorFrete=' + encodeURIComponent(ValorFrete) +
                            '&Frete=' + encodeURIComponent(Frete) +
                            '&cnpj=' + encodeURIComponent(cnpj) +
                            '&ie=' + encodeURIComponent(ie) +
                            '&cep2=' + encodeURIComponent(cep2) +
                            '&UF_transpor=' + encodeURIComponent(UF_transpor) +
                            '&Logradouro_transpor=' + encodeURIComponent(Logradouro_transpor) +
                            '&Municipio2=' + encodeURIComponent(Municipio2) +
                            '&Quantidade=' + encodeURIComponent(Quantidade) +
                            '&vlr_total=' + encodeURIComponent(vlr_total) +
                            '&Especie=' + encodeURIComponent(Especie) +
                            '&Marca=' + encodeURIComponent(Marca) +
                            '&Numeracao=' + encodeURIComponent(Numeracao) +
                            '&pesoB=' + encodeURIComponent(pesoB) +
                            '&produtoString' + encodeURIComponent(produtosString) +
                            '&pesoL=' + encodeURIComponent(pesoL);

          // Abre a página de destino com a string de consulta na URL
          window.open('ImpressaoNF.html' + queryString, '_blank');
      }