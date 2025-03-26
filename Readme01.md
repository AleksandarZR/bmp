## Svrha ove aplikacije
Template, odnosno core aplikacija je napravljena tako da se koriste best practices.
Takođe, cilj je da se razvoj svake nove aplikacije polazi od ovog template-a da bi se uštedelo vreme, 
odnosno da ne bismo svaku aplikaciju podešavali od nule, na isti način i time nepotrebno ponavljali posao.
Aplikacija može da se koristi i kao predlog vizualnih rešenja klijentu.

## ESLint podešavanja
quotes: double
semicolon: always
tab-size: 4

## Tailwind podešavanja
Paddings, margins vrednosti za velike ekrane:
space1
space2
space3
...

Paddings, margins vrednosti za srednje ekrane:
space11
space12
space13
...

Paddings, margins vrednosti za male ekrane:
space21
space22
space23
...

Boje:
color1
color1-transparent
color2
color2-transparent
color3
color3-transparent

Koristimo svugde CSS promenljive. Na taj način, ako želimo da promenimo boju ili padding, uradimo to na jednom mestu i svugde se primeni.

## globals.css podešavanja
Sve vrednosti koje koristimo u tailwind.config.ts, prethodno su definisane u globals.css.

## Navigacija
Kreirane su kontrole za horizontalni i vertikalni meni (navigaciju).
Svaka stavka u meniju je kontrola koja lako može da se proširi i kastomizuje.
Postoje stavke koje su linkovi i koje sadrže podmeni.
Dodati su i "related links" da bi se videlo u kom meniju je stavka podmenija aktivna.

## Stranice
Postoji template stranica za horizontalni i za vertikalni meni.
Za horizontalni meni gornji padding se računa po formuli koja uzima u obzir CSS varijable za visinu menija i za padding koji generalno koristimo u aplikaciji.
Za vertikalni meni levi padding se računa po formuli koja uzima u obzir CSS varijable za širinu menija i za padding koji generalno koristimo u aplikaciji.

## Kontrole
Sve kontrole se nalaze u folderu "Components".
Najčešće korišćene i najjednostavnije kontrole se nalaze u "Components/Common".
aaaTemplateComponent.tsx fajl sadrži preporuku za deklarisanje kontrole, kako bi sve kontrole bile uniformne.
Naravno, cilj je da se kontrole importuju i koriste gde je potrebno, a ne da se kreiraju svaki put nove.

## SVG format
Poželjno je koristiti SVG format ge god je moguće, umesto jpg i png.
Takođe bi bilo dobro konvertovati SVG u React component. Na taj način imamo veću kontrolu nad SVG fajlom, u smislu promene boje i slično.

## Paralax efekat
Paralax efekat je veoma popularan i često se koristi.
Odnosi se na pojavu da se neki layeri kreću brše, a neki sporije i na taj način se stiče utisak da su neki objekti bliže, a neki dalje,
Rezultat je 3D osećaj prostora.

## Framer Motion
Framer Motion je biblioteka koja se dosta koristi u Reactu (Nextu) za vizualizaciju.
Paralax i mnoge druge animacije u ovoj aplikaciji, rađene su pomoću Framer Motion biblioteke.