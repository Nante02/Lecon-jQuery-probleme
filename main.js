//Si document est chargé par jQuery function se met en marche
$(document).ready(function() {
    //Code à manipuler
    $('#boutton-1').click(
        function(){
            let input = $("#texte-1").val();
            $('.resulta').html(input);
        }
    );
    $("a").click(
        function(){
            // selecetionner.son parent ou balise en haut.la suite d selectionner.directrion du slide(temps)
            $(this).parent().next().slideToggle(1000);
        }
    );
});