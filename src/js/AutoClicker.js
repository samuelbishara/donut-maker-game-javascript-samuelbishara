export {AutoClicker}

class AutoClicker{
    constructor(){
        this.autoClickerCount = 0;
        this.autoClickerPrice = 100;

    }
    getAutoClickerCount(){
        return this.autoClickerCount;
    }
    getAutoClickerPrice(){
        return this.autoClickerPrice;
    }
    autoClickerButton(){
        this.autoClickerCount ++;
        this.autoClickerPrice = (this.autoClickerPrice *1.1).toFixed(2);
    }
}