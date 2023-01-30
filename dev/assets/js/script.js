const animalSvg = () => {
    function binSvg(animalSelector){

        let partCell = document.querySelector('#part');
        let weightCell = document.querySelector('#weight');
        let quantityCell = document.querySelector('#quantity')

        const part = document.querySelectorAll(animalSelector)
        part.forEach( element => {
            element.addEventListener('mouseover', function() {
                let dataBody = element.getAttribute('data-body');
                let dataWeight = element.getAttribute('data-weight');
                let dataQuantity = element.getAttribute('data-quantity');

                partCell.innerText = dataBody;
                weightCell.innerText = dataWeight;
                quantityCell.innerText = dataQuantity;
            })
        })


    }

binSvg('.chicken-part')
binSvg('.cow-part')
binSvg('.pig-part')
}

animalSvg()
