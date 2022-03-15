(function () {
    const $form = document.querySelector('form');

    $form.addEventListener('submit', calcIMC);
    function calcIMC(e) {
        let $weight = $form.querySelector('#weight');
        let $height = $form.querySelector('#height');
        const $result = $form.querySelector('.result');

        function createP(){
            const p = document.createElement('p');
            return p;
        }

        function verificarValores() {
            $result.innerHTML = '';
            const p = document.createElement('p');
            p.innerHTML
            $result.appendChild(p);
            if (!$weight.value && !$height.value) {
                p.innerHTML = `Preencha os campos vazios!`;
                $result.style.cssText = 'background-color:pink;';
            } else if(!Number($weight.value) && !Number($height.value) ){
                p.innerHTML = `Preencha com números validos!`;
                $result.style.cssText = 'background-color:pink;';
            }
            else if (!$weight.value || !Number($weight.value)) {
                p.innerHTML = `Peso invalido!`;
                $result.style.cssText = 'background-color:pink;';
            } else if (!$height.value || !Number($height.value)) {
                p.innerHTML = `Altura invalido!`;
                $result.style.cssText = 'background-color:pink;';
            } else {
                $result.style.cssText = 'background-color:none;';
                resultType();
            }
        }
        const result = Number($weight.value) / Number($height.value * $height.value)
        console.log(result);
        e.preventDefault();
        verificarValores();
        function resultType() {
            createP();
            $result.innerHTML = ''; 
            const p = document.createElement('p');
            p.innerHTML
            $result.appendChild(p);
            if (result < 18.5) {
                p.innerHTML = `Seu IMC é ${result.toFixed(1)} (Abaixo do peso)`;
            } else if (result >= 18.5 && result <= 24.9) {
                p.innerHTML = `Seu IMC é ${result.toFixed(1)} (Peso normal)`;
            } else if (result >= 25 && result <= 29.9) {
                p.innerHTML = `Seu IMC é ${result.toFixed(1)} (Sobrepeso)`;
            } else if (result >= 30 && result <= 34.9) {
                p.innerHTML = `Seu IMC é ${result.toFixed(1)} (Obsidade grau 1)`;
            } else if (result >= 35 && result <= 39.9) {
                p.innerHTML = `Seu IMC é ${result.toFixed(1)} (Obsidade grau 2)`;
            } else if (result >= 40) {
                p.innerHTML = `Seu IMC é ${result.toFixed(1)} (Obsidade grau 3)`;
            }
        }
    }

})();