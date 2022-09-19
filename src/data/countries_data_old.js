const countries = [
  {
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
    currency: 'Afghan afghani'
  },
  {
    name: 'Åland Islands',
    capital: 'Mariehamn',
    languages: ['Swedish'],
    population: 28875,
    flag: 'https://flagcdn.com/ax.svg',
    currency: 'Euro'
  },
  {
    name: 'Albania',
    capital: 'Tirana',
    languages: ['Albanian'],
    population: 2886026,
    flag: 'https://flagcdn.com/al.svg',
    currency: 'Albanian lek'
  },
  {
    name: 'Algeria',
    capital: 'Algiers',
    languages: ['Arabic'],
    population: 40400000,
    flag: 'https://flagcdn.com/dz.svg',
    currency: 'Algerian dinar'
  },
  {
    name: 'American Samoa',
    capital: 'Pago Pago',
    languages: ['English', 'Samoan'],
    population: 57100,
    flag: 'https://flagcdn.com/as.svg',
    currency: 'United State Dollar'
  },
  {
    name: 'Andorra',
    capital: 'Andorra la Vella',
    languages: ['Catalan'],
    population: 78014,
    flag: 'https://flagcdn.com/ad.svg',
    currency: 'Euro'
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    languages: ['Portuguese'],
    population: 25868000,
    flag: 'https://flagcdn.com/ao.svg',
    currency: 'Angolan kwanza'
  },
  {
    name: 'Anguilla',
    capital: 'The Valley',
    languages: ['English'],
    population: 13452,
    flag: 'https://flagcdn.com/ai.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Antarctica',
    capital: '',
    languages: ['English', 'Russian'],
    population: 1000,
    flag: 'https://flagcdn.com/aq.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Antigua and Barbuda',
    capital: "Saint John's",
    languages: ['English'],
    population: 86295,
    flag: 'https://flagcdn.com/ag.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Argentina',
    capital: 'Buenos Aires',
    languages: ['Spanish', 'Guaraní'],
    population: 43590400,
    flag: 'https://flagcdn.com/ar.svg',
    currency: 'Argentine peso'
  },
  {
    name: 'Armenia',
    capital: 'Yerevan',
    languages: ['Armenian', 'Russian'],
    population: 2994400,
    flag: 'https://flagcdn.com/am.svg',
    currency: 'Armenian dram'
  },
  {
    name: 'Aruba',
    capital: 'Oranjestad',
    languages: ['Dutch', '(Eastern) Punjabi'],
    population: 107394,
    flag: 'https://flagcdn.com/aw.svg',
    currency: 'Aruban florin'
  },
  {
    name: 'Australia',
    capital: 'Canberra',
    languages: ['English'],
    population: 24117360,
    flag: 'https://flagcdn.com/au.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Austria',
    capital: 'Vienna',
    languages: ['German'],
    population: 8725931,
    flag: 'https://flagcdn.com/at.svg',
    currency: 'Euro'
  },
  {
    name: 'Azerbaijan',
    capital: 'Baku',
    languages: ['Azerbaijani'],
    population: 9730500,
    flag: 'https://flagcdn.com/az.svg',
    currency: 'Azerbaijani manat'
  },
  {
    name: 'Bahamas',
    capital: 'Nassau',
    languages: ['English'],
    population: 378040,
    flag: 'https://flagcdn.com/bs.svg',
    currency: 'Bahamian dollar'
  },
  {
    name: 'Bahrain',
    capital: 'Manama',
    languages: ['Arabic'],
    population: 1404900,
    flag: 'https://flagcdn.com/bh.svg',
    currency: 'Bahraini dinar'
  },
  {
    name: 'Bangladesh',
    capital: 'Dhaka',
    languages: ['Bengali'],
    population: 161006790,
    flag: 'https://flagcdn.com/bd.svg',
    currency: 'Bangladeshi taka'
  },
  {
    name: 'Barbados',
    capital: 'Bridgetown',
    languages: ['English'],
    population: 285000,
    flag: 'https://flagcdn.com/bb.svg',
    currency: 'Barbadian dollar'
  },
  {
    name: 'Belarus',
    capital: 'Minsk',
    languages: ['Belarusian', 'Russian'],
    population: 9498700,
    flag: 'https://flagcdn.com/by.svg',
    currency: 'New Belarusian ruble'
  },
  {
    name: 'Belgium',
    capital: 'Brussels',
    languages: ['Dutch', 'French', 'German'],
    population: 11319511,
    flag: 'https://flagcdn.com/be.svg',
    currency: 'Euro'
  },
  {
    name: 'Belize',
    capital: 'Belmopan',
    languages: ['English', 'Spanish'],
    population: 370300,
    flag: 'https://flagcdn.com/bz.svg',
    currency: 'Belize dollar'
  },
  {
    name: 'Benin',
    capital: 'Porto-Novo',
    languages: ['French'],
    population: 10653654,
    flag: 'https://flagcdn.com/bj.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Bermuda',
    capital: 'Hamilton',
    languages: ['English'],
    population: 61954,
    flag: 'https://flagcdn.com/bm.svg',
    currency: 'Bermudian dollar'
  },
  {
    name: 'Bhutan',
    capital: 'Thimphu',
    languages: ['Dzongkha'],
    population: 775620,
    flag: 'https://flagcdn.com/bt.svg',
    currency: 'Bhutanese ngultrum'
  },
  {
    name: 'Bolivia (Plurinational State of)',
    capital: 'Sucre',
    languages: ['Spanish', 'Aymara', 'Quechua'],
    population: 10985059,
    flag: 'https://flagcdn.com/bo.svg',
    currency: 'Bolivian boliviano'
  },
  {
    name: 'Bonaire, Sint Eustatius and Saba',
    capital: 'Kralendijk',
    languages: ['Dutch'],
    population: 17408,
    flag: 'https://flagcdn.com/bq.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Bosnia and Herzegovina',
    capital: 'Sarajevo',
    languages: ['Bosnian', 'Croatian', 'Serbian'],
    population: 3531159,
    flag: 'https://flagcdn.com/ba.svg',
    currency: 'Bosnia and Herzegovina convertible mark'
  },
  {
    name: 'Botswana',
    capital: 'Gaborone',
    languages: ['English', 'Tswana'],
    population: 2141206,
    flag: 'https://flagcdn.com/bw.svg',
    currency: 'Botswana pula'
  },
  {
    name: 'Bouvet Island',
    capital: '',
    languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
    population: 0,
    flag: 'https://flagcdn.com/bv.svg',
    currency: 'Norwegian krone'
  },
  {
    name: 'Brazil',
    capital: 'Brasília',
    languages: ['Portuguese'],
    population: 206135893,
    flag: 'https://flagcdn.com/br.svg',
    currency: 'Brazilian real'
  },
  {
    name: 'British Indian Ocean Territory',
    capital: 'Diego Garcia',
    languages: ['English'],
    population: 3000,
    flag: 'https://flagcdn.com/io.svg',
    currency: 'United States dollar'
  },
  {
    name: 'United States Minor Outlying Islands',
    capital: '',
    languages: ['English'],
    population: 300,
    flag: 'https://flagcdn.com/um.svg',
    currency: 'United States Dollar'
  },
  {
    name: 'Virgin Islands (British)',
    capital: 'Road Town',
    languages: ['English'],
    population: 28514,
    flag: 'https://flagcdn.com/vg.svg',
    currency: '[D]'
  },
  {
    name: 'Virgin Islands (U.S.)',
    capital: 'Charlotte Amalie',
    languages: ['English'],
    population: 114743,
    flag: 'https://flagcdn.com/vi.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Brunei Darussalam',
    capital: 'Bandar Seri Begawan',
    languages: ['Malay'],
    population: 411900,
    flag: 'https://flagcdn.com/bn.svg',
    currency: 'Brunei dollar'
  },
  {
    name: 'Bulgaria',
    capital: 'Sofia',
    languages: ['Bulgarian'],
    population: 7153784,
    flag: 'https://flagcdn.com/bg.svg',
    currency: 'Bulgarian lev'
  },
  {
    name: 'Burkina Faso',
    capital: 'Ouagadougou',
    languages: ['French', 'Fula'],
    population: 19034397,
    flag: 'https://flagcdn.com/bf.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Burundi',
    capital: 'Bujumbura',
    languages: ['French', 'Kirundi'],
    population: 10114505,
    flag: 'https://flagcdn.com/bi.svg',
    currency: 'Burundian franc'
  },
  {
    name: 'Cambodia',
    capital: 'Phnom Penh',
    languages: ['Khmer'],
    population: 15626444,
    flag: 'https://flagcdn.com/kh.svg',
    currency: 'Cambodian riel'
  },
  {
    name: 'Cameroon',
    capital: 'Yaoundé',
    languages: ['English', 'French'],
    population: 22709892,
    flag: 'https://flagcdn.com/cm.svg',
    currency: 'Central African CFA franc'
  },
  {
    name: 'Canada',
    capital: 'Ottawa',
    languages: ['English', 'French'],
    population: 36155487,
    flag: 'https://flagcdn.com/ca.svg',
    currency: 'Canadian dollar'
  },
  {
    name: 'Cabo Verde',
    capital: 'Praia',
    languages: ['Portuguese'],
    population: 531239,
    flag: 'https://flagcdn.com/cv.svg',
    currency: 'Cape Verdean escudo'
  },
  {
    name: 'Cayman Islands',
    capital: 'George Town',
    languages: ['English'],
    population: 58238,
    flag: 'https://flagcdn.com/ky.svg',
    currency: 'Cayman Islands dollar'
  },
  {
    name: 'Central African Republic',
    capital: 'Bangui',
    languages: ['French', 'Sango'],
    population: 4998000,
    flag: 'https://flagcdn.com/cf.svg',
    currency: 'Central African CFA franc'
  },
  {
    name: 'Chad',
    capital: "N'Djamena",
    languages: ['French', 'Arabic'],
    population: 14497000,
    flag: 'https://flagcdn.com/td.svg',
    currency: 'Central African CFA franc'
  },
  {
    name: 'Chile',
    capital: 'Santiago',
    languages: ['Spanish'],
    population: 18191900,
    flag: 'https://flagcdn.com/cl.svg',
    currency: 'Chilean peso'
  },
  {
    name: 'China',
    capital: 'Beijing',
    languages: ['Chinese'],
    population: 1377422166,
    flag: 'https://flagcdn.com/cn.svg',
    currency: 'Chinese yuan'
  },
  {
    name: 'Christmas Island',
    capital: 'Flying Fish Cove',
    languages: ['English'],
    population: 2072,
    flag: 'https://flagcdn.com/cx.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Cocos (Keeling) Islands',
    capital: 'West Island',
    languages: ['English'],
    population: 550,
    flag: 'https://flagcdn.com/cc.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Colombia',
    capital: 'Bogotá',
    languages: ['Spanish'],
    population: 48759958,
    flag: 'https://flagcdn.com/co.svg',
    currency: 'Colombian peso'
  },
  {
    name: 'Comoros',
    capital: 'Moroni',
    languages: ['Arabic', 'French'],
    population: 806153,
    flag: 'https://flagcdn.com/km.svg',
    currency: 'Comorian franc'
  },
  {
    name: 'Congo',
    capital: 'Brazzaville',
    languages: ['French', 'Lingala'],
    population: 4741000,
    flag: 'https://flagcdn.com/cg.svg',
    currency: 'Central African CFA franc'
  },
  {
    name: 'Congo (Democratic Republic of the)',
    capital: 'Kinshasa',
    languages: ['French', 'Lingala', 'Kongo', 'Swahili', 'Luba-Katanga'],
    population: 85026000,
    flag: 'https://flagcdn.com/cd.svg',
    currency: 'Congolese franc'
  },
  {
    name: 'Cook Islands',
    capital: 'Avarua',
    languages: ['English'],
    population: 18100,
    flag: 'https://flagcdn.com/ck.svg',
    currency: 'New Zealand dollar'
  },
  {
    name: 'Costa Rica',
    capital: 'San José',
    languages: ['Spanish'],
    population: 4890379,
    flag: 'https://flagcdn.com/cr.svg',
    currency: 'Costa Rican colón'
  },
  {
    name: 'Croatia',
    capital: 'Zagreb',
    languages: ['Croatian'],
    population: 4190669,
    flag: 'https://flagcdn.com/hr.svg',
    currency: 'Croatian kuna'
  },
  {
    name: 'Cuba',
    capital: 'Havana',
    languages: ['Spanish'],
    population: 11239004,
    flag: 'https://flagcdn.com/cu.svg',
    currency: 'Cuban convertible peso'
  },
  {
    name: 'Curaçao',
    capital: 'Willemstad',
    languages: ['Dutch', '(Eastern) Punjabi', 'English'],
    population: 154843,
    flag: 'https://flagcdn.com/cw.svg',
    currency: 'Netherlands Antillean guilder'
  },
  {
    name: 'Cyprus',
    capital: 'Nicosia',
    languages: ['Greek (modern)', 'Turkish', 'Armenian'],
    population: 847000,
    flag: 'https://flagcdn.com/cy.svg',
    currency: 'Euro'
  },
  {
    name: 'Czech Republic',
    capital: 'Prague',
    languages: ['Czech', 'Slovak'],
    population: 10558524,
    flag: 'https://flagcdn.com/cz.svg',
    currency: 'Czech koruna'
  },
  {
    name: 'Denmark',
    capital: 'Copenhagen',
    languages: ['Danish'],
    population: 5717014,
    flag: 'https://flagcdn.com/dk.svg',
    currency: 'Danish krone'
  },
  {
    name: 'Djibouti',
    capital: 'Djibouti',
    languages: ['French', 'Arabic'],
    population: 900000,
    flag: 'https://flagcdn.com/dj.svg',
    currency: 'Djiboutian franc'
  },
  {
    name: 'Dominica',
    capital: 'Roseau',
    languages: ['English'],
    population: 71293,
    flag: 'https://flagcdn.com/dm.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Dominican Republic',
    capital: 'Santo Domingo',
    languages: ['Spanish'],
    population: 10075045,
    flag: 'https://flagcdn.com/do.svg',
    currency: 'Dominican peso'
  },
  {
    name: 'Ecuador',
    capital: 'Quito',
    languages: ['Spanish'],
    population: 16545799,
    flag: 'https://flagcdn.com/ec.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Egypt',
    capital: 'Cairo',
    languages: ['Arabic'],
    population: 91290000,
    flag: 'https://flagcdn.com/eg.svg',
    currency: 'Egyptian pound'
  },
  {
    name: 'El Salvador',
    capital: 'San Salvador',
    languages: ['Spanish'],
    population: 6520675,
    flag: 'https://flagcdn.com/sv.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Equatorial Guinea',
    capital: 'Malabo',
    languages: ['Spanish', 'French'],
    population: 1222442,
    flag: 'https://flagcdn.com/gq.svg',
    currency: 'Central African CFA franc'
  },
  {
    name: 'Eritrea',
    capital: 'Asmara',
    languages: ['Tigrinya', 'Arabic', 'English'],
    population: 5352000,
    flag: 'https://flagcdn.com/er.svg',
    currency: 'Eritrean nakfa'
  },
  {
    name: 'Estonia',
    capital: 'Tallinn',
    languages: ['Estonian'],
    population: 1315944,
    flag: 'https://flagcdn.com/ee.svg',
    currency: 'Euro'
  },
  {
    name: 'Ethiopia',
    capital: 'Addis Ababa',
    languages: ['Amharic'],
    population: 92206005,
    flag: 'https://flagcdn.com/et.svg',
    currency: 'Ethiopian birr'
  },
  {
    name: 'Falkland Islands (Malvinas)',
    capital: 'Stanley',
    languages: ['English'],
    population: 2563,
    flag: 'https://flagcdn.com/fk.svg',
    currency: 'Falkland Islands pound'
  },
  {
    name: 'Faroe Islands',
    capital: 'Tórshavn',
    languages: ['Faroese'],
    population: 49376,
    flag: 'https://flagcdn.com/fo.svg',
    currency: 'Danish krone'
  },
  {
    name: 'Fiji',
    capital: 'Suva',
    languages: ['English', 'Fijian', 'Hindi', 'Urdu'],
    population: 867000,
    flag: 'https://flagcdn.com/fj.svg',
    currency: 'Fijian dollar'
  },
  {
    name: 'Finland',
    capital: 'Helsinki',
    languages: ['Finnish', 'Swedish'],
    population: 5491817,
    flag: 'https://flagcdn.com/fi.svg',
    currency: 'Euro'
  },
  {
    name: 'France',
    capital: 'Paris',
    languages: ['French'],
    population: 66710000,
    flag: 'https://flagcdn.com/fr.svg',
    currency: 'Euro'
  },
  {
    name: 'French Guiana',
    capital: 'Cayenne',
    languages: ['French'],
    population: 254541,
    flag: 'https://flagcdn.com/gf.svg',
    currency: 'Euro'
  },
  {
    name: 'French Polynesia',
    capital: 'Papeetē',
    languages: ['French'],
    population: 271800,
    flag: 'https://flagcdn.com/pf.svg',
    currency: 'CFP franc'
  },
  {
    name: 'French Southern Territories',
    capital: 'Port-aux-Français',
    languages: ['French'],
    population: 140,
    flag: 'https://flagcdn.com/tf.svg',
    currency: 'Euro'
  },
  {
    name: 'Gabon',
    capital: 'Libreville',
    languages: ['French'],
    population: 1802278,
    flag: 'https://flagcdn.com/ga.svg',
    currency: 'Central African CFA franc'
  },
  {
    name: 'Gambia',
    capital: 'Banjul',
    languages: ['English'],
    population: 1882450,
    flag: 'https://flagcdn.com/gm.svg',
    currency: 'Gambian dalasi'
  },
  {
    name: 'Georgia',
    capital: 'Tbilisi',
    languages: ['Georgian'],
    population: 3720400,
    flag: 'https://flagcdn.com/ge.svg',
    currency: 'Georgian Lari'
  },
  {
    name: 'Germany',
    capital: 'Berlin',
    languages: ['German'],
    population: 81770900,
    flag: 'https://flagcdn.com/de.svg',
    currency: 'Euro'
  },
  {
    name: 'Ghana',
    capital: 'Accra',
    languages: ['English'],
    population: 27670174,
    flag: 'https://flagcdn.com/gh.svg',
    currency: 'Ghanaian cedi'
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    languages: ['English'],
    population: 33140,
    flag: 'https://flagcdn.com/gi.svg',
    currency: 'Gibraltar pound'
  },
  {
    name: 'Greece',
    capital: 'Athens',
    languages: ['Greek (modern)'],
    population: 10858018,
    flag: 'https://flagcdn.com/gr.svg',
    currency: 'Euro'
  },
  {
    name: 'Greenland',
    capital: 'Nuuk',
    languages: ['Kalaallisut'],
    population: 55847,
    flag: 'https://flagcdn.com/gl.svg',
    currency: 'Danish krone'
  },
  {
    name: 'Grenada',
    capital: "St. George's",
    languages: ['English'],
    population: 103328,
    flag: 'https://flagcdn.com/gd.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Guadeloupe',
    capital: 'Basse-Terre',
    languages: ['French'],
    population: 400132,
    flag: 'https://flagcdn.com/gp.svg',
    currency: 'Euro'
  },
  {
    name: 'Guam',
    capital: 'Hagåtña',
    languages: ['English', 'Chamorro', 'Spanish'],
    population: 184200,
    flag: 'https://flagcdn.com/gu.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Guatemala',
    capital: 'Guatemala City',
    languages: ['Spanish'],
    population: 16176133,
    flag: 'https://flagcdn.com/gt.svg',
    currency: 'Guatemalan quetzal'
  },
  {
    name: 'Guernsey',
    capital: 'St. Peter Port',
    languages: ['English', 'French'],
    population: 62999,
    flag: 'https://flagcdn.com/gg.svg',
    currency: 'British pound'
  },
  {
    name: 'Guinea',
    capital: 'Conakry',
    languages: ['French', 'Fula'],
    population: 12947000,
    flag: 'https://flagcdn.com/gn.svg',
    currency: 'Guinean franc'
  },
  {
    name: 'Guinea-Bissau',
    capital: 'Bissau',
    languages: ['Portuguese'],
    population: 1547777,
    flag: 'https://flagcdn.com/gw.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Guyana',
    capital: 'Georgetown',
    languages: ['English'],
    population: 746900,
    flag: 'https://flagcdn.com/gy.svg',
    currency: 'Guyanese dollar'
  },
  {
    name: 'Haiti',
    capital: 'Port-au-Prince',
    languages: ['French', 'Haitian'],
    population: 11078033,
    flag: 'https://flagcdn.com/ht.svg',
    currency: 'Haitian gourde'
  },
  {
    name: 'Heard Island and McDonald Islands',
    capital: '',
    languages: ['English'],
    population: 0,
    flag: 'https://flagcdn.com/hm.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Holy See',
    capital: 'Rome',
    languages: ['Latin', 'Italian', 'French', 'German'],
    population: 451,
    flag: 'https://flagcdn.com/va.svg',
    currency: 'Euro'
  },
  {
    name: 'Honduras',
    capital: 'Tegucigalpa',
    languages: ['Spanish'],
    population: 8576532,
    flag: 'https://flagcdn.com/hn.svg',
    currency: 'Honduran lempira'
  },
  {
    name: 'Hong Kong',
    capital: 'City of Victoria',
    languages: ['English', 'Chinese'],
    population: 7324300,
    flag: 'https://flagcdn.com/hk.svg',
    currency: 'Hong Kong dollar'
  },
  {
    name: 'Hungary',
    capital: 'Budapest',
    languages: ['Hungarian'],
    population: 9823000,
    flag: 'https://flagcdn.com/hu.svg',
    currency: 'Hungarian forint'
  },
  {
    name: 'Iceland',
    capital: 'Reykjavík',
    languages: ['Icelandic'],
    population: 334300,
    flag: 'https://flagcdn.com/is.svg',
    currency: 'Icelandic króna'
  },
  {
    name: 'India',
    capital: 'New Delhi',
    languages: ['Hindi', 'English'],
    population: 1295210000,
    flag: 'https://flagcdn.com/in.svg',
    currency: 'Indian rupee'
  },
  {
    name: 'Indonesia',
    capital: 'Jakarta',
    languages: ['Indonesian'],
    population: 258705000,
    flag: 'https://flagcdn.com/id.svg',
    currency: 'Indonesian rupiah'
  },
  {
    name: "Côte d'Ivoire",
    capital: 'Yamoussoukro',
    languages: ['French'],
    population: 22671331,
    flag: 'https://flagcdn.com/ci.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Iran (Islamic Republic of)',
    capital: 'Tehran',
    languages: ['Persian (Farsi)'],
    population: 79369900,
    flag: 'https://flagcdn.com/ir.svg',
    currency: 'Iranian rial'
  },
  {
    name: 'Iraq',
    capital: 'Baghdad',
    languages: ['Arabic', 'Kurdish'],
    population: 37883543,
    flag: 'https://flagcdn.com/iq.svg',
    currency: 'Iraqi dinar'
  },
  {
    name: 'Ireland',
    capital: 'Dublin',
    languages: ['Irish', 'English'],
    population: 6378000,
    flag: 'https://flagcdn.com/ie.svg',
    currency: 'Euro'
  },
  {
    name: 'Isle of Man',
    capital: 'Douglas',
    languages: ['English', 'Manx'],
    population: 84497,
    flag: 'https://flagcdn.com/im.svg',
    currency: 'British pound'
  },
  {
    name: 'Israel',
    capital: 'Jerusalem',
    languages: ['Hebrew (modern)', 'Arabic'],
    population: 8527400,
    flag: 'https://flagcdn.com/il.svg',
    currency: 'Israeli new shekel'
  },
  {
    name: 'Italy',
    capital: 'Rome',
    languages: ['Italian'],
    population: 60665551,
    flag: 'https://flagcdn.com/it.svg',
    currency: 'Euro'
  },
  {
    name: 'Jamaica',
    capital: 'Kingston',
    languages: ['English'],
    population: 2723246,
    flag: 'https://flagcdn.com/jm.svg',
    currency: 'Jamaican dollar'
  },
  {
    name: 'Japan',
    capital: 'Tokyo',
    languages: ['Japanese'],
    population: 126960000,
    flag: 'https://flagcdn.com/jp.svg',
    currency: 'Japanese yen'
  },
  {
    name: 'Jersey',
    capital: 'Saint Helier',
    languages: ['English', 'French'],
    population: 100800,
    flag: 'https://flagcdn.com/je.svg',
    currency: 'British pound'
  },
  {
    name: 'Jordan',
    capital: 'Amman',
    languages: ['Arabic'],
    population: 9531712,
    flag: 'https://flagcdn.com/jo.svg',
    currency: 'Jordanian dinar'
  },
  {
    name: 'Kazakhstan',
    capital: 'Astana',
    languages: ['Kazakh', 'Russian'],
    population: 17753200,
    flag: 'https://flagcdn.com/kz.svg',
    currency: 'Kazakhstani tenge'
  },
  {
    name: 'Kenya',
    capital: 'Nairobi',
    languages: ['English', 'Swahili'],
    population: 47251000,
    flag: 'https://flagcdn.com/ke.svg',
    currency: 'Kenyan shilling'
  },
  {
    name: 'Kiribati',
    capital: 'South Tarawa',
    languages: ['English'],
    population: 113400,
    flag: 'https://flagcdn.com/ki.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Kuwait',
    capital: 'Kuwait City',
    languages: ['Arabic'],
    population: 4183658,
    flag: 'https://flagcdn.com/kw.svg',
    currency: 'Kuwaiti dinar'
  },
  {
    name: 'Kyrgyzstan',
    capital: 'Bishkek',
    languages: ['Kyrgyz', 'Russian'],
    population: 6047800,
    flag: 'https://flagcdn.com/kg.svg',
    currency: 'Kyrgyzstani som'
  },
  {
    name: "Lao People's Democratic Republic",
    capital: 'Vientiane',
    languages: ['Lao'],
    population: 6492400,
    flag: 'https://flagcdn.com/la.svg',
    currency: 'Lao kip'
  },
  {
    name: 'Latvia',
    capital: 'Riga',
    languages: ['Latvian'],
    population: 1961600,
    flag: 'https://flagcdn.com/lv.svg',
    currency: 'Euro'
  },
  {
    name: 'Lebanon',
    capital: 'Beirut',
    languages: ['Arabic', 'French'],
    population: 5988000,
    flag: 'https://flagcdn.com/lb.svg',
    currency: 'Lebanese pound'
  },
  {
    name: 'Lesotho',
    capital: 'Maseru',
    languages: ['English', 'Southern Sotho'],
    population: 1894194,
    flag: 'https://flagcdn.com/ls.svg',
    currency: 'Lesotho loti'
  },
  {
    name: 'Liberia',
    capital: 'Monrovia',
    languages: ['English'],
    population: 4615000,
    flag: 'https://flagcdn.com/lr.svg',
    currency: 'Liberian dollar'
  },
  {
    name: 'Libya',
    capital: 'Tripoli',
    languages: ['Arabic'],
    population: 6385000,
    flag: 'https://flagcdn.com/ly.svg',
    currency: 'Libyan dinar'
  },
  {
    name: 'Liechtenstein',
    capital: 'Vaduz',
    languages: ['German'],
    population: 37623,
    flag: 'https://flagcdn.com/li.svg',
    currency: 'Swiss franc'
  },
  {
    name: 'Lithuania',
    capital: 'Vilnius',
    languages: ['Lithuanian'],
    population: 2872294,
    flag: 'https://flagcdn.com/lt.svg',
    currency: 'Euro'
  },
  {
    name: 'Luxembourg',
    capital: 'Luxembourg',
    languages: ['French', 'German', 'Luxembourgish'],
    population: 576200,
    flag: 'https://flagcdn.com/lu.svg',
    currency: 'Euro'
  },
  {
    name: 'Macao',
    capital: '',
    languages: ['Chinese', 'Portuguese'],
    population: 649100,
    flag: 'https://flagcdn.com/mo.svg',
    currency: 'Macanese pataca'
  },
  {
    name: 'Macedonia (the former Yugoslav Republic of)',
    capital: 'Skopje',
    languages: ['Macedonian'],
    population: 2058539,
    flag: 'https://flagcdn.com/mk.svg',
    currency: 'Macedonian denar'
  },
  {
    name: 'Madagascar',
    capital: 'Antananarivo',
    languages: ['French', 'Malagasy'],
    population: 22434363,
    flag: 'https://flagcdn.com/mg.svg',
    currency: 'Malagasy ariary'
  },
  {
    name: 'Malawi',
    capital: 'Lilongwe',
    languages: ['English', 'Chichewa'],
    population: 16832910,
    flag: 'https://flagcdn.com/mw.svg',
    currency: 'Malawian kwacha'
  },
  {
    name: 'Malaysia',
    capital: 'Kuala Lumpur',
    languages: ['Malaysian'],
    population: 31405416,
    flag: 'https://flagcdn.com/my.svg',
    currency: 'Malaysian ringgit'
  },
  {
    name: 'Maldives',
    capital: 'Malé',
    languages: ['Divehi'],
    population: 344023,
    flag: 'https://flagcdn.com/mv.svg',
    currency: 'Maldivian rufiyaa'
  },
  {
    name: 'Mali',
    capital: 'Bamako',
    languages: ['French'],
    population: 18135000,
    flag: 'https://flagcdn.com/ml.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Malta',
    capital: 'Valletta',
    languages: ['Maltese', 'English'],
    population: 425384,
    flag: 'https://flagcdn.com/mt.svg',
    currency: 'Euro'
  },
  {
    name: 'Marshall Islands',
    capital: 'Majuro',
    languages: ['English', 'Marshallese'],
    population: 54880,
    flag: 'https://flagcdn.com/mh.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Martinique',
    capital: 'Fort-de-France',
    languages: ['French'],
    population: 378243,
    flag: 'https://flagcdn.com/mq.svg',
    currency: 'Euro'
  },
  {
    name: 'Mauritania',
    capital: 'Nouakchott',
    languages: ['Arabic'],
    population: 3718678,
    flag: 'https://flagcdn.com/mr.svg',
    currency: 'Mauritanian ouguiya'
  },
  {
    name: 'Mauritius',
    capital: 'Port Louis',
    languages: ['English'],
    population: 1262879,
    flag: 'https://flagcdn.com/mu.svg',
    currency: 'Mauritian rupee'
  },
  {
    name: 'Mayotte',
    capital: 'Mamoudzou',
    languages: ['French'],
    population: 226915,
    flag: 'https://flagcdn.com/yt.svg',
    currency: 'Euro'
  },
  {
    name: 'Mexico',
    capital: 'Mexico City',
    languages: ['Spanish'],
    population: 122273473,
    flag: 'https://flagcdn.com/mx.svg',
    currency: 'Mexican peso'
  },
  {
    name: 'Micronesia (Federated States of)',
    capital: 'Palikir',
    languages: ['English'],
    population: 102800,
    flag: 'https://flagcdn.com/fm.svg',
    currency: '[D]'
  },
  {
    name: 'Moldova (Republic of)',
    capital: 'Chișinău',
    languages: ['Romanian'],
    population: 3553100,
    flag: 'https://flagcdn.com/md.svg',
    currency: 'Moldovan leu'
  },
  {
    name: 'Monaco',
    capital: 'Monaco',
    languages: ['French'],
    population: 38400,
    flag: 'https://flagcdn.com/mc.svg',
    currency: 'Euro'
  },
  {
    name: 'Mongolia',
    capital: 'Ulan Bator',
    languages: ['Mongolian'],
    population: 3093100,
    flag: 'https://flagcdn.com/mn.svg',
    currency: 'Mongolian tögrög'
  },
  {
    name: 'Montenegro',
    capital: 'Podgorica',
    languages: ['Serbian', 'Bosnian', 'Albanian', 'Croatian'],
    population: 621810,
    flag: 'https://flagcdn.com/me.svg',
    currency: 'Euro'
  },
  {
    name: 'Montserrat',
    capital: 'Plymouth',
    languages: ['English'],
    population: 4922,
    flag: 'https://flagcdn.com/ms.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Morocco',
    capital: 'Rabat',
    languages: ['Arabic'],
    population: 33337529,
    flag: 'https://flagcdn.com/ma.svg',
    currency: 'Moroccan dirham'
  },
  {
    name: 'Mozambique',
    capital: 'Maputo',
    languages: ['Portuguese'],
    population: 26423700,
    flag: 'https://flagcdn.com/mz.svg',
    currency: 'Mozambican metical'
  },
  {
    name: 'Myanmar',
    capital: 'Naypyidaw',
    languages: ['Burmese'],
    population: 51419420,
    flag: 'https://flagcdn.com/mm.svg',
    currency: 'Burmese kyat'
  },
  {
    name: 'Namibia',
    capital: 'Windhoek',
    languages: ['English', 'Afrikaans'],
    population: 2324388,
    flag: 'https://flagcdn.com/na.svg',
    currency: 'Namibian dollar'
  },
  {
    name: 'Nauru',
    capital: 'Yaren',
    languages: ['English', 'Nauruan'],
    population: 10084,
    flag: 'https://flagcdn.com/nr.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Nepal',
    capital: 'Kathmandu',
    languages: ['Nepali'],
    population: 28431500,
    flag: 'https://flagcdn.com/np.svg',
    currency: 'Nepalese rupee'
  },
  {
    name: 'Netherlands',
    capital: 'Amsterdam',
    languages: ['Dutch'],
    population: 17019800,
    flag: 'https://flagcdn.com/nl.svg',
    currency: 'Euro'
  },
  {
    name: 'New Caledonia',
    capital: 'Nouméa',
    languages: ['French'],
    population: 268767,
    flag: 'https://flagcdn.com/nc.svg',
    currency: 'CFP franc'
  },
  {
    name: 'New Zealand',
    capital: 'Wellington',
    languages: ['English', 'Māori'],
    population: 4697854,
    flag: 'https://flagcdn.com/nz.svg',
    currency: 'New Zealand dollar'
  },
  {
    name: 'Nicaragua',
    capital: 'Managua',
    languages: ['Spanish'],
    population: 6262703,
    flag: 'https://flagcdn.com/ni.svg',
    currency: 'Nicaraguan córdoba'
  },
  {
    name: 'Niger',
    capital: 'Niamey',
    languages: ['French'],
    population: 20715000,
    flag: 'https://flagcdn.com/ne.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Nigeria',
    capital: 'Abuja',
    languages: ['English'],
    population: 186988000,
    flag: 'https://flagcdn.com/ng.svg',
    currency: 'Nigerian naira'
  },
  {
    name: 'Niue',
    capital: 'Alofi',
    languages: ['English'],
    population: 1470,
    flag: 'https://flagcdn.com/nu.svg',
    currency: 'New Zealand dollar'
  },
  {
    name: 'Norfolk Island',
    capital: 'Kingston',
    languages: ['English'],
    population: 2302,
    flag: 'https://flagcdn.com/nf.svg',
    currency: 'Australian dollar'
  },
  {
    name: "Korea (Democratic People's Republic of)",
    capital: 'Pyongyang',
    languages: ['Korean'],
    population: 25281000,
    flag: 'https://flagcdn.com/kp.svg',
    currency: 'North Korean won'
  },
  {
    name: 'Northern Mariana Islands',
    capital: 'Saipan',
    languages: ['English', 'Chamorro'],
    population: 56940,
    flag: 'https://flagcdn.com/mp.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Norway',
    capital: 'Oslo',
    languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
    population: 5223256,
    flag: 'https://flagcdn.com/no.svg',
    currency: 'Norwegian krone'
  },
  {
    name: 'Oman',
    capital: 'Muscat',
    languages: ['Arabic'],
    population: 4420133,
    flag: 'https://flagcdn.com/om.svg',
    currency: 'Omani rial'
  },
  {
    name: 'Pakistan',
    capital: 'Islamabad',
    languages: ['English', 'Urdu'],
    population: 194125062,
    flag: 'https://flagcdn.com/pk.svg',
    currency: 'Pakistani rupee'
  },
  {
    name: 'Palau',
    capital: 'Ngerulmud',
    languages: ['English'],
    population: 17950,
    flag: 'https://flagcdn.com/pw.svg',
    currency: '[E]'
  },
  {
    name: 'Palestine, State of',
    capital: 'Ramallah',
    languages: ['Arabic'],
    population: 4682467,
    flag: 'https://flagcdn.com/ps.svg',
    currency: 'Israeli new sheqel'
  },
  {
    name: 'Panama',
    capital: 'Panama City',
    languages: ['Spanish'],
    population: 3814672,
    flag: 'https://flagcdn.com/pa.svg',
    currency: 'Panamanian balboa'
  },
  {
    name: 'Papua New Guinea',
    capital: 'Port Moresby',
    languages: ['English'],
    population: 8083700,
    flag: 'https://flagcdn.com/pg.svg',
    currency: 'Papua New Guinean kina'
  },
  {
    name: 'Paraguay',
    capital: 'Asunción',
    languages: ['Spanish', 'Guaraní'],
    population: 6854536,
    flag: 'https://flagcdn.com/py.svg',
    currency: 'Paraguayan guaraní'
  },
  {
    name: 'Peru',
    capital: 'Lima',
    languages: ['Spanish'],
    population: 31488700,
    flag: 'https://flagcdn.com/pe.svg',
    currency: 'Peruvian sol'
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    languages: ['English'],
    population: 103279800,
    flag: 'https://flagcdn.com/ph.svg',
    currency: 'Philippine peso'
  },
  {
    name: 'Pitcairn',
    capital: 'Adamstown',
    languages: ['English'],
    population: 56,
    flag: 'https://flagcdn.com/pn.svg',
    currency: 'New Zealand dollar'
  },
  {
    name: 'Poland',
    capital: 'Warsaw',
    languages: ['Polish'],
    population: 38437239,
    flag: 'https://flagcdn.com/pl.svg',
    currency: 'Polish złoty'
  },
  {
    name: 'Portugal',
    capital: 'Lisbon',
    languages: ['Portuguese'],
    population: 10374822,
    flag: 'https://flagcdn.com/pt.svg',
    currency: 'Euro'
  },
  {
    name: 'Puerto Rico',
    capital: 'San Juan',
    languages: ['Spanish', 'English'],
    population: 3474182,
    flag: 'https://flagcdn.com/pr.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Qatar',
    capital: 'Doha',
    languages: ['Arabic'],
    population: 2587564,
    flag: 'https://flagcdn.com/qa.svg',
    currency: 'Qatari riyal'
  },
  {
    name: 'Republic of Kosovo',
    capital: 'Pristina',
    languages: ['Albanian', 'Serbian'],
    population: 1733842,
    flag: 'https://flagcdn.com/xk.svg',
    currency: 'Euro'
  },
  {
    name: 'Réunion',
    capital: 'Saint-Denis',
    languages: ['French'],
    population: 840974,
    flag: 'https://flagcdn.com/re.svg',
    currency: 'Euro'
  },
  {
    name: 'Romania',
    capital: 'Bucharest',
    languages: ['Romanian'],
    population: 19861408,
    flag: 'https://flagcdn.com/ro.svg',
    currency: 'Romanian leu'
  },
  {
    name: 'Russian Federation',
    capital: 'Moscow',
    languages: ['Russian'],
    population: 146599183,
    flag: 'https://flagcdn.com/ru.svg',
    currency: 'Russian ruble'
  },
  {
    name: 'Rwanda',
    capital: 'Kigali',
    languages: ['Kinyarwanda', 'English', 'French'],
    population: 11553188,
    flag: 'https://flagcdn.com/rw.svg',
    currency: 'Rwandan franc'
  },
  {
    name: 'Saint Barthélemy',
    capital: 'Gustavia',
    languages: ['French'],
    population: 9417,
    flag: 'https://flagcdn.com/bl.svg',
    currency: 'Euro'
  },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    capital: 'Jamestown',
    languages: ['English'],
    population: 4255,
    flag: 'https://flagcdn.com/sh.svg',
    currency: 'Saint Helena pound'
  },
  {
    name: 'Saint Kitts and Nevis',
    capital: 'Basseterre',
    languages: ['English'],
    population: 46204,
    flag: 'https://flagcdn.com/kn.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Saint Lucia',
    capital: 'Castries',
    languages: ['English'],
    population: 186000,
    flag: 'https://flagcdn.com/lc.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Saint Martin (French part)',
    capital: 'Marigot',
    languages: ['English', 'French', 'Dutch'],
    population: 36979,
    flag: 'https://flagcdn.com/mf.svg',
    currency: 'Euro'
  },
  {
    name: 'Saint Pierre and Miquelon',
    capital: 'Saint-Pierre',
    languages: ['French'],
    population: 6069,
    flag: 'https://flagcdn.com/pm.svg',
    currency: 'Euro'
  },
  {
    name: 'Saint Vincent and the Grenadines',
    capital: 'Kingstown',
    languages: ['English'],
    population: 109991,
    flag: 'https://flagcdn.com/vc.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Samoa',
    capital: 'Apia',
    languages: ['Samoan', 'English'],
    population: 194899,
    flag: 'https://flagcdn.com/ws.svg',
    currency: 'Samoan tālā'
  },
  {
    name: 'San Marino',
    capital: 'City of San Marino',
    languages: ['Italian'],
    population: 33005,
    flag: 'https://flagcdn.com/sm.svg',
    currency: 'Euro'
  },
  {
    name: 'Sao Tome and Principe',
    capital: 'São Tomé',
    languages: ['Portuguese'],
    population: 187356,
    flag: 'https://flagcdn.com/st.svg',
    currency: 'São Tomé and Príncipe dobra'
  },
  {
    name: 'Saudi Arabia',
    capital: 'Riyadh',
    languages: ['Arabic'],
    population: 32248200,
    flag: 'https://flagcdn.com/sa.svg',
    currency: 'Saudi riyal'
  },
  {
    name: 'Senegal',
    capital: 'Dakar',
    languages: ['French'],
    population: 14799859,
    flag: 'https://flagcdn.com/sn.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Serbia',
    capital: 'Belgrade',
    languages: ['Serbian'],
    population: 7076372,
    flag: 'https://flagcdn.com/rs.svg',
    currency: 'Serbian dinar'
  },
  {
    name: 'Seychelles',
    capital: 'Victoria',
    languages: ['French', 'English'],
    population: 91400,
    flag: 'https://flagcdn.com/sc.svg',
    currency: 'Seychellois rupee'
  },
  {
    name: 'Sierra Leone',
    capital: 'Freetown',
    languages: ['English'],
    population: 7075641,
    flag: 'https://flagcdn.com/sl.svg',
    currency: 'Sierra Leonean leone'
  },
  {
    name: 'Singapore',
    capital: 'Singapore',
    languages: ['English', 'Malay', 'Tamil', 'Chinese'],
    population: 5535000,
    flag: 'https://flagcdn.com/sg.svg',
    currency: 'Brunei dollar'
  },
  {
    name: 'Sint Maarten (Dutch part)',
    capital: 'Philipsburg',
    languages: ['Dutch', 'English'],
    population: 38247,
    flag: 'https://flagcdn.com/sx.svg',
    currency: 'Netherlands Antillean guilder'
  },
  {
    name: 'Slovakia',
    capital: 'Bratislava',
    languages: ['Slovak'],
    population: 5426252,
    flag: 'https://flagcdn.com/sk.svg',
    currency: 'Euro'
  },
  {
    name: 'Slovenia',
    capital: 'Ljubljana',
    languages: ['Slovene'],
    population: 2064188,
    flag: 'https://flagcdn.com/si.svg',
    currency: 'Euro'
  },
  {
    name: 'Solomon Islands',
    capital: 'Honiara',
    languages: ['English'],
    population: 642000,
    flag: 'https://flagcdn.com/sb.svg',
    currency: 'Solomon Islands dollar'
  },
  {
    name: 'Somalia',
    capital: 'Mogadishu',
    languages: ['Somali', 'Arabic'],
    population: 11079000,
    flag: 'https://flagcdn.com/so.svg',
    currency: 'Somali shilling'
  },
  {
    name: 'South Africa',
    capital: 'Pretoria',
    languages: [
      'Afrikaans',
      'English',
      'Southern Ndebele',
      'Southern Sotho',
      'Swati',
      'Tswana',
      'Tsonga',
      'Venda',
      'Xhosa',
      'Zulu'
    ],
    population: 55653654,
    flag: 'https://flagcdn.com/za.svg',
    currency: 'South African rand'
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    capital: 'King Edward Point',
    languages: ['English'],
    population: 30,
    flag: 'https://flagcdn.com/gs.svg',
    currency: 'British pound'
  },
  {
    name: 'Korea (Republic of)',
    capital: 'Seoul',
    languages: ['Korean'],
    population: 50801405,
    flag: 'https://flagcdn.com/kr.svg',
    currency: 'South Korean won'
  },
  {
    name: 'South Sudan',
    capital: 'Juba',
    languages: ['English'],
    population: 12131000,
    flag: 'https://flagcdn.com/ss.svg',
    currency: 'South Sudanese pound'
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    languages: ['Spanish'],
    population: 46438422,
    flag: 'https://flagcdn.com/es.svg',
    currency: 'Euro'
  },
  {
    name: 'Sri Lanka',
    capital: 'Colombo',
    languages: ['Sinhalese', 'Tamil'],
    population: 20966000,
    flag: 'https://flagcdn.com/lk.svg',
    currency: 'Sri Lankan rupee'
  },
  {
    name: 'Sudan',
    capital: 'Khartoum',
    languages: ['Arabic', 'English'],
    population: 39598700,
    flag: 'https://flagcdn.com/sd.svg',
    currency: 'Sudanese pound'
  },
  {
    name: 'Suriname',
    capital: 'Paramaribo',
    languages: ['Dutch'],
    population: 541638,
    flag: 'https://flagcdn.com/sr.svg',
    currency: 'Surinamese dollar'
  },
  {
    name: 'Svalbard and Jan Mayen',
    capital: 'Longyearbyen',
    languages: ['Norwegian'],
    population: 2562,
    flag: 'https://flagcdn.com/sj.svg',
    currency: 'Norwegian krone'
  },
  {
    name: 'Swaziland',
    capital: 'Lobamba',
    languages: ['English', 'Swati'],
    population: 1132657,
    flag: 'https://flagcdn.com/sz.svg',
    currency: 'Swazi lilangeni'
  },
  {
    name: 'Sweden',
    capital: 'Stockholm',
    languages: ['Swedish'],
    population: 9894888,
    flag: 'https://flagcdn.com/se.svg',
    currency: 'Swedish krona'
  },
  {
    name: 'Switzerland',
    capital: 'Bern',
    languages: ['German', 'French', 'Italian'],
    population: 8341600,
    flag: 'https://flagcdn.com/ch.svg',
    currency: 'Swiss franc'
  },
  {
    name: 'Syrian Arab Republic',
    capital: 'Damascus',
    languages: ['Arabic'],
    population: 18564000,
    flag: 'https://flagcdn.com/sy.svg',
    currency: 'Syrian pound'
  },
  {
    name: 'Taiwan',
    capital: 'Taipei',
    languages: ['Chinese'],
    population: 23503349,
    flag: 'https://flagcdn.com/tw.svg',
    currency: 'New Taiwan dollar'
  },
  {
    name: 'Tajikistan',
    capital: 'Dushanbe',
    languages: ['Tajik', 'Russian'],
    population: 8593600,
    flag: 'https://flagcdn.com/tj.svg',
    currency: 'Tajikistani somoni'
  },
  {
    name: 'Tanzania, United Republic of',
    capital: 'Dodoma',
    languages: ['Swahili', 'English'],
    population: 55155000,
    flag: 'https://flagcdn.com/tz.svg',
    currency: 'Tanzanian shilling'
  },
  {
    name: 'Thailand',
    capital: 'Bangkok',
    languages: ['Thai'],
    population: 65327652,
    flag: 'https://flagcdn.com/th.svg',
    currency: 'Thai baht'
  },
  {
    name: 'Timor-Leste',
    capital: 'Dili',
    languages: ['Portuguese'],
    population: 1167242,
    flag: 'https://flagcdn.com/tl.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Togo',
    capital: 'Lomé',
    languages: ['French'],
    population: 7143000,
    flag: 'https://flagcdn.com/tg.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Tokelau',
    capital: 'Fakaofo',
    languages: ['English'],
    population: 1411,
    flag: 'https://flagcdn.com/tk.svg',
    currency: 'New Zealand dollar'
  },
  {
    name: 'Tonga',
    capital: "Nuku'alofa",
    languages: ['English', 'Tonga (Tonga Islands)'],
    population: 103252,
    flag: 'https://flagcdn.com/to.svg',
    currency: 'Tongan paʻanga'
  },
  {
    name: 'Trinidad and Tobago',
    capital: 'Port of Spain',
    languages: ['English'],
    population: 1349667,
    flag: 'https://flagcdn.com/tt.svg',
    currency: 'Trinidad and Tobago dollar'
  },
  {
    name: 'Tunisia',
    capital: 'Tunis',
    languages: ['Arabic'],
    population: 11154400,
    flag: 'https://flagcdn.com/tn.svg',
    currency: 'Tunisian dinar'
  },
  {
    name: 'Turkey',
    capital: 'Ankara',
    languages: ['Turkish'],
    population: 78741053,
    flag: 'https://flagcdn.com/tr.svg',
    currency: 'Turkish lira'
  },
  {
    name: 'Turkmenistan',
    capital: 'Ashgabat',
    languages: ['Turkmen', 'Russian'],
    population: 4751120,
    flag: 'https://flagcdn.com/tm.svg',
    currency: 'Turkmenistan manat'
  },
  {
    name: 'Turks and Caicos Islands',
    capital: 'Cockburn Town',
    languages: ['English'],
    population: 31458,
    flag: 'https://flagcdn.com/tc.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Tuvalu',
    capital: 'Funafuti',
    languages: ['English'],
    population: 10640,
    flag: 'https://flagcdn.com/tv.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Uganda',
    capital: 'Kampala',
    languages: ['English', 'Swahili'],
    population: 33860700,
    flag: 'https://flagcdn.com/ug.svg',
    currency: 'Ugandan shilling'
  },
  {
    name: 'Ukraine',
    capital: 'Kiev',
    languages: ['Ukrainian'],
    population: 42692393,
    flag: 'https://flagcdn.com/ua.svg',
    currency: 'Ukrainian hryvnia'
  },
  {
    name: 'United Arab Emirates',
    capital: 'Abu Dhabi',
    languages: ['Arabic'],
    population: 9856000,
    flag: 'https://flagcdn.com/ae.svg',
    currency: 'United Arab Emirates dirham'
  },
  {
    name: 'United Kingdom of Great Britain and Northern Ireland',
    capital: 'London',
    languages: ['English'],
    population: 65110000,
    flag: 'https://flagcdn.com/gb.svg',
    currency: 'British pound'
  },
  {
    name: 'United States of America',
    capital: 'Washington, D.C.',
    languages: ['English'],
    population: 323947000,
    flag: 'https://flagcdn.com/us.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Uruguay',
    capital: 'Montevideo',
    languages: ['Spanish'],
    population: 3480222,
    flag: 'https://flagcdn.com/uy.svg',
    currency: 'Uruguayan peso'
  },
  {
    name: 'Uzbekistan',
    capital: 'Tashkent',
    languages: ['Uzbek', 'Russian'],
    population: 31576400,
    flag: 'https://flagcdn.com/uz.svg',
    currency: "Uzbekistani so'm"
  },
  {
    name: 'Vanuatu',
    capital: 'Port Vila',
    languages: ['Bislama', 'English', 'French'],
    population: 277500,
    flag: 'https://flagcdn.com/vu.svg',
    currency: 'Vanuatu vatu'
  },
  {
    name: 'Venezuela (Bolivarian Republic of)',
    capital: 'Caracas',
    languages: ['Spanish'],
    population: 31028700,
    flag: 'https://flagcdn.com/ve.svg',
    currency: 'Venezuelan bolívar'
  },
  {
    name: 'Vietnam',
    capital: 'Hanoi',
    languages: ['Vietnamese'],
    population: 92700000,
    flag: 'https://flagcdn.com/vn.svg',
    currency: 'Vietnamese đồng'
  },
  {
    name: 'Wallis and Futuna',
    capital: 'Mata-Utu',
    languages: ['French'],
    population: 11750,
    flag: 'https://flagcdn.com/wf.svg',
    currency: 'CFP franc'
  },
  {
    name: 'Western Sahara',
    capital: 'El Aaiún',
    languages: ['Spanish'],
    population: 510713,
    flag: 'https://flagcdn.com/eh.svg',
    currency: 'Moroccan dirham'
  },
  {
    name: 'Yemen',
    capital: "Sana'a",
    languages: ['Arabic'],
    population: 27478000,
    flag: 'https://flagcdn.com/ye.svg',
    currency: 'Yemeni rial'
  },
  {
    name: 'Zambia',
    capital: 'Lusaka',
    languages: ['English'],
    population: 15933883,
    flag: 'https://flagcdn.com/zm.svg',
    currency: 'Zambian kwacha'
  },
  {
    name: 'Zimbabwe',
    capital: 'Harare',
    languages: ['English', 'Shona', 'Northern Ndebele'],
    population: 14240168,
    flag: 'https://flagcdn.com/zw.svg',
    currency: 'Botswana pula'
  }
];
export default countries;