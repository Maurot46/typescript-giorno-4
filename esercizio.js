function test() {
    fetch('http://localhost:3000/abbigliamento').then((function (response) { return response.json(); })).then(function (data) {
        data.map(function (e, i) {
            console.log(e);
            return new Oggetti(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
        });
    });
}
test();
var Oggetti = /** @class */ (function () {
    function Oggetti(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    Oggetti.prototype.getSaldoCapo = function () {
        var res = (this.prezzoivaesclusa * (this.saldo / 100));
        return Math.round(res * 100) / 100;
    };
    Oggetti.prototype.getPrezzo = function () {
        return Math.round((this.prezzoivainclusa - this.getSaldoCapo()) * 100) / 100;
    };
    return Oggetti;
}());
