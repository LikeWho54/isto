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
        "date": "01 Jan 1000",
        "event": "Regele Stephen I al Ungariei acordă dreptul de a înființa o biserică la Cluj către un grup de sași."
      },
      {
        "date": "11 Apr 1241",
        "event": " Batalia de la Mohi între armatele regelui Béla al IV-lea al Ungariei și ale lui Batu Khan, conducător al cavaleriei mongole."
      },
      {
        "date": "01 Oct 1316",
        "event": "Regele Carol Robert al Ungariei fondează un colegiu ecleziastic în Cluj."
      },
      {
        "date": "01 Jul 1437",
        "event": "Regele Sigismund al Ungariei stabilește sediul Curții de Apel la Cluj."
      },
      {
        "date": "01 Jan 1541",
        "event": "Ocuparea Clujului de către trupele imperiului otoman."
      },
      {
        "date": "01 Jan 1690",
        "event": "Eliberarea Clujului de sub ocupația otomană de către armata imperială austriacă."
      },
      {
        "date": "01 Jan 1777",
        "event": "Clujul devine capitala regiunii Transilvaniei."
      },
      {
        "date": "15 Mar 1848",
        "event": "Revolta maghiară din Transilvania împotriva administrației austriece."
      },
      {
        "date": "01 Dec 1918",
        "event": "Unirea Transilvaniei cu România, ca urmare a Primului Război Mondial."
      },
      {
        "date": "20 Oct 1940",
        "event": "Ocupația nazistă a Clujului."
      },
      {
        "date": "22 Dec 1944",
        "event": "Regimul comunist din România, în care Clujul devine un important centru al industriei."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață."
      }
    ],
    "Maramureș": [
      {
        "date": "01 Jan 1000",
        "event": "Regele Stephen I al Ungariei acordă dreptul de a înființa biserici în Maramureș."
      },
      {
        "date": "15 Apr 1241",
        "event": "Batalia de la Mohi între armatele regelui Béla al IV-lea al Ungariei și ale lui Batu Khan, conducător al cavaleriei mongole."
      },
      {
        "date": "01 Oct 1776",
        "event": "Maramureș devine parte a regiunii Maramureșului și Crișanei."
      },
      {
        "date": "15 Mar 1848",
        "event": "Revolta maghiară din Transilvania împotriva administrației austriece."
      },
      {
        "date": "01 Dec 1918",
        "event": "Unirea Transilvaniei cu România, ca urmare a Primului Război Mondial."
      },
      {
        "date": "20 Oct 1940",
        "event": "Ocupația nazistă a Maramureșului."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață."
      }
    ],
    "Sibiu": [
      {
        "date": "01 Jan 1000",
        "event": "Regele Stephen I al Ungariei acordă dreptul de a înființa biserici în Sibiu."
      },
      {
        "date": "01 Apr 1241",
        "event": "Batalia de la Mohi între armatele regelui Béla al IV-lea al Ungariei și ale lui Batu Khan, conducător al cavaleriei mongole."
      },
      {
        "date": "01 Oct 1320",
        "event": "Sibiul devine un important centru comercial."
      },
      {
        "date": "15 Mar 1688",
        "event": "Sibiul devine capitala regiunii Transilvaniei."
      },
      {
        "date": "01 Dec 1918",
        "event": "Unirea Transilvaniei cu România, ca urmare a Primului Război Mondial."
      },
      {
        "date": "20 Oct 1940",
        "event": "Ocupația nazistă a Sibiului."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață."
      }
    ],
    "Alba": [
      {
        "date": "01 Jan 1000",
        "event": "Înființarea dreptului de a construi biserici în Alba Iulia de către regele Stephen I al Ungariei."
      },
      {
        "date": "12 Sep 1241",
        "event": "Batalia de la Mohi între armatele regelui Béla al IV-lea al Ungariei și ale lui Batu Khan, conducător al cavaleriei mongole."
      },
      {
        "date": "01 Jan 1300",
        "event": "Alba Iulia devine un important centru comercial."
      },
      {
        "date": "15 Mar 1688",
        "event": "Alba Iulia devine capitala regiunii Transilvaniei."
      },
      {
        "date": "01 Dec 1918",
        "event": "Unirea Transilvaniei cu România, ca urmare a Primului Război Mondial."
      },
      {
        "date": "20 Oct 1940",
        "event": "Ocupația nazistă a Albei Iuliei."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață."
      }
    ],
    "Timiș": [
      {
        "date": "01 Jan 1000",
        "event": "Înființarea dreptului de a construi biserici în Timișoara de către regele Stephen I al Ungariei."
      },
      {
        "date": "12 Sep 1241",
        "event": "Batalia de la Mohi între armatele regelui Béla al IV-lea al Ungariei și ale lui Batu Khan, conducător al cavaleriei mongole."
      },
      {
        "date": "01 Jan 1300",
        "event": "Timișoara devine un important centru comercial."
      },
      {
        "date": "15 Mar 1688",
        "event": "Timișoara devine un important centru cultural și comercial."
      },
      {
        "date": "16 Dec 1989",
        "event": "Revolta anticomunistă din Timișoara, considerată una dintre cauzele căderii comunismului în România."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață."
      }
    ],
    "Prahova": [
      {
        "date": "01 Jan 1000",
        "event": "Înființarea dreptului de a construi biserici în Ploiești de către regele Stephen I al Ungariei."
      },
      {
        "date": "12 Sep 1241",
        "event": "Batalia de la Mohi între armatele regelui Béla al IV-lea al Ungariei și ale lui Batu Khan, conducător al cavaleriei mongole."
      },
      {
        "date": "01 Jan 1700",
        "event": "Ploieștiul devine un important centru comercial și cultural."
      },
      {
        "date": "10 Oct 1857",
        "event": "Descoperirea și exploatarea primei puțuri de petrol din Europa în Ploiești."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață."
      }
    ],
    "Bacău": [
      {
        "date": "01 Jan 1000",
        "event": "Înființarea dreptului de a construi biserici în Bacău de către regele Stephen I al Ungariei."
      },
      {
        "date": "12 Sep 1241",
        "event": "Batalia de la Mohi între armatele regelui Béla al IV-lea al Ungariei și ale lui Batu Khan, conducător al cavaleriei mongole."
      },
      {
        "date": "01 Jan 1700",
        "event": "Bacăul devine un important centru cultural și comercial."
      },
      {
        "date": "10 Oct 1857",
        "event": "Descoperirea și exploatarea primei mine de sare din România în Bacău."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață."
      }
    ],
    "Arad": [
      {
        "date": "01 Jan 1000",
        "event": "Înființarea orașului Arad sub numele de 'Arod.'"
      },
      {
        "date": "12 Sep 1291",
        "event": "Ocuparea orașului Arad de către regatul maghiar."
      },
      {
        "date": "01 Jan 1700",
        "event": "Aradul devine un important centru comercial și cultural."
      },
      {
        "date": "10 Oct 1848",
        "event": "Proclamarea independenței de stat a Principatelor Unite ale României în Arad."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață."
      }
    ],
    "Argeș": [
      {
        "date": "01 Jan 1000",
        "event": "Înființarea unui sistem de administrare locală în Argeș."
      },
      {
        "date": "12 Sep 1300",
        "event": "Ocuparea Argeșului de către regatul Valahiei."
      },
      {
        "date": "01 Jan 1700",
        "event": "Argeșul devine un important centru cultural și religios."
      },
      {
        "date": "10 Oct 1859",
        "event": "Unirea Principatelor Române sub același domeniu."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață."
      }
    ],
    "Bihor": [
      {
        "date": "01 Jan 1000",
        "event": "Înființarea unui sistem de administrare locală în Bihor."
      },
      {
        "date": "12 Sep 1300",
        "event": "Ocuparea Bihorului de către regatul maghiar."
      },
      {
        "date": "01 Jan 1700",
        "event": "Bihorul devine un important centru comercial și cultural."
      },
      {
        "date": "10 Oct 1848",
        "event": "Proclamarea independenței de stat a Principatelor Unite ale României în Bihor."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață."
      }
    ],
    "Bistrița-Năsăud": [
      {
        "date": "01 Jan 1000",
        "event": "Înființarea unui sistem de administrare locală în Bistrița-Năsăud."
      },
      {
        "date": "12 Sep 1300",
        "event": "Ocuparea Bistriței-Năsăudului de către regatul maghiar."
      },
      {
        "date": "01 Jan 1700",
        "event": "Bistrița-Năsăudul devine un important centru al culturii și al industriei."
      },
      {
        "date": "10 Oct 1918",
        "event": "Unirea Bistriței-Năsăudului cu România la finele Primului Război Mondial."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață."
      }
    ],
    "Botoșani": [
      {
        "date": "01 Jan 1000",
        "event": "Înființarea unui sistem de administrare locală în Botoșani."
      },
      {
        "date": "12 Sep 1300",
        "event": "Ocuparea Botoșanilor de către regatul maghiar."
      },
      {
        "date": "01 Jan 1700",
        "event": "Botoșaniul devine un important centru al comerțului și al educației."
      },
      {
        "date": "10 Oct 1848",
        "event": "Proclamarea independenței de stat a Principatelor Unite ale României în Botoșani."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață."
      }
    ],
    "Brăila": [
      {
        "date": "01 Jan 1000",
        "event": "Înființarea unui sistem de administrare locală în Brăila."
      },
      {
        "date": "12 Sep 1300",
        "event": "Ocuparea Brăilei de către regatul maghiar."
      },
      {
        "date": "01 Jan 1700",
        "event": "Brăila devine un important centru al comerțului fluvial și al transportului maritim."
      },
      {
        "date": "10 Oct 1848",
        "event": "Proclamarea independenței de stat a Principatelor Unite ale României în Brăila."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață."
      }
    ],
    "Bucharest": [
      {
        "date": "01 Jan 1400",
        "event": "Fondarea orașului București de către voievodul Mircea cel Bătrân."
      },
      {
        "date": "12 Sep 1600",
        "event": "Bucureștiul devine capitala Țării Românești."
      },
      {
        "date": "01 Jan 1859",
        "event": "Unirea Principatelor Române sub conducerea domnitorului Alexandru Ioan Cuza."
      },
      {
        "date": "10 Oct 1916",
        "event": "Declararea independenței de stat a României moderne în București."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață în București."
      }
    ],
    "Buzău": [
      {
        "date": "01 Jan 1000",
        "event": "Înființarea unui sistem de administrare locală în Buzău."
      },
      {
        "date": "12 Sep 1300",
        "event": "Ocuparea Buzăului de către regatul maghiar."
      },
      {
        "date": "01 Jan 1700",
        "event": "Buzăul devine un important centru al comerțului și al industriei textile."
      },
      {
        "date": "10 Oct 1848",
        "event": "Proclamarea independenței de stat a Principatelor Unite ale României în Buzău."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață în Buzău."
      }
    ],
    "Caraș-Severin": [
      {
        "date": "01 Jan 1000",
        "event": "Formarea triburilor dacice în zona Caraș-Severin."
      },
      {
        "date": "12 Sep 1300",
        "event": "Ocuparea Caraș-Severinului de către imperiul roman."
      },
      {
        "date": "01 Jan 1600",
        "event": "Dezvoltarea industriei mineritului și a metalurgiei în Caraș-Severin."
      },
      {
        "date": "10 Oct 1848",
        "event": "Proclamarea independenței de stat a Principatelor Unite ale României în Caraș-Severin."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață în Caraș-Severin."
      }
    ],
    "Călărași": [
      {
        "date": "01 Jan 1000",
        "event": "Formarea primelor comunități agrare în zona Călărași."
      },
      {
        "date": "12 Sep 1300",
        "event": "Construirea unui sistem de apărare pentru protejarea regiunii împotriva invadatorilor străini."
      },
      {
        "date": "01 Jan 1600",
        "event": "Dezvoltarea comerțului fluvial pe Dunăre în Călărași."
      },
      {
        "date": "10 Oct 1848",
        "event": "Proclamarea independenței de stat a Principatelor Unite ale României în Călărași."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață în Călărași."
      }
    ],
    "Constanța": [
      {
        "date": "01 Jan 1000",
        "event": "Apariția primelor comunități urbane pe malul Mării Negre în zona Constanța."
      },
      {
        "date": "12 Sep 1300",
        "event": "Construirea unui sistem de fortificații pentru protejarea orașului împotriva invadatorilor străini."
      },
      {
        "date": "01 Jan 1600",
        "event": "Dezvoltarea comerțului maritim prin Portul Tomis din Constanța."
      },
      {
        "date": "10 Oct 1848",
        "event": "Proclamarea independenței de stat a Principatelor Unite ale României în Constanța."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață în Constanța."
      }
    ],
    "Covasna": [
      {
        "date": "01 Jan 1000",
        "event": "Apariția primelor comunități de sași în zona actuală a județului Covasna."
      },
      {
        "date": "12 Sep 1300",
        "event": "Dezvoltarea industriei mineritului de sare în zona de munte a Covasnei."
      },
      {
        "date": "01 Jan 1600",
        "event": "Construirea unor drumuri și căi ferate pentru facilitarea transportului de sare din minele din Covasna."
      },
      {
        "date": "10 Oct 1848",
        "event": "Unirea Transilvaniei cu Moldova și Țara Românească, incluzând și zona Covasnei în noua entitate statală."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață în Covasna."
      }
    ],
    "Dâmbovița": [
      {
        "date": "01 Jan 1000",
        "event": "Apariția primelor așezări umane pe teritoriul actual al județului Dâmbovița."
      },
      {
        "date": "12 Sep 1300",
        "event": "Dezvoltarea agriculturii și a industriei textile în zona Dâmboviței."
      },
      {
        "date": "01 Jan 1600",
        "event": "Construirea unor drumuri și căi ferate pentru facilitarea transportului de produse agricole și textile din Dâmbovița."
      },
      {
        "date": "10 Oct 1848",
        "event": "Unirea Principatelor Române, incluzând și teritoriul Dâmboviței în noua entitate statală."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață în Dâmbovița."
      }
    ],
    "Dolj": [
      {
        "date": "01 Jan 1000",
        "event": "Apariția primelor așezări umane pe teritoriul actual al județului Dolj."
      },
      {
        "date": "12 Sep 1300",
        "event": "Dezvoltarea agriculturii și a industriei textile în zona Doljului."
      },
      {
        "date": "01 Jan 1600",
        "event": "Construirea unor drumuri și căi ferate pentru facilitarea transportului de produse agricole și textile din Dolj."
      },
      {
        "date": "10 Oct 1848",
        "event": "Unirea Principatelor Române, incluzând și teritoriul Doljului în noua entitate statală."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață în Dolj."
      }
    ],
    "Galați": [
      {
        "date": "01 Jan 1000",
        "event": "Apariția primelor așezări umane pe teritoriul actual al județului Galați."
      },
      {
        "date": "12 Sep 1300",
        "event": "Dezvoltarea comerțului fluvial pe Dunăre și aportul la economia regiunii din partea portului din Galați."
      },
      {
        "date": "01 Jan 1600",
        "event": "Începerea construirii unor drumuri și căi ferate pentru a facilita transportul de produse comercializate prin portul din Galați."
      },
      {
        "date": "10 Oct 1848",
        "event": "Unirea Principatelor Române, incluzând și teritoriul Galaților în noua entitate statală."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață în Galați."
      }
    ],
    "Giurgiu": [
      {
        "date": "01 Jan 1000",
        "event": "Apariția primelor așezări umane pe teritoriul actual al județului Giurgiu."
      },
      {
        "date": "12 Sep 1300",
        "event": "Dezvoltarea comerțului fluvial pe Dunăre și aportul la economia regiunii din partea portului din Giurgiu."
      },
      {
        "date": "01 Jan 1600",
        "event": "Începerea construirii unor drumuri și căi ferate pentru a facilita transportul de produse comercializate prin portul din Giurgiu."
      },
      {
        "date": "10 Oct 1848",
        "event": "Unirea Principatelor Române, incluzând și teritoriul Giurgiu în noua entitate statală."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață în Giurgiu."
      }
    ],
    "Gorj": [
      {
        "date": "01 Jan 1000",
        "event": "Apariția primelor așezări umane pe teritoriul actual al județului Gorj."
      },
      {
        "date": "10 Oct 1600",
        "event": "Dezvoltarea industriei mineritului de aur și fier în zona montană din Gorj, contribuind la prosperitatea economică a regiunii."
      },
      {
        "date": "01 Jan 1700",
        "event": "Începerea construcției unor drumuri și căi ferate care să lege zona montană din Gorj de restul țării, facilitând transportul resurselor minerale."
      },
      {
        "date": "01 Jan 1850",
        "event": "Începerea dezvoltării industriei textile în Gorj, cu focus pe producția de lână și bumbac."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață în Gorj."
      }
    ],
    "Harghita": [
      {
        "date": "01 Jan 1000",
        "event": "Apariția primelor așezări umane pe teritoriul actual al județului Harghita."
      },
      {
        "date": "10 Oct 1600",
        "event": "Dezvoltarea industriei lemnului și a exploatării pădurilor din Harghita, contribuind la prosperitatea economică a regiunii."
      },
      {
        "date": "01 Jan 1700",
        "event": "Începerea construcției unor drumuri și căi ferate care să lege zona montană din Harghita de restul țării, facilitând transportul resurselor."
      },
      {
        "date": "01 Jan 1850",
        "event": "Începerea dezvoltării industriei turistice în Harghita, cu focus pe atragerea turiștilor în zonele montane și lacurile din zonă."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață în Harghita."
      }
    ],
    "Hunedoara": [
      {
        "date": "01 Jan 1000",
        "event": "Apariția primelor așezări umane pe teritoriul actual al județului Hunedoara."
      },
      {
        "date": "10 Oct 1300",
        "event": "Construirea castelului Corvinilor, care a devenit un simbol al puterii și prosperității din regiune."
      },
      {
        "date": "01 Jan 1500",
        "event": "Dezvoltarea industriei mineritului în Hunedoara, cu exploatarea resursele de fier și huilă din zonă."
      },
      {
        "date": "01 Jan 1700",
        "event": "Începerea construcției unor drumuri și căi ferate care să lege zona montană din Hunedoara de restul țării, facilitând transportul resurselor."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață în Hunedoara."
      }
    ],
    "Ialomița": [
      {
        "date": "01 Jan 1000",
        "event": "Apariția primelor așezări umane pe teritoriul actual al județului Ialomița."
      },
      {
        "date": "01 Jan 1300",
        "event": "Construirea primelor biserici și mănăstiri pe teritoriul județului Ialomița, care au devenit centre ale vieții spirituale și culturale din regiune."
      },
      {
        "date": "01 Jan 1600",
        "event": "Începerea cultivării plantelor și creșterea animalelor, care au devenit principalele surse de subsistență pentru locuitorii din Ialomița."
      },
      {
        "date": "01 Jan 1900",
        "event": "Dezvoltarea industriei agricole și pescuitului pe Dunăre, care au crescut economia județului Ialomița."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață în Ialomița."
      }
    ],
    "Iași": [
      {
        "date": "01 Jan 1000",
        "event": "Apariția primelor așezări umane pe teritoriul actual al județului Iași."
      },
      {
        "date": "01 Jan 1300",
        "event": "Construirea primelor biserici și mănăstiri, care au devenit centre ale vieții spirituale și culturale din regiune."
      },
      {
        "date": "01 Jan 1600",
        "event": "Începerea cultivării plantelor și creșterii animalelor, care au devenit principalele surse de subsistență pentru locuitorii din Iași."
      },
      {
        "date": "01 Jan 1700",
        "event": "Iașiul devine un important centru cultural și spiritual al Moldovei, cu multe biblioteci și școli importante."
      },
      {
        "date": "23-24 June 1941",
        "event": "Iașiul este distrus în cel mai mare pogrom evreiesc din Europa de Est din timpul celui de-Al Doilea Război Mondial."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață în Iași."
      }
    ],
    "Ilfov": [
      {
        "date": "01 Jan 1000",
        "event": "Apariția primelor așezări umane pe teritoriul actual al județului Ilfov."
      },
      {
        "date": "01 Jan 1300",
        "event": "Dezvoltarea agriculturii și creșterii animalelor, care au devenit principalele surse de subsistență pentru locuitorii din Ilfov."
      },
      {
        "date": "01 Jan 1600",
        "event": "Începerea comerțului și a producției artizanale în Ilfov."
      },
      {
        "date": "01 Jan 1700",
        "event": "Dezvoltarea rețelei de drumuri și a transportului, care au facut din Ilfov un important centru de comunicații."
      },
      {
        "date": "01 Jan 1800",
        "event": "Constituirea primelor instituții administrative și economice în Ilfov."
      },
      {
        "date": "01 Jan 1900",
        "event": "Dezvoltarea industriei și a serviciilor în Ilfov, care au contribuit la creșterea prosperității județului."
      },
      {
        "date": "22 Dec 1989",
        "event": "Căderea comunismului și începutul tranziției spre o economie de piață în Ilfov."
      }
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
      "date": "01 Jan 1000",
      "event": "Apariția primelor așezări umane pe teritoriul actual al județului Mureș."
      },
      {
      "date": "01 Jan 1300",
      "event": "Construirea primelor fortificații și a cetăților, care au servit la apărarea regiunii împotriva invadatorilor."
      },
      {
      "date": "01 Jan 1600",
      "event": "Dezvoltarea comerțului și a industriei textile, care au adus prosperitate regiunii."
      },
      {
      "date": "01 Jan 1700",
      "event": "Constituirea primelor organizații culturale și religioase, care au susținut dezvoltarea vieții spirituale și culturale din Mureș."
      },
      {
      "date": "23-24 June 1941",
      "event": "Distrugerea sau deteriorarea multor edificii istorice și monumente culturale din Mureș în timpul celui de-Al Doilea Război Mondial."
      },
      {
      "date": "22 Dec 1989",
      "event": "Căderea comunismului și începutul tranziției spre o economie de piață în Mureș."
      }
      ],
      "Neamț":[
        {
        "date": "1000",
        "event": "Apariția primelor așezări umane pe teritoriul actual al județului Neamț."
        },
        {
        "date": "1300",
        "event": "Construirea primelor biserici și mănăstiri, care au devenit centre ale vieții spirituale și culturale din regiune."
        },
        {
        "date": "1467",
        "event": "Neamțul devine un principat independent sub domnia lui Petru Rareș."
        },
        {
        "date": "1600",
        "event": "Începerea cultivării plantelor și creșterii animalelor, care au devenit principalele surse de subsistență pentru locuitorii din Neamț."
        },
        {
        "date": "1700",
        "event": "Neamțul devine un important centru economic al Moldovei, cu una dintre cele mai mari piețe din regiune."
        },
        {
        "date": "1918",
        "event": "Unirea Transilvaniei cu România, incluzând și Neamțul."
        },
        {
        "date": "1944",
        "event": "Intrarea Armatei Roșii în Neamț, marcând sfârșitul celui de-Al Doilea Război Mondial."
        }
      ],
      "Olt":[
        {
           "date": "1000",
           "event": "Prima mențiune înregistrată a judetului Olt"
        },
        {
           "date": "1310",
           "event": "Înființarea castelului de la Slatina"
        },
        {
           "date": "1479",
           "event": "A fost fondat orașul Slatina"
        },
        {
           "date": "1601",
           "event": "A fost înființată biserica Sfântul Nicolae din Slatina"
        },
        {
           "date": "1784",
           "event": "A fost construită catedrala Ortodoxă din Slatina"
        },
        {
           "date": "1831",
           "event": "A fost înființată școala primară din Slatina"
        },
        {
           "date": "1948",
           "event": "A fost fondată instituția de învățământ superior din Slatina"
        },
        {
           "date": "1989",
           "event": "A fost realizată reforma economică în România, influențând și judetul Olt"
        },
        {
           "date": "2020",
           "event": "Continuă să se dezvolte economia și infrastructura judetului Olt"
        }
     ],
     "Satu Mare": [
      {
         "date": "1000",
         "event": "Prima mențiune a orașului Satu Mare"
      },
      {
         "date": "1310",
         "event": "Fondarea castelului de la Satu Mare"
      },
      {
         "date": "1479",
         "event": "A fost înființat orașul Satu Mare"
      },
      {
         "date": "1601",
         "event": "A fost construită biserica Sfânta Maria din Satu Mare"
      },
      {
         "date": "1784",
         "event": "A fost înființată școala primară din Satu Mare"
      },
      {
         "date": "1831",
         "event": "A fost construită catedrala Catolică din Satu Mare"
      },
      {
         "date": "1948",
         "event": "A fost fondată instituția de învățământ superior din Satu Mare"
      },
      {
         "date": "1989",
         "event": "A fost realizată reforma economică în România, influențând și judetul Satu Mare"
      },
      {
         "date": "2020",
         "event": "Continuă să se dezvolte economia și infrastructura judetului Satu Mare"
      }
   ],
   "Sălaj" : [
    {
       "date": "1000",
       "event": "Prima mențiune a judetului Sălaj"
    },
    {
       "date": "1310",
       "event": "Fondarea castelului de la Zalău"
    },
    {
       "date": "1479",
       "event": "A fost înființat orașul Zalău"
    },
    {
       "date": "1601",
       "event": "A fost construită biserica Sfântul Ioan din Zalău"
    },
    {
       "date": "1784",
       "event": "A fost înființată școala primară din Zalău"
    },
    {
       "date": "1831",
       "event": "A fost construită catedrala Ortodoxă din Zalău"
    },
    {
       "date": "1948",
       "event": "A fost fondată instituția de învățământ superior din Zalău"
    },
    {
       "date": "1989",
       "event": "A fost realizată reforma economică în România, influențând și judetul Sălaj"
    },
    {
       "date": "2020",
       "event": "Continuă să se dezvolte economia și infrastructura judetului Sălaj"
    }
 ],
 "Suceava": [
  {
     "date": "1000",
     "event": "Prima mențiune a judetului Suceava"
  },
  {
     "date": "1310",
     "event": "Fondarea castelului de la Suceava"
  },
  {
     "date": "1479",
     "event": "A fost înființat orașul Suceava"
  },
  {
     "date": "1601",
     "event": "A fost construită biserica Sfântul Gheorghe din Suceava"
  },
  {
     "date": "1784",
     "event": "A fost înființată școala primară din Suceava"
  },
  {
     "date": "1831",
     "event": "A fost construită catedrala Ortodoxă din Suceava"
  },
  {
     "date": "1948",
     "event": "A fost fondată instituția de învățământ superior din Suceava"
  },
  {
     "date": "1989",
     "event": "A fost realizată reforma economică în România, influențând și judetul Suceava"
  },
  {
     "date": "2020",
     "event": "Continuă să se dezvolte economia și infrastructura judetului Suceava"
  }
],
"Teleorman":[
  {
     "date": "1000",
     "event": "Prima mențiune a judetului Teleorman"
  },
  {
     "date": "1300",
     "event": "Fondarea primelor sate din Teleorman"
  },
  {
     "date": "1600",
     "event": "Dezvoltarea agriculturii în Teleorman"
  },
  {
     "date": "1700",
     "event": "Fondarea unor mari familii de boieri în Teleorman"
  },
  {
     "date": "1800",
     "event": "Dezvoltarea industriei textile în Teleorman"
  },
  {
     "date": "1848",
     "event": "Revoluția din 1848 a afectat judetul Teleorman"
  },
  {
     "date": "1948",
     "event": "Socializarea industriei în Teleorman"
  },
  {
     "date": "1989",
     "event": "A fost realizată reforma economică în România, influențând și judetul Teleorman"
  },
  {
     "date": "2020",
     "event": "Continuă să se dezvolte economia și infrastructura judetului Teleorman"
  }
],

" 	Tulcea":[
  {
     "date": "1839",
     "event": "sultanii otomani au declanșat reformele denumite Tanzimat. După Războiul Crimeei, în contextul acestora, în regiunea malului drept al cursului inferior al Dunării, Imperiul a organizat vilayetul Dunării, o provincie pe care o dorea un model pentru organizarea altor provincii ale statului multietnic. În cadrul acestui vilayet, Tulcea juca rolul de capitală a subunității administrative ce cuprindea nord-estul extrem: sangeacul Tulcea.[5] S-a construit un palat administrativ unde își avea sediul instituția mutesarifului de sangeac; între 1856 și 1878, postul acesta a fost ocupat succesiv de Suleiman Bei, Resid Paşa, Razim Paşa, Ismail Paşa, Fahri Bei, Ali Bei și Said Bei.[6]"
  },
  {
     "date": "1877–1878",
     "event": "Aceasta a primit prin tratatul de la Berlin Dobrogea de Nord împreună cu recunoașterea internațională a independenței, Tulcea devenind de atunci parte a statului român. "
  },
  {
     "date": " 1950",
     "event": "Tulcea a fost reședința județului Tulcea (interbelic). După instaurarea regimului comunist în România, Tulcea a devenit reședința unui raion din Regiunea Dobrogea. "
  },
  {
     "date": "1945",
     "event": "După cel de al Doilea Război Mondial, orașul s-a extins și s-a modernizat. În prezent, vatra orașului atinge o suprafață de 115km² și o populație de 68.608 locuitori (în anul 2011)"
  },

],
"Vaslui": [
  {
     "date": "1000",
     "event": "Prima mențiune a judetului Vaslui"
  },
  {
     "date": "1300",
     "event": "Fondarea primelor sate din Vaslui"
  },
  {
     "date": "1600",
     "event": "Dezvoltarea agriculturii în Vaslui"
  },
  {
     "date": "1700",
     "event": "Fondarea unor mari familii de boieri în Vaslui"
  },
  {
     "date": "1800",
     "event": "Dezvoltarea industriei textile în Vaslui"
  },
  {
     "date": "1848",
     "event": "Revoluția din 1848 a afectat judetul Vaslui"
  },
  {
     "date": "1948",
     "event": "Socializarea industriei în Vaslui"
  },
  {
     "date": "1989",
     "event": "A fost realizată reforma economică în România, influențând și judetul Vaslui"
  },
  {
     "date": "2020",
     "event": "Continuă să se dezvolte economia și infrastructura judetului Vaslui"
  }
],
"Vâlcea": [
  {
     "date": "1000",
     "event": "Prima mențiune a regiunii Vâlcea"
  },
  {
     "date": "1300",
     "event": "Formarea primelor sate în regiunea Vâlcea"
  },
  {
     "date": "1600",
     "event": "Dezvoltarea agriculturii în Vâlcea"
  },
  {
     "date": "1700",
     "event": "Fondarea unor mari familii de boieri în Vâlcea"
  },
  {
     "date": "1800",
     "event": "Formarea unor centre economice importante în Vâlcea"
  },
  {
     "date": "1848",
     "event": "Revoluția din 1848 a afectat regiunea Vâlcea"
  },
  {
     "date": "1948",
     "event": "Socializarea industriei în Vâlcea"
  },
  {
     "date": "1989",
     "event": "A fost realizată reforma economică în România, influențând și regiunea Vâlcea"
  },
  {
     "date": "2020",
     "event": "Continuă să se dezvolte economia și infrastructura în Vâlcea"
  }
],
"Vrancea": [
  {
     "date": "1000",
     "event": "Prima mențiune a regiunii Vrancea"
  },
  {
     "date": "1300",
     "event": "Formarea primelor sate în regiunea Vrancea"
  },
  {
     "date": "1600",
     "event": "Dezvoltarea agriculturii în Vrancea"
  },
  {
     "date": "1700",
     "event": "Fondarea unor mari familii de boieri în Vrancea"
  },
  {
     "date": "1800",
     "event": "Formarea unor centre economice importante în Vrancea"
  },
  {
     "date": "1848",
     "event": "Revoluția din 1848 a afectat regiunea Vrancea"
  },
  {
     "date": "1948",
     "event": "Socializarea industriei în Vrancea"
  },
  {
     "date": "1989",
     "event": "A fost realizată reforma economică în România, influențând și regiunea Vrancea"
  },
  {
     "date": "2020",
     "event": "Continuă să se dezvolte economia și infrastructura în Vrancea"
  }
]



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
          <ul className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
            {Istorie[name].map(function (object, i) {
              return (
                <li>
                  <article>
                    <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
                      <time datetime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">{Istorie[name][i]['date']}</time>
                      <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">{Istorie[name][i]['event']}</p>
                    </a>
                  </article>
                </li>
              );
            })}
          </ul>
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
