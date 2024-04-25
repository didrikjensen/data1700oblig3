//Instanierer ulike variabler som jeg senere bruker til å laste inn DOM elementene for brukerinput.
let filmInput;
let antallInput;
let fornavnInput;
let etternavnInput;
let telefonInput;
let emailInput;

//instansierer ulike verdier hvor jeg etter validering putter inn verdiene brukeren har lagt inn
let filmInputValidert;
let antallInputValidert;
let fornavnInputValidert;
let etternavnInputValidert;
let telefonInputValidert;
let emailInputValidert;

//Ulike regEx mønstere for å verifisere om bruker har lagt inn gyldige verdier
const antallRegEx = /^[1-9][0-9]?$|^100$/;
const navnRegEx = /^([a-zA-Z-]{1,20})$/;
const telefonRegEx = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
const emailRegEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})([a-z]{2,8})?$/;

//Instansierer en ooutput variabel som senere brukes som string for å legge til billettene på siden
let output;

//bruker jquery til å hente inn dom-elementene som har med feilmelding å gjøre
const filmFeilmelding = $("#film-feilmelding");
const antallFeilmelding = $("#antall-feilmelding");
const fornavnFeilmelding = $("#fornavn-feilmelding");
const etternavnFeilmelding = $("#etternavn-feilmelding");
const telefonFeilmelding = $("#telefon-feilmelding");
const emailFeilmelding = $("#email-feilmelding");
const outputDiv = $("#output");

//Lager egne boolean variabler som kan brukes for å holde orden på om inputet er gyldig
let filmInputGyldig = false;
let antallInputGyldig = false;
let fornavnInputGyldig = false;
let etternavnInputGyldig = false;
let telefonInputGyldig = false;
let emailInputGyldig = false;

//Ulike feilmeldingsjekker som først sjekker boolean variablene som ble laget over, for å så enten vise eller skjule feilmeldingene
function filmFeilmeldingSjekk() {
    (filmInputGyldig) ? $(filmFeilmelding).hide() : $(filmFeilmelding).show();
}

function antallFeilmeldingSjekk() {
    (antallInputGyldig) ? $(antallFeilmelding).hide() : $(antallFeilmelding).show();
}

function fornavnFeilmeldingSjekk() {
    (fornavnInputGyldig) ? $(fornavnFeilmelding).hide() : $(fornavnFeilmelding).show();
}

function etternavnFeilmeldingSjekk() {
    (etternavnInputGyldig) ? $(etternavnFeilmelding).hide() : $(etternavnFeilmelding).show();
}

function telefonFeilmeldingSjekk() {
    (telefonInputGyldig) ? $(telefonFeilmelding).hide() : $(telefonFeilmelding).show();
}

function emailFeilmeldingSjekk() {
    (emailInputGyldig) ? $(emailFeilmelding).hide() : $(emailFeilmelding).show();
}

//Funksjone som henter inn verdiene(inputtet) fra brukeren og setter de tilhørende variablene lik den verdien
function innhentingAvBillett() {
    filmInput = $("#film-input").val();
    antallInput = $("#antall-input").val();
    fornavnInput = $("#fornavn-input").val();
    etternavnInput = $("#etternavn-input").val();
    telefonInput = $("#telefon-input").val();
    emailInput = $("#email-input").val();

    //Denne if setningen sjekker om alle feltene er fylt ut og gir en alert om det er noe som mangler, hvis alt er der sender den programmet videre til valideringsfunskjonen
    if (filmInput === "" || antallInput === "" || fornavnInput === "" || etternavnInput === "" || telefonInput === "" || emailInput === "") {
        alert("Du må fylle ut alle feltene")
    } else {
        validering(filmInput, antallInput, fornavnInput, etternavnInput, telefonInput, emailInput);
    }

}

//denne funksjonen går gjennom de ulike variablene som er sendt fra innhentingsfunksjonen og tester dem opp mot regex mønstrene for å validere inputtet
//hvis verdiene er gyldige settes xxxxInputGyldig til true og false hvis de ikke er det. deretter sjekkes feilmeldingsfunskjonene for de enkelte veridene
function validering(film, antall, fornavn, etternavn, telefon, email) {

    if (film === "") {
        filmInputGyldig = false;
        filmFeilmeldingSjekk();
    } else {
        filmInputGyldig = true;
        filmInputValidert = film;
        filmFeilmeldingSjekk();
    }

    if (antallRegEx.test(antall)) {
        antallInputGyldig = true;
        antallInputValidert = antall;
        antallFeilmeldingSjekk();
    } else {
        antallInputGyldig = false;
        antallFeilmeldingSjekk();
    }

    if (navnRegEx.test(fornavn)) {
        fornavnInputGyldig = true;
        fornavnInputValidert = fornavn;
        fornavnFeilmeldingSjekk()
    } else {
        fornavnInputGyldig = false;
        fornavnFeilmeldingSjekk();
    }
    if (navnRegEx.test(etternavn)) {
        etternavnInputGyldig = true;
        etternavnInputValidert = etternavn;
        etternavnFeilmeldingSjekk()
    } else {
        etternavnInputGyldig = false;
        etternavnFeilmeldingSjekk();
    }
    if (telefonRegEx.test(telefon)) {
        telefonInputGyldig = true;
        telefonInputValidert = telefon;
        telefonFeilmeldingSjekk()
    } else {
        telefonInputGyldig = false;
        telefonFeilmeldingSjekk();
    }
    if (emailRegEx.test(email)) {
        emailInputGyldig = true;
        emailInputValidert = email;
        emailFeilmeldingSjekk()
    } else {
        emailInputGyldig = false;
        emailFeilmeldingSjekk();
    }

    //Hvis alle "Gyldig"-vaiablene er sanne så sendes programmet videre til opprettBillett-funksjonen
    if (filmInputGyldig && antallInputGyldig && fornavnInputGyldig && etternavnInputGyldig && telefonInputGyldig && emailInputGyldig) {
        opprettBillett()
    }
}

//Denne funksjonen oppretter et js-objekt hvor den setter inn de validerte verdiene i objektet, før objektet så sendes til java-controlleren
function opprettBillett() {
    const billett = {
        film: filmInputValidert,
        antall: antallInputValidert,
        fornavn: fornavnInputValidert,
        etternavn: etternavnInputValidert,
        telefon: telefonInputValidert,
        email: emailInputValidert
    }

    $.post("/lagre", billett, function () {
        hentBillett()
    });
    //Etter at billetten er opprettet så tømmes inputfeltene og gjør klar for en ny "bestilling"
    tomForm();
}

//Hentbillett henter arrayet som opprettes i backend og sender det til funksjonen formater-billett
function hentBillett() {
    $.get("/hentBilletter", function (vis) {
        formaterBillett(vis)
    });
}

//Denne funksjonen formaterer arrayet til en enkel html tabell.
function formaterBillett(vis) {
    output = "";
    output += "<table class='table table-dark'><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Email</th></tr>"
    for (let billett of vis) {
        output += "<tr><td>" + billett.film + "</td><td>" + billett.antall + " </td><td>" + billett.fornavn + "</td><td>" + billett.etternavn + "</td><td>" + billett.telefon + "</td><td>" + billett.email + "</td></tr>";
    }
    output += "</table>";
    outputDiv.html(output);
}

//Denne funksjonen gir beskjed til java om at den skal tømme arrayet, for den setter output-variablen til en tom streng og setter den som innerhtml på html siden
function slettBillett() {
    $.post("/slett", function () {
    });
    output = "";
    outputDiv.html(output)
}

//Denne funksjonen setter select indexen til 0 som da er emn placeholder, før den bruker reset funksjonen til jquery for å tømme inputfeltene
function tomForm() {
    filmInput = document.getElementById("film-input")
    filmInput.selectedIndex = 0;
    $('#billettForm')[0].reset();
}