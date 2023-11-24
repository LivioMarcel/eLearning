    // Redirecionamento da página principal para 'index2.html'
    document.addEventListener('DOMContentLoaded', function() {
        const cursoMobile = document.getElementById('Mobile');

        cursoMobile.addEventListener('click', function() {
            window.location.href = 'index2.html'; 
        });
    });

    // Redirecionamento para explicar software
    document.addEventListener('click', function() {
        const cusoSofware = document.getElementById('Software');
    
        cusoSofware.addEventListener('click', function() {
            window.location.href = 'index3.html'; 
        });
    });

    // Redirecionamento para explicar arquitetura
    document.addEventListener('click', function() {
        const cursoArquiteura = document.getElementById('arquitetura');
        
        cursoArquiteura.addEventListener('click', function() {
            window.location.href = 'index4.html'; 
        });
    });

    // Redirecionamento para explicar Digign
    document.addEventListener('click', function() {
        const cursoDisign = document.getElementById('Digign');
            
        cursoDisign.addEventListener('click', function() {
            window.location.href = 'index5.html'; 
        });
    });


