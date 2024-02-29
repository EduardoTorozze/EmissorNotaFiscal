
function Imprimir() {
    var conteudo = document.getElementById("print-content").innerHTML;
    var originalBody = document.body.innerHTML;
  
    document.body.innerHTML = conteudo;
  
    window.print();
  
    document.body.innerHTML = originalBody;

     // Limpar localStorage
     localStorage.clear();

     window.close();

  }

   // Função para recuperar o dado da URL
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    
// Recupera a string JSON dos produtos do localStorage
var produtosString = localStorage.getItem('produtos');
var valorTotal = parseFloat(getParameterByName('vlr_total')); // Recupera o valor total da compra

var ValorFrete = getParameterByName('ValorFrete'); // Recupera o valor do frete da compra

var valorTotal = localStorage.getItem('vlr_total'); // Recupera o valor total da compra

// Verifica se existem produtos no localStorage
if (produtosString) {
    // Analisa os produtos de volta para um array JavaScript
    var produtos = JSON.parse(produtosString);

    // Adiciona os produtos à tabela na página de impressão
    var tabelaProdutos = document.getElementById('registro');
    produtos.forEach(function(produto) {
        var newRow = tabelaProdutos.insertRow();
        newRow.innerHTML = `
            <td class="border p-2 text-left">${produto.codigo}</td>
            <td class="border p-2 text-left">${produto.descricao}</td>
            <td class="border p-2 text-left">${produto.quantidade}</td>
            <td class="border p-2 text-left">${formatarMoeda(produto.valorUnitario)}</td>
            <td class="border p-2 text-left">${formatarMoeda(produto.valorTotalProduto)}</td>
        `;
    });

    var TotalSemRS = valorTotal.replace('R$', '').trim();


    // Insere a linha com o valor total abaixo dos produtos
    var totalRow = tabelaProdutos.insertRow(); // Cria uma nova linha
    var totalCell = totalRow.insertCell(); // Insere uma célula na nova linha
    totalCell.colSpan = 5; // Define a célula para abranger todas as colunas
    totalCell.classList.add('border', 'p-2', 'text-right', 'font-semibold'); // Adiciona classes CSS à célula
    totalCell.textContent = 'Valor da Compra: R$ ' + TotalSemRS; // Define o conteúdo da célula com o valor total

    // Insere a linha com o valor DO Frete abaixo dos produtos
    var FreteRow = tabelaProdutos.insertRow(); // Cria uma nova linha
    var FreteCell = FreteRow.insertCell(); // Insere uma célula na nova linha
    FreteCell.colSpan = 5; // Define a célula para abranger todas as colunas
    FreteCell.classList.add('border', 'p-2', 'text-right', 'font-semibold'); // Adiciona classes CSS à célula
    FreteCell.textContent = 'Valor do Frete: R$ ' + ValorFrete; // Define o conteúdo da célula com o valor total
    
    // Insere a linha com o valor do frete + Compra abaixo dos produtos
    var TotalCompraRow = tabelaProdutos.insertRow(); // Cria uma nova linha
    var TotalCompraCell = TotalCompraRow.insertCell(); // Insere uma célula na nova linha
    TotalCompraCell.colSpan = 5; // Define a célula para abranger todas as colunas
    TotalCompraCell.classList.add('border', 'p-2', 'text-right', 'font-semibold'); // Adiciona classes CSS à célula


    //Troca , por . para somar
    var VlrTotal = TotalSemRS.replace(',', '.');
    var VlrFrete = ValorFrete.replace(',', '.');
    
    var CompraTudo = parseFloat(VlrTotal) + parseFloat(VlrFrete);

    // Convert CompraTudo to string before replacing
    TudoCompra = CompraTudo.toString().replace('.', ',');

    TotalCompraCell.textContent = 'Valor total da Compra: R$ ' + TudoCompra; // Define o conteúdo da célula com o valor total
    
}
 else {
    console.log('Nenhum produto encontrado no localStorage.');
}

// Função para formatar um valor para a moeda brasileira (BRL)
function formatarMoeda(valor) {
    // Converte o valor para float e formata como moeda brasileira
    return 'R$ ' + parseFloat(valor).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
}

// Função para recuperar o parâmetro da URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

    // Recupera o dado da URL
    var NumNF = getParameterByName('numeroNotaFiscal');
    var SerieNF = getParameterByName('SerieNotaFiscal');
    var DataEmisNF = getParameterByName('data_emissao');
    var NatOperNF = getParameterByName('Naturezaoper');
    var EntradaNF = getParameterByName('entrada');
    var ClienteNF = getParameterByName('Cliente');
    var CpfCnpjNF = getParameterByName('CpfCnpj');
    var InsEstNF = getParameterByName('InscricaoEstadual');
    var ContNF = getParameterByName('Contato');
    var CepNF = getParameterByName('cep');
    var UfNF = getParameterByName('uf');
    var MunicipioNF = getParameterByName('Municipio');
    var BairroNF = getParameterByName('Bairro');
    var RuaNF = getParameterByName('rua');
    var ComplementoNF = getParameterByName('Complemento');
    var NumeroNF = getParameterByName('Numero');
    var TelNF = getParameterByName('Telefone');
    var IESubsTriNF = getParameterByName('IEdoSubstitulotributario');
    var RazSocNF = getParameterByName('RazaoSocial');
    var VlrFreteNF = getParameterByName('ValorFrete');
    var FreteNF = getParameterByName('Frete');
    var CnpjNF = getParameterByName('cnpj');
    var ieNF = getParameterByName('ie');
    var Cep2NF = getParameterByName('cep2');
    var UFtransNF = getParameterByName('UF_transpor');
    var LogtransNF = getParameterByName('Logradouro_transpor');
    var Mun2NF = getParameterByName('Municipio2');
    var QtdNF = getParameterByName('Quantidade');
    var EspNF = getParameterByName('Especie');
    var MarcaNF = getParameterByName('Marca');
    var NumeracaoNF = getParameterByName('Numeracao');
    var PesoBNF = getParameterByName('pesoB');
    var PesoLNF = getParameterByName('pesoL');


    history.replaceState({}, document.title, window.location.pathname);

//______________________________________________________________

    // Exibe o dado na página
    if (NumNF) {
        // Exibe o dado na página
        var NumNota = document.getElementById('NumNotaNF');
        NumNota.innerHTML += NumNF;

    } else {
        var NumNota = document.getElementById('NumNotaNF');

        NumNota.innerHTML += "Não Informado";
    }

//______________________________________________________________

    // Exibe o dado na página
    if (SerieNF) {
        // Exibe o dado na página
        var SerNF = document.getElementById('Serie');
        SerNF.innerHTML += SerieNF;

    } else {
        var SerNF = document.getElementById('Serie');
        SerNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

    // Exibe o dado na página
    if (DataEmisNF) {
        // Exibe o dado na página
        var DataEmissaoNF = document.getElementById('DataEmissao');
        DataEmissaoNF.innerHTML += DataEmisNF;

    } else {
        var DataEmissaoNF = document.getElementById('DataEmissao');
        DataEmissaoNF.innerHTML += "Não Informado";
    }

//______________________________________________________________


    // Exibe o dado na página
    if (NatOperNF) {
        // Exibe o dado na página
        var NatuOperNF = document.getElementById('NatuOper');

        if(NatOperNF == 1){
            NatuOperNF.innerHTML += "Venda";
        }
        else if (NatOperNF == 2){
            NatuOperNF.innerHTML += "Devolução";
        }
        else{
            NatuOperNF.innerHTML += "Não Informado";
        }

    } else {
        var NatuOperNF = document.getElementById('NatuOper');
        NatuOperNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (EntradaNF) {
        // Exibe o dado na página
        var EntNF = document.getElementById('bordaEntrada');
        EntNF.innerHTML += EntradaNF;

    } else {
        var EntNF = document.getElementById('bordaEntrada');
        EntNF.innerHTML += "";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (ClienteNF) {
        // Exibe o dado na página
        var ClienteEmitNF = document.getElementById('ClienteEmit');
        ClienteEmitNF.innerHTML += ClienteNF;

    } else {
        var ClienteEmitNF = document.getElementById('ClienteEmit');
        ClienteEmitNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (CpfCnpjNF) {
        // Exibe o dado na página
        var CpfCnpjEmitNF = document.getElementById('CpfCnpjEmit');
        CpfCnpjEmitNF.innerHTML += CpfCnpjNF;

    } else {
        var CpfCnpjEmitNF = document.getElementById('CpfCnpjEmit');
        CpfCnpjEmitNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (InsEstNF) {
        // Exibe o dado na página
        var InscEstEmitNF = document.getElementById('InscEstEmit');
        InscEstEmitNF.innerHTML += InsEstNF;

    } else {
        var InscEstEmitNF = document.getElementById('InscEstEmit');
        InscEstEmitNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (ContNF) {
        // Exibe o dado na página
        var ContatoEmitNF = document.getElementById('ContatoEmit');
        ContatoEmitNF.innerHTML += ContNF;

    } else {
        var ContatoEmitNF = document.getElementById('ContatoEmit');
        ContatoEmitNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (CepNF) {
        // Exibe o dado na página
        var CepEmitNF = document.getElementById('CepEmit');
        CepEmitNF.innerHTML += CepNF;

    } else {
        var CepEmitNF = document.getElementById('CepEmit');
        CepEmitNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (UfNF) {
        // Exibe o dado na página
        var UFEmitNF = document.getElementById('UFEmit');
        UFEmitNF.innerHTML += UfNF;

    } else {
        var UFEmitNF = document.getElementById('UFEmit');
        UFEmitNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (MunicipioNF) {
        // Exibe o dado na página
        var MunicipioEmitNF = document.getElementById('MunicipioEmit');
        MunicipioEmitNF.innerHTML += MunicipioNF;

    } else {
        var MunicipioEmitNF = document.getElementById('MunicipioEmit');
        MunicipioEmitNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (BairroNF) {
        // Exibe o dado na página
        var BairroEmitNF = document.getElementById('BairroEmit');
        BairroEmitNF.innerHTML += BairroNF;

    } else {
        var BairroEmitNF = document.getElementById('BairroEmit');
        BairroEmitNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (RuaNF) {
        // Exibe o dado na página
        var LogradouroEmitNF = document.getElementById('LogradouroEmit');
        LogradouroEmitNF.innerHTML += RuaNF;

    } else {
        var LogradouroEmitNF = document.getElementById('LogradouroEmit');
        LogradouroEmitNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (NumeroNF) {
        // Exibe o dado na página
        var NumeroEmitNF = document.getElementById('NumeroEmit');
        NumeroEmitNF.innerHTML += NumeroNF;

    } else {
        var NumeroEmitNF = document.getElementById('NumeroEmit');
        NumeroEmitNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (TelNF) {
        // Exibe o dado na página
        var TelefoneEmitNF = document.getElementById('TelefoneEmit');
        TelefoneEmitNF.innerHTML += TelNF;

    } else {
        var TelefoneEmitNF = document.getElementById('TelefoneEmit');
        TelefoneEmitNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (IESubsTriNF) {
        // Exibe o dado na página
        var IST_EmitNF = document.getElementById('IST_Emit');
        IST_EmitNF.innerHTML += IESubsTriNF;

    } else {
        var IST_EmitNF = document.getElementById('IST_Emit');
        IST_EmitNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (RazSocNF) {
        // Exibe o dado na página
        var RazaoSocialTransNF = document.getElementById('RazaoSocialTrans');
        RazaoSocialTransNF.innerHTML += RazSocNF;

    } else {
        var RazaoSocialTransNF = document.getElementById('RazaoSocialTrans');
        RazaoSocialTransNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (FreteNF) {
        // Exibe o dado na página
        var FretePagoTransNF = document.getElementById('FretePagoTrans');
        
        if(FreteNF == 1){
            FretePagoTransNF.innerHTML += "Destinatário";
        }
        else if (FreteNF == 2){
            FretePagoTransNF.innerHTML += "Transportadora";
        }
        else{
            FretePagoTransNF.innerHTML += "Não Informado";
        }

    } else {
        var FretePagoTransNF = document.getElementById('FretePagoTrans');
        FretePagoTransNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (CnpjNF) {
        // Exibe o dado na página
        var CNPJTransNF = document.getElementById('CNPJTrans');
        CNPJTransNF.innerHTML += CnpjNF;

    } else {
        var CNPJTransNF = document.getElementById('CNPJTrans');
        CNPJTransNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (ieNF) {
        // Exibe o dado na página
        var IETransNF = document.getElementById('IETrans');
        IETransNF.innerHTML += ieNF;

    } else {
        var IETransNF = document.getElementById('IETrans');
        IETransNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (Cep2NF) {
        // Exibe o dado na página
        var CEPTransNF = document.getElementById('CEPTrans');
        CEPTransNF.innerHTML += Cep2NF;

    } else {
        var CEPTransNF = document.getElementById('CEPTrans');
        CEPTransNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (UFtransNF) {
        // Exibe o dado na página
        var UFTransNF = document.getElementById('UFTrans');
        UFTransNF.innerHTML += UFtransNF;

    } else {
        var UFTransNF = document.getElementById('UFTrans');
        UFTransNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (LogtransNF) {
        // Exibe o dado na página
        var LogradouroTransNF = document.getElementById('LogradouroTrans');
        LogradouroTransNF.innerHTML += LogtransNF;

    } else {
        var LogradouroTransNF = document.getElementById('LogradouroTrans');
        LogradouroTransNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (Mun2NF) {
        // Exibe o dado na página
        var MunicipioTransNF = document.getElementById('MunicipioTrans');
        MunicipioTransNF.innerHTML += Mun2NF;

    } else {
        var MunicipioTransNF = document.getElementById('MunicipioTrans');
        MunicipioTransNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (QtdNF) {
        // Exibe o dado na página
        var QtdTransNF = document.getElementById('QtdTrans');
        QtdTransNF.innerHTML += QtdNF;

    } else {
        var QtdTransNF = document.getElementById('QtdTrans');
        QtdTransNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (EspNF) {
        // Exibe o dado na página
        var EspeciaTransNF = document.getElementById('EspeciaTrans');
        EspeciaTransNF.innerHTML += EspNF;

    } else {
        var EspeciaTransNF = document.getElementById('EspeciaTrans');
        EspeciaTransNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (MarcaNF) {
        // Exibe o dado na página
        var MarcaTransNF = document.getElementById('MarcaTrans');
        MarcaTransNF.innerHTML += MarcaNF;

    } else {
        var MarcaTransNF = document.getElementById('MarcaTrans');
        MarcaTransNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (ComplementoNF) {
        // Exibe o dado na página
        var ComplementoEmitNF = document.getElementById('ComplementoEmit');
        ComplementoEmitNF.innerHTML += ComplementoNF;

    } else {
        var ComplementoEmitNF = document.getElementById('ComplementoEmit');
        ComplementoEmitNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (NumeracaoNF) {
        // Exibe o dado na página
        var NumeracaoTransNF = document.getElementById('NumeracaoTrans');
        NumeracaoTransNF.innerHTML += NumeracaoNF;

    } else {
        var NumeracaoTransNF = document.getElementById('NumeracaoTrans');
        NumeracaoTransNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (PesoLNF) {
        // Exibe o dado na página
        var PesoLTransNF = document.getElementById('PesoLTrans');
        PesoLTransNF.innerHTML += PesoLNF;

    } else {
        var PesoLTransNF = document.getElementById('PesoLTrans');
        PesoLTransNF.innerHTML += "Não Informado";
    }

//______________________________________________________________

//______________________________________________________________

    // Exibe o dado na página
    if (PesoBNF) {
        // Exibe o dado na página
        var PesoBTransNF = document.getElementById('PesoBTrans');
        PesoBTransNF.innerHTML += PesoBNF;

    } else {
        var PesoBTransNF = document.getElementById('PesoBTrans');
        PesoBTransNF.innerHTML += "Não Informado";
    }

//______________________________________________________________