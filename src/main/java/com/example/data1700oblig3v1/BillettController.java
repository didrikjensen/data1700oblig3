package com.example.data1700oblig3v1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class BillettController {

     @Autowired
     BillettRepository rep;

    //Tømmer arraylisten
    @PostMapping("/slett")
        public void slettArray(){
        //billettListe.clear();
        rep.slettAlleBilletter();
    }

    // Henter inn billetten og legger den til i arraylisten
    @PostMapping("/lagre")
    public void save(Billett innbillett) {
        //billettListe.add(innbillett);
        rep.lagreBillett(innbillett);
    }

    //Returnerer arraylisten til frontend
    @GetMapping("/hentBilletter")
    public List<Billett> getBillettListe() {
        //List<Billett>
        return rep.hentBilletter();
    }


}