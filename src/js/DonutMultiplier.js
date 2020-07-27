export{DonutMultiplier}
class DonutMultiplier{
    constructor(){
        this.multiplierCount = 0;
        this.multiplierPrice = 10;

    }
    getMultiplierCount(){
        return this.multiplierCount;
    }
    getMultiplierPrice(){
        return this.multiplierPrice;
    }
    multiplierButton(){
        this.multiplierCount ++;
        this.multiplierPrice = (this.multiplierPrice *1.1).toFixed(2);

    }
}