import{DonutClicker} from "./DonutClicker.js";
import{AutoClicker} from "./AutoClicker.js";
import{DonutMultiplier} from "./DonutMultiplier.js";
//donut clicker functionality
const donutClicker = new DonutClicker();
const donutCount = document.querySelector(".donutCount");
const donutButton = document.querySelector(".donutButton");
const updateDonutCount = () => {
    const count = donutClicker.getDonutCount();
    console.log(typeof(count));
    donutCount.innerHTML = Number.parseFloat(donutClicker.getDonutCount()).toFixed(2);
};
donutButton.addEventListener("click", () => {
    donutClicker.donutButton(multiplier.getMultiplierCount());
    updateDonutCount();
});

//auto clicker functionality
const autoClicker = new AutoClicker();
const autoClickerCount = document.querySelector(".autoClickerCount");
const autoClickerPrice = document.querySelector(".autoClickerPrice");
const autoClickerButton = document.querySelector(".autoClickerButton");
const updateAutoClickerCount = () => {
    autoClickerCount.innerHTML = autoClicker.getAutoClickerCount();
    };
const updateAutoClickerPrice = () => {
    autoClickerPrice.innerHTML = autoClicker.getAutoClickerPrice();
    };    
autoClickerButton.addEventListener("click", () => {
    if(donutClicker.donutCount >= autoClicker.autoClickerPrice ){
        donutClicker.donutCount = donutClicker.donutCount - autoClicker.autoClickerPrice;
        console.log()
        autoClicker.autoClickerButton();
        updateAutoClickerCount();
        updateAutoClickerPrice();
        updateDonutCount();
    }
});
setInterval(function(){
    const count = autoClicker.getAutoClickerCount(); 
    if(count > 0){
        donutClicker.donutCount = donutClicker.donutCount + count * Math.pow(1.2, multiplier.getMultiplierCount());
        updateDonutCount();
    }
    }, 1000);

//multiplier functionality
const multiplier = new DonutMultiplier();
const multiplierCount = document.querySelector(".multiplierCount");
const multiplierPrice = document.querySelector(".multiplierPrice");
const multiplierButton = document.querySelector(".multiplierButton");
const updateMultiplierCount = () => {
    multiplierCount.innerHTML = multiplier.getMultiplierCount();
    };
const updateMultiplierPrice = () => {
    multiplierPrice.innerHTML = multiplier.getMultiplierPrice();
    }; 
multiplierButton.addEventListener("click", () => {
    if(donutClicker.donutCount >= multiplier.multiplierPrice ){
        donutClicker.donutCount = donutClicker.donutCount - multiplier.multiplierPrice;
        console.log()
        multiplier.multiplierButton();
        updateMultiplierCount();
        updateMultiplierPrice();
        updateDonutCount();
    }
});       
