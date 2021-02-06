export interface SearchVirusResponse {
    id:                   string;
    rank:                 string;
    Country:              string;
    Continent:            Continent;
    TwoLetterSymbol:      string;
    ThreeLetterSymbol:    string;
    Infection_Risk:       string;
    Case_Fatality_Rate:   string;
    Test_Percentage:      string;
    Recovery_Proporation: string;
    TotalCases:           string;
    NewCases:             string;
    TotalDeaths:          string;
    NewDeaths:            string;
    TotalRecovered:       string;
    NewRecovered:         string;
    ActiveCases:          string;
    TotalTests:           string;
    Population:           string;
    one_Caseevery_X_ppl:  string;
    one_Deathevery_X_ppl: string;
    one_Testevery_X_ppl:  string;
    Deaths_1M_pop:        string;
    Serious_Critical:     string;
    Tests_1M_Pop:         string;
    TotCases_1M_Pop:      string;
}

export enum Continent {
    Africa = "Africa",
    All = "All",
    Asia = "Asia",
    AustraliaOceania = "Australia/Oceania",
    Empty = "",
    Europe = "Europe",
    NorthAmerica = "North America",
    SouthAmerica = "South America",
}
