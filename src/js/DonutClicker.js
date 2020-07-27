export {DonutClicker}

class DonutClicker{
    constructor(){
        this.donutCount = 0;
    }
    getDonutCount(){
        return this.donutCount;
    }
    donutButton(multiplierCount){
        this.donutCount = this.donutCount + Math.pow(1.2, multiplierCount);
    }

} 