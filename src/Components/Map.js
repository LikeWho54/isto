import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import Romania from "@svg-maps/romania";
import React, { useState, useEffect, Fragment } from "react";
import { SideSheet, Paragraph, Button } from 'evergreen-ui'

const Map = () => {
  const [name, setName] = useState('Cluj')
  const Istorie = {
    "Cluj": [
      {
        "image": "https://i.guim.co.uk/img/media/ccc826cd2961f5dc64b3e1283ac4224eab46a77f/0_383_5746_3448/master/5746.jpg?width=1200&quality=85&auto=format&fit=max&s=1d9ebbd3c8fa0e1f1ca4f8d94d97f958",
        "text": `Județul Cluj este situat în partea de nord-vest a României, în regiunea istorică a Transilvaniei. Iată o caracterizare a geografiei județului Cluj:

        Amplasare: Județul Cluj se învecinează cu județele Bistrița-Năsăud, Maramureș, Sălaj, Alba și Mureș. Reședința județului este municipiul Cluj-Napoca.
    
        Relief: Județul Cluj are un relief variat, care cuprinde atât munți, cât și zone de dealuri și câmpii. În partea de nord se ridică Munții Apuseni, care fac parte din lanțul muntos al Carpaților Occidentali. Aici se găsesc vârfuri impunătoare, chei, peșteri și cascade. În partea centrală și de sud se întind Dealurile Clujului și Câmpia Transilvaniei, care oferă peisaje pitorești și terenuri agricole.
    
        Hidrografie: Printre principalele râuri din județul Cluj se numără Someșul Mic, Someșul Mare și Arieșul. Aceste râuri sunt importante pentru irigații, producția de energie hidroelectrică și pentru aprovizionarea cu apă a orașelor din județ. În județ se găsesc și lacuri și bălți naturale, precum Lacul Tarnița și Lacul Fântânele.
    
        Climă: Județul Cluj are o climă temperat-continentală, cu ierni reci și veri calde. Temperaturile medii variază de la aproximativ -2°C în ianuarie la 20°C în iulie. Precipitațiile sunt moderate, cu cantități mai mari în timpul verii.
    
        Vegetație: Vegetația din județul Cluj este diversificată, cuprinzând păduri de conifere și foioase în zonele montane și terenuri agricole în câmpie și pe dealuri. În Munții Apuseni predomină pădurile de fag, brad și molid, iar în zonele de câmpie se cultivă cereale, plante leguminoase și pomi fructiferi.
    
        Așezări urbane: Municipiul Cluj-Napoca este cel mai mare oraș și reședința județului Cluj. Este un important centru cultural, academic și economic, fiind cunoscut și sub numele de "capitala Transilvaniei". Alte orașe importante din județ includ Turda, Dej, Câmpia Turzii și Gherla.
    
        Obiective turistice: Județul Cluj oferă numeroase atracții turistice, cum ar fi Cetatea Dejului, Cetatea din Turda, Cheile Turzii, Salina Turda și Cetatea Făgetului.`  },

    ],
    "Maramureș": [
      {
        "image": "https://img.bunadimineata.ro/uploads/2015/07/toamna-in-maramures_61127305.jpg",
        "text": `Județul Maramureș este situat în partea de nord-vest a României, în regiunea istorică a Maramureșului. Iată o caracterizare a geografiei județului Maramureș:

        Amplasare: Județul Maramureș se învecinează cu Ucraina la nord, precum și cu județele Sălaj, Cluj, Bistrița-Năsăud, Suceava și Satu Mare în celelalte direcții. Reședința județului este municipiul Baia Mare.
    
        Relief: Județul Maramureș este caracterizat de un relief diversificat, cu munți, dealuri și câmpii. Partea de nord a județului este dominată de Munții Maramureșului și Munții Gutâi, care oferă peisaje montane spectaculoase, vârfuri înalte și păduri de conifere. În partea centrală și de sud se întind Dealurile Maramureșului și Câmpia Someșului, care oferă terenuri agricole fertile și peisaje pitorești.
    
        Hidrografie: Județul Maramureș este traversat de râuri importante precum Tisa, Iza, Mara și Vișeu. Râurile din zonă sunt caracterizate prin frumusețea lor naturală și oferă posibilități de pescuit și recreere. În plus, în județ se află și numeroase lacuri și bălți naturale.
    
        Climă: Județul Maramureș are o climă temperat-continentală, cu veri blânde și ierni reci și umede. Temperaturile medii variază de la 0°C în ianuarie la aproximativ 20°C în iulie. Precipitațiile sunt bine distribuite pe tot parcursul anului, iar zona montană primește cantități mai mari de precipitații.
    
        Vegetație: Vegetația din județul Maramureș este variată și bogată. În zonele de munte se găsesc păduri de conifere, cum ar fi pădurile de brad, molid și pin, care oferă habitat pentru o varietate de specii de plante și animale. În zonele de câmpie și dealuri predomină terenurile agricole și pajiștile naturale.
    
        Așezări urbane: Pe lângă municipiul Baia Mare, județul Maramureș cuprinde și alte orașe importante, precum Sighetu Marmației, Baia Sprie, Cavnic și Vișeu de Sus.
    
        Obiective turistice: Județul Maramureș este renumit pentru patrimoniul său cultural și tradițiile autentice.`
      },

    ],
    "Sibiu": [
      {
        "image": "https://www.casa-vale.net/romania-poze-imagini/RO54006-sibiu-foto.jpg",
        "text": `Județul Sibiu este situat în partea centrală a României și face parte din regiunea istorică a Transilvaniei. Iată o caracterizare a geografiei județului Sibiu:

        Amplasare: Județul Sibiu se învecinează cu județele Alba, Brașov, Mureș și Vâlcea. Capitala județului este municipiul Sibiu.
    
        Relief: Județul Sibiu are un relief variat, care cuprinde atât munți, cât și zone de dealuri și câmpii. Partea de sud și sud-est este dominată de Munții Făgăraș, care fac parte din lanțul muntos al Carpaților Meridionali. Aceasta este o zonă montană spectaculoasă, cu vârfuri înalte, chei și cascade. În partea de nord și vest se întind Dealurile Sibiului și Câmpia Transilvaniei, care oferă peisaje pitorești și terenuri agricole.
    
        Hidrografie: Principalele râuri care străbat județul Sibiu sunt râul Olt și afluenții săi, precum râul Cibin și râul Târnava. Râurile oferă o sursă importantă de apă și sunt utilizate pentru irigații și producția de energie hidroelectrică. În județ se găsesc și mai multe lacuri și bălți, cum ar fi Lacul Căldărușani și Lacul Avrig.
    
        Climă: Județul Sibiu are o climă temperat-continentală, cu veri călduroase și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu cantități mai mari în timpul verii.
    
        Vegetație: Vegetația județului Sibiu este diversificată, cuprinzând păduri de conifere și foioase în zonele montane și terenuri agricole în câmpie și pe dealuri. În Munții Făgăraș predomină pădurile de molid, brad și fag, iar în zonele de câmpie se găsesc culturi agricole, cum ar fi cerealele, plantele leguminoase și vița de vie.
    
        Așezări urbane: Municipiul Sibiu este reședința județului și un important centru cultural, istoric și turistic. Este faimos pentru centrul său istoric bine conservat, care găzduiește numeroase clădiri medievale, piețe și biserici. Alte orașe importante din județ includ Mediaș, Cisnădie și Avrig.`  },

    ],
    "Alba": [
      {
        "image": "https://media.webcamromania.ro/img/2020/04/Webcam-Alba-Iulia-scaled.jpg",
        "text": `Județul Alba este situat în centrul României, în regiunea istorică a Transilvaniei. Iată o caracterizare a geografiei județului Alba:

        Amplasare: Județul Alba se învecinează cu județele Cluj, Sibiu, Hunedoara și Mureș. Capitala județului este municipiul Alba Iulia.
    
        Relief: Județul Alba se întinde într-o zonă montană și de dealuri. Partea de sud a județului este dominată de Munții Apuseni, care fac parte din lanțul muntos al Carpaților Occidentali. Aceasta este o zonă pitorească, cu vârfuri montane, chei, cascade și peșteri. În partea de nord și centrală a județului se află Dealurile Albei, o zonă de dealuri și câmpii cu soluri fertile.
    
        Hidrografie: Principalele râuri care străbat județul Alba sunt râul Mureș și afluenții săi, precum râul Ampoi și râul Târnava. Râurile oferă o sursă importantă de apă și sunt utilizate pentru irigații și producția de energie hidroelectrică. În județ se găsesc și mai multe lacuri și bălți, cum ar fi Lacul Cârța și Lacul Oașa.
    
        Climă: Județul Alba are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu cantități mai mari în timpul verii.
    
        Vegetație: Vegetația județului Alba este variată, cuprinzând păduri de conifere și foioase în zonele montane și terenuri agricole în câmpie și pe dealuri. În Munții Apuseni predomină pădurile de molid, brad și fag, iar în zonele de câmpie se găsesc culturi agricole, precum cereale și plante leguminoase.
    
        Așezări urbane: Municipiul Alba Iulia este reședința județului și un important centru cultural, istoric și administrativ. Alte orașe importante din județ includ Aiud, Blaj și Sebeș.
    
        Obiective turistice: Județul Alba oferă o varietate de atracții turistice, cum ar fi Cetatea Alba Carolina din Alba Iulia, Mănăstirea Râmeț, Peștera Scarisoara (cunoscută pentru ghețarul său) și Munții Apuseni, `   },

    ],
    "Timiș": [
      {
        "image": "https://media.timisoreni.ro/upload/photo/2006-09/centru_large.jpg",
        "text": `Județul Timiș este situat în vestul României, în regiunea istorică a Banatului. Iată o caracterizare a geografiei județului Timiș:

        Amplasare: Județul Timiș se învecinează cu Ungaria la vest, Serbia la sud, județele Arad și Caraș-Severin la nord și județul Hunedoara la est. Capitala județului este municipiul Timișoara.
    
        Relief: Județul Timiș are un relief variat, care cuprinde atât munți, cât și zone de dealuri și câmpii. În partea de vest se află Munții Banatului, care fac parte din lanțul muntos al Carpaților Occidentali. Aceasta este o zonă cu altitudini moderate și peisaje pitorești. În partea centrală și de est se întind Dealurile Banatului și Câmpia de Vest, care reprezintă zone de câmpie și dealuri cu soluri fertile.
    
        Hidrografie: Principalele râuri care străbat județul Timiș sunt râul Timiș și afluenții săi, precum Bega și Bârzava. Aceste râuri oferă o sursă importantă de apă și sunt utilizate pentru irigații și producția de energie hidroelectrică. În județ se găsesc și mai multe lacuri și bălți, cum ar fi Lacul Surduc și Lacul Ghioroc.
    
        Climă: Județul Timiș are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu cantități mai mari în timpul verii.
    
        Vegetație: Vegetația județului Timiș este variată, cuprinzând păduri de conifere și foioase în zonele montane și terenuri agricole în câmpie și pe dealuri. În Munții Banatului predomină pădurile de molid, brad și fag, iar în câmpie predomină culturile agricole.
    
        Așezări urbane: Municipiul Timișoara este reședința județului și cel mai mare oraș din regiune. Este un important centru cultural, economic și universitar. Alte orașe importante din județ includ Lugoj, Buziaș și Jimbolia.
    
        Obiective turistice: Județul Timiș oferă o varietate de atracții turistice, cum ar fi Cetatea Timișoara, Catedrala Mitropolitană din Timișoara, Mănăstirea și Izvorul Tamaduirii de la Buziaș și Rezervația Naturală Cheile Nerei-Beușnița. `
      },

    ],
    "Prahova": [
      {
        "image": "https://imagoromaniae.ro/wp-content/uploads/2020/07/statiunea-slanic-prahova-822.jpg",
        "text": `Județul Prahova este situat în partea centrală a României, în regiunea istorică a Munteniei. Iată o caracterizare a geografiei județului Prahova:

        Amplasare: Județul Prahova se învecinează cu județele Brașov, Dâmbovița, Buzău și Ialomița. Capitala județului este municipiul Ploiești.
    
        Relief: Județul Prahova este marcat de prezența Munților Carpați, cu o parte a lor situată în cadrul județului. Munții Bucegi și Munții Baiului se află în partea de nord a județului, oferind peisaje montane spectaculoase și atracții turistice precum Castelul Peleș și Sfinxul din Bucegi. În partea centrală a județului se întind Dealurile Prahovei, care fac trecerea de la zona montană la câmpie.
    
        Hidrografie: Cel mai important râu care străbate județul Prahova este râul Prahova, care dă numele județului. Acesta izvorăște din Munții Bucegi și traversează județul de la nord la sud. Alte râuri importante din zonă sunt Teleajenul și Doftana. Lacurile din județul Prahova includ Lacul Bolboci și Lacul Paltinu.
    
        Climă: Județul Prahova are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu cantități mai mari în timpul verii.
    
        Vegetație: Vegetația județului Prahova este variată, cuprinzând păduri de conifere și foioase în zona montană și terenuri agricole în câmpie și pe dealuri. În Munții Bucegi predomină pădurile de molid, brad și fag, iar în zonele mai joase se găsesc culturi agricole, precum viță de vie și pomi fructiferi.
    
        Așezări urbane: Municipiul Ploiești este reședința județului și cel mai mare oraș din regiune. Este un important centru industrial, economic și cultural. Alte orașe importante din județ includ Bușteni, Azuga și Sinaia, destinații turistice cunoscute datorită peisajelor montane și obiectivelor turistice din zonă.
    
        Obiective turistice: Județul Prahova oferă numeroase atracții turistice, cum ar fi Castelul Peleș, Castelul Cantacuzino și Mănăstirea Sinaia.` },

    ],
    "Bacău": [
      {
        "image": "https://img.directbooking.ro/getimage.ashx?f=statiuni&file=Statiune_3d338cb0-01ab-496b-8b5c-60bfb76093de_BacauCentrul.jpg.jpg",
        "text": `Județul Bacău este situat în partea de nord-est a României, în regiunea istorică a Moldovei. Iată o caracterizare a geografiei județului Bacău:

        Amplasare: Județul Bacău se învecinează cu județele Neamț, Vaslui, Vrancea, Covasna, Harghita și Mureș. Capitala județului este municipiul Bacău.
    
        Relief: Județul Bacău are un relief variat, care cuprinde atât munți, cât și zone de dealuri și câmpii. În partea de nord se află Munții Carpați Orientali, cu vârfuri înalte și versanți stâncoși. În partea centrală și sudică se întind Dealurile Covurluiului și Dealurile Tazlăului, iar în partea de est se extinde Câmpia Moldovei, o zonă de câmpie fertilă.
    
        Hidrografie: Principalele râuri care străbat județul Bacău sunt râul Siret și afluenții săi, precum râul Bistrița și râul Trotuș. Aceste râuri oferă o sursă importantă de apă și sunt utilizate pentru irigații și producția de energie hidroelectrică. În județ se găsesc și mai multe lacuri și bălți, cum ar fi Lacul Colibița și Lacul Negru.
    
        Climă: Județul Bacău are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu cantități mai mari în timpul verii.
    
        Vegetație: Vegetația județului Bacău este variată, cuprinzând păduri de conifere și foioase în zonele montane și terenuri agricole în câmpie și pe dealuri. În Munții Carpați Orientali se găsesc păduri de molid, brad și fag, iar în câmpie predomină culturile agricole.
    
        Așezări urbane: Municipiul Bacău este reședința județului și cel mai mare oraș din regiune. Este un important centru cultural, economic și industrial. Alte orașe importante din județ includ Onești, Moinești și Moinesti.
    
        Obiective turistice: Județul Bacău oferă o varietate de atracții turistice, cum ar fi Parcul Național Ceahlău, Mănăstirea Agapia, Mănăstirea Voroneț și Muzeul de Artă din Bacău. ` },

    ],
    "Arad": [
      {
        "image": "https://img.directbooking.ro/getimage.ashx?f=Statiuni&file=Statiune_2f7271cc-e1fd-4f6e-b81e-38b9e5a58cb4_AradArad1.jpg.jpg",
        "text": `Județul Arad este situat în vestul României, în regiunea istorică a Crișanei. Iată o caracterizare a geografiei județului Arad:

        Amplasare: Județul Arad se învecinează cu Ungaria la vest și cu județele Bihor, Hunedoara, Timiș și Alba. Capitala județului este municipiul Arad.
    
        Relief: Județul Arad are un relief diversificat, care cuprinde atât munți, cât și zone de dealuri și câmpii. La vest, se află Munții Zarandului și Munții Codru-Moma, cu altitudini moderate. În partea centrală și sudică se întind Dealurile Crișurilor și Dealurile Aradului, iar în partea de nord-est se găsește Câmpia Aradului, o zonă de câmpie fertilă.
    
        Hidrografie: Principalele râuri care traversează județul Arad sunt râul Mureș și afluenții săi, precum și râul Crișul Alb și râul Crișul Negru. Aceste râuri oferă o sursă importantă de apă și sunt utilizate pentru irigații și producția de energie hidroelectrică.
    
        Lacuri și bălți: În județul Arad se găsesc câteva lacuri și bălți, în special în zona de câmpie. Lacurile Ghioroc și Pâncota sunt printre cele mai cunoscute. Aceste zone pot oferi oportunități pentru pescuit și activități recreative.
    
        Climă: Județul Arad are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu cantități mai mari în timpul verii.
    
        Vegetație: Vegetația județului Arad este variată, cuprinzând păduri de foioase în zonele montane și câmpii și terenuri agricole în zonele de câmpie și dealuri. În Munții Zarandului și Munții Codru-Moma se găsesc păduri de fag, stejar și gorun, iar în câmpie predomină culturile agricole și pășunile.
    
        Așezări urbane: Municipiul Arad este reședința județului și cel mai mare oraș din regiune. Este un important centru cultural, economic și turistic, cu monumente istorice și culturale, precum Cetatea Aradului și Biserica Neagră. Alte orașe importante din județ includ Ineu, Lipova și Chișineu-Criș.` },

    ],
    "Argeș": [
      {
        "image": "http://www.autocarhire.ro/wp-content/uploads/2013/05/curtea-de-arges.jpg",
        "text": `Județul Argeș este situat în partea central-sudică a României, în regiunea istorică a Munteniei. Iată o caracterizare a geografiei județului Argeș:

        Amplasare: Județul Argeș se învecinează cu județele Dâmbovița, Prahova, Brașov, Sibiu, Vâlcea, Olt și Teleorman. Capitala județului este municipiul Pitești.
    
        Relief: Județul Argeș are un relief diversificat, care cuprinde atât munți, cât și zone de dealuri și câmpie. În nord, se întind Munții Făgărașului și Munții Leaota, cu vârfuri înalte și peisaje spectaculoase. În partea centrală și sudică se află dealurile și podișurile Subcarpaților Getici și Câmpiei Române, iar în sud se extinde Câmpia Română.
    
        Hidrografie: Principalele râuri care traversează județul Argeș sunt râul Argeș și afluenții săi, cum ar fi râul Dâmbovița și râul Vedea. Râul Argeș este un important curs de apă, care străbate județul de la nord la sud și oferă o sursă vitală de apă și energie hidroelectrică. În apropierea orașului Curtea de Argeș, râul Argeș formează defileul Argeșului, cunoscut pentru peisajele pitorești și mănăstirile sale.
    
        Lacuri și bălți: În județul Argeș se găsesc mai multe lacuri și bălți, în special în zonele de câmpie și în apropierea râurilor. Printre cele mai cunoscute lacuri se numără Lacul Vidraru, Lacul Budeasa și Lacul Mihailești.
    
        Climă: Județul Argeș are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu cantități mai mari în timpul verii.
    
        Vegetație: Vegetația județului Argeș este variată, cuprinzând păduri de foioase și conifere în zonele montane și pășuni și terenuri agricole în zonele de câmpie și dealuri. În Munții Făgărașului și Munții Leaota se găsesc păduri de fag și brad, iar în câmpie predomină culturile agricole și pășunile.
    
        Așezări urbane: Municipiul Pitești este reședința județului și cel mai mare oraș din regiune.`  },

    ],
    "Bihor": [
      {
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/25/Oradea_%28Nagyv%C3%A1rad%29_-_pia%C5%A3a_Unirii.JPG",
        "text": `Județul Bihor este situat în vestul României, în regiunea istorică a Crișanei. Iată o caracterizare a geografiei județului Bihor:

        Amplasare: Județul Bihor se învecinează cu Ungaria la vest și cu județele Satu Mare, Sălaj, Cluj, Alba și Arad. Capitala județului este municipiul Oradea.
    
        Relief: Județul Bihor are un relief diversificat, care include munți, dealuri și câmpii. La vest, se întind Munții Apuseni, cu vârfuri înalte și peisaje spectaculoase. În partea centrală și de est se află Dealurile Bihorului, care alternează culmile cu văi adânci și terase înalte. La sud se extinde Câmpia de Vest, o zonă de câmpie cu terenuri agricole extinse.
    
        Hidrografie: Principalele râuri care traversează județul Bihor sunt Crișul Repede și afluenții săi, precum Crișul Negru și Crișul Alb. Aceste râuri oferă o sursă importantă de apă și sunt utilizate pentru irigații și producția de energie hidroelectrică. În județ se află și lacul de acumulare Vadu Crișului.
    
        Peșteri: Județul Bihor este cunoscut pentru numeroasele sale peșteri, care oferă peisaje subterane spectaculoase. Printre cele mai cunoscute peșteri se numără Peștera Meziad, Peștera Ursilor și Peștera Vârtop.
    
        Climă: Județul Bihor are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu cantități mai mari în timpul verii.
    
        Vegetație: Vegetația județului Bihor este variată, cuprinzând păduri de conifere și foioase în zonele montane, iar pe câmpii și dealuri predomină terenurile agricole. În Munții Apuseni se găsesc păduri de fag și brad, iar în Dealurile Bihorului se întâlnesc păduri de stejar și carpen.
    
        Așezări urbane: Municipiul Oradea este reședința județului și cel mai mare oraș din regiune. Este un important centru cultural, economic și turistic, cu numeroase atracții, cum ar fi Cetatea Oradea, Biserica cu Lună și Parcul Rezidențial Nymphaea. Alte orașe importante din județ includ Beiuș, Marghita și Salonta.` },

    ],
    "Bistrița-Năsăud": [
      {
        "image": "https://www.bistriteanul.ro/wp-content/uploads/2019/01/Top_BTZ-cc-1.jpg",
        "text":  `Județul Bistrița-Năsăud este situat în nordul României, în regiunea istorică a Transilvaniei. Iată o caracterizare a geografiei județului Bistrița-Năsăud:

        Amplasare: Județul Bistrița-Năsăud se află în nordul țării, fiind învecinat cu județele Maramureș, Suceava, Mureș, Cluj și Maramureș. Capitala județului este municipiul Bistrița.
    
        Relief: Județul Bistrița-Năsăud are un relief diversificat, care variază de la zone montane înalte până la dealuri și câmpii. La nord, se află Munții Rodnei, cu vârfuri înalte și versanți stâncoși. În partea centrală a județului se întind Dealurile Bârgăului și Călimani, iar la sud se află Câmpia Transilvaniei.
    
        Hidrografie: Principalele râuri care străbat județul Bistrița-Năsăud sunt râul Someșul Mare și afluenții săi, precum și râul Bistrița și afluenții săi. Aceste râuri oferă o sursă importantă de apă și sunt utilizate pentru irigații și producția de energie hidroelectrică.
    
        Lacuri și bălți: În județul Bistrița-Năsăud se găsesc câteva lacuri și bălți, în special în zona montană. Lacul Colibița, situat în Munții Călimani, este unul dintre cele mai frumoase lacuri de acumulare din România și atrage turiști în căutarea peisajelor pitorești și a activităților recreative.
    
        Climă: Județul Bistrița-Năsăud are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 20°C în iulie. Precipitațiile sunt moderate, cu cantități mai mari în timpul verii.
    
        Vegetație: Vegetația județului Bistrița-Năsăud este variată, cuprinzând păduri de conifere și foioase în zonele montane și terenuri agricole în câmpie și pe dealuri. În Munții Rodnei se găsesc păduri de molid și fag, iar în Munții Călimani se întâlnesc păduri de conifere.
    
        Așezări urbane: Municipiul Bistrița este reședința județului și cel mai mare oraș din regiune.`  },

    ],
    "Botoșani": [
      {
        "image": "https://blog.travelminit.ro/wp-content/uploads/2017/05/botosani.jpg",
        "text": `Județul Botoșani este situat în nord-estul României, în regiunea istorică a Moldovei. Iată o caracterizare a geografiei județului Botoșani:

        Amplasare: Județul Botoșani se află în nord-estul țării, la granița cu Ucraina. Este învecinat cu județele Suceava, Iași, Neamț și Maramureș.
    
        Relief: Județul Botoșani are un relief predominant de câmpie, cu dealuri mici și văi adânci. Partea centrală și de sud a județului este dominată de Câmpia Moldovei, iar în nord se întind dealurile Maramureșului. Altitudinile sunt în general reduse, variind între 100 și 400 de metri.
    
        Hidrografie: Principalele râuri care traversează județul Botoșani sunt Siretul și Prutul. Râul Siret străbate județul pe o distanță semnificativă, oferind o sursă importantă de apă și facilitând irigația agricolă. Râul Prut formează granița naturală cu Ucraina și este un important curs de apă pentru regiune.
    
        Lacuri și bălți: În județul Botoșani se găsesc mai multe lacuri și bălți, în special în zona umedă a râului Prut. Aceste zone sunt importante pentru biodiversitatea locală și sunt adesea desemnate ca arii protejate.
    
        Climă: Județul Botoșani are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu cantități mai mari în timpul verii.
    
        Vegetație: Vegetația județului Botoșani este caracterizată de terenuri agricole, cu culturi de cereale, legume și plante forrajere. În zonele mai puțin cultivate, se găsesc păduri de foioase, cum ar fi stejarul și gorunul.
    
        Așezări urbane: Municipiul Botoșani este reședința județului și cel mai mare oraș din regiune. Este un centru cultural și economic important, cu monumente istorice și culturale, precum Biserica "Sfântul Gheorghe" și Muzeul Județean Botoșani. Alte orașe din județ includ Dorohoi, Săveni și Flămânzi.
    
        Obiective turistice: Județul Botoșani oferă o varietate de atracții turistice, cum ar fi Mănăstirea Vorona, Parcul Memorial Mihai Eminescu, Muzeul Satului Botoșani și numeroase case tradiționale de epocă. ` },

    ],
    "Brăila": [
      {
        "image": "https://img.directbooking.ro/getimage.ashx?f=Statiuni&w=600&h=399&file=Statiune_abc6b3ab-b7c3-4e63-bafc-34b4febdf23f_Braila10.jpg.jpg",
        "text": `Județul Brăila este situat în sud-estul României, în regiunea istorică a Munteniei, și este traversat de râul Dunărea. Iată o caracterizare a geografiei județului Brăila:

        Amplasare: Județul Brăila se află în zona de câmpie a țării, în partea de sud-est. Este învecinat cu județele Galați, Vrancea, Buzău și Ialomița.
    
        Relief: Județul Brăila este caracterizat printr-un relief predominant câmpiei, cu terenuri plate și ușor ondulate. În partea de vest a județului se întinde Câmpia Română, iar în partea de est se află Lunca Dunării, care este o zonă de terenuri inundabile.
    
        Hidrografie: Râul Dunărea străbate județul Brăila de-a lungul frontierei de sud și reprezintă una dintre cele mai importante căi navigabile din Europa. Dunărea formează și numeroase brațe și lacuri, oferind o bogată biodiversitate și oportunități pentru activități recreative și pescuit.
    
        Lacuri și bălți: În județul Brăila se găsesc câteva lacuri și bălți, în special în zona de Lunca Dunării. Acestea includ Lacul Suhaia, Lacul Jirlău și Balta Ianculești. Aceste zone sunt importante pentru păsările migratoare și sunt desemnate ca rezervații naturale.
    
        Climă: Județul Brăila are o climă temperat-continentală, cu veri calde și ierni moderate. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, iar iarna se poate înregistra o cantitate semnificativă de zăpadă.
    
        Vegetație: Vegetația județului Brăila este caracterizată de pășuni și terenuri agricole extinse. Culturile predominante includ cerealele, floarea-soarelui, vița de vie și legumele. De asemenea, în zona Lunca Dunării se găsesc păduri de salcâm și plopi.
    
        Așezări urbane: Municipiul Brăila este reședința județului și cel mai mare oraș din regiune. Este un important centru economic, comercial și cultural. Alte orașe importante din județ includ Ianca, Făurei și Însurăței.
    
        Obiective turistice: Județul Brăila oferă o varietate de atracții turistice, cum ar fi centrul istoric al municipiului Brăila, Catedrala "Nașterea Domnului", Muzeul de Istorie și Artă Brăila și situl arheologic de la Tătărăști.` },

    ],
    "Bucharest": [
      {
        "image": "https://img.directbooking.ro/getimage.ashx?f=Statiuni&w=600&h=399&file=Statiune_2269_Bucurestid327f89a-650f-4ad8-9c93-385ebcd13a57.jpg",
        "text": `Bucureștiul, capitala României, este situat în partea de sud a țării, în Câmpia Română, în apropierea râului Dâmbovița. Iată o caracterizare succintă a geografiei orașului București:

        Relief: Orașul București se află într-o zonă de câmpie, cunoscută sub numele de Câmpia Română. Terenul este predominant plat, cu altitudini scăzute, variind între 55 și 90 de metri deasupra nivelului mării. Există câteva dealuri mici și pâlcuri de păduri în jurul orașului, dar în general, relieful este nivelat.
    
        Hidrografie: Principalul râu care traversează Bucureștiul este râul Dâmbovița. Acesta străbate orașul de la nord la sud și își are izvorul în Munții Făgăraș. De-a lungul râului Dâmbovița se află numeroase parcuri și zone de agrement, oferind o oază de verdeață în mijlocul orașului.
    
        Lacuri și bălți: În București există câteva lacuri și bălți artificiale, cum ar fi Lacul Herăstrău, Lacul Floreasca și Lacul Tei. Aceste lacuri oferă oportunități de recreere și sunt înconjurat de spații verzi.
    
        Climă: Bucureștiul are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate pe tot parcursul anului, cu maxime în timpul verii.
    
        Așezări urbane: Orașul București este un important centru cultural, economic și administrativ. Este împărțit în mai multe sectoare, fiecare cu caracteristici și atracții specifice. Centrul istoric al orașului, cunoscut sub numele de "Centrul Vechi", este renumit pentru clădirile sale istorice și străzi înguste.
    
        Obiective turistice: Bucureștiul oferă o varietate de atracții turistice, cum ar fi Palatul Parlamentului, cea mai mare clădire administrativă din Europa, Muzeul Național de Artă al României, Muzeul Satului și Parcul Herăstrău. Orașul găzduiește, de asemenea, numeroase festivaluri, evenimente culturale și zone comerciale animate.`  },

    ],
    "Buzău": [
      {
        "image": "https://primariabuzau.ro/wp-content/uploads/2016/10/3.jpg",
        "text": `Județul Buzău este situat în sud-estul României, în regiunea istorică a Munteniei. Iată o caracterizare a geografiei județului Buzău:

        Relief: Județul Buzău are un relief diversificat, cu munți, dealuri și câmpii. Partea centrală și nordică a județului este dominată de Munții Buzău, care fac parte din lanțul muntos al Carpaților Orientali. Aici se găsesc vârfuri importante, cum ar fi Vârful Siriu și Vârful Ciucas, și masive calcaroase spectaculoase, precum Cheile Buzăului și Cheile Tisitei. În partea de sud a județului se întinde Câmpia Bărăganului, o regiune de câmpie cu relief mai plat.
    
        Hidrografie: Județul Buzău este străbătut de râuri importante precum Buzău, în bazinul căruia se află și Lacul Siriu, și Râmnicu Sărat. De asemenea, în județ se găsesc numeroase izvoare și pâraie care formează peisaje pitorești și cascade. Unul dintre cele mai cunoscute obiective turistice este Mănăstirea Peștera cu izvorul său de apă sărată.
    
        Climă: Județul Buzău are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu cantități mai mari în lunile de vară. Zona montană beneficiază de un climat mai rece și precipitații mai abundente, inclusiv zăpadă în timpul iernii.
    
        Vegetație: Vegetația din județul Buzău este bogată și variată. Pe versanții munților se găsesc păduri de conifere, cum ar fi bradul și molidul, îmbinate cu păduri de foioase, cum ar fi fagul și gorunul. Pe câmpii predomină terenurile agricole, cu culturi de cereale, viță de vie și pomi fructiferi. De asemenea, în județ se găsesc pășuni și păduri de stejar.
    
        Așezări urbane: Municipiul Buzău este reședința județului și cel mai mare oraș din regiune. Este un important centru economic și cultural, cu numeroase monumente istorice și culturale, cum ar fi Biserica Precista din Buzău și Muzeul Județean Buzău. Alte orașe importante din județ includ Râmnicu Sărat, Pogoanele și Nehoiu.` },

    ],
    "Caraș-Severin": [
      {
        "image": "https://www.balneomedica.ro/imagini/panorama-baile-herculane-2008.jpg",
        "text": `Județul Caraș-Severin este situat în vestul României, la granița cu Serbia și în regiunea istorică a Banatului. Iată o caracterizare a geografiei județului Caraș-Severin:

        Relief: Județul Caraș-Severin are un relief diversificat, cu munți, dealuri și câmpii. Partea sudică și sud-vestică a județului este dominată de Carpații Meridionali, cu vârfuri înalte și văi adânci. Cele mai importante masive montane sunt Munții Banatului și Munții Mehedinți, care includ vârfuri precum Vârful Semenic și Vârful Țarcu. Dealurile și câmpiile se găsesc în partea de nord și nord-est a județului.
    
        Hidrografie: Județul Caraș-Severin este bogat în resurse hidrografice. Principalele râuri care străbat județul sunt Dunărea, care formează granița cu Serbia, și râurile Bistra, Caraș, Nera, Cerna și Timiș. Aceste râuri formează chei și defilee spectaculoase, oferind peisaje naturale deosebite.
    
        Lacuri și cascade: În județul Caraș-Severin există numeroase lacuri naturale și artificiale, cum ar fi Lacul Trei Ape, Lacul Gozna, Lacul Valea Cernei și Lacul Prisaca. De asemenea, există și cascade impresionante, cum ar fi Cascada Bigăr și Cascada Șușara.
    
        Climă: Județul Caraș-Severin are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 20°C în iulie. Precipitațiile sunt moderate, iar zona montană beneficiază de cantități mai mari de precipitații, inclusiv zăpadă în sezonul rece.
    
        Vegetație: Vegetația din județul Caraș-Severin este diversificată. În zonele de munte se găsesc păduri de conifere, cum ar fi bradul și molidul, îmbinate cu păduri de foioase, cum ar fi fagul și stejarul. Pe câmpiile și dealurile din nordul județului predomină terenurile agricole, pășunile și livezile.
    
        Așezări urbane: Reșița este reședința județului și cel mai mare oraș din regiune. Este un important centru industrial și cultural, cu numeroase obiective turistice, cum ar fi Cetatea Reșița și Muzeul Banatului Montan. Alte orașe importante din județ includ Caransebeș, Bocșa și Oravița.` },

    ],
    "Călărași": [
      {
        "image": "https://i.pinimg.com/originals/32/a9/41/32a941a5d81e598fbba563d7d7e7651e.jpg",
        "text": `Județul Călărași este situat în partea de sud-est a României, în regiunea istorică a Munteniei. Iată o caracterizare a geografiei județului Călărași:

        Relief: Județul Călărași este în principal o regiune de câmpie, situată în Câmpia Română. Terenul este predominant plat și nivelat, cu unele zone ușor ondulate. Partea de nord a județului este străbătută de râul Argeș, care formează o vale largă și fertilă. Altitudinile medii sunt relativ scăzute, variind între 20 și 80 de metri deasupra nivelului mării.
    
        Hidrografie: Județul Călărași este traversat de râul Argeș, care formează o parte importantă a graniței naturale dintre România și Bulgaria. Acest râu aduce fertilizanți naturale în sol și asigură irigarea terenurilor agricole din zonă. Alți afluenți importanți ai râului Argeș în județul Călărași includ râurile Dâmbovița și Ialomița.
    
        Climă: Județul Călărași are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu o concentrație mai mare în timpul verii. Zona câmpiei favorizează agricultura, datorită fertilității solului și a climatului favorabil.
    
        Vegetație: Vegetația din județul Călărași este caracterizată în principal de câmpii și terenuri agricole. Terenurile sunt folosite în principal pentru cultivarea cerealelor, precum grâul, porumbul, floarea-soarelui și rapița. Pădurile sunt relativ puține și se găsesc în special în zonele mai înalte de la marginea județului.
    
        Așezări urbane: Municipiul Călărași este reședința județului și cel mai mare oraș din regiune. Este un important centru economic și administrativ, cu o dezvoltare industrială semnificativă. Alte orașe importante din județ includ Oltenița și Lehliu-Gară.
    
        Obiective turistice: Județul Călărași nu este foarte dezvoltat din punct de vedere turistic, însă există câteva atracții de vizitat. Printre acestea se numără Muzeul Dunării de Jos din Călărași, care prezintă expoziții legate de natura și istoria zonei. De asemenea, există și o serie de mănăstiri și biserici vechi,` },

    ],
    "Constanța": [
      {
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/01/03/23/5b/the-old-casino.jpg",
        "text": `Județul Constanța este situat în partea de sud-est a României, la malul Mării Negre. Iată o caracterizare a geografiei județului Constanța:

        Relief: Județul Constanța este în principal o regiune de câmpie, cu o mică parte sudică situată în Dobrogea de Nord. Câmpia Română se extinde în mare parte pe teritoriul județului, oferind terenuri plane și soluri fertile. Partea sudică a județului este caracterizată de prezența Deltei Dunării, unul dintre cele mai mari și mai bine conservate ecosisteme umede din Europa.
    
        Hidrografie: Județul Constanța este străbătut de râurile importante precum Dunărea și brațele sale, precum și Canalul Dunăre-Marea Neagră, care asigură navigabilitatea. De asemenea, județul are o parte din Delta Dunării, un complex unic de lacuri, mlaștini și canale, care adăpostește o varietate bogată de specii de plante și animale.
    
        Litoralul Mării Negre: Județul Constanța este renumit pentru litoralul său de pe Marea Neagră, cu plaje frumoase și stațiuni balneare populare, cum ar fi Mamaia, Eforie Nord, Neptun-Olimp și Vama Veche. Aici, turiștii pot bucura de plaje nisipoase, activități nautice și o gamă largă de facilități turistice și de agrement.
    
        Climă: Județul Constanța are o climă temperat-continentală moderată, cu influențe marine. Verile sunt calde, cu temperaturi medii între 25°C și 30°C, iar iernile sunt blânde, cu temperaturi medii între 0°C și 5°C. Precipitațiile sunt moderate, cu o ușoară concentrație în timpul sezonului cald.
    
        Vegetație: Vegetația din județul Constanța este caracterizată în principal de stepa pontică și vegetația specifică zonelor litorale. Pe litoral, se găsesc dune de nisip și vegetație adaptată la condițiile de mediu saline, precum crinul de mare și papura. În Delta Dunării, predomină stufărișurile, lunci și păduri de sălcii.
    
        Așezări urbane: Municipiul Constanța este reședința județului și cel mai mare oraș din regiune. Este un important centru turistic, comercial și industrial, cu port maritim și o bogată istorie culturală. Alte orașe importante din județ includ Mangalia, Eforie, Medgidia și Cernavodă.`},

    ],
    "Covasna": [
      {
        "image": "https://img.directbooking.ro/getimage.ashx?f=Statiuni&file=Statiune_20_Covasnacovasna2.jpg.jpg",
        "text": `Județul Covasna este situat în partea centrală a României, în regiunea istorică a Ținutului Secuiesc. Iată o caracterizare a geografiei județului Covasna:

        Relief: Județul Covasna este situat în zona de contact dintre Munții Carpați și Câmpia Română. Partea de nord a județului este dominată de Munții Baraoltului și Munții Bodoc, care fac parte din lanțul muntos al Carpaților Orientali. Aceasta este o zonă cu relief muntos, cu înălțimi care depășesc 1.800 de metri. Partea de sud a județului se încadrează în Câmpia Transilvaniei și are un relief mai plat și mai joas.
    
        Hidrografie: Județul Covasna este traversat de mai multe râuri importante, printre care se numără Oltul, Târnava Mare și Târnava Mică. Aceste râuri formează defilee și chei spectaculoase, cum ar fi Cheile Tătarului și Cheile Zăbalei. În județ se găsesc și numeroase lacuri și iazuri, cele mai cunoscute fiind Lacul Sfânta Ana, cel mai mare lac vulcanic din Europa Centrală, și Lacul Bucura, care face parte din Rezervația Biosferei Pădurea Slătioara.
    
        Climă: Județul Covasna are o climă temperat-continentală, cu veri răcoroase și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 18°C în iulie. Precipitațiile sunt moderate, iar vara se înregistrează cantități mai mari de ploaie. Zona montană din județ beneficiază de un climat mai rece și precipitații mai abundente.
    
        Vegetație: Vegetația din județul Covasna este bogată și diversificată. În zona montană se găsesc păduri de conifere, cum ar fi bradul și molidul, îmbinate cu păduri de foioase, cum ar fi fagul și stejarul. Pe câmpiile și dealurile din Câmpia Transilvaniei predomină terenurile agricole, pășunile și livezile.
    
        Așezări urbane: Municipiul Sfântu Gheorghe este reședința județului și cel mai mare oraș din regiune. Alte orașe importante din județ includ Târgu Secuiesc, Covasna și Întorsura Buzăului. Majoritatea așezărilor din județul Covasna au o populație majoritar maghiară și păstrează tradițiile și cultura secuiești.` },

    ],
    "Dâmbovița": [
      {
        "image": "https://locuridinromania.ro/wp-content/uploads/2018/06/Descriere-judetul-Dambovita.jpg",
        "text": `
        Județul Dâmbovița este situat în partea de sud a României, în regiunea istorică a Munteniei. Iată o caracterizare a geografiei județului Dâmbovița:

    Relief: Județul Dâmbovița are un relief variat, care se încadrează în două unități principale: Subcarpații Getici în nord și Câmpia Română în sud. Subcarpații Getici sunt caracterizați de dealuri și munți cu altitudini moderate, cum ar fi Munții Bucegi și Munții Leaota. Câmpia Română este o zonă joasă și plată, traversată de râul Dâmbovița.

    Hidrografie: Râul Dâmbovița este principalul curs de apă din județ și traversează zona centrală, de la nord la sud. Acesta izvorăște din Munții Bucegi și se varsă în râul Argeș. Alți afluenți importanți ai râului Dâmbovița în județul Dâmbovița includ râurile Ialomița, Prahova și Doamnei.

    Climă: Județul Dâmbovița are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu o concentrație mai mare în timpul verii. Zona montană din Munții Bucegi beneficiază de un climat mai rece și precipitații mai abundente.

    Vegetație: Vegetația din județul Dâmbovița este diversificată. În Subcarpații Getici se întâlnesc păduri de foioase, cum ar fi fagul și stejarul, îmbinate cu păduri de conifere, cum ar fi bradul și molidul. În Câmpia Română predomină terenurile agricole, livezile și pășunile.

    Așezări urbane: Municipiul Târgoviște este reședința județului și cel mai mare oraș din regiune. Este un important centru cultural și istoric, cu numeroase obiective turistice, cum ar fi Cetatea Târgoviște și Biserica Domnească. Alte orașe importante din județ includ Pucioasa, Moreni și Găești.

    Obiective turistice: Județul Dâmbovița oferă o varietate de atracții turistice. Munții Bucegi atrag turiști cu peisajele lor spectaculoase și traseele de drumeții. În Târgoviște, turiștii pot vizita muzee, monumente și să se bucure de atmosfera istorică a orașului. ` },

    ],
    "Dolj": [
      {
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Craiova_-_Centrul.JPG",
        "text": `Dolj este un județ situat în partea de sud-vest a României, în regiunea istorică Oltenia. Iată o caracterizare a geografiei județului Dolj:

         Relief: Doljul este în principal o regiune de câmpie, situată în Câmpia Română. În partea de sud-est a județului se întinde Lunca Dunării, o zonă inundabilă și fertilă. Există și dealuri și coline în nord-vestul județului, precum Dealurile Lișcău și Dealurile Ciorăteni.
        
         Hidrografie: Județul Dolj este străbătut de râul Jiu, unul dintre cele mai importante râuri din România. Acesta curge prin partea de vest a județului și oferă posibilități de irigații și navigație. De asemenea, mai există și alte râuri mai mici, cum ar fi Amaradia și Gilort.
        
         Climă: Doljul are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la aproximativ 0°C în ianuarie până la 23°C în iulie. Precipitațiile sunt relativ moderate, iar iarna poate să ningă abundent.
        
         Vegetație: Doljul are o vegetație predominantă de câmpie, cu păduri de foioase răspândite în unele zone. Terenurile agricole sunt foarte întinse și sunt cultivate cu cereale, plante leguminoase, viță de vie și livezi.
        
         Resurse naturale: Județul Dolj beneficiază de resurse naturale importante, cum ar fi solurile fertile, ceea ce face ca agricultura să fie o activitate economică vitală. Există și zăcăminte de lignit și calcar în unele zone.
        
         Așezări urbane: Craiova, reședința județului Dolj, este cel mai mare și cel mai important oraș din regiune. Alte orașe importante din județ includ Băilești, Calafat și Filiași.
        
        Aceasta este o caracterizare generală a geografiei județului Dolj, evidențiind aspecte precum relief, hidrografie, climă, vegetație și resurse naturale.`
      }
    ],
    "Galați": [
      {
        "image": "https://urlaub-in-rumänien.de/wp-content/uploads/2021/01/galati-kreis-1-1.jpg",
        "text": `Galați este un municipiu și reședința județului Galați, situat în partea de est a României, în regiunea Moldovei. Iată o caracterizare a geografiei municipiului Galați:

        Amplasare geografică: Galați se află pe malurile Dunării, la confluența acestuia cu râul Siret. Este situat într-o zonă apropiată de granița cu Republica Moldova și are acces la Marea Neagră prin intermediul brațului Sulina al Dunării.
    
        Relief: Galați este amplasat în Câmpia Română, o regiune predominant plană și de câmpie. În apropierea orașului se întâlnesc dealuri mici și văi. Pe malurile Dunării se formează grinduri și meandre.
    
        Hidrografie: Dunărea este cel mai important râu care străbate Galațiul. Este navigabil și oferă oportunități pentru transportul de mărfuri și pasageri. De asemenea, în apropiere se găsește râul Siret, care se varsă în Dunăre în apropiere de municipiu.
    
        Climă: Galați are o climă temperat-continentală, cu veri călduroase și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu o ușoară predominanță a acestora în sezonul cald.
    
        Activități economice: Galațiul este un important centru industrial și portuar. Activitățile economice dominante includ industria siderurgică, construcția navală, industria chimică și prelucrarea metalelor. Portul Galați este unul dintre cele mai mari porturi fluviale din România.
    
        Așezare urbană: Galați este un oraș mare și dens populat, cu infrastructură dezvoltată. Orașul se extinde pe malurile Dunării și are o influență semnificativă în regiunea Moldovei.
    
    Aceasta este o caracterizare generală a geografiei municipiului Galați, evidențiind aspecte precum amplasarea geografică, relieful, hidrografia, clima, activitățile economice și așezarea urbană.`,
      }
    ],
    "Giurgiu": [
      {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Giurgiu-clock-tower.jpg/1200px-Giurgiu-clock-tower.jpg",
        "text": `Giurgiu este un municipiu și reședința județului Giurgiu, situat în partea de sud a României, la granița cu Bulgaria. Iată o caracterizare a geografiei municipiului Giurgiu:

        Amplasare geografică: Giurgiu se află în Câmpia Română, o regiune predominant plană situată în sudul țării. Municipiul este situat pe malurile fluviului Dunărea, care formează granița cu Bulgaria. De asemenea, se învecinează cu județele Teleorman și Călărași.
    
        Relief: Giurgiu se găsește într-o zonă cu un relief predominant de câmpie. Terenul este relativ plat, cu unele coline mici și dealuri ușoare. Lunca Dunării este o caracteristică distinctivă a reliefului, oferind terenuri fertile pentru agricultură.
    
        Hidrografie: Dunărea este cel mai important râu care străbate Giurgiu. Este navigabil și oferă posibilități pentru transportul fluvial de mărfuri și pasageri. Pe lângă Dunăre, mai există și câțiva afluenți mai mici care traversează zona, precum Argeșul și Neajlovul.
    
        Climă: Giurgiu are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la aproximativ 0°C în ianuarie până la 23°C în iulie. Precipitațiile sunt relativ moderate și bine distribuite pe parcursul anului.
    
        Activități economice: Giurgiuul este un important centru agricol și industrial. Agricultura are un rol semnificativ în economie, cu culturi precum cerealele, legumele și fructele. De asemenea, există și industrii precum industria alimentară, prelucrarea lemnului și construcțiile navale.
    
        Așezare urbană: Giurgiu este un oraș cu o populație moderată și o infrastructură dezvoltată. Municipiul este conectat prin pod cu orașul vecin Ruse din Bulgaria, ceea ce facilitează legăturile transfrontaliere și comerțul.
    
    Aceasta este o caracterizare generală a geografiei municipiului Giurgiu, subliniind aspecte precum amplasarea geografică, relieful, hidrografia, clima, activitățile economice și așezarea urbană.`
      },

    ],
    "Gorj": [
      {
        "image": "https://www.infopensiuni.ro/cazare-tismana/obiective-turistice-tismana/manastirea-tismana-judetul-gorj_6084/poza-manastirea-tismana-3.jpg",
        "text": `Gorj este un județ situat în partea de sud-vest a României, în regiunea istorică Oltenia. Iată o caracterizare a geografiei județului Gorj:

        Relief: Gorjul este caracterizat printr-un relief variat, cu prezența lanțului muntos Munții Parâng în partea de nord și est. Acești munți sunt parte din Carpații Meridionali și includ vârfuri înalte precum Parângul Mare (2.519 m). În sudul județului se întind dealurile Subcarpaților Getici, care oferă o tranzitie treptată către Câmpia Română.
    
        Hidrografie: Gorjul este străbătut de râurile Jiu și Amaradia. Râul Jiu este cel mai important râu din județ și oferă posibilități pentru pescuit și sporturi nautice. Pe râul Jiu se află și barajul Râșnov, care formează Lacul Râșnov, o destinație populară pentru activități recreative.
    
        Climă: Gorjul are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt bine distribuite pe parcursul anului, cu o ușoară creștere în lunile de vară.
    
        Vegetație: Vegetația județului Gorj variază în funcție de altitudine și regiune. În zonele de munte predomină pădurile de conifere și pășunile alpine, în timp ce în regiunile de câmpie și deal se găsesc păduri de foioase și terenuri agricole utilizate pentru agricultură.
    
        Resurse naturale: Gorjul dispune de resurse naturale importante, cum ar fi cărbunele și hidrocarburile. Există exploatări miniere de cărbune, în special în bazinul minier Jiu. De asemenea, există și izvoare termale și minerale în județ.
    
        Așezări urbane: Municipiul Târgu Jiu este reședința județului și cel mai important centru urban. Alte orașe importante din Gorj includ Motru, Rovinari și Bumbești-Jiu.
    
    Aceasta este o caracterizare generală a geografiei județului Gorj, evidențiind aspecte precum relief, hidrografie, climă, vegetație, resurse naturale și așezări urbane.`
      },

    ],
    "Harghita": [
      {
        "image": "https://i0.wp.com/lipa-lipa.ro/wp-content/uploads/2021/06/Harghita-3-of-4.jpg?fit=1920%2C1080&ssl=1",
        "text": `Harghita este un județ situat în partea centrală a României, în regiunea istorică Transilvania. Iată o caracterizare a geografiei județului Harghita:

        Relief: Harghita este caracterizată de o combinație variată de relief, cu prezența Carpaților Orientali în partea de est și centrul județului. Munții Harghita și Munții Ciucului sunt principalele masive muntoase din zonă, oferind peisaje spectaculoase și oportunități pentru turism montan. Pe lângă munți, județul are și dealuri și câmpii în unele zone.
    
        Hidrografie: Harghita este traversată de râuri importante, precum Mureșul, Oltul, Târnava Mare și Târnava Mică. Aceste râuri contribuie la formarea unor văi frumoase și asigură surse de apă potabilă și irigații în zonă. Există și lacuri mai mici, precum Lacul Sfânta Ana, singurul lac vulcanic din România.
    
        Climă: Județul Harghita are o climă temperat-continentală, cu veri moderat calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 20°C în iulie. Precipitațiile sunt moderate, cu o ușoară creștere în lunile de vară.
    
        Vegetație: Vegetația din Harghita variază în funcție de altitudine și regiune. Munții sunt acoperiți în principal de păduri de conifere, cum ar fi pini și molizi, iar în zonele mai joase se găsesc păduri de foioase, cum ar fi fagi și stejari. Există și pajiști alpine și terenuri agricole în câmpiile și zonele mai plate.
    
        Resurse naturale: Harghita dispune de resurse naturale precum lemnul, apa minerală și turismul. Pădurile bogate asigură o sursă importantă de materiale lemnoase, iar izvoarele de apă minerală atrag turiști în căutare de tratamente balneare.
    
        Așezări urbane: Municipiul Miercurea Ciuc este reședința județului și cel mai mare oraș din zonă. Alte orașe importante includ Gheorgheni, Odorheiu Secuiesc și Toplița.
    
    Aceasta este o caracterizare generală a geografiei județului Harghita, evidențiind aspecte precum relief, hidrografie, climă, vegetație, resurse naturale și așezări urbane.`
      }
    ],
    "Hunedoara": [
      {
        "image": "https://servuspress.ro/wp-content/uploads/2022/03/Castelul-Corvinilor-1024x683.jpg",
        "text": `Hunedoara este un județ situat în partea centrală a României, în regiunea istorică Transilvania. Iată o caracterizare a geografiei județului Hunedoara:

        Relief: Hunedoara se caracterizează printr-un relief variat, cu Munții Apuseni în partea de vest și sud-vest, care fac parte din Carpații Occidentali. Munții Retezat, Parâng și Poiana Ruscă sunt masivele muntoase majore din județ, oferind peisaje spectaculoase și oportunități pentru activități montane și turism. Există și zone de dealuri și câmpii în partea de est și nord-est a județului.
    
        Hidrografie: Județul Hunedoara este traversat de mai multe râuri importante. Râul Mureș străbate județul de la vest la est, oferind o sursă de apă importantă și oportunități pentru activități recreative. Alte râuri notabile includ Jiul de Vest, Jiuțul și Cerna, care formează chei și defilee frumoase în peisaj.
    
        Climă: Hunedoara are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate și bine distribuite pe parcursul anului, cu o ușoară creștere în timpul sezonului cald.
    
        Vegetație: Vegetația județului Hunedoara variază în funcție de altitudine și regiune. În Munții Apuseni și Munții Retezat se găsesc păduri de conifere, cum ar fi pini și molizi, și păduri mixte de foioase, cum ar fi fagi, goruni și stejari. În zonele de câmpie și dealuri, predomină terenurile agricole și pajiștile.
    
        Resurse naturale: Hunedoara are resurse naturale importante, cum ar fi cărbunele, minereurile de fier și gazele naturale. În trecut, industria minieră a fost un sector economic important în județ, cu mine de cărbune și minereuri. De asemenea, județul are și resurse hidroenergetice, datorită râurilor sale.
    
        Așezări urbane: Municipiul Deva este reședința județului și un important centru urban. Alte orașe notabile din Hunedoara includ Hunedoara, Petroșani, Lupeni și Orăștie.
    
    Aceasta este o caracterizare generală a geografiei județului Hunedoara, subliniind aspecte precum relief, hidrografie, climă, vegetație, resurse naturale și așezări urbane.`     },

    ],
    "Ialomița": [
      {
        "image": "https://cdn.adh.reperio.news/image-7/73cfb488-489e-419b-91e5-099ed3d1348f/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D700%26h%3D750%26r%3Dcontain%26f%3Dwebp",
        "text": `Ialomița este un județ situat în partea de sud-est a României, în regiunea istorică Muntenia. Iată o caracterizare a geografiei județului Ialomița:

        Relief: Ialomița are un relief predominant de câmpie, fiind situat în Câmpia Română. Terenul este relativ plat, cu unele ușoare ondulații. În partea de sud, județul este traversat de ramura de nord a Carpaților de Curbură, cu dealuri și coline mici. Munții Buzăului și Grădiștea se ridică în partea sud-vestică a județului.
    
        Hidrografie: Județul Ialomița este traversat de râul Ialomița, care străbate județul de la vest la est. Râul Ialomița este cel mai important râu din zonă și are un rol crucial în alimentarea cu apă și irigații. De asemenea, în județ se găsesc și alte râuri mai mici, cum ar fi Prahova, Călmățui și Teleajen.
    
        Lacuri și bălți: În Ialomița se găsesc mai multe lacuri și bălți, cele mai cunoscute fiind Lacul Amara și Lacul Văcărești. Acestea oferă oportunități pentru pescuit, activități recreative și observarea păsărilor.
    
        Climă: Județul Ialomița are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu maxime în timpul sezonului cald.
    
        Vegetație: Vegetația din Ialomița este caracterizată în principal de câmpii agricole, cu culturi de cereale, legume și viță de vie. În zona de dealuri și mici părți ale Carpaților de Curbură, se găsesc păduri de foioase și conifere, precum stejari, fagi și molizi.
    
        Așezări urbane: Municipiul Slobozia este reședința județului și cel mai important centru urban. Alte orașe notabile din Ialomița includ Fetești, Urziceni și Amara.
    
    Aceasta este o caracterizare generală a geografiei județului Ialomița, evidențiind aspecte precum relief, hidrografie, climă, vegetație, lacuri și așezări urbane.` },

    ],
    "Iași": [
      {
        "image": "https://i.pinimg.com/550x/63/b0/b1/63b0b1f350a3abca549dc5fc0b7362b4.jpg",
        "text": `Iași este un județ situat în partea de nord-est a României, în regiunea istorică Moldova. Iată o caracterizare a geografiei județului Iași:

        Relief: Iași se află într-o zonă predominant de câmpie, parte a Câmpiei Moldovei. Terenul este în general plat, cu unele ușoare ondulații și văi. În partea de sud a județului, se înalță Podișul Moldovei, cu dealuri și coline pitorești. La nord-vest se găsesc Munții Tarcău, care fac parte din Carpații Orientali.
    
        Hidrografie: Județul Iași este străbătut de râul Bahlui, care curge prin centrul orașului Iași. Acest râu are un rol important în alimentarea cu apă a regiunii și oferă oportunități pentru activități recreative. Există și alte râuri mai mici, cum ar fi Jijia și Prutul, care formează granița cu Republica Moldova.
    
        Lacuri și bălți: În Iași se găsesc mai multe lacuri și bălți, precum Lacul Ciric și Lacul Țibănești. Acestea oferă oportunități pentru pescuit, recreere și observarea păsărilor.
    
        Climă: Județul Iași are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate și bine distribuite pe parcursul anului, cu maxime în timpul sezonului cald.
    
        Vegetație: Vegetația din Iași este diversificată, cu păduri de foioase și conifere în zonele de deal și munte, iar în zonele de câmpie predomină terenurile agricole, livezi și pajiști. Există și rezervații naturale, cum ar fi Codrii Iașului, care protejează specii de plante și animale endemice.
    
        Așezări urbane: Municipiul Iași este reședința județului și cel mai mare oraș din regiunea Moldovei. Este un important centru cultural, academic și economic. Alte localități notabile din Iași includ Pașcani, Târgu Frumos și Hârlău.
    
    Aceasta este o caracterizare generală a geografiei județului Iași, evidențiind aspecte precum relief, hidrografie, climă, vegetație, lacuri și așezări urbane.` },

    ],
    "Ilfov": [
      {
        "image": "https://www.stiridinlume.ro/wp-content/uploads/2021/01/Obiective-turistice-in-Ilfov-9.jpg",
        "text": `Ilfov este un județ situat în partea de sud-est a României, în regiunea istorică Muntenia. Cu toate că este cel mai mic județ din țară, el înconjoară municipiul București și este adiacent de capitala României. Iată o caracterizare a geografiei județului Ilfov:

        Relief: Ilfov se caracterizează printr-un relief predominant de câmpie, cu o altitudine medie redusă. Terenul este în general plat sau ușor ondulat, fără munți sau dealuri semnificative. Cu toate acestea, în partea de nord-est a județului se întâlnesc pante ușoare ale Podișului Buzău, care oferă o perspectivă mai variată.
    
        Hidrografie: Județul Ilfov este traversat de râul Dâmbovița, care curge prin municipiul București și apoi prin județ, oferind o sursă importantă de apă. De asemenea, mai multe pâraie și canale traversează teritoriul județului, contribuind la drenarea apelor.
    
        Lacuri și bălți: În Ilfov se găsesc câteva lacuri și bălți, în special în zona deluroasă din nord-estul județului. Cele mai notabile sunt Lacul Cernica și Lacul Căldărușani, care oferă oportunități pentru recreere și relaxare.
    
        Climă: Județul Ilfov are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu maxime în timpul sezonului cald.
    
        Vegetație: Vegetația din Ilfov este dominată de terenurile agricole și de pajiști, în special în zonele mai puțin urbanizate. Există, de asemenea, păduri mici de foioase și conifere în câteva zone, dar acestea sunt mai puțin extinse decât în alte regiuni ale țării.
    
        Așezări urbane: Județul Ilfov include în întregime Municipiul București, capitala României, care este centrul politic, economic și cultural al țării. Alte localități importante din Ilfov sunt Voluntari, Otopeni, Pipera și Corbeanca.
    
    Aceasta este o caracterizare generală a geografiei județului Ilfov, subliniind aspecte precum relief, hidrografie, climă, vegetație, lacuri și așezări urbane, cu accent pe relația sa strânsă cu municipiul București.`  },

    ],
    "Mehedinti": [
      {
        "date": "01 Jan 1000",
        "event": "Apariția primelor așezări umane pe teritoriul actual al județului Mehedinți."
      },
      {
        "date": "01 Jan 1400",
        "event": "Formarea triburilor dacice pe teritoriul actual al Mehedințiului."
      },
      {
        "date": "01 Jan 1600",
        "event": "Construirea unor fortificații și a unor așezări pentru apărarea împotriva invaziilor străine."
      },
      {
        "date": "01 Jan 1700",
        "event": "Începerea cultivării plantelor și creșterii animalelor, care au devenit principalele surse de subsistență pentru locuitorii din Mehedinți."
      },
      {
        "date": "01 Jan 1800",
        "event": "Mehedințiul devine un important centru comercial și cultural, cu mai multe sate și orașe în creștere."
      },
      {
        "date": "01 Jan 1900",
        "event": "Mehedințiul devine parte a României moderne, cu o economie în creștere și o infrastructură dezvoltată."
      }
    ],
    "Mureș": [
      {
        "image": "https://www.tgm.ro/old/images/large_centru-tgm-1.jpg",
        "text": `Mureș este un județ situat în partea centrală a României, în regiunea istorică Transilvania. Iată o caracterizare a geografiei județului Mureș:

        Relief: Județul Mureș are un relief diversificat, cu caracteristici montane, dealuri și câmpii. În partea de nord și nord-vest se află Munții Gurghiu, Munții Harghita și Munții Călimani, care fac parte din Carpații Orientali. Aceste masive muntoase oferă peisaje impresionante și sunt populare pentru activități montane și turism. În partea centrală și sudică a județului, terenul este mai domol, cu dealuri și câmpii, precum Câmpia Transilvaniei și Câmpia Târnavelor.
    
        Hidrografie: Principala cale de apă din județul Mureș este râul Mureș, care străbate județul de la nord la sud. Râul Mureș este un important afluent al Dunării și oferă o sursă vitală de apă pentru agricultură și industrii. De asemenea, județul Mureș este traversat de mai multe râuri mai mici, cum ar fi Târnava Mare și Târnava Mică.
    
        Lacuri și bălți: În Mureș se găsesc mai multe lacuri și bălți, cele mai notabile fiind Lacul Bezid și Lacul Călățele. Acestea oferă oportunități pentru pescuit, activități recreative și observarea păsărilor.
    
        Climă: Județul Mureș are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate și bine distribuite pe parcursul anului, cu maxime în timpul sezonului cald.
    
        Vegetație: Vegetația din Mureș este diversă, cu păduri de conifere și foioase în zonele montane, cum ar fi pini, molizi, fagi și goruni. În zonele de câmpie și dealuri predomină terenurile agricole, livezi și pășuni.
    
        Așezări urbane: Municipiul Târgu Mureș este reședința județului și cel mai mare oraș din regiune. Este un important centru cultural și economic. Alte orașe notabile din Mureș includ Reghin, Sighișoara și Târnăveni.
    
    Aceasta este o caracterizare generală a geografiei județului Mureș, subliniind aspecte precum relief, hidrografie, climă, vegetație, lacuri și așezări urbane.`},

    ],
    "Neamț": [
      {
        "image": "https://www.ziarpiatraneamt.ro/wp-content/uploads/2013/06/piatra-neamt-poze-vechi-2.jpg",
        "text": `Neamț este un județ situat în partea de nord-est a României, în regiunea istorică Moldova. Iată o caracterizare a geografiei județului Neamț:

        Relief: Județul Neamț se află în zona Carpaților Orientali, având un relief predominant muntos și deluros. Masivele montane din județ includ Munții Ceahlău, Munții Bistrița, Munții Tarcău și Munții Stânișoara. Munții Ceahlău sunt cea mai faimoasă și înaltă formațiune montană din regiune, cu Vârful Toaca înalt de 1.907 metri. Aceste zone montane sunt înconjurate de văi adânci, chei și pajiști alpine.
    
        Hidrografie: Județul Neamț este bogat în resurse hidrografice. Principala cale de apă este râul Bistrița, care curge prin județ și formează Lacul Bicaz, unul dintre cele mai mari lacuri de acumulare din România. Alți afluenți importanți ai râului Bistrița sunt râurile Cuejdiu, Ozana și Moldova. Lacurile de acumulare și râurile oferă oportunități pentru activități recreative, cum ar fi pescuitul și sporturile nautice.
    
        Climă: Județul Neamț are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 20°C în iulie. Precipitațiile sunt moderate, cu un maxim în timpul verii.
    
        Vegetație: Vegetația din Neamț este variată, cu păduri de foioase și conifere în zonele montane. Pădurile de conifere, cum ar fi cele de brad și molid, sunt predominante în masivele muntoase. În zonele de dealuri și câmpii, predomină terenurile agricole și pășunile.
    
        Așezări urbane: Municipiul Piatra Neamț este reședința județului și cel mai mare oraș din regiune. Este un important centru cultural și economic. Alte localități notabile din Neamț includ Roman, Târgu Neamț și Bicaz.
    
    Aceasta este o caracterizare generală a geografiei județului Neamț, evidențiind aspecte precum relief, hidrografie, climă, vegetație și așezări urbane.`},

    ],
    "Olt": [
      {
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Podul_Olt.jpg",
        "text": `Județul Olt este situat în partea central-sudică a României, în regiunea istorică Muntenia. Iată o caracterizare a geografiei județului Olt:

        Relief: Județul Olt se află într-o zonă predominant de câmpie, cu relief plat sau ușor ondulat. Terenul este traversat de râul Olt, care își croiește drum prin județ într-o vale adâncă și spectaculoasă. În partea de sud a județului, în zona localităților Caracal și Corabia, se întâlnesc dealurile subcarpatice, care oferă o altitudine mai mare și un peisaj mai variat.
    
        Hidrografie: Principala cale de apă din județul Olt este râul Olt, care curge pe o distanță semnificativă prin județ, străbătând orașele Slatina și Caracal. Oltul este un important afluent al Dunării și joacă un rol crucial în alimentarea cu apă a regiunii. De asemenea, județul Olt este străbătut de râurile Vedea și Jiu, care se varsă în Olt.
    
        Lacuri și bălți: În Olt se găsesc mai multe lacuri și bălți, în special în zona de sud a județului, în apropiere de Corabia și Caracal. Acestea oferă oportunități pentru pescuit, activități recreative și observarea păsărilor.
    
        Climă: Județul Olt are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate și bine distribuite pe parcursul anului, cu maxime în timpul sezonului cald.
    
        Vegetație: Vegetația din Olt este dominată de terenurile agricole, cu culturi de cereale, legume și fructe. Pe malurile râului Olt și în zona dealurilor subcarpatice se găsesc păduri de foioase și conifere, cum ar fi stejarii, fagii și molizii.
    
        Așezări urbane: Municipiul Slatina este reședința județului și cel mai mare oraș din regiune. Este un important centru economic și administrativ. Alte orașe notabile din Olt includ Caracal, Balș și Corabia.
    
    Aceasta este o caracterizare generală a geografiei județului Olt, subliniind aspecte precum relief, hidrografie, climă, vegetație, lacuri și așezări urbane.` },

    ],
    "Satu Mare": [
      {
        "image": "https://i.pinimg.com/originals/0d/65/8a/0d658a973491c76a9ad48d6160b053d3.jpg",
        "text": `Județul Satu Mare este situat în partea de nord-vest a României, la granița cu Ungaria. Iată o caracterizare a geografiei județului Satu Mare:

        Relief: Județul Satu Mare are un relief diversificat, cuprinzând părți din Câmpia Transilvaniei și părți din Munții Maramureșului. Câmpia Transilvaniei ocupă partea de sud a județului, fiind o zonă predominant de câmpie, cu relief plat și ușor ondulat. În partea de nord se întind Munții Maramureșului, care fac parte din Carpații Orientali. Aici se găsesc masive montane precum Munții Gutâi și Munții Țibleș, cu vârfuri ce depășesc 1.500 de metri.
    
        Hidrografie: Județul Satu Mare este traversat de râul Someș, care curge prin partea de sud a județului și joacă un rol important în alimentarea cu apă a regiunii. De asemenea, în zona montană se găsesc numeroase râuri și pâraie ce formează văi adânci și chei pitorești. Unul dintre cele mai cunoscute cursuri de apă este râul Lăpuș, care străbate Munții Maramureșului.
    
        Lacuri și bălți: În județul Satu Mare se găsesc mai multe lacuri și bălți, cel mai important fiind Lacul Sărat din municipiul Satu Mare. Acesta este un lac sărat cu proprietăți curative și este o destinație populară pentru tratamente balneare.
    
        Climă: Județul Satu Mare are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 22°C în iulie. Precipitațiile sunt moderate și bine distribuite pe parcursul anului.
    
        Vegetație: Vegetația din județul Satu Mare este diversă, în funcție de caracteristicile geografice ale zonei. Câmpia Transilvaniei este caracterizată de terenuri agricole extinse, cu culturi de cereale, plante industriale și pășuni. În zonele montane ale Munților Maramureșului se găsesc păduri de conifere, cum ar fi bradul și molidul, alături de păduri de foioase, cum ar fi fagul și gorunul.
    
        Așezări urbane: Municipiul Satu Mare este reședința județului și cel mai mare oraș din regiune. Este un important centru economic, cultural și administrativ. Alte localități notabile din Satu Mare includ Carei, Ardud și Negrești-Oaș.
    
    Aceasta este o caracterizare generală a geografiei județului Satu Mare, evidențiind aspecte
    ` },

    ],
    "Sălaj": [
      {
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/36/Fildu_de_Sus.NV.jpg",
        "text": `Județul Sălaj este situat în partea de nord-vest a României, în regiunea istorică Transilvania. Iată o caracterizare a geografiei județului Sălaj:

        Relief: Județul Sălaj are un relief variat, cuprinzând părți din Carpații Occidentali și Câmpia Transilvaniei. În partea de sud și sud-vest se întind Munții Meseșului, cu altitudini medii de aproximativ 1.000 de metri. Aceasta este o zonă montană pitorească, cu păduri de conifere și foioase, pajiști alpine și văi adânci. Restul județului este ocupat de Câmpia Transilvaniei, caracterizată prin relieful său predominant de câmpie, cu dealuri și câmpuri fertile.
    
        Hidrografie: Județul Sălaj este traversat de mai multe râuri importante, cum ar fi Someșul Mare, Crasna și Barcău. Someșul Mare, care străbate județul de la sud la nord, este unul dintre cele mai mari și mai importante râuri din România. Râurile și pâraiele din județ asigură o rețea hidrografică bogată și oferă resurse de apă pentru irigații și activități economice.
    
        Lacuri și bălți: În județul Sălaj se găsesc numeroase lacuri și bălți, fie naturale, fie artificiale. Un exemplu notabil este Lacul Tăul Sărat din municipiul Zalău, care este un lac sărat cunoscut pentru proprietățile sale terapeutice. Alte lacuri și bălți se găsesc în zonele montane și de câmpie și oferă oportunități pentru pescuit și activități recreative.
    
        Climă: Județul Sălaj are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 22°C în iulie. Precipitațiile sunt moderate și bine distribuite pe parcursul anului, cu maxime în timpul sezonului cald.
    
        Vegetație: Vegetația din județul Sălaj este diversă, reflectând variațiile de relief. În zonele montane predomină pădurile de conifere, cum ar fi bradul și molidul, alături de păduri de foioase, cum ar fi fagul și gorunul. În Câmpia Transilvaniei predomină terenurile agricole, cu culturi de cereale, plante industriale și pășuni.`},

    ],
    "Suceava": [
      {
        "image": "https://orasulsuceava.ro/files/2019/05/suceava-de-altadata-13-2.jpg",
        "text": `Județul Suceava este situat în partea de nord-est a României, în regiunea istorică Bucovina. Iată o caracterizare a geografiei județului Suceava:

        Relief: Județul Suceava are un relief variat, care cuprinde părți din Carpații Orientali și Podișul Sucevei. În partea de nord se întind Munții Carpați, cu masive montane precum Munții Rarău, Munții Giumalău și Munții Călimani. Aici se găsesc vârfuri înalte, chei spectaculoase, lacuri glaciare și păduri de conifere. În partea de sud a județului se află Podișul Sucevei, o zonă de dealuri și câmpii, cu altitudini mai reduse.
    
        Hidrografie: Județul Suceava este bogat în râuri și fluvii. Cel mai important râu din zonă este râul Suceava, care străbate județul de la sud la nord. Alți afluenți importanți ai acestuia sunt râurile Moldova și Bistrița. De asemenea, în județ se găsesc lacuri și bălți, precum Lacul Rarău și Lacul Voroneț.
    
        Climă: Județul Suceava are o climă temperat-continentală, cu veri blânde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 18°C în iulie. Precipitațiile sunt moderate și bine distribuite pe parcursul anului, cu maxime în timpul sezonului cald.
    
        Vegetație: Vegetația din județul Suceava este diversificată, cu o mare varietate de specii. În zonele de munte predomină pădurile de conifere, cum ar fi bradul, molidul și pinul, iar în zonele de câmpie și podiș se găsesc păduri de foioase, cum ar fi fagul, gorunul și stejarul. Bucovina este cunoscută pentru pădurile sale virgine și pentru peisajele pitorești.
    
        Așezări urbane: Municipiul Suceava este reședința județului și cel mai mare oraș din regiune. Este un important centru cultural, istoric și economic. Alte localități notabile din Suceava includ Câmpulung Moldovenesc, Rădăuți, Fălticeni și Vatra Dornei.
    
        Obiective turistice: Județul Suceava este renumit pentru patrimoniul său cultural și natural. Printre atracțiile turistice se numără Mănăstirea Voroneț, Mănăstirea Moldovița, Cetatea de Scaun a Sucevei, Parcul Național Călimani.` },

    ],
    "Teleorman": [
      {
        "image": "https://www.aerotravel.ro/blog/wp-content/uploads/Teleorman-Zimnicea.jpg",
        "text": `Județul Teleorman este situat în partea de sud a României, în regiunea Muntenia. Iată o caracterizare a geografiei județului Teleorman:

        Relief: Județul Teleorman este predominant plat, fiind situat în Câmpia Română. Câmpia Teleormanului, care acoperă cea mai mare parte a județului, este o zonă cu terenuri agricole extinse, caracterizate de câmpii și dealuri joase. În partea de sud-est a județului se întinde Lunca Dunării, o zonă de terenuri inundabile și bălți.
    
        Hidrografie: Județul Teleorman este traversat de râul cu același nume, Teleorman, care străbate județul de la nord la sud. De asemenea, râul Vedea și râul Olt formează limite naturale ale județului. Canalul Dunăre-Marea Neagră trece și el prin partea de sud-est a județului, asigurând navigabilitatea în zonă.
    
        Lacuri și bălți: În județul Teleorman se găsesc numeroase bălți și lacuri mici, în special în zona de luncă a râului Dunărea. Acestea oferă habitat pentru diverse specii de plante și animale, fiind importante pentru biodiversitatea locală.
    
        Climă: Județul Teleorman are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, iar seceta poate fi o problemă în perioadele secetoase de vară.
    
        Vegetație: Vegetația din județul Teleorman este dominată de terenurile agricole, cu culturi de cereale, legume, viță de vie și pomi fructiferi. În zonele mai puțin cultivate se găsesc pășuni și păduri de foioase, cum ar fi stejarul și salcia.
    
        Așezări urbane: Municipiul Alexandria este reședința județului și cel mai mare oraș din regiune. Alte orașe importante din Teleorman includ Turnu Măgurele, Roșiorii de Vede și Zimnicea.
    
    Județul Teleorman este cunoscut pentru agricultura sa, terenurile fertile și produsele agricole de calitate. De asemenea, oferta turistică include rezervații naturale, monumente istorice și tradiții populare.`
      },

    ],

    "Tulcea": [
      {
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Tulcea_1896.JPG",
        "text": `Județul Tulcea este situat în partea de sud-est a României, în regiunea Dobrogea, fiind singurul județ din țară aflat în întregime în Delta Dunării. Iată o caracterizare a geografiei județului Tulcea:

        Relief: Județul Tulcea are un relief diversificat, caracterizat de Delta Dunării și de câmpiile și dealurile Dobrogei. Delta Dunării este o regiune de terenuri umede, unica în Europa, unde Dunărea se divide într-o rețea complexă de canale, lacuri, bălți și mlaștini. În partea de nord a județului se întind dealurile Dobrogei, cu altitudini medii de aproximativ 200 de metri.
    
        Hidrografie: Județul Tulcea este străbătut de râul Dunărea, care formează Delta Dunării. Delta este una dintre cele mai mari zone umede din Europa și un important ecosistem cu o mare varietate de specii de plante și animale. De asemenea, județul este traversat de alte râuri, cum ar fi Sulina și Sfântu Gheorghe, care se varsă în Dunăre.
    
        Lacuri și bălți: Delta Dunării este bogată în lacuri, bălți și canale, formând un labirint acvatic. Acestea oferă un habitat important pentru păsări migratoare, pești și alte specii acvatice. Lacurile Razim și Sinoe, situate în apropiere de litoralul Mării Negre, fac parte și ele din județul Tulcea.
    
        Climă: Județul Tulcea are o climă temperat-continentală, cu influențe marine datorită apropiatei Mări Negre. Verile sunt calde și uscate, iar iernile sunt moderate. Precipitațiile sunt moderate, cu maxime în timpul verii.
    
        Vegetație: Vegetația din județul Tulcea este extrem de diversă, fiind influențată de condițiile specifice ale Deltei Dunării. Delta este acoperită de păduri de stuf, vegetație acvatică, sălcii și specii adaptate la mediu umed. Pe terenurile mai ridicate din Dobrogea se găsesc pășuni și păduri de stejar, fag și carpen.
    
        Așezări urbane: Municipiul Tulcea este reședința județului și principalul centru urban. Este un important nod de transport către Delta Dunării și o bază pentru excursii turistice în zonă. Alte localități din județ includ Sulina, orașul situat în extremitatea estică a Deltei Dunării, și Isaccea, situată în partea de nord a județului.
    
    Județul Tulcea este recunoscut pentru frumusețea și biodiversitatea sa unică, oferind oportunit` },


    ],
    "Vaslui": [
      {
        "image": "https://mediatur.ro/wp-content/uploads/2020/06/Vaslui.jpg",
        "text": `
        Județul Vaslui este situat în partea de est a României, în regiunea Moldovei. Iată o caracterizare a geografiei județului Vaslui:

    Relief: Județul Vaslui are un relief predominant deluros și colinar, fiind traversat de culmile dealurilor Moldovei. Dealurile Moldovei sunt caracterizate de văi adânci, pante ușor înclinate și vârfuri domoale. Altitudinile medii variază între 200 și 400 de metri, cu câteva vârfuri mai înalte, cum ar fi Dealul Ștefan cel Mare.

    Hidrografie: Județul Vaslui este străbătut de râuri importante, cum ar fi râul Prut și râul Bârlad. Râul Prut formează granița cu Republica Moldova în partea de est a județului, iar râul Bârlad traversează județul de la nord la sud. Alți afluenți ai râului Bârlad sunt râurile Tutova și Vasluia. În plus, în județ se găsesc și numeroase bălți și iazuri.

    Climă: Județul Vaslui are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu o distribuție relativ uniformă pe tot parcursul anului.

    Vegetație: Vegetația din județul Vaslui este dominată de pășuni și terenuri agricole, cu o concentrare mare de culturi de cereale și legume. În zonele mai puțin cultivate se găsesc păduri de foioase, cum ar fi stejarul, gorunul și carpenul. De asemenea, există și plantații de viță de vie și pomi fructiferi.

    Așezări urbane: Municipiul Vaslui este reședința județului și cel mai mare oraș din regiune. Alte orașe importante din județ includ Bârlad, Huși și Iași, care se află la o distanță relativ mică de granița județului Vaslui.

    Obiective turistice: Județul Vaslui are un patrimoniu istoric și cultural bogat. Printre atracțiile turistice se numără Cetatea Neamțului din Târgu Neamț, Mănăstirea Neamț și Biserica de lemn din Găvanu. De asemenea, zona oferă oportunități de agrement în natură, precum excursii pe râul Bârlad și drumeții în dealurile Moldovei.

Județul Vaslui este cunoscut pentru tradițiile sale populare, evenimentele culturale și gastronomia autentică.`
      },

    ],
    "Vâlcea": [
      {
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/12/4a/7c/24/entree-du-monastere.jpg",
        "text": `Județul Vâlcea este situat în partea central-sudică a României, în regiunea istorică a Olteniei. Iată o caracterizare a geografiei județului Vâlcea:

        Relief: Județul Vâlcea are un relief diversificat, fiind situat în zona de trecere dintre Carpații Meridionali și Subcarpații Getici. Carpații Meridionali ocupă partea nordică a județului și sunt caracterizați de munți înalți, vârfuri, chei și defilee spectaculoase. Cele mai înalte vârfuri din județ sunt Moldoveanu (2.544 de metri) și Negoiu (2.535 de metri). Subcarpații Getici se extind în partea de sud și sunt mai domoli, cu dealuri și văi ușor ondulate.
    
        Hidrografie: Județul Vâlcea este bogat în resurse hidrografice. Râul Olt traversează județul de la nord la sud, fiind cel mai important râu din zonă. De-a lungul Oltului, se formează chei spectaculoase, precum Cheile Oltului și Cheile Builei. Alți afluenți importanți ai Oltului în județul Vâlcea includ râurile Lotru, Olănești și Govora. Există și numeroase lacuri, lacuri de acumulare și cascade în zona montană.
    
        Climă: Județul Vâlcea are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 22°C în iulie. Precipitațiile sunt moderate, fiind mai abundente în timpul verii. Zona montană din nordul județului beneficiază de un climat mai rece și precipitații mai mari.
    
        Vegetație: Vegetația din județul Vâlcea variază în funcție de altitudine. În zona montană se găsesc păduri de conifere, cum ar fi pini și molizi, îmbinate cu păduri de foioase, cum ar fi fagi și stejari. În Subcarpații Getici predomină pădurile de foioase, iar în câmpiile și dealurile din sud se regăsesc terenuri agricole, pășuni și livezi.
    
        Așezări urbane: Municipiul Râmnicu Vâlcea este reședința județului și cel mai mare oraș din regiune. Alte orașe importante din județ includ Călimănești, Băile Olănești și Brezoi. Zona este cunoscută pentru stațiunile balneare și turistice, care oferă ape minerale și tratamente terapeutice.
    
        Obiective turistice: Județul Vâlcea oferă numeroase atracții turistice, în special în zona montană.` },

    ],
    "Vrancea": [
      {
        "image": "https://img.bunadimineata.ro/uploads/2016/03/teatrul-din-focsani_24155124.jpg",
        "text": `Județul Vrancea este situat în regiunea de sud-est a României, în partea centrală a Moldovei. Iată o caracterizare a geografiei județului Vrancea:

        Relief: Județul Vrancea are un relief variat, incluzând Carpații Orientali, Subcarpații Vrancei și Câmpia Română. Carpații Orientali ocupă partea nordică a județului, cu vârfurile înalte și abrupte, cum ar fi Vârful Moldoveanu (2.544 m), cel mai înalt vârf din România. Subcarpații Vrancei se întind în partea centrală a județului, cu dealuri și coline, iar Câmpia Română ocupă partea sudică, fiind o zonă mai joasă și mai plană.
    
        Hidrografie: Județul Vrancea este străbătut de râul Siret, unul dintre cele mai mari și mai importante râuri din România. Siretul traversează județul de la nord la sud și formează granița cu județul Galați în partea de est. Alți afluenți ai râului Siret în județul Vrancea includ râurile Putna, Râmnicu Sărat și Milcov. Există și câteva lacuri și iazuri în zonă, cum ar fi Lacul Vulturu și Lacul Răcoasa.
    
        Climă: Județul Vrancea are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu o concentrație mai mare în timpul verii. Zona montană din Carpații Orientali beneficiază de un climat mai rece și precipitații mai abundente.
    
        Vegetație: Vegetația din județul Vrancea este diversificată și se adaptează la reliefurile diferite. În zona montană se găsesc păduri de conifere, cum ar fi bradul și molidul, îmbinate cu păduri de foioase, cum ar fi fagul și stejarul. În Subcarpații Vrancei predomină pădurile de foioase, iar în Câmpia Română predomină culturile agricole.
    
        Așezări urbane: Municipiul Focșani este reședința județului și cel mai mare oraș din regiune. Alte orașe importante din județ includ Adjud, Mărășești și Odobești. Focșaniul este centrul economic și cultural al județului, având o istorie bogată și monumente istorice notabile.
    
        Obiective turistice: Județul Vrancea oferă o varietate de atracții turistice, inclusiv zone montane pentru drumeții și activități în aer liber`  },


    ],

    "Brașov": [
      {
        "image": "https://cdn.cluj.com/ghidlocalcom/sites/6/2019/10/brasov-in-35-totografii-istorice-31.jpg",
        "text": `Județul Brașov este situat în partea centrală a României, în regiunea istorică a Transilvaniei. Iată o caracterizare a geografiei județului Brașov:

        Relief: Județul Brașov este situat într-o zonă montană, fiind dominat de Carpații Meridionali și de Munții Piatra Craiului. Cel mai înalt vârf din județ este Vârful Moldoveanu (2.544 m), care face parte din Munții Făgăraș. Alte masive montane importante din zonă includ Munții Bucegi, Munții Piatra Craiului și Munții Postăvaru. Pe lângă acestea, județul are și porțiuni de dealuri și podișuri în zonele de câmpie.
    
        Hidrografie: Județul Brașov este traversat de râul Olt, care își are izvorul în Munții Făgăraș și curge prin județ de la vest la est. Alți afluenți importanți ai râului Olt în județul Brașov includ râurile Timiș și Bârsa. Există și numeroase lacuri de acumulare, precum Lacul Cincis și Lacul Vidraru, care sunt folosite pentru producerea de energie electrică.
    
        Climă: Județul Brașov are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 20°C în iulie. Precipitațiile sunt moderate, cu o concentrație mai mare în timpul verii. Zona montană din județ beneficiază de un climat mai rece și precipitații mai mari, iar în zonele de câmpie se înregistrează temperaturi mai ridicate.
    
        Vegetație: Vegetația din județul Brașov este diversificată și se adaptează la variabilitatea altitudinilor. În zona montană se găsesc păduri de conifere, cum ar fi bradul și molidul, îmbinate cu păduri de foioase, cum ar fi fagul și stejarul. În zonele de câmpie și de deal se întâlnesc terenuri agricole, livezi și păduri mixte.
    
        Așezări urbane: Municipiul Brașov este reședința județului și cel mai mare oraș din regiune. Este un important centru economic, cultural și turistic, cunoscut pentru frumusețea sa arhitecturală și pentru atracțiile turistice, cum ar fi Biserica Neagră și Cetatea Brașov. Alte orașe importante din județ includ Făgăraș, Săcele și Codlea.
    
        Obiective turistice: Județul Brașov oferă numeroase atracții turistice, în special în zona montană. Munții Bucegi`,    
     "title": "Brașov"
      },

    ],

    "Mehedinți": [
      {
        "image": "https://img.bunadimineata.ro/uploads/2015/09/decebal-rex_44309654-1024x683.jpg",
        "text": `Județul Mehedinți este situat în partea de sud-vest a României, în regiunea istorică a Olteniei. Iată o caracterizare a geografiei județului Mehedinți:

        Relief: Județul Mehedinți este marcat de prezența Munților Mehedinți în partea de est și a Câmpiei Române în partea de vest. Munții Mehedinți fac parte din Carpații Meridionali și au vârfuri înalte și abrupte, precum Vârful Păpușa (2.508 m). Câmpia Română este o zonă mai joasă și mai plană, traversată de râul Dunărea.
    
        Hidrografie: Râul Dunărea străbate județul Mehedinți în partea de vest, formând granița naturală cu Serbia. Acesta oferă numeroase posibilități pentru activități recreative și turistice. Pe lângă Dunăre, județul Mehedinți este traversat și de râurile Cerna, Motru și Jiu, care formează defilee și chei spectaculoase.
    
        Climă: Județul Mehedinți are o climă temperat-continentală, cu veri calde și ierni reci. Temperaturile medii variază de la 0°C în ianuarie până la aproximativ 23°C în iulie. Precipitațiile sunt moderate, cu o concentrație mai mare în timpul verii. Zona montană din Munții Mehedinți beneficiază de un climat mai rece și precipitații mai abundente.
    
        Vegetație: Vegetația din județul Mehedinți variază în funcție de altitudine și tipul de teren. În Munții Mehedinți se găsesc păduri de conifere, cum ar fi bradul și molidul, îmbinate cu păduri de foioase, cum ar fi fagul și stejarul. Pe câmpiile și dealurile din Câmpia Română predomină terenurile agricole, pășunile și livezile.
    
        Așezări urbane: Reședința județului Mehedinți este municipiul Drobeta-Turnu Severin, situat pe malul Dunării. Este un important centru economic și cultural al județului. Alte orașe importante din județ includ Orșova, Baia de Aramă și Strehaia.
    
        Obiective turistice: Județul Mehedinți oferă o varietate de atracții turistice. Cetatea Severinului din Drobeta-Turnu Severin, construită în timpul Imperiului Roman, atrage mulți vizitatori. De asemenea, cheile Dunării, precum Cheile Nerei și Cheile Cernei, sunt locuri pitorești și populare pentru drumeții și activități în aer liber. Există și numeroase băi termale și stațiuni balneare în zonă`,
         "title": "Mehedinți"
      },

    ],

  }


  const [isShown, setIsShown] = React.useState(false)


  const [stateName, setStateName] = useState();

  const onLocationClick = (event) => {
    console.log("Name", event.target.getAttribute("name"));
    setIsShown(true)
    setName(event.target.getAttribute("name"))
  };
  return (
    <>
      <React.Fragment>
        <SideSheet className="bg-black" isShown={isShown} onCloseComplete={() => setIsShown(false)}>
          <p className="text-2xl mt-2 text-center ml-5">{name}</p>

          <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
              <img src={Istorie[name][0]['image']} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
              <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                <div className="space-y-2">
                  <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{name}</a>

                </div>
                <div className="dark:text-gray-100">
                  <p>{Istorie[name][0]['text']}</p>
                </div>
              </div>
            </div>
          </div>
        </SideSheet>
      </React.Fragment>
      <div className="w-full h-full">
        <SVGMap map={Romania} onLocationClick={onLocationClick} />
        <h3 className="text-center display-2">{stateName}</h3>
      </div>
    </>
  );
};

export default Map;
