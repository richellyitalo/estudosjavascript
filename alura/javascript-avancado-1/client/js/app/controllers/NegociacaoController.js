class NegociacaoController
{
    constructor()
    {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event)
    {
        event.preventDefault();

        //console.log(typeof(this._inputData.value));

        // let data2 = new Date(this._inputData.value.split('-'));
        let parametros = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2)
        );

        let data = new Date(parametros);

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
}
