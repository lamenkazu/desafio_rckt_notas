    let lista = document.getElementById('lista')
    let res = document.getElementById('res')
    let alunos = []

document.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        let btn = document.getElementById('btn')
        btn.click()
    }
})

function mostraAluno(){
    let posição = Number(lista.options[lista.selectedIndex].id)
    res.innerHTML = `<p>${alunos[posição].dados}</p>`
}

class Aluno{
    constructor(nome, nota){
        this.nome = nome
        this.nota = nota
        if(this.nota >= 70){
            this.aprovação = true
        }else{
            this.aprovação = false
        }

        if(nota >= 90 && nota <= 100){
            this.conceito = 'A'
        }else if(nota >= 80 && nota < 90){
            this.conceito = 'B'
        }else if(nota>= 70 && nota <80){
            this.conceito = 'C'
        }else if(nota>=60 && nota < 70){
            this.conceito = 'D'
        }else if(nota < 60){
            this.conceito = 'F'
        }
    }

    get dados(){
        return this.#dadosAlunos()
    }

    #dadosAlunos(){
        let dados = ''
        if(this.aprovação == true){
            dados = `Aprovado! <br> Aluno: ${this.nome} <br>Nota: ${this.conceito} :)`
        }else{
            dados = `Reprovado! <br> Aluno: ${this.nome} <br>Nota: ${this.conceito} :(`
        }
        return dados
    }
}

function insereAluno(){
    let nome = document.getElementById('txtnome')
    let nota = Number(document.getElementById('txtnum').value)

    if(nome.value.length == 0 || document.getElementById('txtnum').value == 0){
        alert('Informações faltando')
    }else{
        let aluno = new Aluno(nome.value, nota)
        alunos.push(aluno)

        let item = document.createElement('option')
        item.innerHTML = `${aluno.nome}`
        item.id = `${alunos.length - 1}`
        lista.appendChild(item)


        lista.size++
        nome.value =''
        document.getElementById('txtnum').value = ''
        nome.focus()
    }
}


