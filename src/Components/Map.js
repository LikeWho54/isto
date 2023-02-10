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
        "text": `În 1443 la Cluj în casa Matei Corvin se naşte Matei Corvin, fiul lui Ioan de Hunedoara şi viitor rege al Ungariei. Pe timpul domniei sale ca rege al Ungariei, Matei Corvin va creşte implicarea meşteşugarilor în administrarea urbei, decizând ca cetatea să fie condusă de un consiliu format din 100 de centumviri, decişi jumătate de breslaşii clujeni şi jumătate de persoanele cu o stare materială bună. Jumătate dintre aleşi urmau să fie maghiari, iar cealaltã jumătate saşi. Pe atunci populaţia urbei era formată din în principal din saşi, secui şi în mică măsură din români.

        Dorind să impulsioneze dezvoltarea urbei sale natale, Matei Corvin a acordat în perioada 1458-1490 un număr de 41 de privilegii localităţii sale natale, apărând-o în conflictele cu nobilii, biserica şi aşezările din jur. Pentru a ajuta la creşterea populaţiei, a emis o serie de decrete (în 1467, 1478 şi 1485) prin care a decis să acorde dreptul de a se stabili în oraş iobagilor ce şi-au achitat taxele. În 1463 şi apoi în 1467 Corvin va apăra Clujul în procesele cu reprezentanţii bisericeşti ai mănăstirii de la Cluj-Mănăştur, urmând ca apoi să îi sprijine împotriva atacurilor nobililor de Someşeni. Îi va apăra şi în cazul conflictelor cu unii nobili care refuzau să-şi achite datoriile faţă de urbe, de asemenea în cazul procesului cu nobilul Francisc Mykola, care a încercat în 1489 să dea foc oraşului.
        
        Matei Corvin va decreta totodată şi scutirea negustorilor clujeni de plata vămii la Turda, Nădăşel, Bernadea, Oradea, Fughiu, Vadul Crişului, Gilău, Buza şi Bahnea. După ce la 18/28 septembrie 1600 Mihai Viteazul este înfrânt în bătălia de la Mirăslău, Clujul se va răzbuna pe oamenii acestuia. În timp ce se afla cu o solie, Baba Novac a fost arestat de Dieta de la Cluj (formată din aristocraţia maghiară), condusă de Ştefan Csaky, unul dintre liderii grupării nobiliare care dorea răsturnarea situaţiei politice din Transilvania.

        Novac va fi condamnat la moarte împreună cu preotul Saski. Ulterior aceeaşi soartă o vor avea şi alţi oameni ai lui Mihai Viteazul: Ioan Szelestey, armaşul Sava şi un soldat al său, un grec "inima şi sufletul lui Mihai Vodă", care a fost prins la Bistriţa şi adus la Cluj în 21 iulie 1601. Pe 5 februarie 1601, ora 10 a.m. Baba Novac şi preotul Saski vor fi arşi pe rug. În arhivele istorice ale oraşului există încă notele privind cheltuielile făcute. La sfârşitul secolului XVII, odată cu Tratatul de la Karlovitz din 1699, Clujul devine parte a monarhiei habsburge, intrând sub dominaţie austriacă. După un acord silit semnat de Mihai Apafi I, cetatea Clujului a fost nevoită să găzduiască trupele ducelui de Lorena, asigurându-le un serviciu de 100 000 de florini. Cu toate acestea ostaşii au şi jefuit oraşul şi au cerut sume suplimentare de la contribuabili.

        Generalul austriac Rabutin distruge în 1704 zidurile Clujului, pentru ca oraşul să îşi piardă semnificaţia militară.
        
        Începând cu 1715, armata habsburgă începe construirea fortificaţiei Vauban Cetăţuia, prima fortificaţie de acest fel din Transilvania.
        
        Din 1790 până în 1848 şi apoi din nou în perioada 1861 - 1867, Clujul a fost capitala Marelui Principat al Transilvaniei în cadrul imperiului austriac, fiind totodată şi sediul dietelor transilvane. În 1776, împărăteasa Maria Tereza a Austriei fondează aici o universitate germană. Aceasta nu a existat pentru multă vreme, Iosif al II-lea de Habsburg transformând-o în "Universitatea Piaristă", cu predare în latină. În 1798 oraşul a fost distrus în mare parte de un incendiu.  Cu o populaţie 10 660 de locuitori, cetatea se transformă în capitala Transilvaniei, lucru care duce la modernizare acesteia, dar şi la sporirea numărului locuitorilor români. Importantele mişcări revoluţionare de la 1848 cuprind şi Clujul. Deşi un important centru revoluţionar, avea un statut contradictoriu, datorită nobilimii. Doctrina a cuprins tineretul de la facultăţi, academii şi gimnazii, care s-au ocupat de popularizarea acesteia. Oraşul va adăposti tratativele dintre Nicolae Bălcescu şi Cezar Bolliac, pentru unirea revoluţiei române cu cea maghiară. Înfrângerea revoluţiei ungare, a dus la instaurarea regimului absolutist. Capitala a fost mutată la Sibiu, pentru a exista o influenţă austriacă mai mare asupra autorităţilor. Mai târziu, Clujul a devenit unul dintre cele şase districte militare transilvănene, administrând un teritoriu de 400 000 de locuitori.

        Din 1830 oraşul devine sediul mişcării naţionale ungare din principat. În perioada revoluţiilor de la 1848, Clujul a fost ocupat de trupele generalului polonez Józef Bem. `
      },

    ],
    "Maramureș": [
      {
        "image": "https://img.bunadimineata.ro/uploads/2015/07/toamna-in-maramures_61127305.jpg",
        "text": `Veche regiune românească, Țara Maramureșului este atestată documentar pentru prima oară cu acest nume în 1199, în perioada expansiunii ungare în Transilvania. În acea epocă, exista populație românească în întreg Maramureșul, precum și în regiunile vecine, la vest, Ung, Bereg și Ugocea. Pentru acestea din urmă, regii Ungariei garantau românilor dreptul de a-și alege singuri voievodul și de a fi judecați după "dreptul valah" (ius valachicum) până după anul 1383, de când datează ultima atestare documentară în această privință. 1241: Invazie tătară în Maramureș și Transilvania. O coloană tătară condusă de către generalii Cadan și Buri pleacă din Podolia, intră în Moldova de nord și trec în Transilvania prin trecătoarea Cârlibaba (Pasul Tătarilor) în cursul lunii martie 1241. Coloana tătară condusă de însuși Batu-Khan, avândul alături pe generalul Subotai, au devastat și jefuit voievodatele maramureșene, pătrunzând adânc până la Miskolc. 1285: Invazie tătară în Transilvania; maramureșenii trec Carpații in urmărirea tătarilor. 1334: Invazie tătară în Transilvania; s-au distins în lupte frații Drag și Dragoș din Bedeu și ruda lor Mihail Bogdan din Petrova.1342: Bogdan din Cuhea se refugiază în Moldova dintre Siret și Nistru și este învinuit de regele Ungariei de trădare;1365: Este confiscată moșia lui Bogdan din Cuhea ca urmare a independenței Moldovei; Bogdan pierde satele Ieud, Bacicov, Vișeu, Borșa, Moisei și Seliște care sunt date lui Balc și Drag. După 1688, Maramureșul a devenit parte a Imperiului Austriac, odată cu Transilvania. În Maramureș nu a avut loc o trecere la unirea religioasă cu Roma ca în Ardeal. Greco-catolicismul în Maramureș a fost prezent prin apartenența religioasă a românilor la episcopia ruteană a Muncaciului, care a trecut la unire cu Roma odată cu celelalte episcopii din Galiția. Biserica ortodoxă a rămas prezentă până spre sfârșitul secolului al XIX-lea prin câteva schituri care s-au afiliat stărețiilor moldovene, îndeosebi celei de la Putna. `
      },

    ],
    "Sibiu": [
      {
        "image": "https://www.casa-vale.net/romania-poze-imagini/RO54006-sibiu-foto.jpg",
        "text": `Sibiul a fost fondat pe locul unei mai vechi aşezări, probabil slave, imediat dupa mijlocul secolului XII de colonişti saşi din teritoriul Rin-Mosela. Prima menţiune a cetăţii este făcută în 1191 sub numele Cibinium într-un document ecleziastic de la Vatican. Prima atestare documentară în forma Hermannstadt datează din anul 1223, dar există şi menţiuni ale numelui Villa Hermanni. În anul 1241 a fost atacat, cucerit şi parţial distrus de hoardele mongole. În secolul XIV, Sibiul a devenit un mare centru de comerţ şi timp de secole a fost cea mai importantă cetate germană din Transilvania. Oraşul era organizat în bresle, fiind cunoscute un număr maxim de 19 bresle.

        În anul 1366 Sibiul a fost declarat "oraş".
        
        Pe vremuri, Sibiul a fost un centru meşteşugăresc renumit. Prima breaslă atestată documentar în oraş este cea a tăbăcarilor, în 1367, iar în 1780 la Sibiu erau înregistrate 40 de bresle. De altfel, pe strada Cetăţii, acolo unde pot fi găsite vara calfele călătoare, te întâmpină cele trei turnuri de apărare care au păstrat peste timp denumirea breslelor care le aveau în grijă: Turnul Archebuzierilor, Turnul Olarilor şi Turnul Dulgherilor.Aici a fost publicat, în anul 1544, Catehismul Luteran, prima carte tipărită în limba română.

        Din 1692, odată cu creşterea influenţei austriece, Sibiul devine capitala Transilvaniei. Aceasta este o perioadă înfloritoare a oraşului, cea mai importantă construcţie din această perioadă fiind Palatul Brukenthal.
        
        În secolul XIX se construieşte prima linie de cale ferată, iar în 1897 Sibiul este electrificat. Tot în această perioadă Sibiul este sediul asociaţiei ASTRA şi un oraş important al comunităţii româneşti.
        
        Ca urmare a celui de-al doilea război mondial şi a perioadei comuniste populaţia săsească s-a diminuat considerabil prin deportări în Siberia şi mai târziu prin emigrarea masivă în Germania.
        Evenimente importante în istoria Sibiului
        
            1292 - A fost deschis primul spital de pe teritoriul actual al României.
            1300 - Intr-un document se aminteste existenta Bisericii Sf. Elisabeta.
            1350 - La Sibiu se infiinteaza prima monetarie din Transilvania.
            1380 - A fost documentată prima şcoală de pe teritoriul actual al României.
            1494 - Prima farmacie de pe teritoriul actual al României.
            1534 - Prima fabrică de hârtie de pe teritoriul actual al României.
            1544 - A fost tipărită la Sibiu prima carte în limba română.
            1551 - Primul experiment cu rachete din lume, realizat de Konrad Haas.
            1671 - A fost descoperit gaz metan lângă Sibiu.
            1782 - Franz Joseph Müller a descoperit elementul chimic teluriu.
            1788 - Primul teatru de pe teritoriul actual al României.
            1795 - Primul paratrăsnet din Sud-Estul Europei este instalat în Cisnădie.
            1797 - Samuel von Hahnemann deschide primul laborator homeopatic din lume.
            1817 - Primul muzeu din România, Muzeul Naţional Brukenthal este deschis la Sibiu.
            1861 - Se înfiinţează societatea ASTRA.
            1896 - Prima linie electrică din Sud-Estul Europei.
            1904 - Al doilea oraş din Europa şi al treilea din lume în care este utilizat tramvaiul electric.
            1928 - Prima gradină zoologică din România.
            1989 - Al doilea oraş participant la Revoluţia din 1989.
            2007 - Capitală Culturală Europeană 2007`
      },

    ],
    "Alba": [
      {
        "image": "https://media.webcamromania.ro/img/2020/04/Webcam-Alba-Iulia-scaled.jpg",
        "text": `Descoperirile arheologice din județul Alba datează din perioada neolitică, cunoscută sub numele de „Cultura Petrești”. Denumirea regiunii provine din cuvântul latin albus, -a, -um însemnând alb.

        În timpul stăpânirii romane a fost întemeiată, datorită zăcămintelor miniere din regiunea Apuseni, o serie de așezări ca de exemplu Apulum (astăzi Alba Iulia), Ampelum (Zlatna), Apulon (Piatra Craivii) și colonii Aurelia Apulensis, Nova Apulensis, Alburnus Maior (Roșia Montană) și Brucla (Aiud).
        
        După retragerea romanilor de pe teritoriul Daciei nordice, urmează o perioadă controversată de unii istorici. Aceasta este urmată de perioada voievodatelor, iar în această regiune se chema „voievodatul de la Bălgrad”. În cadrul statului maghiar întemeiat în 1000 de regele Ștefan I, apare „Principatul Transilvaniei” cu capitala la Alba Iulia (Gyulafehérvár, „Cetatea Albă (a lui) Gyula”. Gyula era denumirea unui rang de maximă importanță în perioada păgână a maghiarimii și totodată, probabil, un nume propriu, de principe). Capitala Alba Iulia a jucat în Evul Mediu un rol important în dezvoltarea economică, culturală și politică a regiunii.
        
        Printre marile evenimente politice din istoria orașului se numără intrarea în anul 1599 a lui Mihai Viteazul în Alba Iulia, precum și execuția în 1784 a țărănești Horia și Cloșca (cel de-al treilea lider, Crișan, se sinucisese). Alte momente istorice: activitatea revoluționară a lui Avram Iancu (1848) și, în 1918, organizarea la Alba Iulia a „Marii Adunări Naționale”, care a hotărât unirea Transilvaniei cu România.
        
        Dintre principalele evenimente culturale românești, în 1597 înființarea tipografiei domnești ortodoxe, și publicarea „Noului Testament de la Bălgrad”, iar în 1699 primul Abecedar. `
      },

    ],
    "Timiș": [
      {
        "image": "https://media.timisoreni.ro/upload/photo/2006-09/centru_large.jpg",
        "text": `Timișoara are o istorie îndelungată care începe cu antice așezări umane pe actuala vatră a orașului și mai apoi cu apariția primei cetăți fortificate, în jurul secolului al XII-lea. Cetatea a trecut prin diferite stăpâniri care i-au marcat profund cursul dezvoltării. A început să se dezvolte sub stăpânirea ungară a lui Carol Robert de Anjou, în secolul al XIV-lea, devenind pentru scurt timp și capitală a regatului ungar. Cetatea a fost apoi cucerită de otomani, în 1552 și pentru aproape două secole a devenit un important bastion militar turcesc. În 1716 istoria Timișoarei ia o puternică întorsătură, când cetatea e cucerită de Imperiul Habsburgic și începe reconstrucția și dezvoltarea orașului drept capitală a Banatului. Colonizarea Banatului face din Timișoara un adevărat centru multicultural și multiconfesional. Construcția canalului navigabil Bega dă un avânt puternic dezvoltării economice și a comerțului. Orașul cunoaște o perioadă de înflorire fără precedent, ajungând să primească numele de „Mica Vienă” ca recunoaștere a importanței și frumuseții lui. În 1919, Banatul se unește cu România și în Timișoara se instaurează pentru prima dată administrația română. Ocupația sovietică postbelică marchează începutul perioadei comuniste, perioadă care ia sfârșit în 1989 odată cu revoluția anticomunistă: revoluție pornită tocmai din orașul de pe Bega`
      },

    ],
    "Prahova": [
      {
        "image": "https://imagoromaniae.ro/wp-content/uploads/2020/07/statiunea-slanic-prahova-822.jpg",
        "text": `Istoria judetului Prahova este strâns legată de istoria minelor de sare și a exploatării zăcămintelor de sare din zonă. De-a lungul secolelor, această resursă valoroasă a atras atenția imperiilor și statelor din jur, fiind controlată de-a lungul timpului de către daci, romani, maghiari și otomani.

        În secolul al XIX-lea, regiunea a cunoscut o perioadă de mare dezvoltare economică, în special în sectorul minier și al industriei textile. De asemenea, aici s-au dezvoltat importante linii feroviare și drumuri care au legat regiunea de restul țării.
        
        În perioada comunistă, judetul Prahova a continuat să fie un centru important al industriei și a comerțului, dar a fost afectat de politicile restrictive ale guvernului și de declinul economiei românești.`
      },

    ],
    "Bacău": [
      {
        "image": "https://img.directbooking.ro/getimage.ashx?f=statiuni&file=Statiune_3d338cb0-01ab-496b-8b5c-60bfb76093de_BacauCentrul.jpg.jpg",
        "text": `Pentru prima data este mentionat orasul Bacau in anul 1399 .O alta scriere aparuta mai tarziu apare prima atestare a orasului Bacau pe timpul lui Alexandru cel Bun, 6 octombrie 1408.
        Cercetătorul Ștefan S. Gorovei, demonstrează că Bacăul are actul de naștere între anii 1391-1432 în timpul domniei lui Petru I Mușat. În anul 1399 orașul este menționat în documentul lui Iuga Vodă, prin care se dă carte de judecată între spătarul Răducanu cu răzeșii satului Brătila, din ținutul Bacăului. La 15 aprilie 1400, aflăm ca în Bacău se află o parte a Cavalerilor Ioaniți, numiți mai târziu Cavalerii de Malta. O scrisoare este trimisă in Civitas Bachovien de Papa Bonifaciu al II-lea. În anul 1409 studia la Cracovia, studentul băcăuan Gregorias de Bachwya care ceva mai târziu, în 5 martie 1431, localitatea este numită civitas Bako.
        La sfârșitul secolului al- XIV-lea Bacăul era bine închegat ca așezare urbană, una dintre cele mai prospere din întreaga Moldovă, având atribuții militare și comerciale foarte importante. Reședința Domnească din vremea lui Alexandru cel Bun corespunde perioadei în care acesta a avut-o de soție pe Margareta de Losoncz, fiica voievodului Ladislau de Losoncz.
        Orașul Bacău a fost ocupat în noiembrie 1467 de oștile maghiare conduse de Matei Corvin, cu o lună înainte de Bătălia de la Baia. Localitatea este cunoscută și datorită importanței sale în relațiile comerciale dintre Moldova, Transilvania și Țara Românească, fiind un punct de vamă. În secolului al -XV-lea în acest oraș s-a stabilit Alexăndrel, fiul lui Ștefan cel Mare, care a dat ordin pentru construirea Curții Domnești și Bisericii Precista, celebre monumente istorice.
        În anul 1607 papa Paul al V-lea a înființat Episcopia de Bacău, ca episcopiei sufragană (subordonată) Arhiepiscopiei de Kalocsa. Catedrala episcopală, dedicată Sfintei Maria, a suferit importante stricăciuni cu ocazia inundațiilor din anul 1676. În locul vechii catedrale a fost construită în anul 1839 Biserica romano-catolică Sfântul Nicolae din Bacău.
        In anul 1864 când a fost înființat, județul Bacău era un județ de frontieră. Se învecina cu Transilvania (ce făcea parte atunci din Austro-Ungaria) și cu județele românești Neamț, Roman, Tutova, Tecuci și Putna. Județul se întindea de la șesul Siretului până pe crestele munților Carpați, cuprinzând valea de jos a Bistriței și aproape întreg cursul Trotușului.
        In anul 1892, județul Bacău era împărțit în 8 plăși: Siretul de Sus cu reședința la Secuieni, Siretul de Jos cu reședința Părincea, Bistrița de Sus cu reședința Gârleni, Bistrița de Jos cu reședința Valea Seacă, Trotușul cu reședința Târgu Ocna, Tazlăul de Sus cu reședința Scorțeni, Tazlăul de Jos cu reședința Valea Rea și Muntele cu reședința Moinești. Județul avea 2 comune urbane, 87 comune rurale formate din 405 sate. Orașele județului erau Bacău și Târgu Ocna .
        După anul 1918, se situa în partea central-estică a României Mari, în centrul regiunii Moldova. Teritoriul lui cuprindea partea centrală din actualul județ Bacău. Se învecina la vest cu județele Trei Scaune și Ciuc, la nord cu județele Neamț și Roman, la est cu județele Tutova și Tecuci, iar la sud cu județul Putna.
        La sfârșitul secolului al XIV-lea, Bacăul era bine închegat ca așezare urbană, una dintre cele mai prospere din întreaga Moldovă, având atribuții militare și comerciale foarte importante .
        Important centru comercial și vamal, prin tradiție dar și ca urmare a dezvoltării sale economice treptate, Bacăul apare frecvent menționat ca târg în secolele XVII-XVIII în diferite documente, având și rol de târg domnesc, iar în primele decenii ale secolului al XIX-lea se situa între orașele de frunte ale Moldovei (în 1864 figurează ca oraș pe harta Partenie-Dubău).
        Dacă la 1821 Bacăul număra puțin peste 1.000 de locuitori, ulterior s-a înregistrat o creștere demografică constantă. Creșterea numărului de locuitori a avut la bază, cu precădere, fenomenul imigrației evreiești din prima jumătate a secolului al XIX-lea, dublat, în intervalul 1859-1899, de procesul exodului rural generat de industrializarea localității .
        In ce privește dezvoltarea industriei, amintim ca repere: fabrica de hârtie ”Letea” construită în 1881, fabrica de bere construită în 1867, fabrica de cărămidă construită în 1870, o tipografie.
        În timpul Primului Război Mondial aici s-a aflat comandamentul Armatei a II-a Române, cantonat în Casa Anania, din strada George Bacovia.`
      },

    ],
    "Arad": [
      {
        "image": "https://img.directbooking.ro/getimage.ashx?f=Statiuni&file=Statiune_2f7271cc-e1fd-4f6e-b81e-38b9e5a58cb4_AradArad1.jpg.jpg",
        "text": `Municipiul a fost menţionat documentar pentru prima dată în anul 1080, sub numele de Arad, iar ca oraş (civitas) în 1329. Este una din cele mai vechi aşezări urbane din ţara noastră.

        În urma săpăturilor arheologice din cartierul Aradul Nou s-au descoperit o necropolă şi mai multe morminte celtice din secolul al IV-lea î. Hr. La săpăturile din anul 1994 din centrul municipiului au fost scoase la iveală obiecte de ceramică neagră, canelată, cărămizie lucrate manual şi un vas-biberon ce datează din Hallstatt. Alte descoperiri arheologice au evidenţiat urme de locuire din secolele al VII-lea - al XII-lea şi rămăşiţele unei cetăţi de pământ din secolele al IX-lea - al XI-lea distrusă în războiul dintre Ahtum şi armatele lui Chanadinus.
        
        Deşi este atestată documentar în repetate rânduri în secolele al XII-lea - al XIII-lea, dezvoltarea Aradului este încetinită de marea invazie tătară din 1241. În 1552 este cucerită de către turci şi cunoaşte din nou un regres. În 1687 turcii sunt alungaţi şi Aradul trece sub stăpânire habsburgică. În 1740 primeşte statutul de oraş cameral privilegiat.
        
        În secolul al XIX-lea, la Arad se formează un centru puternic de emancipare naţională, care culminează cu [[Revoluţia de la 1848 în Transilvania |revoluţia de la 1848]]. La 20 iulie 1869 se introduc în oraş primele tramvaie cu cai, care vor circula până în anul 1913. În anul 1908 la Arad s-a înfiinţat prima întreprindere de autobuze de pe teritoriul actual al României. Prima cale ferată care va fi construită la Arad va lega oraşul de localitatea Szolnok (Ungaria).
        
        La sfârşitul secolului al XIX-lea şi începutul secolului al XX-lea, Aradul devine centrul politic al mişcării naţionale a românilor. În 1918, la Arad îşi stabileşte sediul Consiliul Naţional Român Central, avându-l ca preşedinte pe Ştefan Cicio-Pop. Între 2 noiembrie - 1 decembrie 1918, Aradul este sediul primei guvernări româneşti a Transilvaniei. `
      },

    ],
    "Argeș": [
      {
        "image": "http://www.autocarhire.ro/wp-content/uploads/2013/05/curtea-de-arges.jpg",
        "text": ``
      },

    ],
    "Bihor": [
      {
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/25/Oradea_%28Nagyv%C3%A1rad%29_-_pia%C5%A3a_Unirii.JPG",
        "text": `500 – 0 î.Hr.

        Situarea teritoriului Bihorului în apropierea unor rute comerciale importante pentru acest colţ de lume, încă din antichitate, și, apoi, la confluenţa unor mari civilizații — ale Occidentului şi ale Răsăritului Europei — din a doua jumătate a mileniului I și-a pus amprenta asupra evoluţiei societății omeneşti trăind pe aceste meleaguri. Una dintre consecinţele acestui ultim statut a fost că la cumpăna dintre primul și cel de-al doilea mileniu d.Hr. s-au consacrat coordonatele care personalizează realitatea umană circumscrisă arealului administrativ propriu zonei: pluralismul etnic, confesional și cultural. Mărturiile materiale scoase la iveală de arheologi au demonstrat că daco-geţii, care au format ramura nord-dunăreană a tracilor, s-au impus, în a doua jumâtate a mileniului I î. Hr., ca şi populație autohtonă în spaţiul carpato-danubiano-pontic, inclusiv în Bihorul de astăzi, dar şi că cimerienii, ilyrii, celții, hunii, avarii și gepizii – între secolele VI î. Hr. și VII/VIII — au avut o contribuție de luat în seamă la maturizarea civilizaţiei din această parte a Europei Centrale şi de Sud-Est. De la dacii„bihoreni” au rămas cetăţi şi tezaure — Tăşad, Sacalasăul Nou, Şuşturogi (secolele I î. Hr. — I d. Hr.) — care atestă nu numai stabilitatea lor în acest areal geografic, ci şi nivelul de dezvoltare atins de statul dac în epoca clasică.Sec. VI – IX d. Hr.

        Din veacul al VI-lea şi până în cel de-al IX-lea slavii au jucat un rol important asupra destinului religios al românilor, orientaţi de acum înainte spre relaţia cu biserica Răsăritului. Din veacul al XI-lea, Comitatul Bihor a devenit o unitate administrativ-teritorială în componența Regatului Ungariei, apoi, din 1567 și până în 1660, în aceea a Principatului Transilvaniei. Au urmat 32 de ani de apartenență la Pașalâcul de Oradea (1660 – 1692), iar, de la sfârșitul secolului al XVII-lea (1692) la Imperiul Habsburgic, respectiv din 1867, la Imperiul Austro-Ungar.`
      },

    ],
    "Bistrița-Năsăud": [
      {
        "image": "https://www.bistriteanul.ro/wp-content/uploads/2019/01/Top_BTZ-cc-1.jpg",
        "text": `Bistriţa a avut mult de suferit de pe urma invaziei tătarilor, în urma căreia s-a refăcut cu greu, fapt pentru care numai în a doua jumătate a sec. XIII, documentele amintesc, printre alte oraşe înfloritoare din Transilvania, şi oraşul Bistriţa. Astfel, doar din anul 1264 datează prima atestare documentară a oraşului Bistriţa.În scopul asigurării şi întăririi graniţei răsăritene a regatului maghiar, regele Ladislau Postumul la anul 1452, a dăruit Bistriţa împreună cu cele 20 de sate din împrejurimi, lui Iancu de Hunedoara, cu titlul de Comite Perpetuu. Ieşind de sub jurisdicţia regală, oraşul a devinit domeniu privat al grofilor şi a suferit astfel pagube însemnate. Iancu a venit la Bistriţa şi a luat măsuri de construire a unei cetăţi pe dealul Burich, în partea de nord a oraşului, lucrare terminată destul de repede - 2 sau 3 ani. Cetatea a fost populată cu soldaţi maghiari.

        După moartea lui  Iancu de Hunedoara, conducerea oraşului i-a revine lui Szilagyi Mihaly, care a fost primit cu ură de către saşi, drept pentru care în anul 1458 primarul Thummel a organizat o răscoală, înnabuşită cu repeziciune de către Szilagyi.
        
        În 1464 s-a răscumpărat libertatea oraşului de la Matei Corvin pentru suma de 6000 forinţi. Saşii însă nu au renunţat la revendicările lor, obţinând de la Matei Corvin în anul 1465 dreptul de a construi în jurul oraşului un zid de protecţie, care va a fost ridicat din ramăşiţele cetăţii construite de Hunyadi. Astfel, au fost terminate o serie de ziduri, turnuri, bastioane şi mai multe porţi.
        
        Întemeietorii şi locuitorii oraşului Bistriţa au fost saşi, iar ei fiind un popor de industriaşi şi comercianţi, apărarea oraşului au încredinţat-o soldaţilor plătiţi. Aşa au ajuns în oraş maghiarii, nu ca şi locuitori,  ci ca şi soldaţi.
        
        Pe la 1465, Bistriţa avea în total peste 18 turnuri şi bastioane, precum şi un întreg sistem de şanţuri şi valuri de apărare. Urmele unui astfel de şanţ şi val, se pot observa şi azi în parcul central al oraşului. În jurul anului 1484, prima fază a fortificărilor oraşului Bistriţa, pare să se fi încheiat. După puţin timp s-a început construcţia unui turn, care există şi în zilele noastre.
        
        În anul 1524 populaţia maghiară din oraş a adoptat noile principii ale reformaţiei, în acest an fiind construit pentru soldaţi un mic lăcaş pentru rugăciune. Iniţial slujbele erau lutherane dar cu siguranţă începând cu anul 1564 s-a trecut la religia reformată.
        
        Istoria primei comunităţi reformate este însă foarte scurtă, deoarece după câţiva  ani, generalul Basta a atacat şi a distrus în mare parte oraşul.
        
        În a doua jumătate a secolului XVI în Piaţa Centrală s-au înalţă o serie de construcţii comerciale specifice epocii, precum Complexul Comercial Sugălete şi Catedrala Gotică.
        
        Începând din secolul al XV-lea până în al XVIII-lea, Bistriţa s-a afirmat ca mare furnizor de mărfuri pentru târgurile moldoveneşti. Încă din secolul VI, oraşul este cunoscut şi ca important centru cultural.
        
        În anul 1601, deşi era încheiat un armistiţiu între generalul Basta şi Sigismund Bathory, auzind de cruzimea generalului, apărătorii oraşului au închis porţile acestuia, şi sub conducerea căpitanului Nagy Albert s-au început pregătirile pentru respingerea unui eventual atac sau chiar asediu. Căpitanul a fost conştient de superioritatea numerică a atacatorilor, şi de aceea  a cerut ajutorul trupelor voievodale. Acest fapt a fost considerat de către Basta drept încetarea armistiţiului, şi la 1 februarie 1602 acesta a ajuns la zidurile oraşului, pornind asediul dinspre Aldorf.
        
        La 9 februarie în zidul oraşului era deja o spărtură de 6 m lăţime, dar apărătorii oraşului au rezistat eroic asediului. Inclusiv locuitorii s-au înarmat şi au ajutat soldaţii. Fierarul Pfaffenbruder cu ciocanul a omorât un atacator. Servitoarele maghiare aruncau vase cu apă clocotită peste atacatori.
        
        Oraşul a fost refăcut cu repeziciune, dar şi-a închide porţile. În acest sens, timp de 200 de ani în oraş au locuit doar saşi, de religie lutherană. Dacă un maghiar dorea să se stabilească în oraş, trebuia să renunţe le credinţa şi religia lui, trecând la religia lutherană. Astfel au apărut, prin căsătoriile mixte nume precum Gondosch, Kisch şi altele.
        
        Prima schimbare a acestei situaţii a fost efectuată de către Maria Tereza, care a trimis în oraş funcţionari germani, dar de religie catolică. Tot ea a pus la dispoziţia acestor funcţionari o biserică a saşilor lutherani.
        
        Reapariţia maghiarilor în oraş a început sub domnia împaratului II. Jozsef, după "toleranciae edictum" (1781). La început au fost acceptaţi doar maghiari industriaşi, şi doar în afara zidurilor, în partea de jos a oraşului. Aceştia au început repede să se organizeze, în anul 1794 solicitând un loc pentru construirea unei biserici. Atunci a luat naştere a doua comunitate reformată din Bistriţa, care s-a păstrat până în zilele noastre. Timp de şapte decenii au insistat cu această solicitare, dar în zadar.`
      },

    ],
    "Botoșani": [
      {
        "image": "https://blog.travelminit.ro/wp-content/uploads/2017/05/botosani.jpg",
        "text": `Dezvoltându-se atât de timpuriu, Botoşanii nu au fost cetate, ci târg deschis fără ziduri. Apărut la întretăierea marilor drumuri comerciale, unul care lega porturile Mării Baltice, prin Lvov, cu porturile de la gurile Dunării şi de pe ţărmul Mării Negre, şi altul ce trecea peste Carpaţi legând oraşele din Transilvania cu Europa orientală, târgul a avut rolul unui important iarmaroc.

        Faptul este atestat, printre alte documente, de un uric al lui Petru Şchiopu din 1579, adresat neguţătorilor mari şi mici din Lvov şi din celelalte părţi ale Crăiei Leşeşti, în privinţa iarmaroacelor şi vămilor din Moldova, în care afirma că „Domnia mea a convocat pe toţi neguţătorii noştri moldoveni şi pe boierii din ţară, întrebându-i despre starea cea dintru început a comerţului nostru şi ne-au răspuns cum că cel mai vechi iarmaroc în Moldova a fost cel care se ţine la Botoşani”. Ulterior, atât oraşul Botoşani, cât şi alte localităţi au fost prădate şi incendiate de către poloni (în 1505, 1509, 1529), de tătari şi cazaci în 1650.
        
        Pe teritoriul actualului judeţ au avut loc lupte memorabile între armatele moldovene, comandate de Ştefan cel Mare, şi cele invadatoare ale tătarilor (Ştefăneşti, iunie 1476) şi polonilor (octombrie 1497, la Codrii Cosminului de lângă oraşul Siret), în care oştile moldovene au ieşit biruitoare. Prezenţa destul de frecventă a marelui voievod pe aceste meleaguri este determinată atât de raţiuni de ordin administrativ şi gospodăresc, care îi reclamau prezenţa, cât şi de necesităţi legate de organizarea luptei de apărare a ţării. Ctitoriile lui Ştefan cel Mare în această parte a ţării constituie încă un indiciu al deselor sale drumuri pe aici. În 1496 este terminată zidirea bisericii „Sf. Nicolae” de la Popăuţi. O altă ctitorie, cu acelaşi hram, fusese ridicată în anul anterior, la Dorohoi.
        
        Şi fiul său Petru Rareş se pare că şi-a făcut aici o adevărată reşedinţă domnească. Prezenţa sa la Botoşani este legată şi de faptul că soţia sa Elena, fiica despotului sârbesc, îşi petrecea o mare parte din timp aici, unde a zidit, de altfel, şi două biserici: Sfântu Gheorghe şi Uspenia. La Stefăneşti (1538) a avut loc înfrângerea hoardelor tătare.
        
        În luna mai 1600, la Verbia (azi satul Recia-Verbia, com. Corlăteni), Mihai Viteazul, aflat în fruntea armatei Ţării Româneşti, în acţiunea lui de centralizare politică a celor trei ţări române, a înfrânt resturile forţelor militare moldo-polone, alungându-l pe Ieremia Movilă şi ocupând Moldova; a realizat, astfel, unirea celor trei ţări române într-un singur stat.
        
        Numeroase alte evenimente sunt legate de Botoşani şi în veacurile următoare. Astfel, în 1691, regele polonez Sobieţchi a făcut popas la Botoşani, în drumul său spre Iaşi. Alte documente consemnează lupta din 1788 de lângă Botoşani, între trupele austriece şi cele turceşti din timpul războiului austro-ruso-turc izbucnit la 24 august 1787. Războiul a determinat o largă popularizare a oraşului în Occident, localitatea bucurându-se de mai multe planuri şi hărţi făcute de austrieci cu acest prilej şi tipărite la Viena.`
      },

    ],
    "Brăila": [
      {
        "image": "https://img.directbooking.ro/getimage.ashx?f=Statiuni&w=600&h=399&file=Statiune_abc6b3ab-b7c3-4e63-bafc-34b4febdf23f_Braila10.jpg.jpg",
        "text": `Prima menţiune expresă a numelui Brăilei – lăsând la o parte actul din 28 iunie 1358, dat de regele Ludovic cel Mare braşovenilor, în care vorbeşte la modul general de zona Gura Siretului -gura Ialomiţei – este privilegiul comercial dat negustorilor din Braşov şi Ţara Bârsei de adevăratul stăpân al acestor locuri – domnul Vladislav I – la 20 ianuarie 1368.

        Acest privilegiu, precum şi cele acordate negustorilor din Liov, la începutul veacului următor, de către Mircea cel Bătrân şi Alexandru cel Bun, relevă, prin conţinutul lor, poziţia excepţională a Brăilei în comerţul Ţării Româneşti cu Transilvania, Moldova şi Polonia.Prima menţiune documentară a judeţului Brăila datează din 1481, când domnul Moldovei, Ştefan cel Mare, trimite o scrisoare tuturor boierilor mari şi mici, judecilor, judecătorilor şi săracilor „din tot ţinutul Brăilei”, prilej cu care, indirect, sub denumirea de ţinut specific dincolo de Milcov, este pomenit prima dată judeţul Brăila.

        Câţiva ani mai târziu, la 31 iulie 1487, hrisovul voievodului Vlad Călugărul este mult mai cuprinzător în privinţa aceasta, acesta dăruind egumenului şi călugărilor Mănăstirii Snagov: „să le fie în judeţul Brăilei găleţile de grâu domneşti ohabnice şi dijma domnească şi vămăşitul, zeciuiala care este domnească de la stupi şi cu perperi cu tot în întreg judeţul Brăilei…şi încă şi caii de la cnezii din acest judeţ al Brăilei, care se cad să fie domneşti, de la cnezii care mor, să-i ducă la sfânta mănăstire, ca să fie de slujbă sfântului lor”.
        
        Asupra întinderii judeţului nu există date precise. Potrivit cercetărilor făcute de istoricul Constantin C. Giurescu, se ajunge la concluzia că nu diferea prea mult de ceea ce a fost judeţul după 1829. În opinia sa, hotarul spre nord îl forma Siretul, a cărui albie veche venea însă mai spre sud decât cea de azi, spre apus se mărginea cu judeţele Râmnicu Sărat şi Buzău, iar spre sud cu judeţul Ialomiţa. Înspre răsărit, hotarul îl forma Dunărea Veche, dincolo de care era Dobrogea; „balta intrând deci în întregime în componenţa judeţului Brăila”.
        
        În ceea ce priveşte numărul aşezărilor din judeţ, cercetările au arătat că în limitele judeţului Brăila, până la 1625 inclusiv, sunt constatate un număr de aproximativ 63 de sate. 45 dintre acestea sunt menţionate în documente între 1352-1600.
        În 1574, Ioan Vodă cel Viteaz începe ofensiva antiotomană şi îi înfrânge pe turci la Jilişte în 24 aprilie. Asediază oraşul Brăila timp de patru zile.

În primăvara anului 1595, Mihai Viteazul îşi trimite aici oştile sub comanda banului Manta şi a căpitanului Albert Kiraly. Aceştia reuşesc să ia oraşul şi cetatea, iar turcii îl părăsesc în aprilie, Brăila redevenind oraş al Ţării Româneşti. Victoria e consfinţită prin ridicarea unei biserici şi prin reorganizarea administrativă ce i se dă atât oraşului (cetăţii), cât şi judeţului (raiaua), înfiinţându-se un „ban de Buzău şi Brăila”, în directă legătură cu misiunea supravegherii graniţei.

După sfârşitul tragic al marelui domn în 1601, Brăila revine din nou sub stăpânirea turcească. Istoria reţine faptul că în 1659, Mihnea al II-lea imită gestul lui Mihai Viteazul. Miron Costin arată cum „au purces Mihnea Vodă în olatele turceşti asupra Giurgiuvului singur, iar o seamă de oaste asupra Brăilii…arzându şi prădându…”.

În 1646, judeţul Brăila apare contopit cu judeţul Râmnicu Sărat, apoi este reînfiinţat temporar (în perioada războiului ruso-turc, 1806-1812), când s-a aflat sub ocupaţie rusească (1809-1812) şi, definitv, după Pacea de la Adrianopol (2 plăşi cu 58 de sate şi domeniul Brăilei care cuprindea teritoriul fostei raiale).

Sub această configuraţie, judeţul Brăila a existat până în septembrie 1950, când, în urma reformei administrativ-teritoriale a ţării, a fost desfiinţat şi inclus în regiunea Galaţi, sub forma raioanelor Brăila, Făurei şi Însurăţei.

A fost reînfiinţat ca judeţ de sine stătător la 17 februarie 1968, când a avut loc o nouă împărţire administrativ-teritorială a ţării.`
      },

    ],
    "Bucharest": [
      {
        "image": "https://img.directbooking.ro/getimage.ashx?f=Statiuni&w=600&h=399&file=Statiune_2269_Bucurestid327f89a-650f-4ad8-9c93-385ebcd13a57.jpg",
        "text": `Rezultatele cercetărilor arheologice atestă că teritoriul pe care se află Bucureștiul a fost locuit neîntrerupt încă din epoca paleolitică (așchii tăioase din cremene, un „nucleu” de silex descoperite pe malul Lacului Fundeni, carierele de nisip din Pantelimon, dealurile de la Mihai-Vodă și Radu-Vodă ). Au fost scoase la iveală numeroase așezări neolitice; din perioada culturii Dudești s-au descoperit urme la Dudești, pe malul Lacului Cernica, pe malul Lacului Fundeni etc. Din perioada culturii Boian s-au găsit urme la Glina, Dudești, Cățelu, Bucureștii-Noi, Giulești, Dealul Spirei, Pantelimon. La Cernica s-a găsit una din cele mai mari necropole din Europa din perioada Boian. În morminte s-au descoperit și „perle” din minereu de cupru, cele mai vechi din țară și printre cele mai vechi din Europa.[2]

        Din perioada culturii Gumelnița s-au găsit așezări la Glina, Jilava, Măgurele ș.a. La Chitila s-a descoperit o brățără de aramă, cu capete în formă de șarpe. Acest tip de brățară stă la originea altor brățări cu capete de șarpe realizate însă mai târziu. Se confirmă astfel părerile istoricilor Vasile Pârvan și Nicolae Iorga că arta traco-dacilor are origini în milenii anterioare .
        
        S-au descoperit urme din cultura Tei (a doua etapă a bronzului): securi de bronz, cuțite, ace, vârfuri de săgeți etc., din epoca fierului, în special din partea a doua a epocii, care coincide și cu începutul culturii geto-dacilor. La Bălăceanca s-au descoperit două așezări cu zece bordeie și șase locuințe de suprafață. Urme ale unei locuiri îndelungate s-au găsit sub mănăstirea Mihai-Vodă. S-au descoperit: cuptoare de ars oale, cești dacice, o monedă din timpul împăratului roman Galienus, cosoare, râșnițe rotative etc.
        
        Descoperirile din secolul al IV-lea confirmă coexistența în zona Capitalei a unor populații dacice cu goții și sarmații de ramură alanică și faptul că existau relații cu romanii. Din secolele VI-VII s-au descoperit pe malurile Colentinei și Dâmboviței semibordeie cu o cameră, cu cuptor de gătit și unelete casnice, ceramică. În secolele X-XIV urme de așezări s-au găsit pe malurile tuturor apelor din zonă, bordeie cu cuptoare de gătit și încălzit, ceramică fină, monezi, urme ale culturii Dridu La Pipera, în Bucureștii Noi, în Piața de Flori, la Crângași și la Giuleștii-Sârbi au fost descoperite așezări ale populației vechi românești din secolele X-XI, iar în pădurea Pantelimon, pe malul Lacului Tei, așezări din secolele XII-XIV.[3] Începând cu secolul al XV-lea, mărturiile arheologice se completează cu izvoare scrise. `
      },

    ],
    "Buzău": [
      {
        "image": "https://primariabuzau.ro/wp-content/uploads/2016/10/3.jpg",
        "text": `Prima menţiune documentară a judeţului Buzău, ca unitate administrativă, datează din anul 1481, când, prin proclamaţia către locuitorii ţinuturilor Buzăului, Râmnicului şi Brăilei, Ştefan cel Mare îi îndemna să-l recunoască domn al Ţării Româneşti pe fiul său adoptiv Mircea. În anii crizei politice care a urmat morţii lui Neagoe Basarab, Buzăul este puternic angajat în luptele pentru tron, susţinându-şi proprii candidaţi, ca în cazul lui Radu Călugărul şi apoi al lui Vlad Vintilă (Vintilă Vodă), deţinător de pământuri şi numeroase sate în părţile Buzăului, unde a înălţat şi ctitoria sa, mănăstirea Menedic. În timpul domniei lui Mihai Viteazul, avea să joace un rol însemnat în planurile politico-strategice ale făuritorului primei uniri a ţărilor româneşti.

        Pe harta stolnicului Cantacuzino din anul 1700 este redată, pentru prima oară, împărţirea administrativă a Ţării Româneşti în 17 judeţe, între care sunt consemnate şi judeţele Buzău, Râmnic şi Săcueni, ale căror teritorii se încadrează, în cea mai mare parte, în suprafaţa actualului judeţ Buzău. Pe aceeaşi hartă mai erau trecute 72 de localităţi, între care două târguri, câteva lacuri, câţiva vulcani noroioşi şi unele bogăţii (sare, sulf ş.a.).În ciuda numeroaselor distrugeri suferite, Buzăul a continuat să fie, în tot cursul secolului al XVII-lea, unul din oraşele de seamă ale ţării. Negustorul italian Bartolomeo Locadello îl situa, în 1641, între primele cinci oraşe ale Ţării Româneşti. În timpul răscoalei seimenilor şi dorobanţilor, cea mai însemnată mişcare atestată social în secolul al XVII-lea în Ţara Românească, oraşul a fost antrenat în vâltoarea evenimentelor.

        Ţinut de margine, care reclama o permanentă viaţă militară, Buzăul a stat întotdeauna în atenţia domnilor. Într-o serie de localităţi ale judeţului au fost ridicate mănăstiri şi puncte înstărite, chiar cetăţi (Bradu, Berca), unde, în vremuri de restrişte, mulţi domni îşi puneau la adăpost familiile şi averile.
        
        Numeroase documente istorice atestă dezvoltarea în judeţul Buzău a meşteşugurilor şi comerţului. Astfel, între secolele X-XVII, la Bisoca, Lopătari şi Băieşti se extrăgeau şi prelucrau metale; morăritul, prelucrarea lemnului şi a pietrei, tăbăcăritul au înregistrat dezvoltări importante. Începând cu secolele XVIII-XIX ia amploare extracţia cărbunelui şi petrolului, se diversifică atelierele meşteşugăreşti, apar primele stabilimente industriale pentru prelucrarea lemnului, petrolului, textilelor şi cerealelor.
        
        Locuitorii Buzăului au avut cel mai mult de suferit din pricina deselor războaie purtate între Imperiul otoman şi cel ţarist, zona fiind aproape în permanenţă prinsă în aria disputelor militare.
        
        Evenimentele din secolul al XIX-lea, începând cu Revoluţia de la 1821 condusă de Tudor Vladimirescu, şi-au pus din plin amprenta asupra judeţului Buzău. Ecoul „Proclamaţiei de la Padeş” ajunge târziu în părţile Buzăului şi cu importante adăugiri în favoarea ţăranilor. Având numărul cel mai mare de sate moşneneşti din Muntenia, Buzăul a fost judeţul unde ţărănimea s-a manifestat deosebit de puternic şi în forme organizate împotriva boierimii locale.`
      },

    ],
    "Caraș-Severin": [
      {
        "image": "https://www.balneomedica.ro/imagini/panorama-baile-herculane-2008.jpg",
        "text": `Atestat documentar, prima oară, în 1233, Banatul de Severin, condus de banul de Severin Luca, a devenit ulterior (începând din vremea domnului Basarab I) feudă a domnilor Ţării Româneşti, Basarab I, apoi Vlaicu Vodă, care se intitula şi ban al Severinului („banus de Zeverino”, 1368) şi Mircea cel Bătrân (1386-1418).

        În lupta antiotomană, românii bănăţeni şi-au adus aportul participând activ la campaniile desfăşurate, mai întâi, sub comanda generalului Pippo Spano de Ozora, apoi sub conducerea lui Iancu de Hunedoara şi, în a doua jumătate a secolului al XV-lea, în oastea lui Pavel Chinezu, comitele Timişoarei.
        
        Expansiunea otomană la nordul Dunării s-a extins cu repeziciune, turcii ocupând în 1541 Buda, iar în 1552 Timişoara, astfel că o parte a teritoriului bănăţean a căzut sub suzeranitatea Porţii, iar alta, sub denumirea Banatului de Lugoj – Caransebeş, a fost sub suzeranitatea Principelui Transilvaniei.
        
        Şirul conflictelor militare între Imperiul Habsburgic şi Imperiul Otoman se prelungeşte până la începutul secolului al XVIII-lea, când Banatul, după mai bine de un secol şi jumătate de dominaţie otomană, devine posesiune austriacă sub administraţia Curţii imperiale din Viena.
        
        În secolele XVII-XVIII, ca o consecinţă a intenselor legături politice ce au existat între sudul Banatului şi celelalte provincii româneşti, dezvoltarea culturii pe teritoriul judeţului Caraş-Severin poate fi dovedită şi prin circulaţia unor cărţi editate în Transilvania, Moldova şi Ţara Românească. Multe dintre cele nouăsprezece titluri de cărţi româneşti care au apărut între ani 1640-1699 au circulat pe teritoriul Banatului de sud. „Cazania lui Varlaam” sau „Cartea românească de învăţătură”, tipărită la Iaşi în 1643, ajunge la Vermeş, iar alt exemplar a fost găsit de Nicolae Iorga în podul bisericii de la Domaşnea. „Noul testament de la Bălgrad” care a cunoscut o largă circulaţie pe întreg teritoriul românesc a ajuns la biserica din Mehadia în anii 1704-1705. „Psaltirea” tipărită la Alba Iulia în 1651, se află, în jurul anului 1750, în posesia unui anume Petru, „grămătic din şcoala Caransebeşului”.
        
        După Pacea de la Paszarovitz (1718), când se instaurează stăpânirea habsburgică în Banat, acesta fiind transformat în domeniu al Coroanei şi existenţa masivă a zăcămintelor de cărbuni şi a celor de minereu de fier au favorizat dezvoltarea mai devreme decât în alte părţi ale României, a industriei metalurgice, primele instalaţii cu caracter industrial fiind construite la Oraviţa (1718, un cuptor înalt pentru topirea minereului de fier), Bocşa (1719, topitorie) şi Reşiţa (1769). Începând din aceeaşi perioadă se organizează şi se dezvoltă puternice centre miniere la Dognecea, Bocşa, Anina, Moldova Nouă ş.a.
        
        Începând cu secolul al XIX-lea, lupta românilor pentru unitate statală şi cucerirea independenţei s-a intensificat. Aceste obiective au fost urmărite de Tudor Vladimirescu şi participanţii la Revoluţia din 1821, care chiar dacă a fost înfrântă, a dat un nou şi puternic impuls mişcărilor de eliberare naţională, care au culminat cu Revoluţia de la 1848.`
      },

    ],
    "Călărași": [
      {
        "image": "https://i.pinimg.com/originals/32/a9/41/32a941a5d81e598fbba563d7d7e7651e.jpg",
        "text": `Cele mai vechi urme de locuire umană în această zonă, scoase la iveală în arealul localităţilor Olteniţa, Călăraşi, Căscioarele, Radovanu ş.a., datează din Neolitic, şi aparţin Culturii Gumelniţa (mileniile III-IV î.Hr.). Din perioada de trecere de la Epoca bronzului la cea a fierului, reprezentative sunt descoperirile de la Călăraşi şi Coslogeni, aceasta din urmă fiind caracterizată prin aşezări de tip cenuşar, de colibe sau bordeie, cu ceramică simplă cu decor plastic rudimentar, care, de altfel, a dat şi numele Culturii Coslogeni (secolele XIV-XIII î.Hr.).

        Continuitatea şi intensificarea locuirii teritoriului actualului judeţ sunt legate de existenţa triburilor trace şi apoi geto-dace, care aveau aşezări întărite şi bine închegate în secolele II-I î.Hr., cum era cea de la Chirnogi. Vestigii romane au fost descoperite în arealul localităţilor Jegălia (secolul al III-lea d.Hr.), Independenţa, Curcani şi Spanţov (secolul al IV-lea d. Hr.). Vetre româneşti de locuire statornică au fost scoase la lumină la Curcani (secolele IX-X) şi Radovanu (secolul X şi secolele XV-XVI).
        
        Intensificarea schimbului de mărfuri a făcut ca, începând cu secolul al XV-lea, să apară la răscruci de drumuri (mai întâi sub formă de sate, apoi târguri şi mai târziu ca oraşe Olteniţa şi Călăraşi) adevărate centre de schimb ale produselor agricole şi meşteşugăreşti. Astfel, la 1515 este atestată documentar Olteniţa şi la 1 iunie 1541 Călăraşi (Crăciani). Însă de la sfârşitul secolului al XIV-lea, în apropiere de vărsarea Mostiştei în Dunăre, se dezvoltă oraşul medieval Cornăţel (Mănăstirea de azi).
        
        În timpul domniei lui Mihai Viteazul (1593-1601), locuitorii acestor meleaguri au fost antrenaţi în lupta antiotomană. „Anonimul Cantacuzinesc” aminteşte că în ianuarie 1595, în timp ce Preda şi Radu Buzescu incendiază Hârşova, banul Mihalcea ardea Dârstorul (Silistra) trecând desigur pe la Lichireşti (azi Călăraşi). Mihai Vitezul, venind dinspre Silistra, atacă Turtacaia, apoi trece Dunărea îngheţată la Olteniţa.
        
        În secolul al XVII-lea, războaiele ruso-turce din 1765-1774 şi cele ruso-austro-turce din 1788-1891 s-au desfăşurat în mare măsură pe teritoriul judeţului Călăraşi. Lupte puternice au avut loc în raza satului Ulmu în 1791, în urma cărora turcii au fost înfrânţi şi alungaţi peste Dunăre.
        
        De asemenea, războiul ruso-turc din 1806-1812 aduce mari pagube acestei zone, turcii fiind înfrânţi succesiv la Ulmu (1806) şi Obileşti (1807). Armistiţiul încheiat pe 24 august 1807, la Slobozia, prevedea evacuarea trupelor ruseşti din Ţara Românească şi Moldova, însă ţarul a refuzat ratificarea acestuia.
        
        Devenit, la sfârşitul secolului al XVII-lea, căpitănie de margine a Ţării Româneşti şi, mai apoi, reşedinţă a Călăraşilor ştafetari ai lui Constantin Brâncoveanu, o categorie aparte a populaţiei care făcea serviciul de curierat pe traseul Bucureşti – Constantinopol, Călăraşiul (Lichireşti cum se numea iniţial) devine târg, în 1734, iar în aprilie 1833, odată cu învestirea sa în funcţia de reşedinţă a judeţului Ialomiţa, este ridicat la rangul de oraş.
        
        Începând cu sfârşitul secolului al XIX-lea, un rol important în activitatea economică a judeţului l-au jucat cele două porturi de la Călăraşi şi Olteniţa, prin care se exportau cantităţi importante de cereale, petrol, cherestea etc.`
      },

    ],
    "Constanța": [
      {
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/01/03/23/5b/the-old-casino.jpg",
        "text": `Constanța - fostul Tomis - este cel mai vechi oraș din România de azi. Tomis a fost cucerit de romani (Varro Lucullus) în anul 71 î.e.n. - împreună cu celelalte orașe pontice. În mai 330, după ce Constantinopol a devenit capitala Imperiului Roman de Răsărit, cetatea Tomis a fost redenumita Constantiana, după sora vitregă a Împăratului Constantin cel Mare (Flavia Julia Constantia). Ulterior Constantiana a împărtășit soarta celorlalte provincii romane din Balcani.

        Unul din multele episoade relatate despre orașul nostru: în iarna 597/598 orașul Tomis a fost folosit de generalul roman de est Priscus (magister militum al Traciei) drept cartier general în lupta să contra avarilor; care l-au asediat aici în această iarnă.
        
        În cursul secolului XIII 'Marea cea mare' (cum era denumita atunci Marea Neagră) a fost dominata de negustorii italieni din Genova, care au ajutat la dezvoltarea orașului. Cam tot de atunci - începând cu secolul XIII-XIV - numele 'Constanța' - în diverse variante - apare pe hărțile nautice medievale (portolane).`
      },

    ],
    "Covasna": [
      {
        "image": "https://img.directbooking.ro/getimage.ashx?f=Statiuni&file=Statiune_20_Covasnacovasna2.jpg.jpg",
        "text": `Judetul Covasna a fost format în anul 1968, prin fuzionarea a trei comitate istorice: Covasna, Harghita și Bodoc. Aceste comitate au avut o istorie proprie, cu influențe culturale diverse, care au dus la formarea unui amestec unic de elemente etnice și culturale în zona de astăzi Covasna.

        Înainte de formarea judetului, această regiune a fost parte a regatului Maghiar, iar populația era predominant maghiară. După Primul Război Mondial și înființarea statului Român, această regiune a devenit parte a României, însă populația maghiară și-a păstrat limbă și cultură proprii.
        
        În perioada comunistă, guvernul român a încercat să asimileze populația maghiară prin politici culturale și lingvistice restrictive, însă această comunitate și-a păstrat cu succes identitatea și a fost activă în susținerea drepturilor sale.
        
        După căderea comunismului și înființarea statului democrat, populația maghiară din Covasna și împrejurimi și-a continuat lupta pentru respectarea drepturilor și pentru păstrarea identității culturale.`
      },

    ],
    "Dâmbovița": [
      {
        "image": "https://locuridinromania.ro/wp-content/uploads/2018/06/Descriere-judetul-Dambovita.jpg",
        "text": ` Pe teritoriul acestui ţinut a fost înfrântă la 1396 oastea lui Ludovic cel Mare, regele Ungariei, venită să pedepsească pe Vlaicu, voievodul « rebel » al Ţării Româneşti.
 

        Oastea - se ştie - a fost pusă pe fugă de vornicul Dragomir, pârcălabul de Dâmboviţa, cu oştenii săi, iar capii ei ucişi. Au pierit atunci Nicolae, voievodul Transilvaniei, şi Petru, vice-voievodul său, Desideriu Vas şi Petru Ruffus, castelan al Cetăţii de Baltă « şi mulţi alţi cavaleri şi nobili aleşi ».
        
        
        În această regiune, la Târgovişte, a fost a treia şi cea mai glorioasă capitală a Ţării Româneşti.
        
        
        În 1642, Sultanul Mahomed II pornind într-o expediţie împotriva lui Vlad Ţepeş, trecu prin Târgovişte, pe care o află deşartă şi înaintă, în sus, pe valea Ialomiţei. Aci îl aştepta viziunea acelei păduri de ţepe « pari nenumăraţi şi împlântaţi, în cari în loc de poame se atârnau trupuri », cum spune cronicarul. Erau prinşi Turci pe care Ţepeş îi executase într-astfel. Se spune că de spaimă, sultanul a luat calea întoarsă.
        
        
        La 16 octomvrie 1595, Mihai asediă Târgoviştea ocupată de Turci cu două luni înainte, o cuceri şi apoi, într-un mers fulgerător, aruncă pe Turci peste Dunăre.
        
        
        Pe teritoriul acestui judeţ, la Finta în 1653 Matei Basarab învinge armatele moldovene şi căzăceşti ale lui Vasile Lupu şi ale ginerelului acestuia Timuş Hmielniţchi, venite să-i ia tronul.
        
        
        În apropiere de Târgovişte a fost tăiat de iatagane şi aruncat în fântână, la 27 mai 1821, trupul marelui revoluţionar Tudor Vladimirescu.`
      },

    ],
    "Dolj": [
      {
        "image" : "https://upload.wikimedia.org/wikipedia/commons/7/7a/Craiova_-_Centrul.JPG",
        "text": `Istoria județului Dolj se întinde peste mai multe milenii și cuprinde perioade de subordonare la diferite imperii și state, precum și participarea la conflicte și evenimente regionale și naționale.

        Încă din antichitate, regiunea a fost locuită de diferite popoare și culturi, inclusiv de către triburile dacice și romane. După căderea Imperiului Roman, județul a devenit parte a Imperiului Bizantin, iar mai târziu a fost controlat de diferite state medievale, inclusiv de către Regatul Munteniei.
        
        În secolul al XIX-lea, regiunea a devenit parte a Principatelor Unite ale României și apoi a României moderne. În perioada interbelică, județul a cunoscut o perioadă de dezvoltare economică și culturală, cu creșterea industriei și a agriculturii, precum și cu înființarea de instituții școlare și culturale.
        
        În perioada comunistă, județul Dolj a continuat să se dezvolte ca o regiune importantă de industrie și agricultură, dar a suferit de asemenea de sub planificarea centralizată și degradarea mediului. După căderea comunismului, județul a început să se concentreze pe dezvoltarea durabilă și protejarea mediului și a tradițiilor culturale.
        
        Astăzi, județul Dolj este un important centru economic, cu activități în industria energiei, agriculturii, serviciilor și turismului. De asemenea, regiunea este cunoscută pentru frumusețea și diversitatea peisajelor sale, precum și pentru monumentele istorice și siturile arheologice din zonă, care reflectă istoria și cultura sa diversă.`
      }
    ],
    "Galați": [
      {
        "image": "https://urlaub-in-rumänien.de/wp-content/uploads/2021/01/galati-kreis-1-1.jpg",
        "text":  `Judetul Galați a fost înființat în anul 1968, prin fuzionarea mai multor comitate istorice din zonă. Regiunea a avut o istorie bogată, cu influențe culturale diverse, începând cu perioada dacică și continuând cu perioada otomană, a dominației maghiare și a regatului României moderne.

        În secolul al XIX-lea, judetul Galați a cunoscut o perioadă de dezvoltare economică rapidă, în special în sectorul industrial. Aici s-au dezvoltat importante uzine de fier și oțel, precum și o flotă navală puternică pe Dunăre.
        
        În perioada comunistă, regiunea a continuat să fie un centru important al industriei și a comerțului, însă a fost afectată de politicile restrictive ale guvernului și de declinul general al economiei românești.
        
        După căderea comunismului, judetul Galați a început să se reconstruiască și să se dezvolte, însă a fost afectat de probleme economice persistente și de degradarea infrastructurii industriale.`,
      }
    ],
    "Giurgiu": [
      {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Giurgiu-clock-tower.jpg/1200px-Giurgiu-clock-tower.jpg",
        "text": `Istoria judetului Giurgiu se întinde până în perioada dacică, iar localitățile din zonă au avut un rol important în istoria medievală a țării. În secolul al XV-lea, judetul a cunoscut o perioadă de mare importanță strategică, fiind un punct de frontieră între Imperiul Otoman și Țările Române.

        În secolul al XIX-lea, Giurgiu a devenit un centru important al comerțului și transportului pe Dunăre, fiind legat prin poduri cu Bulgaria și cu Serbia. Această poziție privilegiată a fost folosită în Primul Război Mondial pentru a controla accesul trupelor inamice în România.
        
        În perioada comunistă, judetul Giurgiu a continuat să fie un centru important al transportului și comerțului, dar a fost afectat de politicile restrictive ale guvernului și de declinul economiei românești.
        
        După căderea comunismului, judetul Giurgiu a început să se reconstruiască și să se dezvolte, cu un accent puternic pe dezvoltarea infrastructurii și pe modernizarea sectorului de transport.`
      },

    ],
    "Gorj": [
      {
        "image": "https://www.infopensiuni.ro/cazare-tismana/obiective-turistice-tismana/manastirea-tismana-judetul-gorj_6084/poza-manastirea-tismana-3.jpg",
        "text": `Istoria județului Gorj se întinde peste mai multe milenii și cuprinde perioade de subordonare la diferite imperii și state, precum și participarea la conflicte și evenimente regionale și naționale.

        Regiunea a fost locuită din antichitate, cu dovezi ale prezenței dacice, romane și bizantine în zonă. După căderea Imperiului Roman, județul a făcut parte din diferite state medievale, inclusiv din Regatul Munteniei.
        
        În secolul al XIX-lea, județul a devenit parte a Principatelor Unite ale României și apoi a României moderne. Pe parcursul acestei perioade, regiunea a cunoscut o perioadă de dezvoltare economică, cu creșterea industriei și a agriculturii, precum și înființarea de instituții școlare și culturale.
        
        În timpul Primului Război Mondial, județul Gorj a fost un teatru important de lupte, cu un rol important în evenimente precum bătălia de la Târgu Jiu. În perioada comunistă, județul a continuat să se dezvolte ca o regiune importantă de industrie și agricultură, dar a suferit de asemenea de sub planificarea centralizată și degradarea mediului.
        
        După căderea comunismului, județul Gorj și-a concentrat eforturile pe dezvoltarea durabilă și protejarea mediului și a tradițiilor culturale. Astăzi, județul este cunoscut pentru frumusețea și diversitatea peisajelor sale, precum și pentru monumentele istorice și siturile arheologice din zonă, care reflectă istoria și cultura sa diversă.
        
        De asemenea, județul este un important centru economic, cu activități în industria energiei, agriculturii, serviciilor și turismului. Regiunea este renumită pentru băile sale termale și pentru festivalurile sale culturale, care atrag turiști din toată lumea.`
      },

    ],
    "Harghita": [
      {
        "image": "https://i0.wp.com/lipa-lipa.ro/wp-content/uploads/2021/06/Harghita-3-of-4.jpg?fit=1920%2C1080&ssl=1",
        "text": `Istoria județului Harghita se întinde pe mai multe milenii și cuprinde perioade de subordonare la diferite imperii și state, precum și participarea la conflicte și evenimente regionale și naționale.

        Regiunea a fost locuită din antichitate, cu dovezi ale prezenței dacice și romane în zonă. După căderea Imperiului Roman, județul a făcut parte din diferite state medievale, inclusiv din Regatul Maghiar.
        
        În secolul al XIX-lea, județul a devenit parte a Imperiului Austro-Ungar, iar mai târziu, după Primul Război Mondial, a devenit parte a României moderne. Pe parcursul acestei perioade, regiunea a cunoscut o perioadă de dezvoltare economică, cu creșterea industriei și a agriculturii, precum și înființarea de instituții școlare și culturale.
        
        În timpul regimului comunist, județul Harghita a continuat să se dezvolte ca o regiune importantă de industrie și agricultură, dar a suferit de asemenea de sub planificarea centralizată și degradarea mediului.
        
        După căderea comunismului, județul Harghita și-a concentrat eforturile pe dezvoltarea durabilă și protejarea mediului și a tradițiilor culturale. Astăzi, județul este cunoscut pentru frumusețea și diversitatea peisajelor sale, precum și pentru monumentele istorice și siturile arheologice din zonă, care reflectă istoria și cultura sa diversă.
        
        De asemenea, județul este un important centru economic, cu activități în industria energiei, agriculturii, serviciilor și turismului. Regiunea este renumită pentru stațiunile sale montane și pentru festivalurile sale culturale, care atrag turiști din toată lumea.`
      }
    ],
    "Hunedoara": [
      {
        "image": "https://servuspress.ro/wp-content/uploads/2022/03/Castelul-Corvinilor-1024x683.jpg",
        "text": `Regiunea a fost locuită din antichitate, cu dovezi ale prezenței dacice și romane în zonă. În perioada medievală, județul a făcut parte din Regatul Maghiar și mai târziu, din Imperiul Austro-Ungar.

        În secolul al XX-lea, județul a devenit parte a României moderne și a cunoscut o perioadă de dezvoltare economică, cu creșterea industriei și a agriculturii, precum și înființarea de instituții școlare și culturale. Regiunea este cunoscută pentru minele sale de fier, care au fost un important contributor la dezvoltarea industriei românești.
        
        În timpul regimului comunist, județul Hunedoara a continuat să fie un centru important de activități economice, cu focus pe industria metalurgică și energetică. După căderea comunismului, județul a început să se concentreze pe dezvoltarea durabilă și protejarea mediului, precum și pe promovarea turismului și a tradițiilor culturale.
        
        Astăzi, județul Hunedoara este cunoscut pentru peisajele sale spectaculoase, care cuprind munți, lacuri și păduri, precum și pentru monumentele istorice și siturile arheologice din zonă. De asemenea, regiunea este un important centru economic, cu activități în industria energetică, turism și agricultură.`
      },

    ],
    "Ialomița": [
      {
        "image": "https://cdn.adh.reperio.news/image-7/73cfb488-489e-419b-91e5-099ed3d1348f/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D700%26h%3D750%26r%3Dcontain%26f%3Dwebp",
        "text": `În Evul Mediu, județul a făcut parte din Principatul Munteniei și a fost implicat în numeroase conflicte și războaie regionale și naționale.

        În secolul al XIV-lea, prințul Vladislav I Vlaicu a întemeiat satul Ialomița, care a devenit centrul administrativ al regiunii. În timpul domniei sale, județul a cunoscut o perioadă de pace și prosperitate, cu dezvoltarea economiei și a vieții culturale.
        
        În secolele următoare, județul a fost supus dominației otomane și a cunoscut perioade de conflicte și războaie, precum și influențe economice și culturale din partea Imperiului Otoman. După înfrângerea Otomanilor în Primul Război Balcanic, județul a devenit parte a României moderne.
        
        În perioada interbelică, județul Ialomița a cunoscut o perioadă de dezvoltare economică, cu creșterea industriei și a agriculturii, precum și înființarea de instituții școlare și culturale. În timpul celui de-al Doilea Război Mondial, județul a fost implicat în conflictele armate și a suferit pierderi umane și materiale.
        
        După război, județul a devenit parte a României socialiste și a continuat să se dezvolte economic, cu focus pe industria și agricultura. După căderea regimului comunist, județul Ialomița a început să se concentreze pe dezvoltarea durabilă și protejarea mediului, precum și pe promovarea turismului și a tradițiilor culturale.`
      },

    ],
    "Iași": [
      {
        "image": "https://i.pinimg.com/550x/63/b0/b1/63b0b1f350a3abca549dc5fc0b7362b4.jpg",
        "text": `Istoria judetului Iași este strâns legată de personalitățile care au locuit sau au activat în acest oraș de-a lungul secolelor.Orasul Iași a fost fondat în secolul al XIV-lea și a devenit un centru important al vieții politice, economice și culturale din Moldova.

        Printre personalitățile importante care au locuit sau au activat în Iași se numără:
        
            Dimitrie Cantemir, un prinț moldovean care a servit ca domn al Moldovei în secolul al XVIII-lea și a fost unul dintre cei mai importanți istorici, geografi și scriitori ai acelei perioade. El a scris o lucrare importantă despre istoria și geografia Imperiului Otoman.
        
            Vasile Alecsandri, un poet și dramaturg care a fost una dintre personalitățile importante ale generației de romantici din România. El a contribuit la formarea identității culturale și naționale a României moderne.
        
            Mihail Kogălniceanu, un om de știință și politician care a fost una dintre personalitățile importante ale Revoluției de la 1848. El a fost unul dintre fondatorii Partidului Național Liberal și a jucat un rol important în elaborarea Constituției României moderne.
        
            Alexandru Ioan Cuza, un prinț moldovean care a devenit primul domnitor al Principatelor Unite ale Moldovei și Țării Românești, care au condus la formarea României moderne. El a jucat un rol important în unificarea țării și în reformarea sistemului politic și administrativ.
        
            Grigore T. Popa, un medic și bacteriolog care a fost unul dintre fondatorii medicinei moderne în România. El a făcut cercetări importante în domeniul imunologiei și a contribuit la dezvoltarea vaccinurilor împotriva bolilor.
        
        Acestea sunt doar câteva dintre personalitățile importante care au marcat istoria orașului Iași și care au contribuit la dezvoltarea culturală, științifică și socială a acestuia.`
      },

    ],
    "Ilfov": [
      {
        "image": "https://www.stiridinlume.ro/wp-content/uploads/2021/01/Obiective-turistice-in-Ilfov-9.jpg",
        "text": `
        Judetul Ilfov a fost fondat în 1968, prin unirea a trei comune din judetul Teleorman. În decursul anilor, judetul a devenit un important centru economic și administrativ, cu un rol important în dezvoltarea țării.

În trecut, zona care acum este inclusă în judetul Ilfov a fost locuită de triburile dacice și a fost supusă mai târziu cuceririi romane. În perioada medievală, zona a fost sub influența regatului Munteniei.

În secolul al XVIII-lea, judetul Ilfov a fost un important centru agricol, cu pământuri fertile și oameni pricepuți în agricultură. În secolul al XIX-lea, zona a început să se dezvolte rapid, cu apariția industriei textile și a unei clase de mijloc prospere.

În perioada comunistă, judetul Ilfov a continuat să se dezvolte, cu extinderea industriei și a infrastructurii. După căderea comunismului, judetul a continuat să se dezvolte ca un important centru economic, cu multe companii mari și internaționale stabiliate în zonă.

Astăzi, judetul Ilfov este cunoscut ca unul dintre cele mai moderne și prospere judete din România, cu oameni bine instruiți, un standard de viață ridicat și o economie diversă.`
      },

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
      "text": `Judetul Mureș are o istorie lungă și bogată, care se întinde până în perioada dacică. Triburile dacice au locuit în zona care acum este inclusă în judetul Mureș și au lăsat o moștenire culturală importantă.

      În secolul al III-lea, zona a fost cucerită de către Imperiul Roman, iar mai târziu a fost sub influența regatului ungar. În perioada medievală, judetul Mureș a fost locuit de un număr de grupuri etnice, inclusiv maghiari, sasi și sași.
      
      În secolul al XV-lea, judetul Mureș a devenit parte a Principatului Transilvaniei, care a fost condus de către regele maghiar Matthias Corvinus. Acesta a început să construiască fortificații și să sprijine cultura și arta în zonă.
      
      În secolul al XVII-lea, judetul Mureș a fost cuprins în Imperiul Habsburgic, care a condus la o perioadă de instabilitate politică și economică în zonă. În secolul al XIX-lea, judetul Mureș a devenit parte a Regatului României și a început să se dezvolte, cu o economie bazată pe agricultură și industrie.
      
      Astăzi, judetul Mureș este cunoscut pentru patrimoniul său istoric și cultural, cu numeroase muzee, biserici și castele care reflectă istoria sa diversă și bogată.`
      },

      ],
      "Neamț":[
        {
        "image": "https://www.ziarpiatraneamt.ro/wp-content/uploads/2013/06/piatra-neamt-poze-vechi-2.jpg",
        "text": `Judetul Neamț are o istorie lungă și importantă în contextul istoriei României. Încă din perioada dacică, zona a fost locuită de triburi care au lăsat o moștenire culturală și arheologică importantă.

        În secolul al XIV-lea, judetul Neamț a devenit parte a Principatului Moldovei, condus de către voievodul Petru I Musat. Acesta a început să construiască biserici și fortificații în zonă, consolidând puterea prințipatului.
        
        În secolul al XV-lea, judetul Neamț a fost sub influența Imperiului Otoman, care a condus la o perioadă de instabilitate și conflicte în zonă. În secolul al XVII-lea, voievodul Vasile Lupu a consolidat puterea Principatului Moldovei și a început să construiască biserici și palate importante în zona Neamț.
        
        În secolul al XIX-lea, judetul Neamț a devenit parte a Regatului României și a început să se dezvolte, cu o economie bazată pe agricultură și industrie. În această perioadă, judetul Neamț a fost un important centru cultural și intelectual, cu numeroși scriitori, artiști și personalități importante care au trăit și au creat în zonă.
        
        Astăzi, judetul Neamț este cunoscut pentru patrimoniul său istoric și cultural, cu numeroase muzee, biserici și palate care reflectă istoria sa importantă și diversă. De asemenea, judetul Neamț are o economie dinamică și oameni talentați și dedicați care lucrează pentru a construi un viitor mai bun pentru toți locuitorii săi.`
        },

      ],
      "Olt":[
        {
           "image": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Podul_Olt.jpg",
           "text": `Judetul Olt are o istorie importantă legată de domnitorii care au condus zona în decursul secolelor.

           În secolul al XIV-lea, judetul Olt a devenit parte a Țării Românești, condusă de către domnitori ca Mircea cel Bătrân și Vlad Țepeș. Acestia au consolidat puterea țării și au început să construiască biserici și fortificații importante în zonă.
           
           În secolul al XV-lea, judetul Olt a devenit parte a Principatului Munteniei, condus de către domnitorul Vladislav I. Acesta a consolidat puterea principatului prin negocieri diplomatice și lupte cu Imperiul Otoman.
           
           În secolul al XIX-lea, judetul Olt a devenit parte a Regatului României și a început să se dezvolte, cu o economie bazată pe agricultură și industrie. În această perioadă, zona a avut parte de domnitori importanți ca Carol I și Ferdinand, care au avut un impact important asupra istoriei țării.
           
           Astăzi, judetul Olt este cunoscut pentru istoria sa importantă legată de domnitori și pentru patrimoniul său cultural, cu numeroase muzee, biserici și palate care reflectă istoria sa diversă. De asemenea, judetul Olt are oameni talentați și dedicați care lucrează pentru a construi un viitor mai bun pentru toți locuitorii săi.`
        },

     ],
     "Satu Mare": [
      {
         "image": "https://i.pinimg.com/originals/0d/65/8a/0d658a973491c76a9ad48d6160b053d3.jpg",
         "text":`În perioada dacică, zona a fost ocupată de triburile celtice, care au lăsat o moștenire culturală importantă în zonă.

         În secolul al X-lea, judetul a devenit parte a regatului ungar, unde a fost condusă de către nobili maghiari.
         
         În secolul al XIII-lea, judetul Satu Mare a devenit parte a Maramureșului, o regiune condusă de către nobili maghiari.
         
         În secolul al XIX-lea, judetul a devenit parte a Imperiului Austro-Ungar, unde a fost condusă de către autoritățile imperiale.
         
         În timpul Primului Război Mondial, judetul Satu Mare a devenit parte a României, unde a jucat un rol important în evoluția țării.
         
         În perioada interbelică, judetul a înregistrat o dezvoltare economică importantă, cu un număr crescând de industrii și culturi agricole.
         
         În perioada comunistă, judetul a fost supus unor restricții politice și economice, dar a reușit totuși să păstreze o identitate culturală puternică.
         
         Astăzi, judetul Satu Mare este una dintre regiunile cu o dezvoltare economică și culturală în creștere din România.`
      },

   ],
   "Sălaj" : [
    {
       "image": "https://upload.wikimedia.org/wikipedia/commons/3/36/Fildu_de_Sus.NV.jpg",
       "text": `În secolul al X-lea, judetul a devenit parte a regatului ungar, unde a fost condusă de către nobili maghiari.

       În secolul al XIII-lea, judetul Sălaj a devenit parte a Maramureșului, o regiune condusă de către nobili maghiari.
       
       În secolul al XV-lea, judetul a devenit parte a Transilvaniei, o regiune condusă de către nobili sași.
       
       În secolul al XIX-lea, judetul a devenit parte a Imperiului Austro-Ungar, unde a fost condusă de către autoritățile imperiale.
       
       În timpul Primului Război Mondial, judetul Sălaj a devenit parte a României, unde a jucat un rol important în evoluția țării.
       
       În perioada interbelică, judetul a înregistrat o dezvoltare economică importantă, cu un număr crescând de industrii și culturi agricole.
       
       În perioada comunistă, judetul a fost supus unor restricții politice și economice, dar a reușit totuși să păstreze o identitate culturală puternică.`
    },

 ],
 "Suceava": [
  {
     "image": "https://orasulsuceava.ro/files/2019/05/suceava-de-altadata-13-2.jpg",
     "text": `În secolul al XIII-lea, Suceava a devenit un important centru al statelor feudale moldave, sub domnia lui Bogdan I. Acesta a fondat un important centru cultural și religios în oraș, care a devenit cunoscut sub numele de Mitropolia Moldovei.

     În secolul al XIV-lea, Suceava a devenit capitala Moldovei, sub domnia lui Petru I Mușat. Acesta a transformat orașul într-un important centru al puterii și culturii, cu o serie de clădiri importante, cum ar fi castelul de pe Dealul Cetățuia și Biserica Înălțării Domnului.
     
     În secolele următoare, Suceava a continuat să joace un rol important în istoria Moldovei, fiind un important centru al culturii, economiei și politicei.
     
     În perioada modernă, Suceava a continuat să se dezvolte, cu o serie de proiecte de infrastructură și dezvoltare economică, cum ar fi construirea căilor ferate și a hidrocentralei.`
  },

],
"Teleorman":[
  {
     "image": "https://www.aerotravel.ro/blog/wp-content/uploads/Teleorman-Zimnicea.jpg",
     "text": `Județul Teleorman a fost o unitate administrativă de ordinul întâi din Vechiul Regat al României (existent în perioada antebelică).Teleorman este unul dintre cele mai vechi județe ale României, existând încă de pe vremea Țării Românești (Valahia). Din 1601, Teleorman a fost unul dintre ținuturile Valahiei după asasinarea lui Mihai Viteazul. Pe acea vreme Teleormanul era înconjurat de ținutul Olt, ținutul Argeș și ținutul Vlașca. De asemenea, ținutul Teleorman mai avea graniță și cu raiaua Turnu, dar și cu Imperiul Otoman.  Județul antebelic Teleorman era împărțit în 3 plăși: Târgului cu reședința Roșiori, Teleormanului cu reședința Balaci, și Călmățuiul-Marginea (formată în 1882 prin unirea plășilor Călmățuiul cu reședința Râioasa și, mai apoi Turnu Măgurele și Marginea cu reședința Brânceni și, mai apoi Alexandria). Județul avea 4 comune urbane, 127 comune rurale. Comunele urbane ale județului erau Turnu Măgurele, Roșiori de Vede, Zimnicea și Alexandria. Între 1417–1829 cât timp Turnu Măgurele a făcut parte din raiaua Turnu (Kaza Kule) a Imperiului Otoman, reședința județului a fost Roșiori de Vede. Înte 1837-1839 reședința a fost Zimnicea, iar din 1839 Turnu Măgurele.`
  },

],

"Tulcea":[
  {
     "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Tulcea_1896.JPG",
     "text": `Cele mai vechi urme de locuire din zona orașului datează de acum circa 5–6000 de ani. Prin anii 600–500î.e.n. aici a existat și o cetate getică, care a avut continuitate și după cucerirea romană care a survenit după sfârșitul domniei regelui get Burebista pe la 44î.e.n. Tulcea actuală a fost fondată în dreptul unui vad pe Dunăre în timpul stăpânirii otomane a regiunii, care a început pe la 1420. Fiind mare parte din timp într-o zonă de graniță, orașul a fost adesea distrus în timpul războaielor ruso-turce, ultimul și cel mai distrugător pentru Tulcea fiind cel din 1829.

     Începând cu 1839, pentru a demonstra voința de modernizare, sultanii otomani au declanșat reformele denumite Tanzimat. După Războiul Crimeei, în contextul acestora, în regiunea malului drept al cursului inferior al Dunării, Imperiul a organizat vilayetul Dunării, o provincie pe care o dorea un model pentru organizarea altor provincii ale statului multietnic. În cadrul acestui vilayet, Tulcea juca rolul de capitală a subunității administrative ce cuprindea nord-estul extrem: sangeacul Tulcea. S-a construit un palat administrativ unde își avea sediul instituția mutesarifului de sangeac; între 1856 și 1878, postul acesta a fost ocupat succesiv de Suleiman Bei, Resid Paşa, Razim Paşa, Ismail Paşa, Fahri Bei, Ali Bei și Said Bei.
     
     În urma Războiului Ruso-Turc din 1877–1878, cu participarea României, aceasta a primit prin tratatul de la Berlin Dobrogea de Nord împreună cu recunoașterea internațională a independenței, Tulcea devenind de atunci parte a statului român. În perioada 1840-1859, localitatea a fost populată cu coloniști de origine germană, cunoscuți ca germani dobrogeni. Majoritatea acestora aveau să părăsească localitatea în 1940, fiind strămutați cu forța în Germania Nazistă, sub lozinca Heim ins Reich (Acasă în Reich).

     Până la reforma administrativă din anul 1950, Tulcea a fost reședința județului Tulcea (interbelic). După instaurarea regimului comunist în România, Tulcea a devenit reședința unui raion din Regiunea Dobrogea.
     
     După cel de al Doilea Război Mondial, orașul s-a extins și s-a modernizat. În prezent, vatra orașului atinge o suprafață de 115km² și o populație de 68.608 locuitori (în anul 2011). Tulcea este un oraș industrial, port pentru navele de pasageri, precum și pentru cele care transportă produse industriale, mai ales materii prime. `
  },


],
"Vaslui": [
  {
     "image": "https://mediatur.ro/wp-content/uploads/2020/06/Vaslui.jpg",
     "text": `Existenţa celor mai vechi aşezări pe teritoriul judeţului Vaslui este demonstrată de descoperirile arheologice din perioada neolitică, dar primele atestări documentare ale unor localităţi au apărut în 1375 şi în documente interne din 1423. În perioada 1435-1442, Vaslui a fost rezidenţa Ţării de Jos şi era considerat a doua citadelă a Moldovei. În 1440, Bogdan al II-lea câştigă în pădurea de la Crasna o importantă bătălie împotriva otomanilor, dar eroismul şi patriotismul locuitorilor acestor meleaguri a fost dovedit în marea bătălie câştigată de Ştefan cel Mare în 1475 la Podul Înalt, bătălie cunoscută în istorie ca fiind cea mai strălucită victorie din istoria militară a României şi cea mai mare victorie europeană împotriva otomanilor, până la asediul Vienei. Între secolele XVII - XVIII, mai multe aşezări vasluiene, au fost prădate şi incendiate de invaziile tătare şi otomane, unele dintre ele fiind complet distruse, cum a fost şi cazul actualei reşedinţe, Vaslui. În secolele care au urmat, locuitorii judeţului au participat activ la bătăliile pentru independenţă şi libertate din 1848, 1858, 1877 şi 1918 fiind recunoscuţi pentru vitejia şi curajul lor, lăsând eroi legendari, precum Peneş Curcanul. În secolul al XX-lea, alături de judeţul Botoşani, pe teritoriul judeţului a izbucnit Răscoala ţărănească din 1907, care a antrenat mai multe localităţi printre care Huşi, Vaslui, Bârlad, Stănileşti, Muntenii de Jos ş.a. `
  },

],
"Vâlcea": [
  {
     "image": "https://media-cdn.tripadvisor.com/media/photo-s/12/4a/7c/24/entree-du-monastere.jpg",
     "text": `In sudul judeţului la Bugiuleşti comuna Tetoiu s-au găsit cele mai vechi urme de hominizi din Europa, apreciate a fi cu circa 2000000 ani î.Hr. În acest depozit de fosile s-a găsit cea mai veche urmă a existenţei umane pe continentul Europa. Aceasta cunoscută sub numele de "Australanthropus olteniens", reprezintă prima legătură a antropogenezei europene. Aici,pe teritoriul judeţului între 9-12 noiembrie 1330 la Posada, localizată în Ţara Loviştei la Perişani, oştenii lui Basarab I obţin o mare victorie împotriva lui Carol Robert de Anjou regele Ungariei, victorie ce semnează naşterea Ţării Româneşti, prin câştigarea independenţei acestui vechi ţinut faţă de o putere străină.

     Vâlcea este atestat documentar ca judeţ la 8 ianuarie 1392 printr -un act emis de Mircea cel Bătrân, fiind primul judeţ atestat documentar din România.
     
     Radu cel Mare la 1504 înfiinţează la Râmnicu Vâlcea oraş domnesc, Episcopia Râmnicului - Noul Severin, fapt remarcat şi de Paul de Alep care notează că în pereglinările sale găseşte aici o "reşedinţă episcopală".  Prin judeţul Vâlcea la 2 martie 1821 trece în drumul său către Bucureşti cu armata sa de panduri Tudor Vladimirescu. A poposit pe pridvorul şcolii săteşti din Beneşti pe Olteţ înfiinţată la 1750 de dascălul grec Hristodor. Această şcoală la 1838 se va transforma în şcoală preparandă, adică şcoală care pregătea învăţători rurali pentru satele plasei Olteţu. `
  },

],
"Vrancea": [
  {
     "image": "https://img.bunadimineata.ro/uploads/2016/03/teatrul-din-focsani_24155124.jpg",
     "text": `La 24 aprilie 1574, la Jilişte, lângă Focşani, Ion Vodă cel Cumplit (1572 – 1574) a obţinut o victorie strălucită împotriva oştilor turceşti. Istoria consemnează în aceste locuri şi alte evenimente memorabile: trecerea prin Ţinutul Putnei şi prin Focşani a lui Mihai Viteazul în 1600, în drumul său victorios pentru realizarea visului unirii într-un singur stat a Ţării Româneşti, Moldovei şi Transilvaniei.

     Între anii 1714 şi 1734, vrâncenii au luptat împotriva cotropirii de către maghiari a unor munţi dăruiţi lor de către marele Voievod, iar în primele două decenii ale secolului XIX au luptat pentru ieşirea din „boieresc”, Vrancea fiind făcută danie vistiernicului Iordache Russet Roznovanu de către domnitorul Constantin Ipsilanti. Între evenimentele de seamă petrecute pe teritoriul judeţului Vrancea menţionăm şi luptele de la Mărtineşti şi Focşani din timpul războiului ruso-turc din 1789.
     
     După înlăturarea monopolului turcesc asupra comerţului exterior al Ţării Româneşti şi activarea portului Galaţi, spre care se îndreptau produsele agricole şi manufacturiere din zonă, regiunea cunoaşte o revigorare economică.
     
     În perioada contemporană, Focşanii au fost simbolul libertăţii şi demnităţii româneşti, al Unirii dintre Moldova şi Ţara Românească de la 24 Ianuarie 1859, prin care s-au pus bazele statului modern român. Focşanii au fost centrul primelor instituţii ale noului stat unificat român: Comisia Centrală şi Curtea de Apel. Un alt reper istoric este Casa memorială Ion Roată, ţăran ales membru al Divanului ad-hoc, care a fost direct implicat în Unirea Principatelor Române.
     
     Remarcabilă este şi unitatea de voinţă şi acţiune a tuturor vrâncenilor din Războiul de Independenţă din anii 1877 – 1878.
     
     Primul Război Mondial e consemnat în istoria Vrancei cu litere de aur. Aici se desfăşoară, din Zboina Neagră şi până în Valea Siretului, la Doaga, Muncelu, Cireşoaia, Străoane, Panciu, Străjescu, luptele eroice din vara anului 1917, care au culminat cu marea bătălie de la Mărăşeşti. În timpul Primului Război Mondial, în iulie-august 1917, Europa a repurtat primele victorii asupra Germaniei pe câmpurile de luptă de la Mărăşti şi Mărăşeşti, aici, în Vrancea. Aceste victorii au dus la desăvârşirea statului naţional unitar român la 1 Decembrie 1918.
     
     Vrancea este locul cu cele mai importante memoriale şi mausolee ridicate în onoarea jertfei eroilor Primului Război Mondial: Mărăşti, Mărăşeşti, Soveja şi Focşani. Ca semn de recunoaştere a sacrificiilor făcute de oraşul Mărăşeşti, în august 1917, guvernul francez i-a acordat, doi ani mai tarziu, Crucea de Război a Franţei.`
  },


],

"Brașov": [
  {
     "image": "https://cdn.cluj.com/ghidlocalcom/sites/6/2019/10/brasov-in-35-totografii-istorice-31.jpg",
     "text": `Brasov este o oraș din România cu o istorie bogată care se datorează încă din secolul al XIII-lea. A fost fondat de Cârcotașii Teutonici în 1211 și a devenit un important centru al comerțului și al industriei în Transilvania. În timpul dominației habsburgice, orașul a cunoscut o perioadă de dezvoltare economică și culturală, fiind cunoscut sub numele de "Micul Paris".

     În timpul celui de-al Doilea Război Mondial, orașul a fost ocupat de forțele germane și a suferit daune semnificative. După război, a început o perioadă de reconstrucție și modernizare. În comunism, orașul a continuat să se dezvolte ca un important centru industrial și cultural.
     
     După căderea comunismului, orașul a început să se reîntoarcă la tradițiile și valorile sale istorice, transformându-se într-un important centru turistic și cultural în România. Astăzi, Brasov este cunoscut pentru istoria sa și arhitectura sa deosebită, incluzând biserici medievale, fortificații și clădiri gotice.`,
     "title": "Brașov"
  },

],

"Mehedinți": [
  {
     "image": "https://img.bunadimineata.ro/uploads/2015/09/decebal-rex_44309654-1024x683.jpg",
     "text": `Mehedinți este un județ din sud-vestul României, situat pe malul drept al Dunării. Regiunea a fost locuită din antichitate și a avut o istorie diversă, care include perioade de subordonare la diferite imperii și state medievale, precum și participarea la războaie și conflicte regionale.

     În perioada medievală, regiunea a fost controlată de mai multe state, inclusiv de către Regatul Munteniei și de către Imperiul Otoman. În secolul al XIX-lea, Mehedinți a devenit parte a Principatelor Unite ale României și apoi a României moderne.
     
     În perioada comunistă, județul a continuat să se dezvolte ca o regiune importantă de agricultură și industrie, dar a suferit de asemenea de sub dezvoltarea neregulată și degradarea mediului. După căderea comunismului, județul a început să se reîntoarcă la tradițiile și valorile sale culturale, precum și să se concentreze pe dezvoltarea durabilă și protejarea mediului.
     
     Astăzi, Mehedinți este cunoscut pentru frumusețea și diversitatea pașunilor sale, precum și pentru monumentele istorice și siturile arheologice din regiune.`,
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
