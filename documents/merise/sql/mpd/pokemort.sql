DROP DATABASE IF EXISTS pokemort;

CREATE DATABASE pokemort;

USE pokemort;

CREATE TABLE membre (
    mem_id INT PRIMARY KEY,
    mem_pseudo VARCHAR(255) NOT NULL,
    mem_mdp VARCHAR(255) NOT NULL,
    mem_nom VARCHAR(255) NOT NULL,
    mem_photo VARCHAR(255)
);

CREATE TABLE statut (
    sta_id INT PRIMARY KEY,
    sta_nom VARCHAR(255) NOT NULL
);

CREATE TABLE personnage (
    per_id INT PRIMARY KEY,
    per_nom VARCHAR(255) NOT NULL,
    per_photo VARCHAR(255),
    per_jouable BOOLEAN NOT NULL,
    per_copie INT
);

CREATE TABLE type (
    typ_id INT PRIMARY KEY,
    typ_nom VARCHAR(255) NOT NULL,
    typ_logo VARCHAR(255)
);

CREATE TABLE badge (
    bad_id INT PRIMARY KEY,
    bad_type INT NOT NULL,
    bad_ordre INT NOT NULL
);

CREATE TABLE objet (
    obj_id INT PRIMARY KEY,
    obj_nom VARCHAR(255) NOT NULL,
    obj_image VARCHAR(255)
);

CREATE TABLE pokemon (
    pok_id INT PRIMARY KEY,
    pok_numero INT NOT NULL,
    pok_nom VARCHAR(255) NOT NULL,
    pok_image VARCHAR(255),
    pok_miniature VARCHAR(255),
    pok_base_pv INT NOT NULL,
    pok_base_attaqie INT NOT NULL,
    pok_base_defense INT NOT NULL,
    pok_base_attaque_speciale INT NOT NULL,
    pok_base_defense_speciale INT NOT NULL,
    pok_base_vitesse INT NOT NULL
);

CREATE TABLE talent (
    tal_id INT PRIMARY KEY,
    tal_nom VARCHAR(255) NOT NULL,
    tal_fois INT NOT NULL
);

CREATE TABLE attaque (
    att_id INT PRIMARY KEY,
    att_nom VARCHAR(255) NOT NULL,
    att_puissance INT NOT NULL,
    att_precision INT NOT NULL
);

CREATE TABLE baseeffet (
    bas_id INT PRIMARY KEY,
    bas_colonne VARCHAR(255),
    bas_precision INT,
    bas_degats INT,
    bas_affecte_ennemi BOOLEAN,
    bas_affecte_pokemon BOOLEAN
);

CREATE TABLE effet (
    eff_id INT PRIMARY KEY,
    eff_nom VARCHAR(255) NOT NULL,
    eff_description TEXT
);

CREATE TABLE strategie (
    str_id INT PRIMARY KEY,
    str_nom VARCHAR(255) NOT NULL
);

CREATE TABLE ennemi (
    enn_id INT PRIMARY KEY,
    enn_ordre INT NOT NULL,
    enn_type VARCHAR(255),
    enn_nom VARCHAR(255) NOT NULL,
    enn_phrase_debut TEXT,
    enn_phrase_victoire TEXT,
    enn_phrase_defaite TEXT,
    enn_strategie INT,
    enn_personnage INT
);

CREATE TABLE climat (
    cli_id INT PRIMARY KEY,
    cli_nom VARCHAR(255) NOT NULL
);

CREATE TABLE partie (
    par_id INT PRIMARY KEY,
    par_membre INT NOT NULL,
    par_personnage INT NOT NULL,
    par_actif BOOLEAN NOT NULL,
    par_score INT NOT NULL,
    par_statut INT NOT NULL,
    par_debut DATETIME NOT NULL,
    par_fin DATETIME NOT NULL
);

CREATE TABLE recompenser (
    rec_id INT PRIMARY KEY,
    rec_date DATETIME NOT NULL,
    rec_partie INT NOT NULL,
    rec_badge INT NOT NULL
);

CREATE TABLE delivrer (
    del_id INT PRIMARY KEY,
    del_ennemi INT NOT NULL,
    del_badge INT NOT NULL
);

CREATE TABLE offrir (
    off_id INT PRIMARY KEY,
    off_ennemi INT NOT NULL,
    off_objet INT NOT NULL,
    off_quantite INT NOT NULL
);

CREATE TABLE combattre (
    com_id INT PRIMARY KEY,
    com_personnage INT NOT NULL,
    com_ennemi INT NOT NULL,
    com_climat INT NOT NULL
);

CREATE TABLE sortcombattre (
    sor_id INT PRIMARY KEY,
    sor_effet INT NOT NULL,
    sor_combattre INT NOT NULL,
    sor_duree INT NOT NULL
);

CREATE TABLE decomposer (
    dec_id INT PRIMARY KEY,
    dec_effet INT NOT NULL,
    dec_base_effet INT NOT NULL
);

CREATE TABLE appliquer (
    app_id INT PRIMARY KEY,
    app_effet INT NOT NULL,
    app_objet INT NOT NULL,
    app_ordre INT NOT NULL
);

CREATE TABLE exprimer (
    exp_id INT PRIMARY KEY,
    exp_talent INT NOT NULL,
    exp_effet INT NOT NULL
);

CREATE TABLE declencher (
    dec_id INT PRIMARY KEY,
    dec_attaque INT NOT NULL,
    dec_effet INT NOT NULL
);

CREATE TABLE engendrer (
    eng_id INT PRIMARY KEY,
    eng_statut INT NOT NULL,
    eng_effet INT NOT NULL
);

CREATE TABLE craindre (
    cra_id INT PRIMARY KEY,
    cra_type_un INT NOT NULL,
    cra_type_deux INT NOT NULL,
    cra_effet INT NOT NULL,
    cra_signe VARCHAR(255)
);

CREATE TABLE etretype (
    etr_id INT PRIMARY KEY,
    etr_pokemon INT NOT NULL,
    etre_type INT NOT NULL
);

CREATE TABLE peutapprendre (
    peu_id INT PRIMARY KEY,
    peu_pokemon INT NOT NULL,
    peu_attaque INT NOT NULL,
    peu_niveau INT NOT NULL
);

CREATE TABLE vaevoluer (
    vae_id INT PRIMARY KEY,
    vae_niveau INT NOT NULL,
    vae_pokemon INT NOT NULL,
    vae_evolution INT NOT NULL
);

CREATE TABLE saitexprimer (
    sai_id INT PRIMARY KEY,
    sai_pokemon INT NOT NULL,
    sai_talent INT NOT NULL
);

CREATE TABLE detenir (
    det_id INT PRIMARY KEY,
    det_personnage INT NOT NULL,
    det_objet INT NOT NULL,
    det_quantite INT NOT NULL
);

CREATE TABLE constituerquipe (
    con_id INT PRIMARY KEY,
    con_pokemon INT,
    con_objet INT,
    con_talent INT,
    con_statut INT,
    con_attaque_un INT,
    con_attaque_deux INT,
    con_attaque_trois INT,
    con_attaque_quatre INT,
    con_iv_attaque INT,
    con_iv_defense INT,
    con_iv_attaque_speciale INT,
    con_iv_defense_speciale INT,
    con_iv_vitesse INT,
    con_niveau INT,
    con_pv_restants INT,
    con_ordre INT,
    con_experience INT,
    con_shiny BOOLEAN,
    con_personnage INT
);

-- Constraints d'intégrité

ALTER TABLE badge ADD FOREIGN KEY (bad_type) REFERENCES type(typ_id) ON DELETE CASCADE;

ALTER TABLE ennemi ADD FOREIGN KEY (enn_strategie) REFERENCES strategie(str_id) ON DELETE CASCADE;
ALTER TABLE ennemi ADD FOREIGN KEY (enn_personnage) REFERENCES personnage(per_id) ON DELETE CASCADE;

ALTER TABLE partie ADD FOREIGN KEY (par_membre) REFERENCES membre(mem_id) ON DELETE CASCADE;
ALTER TABLE partie ADD FOREIGN KEY (par_personnage) REFERENCES personnage(per_id) ON DELETE CASCADE;
ALTER TABLE partie ADD FOREIGN KEY (par_statut) REFERENCES statut(sta_id) ON DELETE CASCADE;

ALTER TABLE recompenser ADD FOREIGN KEY (rec_partie) REFERENCES partie(par_id) ON DELETE CASCADE;
ALTER TABLE recompenser ADD FOREIGN KEY (rec_badge) REFERENCES badge(bad_id) ON DELETE CASCADE;

ALTER TABLE delivrer ADD FOREIGN KEY (del_ennemi) REFERENCES ennemi(enn_id) ON DELETE CASCADE;
ALTER TABLE delivrer ADD FOREIGN KEY (del_badge) REFERENCES badge(bad_id) ON DELETE CASCADE;

ALTER TABLE offrir ADD FOREIGN KEY (off_ennemi) REFERENCES ennemi(enn_id) ON DELETE CASCADE;
ALTER TABLE offrir ADD FOREIGN KEY (off_objet) REFERENCES objet(obj_id) ON DELETE CASCADE;

ALTER TABLE combattre ADD FOREIGN KEY (com_personnage) REFERENCES personnage(per_id) ON DELETE CASCADE;
ALTER TABLE combattre ADD FOREIGN KEY (com_ennemi) REFERENCES ennemi(enn_id) ON DELETE CASCADE;
ALTER TABLE combattre ADD FOREIGN KEY (com_climat) REFERENCES climat(cli_id) ON DELETE CASCADE;

ALTER TABLE sortcombattre ADD FOREIGN KEY (sor_effet) REFERENCES effet(eff_id) ON DELETE CASCADE;
ALTER TABLE sortcombattre ADD FOREIGN KEY (sor_combattre) REFERENCES combattre(com_id) ON DELETE CASCADE;

ALTER TABLE decomposer ADD FOREIGN KEY (dec_effet) REFERENCES effet(eff_id) ON DELETE CASCADE;
ALTER TABLE decomposer ADD FOREIGN KEY (dec_base_effet) REFERENCES baseeffet(bas_id) ON DELETE CASCADE;

ALTER TABLE appliquer ADD FOREIGN KEY (app_effet) REFERENCES effet(eff_id) ON DELETE CASCADE;
ALTER TABLE appliquer ADD FOREIGN KEY (app_objet) REFERENCES objet(obj_id) ON DELETE CASCADE;

ALTER TABLE exprimer ADD FOREIGN KEY (exp_talent) REFERENCES talent(tal_id) ON DELETE CASCADE;
ALTER TABLE exprimer ADD FOREIGN KEY (exp_effet) REFERENCES effet(eff_id) ON DELETE CASCADE;

ALTER TABLE declencher ADD FOREIGN KEY  (dec_attaque) REFERENCES attaque(att_id) ON DELETE CASCADE;
ALTER TABLE declencher  ADD FOREIGN KEY (dec_effet) REFERENCES effet(eff_id) ON DELETE CASCADE;

ALTER TABLE engendrer ADD FOREIGN KEY (eng_statut) REFERENCES statut(sta_id) ON DELETE CASCADE;
ALTER TABLE engendrer ADD FOREIGN KEY (eng_effet) REFERENCES effet(eff_id) ON DELETE CASCADE;

ALTER TABLE craindre ADD FOREIGN KEY (cra_type_un) REFERENCES type(typ_id) ON DELETE CASCADE;
ALTER TABLE craindre ADD FOREIGN KEY (cra_type_deux) REFERENCES type(typ_id) ON DELETE CASCADE;

ALTER TABLE etretype ADD FOREIGN KEY (etr_pokemon) REFERENCES pokemon(pok_id) ON DELETE CASCADE;
ALTER TABLE etretype ADD FOREIGN KEY (etre_type) REFERENCES type(typ_id) ON DELETE CASCADE;

ALTER TABLE peutapprendre ADD FOREIGN KEY (peu_pokemon) REFERENCES pokemon(pok_id) ON DELETE CASCADE;
ALTER TABLE peutapprendre ADD FOREIGN KEY (peu_attaque) REFERENCES attaque(att_id) ON DELETE CASCADE;

ALTER TABLE vaevoluer ADD FOREIGN KEY (vae_pokemon) REFERENCES pokemon(pok_id) ON DELETE CASCADE;
ALTER TABLE vaevoluer ADD FOREIGN KEY (vae_evolution) REFERENCES pokemon(pok_id) ON DELETE CASCADE;

ALTER TABLE saitexprimer ADD FOREIGN KEY (sai_pokemon) REFERENCES pokemon(pok_id) ON DELETE CASCADE;
ALTER TABLE saitexprimer ADD FOREIGN KEY (sai_talent) REFERENCES talent(tal_id) ON DELETE CASCADE;

ALTER TABLE detenir ADD FOREIGN KEY (det_personnage) REFERENCES personnage(per_id) ON DELETE CASCADE;
ALTER TABLE detenir ADD FOREIGN KEY (det_objet) REFERENCES objet(obj_id) ON DELETE CASCADE;

ALTER TABLE constituerquipe ADD FOREIGN KEY (con_pokemon) REFERENCES pokemon(pok_id) ON DELETE CASCADE;
ALTER TABLE constituerquipe ADD FOREIGN KEY (con_objet) REFERENCES objet(obj_id) ON DELETE CASCADE;
ALTER TABLE constituerquipe ADD FOREIGN KEY (con_talent) REFERENCES talent(tal_id) ON DELETE CASCADE;
ALTER TABLE constituerquipe ADD FOREIGN KEY (con_statut) REFERENCES statut(sta_id) ON DELETE CASCADE;
ALTER TABLE constituerquipe ADD FOREIGN KEY (con_attaque_un) REFERENCES attaque(att_id) ON DELETE CASCADE;
ALTER TABLE constituerquipe ADD FOREIGN KEY (con_attaque_deux) REFERENCES attaque(att_id) ON DELETE CASCADE;
ALTER TABLE constituerquipe ADD FOREIGN KEY (con_attaque_trois) REFERENCES attaque(att_id) ON DELETE CASCADE;
ALTER TABLE constituerquipe ADD FOREIGN KEY (con_attaque_quatre) REFERENCES attaque(att_id) ON DELETE CASCADE;
ALTER TABLE constituerquipe ADD FOREIGN KEY (con_personnage) REFERENCES personnage(per_id) ON DELETE CASCADE