package com.example.data1700oblig3v1;

//Java-class for å opprette et billett-objekt
public class Billett {

    Integer id;
    String film;
    int antall;
    String fornavn;
    String etternavn;
    int telefon;
    String email;

    public Billett(Integer id,String film, int antall, String fornavn, String etternavn, int telefonNummer, String email) {
        this.id = id;
        this.film = film;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefon = telefonNummer;
        this.email = email;
    }

    public Billett(){

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public int getTelefon() {
        return telefon;
    }

    public void setTelefon(int telefonNummer) {
        this.telefon = telefonNummer;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
