export type Office = {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  logo: string;
};


export const offices: Office[] = [
    {
        id: 1,
        name: "IUES/Insam - Douala Ndokoti",
        address: "Logbessou, Douala",
        lat: 4.045709740069358,
        lng: 9.734936352793808,
        logo : "/logo-insam.jpeg"
    }, 
    {
        id: 2,
        name: "Décharge Hysacam - Douala PK10",
        address: "Bonamoussadi, Douala",
        lat: 4.040196441603417,
        lng: 9.782795141157278,
        logo : "/logo-hysacam.jpeg"
    },
    {
        id: 3,
        name: "B'SSADI GALERIES - Douala",
        address: "Yaoundé Centre",
        lat: 4.091287525810305,
        lng: 9.740853552793924, 
        logo : "/logo-sadi.png"
    },
];