const animalSvg = () => {
    function binSvg(animalSelector){

        let partCell = document.querySelector('#part');
        let weightCell = document.querySelector('#weight');
        let quantityCell = document.querySelector('#quantity')

        const part = document.querySelectorAll(animalSelector)
        part.forEach( element => {
            element.classList.add('test')
        })


    }

binSvg('.chicken-part')
binSvg('.cow-part')
binSvg('.pig-part')
}

animalSvg()
