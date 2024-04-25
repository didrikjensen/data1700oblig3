$(function (){
    const id = window.location.search.substring(1);
    const url = "/hentEnBillett?"+id;
    $.get(url, function (billett){
        $("#id").val(billett.id);
        $("#film-input").val(billett.film);
        $("#antall-input").val(billett.antall);
        $("#fornavn-input").val(billett.fornavn);
        $("#etternavn-input").val(billett.etternavn);
        $("#telefon-input").val(billett.telefon);
        $("#email-input").val(billett.email);
    });
});

function endreBillett(){
    const billett = {
        id : $("#id").val(),
        film: $("#film-input").val(),
        antall: $("#antall-input").val(),
        fornavn: $("#fornavn-input").val(),
        etternavn: $("#etternavn-input").val(),
        telefon: $("#telefon-input").val(),
        email: $("#email-input").val()
    }
    $.post("/endreEnBillett", billett, function (){
        window.location.href = 'index.html';
    })
}