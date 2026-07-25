// guides-batch-198 — 4 senior-priority guides on travel budgeting and money-saving travel tips
// Drafted 2026-05-08 to help older travelers plan affordable trips with confidence
// Sourced from AARP Travel, NerdWallet, The Points Guy, Google Flights help center, and FTC consumer alerts

import type { Guide } from "./guides";

export const guidesBatch198: Guide[] = [
  {
    slug: "how-to-set-travel-budget",
    title: "How to Set a Realistic Travel Budget Before Your Trip",
    excerpt: "Build a clear, line-by-line travel budget that covers flights, lodging, food, and surprises so you come home without money worries.",
    category: "travel",
    tags: ["travel", "budget", "money", "planning", "vacation"],
    readTime: "8 min",
    thumbnailEmoji: "💵",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "A realistic travel budget is the difference between coming home from a wonderful trip with happy memories and coming home to a credit card bill that ruins the next three months. Older travelers often have more time but a fixed income, so every dollar spent on the road has to be planned. AARP's annual travel survey reports that the average retired American couple spends about $4,000 to $6,000 on a one-week domestic trip and $7,000 to $10,000 on a one-week international trip — once flights, hotels, food, ground transport, activities, tips, and small purchases are added up.\n\nThe trouble is that most people only count the big-ticket items. They book a $1,200 flight and a $1,400 hotel, decide the trip costs $2,600, and then watch in surprise as taxis, restaurants, museum entries, gifts for grandchildren, and travel insurance push the actual cost over $4,500. A real budget catches every category before the trip starts, not after.\n\nThe budgeting method in this guide is the same one used by certified financial planners who specialize in retirement travel. It breaks the trip into seven spending categories, assigns a daily or trip-total dollar amount to each, adds a 15% cushion for surprises, and puts the result in writing on one page. Once the page is filled out, you compare the total to what you can comfortably spend without dipping into emergency savings. If the number is too high, you adjust — fewer days, a less expensive hotel, a closer destination — until the math works.\n\nA written budget also gives you something to point at while traveling. When the hotel desk offers a $40 daily breakfast buffet, the budget tells you that breakfast was already covered with $15 a day from the grocery store. When a tour operator pushes a $300 add-on, the budget shows whether the cushion can absorb it.\n\nThis guide walks through filling out a one-page budget for one upcoming trip. The same template works for a long weekend, a 2-week cruise, or a month abroad.",
    steps: [
      {
        title: "Pick the trip and write down the basics",
        content: "On a sheet of paper or in a notes app, write the destination, the start date, the end date, the total number of nights, and the number of travelers. These five facts shape every other number. A 7-night trip for two people to Charleston, South Carolina is a very different budget than a 14-night trip for one person to Paris. Write everything down before searching prices — it stops the budget from drifting as you go.",
      },
      {
        title: "Estimate transportation to and from the destination",
        content: "This is flights, train tickets, or fuel and tolls if you drive. Search round-trip prices on Google Flights, Kayak, or Amtrak.com for the actual dates and write the result down. Add airport parking ($15 to $25 a day at most US airports), checked-bag fees ($35 to $40 per bag each way on most airlines), and a taxi or rideshare to and from the airport on both ends. For a driving trip, multiply round-trip miles by your car's miles-per-gallon, then by current gas price, and add tolls.",
        tip: "AAA's TripTik tool gives a free fuel-cost estimate for any driving route in the US. Members get the estimate online at AAA.com; non-members can use GasBuddy's Trip Cost Calculator at no charge.",
      },
      {
        title: "Estimate lodging for every night",
        content: "Search Booking.com, Hotels.com, or the hotel chain's own website for the actual dates and write down a nightly rate that includes taxes and resort fees (the small print at checkout often adds 15% to 25% to the listed rate). Multiply the nightly total by the number of nights. If the trip mixes hotel nights with a stay at family or friends, only count the paid nights.",
        warning: "\"Resort fees\" and \"destination fees\" are mandatory daily charges that hotels often hide on the booking page until checkout. A $129 room can become $179 a night after the resort fee. Always check the final total at the booking summary screen — that is the real price.",
      },
      {
        title: "Set a daily food budget per person",
        content: "A workable rule of thumb in the US is $20 a day per person for breakfast, $20 for lunch, and $40 for a sit-down dinner — about $80 a day per person, or $560 a week. International cities like London, Paris, or Tokyo run $100 to $130 a day. Coffee, snacks, and a glass of wine with dinner add another $15 to $20 a day. Multiply the daily figure by the number of travelers and the number of days.",
      },
      {
        title: "Add ground transport, activities, and tips",
        content: "Ground transport at the destination covers taxis, rideshare, subway passes, or rental cars. Plan on $20 to $40 a day in most US cities. Activities include museum entries, tour tickets, theater shows, and any pre-booked excursions — list each one with its price. Tips run about 18% to 20% on restaurant meals, $1 to $2 per drink at bars, $2 to $5 per bag for hotel porters, and $5 a day for housekeeping. Add all three columns together.",
      },
      {
        title: "Add travel insurance and a 15% cushion",
        content: "Trip insurance for travelers over 60 typically costs 5% to 10% of the trip's total non-refundable cost. Get a quote at InsureMyTrip.com or Squaremouth.com and add the figure to the budget. Then take the running total of every category so far and add 15% as a cushion. The cushion absorbs missed flights, an extra cab, a souvenir, or an unexpected pharmacy visit. Without a cushion, the budget will almost certainly be broken.",
        warning: "If you have any pre-existing medical condition, ask the insurance company if their policy includes a \"pre-existing condition waiver.\" The waiver usually has to be purchased within 14 to 21 days of the first trip deposit. Without it, a flare-up of an old condition is not covered.",
      },
      {
        title: "Compare the total to what you can spend",
        content: "Add up every line. The grand total is the realistic cost of the trip. Now compare it to the amount you have set aside or can pay off within 30 days of returning. If the trip total is higher, do not hope for the best — go back and trim. Cut a night, pick a less expensive hotel, swap a flight for a drive, or shift the dates to a less expensive week. Re-do the math until the trip total is at or below what you can comfortably afford.",
      },
    ],
  },
  {
    slug: "how-to-use-travel-credit-card",
    title: "How to Use a Travel Credit Card Without Getting Tripped Up by Fees",
    excerpt: "Pick the right travel card, avoid foreign transaction fees, and use rewards points to lower trip costs without falling into common traps.",
    category: "financial-tech",
    tags: ["credit card", "travel", "rewards", "fees", "points"],
    readTime: "9 min",
    thumbnailEmoji: "💳",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Intermediate",
    body: "A travel credit card, used carefully, can pay for a free flight or two free hotel nights every year. Used carelessly, the same card can cost $300 in foreign transaction fees, $95 in annual fees you forgot about, and 22% interest on a balance you meant to pay off. The difference is not the card itself — it is how the cardholder uses it.\n\nTravel credit cards fall into three rough groups. General travel cards (Chase Sapphire Preferred, Capital One Venture) earn points that can be used on any airline or hotel. Airline cards (Delta SkyMiles, American AAdvantage, United MileagePlus) earn miles only on that airline but include perks like free checked bags. Hotel cards (Marriott Bonvoy, Hilton Honors, IHG One Rewards) earn points at one hotel chain and often include free anniversary nights. NerdWallet's 2025 review found that the average retiree gets the most value from a single general travel card with no foreign transaction fee plus an airline co-brand card for the airline they fly most often.\n\nThe traps that cost older travelers money are predictable. Foreign transaction fees of 3% on every purchase abroad add up fast — a $4,000 European trip becomes a $4,120 trip without the cardholder noticing. Annual fees that auto-renew on cards no longer in use drain $95 to $695 a year. Cash-advance fees of 5% plus 25% interest from the day of withdrawal punish anyone who uses the card at an ATM. And points that sit unused often expire or lose value when the card company changes the rewards program.\n\nThis guide walks through the seven habits that turn a travel card into a tool that saves money on every trip. The first habit — paying the balance in full each month — is the foundation. No rewards program in the world earns more than the 22% to 29% interest that a carried balance costs.\n\nNone of this requires a finance degree. It requires checking a few things before booking the trip and a few things after returning home. About 30 minutes a year of attention is enough.",
    steps: [
      {
        title: "Pick a card with no foreign transaction fee",
        content: "If any part of the trip is outside the United States — including a cruise that stops in foreign ports — the card must have a 0% foreign transaction fee. Cards that charge 3% include most Bank of America cash-back cards, most basic Citi cards, and many store cards. Cards with 0% include every Capital One card, Chase Sapphire Preferred and Reserve, and every Discover card (though Discover is rarely accepted overseas). Check the cardholder agreement under \"Foreign Transaction Fee\" or call the number on the back of the card.",
        warning: "Cruise lines bill in US dollars even when the ship is overseas, so cruise charges usually do not trigger foreign transaction fees. But port-of-call shops, taxis, and restaurants on shore do. Always carry a no-foreign-fee card for shore days.",
      },
      {
        title: "Read the annual fee and decide if it pays for itself",
        content: "Annual fees range from $0 (Capital One VentureOne, Wells Fargo Autograph) to $95 (Chase Sapphire Preferred, Capital One Venture) to $550 to $695 (Chase Sapphire Reserve, Amex Platinum). A fee makes sense only if the card's perks save you more than the fee each year. A $95 fee that comes with one free hotel night worth $200 pays for itself. A $550 fee that comes with airport-lounge access you use twice a year may not. Make the math match your travel pattern.",
      },
      {
        title: "Notify the card company of travel dates",
        content: "On the card's app or website, look for \"Travel Notice,\" \"Trip Notification,\" or under Account Services. Enter the destinations and dates. This stops the fraud-detection software from declining your card the first time it is used in another state or country. Most major cards (Chase, Amex, Capital One) no longer require travel notices because their fraud software has been updated, but smaller banks and credit unions still do. When in doubt, file the notice — it takes 2 minutes.",
      },
      {
        title: "Pay in local currency at every overseas terminal",
        content: "When you pay with a card outside the US, the credit-card terminal often asks: \"Pay in US dollars or local currency?\" Always pick local currency. The \"US dollars\" option is called Dynamic Currency Conversion, and the merchant's bank sets the exchange rate — typically 5% to 8% worse than your card's rate. Picking local currency lets your own card use the wholesale Visa or Mastercard rate, which is within 1% of the real exchange rate.",
        tip: "The same rule applies to overseas ATM screens that ask if you want to be charged in US dollars. Always say no, always pick local currency.",
      },
      {
        title: "Never use the credit card for cash advances",
        content: "Pulling cash from an ATM with a credit card triggers a cash-advance fee (usually 5% or $10, whichever is greater) plus interest at 25% to 29% that starts accruing the same day — there is no grace period. A $200 ATM withdrawal can cost $15 in fees and $4 in same-day interest. Use a debit card from your checking account for ATM withdrawals, or carry the cash you need before the trip.",
        warning: "Some hotels and rental car companies place a temporary \"hold\" on the card of $200 to $500 above the room or rental rate. The hold is not a charge but reduces the available credit until released, usually within 7 days of checkout. If a card is near its limit, the hold can cause the next purchase to be declined.",
      },
      {
        title: "Pay the statement balance in full each month",
        content: "On the due date, pay the full statement balance, not the minimum payment. Set up auto-pay for \"Statement Balance\" through the card's website so it happens without thinking. Carrying a balance at 22% to 29% interest costs more than any rewards program could ever return. The point of a travel card is the rewards — the rewards are negative if interest is paid.",
      },
      {
        title: "Use points before they lose value",
        content: "Card-company points programs change rules regularly, and the changes almost always make points worth less. Once a year, log in to the card's rewards portal and either book a flight or hotel with the points or transfer them to an airline or hotel program where they can be used. Do not let points sit for 5 years assuming they will keep their value — they almost certainly will not. AARP's travel benefits page lists current point values for major programs.",
      },
    ],
  },
  {
    slug: "how-to-find-cheap-flights-google-flights",
    title: "How to Find Cheap Flights with Google Flights Price Tracking",
    excerpt: "Use Google Flights' free price-tracking and date-grid tools to spot the lowest fares and get an alert when the price drops on your route.",
    category: "travel",
    tags: ["flights", "google flights", "travel", "price tracking", "savings"],
    readTime: "8 min",
    thumbnailEmoji: "✈️",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "Google Flights is a free flight-search website at google.com/flights. It pulls fares from nearly every airline that flies in or out of the United States — about 300 carriers — and shows them in a single, plain list. Unlike Expedia or Travelocity, Google Flights does not sell the tickets. It shows the price and sends you to the airline's own website to buy. That means no booking fees, no \"agency fees,\" and no third-party customer-service nightmares if a flight gets canceled.\n\nThe two features that save older travelers the most money are Price Tracking and the Date Grid. Price Tracking watches a route for you. Pick a flight you might want, click the toggle that says \"Track prices,\" and Google emails you whenever the fare goes up or down. The emails arrive once a week, or right away when the price drops by more than 10%. The service is free and does not require a Google account beyond a free Gmail address.\n\nThe Date Grid shows a 60-day calendar of fares for your route in one screen. Suddenly it becomes obvious that flying out on a Tuesday instead of a Saturday saves $180. Or that the same trip costs $400 less if shifted by one week. AARP's 2025 travel-savings report found that travelers who shift their dates by 3 days based on a price-grid view save an average of 22% on domestic flights and 28% on international.\n\nGoogle Flights does not require an account, an app download, or any payment. The site works on a phone browser, tablet, or computer. The same tools work for one-way, round-trip, and multi-city searches. The only flights it does not show are Southwest Airlines fares (Southwest does not share its data with search sites — those have to be checked at southwest.com directly).\n\nThis guide walks through using Google Flights to research one round-trip flight, set a price tracker, and find the cheapest dates to travel. The same steps work for any route, any time of year.",
    steps: [
      {
        title: "Open Google Flights in a browser",
        content: "On a computer, phone, or tablet, open a web browser (Chrome, Safari, Edge, or Firefox all work fine) and go to google.com/flights. The site loads with a search box at the top. There is no app to download — Google Flights is a website, not an app. If a Google account is signed in on the browser, the site will save searches; if not, the site still works fully without signing in.",
      },
      {
        title: "Enter the route and dates",
        content: "In the search box, pick \"Round trip\" or \"One way\" from the dropdown. In the From box, type your home airport's 3-letter code (ATL for Atlanta, DEN for Denver, JFK for New York, LAX for Los Angeles) or the city name. In the To box, do the same for the destination. Click the date boxes and pick the departure and return dates from the calendar. Tap Search.",
        tip: "If you are not sure which airport is closest to your destination, type the city or country name (for example \"Italy\") and Google Flights shows fares to every major airport in the area on one screen.",
      },
      {
        title: "Look at the results sorted by price",
        content: "Results appear in a list sorted by Best (a mix of price and convenience) by default. Click \"Cheapest\" at the top of the result list to re-sort by lowest fare first. Each result shows the airline, departure and arrival times, total flight time, number of stops, and price. Layovers under 90 minutes are tight for older travelers — pick a flight with a 2 to 3 hour layover when changing planes.",
        warning: "Some very low fares are \"Basic Economy\" tickets that do not include a carry-on bag, seat selection, or any change-or-cancel option. Click the fare to see what is included. For most older travelers, the next fare class up (often $50 more) is worth it for the carry-on bag and free cancellation.",
      },
      {
        title: "Open the Date Grid to find cheaper dates",
        content: "Above the result list, click the link that says \"Date grid\" or the calendar icon. A 7-by-7 table appears showing the price for every combination of departure and return dates within the next 2 months. Cheaper dates are shaded green. Tap any cell to switch your search to those dates. This single tool often shows that shifting the trip by 2 days saves $200 or more.",
      },
      {
        title: "Turn on Price Tracking for the route",
        content: "Once the dates and route look right, find the toggle near the top of the result list labeled \"Track prices.\" Slide it to On. A pop-up confirms that price alerts will be emailed for this route and dates. If you want alerts on the route at any dates, also slide the \"Any dates\" toggle to On. Google now watches the fare and emails you whenever it changes by more than $20 or 10%.",
        tip: "You can track up to 100 routes at once. To see all of your tracked routes, click \"Tracked flights\" in the top menu of Google Flights. Routes can be turned off the same way they were turned on — slide the toggle back.",
      },
      {
        title: "Wait for the price to drop and book on the airline's site",
        content: "Most domestic round-trip fares fluctuate by 15% to 30% over a 60-day window. International fares move 20% to 40%. The cheapest day to book a US domestic flight is, on average, 28 to 35 days before departure (Hopper's 2025 data). When a price-drop email arrives, click the link, confirm the fare on Google Flights, then click Select to be sent to the airline's own website to complete the purchase. Always book directly with the airline — never with a third-party site that adds fees and complicates refunds.",
      },
      {
        title: "Save the confirmation and add it to your calendar",
        content: "After booking on the airline's site, the airline emails a confirmation with a 6-character record-locator code (also called a confirmation number or PNR). Save the email in a folder named \"Trip — [destination] [month/year].\" Add the flight to your phone's calendar with the flight number, departure time, and confirmation code in the notes. This is the information you'll need at check-in and if anything goes wrong with the flight.",
      },
    ],
  },
  {
    slug: "how-to-save-on-hotel-rates-senior",
    title: "How to Save Money on Hotel Rates as a Senior",
    excerpt: "Stack senior discounts, AARP rates, member loyalty programs, and timing tricks to bring down hotel prices on every trip.",
    category: "travel",
    tags: ["hotel", "senior discount", "AARP", "travel", "savings"],
    readTime: "8 min",
    thumbnailEmoji: "🏨",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "Hotels publish a \"rack rate\" — the most expensive price they will charge for a room — and then offer that same room at a series of lower prices to anyone who knows to ask. The lowest rate at most US hotel chains is reserved for travelers age 60 or 65 and older. The exact age, the exact discount, and the exact name of the program differ by chain, but every major US hotel brand offers something. The AARP rate, available to AARP members aged 50 and up, runs about 5% to 10% off and is offered at Hilton, IHG, Hyatt, Wyndham, and Best Western. The senior rate (no AARP needed) runs 10% to 15% off at most chains.\n\nWhat most older travelers do not realize is that these discounts can be combined with other savings. Free loyalty-program enrollment (Hilton Honors, Marriott Bonvoy, IHG One Rewards) brings free Wi-Fi, late checkout, and a fifth-night-free perk on award stays. Stacking AAA membership with the senior rate often beats either one alone. Booking directly on the hotel's own website (not Expedia or Booking.com) unlocks a \"best rate guarantee\" that pays the difference if a lower rate is found within 24 hours.\n\nThe other half of saving money on hotels is timing. Sunday and Monday nights are typically the cheapest at city hotels (business travelers go home for the weekend on Friday and arrive Tuesday). Friday and Saturday nights are cheapest at resort hotels in business cities. Booking 21 to 60 days in advance hits the lowest rates for most leisure trips, while last-minute bookings (within 7 days of arrival) often find unsold rooms at 30% to 50% off through HotelTonight or the chain's own app.\n\nThis guide walks through the seven steps that bring a $200-a-night hotel down to $130 or less, on average, for any traveler 60 or older. None of the steps require special skills — only a few minutes of phone calls and a willingness to ask for the senior rate at every booking. The phone calls take about 10 minutes total.",
    steps: [
      {
        title: "Join the free loyalty program before booking",
        content: "Every major US hotel chain has a free loyalty program — Hilton Honors, Marriott Bonvoy, IHG One Rewards, World of Hyatt, Wyndham Rewards, Choice Privileges, Best Western Rewards. Enrollment takes 2 minutes on the chain's website and brings instant benefits: free in-room Wi-Fi (often $15/day for non-members), late checkout up to 2 PM, and members-only rates that are 5% to 10% below the public rate. Sign up before booking the first night.",
      },
      {
        title: "Compare third-party sites first to set a baseline price",
        content: "Open Booking.com, Hotels.com, and Google Hotels (google.com/hotels) in three browser tabs. Search the dates and city. Sort by price. Note the lowest \"total\" rate (including taxes and resort fees) at the hotel you want. This is your baseline number — the rate to beat. Do not book here yet; this is research only.",
        warning: "\"Total\" rates on third-party sites sometimes hide the resort fee until the very last screen. Click through to the booking page and confirm the final total before noting the price.",
      },
      {
        title: "Go to the hotel's own website and find the senior rate",
        content: "Open the hotel chain's own website (hilton.com, marriott.com, ihg.com, etc.). Search the same dates. Below the rate display, click \"Special Rates\" or \"More Rates.\" A list appears: AAA, AARP, Senior Discount, Government, Military, Corporate. Click \"AARP\" if you are an AARP member, or \"Senior Discount\" if you are at least 60 or 62 (the age varies by chain — see the fine print). The new rate appears, usually $10 to $30 a night below the standard rate.",
        tip: "The Senior Discount at Best Western starts at age 55. At Wyndham and Choice it is 60. At Hilton, IHG, Marriott, and Hyatt it is 62. AARP rates apply at all of these chains starting at age 50 with a $16-a-year AARP membership.",
      },
      {
        title: "Call the hotel directly and ask for a better rate",
        content: "Find the hotel's direct phone number (not the chain's 800 number — call the hotel itself). Ask: \"What is your best rate for [dates]? Do you have a senior or AARP rate? Is there a lower rate available if I book non-refundable?\" The on-property reservations agent has flexibility the website does not. Older travelers who call directly save an additional 5% to 15% about half the time, especially at independent hotels and smaller chains.",
      },
      {
        title: "Book directly with the chain's best-rate guarantee",
        content: "If a third-party site shows a lower rate than the chain's site, file a Best Rate Guarantee claim. Hilton, Marriott, IHG, Hyatt, and Wyndham all match the lower rate and add a credit (usually $50 or 25% off the matched rate). The claim form is on the chain's website under \"Best Rate Guarantee.\" Submit within 24 hours of booking. The match arrives by email within 1 to 3 business days.",
        warning: "Best-rate guarantees do not apply to opaque sites like Hotwire and Priceline (where the hotel name is hidden until after purchase) or to package deals that bundle the hotel with a flight or rental car. Read the chain's specific rules before booking.",
      },
      {
        title: "Skip parking and Wi-Fi fees you do not need",
        content: "On the booking page, look for optional add-ons: valet parking ($35 to $60 a day), self-parking ($20 to $40 a day), and premium Wi-Fi ($5 to $15 a day). Loyalty members usually get standard Wi-Fi at no extra charge — do not pay for the upgrade unless you stream movies. Self-parking is almost always cheaper than valet, and some hotels have free street parking nearby that the front desk will mention if asked.",
      },
      {
        title: "Confirm the rate at check-in and ask for an upgrade",
        content: "At check-in, the desk agent prints a folio showing the nightly rate. Confirm it matches the rate you booked. Then say: \"Are any complimentary upgrades available?\" Loyalty members at Diamond, Platinum, or Gold tiers get upgrades free about 30% of the time. Asking politely costs nothing and the answer is yes more often than people expect. AARP's travel desk reports that asking at check-in produces a free upgrade for senior travelers about 1 night out of 4.",
      },
    ],
  },
];
