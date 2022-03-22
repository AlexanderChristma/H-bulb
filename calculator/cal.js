// Element Getter
function ids(Element) {
    return document.getElementById(Element)
    }
    function classes(Element) {
    return document.getElementsByClassName(Element)
    }

    // output numbers 
    function getOutput() {
    return ids('output-value').innerText
    }


    function InputOutput(num) {
        if (num=="") {
            return ids('output-value').innerText=num
        }else{
    return ids('output-value').innerText+=num
        }
    }

    function getHistory() {
    return ids('history-value').innerText
    }


    function InputHistory(num) {
    return ids('history-value').innerText=num
    }
   
    number = classes('number')
    for (let index = 0; index < number.length; index++) {
        const element = number[index];
        element.addEventListener('click', function(){
          InputOutput(this.id)
           
        })
        
    }

    operator = classes('operator')
    for (let index = 0; index < operator.length; index++) {
        const element = operator[index];
        element.addEventListener('click', function(){
        //  console.log(this.id)
           if (this.id=='clear') {
            InputOutput('')
            InputHistory('') 
           
           }else if(this.id=='backspace'){
                //  InputOutput(subtr(0,getOutput().lenght-1))
           }else{
                if(this.id!=''){
                //    InputHistory(getOutput()+this.id)
                //    InputOutput('')
                adder = getOutput()
                InputOutput(this.id)
                   if (this.id=="=") {
                       InputHistory(adder)
                       InputOutput('')
                    InputOutput(eval(getHistory()))
                    InputHistory('')

                }
                }
           }
        })
        
    }


