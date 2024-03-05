 function Acuumulator (startValue){
    this.startingValue = startValue;

    this.read = function (){
        let input = prompt('введите число','5')
        this.lastValue =this.startingValue + Number(input)
    }
 }

 let accum = new Acuumulator(2)
 accum.read()
 accum.read()
 alert(accum.lastValue)