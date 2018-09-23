// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (!currency || currency < 0) {
        return {};
    }
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    let leftCurrency = currency;
    let result = {};
    let HAmount = Math.trunc(currency / H_VALUATION);
    if(HAmount){
        result['H'] = HAmount;
    }
    leftCurrency = leftCurrency - HAmount * H_VALUATION;
    let QAmount = Math.trunc(leftCurrency / Q_VALUATION);
    if(QAmount){
        result['Q'] = QAmount;
    }
    leftCurrency = leftCurrency - QAmount * Q_VALUATION;
    let DAmount = Math.trunc(leftCurrency / D_VALUATION);
    if(DAmount){
        result['D'] = DAmount;
    }
    leftCurrency = leftCurrency - DAmount * D_VALUATION;
    let NAmount = Math.trunc(leftCurrency / N_VALUATION);
    if(NAmount){
        result['N'] = NAmount;
    }
    leftCurrency = leftCurrency - NAmount * N_VALUATION;
    let PAmount = Math.trunc(leftCurrency / P_VALUATION);
    if(PAmount){
        result['P'] = PAmount;
    }
    return result;
}

H_VALUATION = 50;
Q_VALUATION = 25;
D_VALUATION = 10;
N_VALUATION = 5;
P_VALUATION = 1;