const calcDisplay = document.getElementById('calc-display');
            const buttons = document.getElementsByClassName('btn');
            let currentValue = "";
            function evaluateResult(){
                const convertedValue = currentValue
                .replace("÷","/")
                .replace("×","*")
                .replace("%","*0.01");
                const result = eval(convertedValue);
                currentValue = result.toString();
                calcDisplay.value = currentValue;

                
            }

            for (let i = 0;i<buttons.length;i++){
               const button = buttons[i];
               button.addEventListener('click',function(){
                const value = button.innerText;
                if (value == "AC"){
                    currentValue= "";
                    calcDisplay.value = currentValue;
                }
                else if(value == "="){
                    evaluateResult();
                }
                else{
                    currentValue = currentValue + value;
                    console.log("Button Clicked:",currentValue)
                    calcDisplay.value = currentValue;
                }
                
               })
                
            }