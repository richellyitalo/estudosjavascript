class Negociacao
{
    constructor(data, quantidade, valor)
    {
        //this._data = data;
        this._data = new Date(data.getTime()); // proteção
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this); // gambiarra para proteção
    }

    get data()
    {
        // return this._data;
        return new Date(this._data.getTime()); // proteção
    }

    get quantidade()
    {
        return this._quantidade;
    }

    get valor()
    {
        return this._valor;
    }

    get volume()
    {
        return this._quantidade * this._valor;
    }
}