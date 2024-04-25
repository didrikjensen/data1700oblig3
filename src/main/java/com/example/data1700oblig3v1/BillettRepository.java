package com.example.data1700oblig3v1;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(Billett billett){
        String sql = "INSERT INTO Billetter (film, antall, fornavn, etternavn, telefon, email) VALUES(?,?,?,?,?,?)";
        db.update(sql, billett.getFilm(), billett.getAntall(), billett.getFornavn(), billett.getEtternavn(), billett.getTelefon(), billett.getEmail());
    }

    public List<Billett> hentBilletter(){
        String sql = "SELECT * FROM Billetter ORDER BY etternavn";
        List<Billett> alleBilletter = db.query(sql, new BeanPropertyRowMapper(Billett.class));
        return alleBilletter;
    }

    public void slettAlleBilletter(){
        String sql = "DELETE FROM Billetter";
        db.update(sql);
    }

    public void slettEnBillett(Integer id){
        String sql = "DELETE FROM Billetter WHERE id=?";
        db.update(sql,id);
    }

    public Billett hentEnBillett(Integer id){
       Object[] param = new Object[1];
       param[0] = id;
       String sql = "SELECT * FROM Billetter where id=?";
       Billett enBillett = db.queryForObject(sql, param, BeanPropertyRowMapper.newInstance(Billett.class));
       return enBillett;
    }

    public void endreEnBillett(Billett billett){
        String sql = "UPDATE Billetter set film=?, antall=?, fornavn=?, etternavn=?, telefon=?, email=?";
        db.update(sql, billett.getFilm(), billett.getAntall(), billett.getFornavn(), billett.getEtternavn(), billett.getTelefon(), billett.getEmail());
    }


}
