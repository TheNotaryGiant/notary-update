export type AreaKind =
  | "borough"
  | "neighborhood"
  | "county"
  | "city"
  | "village"
  | "hamlet";

export type Area = {
  slug: string;
  name: string;
  prep: "in" | "on";
  county:
    | "New York County"
    | "Kings County"
    | "Queens County"
    | "Bronx County"
    | "Richmond County"
    | "Nassau County";
  region:
    | "Manhattan"
    | "Brooklyn"
    | "Queens"
    | "The Bronx"
    | "Staten Island"
    | "Nassau County";
  hub: string | null;
  kind: AreaKind;
  place: string;
  demand: string;
  meetings: [string, string, string];
};

type Child = {
  slug: string;
  name: string;
  kind: Exclude<AreaKind, "borough" | "county">;
  prep?: "in" | "on";
  place: string;
  demand: string;
  meetings: [string, string, string];
};

function defineHub(
  hub: {
    slug: string;
    name: string;
    prep?: "in" | "on";
    county: Area["county"];
    region: Area["region"];
    kind: "borough" | "county";
    place: string;
    demand: string;
    meetings: [string, string, string];
  },
  children: Child[],
): Area[] {
  const parent: Area = { prep: "in", ...hub, hub: null };
  return [
    parent,
    ...children.map(
      (child): Area => ({
        prep: "in",
        ...child,
        county: hub.county,
        region: hub.region,
        hub: hub.slug,
      }),
    ),
  ];
}

export const areas: Area[] = [
  ...defineHub(
    {
      slug: "manhattan",
      name: "Manhattan",
      county: "New York County",
      region: "Manhattan",
      kind: "borough",
      place:
        "Manhattan is New York County, from the Battery and the civic center at Foley Square north through Harlem and Washington Heights to Inwood.",
      demand:
        "Calls are usually for co-op and condo closings, law-office affidavits, and bedside signings at hospitals on the east and west sides.",
      meetings: [
        "apartments and co-op closing tables",
        "law offices near Foley Square and Midtown",
        "hospital rooms when the facility clears the visit",
      ],
    },
    [
      {
        slug: "financial-district",
        name: "Financial District",
        kind: "neighborhood",
        place:
          "The Financial District is the southern tip of Manhattan, around Wall Street, the Battery, and the courts at Foley Square.",
        demand:
          "Weekday appointments are mostly corporate authorizations, commercial affidavits, and closing packages for people who cannot leave an office.",
        meetings: [
          "offices along Wall Street and Broad Street",
          "residential lobbies south of City Hall",
          "conference rooms near the New York County courts",
        ],
      },
      {
        slug: "tribeca",
        name: "Tribeca",
        kind: "neighborhood",
        place:
          "Tribeca is the triangle below Canal Street, a mix of lofts, production companies, and family residences west of the civic center.",
        demand:
          "Typical documents are loft and condo purchase packages, production-company authorizations, and personal affidavits signed at home.",
        meetings: [
          "loft residences west of Broadway",
          "production and design offices",
          "attorney conference rooms near Chambers Street",
        ],
      },
      {
        slug: "soho",
        name: "SoHo",
        kind: "neighborhood",
        place:
          "SoHo runs between Houston and Canal, with cast-iron loft buildings, showrooms, and ground-floor retail.",
        demand:
          "Visits are often retail-business authorizations, showroom contracts, and residential loft signings above the stores.",
        meetings: [
          "showrooms and brand offices",
          "loft apartments above Broadway and West Broadway",
          "pop-up retail spaces that need a signer on site",
        ],
      },
      {
        slug: "greenwich-village",
        name: "Greenwich Village",
        kind: "neighborhood",
        place:
          "Greenwich Village sits around Washington Square, including the NYU campus and the townhouse blocks to the west.",
        demand:
          "Students, faculty, and long-time residents usually need acknowledgments for housing, school, and estate papers signed at a walk-up or office.",
        meetings: [
          "walk-up apartments off Washington Square",
          "NYU-area administrative offices",
          "small law practices on the Village side streets",
        ],
      },
      {
        slug: "east-village",
        name: "East Village",
        kind: "neighborhood",
        place:
          "The East Village lies east of Broadway and south of 14th Street, a dense residential neighborhood of tenements and small storefronts.",
        demand:
          "Most appointments are residential: leases, affidavits, and personal documents for people signing at home rather than in an office.",
        meetings: [
          "tenement and condo apartments",
          "small storefront offices",
          "community organization meeting rooms",
        ],
      },
      {
        slug: "lower-east-side",
        name: "Lower East Side",
        kind: "neighborhood",
        place:
          "The Lower East Side stretches south of Houston toward the Manhattan Bridge, with tenements, public housing, and newer rental towers.",
        demand:
          "Households here often need a notary for housing paperwork, family affidavits, and small-business authorizations.",
        meetings: [
          "apartment buildings along Grand and Delancey",
          "small business offices",
          "family residences where every signer is present",
        ],
      },
      {
        slug: "chelsea",
        name: "Chelsea",
        kind: "neighborhood",
        place:
          "Chelsea runs along the west side from roughly 14th Street to the 30s, including the gallery blocks and residential streets toward Hudson Yards.",
        demand:
          "Gallery and studio businesses book authorizations, while residents book purchase packages and personal affidavits at home.",
        meetings: [
          "gallery and studio offices",
          "residential buildings west of Seventh Avenue",
          "business suites near Hudson Yards",
        ],
      },
      {
        slug: "hells-kitchen",
        name: "Hell's Kitchen",
        kind: "neighborhood",
        place:
          "Hell's Kitchen is the west side neighborhood from the 30s through the 50s, between the Midtown office core and the Hudson River.",
        demand:
          "Restaurant groups, rental buildings, and theater-district workers usually need a notary who can meet before or after a shift.",
        meetings: [
          "restaurant and hospitality offices",
          "rental apartments west of Eighth Avenue",
          "Midtown-edge conference rooms",
        ],
      },
      {
        slug: "midtown",
        name: "Midtown",
        kind: "neighborhood",
        place:
          "Midtown is Manhattan’s central business district, from roughly 34th Street to 59th Street, including the office towers around Grand Central and Rockefeller Center.",
        demand:
          "Corporate signers need acknowledgments and board authorizations completed in a conference room so a package can go out the same day.",
        meetings: [
          "office towers near Grand Central",
          "conference rooms around Sixth Avenue",
          "hotel meeting spaces when a signer is traveling",
        ],
      },
      {
        slug: "murray-hill",
        name: "Murray Hill",
        kind: "neighborhood",
        place:
          "Murray Hill is the east-side residential and office pocket south of Midtown, between roughly 34th and 40th Streets.",
        demand:
          "A typical appointment is a professional signing a personal or firm document at an apartment or a small office near the East 30s.",
        meetings: [
          "apartments in the East 30s",
          "medical and professional suites",
          "small firm offices near Park Avenue",
        ],
      },
      {
        slug: "gramercy",
        name: "Gramercy",
        kind: "neighborhood",
        place:
          "Gramercy surrounds Gramercy Park, with townhouses, apartment houses, and professional offices just north of the Flatiron district.",
        demand:
          "Residents and small professional practices book estate documents, affidavits, and purchase packages at the home or office.",
        meetings: [
          "townhouse libraries and dining rooms",
          "apartment buildings around the park",
          "professional offices on Park Avenue South",
        ],
      },
      {
        slug: "upper-east-side",
        name: "Upper East Side",
        kind: "neighborhood",
        place:
          "The Upper East Side runs from 59th Street to 96th Street east of Central Park, including the hospital corridor along York Avenue.",
        demand:
          "Co-op purchases and bedside documents at Lenox Hill and the York Avenue hospitals are the appointments we see most often.",
        meetings: [
          "co-op apartments off Park and Lexington",
          "hospital rooms along York Avenue, when visitors are allowed",
          "family offices and private residences",
        ],
      },
      {
        slug: "upper-west-side",
        name: "Upper West Side",
        kind: "neighborhood",
        place:
          "The Upper West Side faces Central Park from Columbus Circle through the 90s, a neighborhood of co-ops, rentals, and Lincoln Center.",
        demand:
          "Co-op resale packages and estate documents are the usual reason a notary is asked to come to the apartment.",
        meetings: [
          "prewar co-op apartments",
          "residential offices near Broadway",
          "family signings where several people must appear together",
        ],
      },
      {
        slug: "harlem",
        name: "Harlem",
        kind: "neighborhood",
        place:
          "Harlem covers upper Manhattan above Central Park, including the residential blocks around 125th Street and the Harlem Hospital campus.",
        demand:
          "Families book home appointments for affidavits, housing papers, and documents for relatives who cannot travel downtown.",
        meetings: [
          "brownstones and apartment buildings",
          "church and community meeting rooms",
          "Harlem Hospital when the unit allows a visitor",
        ],
      },
      {
        slug: "washington-heights",
        name: "Washington Heights",
        kind: "neighborhood",
        place:
          "Washington Heights is the northern Manhattan neighborhood around the Columbia University Irving Medical Center, with Inwood just beyond it.",
        demand:
          "Hospital-adjacent families and multi-generational households need a notary at the apartment or, when permitted, at the medical center.",
        meetings: [
          "apartments along Broadway and St. Nicholas",
          "medical-center visits when the hospital approves entry",
          "family homes where an elder signer cannot travel",
        ],
      },
      {
        slug: "battery-park-city",
        name: "Battery Park City",
        kind: "neighborhood",
        place:
          "Battery Park City is the residential neighborhood on landfill west of the Financial District, along the Hudson.",
        demand:
          "Condo owners and families here usually need purchase documents, refinances, and personal affidavits signed at the apartment.",
        meetings: [
          "condo apartments on the esplanade",
          "building conference rooms",
          "family signings scheduled after school hours",
        ],
      },
    ],
  ),
  ...defineHub(
    {
      slug: "brooklyn",
      name: "Brooklyn",
      county: "Kings County",
      region: "Brooklyn",
      kind: "borough",
      place:
        "Brooklyn is Kings County. The county courts sit in Downtown Brooklyn, and the borough runs from the Heights and Williamsburg south to Coney Island.",
      demand:
        "Brownstone closings, family affidavits, and court-related paperwork are the appointments that come up most across the borough.",
      meetings: [
        "brownstones and walk-up apartments",
        "offices near the Kings County courts",
        "hospital and homebound signings when access is approved",
      ],
    },
    [
      {
        slug: "downtown-brooklyn",
        name: "Downtown Brooklyn",
        kind: "neighborhood",
        place:
          "Downtown Brooklyn is the civic and office center of the borough, around the Kings County courthouse at Adams Street and the residential towers nearby.",
        demand:
          "Court-related affidavits and office signings are the reason most people ask a notary to meet here.",
        meetings: [
          "law offices near Adams Street",
          "residential towers around the civic center",
          "business suites on Fulton and Willoughby",
        ],
      },
      {
        slug: "brooklyn-heights",
        name: "Brooklyn Heights",
        kind: "neighborhood",
        place:
          "Brooklyn Heights is the historic brownstone neighborhood on the bluff above the Brooklyn Bridge and the Promenade.",
        demand:
          "Home closings and estate documents are typical, signed at the brownstone rather than in a downtown office.",
        meetings: [
          "brownstone parlors",
          "co-op apartments near the Promenade",
          "small professional offices on Montague Street",
        ],
      },
      {
        slug: "dumbo",
        name: "DUMBO",
        kind: "neighborhood",
        place:
          "DUMBO is the waterfront district between the Brooklyn and Manhattan Bridges, in converted warehouse buildings and newer residences.",
        demand:
          "Tech and design offices book authorizations, and residents book purchase documents at the apartment.",
        meetings: [
          "converted warehouse offices",
          "waterfront residential buildings",
          "studio conference rooms",
        ],
      },
      {
        slug: "fort-greene",
        name: "Fort Greene",
        kind: "neighborhood",
        place:
          "Fort Greene sits just east of Downtown Brooklyn, around Fort Greene Park, with brownstones and apartment houses.",
        demand:
          "Residents usually need a notary for brownstone sales, refinances, and family affidavits signed at home.",
        meetings: [
          "brownstones around the park",
          "apartment buildings toward the Navy Yard",
          "professional offices near Dekalb Avenue",
        ],
      },
      {
        slug: "williamsburg",
        name: "Williamsburg",
        kind: "neighborhood",
        place:
          "Williamsburg occupies the East River waterfront north of the Williamsburg Bridge, with lofts, new rentals, and long-standing residential blocks.",
        demand:
          "Loft purchases, startup authorizations, and residential affidavits make up most of the appointments.",
        meetings: [
          "loft and rental apartments",
          "startup and studio offices",
          "family homes in the southside blocks",
        ],
      },
      {
        slug: "greenpoint",
        name: "Greenpoint",
        kind: "neighborhood",
        place:
          "Greenpoint is the northernmost neighborhood in Brooklyn, between Williamsburg and the Newtown Creek boundary with Queens.",
        demand:
          "Appointments are mostly residential: leases, affidavits, and purchase documents signed at the apartment.",
        meetings: [
          "walk-up apartments off Manhattan Avenue",
          "waterfront residential buildings",
          "small workshops and studios",
        ],
      },
      {
        slug: "park-slope",
        name: "Park Slope",
        kind: "neighborhood",
        place:
          "Park Slope lines the west side of Prospect Park, a brownstone neighborhood with families, medical offices, and the park edge.",
        demand:
          "Parents and homeowners book evening signings for school, estate, and real-estate documents.",
        meetings: [
          "brownstones off Seventh Avenue",
          "apartments near Prospect Park West",
          "medical-office suites when a signer is a patient who can receive a visitor",
        ],
      },
      {
        slug: "crown-heights",
        name: "Crown Heights",
        kind: "neighborhood",
        place:
          "Crown Heights lies east of Prospect Park, a residential neighborhood of brownstones, apartment houses, and Caribbean and Jewish community institutions.",
        demand:
          "Families often need several signers present for affidavits, housing papers, and travel-related documents.",
        meetings: [
          "brownstone and apartment residences",
          "community organization rooms",
          "homes where an older signer needs the notary to come to them",
        ],
      },
      {
        slug: "bedford-stuyvesant",
        name: "Bedford-Stuyvesant",
        kind: "neighborhood",
        place:
          "Bedford-Stuyvesant is a large central Brooklyn neighborhood of brownstones and residential blocks around Fulton and Nostrand.",
        demand:
          "Home sales, refinances, and personal affidavits are the documents most often signed at the house.",
        meetings: [
          "brownstone dining rooms",
          "residential buildings along Fulton Street",
          "small business offices",
        ],
      },
      {
        slug: "bushwick",
        name: "Bushwick",
        kind: "neighborhood",
        place:
          "Bushwick is in eastern Brooklyn along the Broadway and Myrtle corridors, with loft buildings and residential blocks toward the Queens line.",
        demand:
          "Loft residents and small studios book authorizations and personal documents at the building.",
        meetings: [
          "loft residences",
          "artist and design studios",
          "apartments off the Broadway elevated line",
        ],
      },
      {
        slug: "bay-ridge",
        name: "Bay Ridge",
        kind: "neighborhood",
        place:
          "Bay Ridge is the southwest Brooklyn neighborhood along the Narrows, from the Verrazzano bridge area north toward the 60s.",
        demand:
          "Multi-generational households book home visits for estate papers, affidavits, and real-estate documents.",
        meetings: [
          "houses and co-ops along Ridge Boulevard",
          "apartments near Third Avenue",
          "family signings with every required person present",
        ],
      },
      {
        slug: "bensonhurst",
        name: "Bensonhurst",
        kind: "neighborhood",
        place:
          "Bensonhurst is a southern Brooklyn residential neighborhood around 86th Street and the D line.",
        demand:
          "Home appointments are the norm, especially for family affidavits and property documents.",
        meetings: [
          "private houses",
          "apartment buildings off 86th Street",
          "family kitchens where the signer is most comfortable",
        ],
      },
      {
        slug: "flatbush",
        name: "Flatbush",
        kind: "neighborhood",
        place:
          "Flatbush is central southern Brooklyn, around Flatbush Avenue, Prospect Park’s south side, and the residential blocks toward Brooklyn College.",
        demand:
          "Households frequently need affidavits, school and travel papers, and housing documents notarized at home.",
        meetings: [
          "apartments and houses off Flatbush Avenue",
          "family residences near Brooklyn College",
          "small offices along Church Avenue",
        ],
      },
      {
        slug: "sunset-park",
        name: "Sunset Park",
        kind: "neighborhood",
        place:
          "Sunset Park rises above the waterfront warehouses, with a residential neighborhood along Fifth Avenue and the park at the top of the hill.",
        demand:
          "Storefront businesses and families book authorizations and personal affidavits without a trip downtown.",
        meetings: [
          "apartments above Fifth Avenue shops",
          "warehouse-edge offices by appointment",
          "family homes on the residential side streets",
        ],
      },
      {
        slug: "sheepshead-bay",
        name: "Sheepshead Bay",
        kind: "neighborhood",
        place:
          "Sheepshead Bay is the southeast Brooklyn waterfront neighborhood around the bay, Emmons Avenue, and the residential blocks inland.",
        demand:
          "Boat owners, landlords, and families usually need documents signed at the house rather than at a marina office.",
        meetings: [
          "houses inland from the bay",
          "apartments near Emmons Avenue",
          "small waterfront business offices",
        ],
      },
      {
        slug: "coney-island",
        name: "Coney Island",
        kind: "neighborhood",
        place:
          "Coney Island is the southern Brooklyn peninsula, with residential towers, houses, and the boardwalk and amusement district.",
        demand:
          "Residents book home and building-lobby signings for housing papers, benefits affidavits, and family documents.",
        meetings: [
          "apartment towers near the boardwalk",
          "houses in the residential streets",
          "seasonal business offices outside peak hours",
        ],
      },
    ],
  ),
  ...defineHub(
    {
      slug: "queens",
      name: "Queens",
      county: "Queens County",
      region: "Queens",
      kind: "borough",
      place:
        "Queens is Queens County, from Long Island City and Astoria across Flushing and Jamaica — where the county court sits — out to the Rockaway peninsula. LaGuardia and JFK are both in the borough.",
      demand:
        "Airport-adjacent travel documents, courthouse affidavits in Jamaica, and residential signings across the neighborhoods are the usual requests.",
      meetings: [
        "houses and apartment buildings",
        "offices near the Queens County court in Jamaica",
        "hotels and residences for travelers who must sign before a flight",
      ],
    },
    [
      {
        slug: "long-island-city",
        name: "Long Island City",
        kind: "neighborhood",
        place:
          "Long Island City is the western Queens waterfront, with office buildings, residential towers, and older industrial blocks facing Midtown.",
        demand:
          "Office authorizations and condo documents are the appointments that dominate the waterfront towers.",
        meetings: [
          "office buildings near Court Square",
          "residential towers on the waterfront",
          "studio and warehouse offices",
        ],
      },
      {
        slug: "astoria",
        name: "Astoria",
        kind: "neighborhood",
        place:
          "Astoria is northwest Queens, from the East River to the blocks approaching LaGuardia Airport.",
        demand:
          "Families and restaurant owners book residential and storefront signings, including travel papers for people flying out of LaGuardia.",
        meetings: [
          "apartments off Steinway and 30th Avenue",
          "restaurant and retail offices",
          "houses toward Ditmars",
        ],
      },
      {
        slug: "sunnyside",
        name: "Sunnyside",
        kind: "neighborhood",
        place:
          "Sunnyside sits along Queens Boulevard east of Long Island City, known for the Sunnyside Gardens houses and surrounding apartments.",
        demand:
          "Apartment residents book leases, affidavits, and personal documents at home.",
        meetings: [
          "Sunnyside Gardens houses",
          "apartment buildings along Queens Boulevard",
          "small professional offices",
        ],
      },
      {
        slug: "woodside",
        name: "Woodside",
        kind: "neighborhood",
        place:
          "Woodside is a residential Queens neighborhood around the 61st Street LIRR and 7 train, between Sunnyside and Jackson Heights.",
        demand:
          "Commuters often need a notary at the apartment in the evening for affidavits and housing papers.",
        meetings: [
          "apartments near Roosevelt Avenue",
          "houses off 61st Street",
          "family signings after train schedules",
        ],
      },
      {
        slug: "jackson-heights",
        name: "Jackson Heights",
        kind: "neighborhood",
        place:
          "Jackson Heights is central Queens around 37th Avenue and Roosevelt Avenue, a residential neighborhood of co-ops, houses, and diverse households.",
        demand:
          "Travel, school, and family affidavits are common, and every required signer has to be in the room.",
        meetings: [
          "co-op apartments in the historic district",
          "houses off 37th Avenue",
          "family residences near Roosevelt Avenue",
        ],
      },
      {
        slug: "elmhurst",
        name: "Elmhurst",
        kind: "neighborhood",
        place:
          "Elmhurst is central Queens around Broadway and Queens Boulevard, next to the NYC Health + Hospitals/Elmhurst campus.",
        demand:
          "Families book home signings and, when the hospital allows it, bedside documents for a patient.",
        meetings: [
          "apartments off Broadway",
          "Elmhurst Hospital when the unit permits a visitor",
          "houses toward Corona",
        ],
      },
      {
        slug: "corona",
        name: "Corona",
        kind: "neighborhood",
        place:
          "Corona is in north-central Queens, between Jackson Heights and Flushing Meadows Corona Park.",
        demand:
          "Residential affidavits and family documents are the usual appointment, signed at the house or apartment.",
        meetings: [
          "houses off Roosevelt Avenue",
          "apartments near Junction Boulevard",
          "family gatherings where all signers can appear",
        ],
      },
      {
        slug: "flushing",
        name: "Flushing",
        kind: "neighborhood",
        place:
          "Flushing is downtown northern Queens, around Main Street, the LIRR station, and a major commercial district.",
        demand:
          "Shop owners and families book business authorizations and personal documents without leaving the neighborhood.",
        meetings: [
          "offices above Main Street stores",
          "apartments and houses off Roosevelt",
          "professional suites near the LIRR station",
        ],
      },
      {
        slug: "bayside",
        name: "Bayside",
        kind: "neighborhood",
        place:
          "Bayside is northeast Queens, a residential neighborhood of houses and garden apartments near Little Neck Bay.",
        demand:
          "Homeowners book evening appointments for refinances, estate papers, and personal affidavits.",
        meetings: [
          "private houses",
          "garden apartments",
          "home offices",
        ],
      },
      {
        slug: "forest-hills",
        name: "Forest Hills",
        kind: "neighborhood",
        place:
          "Forest Hills is central Queens around Austin Street and the Forest Hills Gardens residential enclave.",
        demand:
          "Co-op and house signings are typical, including estate documents executed at home.",
        meetings: [
          "Forest Hills Gardens houses",
          "apartments near Austin Street",
          "professional offices by the station",
        ],
      },
      {
        slug: "rego-park",
        name: "Rego Park",
        kind: "neighborhood",
        place:
          "Rego Park is a residential Queens neighborhood of apartment towers along 63rd Drive and Queens Boulevard.",
        demand:
          "Tower residents book lobby or apartment signings for leases, affidavits, and refinance packages.",
        meetings: [
          "apartment towers on 63rd Drive",
          "building meeting rooms",
          "nearby medical suites when a patient can receive a visitor",
        ],
      },
      {
        slug: "kew-gardens",
        name: "Kew Gardens",
        kind: "neighborhood",
        place:
          "Kew Gardens is the civic neighborhood of Queens, home to Queens Borough Hall and close to the Jamaica court complex.",
        demand:
          "People with business at Borough Hall or the nearby courts often need an affidavit notarized the same day at a home or office.",
        meetings: [
          "apartments near Queens Boulevard",
          "houses in Kew Gardens",
          "offices around Borough Hall",
        ],
      },
      {
        slug: "jamaica",
        name: "Jamaica",
        kind: "neighborhood",
        place:
          "Jamaica is the civic and transit center of Queens, with the county courthouse on Sutphin Boulevard, the LIRR hub, and JFK to the south.",
        demand:
          "Court affidavits and travel documents for JFK departures are the appointments we are asked to handle most.",
        meetings: [
          "law offices near Sutphin Boulevard",
          "residences in downtown Jamaica",
          "hotels used by travelers before a JFK departure",
        ],
      },
      {
        slug: "ridgewood",
        name: "Ridgewood",
        kind: "neighborhood",
        place:
          "Ridgewood is on the Queens side of the Brooklyn border, a neighborhood of houses and walk-ups along Myrtle Avenue.",
        demand:
          "Homeowners and tenants book residential signings so they do not have to travel into Manhattan.",
        meetings: [
          "houses off Myrtle Avenue",
          "walk-up apartments",
          "small shop offices",
        ],
      },
      {
        slug: "howard-beach",
        name: "Howard Beach",
        kind: "neighborhood",
        place:
          "Howard Beach is a southern Queens neighborhood of houses on the edge of Jamaica Bay, just north of JFK.",
        demand:
          "Home signings are typical, including travel documents for households dealing with nearby JFK.",
        meetings: [
          "private houses",
          "family residences near Cross Bay Boulevard",
          "home offices",
        ],
      },
      {
        slug: "far-rockaway",
        name: "Far Rockaway",
        kind: "neighborhood",
        place:
          "Far Rockaway is the eastern end of the Rockaway peninsula in Queens, a residential community around the A train and St. John’s Episcopal Hospital.",
        demand:
          "Homebound signers and hospital families are the people who most often need a notary to come to the peninsula.",
        meetings: [
          "houses and apartment buildings",
          "St. John’s Episcopal Hospital when the facility allows entry",
          "family residences where travel off the peninsula is difficult",
        ],
      },
    ],
  ),
  ...defineHub(
    {
      slug: "the-bronx",
      name: "The Bronx",
      county: "Bronx County",
      region: "The Bronx",
      kind: "borough",
      place:
        "The Bronx is Bronx County, from Mott Haven at the Harlem River north to Riverdale and east to City Island. The county court stands on the Grand Concourse.",
      demand:
        "Residential affidavits, hospital signings, and documents related to the Grand Concourse courts are the requests we see most.",
      meetings: [
        "private houses and apartment buildings",
        "hospital campuses when visitor access is approved",
        "offices near the Grand Concourse courts",
      ],
    },
    [
      {
        slug: "mott-haven",
        name: "Mott Haven",
        kind: "neighborhood",
        place:
          "Mott Haven is the South Bronx neighborhood along the Harlem River, with older residential blocks and newer apartment buildings.",
        demand:
          "Residents book home appointments for housing papers, affidavits, and family documents.",
        meetings: [
          "apartment buildings near the river",
          "older residential walk-ups",
          "small business offices",
        ],
      },
      {
        slug: "fordham",
        name: "Fordham",
        kind: "neighborhood",
        place:
          "Fordham is in the central Bronx around Fordham Road and the Fordham University Rose Hill campus.",
        demand:
          "Students and neighboring households need acknowledgments for school, housing, and personal documents.",
        meetings: [
          "apartments off Fordham Road",
          "campus-adjacent residences",
          "family homes north of the commercial strip",
        ],
      },
      {
        slug: "kingsbridge",
        name: "Kingsbridge",
        kind: "neighborhood",
        place:
          "Kingsbridge is in the northwest Bronx along Broadway, near the Jerome Park Reservoir and the VA medical campus.",
        demand:
          "Families connected to the VA and nearby residences often need a notary at the apartment.",
        meetings: [
          "apartments along Broadway",
          "houses toward Riverdale",
          "medical-campus visits only when the facility allows them",
        ],
      },
      {
        slug: "riverdale",
        name: "Riverdale",
        kind: "neighborhood",
        place:
          "Riverdale is the northwest Bronx neighborhood of houses, co-ops, and apartment buildings above the Henry Hudson Parkway.",
        demand:
          "Estate documents and co-op packages are usually signed at the residence.",
        meetings: [
          "private houses",
          "co-op apartments",
          "family offices in the home",
        ],
      },
      {
        slug: "morris-park",
        name: "Morris Park",
        kind: "neighborhood",
        place:
          "Morris Park is an eastern Bronx residential neighborhood beside the Jacobi and Einstein medical campuses.",
        demand:
          "Hospital families and nearby homeowners book signings at the house or, when permitted, at the hospital.",
        meetings: [
          "houses in Morris Park",
          "Jacobi Medical Center when the unit allows a visitor",
          "apartments toward Pelham Parkway",
        ],
      },
      {
        slug: "parkchester",
        name: "Parkchester",
        kind: "neighborhood",
        place:
          "Parkchester is the large planned residential complex in the east Bronx, with apartment buildings around the Metropolitan Avenue oval.",
        demand:
          "Residents need apartment signings for leases, refinances, and personal affidavits.",
        meetings: [
          "apartments inside the Parkchester complex",
          "building meeting rooms",
          "family signings scheduled around work shifts",
        ],
      },
      {
        slug: "throgs-neck",
        name: "Throgs Neck",
        kind: "neighborhood",
        place:
          "Throgs Neck, also written Throggs Neck, is the southeast Bronx peninsula between the East River and Eastchester Bay.",
        demand:
          "Homeowners on the peninsula book house visits so they do not have to drive to the Grand Concourse.",
        meetings: [
          "private houses",
          "family residences near the bridges",
          "small local offices",
        ],
      },
      {
        slug: "pelham-bay",
        name: "Pelham Bay",
        kind: "neighborhood",
        place:
          "Pelham Bay is the northeast Bronx neighborhood beside Pelham Bay Park and the residential blocks toward Co-op City.",
        demand:
          "House signings for estate papers and property documents are the usual request.",
        meetings: [
          "private houses",
          "apartments near the park",
          "family residences",
        ],
      },
      {
        slug: "co-op-city",
        name: "Co-op City",
        kind: "neighborhood",
        place:
          "Co-op City is the large cooperative development in the northeast Bronx, a community of residential towers in Baychester.",
        demand:
          "Shareholders book apartment appointments for refinances, affidavits, and family documents.",
        meetings: [
          "apartments in the cooperative towers",
          "building community rooms",
          "family signings with all shareholders present",
        ],
      },
      {
        slug: "city-island",
        name: "City Island",
        kind: "neighborhood",
        prep: "on",
        place:
          "City Island is the small maritime community in the northeast Bronx, connected to the mainland by the City Island Bridge.",
        demand:
          "Residents and boat-related businesses need a notary who will come onto the island rather than ask a signer to leave it.",
        meetings: [
          "houses on the island",
          "marina and boatyard offices",
          "family residences along City Island Avenue",
        ],
      },
    ],
  ),
  ...defineHub(
    {
      slug: "staten-island",
      name: "Staten Island",
      prep: "on",
      county: "Richmond County",
      region: "Staten Island",
      kind: "borough",
      place:
        "Staten Island is Richmond County. The ferry terminal, Borough Hall, and the county courts are in St. George, and residential neighborhoods run south to Tottenville.",
      demand:
        "Home signings are the norm, with courthouse affidavits concentrated around St. George.",
      meetings: [
        "private houses",
        "offices near the St. George courts",
        "hospital visits when the facility grants access",
      ],
    },
    [
      {
        slug: "st-george",
        name: "St. George",
        kind: "neighborhood",
        place:
          "St. George is the civic center of Staten Island, at the ferry terminal, Borough Hall, and the Richmond County courts.",
        demand:
          "Court affidavits and documents for people arriving by ferry are the appointments we handle most here.",
        meetings: [
          "law offices near the courts",
          "residences by the ferry terminal",
          "business offices in the civic center",
        ],
      },
      {
        slug: "stapleton",
        name: "Stapleton",
        kind: "neighborhood",
        place:
          "Stapleton is on the north shore, just south of St. George, with residential streets and the waterfront development along the bay.",
        demand:
          "Residents book house and apartment signings for property documents and personal affidavits.",
        meetings: [
          "houses on the Stapleton hills",
          "waterfront residences",
          "small local offices",
        ],
      },
      {
        slug: "port-richmond",
        name: "Port Richmond",
        kind: "neighborhood",
        place:
          "Port Richmond is a north-shore neighborhood along Richmond Terrace, with a commercial avenue and surrounding houses.",
        demand:
          "Shop owners and neighboring households book authorizations and family documents at the location.",
        meetings: [
          "offices along Port Richmond Avenue",
          "houses toward the terrace",
          "family residences",
        ],
      },
      {
        slug: "new-dorp",
        name: "New Dorp",
        kind: "neighborhood",
        place:
          "New Dorp is a mid-island residential neighborhood around New Dorp Lane and the Staten Island Railway station.",
        demand:
          "Homeowners book evening house visits for refinances, estate papers, and affidavits.",
        meetings: [
          "private houses",
          "apartments near New Dorp Lane",
          "local professional offices",
        ],
      },
      {
        slug: "great-kills",
        name: "Great Kills",
        kind: "neighborhood",
        place:
          "Great Kills is a south-shore residential neighborhood beside Great Kills Park and the marina.",
        demand:
          "House signings are typical for property documents and family affidavits.",
        meetings: [
          "private houses",
          "residences near the park",
          "marina-adjacent home offices",
        ],
      },
      {
        slug: "tottenville",
        name: "Tottenville",
        kind: "neighborhood",
        place:
          "Tottenville is the southernmost neighborhood in New York State, at the bottom of Staten Island along the Arthur Kill.",
        demand:
          "Residents at the south end of the island need a notary who will come to the house instead of asking them to travel to St. George.",
        meetings: [
          "private houses",
          "family residences near Main Street",
          "home offices",
        ],
      },
    ],
  ),
  ...defineHub(
    {
      slug: "nassau-county",
      name: "Nassau County",
      county: "Nassau County",
      region: "Nassau County",
      kind: "county",
      place:
        "Nassau County is the western half of Long Island, from the Queens border to the Suffolk line. The county courts and clerk are in Mineola. These visits are scheduled in advance.",
      demand:
        "Real-estate closings, hospital signings, and home appointments across the towns and villages are what Nassau clients request.",
      meetings: [
        "houses and apartments scheduled in advance",
        "law offices and closing tables",
        "hospitals, including NYU Langone Hospital—Long Island in Mineola, when the facility allows entry",
      ],
    },
    [
      {
        slug: "mineola",
        name: "Mineola",
        kind: "hamlet",
        place:
          "Mineola is the Nassau County seat, with the county courts and NYU Langone Hospital—Long Island along the LIRR main line.",
        demand:
          "Court affidavits, hospital signings, and closing packages are the reasons clients book a Mineola visit in advance.",
        meetings: [
          "law offices near the county courts",
          "the hospital campus when visitors are permitted",
          "residences and closing tables in the hamlet",
        ],
      },
      {
        slug: "garden-city",
        name: "Garden City",
        kind: "village",
        place:
          "Garden City is an incorporated village in the Town of Hempstead, with residential streets, corporate offices, and Roosevelt Field at its edge.",
        demand:
          "Corporate authorizations and house closings are the appointments village residents and office tenants request.",
        meetings: [
          "corporate offices",
          "village houses",
          "closing conferences arranged with the attorney",
        ],
      },
      {
        slug: "hempstead",
        name: "Hempstead",
        kind: "village",
        place:
          "The Village of Hempstead sits inside the much larger Town of Hempstead, near Hofstra University and the county office corridor.",
        demand:
          "Students, landlords, and families book residential and campus-adjacent signings scheduled ahead of time.",
        meetings: [
          "village residences",
          "offices near Hofstra",
          "family homes in the surrounding town when that address is confirmed at booking",
        ],
      },
      {
        slug: "uniondale",
        name: "Uniondale",
        kind: "hamlet",
        place:
          "Uniondale is a Town of Hempstead hamlet that includes the Hofstra University campus and the Nassau Coliseum area.",
        demand:
          "University-related documents and residential affidavits are scheduled at the home or an office on campus grounds when access is allowed.",
        meetings: [
          "houses in the hamlet",
          "Hofstra-area offices that can receive a visitor",
          "family signings arranged in advance",
        ],
      },
      {
        slug: "westbury",
        name: "Westbury",
        kind: "village",
        place:
          "Westbury is a village on the Hempstead–North Hempstead line, with a downtown near the LIRR and residential streets toward Roosevelt Field.",
        demand:
          "Home refinances and personal affidavits are usually signed at the house.",
        meetings: [
          "village houses",
          "apartments near the station",
          "local professional offices",
        ],
      },
      {
        slug: "hicksville",
        name: "Hicksville",
        kind: "hamlet",
        place:
          "Hicksville is a Town of Oyster Bay hamlet and a major LIRR junction, with a commercial stretch on Broadway and surrounding houses.",
        demand:
          "Commuter households book evening home appointments for property documents and affidavits.",
        meetings: [
          "houses off Broadway",
          "apartments near the LIRR station",
          "small offices in the hamlet",
        ],
      },
      {
        slug: "freeport",
        name: "Freeport",
        kind: "village",
        place:
          "Freeport is an incorporated south-shore village known as the Nautical Mile, with a working waterfront and residential streets inland.",
        demand:
          "Marine businesses and homeowners book authorizations and personal documents at the village address.",
        meetings: [
          "houses inland from the waterfront",
          "Nautical Mile business offices",
          "family residences",
        ],
      },
      {
        slug: "long-beach",
        name: "Long Beach",
        kind: "city",
        place:
          "Long Beach is an independent city on a barrier island in Nassau, with a boardwalk, apartment houses, and residential streets.",
        demand:
          "Condo and co-op documents, plus homebound signings, are the usual reason to book a trip onto the island.",
        meetings: [
          "boardwalk-area apartments",
          "houses on the residential streets",
          "building meeting rooms",
        ],
      },
      {
        slug: "rockville-centre",
        name: "Rockville Centre",
        kind: "village",
        place:
          "Rockville Centre is a south-shore village with a downtown on Sunrise Highway and the LIRR, and residential blocks around it.",
        demand:
          "Village homeowners book house closings and estate documents in advance.",
        meetings: [
          "village houses",
          "downtown professional offices",
          "family signings near the station",
        ],
      },
      {
        slug: "valley-stream",
        name: "Valley Stream",
        kind: "village",
        place:
          "Valley Stream is a Nassau village on the Queens border, with residential streets and the Green Acres shopping area.",
        demand:
          "Households that straddle the city line book Nassau appointments at the village house or apartment.",
        meetings: [
          "village houses",
          "apartments near the LIRR",
          "local offices",
        ],
      },
      {
        slug: "lynbrook",
        name: "Lynbrook",
        kind: "village",
        place:
          "Lynbrook is a south-shore village between Valley Stream and Rockville Centre, centered on its LIRR station and Sunrise Highway.",
        demand:
          "Home appointments for refinances and affidavits are scheduled at the village address.",
        meetings: [
          "village houses",
          "apartments near the station",
          "small downtown offices",
        ],
      },
      {
        slug: "oceanside",
        name: "Oceanside",
        kind: "hamlet",
        place:
          "Oceanside is a south-shore hamlet in the Town of Hempstead, south of Rockville Centre toward the bay.",
        demand:
          "Homeowners book house visits for property and family documents.",
        meetings: [
          "private houses",
          "family residences",
          "local professional offices",
        ],
      },
      {
        slug: "baldwin",
        name: "Baldwin",
        kind: "hamlet",
        place:
          "Baldwin is a Town of Hempstead hamlet on the south shore, with houses and apartments around Grand Avenue and the LIRR.",
        demand:
          "Residential signings for real-estate and personal documents are scheduled at the home.",
        meetings: [
          "houses off Grand Avenue",
          "apartments near the station",
          "family residences",
        ],
      },
      {
        slug: "massapequa",
        name: "Massapequa",
        kind: "hamlet",
        place:
          "Massapequa is a south-shore hamlet in the Town of Oyster Bay, running toward the Suffolk County line.",
        demand:
          "House closings and estate papers are the documents families ask to sign at home.",
        meetings: [
          "private houses",
          "family residences near the parkway",
          "local offices",
        ],
      },
      {
        slug: "levittown",
        name: "Levittown",
        kind: "hamlet",
        place:
          "Levittown is the planned residential community that straddles the Town of Hempstead and the Town of Oyster Bay.",
        demand:
          "Cape-style houses here are a common setting for refinance and estate signings.",
        meetings: [
          "single-family houses",
          "kitchen-table family signings",
          "documents that need every owner present",
        ],
      },
      {
        slug: "east-meadow",
        name: "East Meadow",
        kind: "hamlet",
        place:
          "East Meadow is a central Nassau hamlet beside Eisenhower Park and Nassau University Medical Center.",
        demand:
          "Hospital families and neighboring homeowners book signings at the house or, when the medical center allows, at the bedside.",
        meetings: [
          "houses near Eisenhower Park",
          "Nassau University Medical Center when entry is approved",
          "family residences",
        ],
      },
      {
        slug: "elmont",
        name: "Elmont",
        kind: "hamlet",
        place:
          "Elmont is a Town of Hempstead hamlet on the Queens border, next to Belmont Park.",
        demand:
          "Households on the city line book Nassau home appointments for affidavits and property documents.",
        meetings: [
          "houses near Belmont Park",
          "family residences off Hempstead Turnpike",
          "local offices",
        ],
      },
      {
        slug: "floral-park",
        name: "Floral Park",
        kind: "village",
        place:
          "The Village of Floral Park is in Nassau County on the Queens border. A separate Queens neighborhood shares the name, so the appointment address is confirmed when you book.",
        demand:
          "Village residents book house and apartment signings on the Nassau side of the line.",
        meetings: [
          "village houses",
          "apartments near the LIRR",
          "Tulip Avenue offices",
        ],
      },
      {
        slug: "great-neck",
        name: "Great Neck",
        kind: "village",
        place:
          "Great Neck is the north-shore peninsula in the Town of North Hempstead, a group of villages and unincorporated areas along the bay.",
        demand:
          "Estate documents and real-estate packages are typically signed at the house.",
        meetings: [
          "peninsula houses",
          "village professional offices",
          "family residences scheduled in advance",
        ],
      },
      {
        slug: "manhasset",
        name: "Manhasset",
        kind: "hamlet",
        place:
          "Manhasset is a north-shore hamlet in North Hempstead, with residential streets and the Miracle Mile shops on Northern Boulevard.",
        demand:
          "Home closings and personal affidavits are scheduled at the house or a nearby office.",
        meetings: [
          "hamlet houses",
          "offices along Northern Boulevard",
          "family signings",
        ],
      },
      {
        slug: "roslyn",
        name: "Roslyn",
        kind: "village",
        place:
          "Roslyn is a historic north-shore village in the Town of North Hempstead, in the valley around the Roslyn Viaduct.",
        demand:
          "Village homeowners book house appointments for estate and property documents.",
        meetings: [
          "village houses",
          "historic-district residences",
          "small local offices",
        ],
      },
      {
        slug: "port-washington",
        name: "Port Washington",
        kind: "hamlet",
        place:
          "Port Washington is the north-shore hamlet at the end of its own LIRR branch, with a downtown, marinas, and residential peninsula streets.",
        demand:
          "Marina businesses and homeowners book visits so signers do not have to leave the peninsula.",
        meetings: [
          "houses on the peninsula",
          "marina and boatyard offices",
          "downtown professional suites",
        ],
      },
      {
        slug: "glen-cove",
        name: "Glen Cove",
        kind: "city",
        place:
          "Glen Cove is an independent city on the Nassau north shore, with a downtown, residential neighborhoods, and a waterfront.",
        demand:
          "City residents book home and office signings scheduled in advance, including waterfront property documents.",
        meetings: [
          "houses in the city",
          "downtown offices",
          "waterfront residences",
        ],
      },
      {
        slug: "syosset",
        name: "Syosset",
        kind: "hamlet",
        place:
          "Syosset is a Town of Oyster Bay hamlet along Jericho Turnpike, with residential streets and a commercial corridor.",
        demand:
          "Home refinances and business authorizations are the documents most often signed here.",
        meetings: [
          "hamlet houses",
          "offices on Jericho Turnpike",
          "family residences",
        ],
      },
      {
        slug: "jericho",
        name: "Jericho",
        kind: "hamlet",
        place:
          "Jericho is a Town of Oyster Bay hamlet with residential streets and office parks along the Long Island Expressway and Route 106.",
        demand:
          "Office-park authorizations and house signings are both common, and both are booked ahead.",
        meetings: [
          "office parks",
          "hamlet houses",
          "conference rooms arranged by the signer",
        ],
      },
      {
        slug: "plainview",
        name: "Plainview",
        kind: "hamlet",
        place:
          "Plainview is a central Nassau hamlet in the Town of Oyster Bay, south of Syosset, with houses and a commercial stretch on Old Country Road.",
        demand:
          "Homeowners book evening signings for property documents and affidavits.",
        meetings: [
          "private houses",
          "offices on Old Country Road",
          "family residences",
        ],
      },
      {
        slug: "bethpage",
        name: "Bethpage",
        kind: "hamlet",
        place:
          "Bethpage is a Town of Oyster Bay hamlet with a residential community and the former aerospace industrial land along the parkway.",
        demand:
          "House appointments for refinances, estate papers, and personal affidavits are scheduled in advance.",
        meetings: [
          "hamlet houses",
          "local offices",
          "family signings at the residence",
        ],
      },
      {
        slug: "cedarhurst",
        name: "Cedarhurst",
        kind: "village",
        place:
          "Cedarhurst is a Five Towns village in southwest Nassau, with a downtown on Central Avenue and residential streets toward the bay.",
        demand:
          "Real-estate packages and family documents for Five Towns households are signed at the home or a village office.",
        meetings: [
          "village houses",
          "Central Avenue offices",
          "family residences",
        ],
      },
      {
        slug: "woodmere",
        name: "Woodmere",
        kind: "hamlet",
        place:
          "Woodmere is a Five Towns hamlet in the Town of Hempstead, between Cedarhurst and Hewlett, with houses toward the bay.",
        demand:
          "Home closings and estate documents are the usual Woodmere appointment.",
        meetings: [
          "hamlet houses",
          "family residences near the station",
          "local professional offices",
        ],
      },
      {
        slug: "hewlett",
        name: "Hewlett",
        kind: "hamlet",
        place:
          "Hewlett is a Five Towns hamlet in southwest Nassau, with houses, the LIRR station, and streets leading toward the bay.",
        demand:
          "Families book house visits for purchase packages, refinances, and personal affidavits.",
        meetings: [
          "private houses",
          "apartments near the station",
          "family signings with all owners present",
        ],
      },
    ],
  ),
];

const slugs = new Set<string>();

for (const area of areas) {
  if (slugs.has(area.slug)) {
    throw new Error(`Duplicate service-area slug: ${area.slug}`);
  }
  slugs.add(area.slug);
  if (area.hub && !areas.some((item) => item.slug === area.hub && item.hub === null)) {
    throw new Error(`Missing hub for ${area.slug}`);
  }
}

if (areas.length !== 100) {
  throw new Error(`Expected 100 service areas, found ${areas.length}`);
}

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}

export function areaPath(area: Area) {
  return `/areas/${area.slug}`;
}

export const areaHubs = areas.filter((area) => area.hub === null);

export function childrenOf(slug: string) {
  return areas.filter((area) => area.hub === slug);
}

export function parentArea(area: Area) {
  return area.hub ? getArea(area.hub) : undefined;
}

export function relatedAreas(area: Area) {
  if (area.hub === null) {
    return areaHubs.filter((item) => item.slug !== area.slug);
  }

  const group = areas.filter((item) => item.hub === area.hub);
  const index = group.findIndex((item) => item.slug === area.slug);
  return [1, 2, 3].map((step) => group[(index + step) % group.length]);
}
