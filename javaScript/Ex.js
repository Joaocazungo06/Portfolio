//                    Menu de Navegação
function abrir(){
    document.getElementById("menu").style.right = '0vw';
    document.getElementById("menu").style.display = 'block';
    document.getElementById("aparecer").style.color = 'transparent';
    document.getElementById("conteudoDPagina").style.transition = '.5s';

};
  function fechar(){ 
    document.getElementById("menu").style.right = '100vw';
    document.getElementById("aparecer").style.color = 'rgb(255, 255, 255)';
  document.getElementById("conteudoDPagina").style.marginTop ='0px';
    document.getElementById("conteudoDPagina").style.transition = '.4s';

};


//                   CONTEUDO DO Portifolio
// --------------- Home-------
const el = document.querySelector("blockquote");
const text = "Desenvolvedor Front-end ";
const intervalo = 200;

function showtext( el, text, intervalo){
  const char = text.split("").reverse();

  const typer =setInterval(()=>{

    if(!char.length) {
      return clearInterval(typer);
    }
    const next = char.pop();

    el.innerHTML += next;
  }, intervalo);

}
showtext(el, text, intervalo);

// ------------------Habilidades----
const teste = document.getElementById(".quadro2");

//------Função de escrever com o passar do mouse.
//                          HTML
html.addEventListener('mouseover', ()=>{ 
document.querySelector(".quadro1").textContent = "HTML é uma linguagem de Marcação utilizada na construção de páginas web. Documentos em Html podem ser interpretados por navegadores.";
});
html.addEventListener('mouseout', ()=>{ 
  document.querySelector(".quadro1").textContent = ""
  });

//-------Função de escrever com o passar do mouse .
//                       CSS
css.addEventListener('mouseover', ()=>{ 
document.querySelector(".quadro1").textContent = "Cascading Style Sheets (CSS) é um mecanismo para adicionar estilos a uma página web, aplicando diretamente nas tags HTML ou fica contido dentro das tags  <style>. ";
});
css.addEventListener('mouseout', ()=>{ 
  document.querySelector(".quadro1").textContent = ""
  });

//-------Função de escrever com o passar do mouse .
//                     JavaScript
js.addEventListener('mouseover', ()=>{ 
document.querySelector(".quadro1").textContent = "JavaScript é uma Linguagem de Programação interpretada estruturada, de script em alto nível com tipagem dinamica fraca e multiparadigma. Juntamente com HTML e CSS, O JS é uma das tres principais tecnologia da World wide web (W.W.W).";
});
js.addEventListener('mouseout', ()=>{ 
  document.querySelector(".quadro1").textContent = ""
  });

//--------Função de escrever com o passar do mouse .
//                   GIT
git.addEventListener('mouseover', ()=>{ 
document.querySelector(".quadro1").textContent = "GIT é um sistema de controle de versão distribuído, usado principalmente no desenvolvimento de Software, mas pode ser usado para registar o histórico de edições de qualquer tipo de arquivo.";
});
git.addEventListener('mouseout', ()=>{ 
  document.querySelector(".quadro1").textContent = "";
  });

//--------Função de escrever com o passar do mouse .
//                   GIT
boot.addEventListener('mouseover', ()=>{ 
document.querySelector(".quadro1").textContent = "BOOTSTRAP é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples. Além disso pode lidar com sites de desktop e páginas de dispositivos móveis da mesma forma.";
});
boot.addEventListener('mouseout', ()=>{ 
  document.querySelector(".quadro1").textContent = "";
  });

  //------------Função de escrever com o passar do mouse .
  //                 TailWind CSS
tailwind.addEventListener('mouseover', ()=>{ 
document.querySelector(".quadro1").textContent = "TAILWIND CSS é uma framework CSS que permite voçe criar layouts para suas aplicações web utilizando sua estrutura.";
});
tailwind.addEventListener('mouseout', ()=>{ 
  document.querySelector(".quadro1").textContent = "";
  });



//                           FOOTER


 