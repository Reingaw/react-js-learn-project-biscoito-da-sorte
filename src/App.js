import React, { Component } from 'react';
import './estilo.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            textoFrase = ""
        };

        this.QuebraBiscoito = this.QuebraBiscoito.bind(this);

        this.frases =[
            'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
            'Imagine uma nova história para sua vida e acredite nela.',
            'A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.',
            'Ser feliz sem motivo é a mais autêntica forma de felicidade.',
            'Não existe um caminho para a felicidade. A felicidade é o caminho.',
            'Não espere por uma crise para descobrir o que é importante em sua vida.',
            'Nunca deixe ninguém te dizer que não pode fazer alguma coisa. Se você tem um sonho tem que correr atrás dele. As pessoas não conseguem vencer e dizem que você também não vai vencer. Se você quer uma coisa corre atrás.',
            'Saber encontrar a alegria na alegria dos outros, é o segredo da felicidade.',
            'A alegria de fazer o bem é a única felicidade verdadeira.',
            'Desconfie do destino e acredite em você. Gaste mais horas realizando que sonhando, fazendo que planejando, vivendo que esperando porque, embora quem quase morre esteja vivo, quem quase vive já morreu.',
            'Não permito que nenhuma reflexão filosófica me tire a alegria das coisas simples da vida.',
            'Perder tempo em aprender coisas que não interessam, priva-nos de descobrir coisas interessantes.',
            'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.',
            'É bem difícil descobrir o que gera a felicidade; pobreza e riqueza falharam nisso.',
            'Pessimismo leva à fraqueza, otimismo ao poder.',
            'O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.',
            'O pessimismo, depois de você se acostumar a ele, é tão agradável quanto o otimismo.',
            'Não são as nossas ideias que nos fazem otimistas ou pessimistas, mas o otimismo e o pessimismo de origem fisiológica que fazem as nossas ideias.',
            'O contrário do pessimismo raramente é o otimismo. O contrário do pessimismo, se não é a boa intenção de injetar força nos fracos, o que é bonito e faz bem, é quase sempre a idiota.',
            'Faça o que for necessário para ser feliz. Mas não se esqueça que a felicidade é um sentimento simples, você pode encontrá-la e deixá-la ir embora por não perceber sua simplicidade.'
        ];
    }

    QuebraBiscoito(){
        let atate = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = this.frases[numeroAleatorio];
        this.setState(state);
    }

    render(){
        return(
            <div className="container">
                <img src={require('./assets/biscoito.png')} className="img"/>
                <Botao nome="Abrir Biscoito" acaoBtn={this.QuebraBiscoito}/>
                <h3 className="textoFrase">{ this.state.textoFrase }</h3>
            </div>
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn} >{this.props.nome}</button>
            </div>
        );
    }
}

export default App;