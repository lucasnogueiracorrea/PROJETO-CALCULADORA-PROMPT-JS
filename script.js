function calcular(){
    var calculadora = Number(prompt('Calculadora! \nEscolha uma das opções: \n 1 - Soma ( + ) \n 2 - Subtração ( - ) \n 3 - Divisão ( / ) \n 4 - Multiplicação ( * ) ' ))

    if(!calculadora || calculadora >= 5){
        alert('Você digitou uma opção inválida.')
        calcular()
    } else if(calculadora == ''){
        alert('Você digitou uma opção inválida.')
        calcular()
    }else{
        var n1 = Number(prompt('Digite um valor: '))
        var n2 = Number(prompt('Digite outro valor: '))
        var res;
    
        if(!n1 || !n2){
            alert('Você digitou uma opção inválida.')
            calcular()
        } else{
            function soma(){
                res = n1 + n2
                alert(`A soma entre ${n1} e ${n2} equivale: ${res}`)
                nova_operacao()
            } // function soma
        
            function subtracao(){
                res = n1 - n2
                alert(`A subtração entre ${n1} e ${n2} equivale: ${res}`)
                nova_operacao()
            } // function subtracao
        
            function divisao(){
                res = n1 / n2
                alert(`A divisão entre ${n1} e ${n2} equivale: ${res}`)
                nova_operacao()
            } // function divisao
        
            function multiplicacao(){
                res = n1 * n2
                alert(`A divisão entre ${n1} e ${n2} equivale: ${res}`)
                nova_operacao()
            } // function multiplicacao

            function nova_operacao(){
                var nova_op = prompt('Deseja calcular novamente?\n 1 - Sim\n 2 - Não')

                if (nova_op == 1){
                    calcular()
                } else if(nova_op == 2){
                    alert('Obrigado e até logo!')
                }else{
                    alert('Você digitou uma opção inválida.')
                    nova_operacao()
                }  
            } // function nova_operacao
        
            if( calculadora == 1){
                soma()
            } else if( calculadora == 2){
                subtracao()
            } else if( calculadora == 3){
               divisao()
            } else if( calculadora == 4){
                multiplicacao()
            }   

        } // fechamento do else n1 e n2
        
         
    } // fechamento do else calculadora
} // function principal

calcular(); // chamando a function principal

