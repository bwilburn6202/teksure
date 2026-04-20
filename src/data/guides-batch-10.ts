// TekSure Guides Batch 10 — Travel, insurance, tax online, pet tech, reading apps, senior apps (April 2026)
import type { Guide } from './guides';

export const guidesBatch10: Guide[] = [
  // ── TRAVEL APPS ─────────────────────────────────────────────────────────────
  {
    slug: 'use-google-flights',
    title: 'How to Use Google Flights to Find Cheap Tickets',
    excerpt: 'Search airfare across dozens of airlines at once and track price drops so you know when to book.',
    category: 'app-guides',
    tags: ['Google Flights', 'travel', 'airfare', 'booking'],
    readTime: '6 min',
    thumbnailEmoji: '✈️',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Google Flights is a free website that shows prices for the same trip across many airlines on one page. It also lets you watch a route over weeks or months so you can see when prices are lowest.

You do not book through Google itself — once you find a good price, Google sends you to the airline or travel site to finish paying.`,
    steps: [
      { title: 'Open Google Flights', content: 'Go to google.com/flights in any web browser. You do not need to sign in to search, but signing in with a Google account lets you save trips.' },
      { title: 'Enter your cities and dates', content: 'Type your departure city in the "Where from?" box and your destination in the "Where to?" box. Pick your travel dates, or tap the date box and choose "Flexible dates" to see a calendar of prices.' },
      { title: 'Sort by price or duration', content: 'After you search, use the filters at the top to hide long layovers, pick preferred airlines, or cap the price. The cheapest results appear first by default.' },
      { title: 'Turn on price tracking', content: 'Pick a flight and toggle on "Track prices." Google will email you when the fare goes up or down so you know whether to book now or wait.' },
      { title: 'Book on the airline site', content: `When you are ready, click "Select flight" and then "Continue." Google will send you to the airline's own website to pay. Booking direct usually makes changes and refunds easier than going through a third party.` },
    ],
  },
  {
    slug: 'use-expedia-bookings',
    title: 'How to Book Travel on Expedia',
    excerpt: 'Book flights, hotels, and rental cars in one place and bundle them to save money on a full trip.',
    category: 'app-guides',
    tags: ['Expedia', 'travel', 'hotels', 'booking'],
    readTime: '6 min',
    thumbnailEmoji: '🌐',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Expedia is a travel website that sells flights, hotels, rental cars, and cruises from many companies on one site. Bundling a flight and hotel together often costs less than booking them separately.

You earn "One Key" points on most bookings that can be used later for discounts on future trips.`,
    steps: [
      { title: 'Create a free Expedia account', content: 'Go to expedia.com and click "Sign in" then "Create a free account." Use an email you check often so you get your booking confirmations.' },
      { title: 'Search for your trip', content: 'On the home page, pick the tab for what you need — Flights, Stays, Cars, or Packages. Fill in your cities, dates, and number of travelers, then click Search.' },
      { title: 'Compare results carefully', content: 'Look at the total price including taxes and fees, not the first number shown. Read the cancellation policy — refundable bookings cost a little more but protect you if plans change.' },
      { title: 'Try a bundle', content: 'Click "Bundle and save" to add a hotel to your flight. Expedia shows you how much you save when you book them together, often $100 or more on a weeklong trip.' },
      { title: 'Pay and save your itinerary', content: 'Enter your payment details and click Complete Booking. Expedia emails a confirmation — save that email and also check your trips in the Expedia app so you can find them at the airport.' },
    ],
  },
  {
    slug: 'use-kayak-travel-search',
    title: 'How to Use Kayak for Travel Searches',
    excerpt: 'Compare flights, hotels, and rental cars from hundreds of sites at once to find the lowest price.',
    category: 'app-guides',
    tags: ['Kayak', 'travel', 'flights', 'comparison'],
    readTime: '5 min',
    thumbnailEmoji: '🔍',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Kayak is a travel search site that checks hundreds of airlines and travel agencies at the same time and shows you the lowest prices. Like Google Flights, it does not sell tickets directly — it sends you to the site that has the best deal.

Kayak also has handy extras like a price forecast that tells you whether to book now or wait.`,
    steps: [
      { title: 'Open Kayak', content: 'Go to kayak.com or open the free Kayak app on your phone. You do not need to sign up to search.' },
      { title: 'Enter your trip details', content: 'Pick Flights, Stays, or Cars. Type your cities and dates, then hit Search. Kayak takes 10 to 20 seconds to check every travel site.' },
      { title: 'Use the filters on the left', content: 'Set a maximum number of stops, preferred airlines, or a price cap. The "Cabin" filter lets you pick economy, premium, or business class.' },
      { title: 'Read the price forecast', content: 'Above the results, Kayak may show a message like "Prices are likely to rise" or "Wait — prices should drop." Use this to decide whether to book today or hold off a week.' },
      { title: 'Click through to book', content: 'Pick a flight and click "View Deal." Kayak sends you to the airline or agency to pay. Take a screenshot of the price first so you can compare once you arrive on the other site.' },
    ],
  },
  {
    slug: 'use-turo-rent-cars',
    title: 'How to Use Turo to Rent a Car from Owners',
    excerpt: 'Rent a car from a local owner — often cheaper than Hertz or Enterprise and with more vehicle choices.',
    category: 'app-guides',
    tags: ['Turo', 'car rental', 'travel', 'sharing'],
    readTime: '7 min',
    thumbnailEmoji: '🚘',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Turo is like Airbnb for cars — regular people list their cars for rent and you book one for a day or a week. Prices are often lower than traditional rental companies and you can pick unusual vehicles like pickup trucks, convertibles, or electric cars.

You pick up the car from the owner (or at some airports) and drop it back when you are done. Turo handles insurance, payments, and support.`,
    steps: [
      { title: 'Sign up and verify your license', content: `Download the Turo app or go to turo.com. Create an account and upload a photo of your driver's license. Turo checks your driving record, which takes a few minutes to a few hours.` },
      { title: 'Search for a car', content: 'Enter the city or airport where you need the car, your pickup date, and drop-off date. Filter by car type, price per day, and pickup location.' },
      { title: `Read the owner's reviews`, content: 'Tap any car to see photos, the daily rate, and reviews from past renters. Stick with owners who have 4.8 stars or higher and at least 20 trips — they are more reliable.' },
      { title: 'Pick a protection plan', content: 'Turo will ask you to choose a protection plan (like rental car insurance). The Premier plan costs more but covers damage with no deductible. Check whether your own car insurance or credit card already covers rentals first.' },
      { title: 'Meet the owner and inspect the car', content: 'At pickup, take photos of all four sides of the car and the dashboard before you drive away. Turo uses these photos if there is a damage dispute later. Return the car on time and with the same gas level to avoid extra fees.' },
    ],
  },
  {
    slug: 'use-rome2rio-trip-planning',
    title: 'How to Use Rome2Rio for Trip Planning',
    excerpt: 'See every way to get from point A to point B — plane, train, bus, ferry, or car — with prices and times.',
    category: 'app-guides',
    tags: ['Rome2Rio', 'travel', 'trains', 'planning'],
    readTime: '5 min',
    thumbnailEmoji: '🗺️',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Rome2Rio is a free site that shows every way to travel between two places — flights, trains, buses, ferries, and driving — side by side with travel time and rough cost. It is especially helpful in Europe or Asia where trains and ferries are common.

It will not book your tickets, but it links out to the airline, train company, or bus line so you can book directly once you pick a route.`,
    steps: [
      { title: 'Open Rome2Rio', content: 'Go to rome2rio.com in any web browser or install the free Rome2Rio app. No sign-up is needed to search.' },
      { title: 'Enter "from" and "to"', content: 'Type any two locations — cities, airports, landmarks, even hotels. Tap Search and Rome2Rio will show every route within seconds.' },
      { title: 'Compare travel options', content: 'Each result shows a travel time and a price range. Tap any row to see details like which train station, how many transfers, and what operators run the route.' },
      { title: 'Check the map view', content: 'Tap the map icon to see your route drawn on a map. This helps when you are comparing a scenic train to a fast flight and want to know what you will see on the way.' },
      { title: 'Follow the booking link', content: 'Once you pick a route, scroll down to find links to the official operators — like Amtrak, Trainline, or FlixBus. Click through to book directly on their site.' },
    ],
  },
  {
    slug: 'use-yelp-finding-restaurants',
    title: 'How to Use Yelp to Find Restaurants',
    excerpt: 'Read real diner reviews, see photos of the food, and make reservations at restaurants near you.',
    category: 'app-guides',
    tags: ['Yelp', 'restaurants', 'reviews', 'local'],
    readTime: '5 min',
    thumbnailEmoji: '🍽️',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Yelp is a free app and website that helps you find restaurants, shops, and services nearby. Other customers post reviews, star ratings, and photos so you know what to expect before you go.

You can also use Yelp to make a reservation, check open hours, or see a menu without calling the restaurant.`,
    steps: [
      { title: 'Download Yelp or open yelp.com', content: `Install the free Yelp app from your phone's app store, or go to yelp.com in a web browser. You can search without an account, but signing up lets you save favorites.` },
      { title: 'Search your area', content: 'Type what you want (like "pizza" or "breakfast") and let Yelp use your location, or type the neighborhood you want to search. Results are sorted by a mix of rating and distance.' },
      { title: 'Read the reviews', content: 'Tap any restaurant to see its star rating, price range ($ to $$$$), photos, and reviews. Skim both recent 5-star and recent 1-star reviews to get a balanced picture.' },
      { title: 'Check hours and menu', content: `Scroll down on the restaurant page to see today's hours, the address with a map, and a link to the menu. Some places even show a wait time estimate during busy hours.` },
      { title: 'Make a reservation', content: 'Many restaurants offer reservations through Yelp. Tap "Find a Table," pick a time and party size, and confirm. You will get a text or email reminder before your meal.' },
    ],
  },
  // ── INSURANCE ONLINE ────────────────────────────────────────────────────────
  {
    slug: 'file-auto-insurance-claim-online',
    title: 'How to File an Auto Insurance Claim Online',
    excerpt: 'Report a car accident or damage through your insurance app or website without waiting on hold.',
    category: 'financial-tech',
    tags: ['insurance', 'auto', 'claim', 'accident'],
    readTime: '7 min',
    thumbnailEmoji: '🚗',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Most car insurance companies now let you file a claim entirely online or through their app, usually within minutes of the accident. You upload photos of the damage, answer a few questions, and a claim adjuster is assigned to your case.

Filing online often moves faster than phoning because you can attach photos and documents right away instead of mailing them in.`,
    steps: [
      { title: 'Make sure everyone is safe first', content: 'Before filing anything, check for injuries and call 911 if anyone is hurt. Move to a safe spot out of traffic if you can, and turn on your hazard lights.' },
      { title: 'Take photos and get information', content: 'Photograph all damage to both cars, the license plates, the scene from several angles, and any road signs. Exchange names, phone numbers, insurance companies, and policy numbers with the other driver.' },
      { title: 'Open your insurance app', content: 'Sign in to the app for your insurance company — like GEICO, State Farm, Progressive, or Allstate. Look for a button labeled "File a claim" or "Report an accident" on the home screen.' },
      { title: 'Answer the claim questions', content: 'The app will ask what happened, when, where, and who was involved. Attach the photos you took. Be factual — describe what happened but do not guess at who was at fault.' },
      { title: `Track the claim's progress`, content: 'Once submitted, you will get a claim number and the name of your adjuster. Check the app every day or two for updates and respond quickly when they ask for more information so the claim moves faster.' },
    ],
  },
  {
    slug: 'file-home-insurance-claim',
    title: 'How to File a Home Insurance Claim Online',
    excerpt: `Report storm damage, theft, or water damage through your insurer's website — with photos and a written description.`,
    category: 'financial-tech',
    tags: ['insurance', 'home', 'claim', 'damage'],
    readTime: '7 min',
    thumbnailEmoji: '🏠',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `If a storm damages your roof, a pipe bursts, or something is stolen, you can file a home insurance claim online in most cases. You will need photos of the damage, a list of what is broken or missing, and your policy number.

Act quickly — most insurers expect a claim within 30 to 60 days of the damage, and earlier is better for getting paid faster.`,
    steps: [
      { title: 'Stop more damage if you can safely', content: 'Cover a broken window with a tarp, turn off the water if a pipe burst, or move undamaged items to a dry area. Keep receipts for any emergency repairs — the insurer usually reimburses those.' },
      { title: 'Photograph everything', content: 'Take wide shots of each damaged room and close-ups of every item. Do not throw anything away before the adjuster sees it, even if it looks destroyed.' },
      { title: 'Find your policy number', content: `Sign in to your insurer's website or app. Your policy number is on your home page, your declarations page, or any recent email from the company.` },
      { title: 'File the claim online', content: 'Click "File a claim" and follow the prompts. You will describe what happened (storm, fire, theft, water), upload your photos, and list damaged items with rough values. A claim number appears when you finish.' },
      { title: 'Meet the adjuster', content: 'Within a few days, an adjuster will call to schedule a visit to your home — or review the damage remotely using a video call. Walk them through everything and share your receipts for emergency work.' },
    ],
  },
  {
    slug: 'submit-health-insurance-claim',
    title: 'How to Submit a Health Insurance Claim',
    excerpt: 'Get reimbursed for out-of-network doctor visits or prescriptions by uploading a claim form online.',
    category: 'health-tech',
    tags: ['insurance', 'health', 'claim', 'reimbursement'],
    readTime: '7 min',
    thumbnailEmoji: '🏥',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Most of the time, your doctor's office bills your health insurance directly and you never see the paperwork. But if you pay out of pocket for an out-of-network visit, a travel illness, or a new prescription, you can submit a claim to get some money back.

Each insurance company has its own claim form — the process is similar everywhere, but the form is on your insurer's website.`,
    steps: [
      { title: 'Keep all receipts and records', content: `Ask the doctor's office for an itemized bill showing the services, date, provider name, and the billing codes (called CPT codes). A generic credit card receipt is not enough.` },
      { title: 'Sign in to your insurance member portal', content: `Go to your insurance company's website — like UnitedHealthcare, Blue Cross Blue Shield, or Cigna — and sign in. Look in the menu for "Claims" or "Submit a claim."` },
      { title: 'Fill out the claim form', content: 'You will enter the patient name, provider name, service date, and the amount you paid. Attach a photo or scan of the itemized bill and your receipt showing payment.' },
      { title: 'Double-check before submitting', content: 'Verify the numbers match your bill. Missing or wrong info is the main reason claims get rejected and have to be refiled.' },
      { title: 'Watch for your Explanation of Benefits', content: 'Within 2 to 4 weeks, the insurer sends an Explanation of Benefits (EOB) showing how much they will pay back. If they deny it, call the number on the EOB and ask why — most denials are fixable.' },
    ],
  },
  {
    slug: 'use-progressive-geico-state-farm-apps',
    title: 'How to Use Your Car Insurance App',
    excerpt: 'Pay your bill, show proof of insurance, request roadside help, and file claims from your phone.',
    category: 'financial-tech',
    tags: ['insurance', 'app', 'GEICO', 'Progressive', 'State Farm'],
    readTime: '5 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Every major car insurance company (GEICO, Progressive, State Farm, Allstate, Liberty Mutual, USAA, and others) has a free app that does most of what the website does. You can pay your premium, show an officer digital proof of insurance, and request a tow.

Setting up the app once saves a lot of time over the years you will be insured.`,
    steps: [
      { title: 'Download the official app', content: `Open the App Store on iPhone or the Play Store on Android and search for your insurance company's name. Download the one with their official logo — watch out for look-alike apps.` },
      { title: 'Sign in with your policy number', content: 'Open the app and tap "Sign in" or "Register." You will need your policy number (on your insurance card or declarations page) and an email address.' },
      { title: 'Save your digital insurance card', content: `Find the "ID card" or "Insurance card" screen. Take a screenshot and save it to your phone's Photos, or use the "Add to Wallet" button on iPhone so you can show it quickly at a traffic stop.` },
      { title: 'Set up automatic payments', content: 'In the Billing or Payments section, add a bank account or debit card and turn on autopay. Most companies give a small discount for automatic payments.' },
      { title: 'Learn the roadside assistance button', content: 'Most apps have a big "Roadside help" button that sends a tow truck to your GPS location. Tap through it once before you need it so you know where it is when you have a flat tire at night.' },
    ],
  },
  {
    slug: 'get-life-insurance-quotes-online',
    title: 'How to Get Life Insurance Quotes Online Safely',
    excerpt: 'Compare term life insurance prices from several companies without giving up your phone number to strangers.',
    category: 'financial-tech',
    tags: ['life insurance', 'quotes', 'comparison', 'finance'],
    readTime: '7 min',
    thumbnailEmoji: '📋',
    publishedAt: '2026-04-17',
    difficulty: 'Intermediate',
    body: `Life insurance quotes online show you how much you would pay per month for a term life policy (usually 10 to 30 years of coverage). Prices vary a lot between companies, so comparing 3 or 4 is worth the time.

Stick to well-known comparison sites and your state's insurance department website. Avoid sites that make you give a phone number before showing any prices — those sell your info to agents who will call for weeks.`,
    steps: [
      { title: 'Decide how much coverage you need', content: 'A common rule is 10 times your yearly income, or enough to pay off your mortgage plus raise any children. Term life (not whole life) is the cheapest option for most people.' },
      { title: 'Use a trusted comparison site', content: 'Try Policygenius, NerdWallet, or Term4Sale. These show prices from multiple insurers side by side and do not require your phone number just to see a quote.' },
      { title: 'Answer honestly about your health', content: 'You will answer questions about your age, weight, smoking, and major health conditions. Lying to get a lower quote can void the policy later — insurers check medical records before they pay claims.' },
      { title: 'Compare at least 3 companies', content: `Note the monthly premium, the term length, and the death benefit. Look at the insurer's financial rating (A.M. Best grade of A or better is safe).` },
      { title: `Apply directly on the insurer's site`, content: `Once you pick a company, click through to the actual insurer's website to apply. Most will require a free medical exam — a nurse comes to your home to take a blood sample and measure your blood pressure.` },
    ],
  },
  // ── TAX ONLINE ──────────────────────────────────────────────────────────────
  {
    slug: 'use-turbotax-online',
    title: 'How to File Taxes with TurboTax Online',
    excerpt: 'Walk through your tax return step by step — import your W-2, answer questions, and e-file to the IRS.',
    category: 'financial-tech',
    tags: ['TurboTax', 'taxes', 'IRS', 'filing'],
    readTime: '9 min',
    thumbnailEmoji: '🧾',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `TurboTax is the most popular tax software in the United States. It asks plain-English questions like "Did you have a job?" and fills in the IRS forms based on your answers.

A simple W-2-only return is free with TurboTax Free Edition. More complex returns (self-employment, investments, rental property) cost $50 to $200.`,
    steps: [
      { title: 'Create a TurboTax account', content: 'Go to turbotax.intuit.com and click "Start for free." Enter an email and create a password. Pick the version that matches your situation — Free Edition for a single W-2, Deluxe for itemized deductions, Premier for investments.' },
      { title: 'Import your W-2', content: `When it asks for your W-2, enter your employer's EIN (on the W-2) and TurboTax can pull the numbers directly. You can also take a photo of the W-2 with the TurboTax app and it will read the numbers for you.` },
      { title: 'Answer the interview questions', content: 'TurboTax asks about kids, student loan interest, medical bills, charity donations, and dozens of other things. Say yes or no — it will only show you the details for items that apply.' },
      { title: 'Review your refund or amount owed', content: 'At the top of the screen, a number shows your refund (in green) or the amount you owe (in red). Review the summary page for any flags or missed deductions before filing.' },
      { title: 'E-file with the IRS', content: `Click "File" and choose direct deposit for your refund (it arrives in 1 to 3 weeks). Pay any TurboTax fees with a card, and e-sign your return using last year's refund amount or your AGI. Print a copy of the final PDF for your records.` },
    ],
  },
  {
    slug: 'use-hr-block-online-taxes',
    title: 'How to File Taxes with H&R Block Online',
    excerpt: 'File your federal and state taxes online with help from a real tax pro if you get stuck.',
    category: 'financial-tech',
    tags: ['H&R Block', 'taxes', 'IRS', 'filing'],
    readTime: '9 min',
    thumbnailEmoji: '💰',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `H&R Block Online is an alternative to TurboTax with a similar step-by-step interview format. Its prices are usually a little cheaper, and their paid tiers include free chat help from a real tax professional.

H&R Block also lets you drop off your documents at a local office if you prefer someone else do the whole return for you.`,
    steps: [
      { title: 'Start at hrblock.com', content: 'Go to hrblock.com and click "File online." Pick the tier that matches your situation — Free for a simple W-2, Deluxe for homeowners, Premium for investors or self-employed.' },
      { title: `Import last year's return`, content: 'If you used TurboTax or a different service last year, H&R Block can import your PDF so you do not have to re-enter your personal info. Upload the PDF when asked.' },
      { title: 'Enter your income', content: 'Upload or photograph your W-2 and any 1099s (for interest, dividends, gig work, or retirement). H&R Block will read the numbers and put them in the right lines.' },
      { title: 'Go through deductions and credits', content: 'H&R Block will ask about mortgage interest, property tax, medical bills, charitable gifts, and education costs. If you are unsure, click "Get help from a tax pro" and a real expert will chat with you.' },
      { title: 'File and pay', content: 'Review your summary, pay any H&R Block fees, then e-file your federal and state returns. H&R Block emails a confirmation within 24 hours that the IRS accepted your return.' },
    ],
  },
  {
    slug: 'use-freetaxusa-online',
    title: 'How to File Free Taxes with FreeTaxUSA',
    excerpt: 'File your federal return for free and your state return for about $15 — no upsells or gotchas.',
    category: 'financial-tech',
    tags: ['FreeTaxUSA', 'taxes', 'free', 'IRS'],
    readTime: '8 min',
    thumbnailEmoji: '🆓',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `FreeTaxUSA is a lesser-known tax service that is free for federal returns no matter how complex your tax situation is, including self-employment, rental property, and investments. State returns cost about $15.

The site looks plainer than TurboTax or H&R Block, but the tax math is just as accurate and it is an IRS-authorized e-file provider.`,
    steps: [
      { title: 'Create a free account', content: 'Go to freetaxusa.com and click "Sign In" then "Create a new account." Use an email you check and set a strong password.' },
      { title: 'Enter your personal info', content: 'Type your name, Social Security number, address, and filing status (single, married filing jointly, head of household). If you have dependents, add their info too.' },
      { title: 'Add your income', content: 'Click through each income section — W-2, 1099, self-employment, investments — and type in the numbers from your forms. There is no photo import like TurboTax, so double-check each box.' },
      { title: 'Claim your deductions and credits', content: 'FreeTaxUSA walks you through the standard deduction versus itemizing, then common credits like the Earned Income Credit or Child Tax Credit. Answer yes or no to each prompt.' },
      { title: 'E-file and save your return', content: 'Review the summary, pay for the state filing (if you need one) with a card, and e-file. Download a PDF copy of your final return and save it in a folder you will remember next tax season.' },
    ],
  },
  {
    slug: 'irs-transcript-online',
    title: 'How to Get Your IRS Tax Transcript Online',
    excerpt: 'Download a record of past tax returns for a mortgage application, student aid form, or your own records.',
    category: 'government-civic',
    tags: ['IRS', 'transcript', 'taxes', 'government'],
    readTime: '6 min',
    thumbnailEmoji: '📄',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `An IRS tax transcript is an official summary of your past tax return. Lenders often ask for one when you apply for a mortgage, and the FAFSA financial aid form asks for one too.

You can get a transcript free at IRS.gov in about 15 minutes — no need to request it by mail or pay a service.`,
    steps: [
      { title: 'Go to the IRS website', content: 'Open a web browser and go to irs.gov/transcript. Click "Get Transcript Online." Make sure the web address is exactly irs.gov — scammers often run look-alike sites.' },
      { title: 'Create or sign in to ID.me', content: `The IRS uses a service called ID.me to verify your identity. You will upload a photo of your driver's license and take a selfie so ID.me can match them.` },
      { title: 'Pick the transcript you need', content: 'Once signed in, you will see several transcript types. For most lenders, pick "Return Transcript" and then the tax year they asked about. For income questions, pick "Wage and Income Transcript."' },
      { title: 'Download the PDF', content: 'The transcript opens as a PDF in your browser. Save it to your computer and either print it or email it to whoever asked for it.' },
      { title: 'Know the alternatives', content: 'If online verification does not work, you can request a transcript by mail at irs.gov/transcript — it arrives in 5 to 10 days. You can also call 800-908-9946 for a mailed transcript.' },
    ],
  },
  // ── PET TECH ────────────────────────────────────────────────────────────────
  {
    slug: 'use-apple-airtag-pet',
    title: 'How to Use an Apple AirTag on Your Pet (Safely)',
    excerpt: `Attach an AirTag to your dog or cat's collar as a backup if they ever wander off — with some safety caveats.`,
    category: 'smart-home',
    tags: ['AirTag', 'pet', 'tracker', 'Apple'],
    readTime: '7 min',
    thumbnailEmoji: '🐕',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `An Apple AirTag is a small button-shaped tracker that pairs with your iPhone. Many pet owners clip one to their dog or cat's collar so they can find them if they wander off, using the Find My app on any iPhone.

AirTags are not designed for pets — they do not have real-time GPS like a dedicated pet tracker (see Fi or Tractive). But they work well as an inexpensive backup in areas with lots of iPhones nearby.`,
    steps: [
      { title: 'Buy an AirTag and a pet-safe holder', content: 'AirTags cost about $29 each at any Apple store or Amazon. Buy a dedicated AirTag pet collar holder (about $10) — the standard keychain holder is not designed to survive a dog shaking or chewing.' },
      { title: 'Pair the AirTag with your iPhone', content: `Pull the plastic tab on the AirTag to start it. Hold it near your iPhone. A pop-up asks you to name it — pick something like "Buddy's Collar" — and tap Continue.` },
      { title: 'Attach it securely to the collar', content: 'Slide the AirTag into the pet-safe holder and attach the holder to the collar. Give it a tug to make sure it will not fall off when your pet runs or scratches.' },
      { title: 'Find your pet in the Find My app', content: `Open the Find My app on your iPhone and tap the Items tab. You will see your pet's name with its last-known location on a map. Tap "Play Sound" to make the AirTag beep if you are nearby.` },
      { title: 'Know the limits', content: 'AirTags need other iPhones nearby to update their location, so they are less helpful in rural areas. For outdoor cats or dogs that roam, a dedicated GPS collar like Fi or Tractive works better because it uses cell networks.' },
    ],
  },
  {
    slug: 'use-fi-dog-collar',
    title: 'How to Use the Fi GPS Dog Collar',
    excerpt: `Track your dog's location in real time, count steps, and get alerts if they escape the yard.`,
    category: 'smart-home',
    tags: ['Fi', 'GPS', 'dog', 'collar'],
    readTime: '7 min',
    thumbnailEmoji: '🦮',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Fi is a smart collar for dogs that uses GPS and cellular data to show their exact location at all times. Unlike an AirTag, Fi works even in rural areas because it does not depend on other phones being nearby.

The collar costs about $150 and needs a monthly plan (around $20) to get the cellular connection. In return you get live tracking, activity counts, and escape alerts.`,
    steps: [
      { title: 'Order the right size', content: `Go to tryfi.com and measure your dog's neck with a soft tape measure. Pick the size that fits with two fingers of room between the collar and the dog's neck.` },
      { title: 'Charge and activate', content: 'Charge the Fi collar overnight with the included dock. Download the Fi app from the App Store or Play Store, create an account, and scan the QR code on the collar to activate it.' },
      { title: 'Set up your home base', content: 'In the app, tap "Set up Home." This tells Fi where your house is. Fi uses Wi-Fi to know when your dog is safely home, which saves battery instead of using GPS.' },
      { title: 'Put it on and test it', content: 'Attach the Fi module to any standard collar with the included slot, or use the Fi Series 3 Collar itself. Walk outside the house — the app should show your dog marked as "Away from Home" within 2 minutes.' },
      { title: 'Turn on escape alerts', content: 'In Settings, turn on "Lost Dog Mode" alerts. If your dog leaves the home area without you, Fi sends a push notification. You can then open the app to see a live map of where your dog is heading.' },
    ],
  },
  {
    slug: 'use-chewy-autoship',
    title: 'How to Set Up Chewy Autoship for Pet Food',
    excerpt: 'Schedule automatic pet food deliveries every 2 to 12 weeks and save 35% on your first order plus 5% after.',
    category: 'app-guides',
    tags: ['Chewy', 'pet food', 'Autoship', 'subscription'],
    readTime: '5 min',
    thumbnailEmoji: '🐾',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Chewy Autoship is a free program that automatically reorders your pet's food, litter, or medications on a schedule you pick. Boxes arrive every 2, 4, 6, 8, or 12 weeks — whatever matches how fast you use them.

You save 5% on every order (35% on your first one), you can skip or reschedule any delivery, and shipping is free over $49.`,
    steps: [
      { title: 'Create a Chewy account', content: 'Go to chewy.com or download the free Chewy app. Click "Sign in" then "Create an account." Enter your email, address, and payment card.' },
      { title: `Pick your pet's food or supplies`, content: 'Search for the brand and bag size you already feed. On the product page, look for the blue "Autoship & Save" button with the lower price next to it.' },
      { title: 'Choose a delivery schedule', content: 'Pick how often you want the delivery. A 30-pound bag for a medium dog usually lasts 4 to 6 weeks, while cat litter often runs out every 2 weeks.' },
      { title: 'Confirm and review', content: 'Add other pet items (toys, treats, medications) to the same Autoship so they all ship together. Click "Place order" to start.' },
      { title: 'Manage your schedule anytime', content: 'In the Chewy app, tap "Account" then "Autoship." You can skip the next delivery, change the date, swap products, or cancel without any fee. Chewy emails you 3 days before each shipment so you can adjust.' },
    ],
  },
  {
    slug: 'use-rover-pet-sitter',
    title: 'How to Book a Pet Sitter on Rover',
    excerpt: 'Find and book a local dog walker, boarding sitter, or drop-in visitor for your pet while you are away.',
    category: 'app-guides',
    tags: ['Rover', 'pet sitter', 'dog walker', 'boarding'],
    readTime: '7 min',
    thumbnailEmoji: '🐱',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Rover is a website and app that connects pet owners with sitters, walkers, and boarding hosts in their area. You pick the type of care you need, message sitters, and book through the app — all payments are handled by Rover.

Every booking comes with the Rover Guarantee, which covers vet bills up to $25,000 if something goes wrong.`,
    steps: [
      { title: `Sign up and add your pet's profile`, content: 'Download the Rover app or go to rover.com. Create an account and add your pet — breed, age, size, and special notes like "afraid of thunderstorms" or "needs insulin twice a day."' },
      { title: 'Pick the service you need', content: `Choose from Boarding (sitter's home overnight), House Sitting (sitter stays at your home), Drop-In Visits (30 minutes at your home), Doggy Day Care, or Dog Walking.` },
      { title: 'Search and compare sitters', content: 'Enter your dates and your zip code. Filter by price, experience, and rating. Read reviews carefully — sitters with 50+ stays and 4.9 stars or higher are the safest bet.' },
      { title: 'Do a free meet and greet', content: 'Before booking, message your top 2 sitters and schedule a 15-minute meet-and-greet at your home. This lets you see how they interact with your pet and ask questions.' },
      { title: 'Book and stay in touch', content: 'Once you pick a sitter, tap "Book" and pay through the app. During the stay, ask for photo updates — most sitters send 2 to 3 photos a day. Leave a review afterward to help other owners.' },
    ],
  },
  // ── READING APPS ────────────────────────────────────────────────────────────
  {
    slug: 'use-libby-library-audiobooks',
    title: 'How to Borrow Free Audiobooks with Libby',
    excerpt: 'Listen to thousands of audiobooks and read e-books for free with your public library card.',
    category: 'app-guides',
    tags: ['Libby', 'audiobooks', 'library', 'free'],
    readTime: '6 min',
    thumbnailEmoji: '🎧',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Libby is a free app from your public library that lets you borrow audiobooks, e-books, and magazines using only your library card. Books return themselves automatically, so there are no late fees.

Most U.S. public libraries have Libby. If there is a waitlist for a popular title, it is the same as the physical library — you get in line.`,
    steps: [
      { title: 'Download Libby', content: 'Install the free Libby app from the App Store (iPhone) or Play Store (Android). You can also use libbyapp.com in a web browser on a computer.' },
      { title: 'Add your library card', content: 'Tap "Yes" when Libby asks if you have a library card. Pick your library from the list or search by your zip code. Enter your card number and PIN — the same ones you use at the library.' },
      { title: 'Browse and borrow', content: 'Tap the library icon at the bottom to see available titles. The search bar and "Explore" section help you find new books. Tap any title and then "Borrow" to check it out for 2 to 3 weeks.' },
      { title: 'Send to Kindle or listen in Libby', content: 'For e-books, you can choose "Read with Kindle" to send the book to your Kindle app or device. For audiobooks, tap "Open in Libby" to start listening right in the app.' },
      { title: 'Return early or renew', content: 'Tap the shelf icon to see your loans. Tap any book then "Manage loan" to return it early (freeing it up for someone else) or renew it if nobody is waiting.' },
    ],
  },
  {
    slug: 'use-hoopla-free-library-media',
    title: 'How to Use Hoopla for Free Library Movies and Books',
    excerpt: 'Stream movies, TV shows, audiobooks, music, and comics for free with your library card — no waitlists.',
    category: 'app-guides',
    tags: ['Hoopla', 'library', 'free', 'streaming'],
    readTime: '6 min',
    thumbnailEmoji: '📚',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Hoopla is a free app available through many public libraries. Unlike Libby, there are no waitlists — you can borrow any title immediately, up to a monthly limit set by your library (often 5 to 10 items).

It has more than just books: you can watch movies, TV shows, listen to music, and read comics.`,
    steps: [
      { title: 'Check if your library offers Hoopla', content: `Go to hoopladigital.com and type your library's name. Not every library participates — if yours does not, your card will not work.` },
      { title: 'Download the app', content: 'Install Hoopla from the App Store, Play Store, Roku, Fire TV, or Apple TV. Hoopla works on almost every device you already own.' },
      { title: 'Sign in with your library card', content: 'Open Hoopla, tap "Sign up," and enter your library card number and PIN. You will also create a Hoopla account with an email and password.' },
      { title: 'Borrow and stream', content: 'Browse movies, TV, music, e-books, audiobooks, or comics. Tap "Borrow" on any item to start watching, listening, or reading right away — no waitlist, no late fees.' },
      { title: 'Watch your monthly limit', content: 'Most libraries give you 5 to 10 borrows per month, and the count resets on the first of each month. Borrows return themselves after 3 to 21 days depending on the type, so you never pay fees.' },
    ],
  },
  {
    slug: 'use-kindle-unlimited',
    title: 'How to Use Kindle Unlimited',
    excerpt: 'Read as many books as you want each month for one flat fee — like Netflix but for e-books.',
    category: 'app-guides',
    tags: ['Kindle', 'e-books', 'Amazon', 'subscription'],
    readTime: '5 min',
    thumbnailEmoji: '📘',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Kindle Unlimited is Amazon's $12/month all-you-can-read e-book service. You can borrow up to 20 books at a time from a catalog of around 4 million titles and switch them out as often as you like.

Not every book is included — bestsellers often are not. But there is plenty to read in almost every genre.`,
    steps: [
      { title: 'Start a free trial', content: 'Go to amazon.com/kindleunlimited and click "Join Kindle Unlimited." New customers get a 30-day free trial. Pay with whatever card is on your Amazon account.' },
      { title: 'Find eligible books', content: 'When you search for a book on Amazon, look for the blue "Kindle Unlimited" logo under the price. Those books are free to borrow with your subscription.' },
      { title: 'Borrow and read', content: 'Click "Read for Free" on any Kindle Unlimited book. It sends the book to your Kindle, your Kindle app on a phone or tablet, or the Kindle Cloud Reader website.' },
      { title: 'Return books you are done with', content: 'You can borrow up to 20 books at once. To free up a slot, go to amazon.com/mycd, find the book, and click "Return this book." You can re-borrow it later if you want to finish.' },
      { title: 'Cancel anytime', content: 'Go to amazon.com/kindleunlimited and click "Manage membership." You can pause for 1 to 3 months or cancel entirely. If you cancel, borrowed books disappear from your Kindle but your own purchases stay.' },
    ],
  },
  // ── COMMUNITY & FRIENDS APPS ────────────────────────────────────────────────
  {
    slug: 'use-nextdoor-neighborhood',
    title: 'How to Use Nextdoor to Meet Neighbors',
    excerpt: 'Join a private social network for your neighborhood to find recommendations, lost pets, and local events.',
    category: 'social-media',
    tags: ['Nextdoor', 'neighborhood', 'community', 'local'],
    readTime: '6 min',
    thumbnailEmoji: '🏘️',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Nextdoor is a free social network that shows you posts only from people who live near you — usually within a few blocks. You can ask for contractor recommendations, share lost-pet alerts, or find out about a local yard sale.

Every user has to verify their address, so posts feel more local and trustworthy than Facebook groups.`,
    steps: [
      { title: 'Sign up with your real address', content: 'Download the Nextdoor app or go to nextdoor.com. Enter your home address — Nextdoor will verify it by sending a postcard in the mail or using a phone number or credit card on file.' },
      { title: 'Build a profile', content: 'Add your real first name and last initial, a photo, and a short bio. Neighbors are more likely to trust your posts and replies when they can see who you are.' },
      { title: 'Read the local feed', content: 'The Home tab shows posts from people within a mile or two. Common posts include "Who is a good plumber?" "Did anyone hear that noise?" and "Found dog on Oak Street."' },
      { title: 'Post a question or update', content: 'Tap the pencil or "Post" button. Pick a category (Recommendations, Lost & Found, For Sale, Safety). Keep it short and friendly — this is a small community.' },
      { title: 'Stay civil', content: 'Nextdoor is known for heated arguments about parking and politics. Stick to helpful posts, mute users you do not get along with, and report anything that feels like harassment or a scam.' },
    ],
  },
  {
    slug: 'use-meetup-finding-groups',
    title: 'How to Use Meetup to Find Local Groups',
    excerpt: 'Join in-person groups for hiking, book clubs, board games, language practice, or any hobby — for free.',
    category: 'social-media',
    tags: ['Meetup', 'groups', 'hobbies', 'social'],
    readTime: '5 min',
    thumbnailEmoji: '👥',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Meetup is a website where people organize in-person gatherings around shared interests — hiking, knitting, tech, foreign languages, pickleball, book clubs, and hundreds of other topics.

It is free to join groups as a member. Some events are free, some charge a small fee to cover things like a room rental or a restaurant minimum.`,
    steps: [
      { title: 'Sign up at meetup.com', content: 'Go to meetup.com or download the Meetup app. Create a free account with your email, name, and a photo. Enter your city so Meetup knows where to search.' },
      { title: 'Search for a topic', content: 'Type a hobby or interest in the search bar — "hiking," "Spanish," "photography," "running." Meetup shows all the groups nearby that match.' },
      { title: 'Join a group', content: 'Pick a group and click Join. You will see a list of upcoming events. Some groups ask a few questions first (like "Are you a beginner or experienced?") — answer honestly.' },
      { title: 'RSVP to an event', content: 'Tap any event to see the date, location, and attendee list. Click "Attend" or "RSVP" to save your spot. Most groups expect you to cancel if you cannot make it.' },
      { title: 'Show up and be friendly', content: 'Arrive a few minutes early. The organizer usually has a sign or is waiting at the entrance. Introduce yourself and mention it is your first time — most groups are welcoming to newcomers.' },
    ],
  },
  {
    slug: 'use-bumble-bff-friends',
    title: 'How to Make Friends with Bumble BFF',
    excerpt: 'Use the friendship side of Bumble to meet new people near you who share your interests.',
    category: 'social-media',
    tags: ['Bumble', 'BFF', 'friends', 'social'],
    readTime: '6 min',
    thumbnailEmoji: '👋',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Bumble BFF is a mode inside the free Bumble app that is for making friends, not dating. You swipe through other people looking for friends, match, and chat — same format as dating apps, but nobody is looking for romance.

It is especially popular after a move to a new city or after life changes like retirement or a divorce when old friend circles shift.`,
    steps: [
      { title: 'Download Bumble', content: 'Install the free Bumble app from the App Store or Play Store. Sign up with your phone number and create a basic profile with 3 to 6 photos and a short bio.' },
      { title: 'Switch to BFF mode', content: 'On the home screen, tap the mode button at the top — it might say "Date" by default. Switch it to "BFF." Your profile now only shows to people looking for friends.' },
      { title: 'Write a friendly bio', content: 'Describe what you are looking for ("new-in-town hiking buddies," "book club friends," "coffee and board games"). List 3 hobbies. Avoid anything that sounds romantic since this is friend-only.' },
      { title: 'Swipe and match', content: 'Swipe right on people whose profiles sound like a good match. If they swipe right on you too, it is a match and you can message each other.' },
      { title: 'Meet up for coffee', content: 'After a few back-and-forth messages, suggest a low-pressure first meet — coffee, a dog park, or a yoga class. Meet in a public place and tell someone where you are going, same as any first meeting with someone online.' },
    ],
  },
  {
    slug: 'join-facebook-groups-safely',
    title: 'How to Join and Use Facebook Groups Safely',
    excerpt: 'Find groups for your hobbies, neighborhood, or health conditions — while avoiding scams and fake accounts.',
    category: 'social-media',
    tags: ['Facebook', 'groups', 'community', 'safety'],
    readTime: '6 min',
    thumbnailEmoji: '💬',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Facebook Groups are private or public communities about almost any topic — gardening, specific medical conditions, your high school reunion, or neighborhood buy-sell-trade groups.

Most groups are great for getting advice and meeting like-minded people, but scammers and fake accounts do show up. Knowing how to spot them keeps you safe.`,
    steps: [
      { title: 'Search for groups on Facebook', content: 'On Facebook, click the menu icon then "Groups," or type what you are looking for in the search bar and click "Groups" on the results page. Look at member counts — well-run groups usually have hundreds to thousands of active members.' },
      { title: 'Read the rules and description', content: 'Every group has a description and rules posted at the top. Read them before joining — some groups require answering screening questions about why you want to join.' },
      { title: 'Request to join', content: 'Click "Join Group." Many private groups have admins who review every request and might take a few days to approve. Public groups let you join instantly.' },
      { title: 'Watch for scams', content: 'Never buy anything from a stranger in a group who asks to use Zelle or Venmo "friends and family." Ignore messages from members claiming you won a prize. Report anyone who private-messages you asking for money or personal info.' },
      { title: 'Leave if it turns toxic', content: 'Click the three-dot menu on the group page and choose "Leave group." You can also mute the group to stop notifications without leaving. Your mental health matters more than staying in a group full of arguments.' },
    ],
  },
  // ── SENIOR-SPECIFIC APPS ────────────────────────────────────────────────────
  {
    slug: 'use-grandpad-tablet',
    title: 'How to Set Up a GrandPad Tablet',
    excerpt: 'Use a tablet designed for seniors — large buttons, big text, simple apps, and live phone support.',
    category: 'phone-guides',
    tags: ['GrandPad', 'tablet', 'senior', 'simple'],
    readTime: '7 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `A GrandPad is a tablet built for older adults who want to video-call family, check email, and see photos without learning how a general-purpose iPad works. It has big buttons, no confusing menus, and a 4G cellular connection included so no Wi-Fi is needed.

Subscriptions cost around $80 a month. That covers the tablet, unlimited data, and 24/7 phone support when something goes wrong.`,
    steps: [
      { title: 'Order the GrandPad', content: 'Go to grandpad.net or call 800-704-9412. Pick a subscription and the color. A family member is usually set as the "Care Circle Leader" — they get admin access through their own free app.' },
      { title: 'Turn it on and sign in', content: 'GrandPads arrive already set up. Press the power button on top. The tablet walks the user through a quick tutorial — how to tap a button and scroll a list.' },
      { title: 'Add family members', content: 'The Care Circle Leader opens the Companion App on their phone and invites other family members by email. Only Care Circle members can call, message, or share photos with the GrandPad.' },
      { title: 'Make a video call', content: 'On the GrandPad, tap Video Chat. All Care Circle members appear as big buttons with their photo. Tap any person to ring their phone or computer.' },
      { title: 'Share photos from anywhere', content: 'In the Companion App, a family member taps "Share Photos" and picks any photos from their phone. The photos appear immediately on the GrandPad under "Photos." This is the most-loved feature for grandparents.' },
    ],
  },
  {
    slug: 'use-papa-companionship-app',
    title: 'How to Use Papa for Senior Companionship',
    excerpt: 'Book a "Papa Pal" for in-person help with errands, tech support, light housekeeping, or just company.',
    category: 'health-tech',
    tags: ['Papa', 'senior', 'companionship', 'caregiver'],
    readTime: '7 min',
    thumbnailEmoji: '🤝',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Papa is a service that sends a friendly, vetted helper ("Papa Pal") to an older adult's home to run errands, do light chores, help with technology, or keep them company. Many Medicare Advantage plans cover Papa visits at no cost to the member.

The Papa Pals are not medical professionals — think of them more like a helpful grandchild who shows up when you ask.`,
    steps: [
      { title: 'Check if your plan covers Papa', content: 'Call the number on the back of your Medicare Advantage card and ask "Does my plan include Papa visits?" Many Humana, UnitedHealthcare, and Aetna plans do. If not, Papa also offers private-pay memberships.' },
      { title: 'Download the Papa app', content: 'Install Papa from the App Store or Play Store, or call Papa at 1-800-348-7951 to sign up by phone. Family members can also download the Care Circle app to schedule visits for a parent.' },
      { title: 'Schedule your first visit', content: 'Tap "Request a visit." Pick a date, time, and what you need help with — grocery shopping, a ride to the doctor, changing light bulbs, or just having a conversation.' },
      { title: 'Meet your Papa Pal', content: 'Every Papa Pal has a background check and orientation. Before the visit, you see their photo and a short bio. At the door, they will show you their Papa ID before coming in.' },
      { title: 'Rate the visit afterward', content: 'The app asks you to rate the visit from 1 to 5 stars. If you like a particular Pal, request them again next time — Papa will try to match you.' },
    ],
  },
  {
    slug: 'use-aarp-now-app',
    title: 'How to Use the AARP Now App',
    excerpt: 'Stay on top of member benefits, discounts, and news made for people 50 and over.',
    category: 'app-guides',
    tags: ['AARP', 'senior', 'discounts', 'news'],
    readTime: '5 min',
    thumbnailEmoji: '🎯',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `The AARP Now app is the official app for AARP members. It shows your digital membership card, news stories written for people 50+, and a searchable list of the 1,000+ discounts AARP has negotiated with restaurants, hotels, and retailers.

Membership costs about $16 a year and often pays for itself with a few restaurant or hotel discounts.`,
    steps: [
      { title: 'Install the app', content: 'Download AARP Now from the App Store or Play Store. If you are not a member yet, you can join right in the app for $16/year or at aarp.org.' },
      { title: 'Sign in', content: 'Open the app and tap "Sign in." Use the email and password from your AARP account, or the membership number printed on your AARP card.' },
      { title: 'Show your digital card', content: 'Tap "Membership" at the bottom. Your digital AARP card appears with your name and member number. Cashiers at restaurants and hotels can scan or type in this number — no need for the physical card.' },
      { title: 'Browse discounts', content: `Tap "Benefits" to see categories like Travel, Restaurants, Insurance, Technology, and Groceries. Each listing shows the discount (like "10% off at Denny's") and how to claim it.` },
      { title: 'Read articles and event listings', content: 'The "News" tab has daily articles on health, money, and technology written in plain English. The "Events" tab lists free local events like tax help, scam seminars, and volunteer opportunities.' },
    ],
  },
  {
    slug: 'use-silvur-retirement-planning',
    title: 'How to Use Silvur for Retirement Planning',
    excerpt: 'A retirement app made for people 50+ that shows your Social Security, Medicare, and savings in one place.',
    category: 'financial-tech',
    tags: ['Silvur', 'retirement', 'planning', 'finance'],
    readTime: '7 min',
    thumbnailEmoji: '🏖️',
    publishedAt: '2026-04-17',
    difficulty: 'Intermediate',
    body: `Silvur is a retirement planning app built for people close to or already in retirement. It connects to your Social Security, 401(k), IRA, and bank accounts to show a clear picture of your monthly retirement income and how long it will last.

Unlike general finance apps, Silvur focuses on retirement-specific questions like "Should I claim Social Security at 62 or wait until 67?"`,
    steps: [
      { title: 'Download Silvur', content: 'Install the Silvur app from the App Store or Play Store. Create an account with your email and a password. Basic features are free; premium tools cost about $10/month.' },
      { title: 'Enter your retirement age goal', content: 'Silvur will ask when you plan to retire and what your expected monthly expenses are. It is fine to estimate — you can adjust this later.' },
      { title: 'Link your accounts', content: 'Silvur uses Plaid (a secure bank-connection service) to pull balances from your 401(k), IRA, and bank accounts. This is read-only — Silvur cannot move or withdraw money.' },
      { title: 'Run the Retirement Score', content: 'Tap "Retirement Score" to see a single number from 0 to 100 showing how ready you are. Below that, Silvur shows a year-by-year projection of income and spending.' },
      { title: 'Try the Social Security optimizer', content: 'Tap "Social Security" to see how much more you could collect over a lifetime by waiting to claim. For most people, waiting until 67 or 70 gives a much larger lifetime total — Silvur calculates the exact number for your situation.' },
    ],
  },
  // ── KITCHEN SMART APPLIANCES ────────────────────────────────────────────────
  {
    slug: 'use-instant-pot-app',
    title: 'How to Use the Instant Pot App and Recipes',
    excerpt: 'Find thousands of Instant Pot recipes with step-by-step cook times and connect newer models to your phone.',
    category: 'smart-home',
    tags: ['Instant Pot', 'recipes', 'cooking', 'app'],
    readTime: '5 min',
    thumbnailEmoji: '🍲',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `The free Instant Pot app gives you thousands of tested recipes made for the Instant Pot pressure cooker, with cook times and pressure settings already calculated. Newer "Smart" Instant Pot models can connect over Bluetooth so the app starts the cooker for you.

Even if you have an older Instant Pot, the recipes alone are worth downloading the app.`,
    steps: [
      { title: 'Download the Instant Pot app', content: 'Install the free Instant Brands Connect app (the newer version) or the older Instant Pot app from the App Store or Play Store. Create an account with your email.' },
      { title: 'Search for recipes', content: 'Type any main ingredient ("chicken," "rice," "chili") and the app shows tested recipes with cook times, ingredient lists, and photos. Each recipe says which size Instant Pot it works for.' },
      { title: 'Save favorites', content: 'Tap the heart on any recipe to save it. Your saved list becomes your personal cookbook that you can pull up anytime, even offline.' },
      { title: 'Connect a Smart model', content: 'If your Instant Pot is a Smart model (Pro Plus or Duo Crisp with Wi-Fi), tap "Add Device" in the app. Hold your phone near the cooker and follow the pairing instructions to link it.' },
      { title: 'Start a cook from the app', content: 'With a connected cooker, pick a recipe and tap "Send to cooker." The Instant Pot sets the time and pressure automatically — you still have to add the ingredients and press Start on the cooker itself.' },
    ],
  },
  {
    slug: 'use-air-fryer-app-cosori',
    title: 'How to Use Your Smart Air Fryer App',
    excerpt: 'Get recipes, start cooks remotely, and watch the timer from your phone with Cosori, Ninja, or Instant Vortex apps.',
    category: 'smart-home',
    tags: ['air fryer', 'Cosori', 'Ninja', 'smart appliance'],
    readTime: '5 min',
    thumbnailEmoji: '🍟',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Most newer air fryers — especially Cosori, Ninja, and Instant Vortex — come with a free app that has hundreds of air fryer recipes with exact times and temperatures. Smart Wi-Fi models can also be started and stopped from your phone.

Even without Wi-Fi, the recipe library alone helps you figure out how long to cook anything from frozen fries to chicken thighs.`,
    steps: [
      { title: `Find your brand's app`, content: 'Check the air fryer manual or search your brand name in the App Store or Play Store — Cosori has "VeSync," Ninja has "Ninja Kitchen," Instant has "Instant Brands Connect." Download the official one.' },
      { title: 'Create an account', content: 'Open the app and sign up with your email. Creating an account syncs your favorite recipes across your phone and tablet.' },
      { title: 'Browse recipes by category', content: 'Tap "Recipes" and filter by category (chicken, vegetables, frozen foods, desserts). Each recipe includes the exact temperature, time, and whether to shake or flip partway through.' },
      { title: 'Pair a smart model', content: 'If your air fryer has Wi-Fi, tap "Add Device" in the app. Connect your phone to your home Wi-Fi on the 2.4 GHz network (most smart appliances do not work on 5 GHz).' },
      { title: 'Start and monitor from the app', content: 'With a paired fryer, pick a recipe and tap "Start." The app sends the time and temp to the air fryer. A push notification alerts you when your food is done.' },
    ],
  },
  {
    slug: 'use-keurig-app-coffee',
    title: 'How to Use Smart Coffee Maker Apps',
    excerpt: 'Brew a cup from your phone before you get out of bed with Keurig K-Supreme Plus Smart or Nespresso apps.',
    category: 'smart-home',
    tags: ['Keurig', 'Nespresso', 'coffee', 'smart home'],
    readTime: '5 min',
    thumbnailEmoji: '☕',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Some newer coffee makers — like the Keurig K-Supreme Plus Smart and several Nespresso machines — can connect to your Wi-Fi and let you start a brew from your phone. The apps also remember your favorite cup size and strength for each K-Cup brand.

This only works if the coffee maker has Wi-Fi built in. Older Keurigs do not connect to any app.`,
    steps: [
      { title: 'Confirm your coffee maker is smart', content: 'Check the model name on the front of the machine and in the manual. Look for "Smart" in the name or a Wi-Fi symbol on the top panel. If not, these steps will not apply to your machine.' },
      { title: `Download the brand's app`, content: 'Install Keurig from the App Store or Play Store (for Keurig K-Supreme Plus Smart), or Nespresso from the App Store or Play Store for Nespresso machines.' },
      { title: 'Pair the coffee maker', content: 'Plug in the coffee maker. Open the app and tap "Add Device." Follow the on-screen prompts — you will press a button on the machine to put it in pairing mode, then select your Wi-Fi network.' },
      { title: 'Customize your favorites', content: 'In the app, pick your regular K-Cup or Nespresso pod and set your preferred cup size, brew temperature, and strength. The machine remembers these settings for next time.' },
      { title: 'Brew from bed', content: 'Put a fresh pod in and a mug under the spout the night before. In the morning, tap "Brew" in the app. Your coffee will be ready by the time you get to the kitchen.' },
    ],
  },
  // ── HOME MAINTENANCE APPS ───────────────────────────────────────────────────
  {
    slug: 'use-taskrabbit-home-help',
    title: 'How to Use TaskRabbit for Home Help',
    excerpt: 'Hire a local helper ("Tasker") for furniture assembly, moving, cleaning, or small repairs — billed by the hour.',
    category: 'app-guides',
    tags: ['TaskRabbit', 'handyman', 'help', 'home'],
    readTime: '6 min',
    thumbnailEmoji: '🔧',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `TaskRabbit is an app that connects you with background-checked helpers (called Taskers) who come to your home for short jobs — assembling IKEA furniture, hanging pictures, light moving, basic cleaning, or running errands.

You see the Tasker's hourly rate and reviews before you book. Payments are handled through the app so you never pay cash directly.`,
    steps: [
      { title: 'Download TaskRabbit', content: 'Install the free TaskRabbit app from the App Store or Play Store, or go to taskrabbit.com. Sign up with your email and add a payment card.' },
      { title: 'Pick a task category', content: 'Tap "New task" and pick the category — Furniture Assembly, Moving Help, Handyman, Cleaning, Yard Work, or General Help. Each category has different hourly rates.' },
      { title: 'Describe your job', content: 'Write what needs to be done in plain language. Add how many hours you think it will take (most Taskers have a 1-hour minimum). Attach a photo of the item or the space.' },
      { title: 'Pick a Tasker', content: 'The app shows nearby Taskers with their hourly rate, reviews, and completed jobs. Stick with Taskers who have 4.8 stars or higher and at least 50 completed jobs for reliability.' },
      { title: 'Meet, review, and tip', content: 'The Tasker arrives at your chosen time. Pay through the app when the job is done — you can add a tip. Leave a review so the next customer knows what to expect.' },
    ],
  },
  {
    slug: 'use-thumbtack-contractors',
    title: 'How to Find Contractors on Thumbtack',
    excerpt: 'Get quotes from plumbers, electricians, painters, and other pros — compare several before you hire.',
    category: 'app-guides',
    tags: ['Thumbtack', 'contractors', 'home services', 'pros'],
    readTime: '6 min',
    thumbnailEmoji: '🔨',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `Thumbtack is a website and app that sends your project description to local pros who then send you quotes. It covers hundreds of home services — from roof repair to wedding photography.

Unlike TaskRabbit (which is for quick gigs), Thumbtack is for bigger jobs that typically need a licensed contractor.`,
    steps: [
      { title: 'Go to thumbtack.com or install the app', content: 'Use either the website or the free app. Create an account with your email and zip code so pros in your area see your request.' },
      { title: 'Describe your project', content: 'Pick a category (like "Plumbing" or "Roofing") and answer the follow-up questions. Details matter — "Leaky kitchen faucet" gets a better quote than "plumbing help."' },
      { title: 'Review the quotes', content: `Within a few hours, 3 to 5 pros will send you quotes through the app. Each quote shows the price, the pro's reviews, their license info, and how many jobs they have done on Thumbtack.` },
      { title: 'Check for licenses and reviews', content: `Before hiring, click each pro's name to read their reviews. For electricians and plumbers, verify their license at your state's contractor licensing board website — not every state requires one, but most do.` },
      { title: 'Hire and pay outside the app', content: 'Unlike TaskRabbit, Thumbtack does not handle payment. Once you pick a pro, you pay them directly by check or credit card. Always get a written estimate before work starts and a receipt after.' },
    ],
  },
  {
    slug: 'use-home-depot-garden-app',
    title: 'How to Use the Home Depot App for Shopping',
    excerpt: 'Check stock at your local store, scan items for reviews, and get project help right from your phone.',
    category: 'app-guides',
    tags: ['Home Depot', 'shopping', 'DIY', 'app'],
    readTime: '5 min',
    thumbnailEmoji: '🌱',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `The free Home Depot app is a handy tool whether you shop online or walk the aisles of a store. You can check whether an item is in stock at your local store, scan any product to read reviews, and find the exact aisle and bay where it is shelved.

The app also has project guides, how-to videos, and price-match alerts.`,
    steps: [
      { title: 'Install the Home Depot app', content: 'Download the free Home Depot app from the App Store or Play Store. Sign in with your email or create a free account — the app remembers your local store.' },
      { title: 'Set your local store', content: 'Tap the menu and pick "My Store." Enter your zip code and pick the closest Home Depot. Stock counts and aisle numbers will now show for that store.' },
      { title: 'Search for items and check stock', content: 'Type any item in the search bar. The product page shows "In stock" along with the exact aisle and bay number in your store so you can walk right to it.' },
      { title: 'Scan products in the store', content: 'In the app, tap the barcode icon and point it at any product barcode. You will see reviews, alternate options, and similar items — helpful before buying something expensive.' },
      { title: 'Order for pickup or delivery', content: 'Tap "Add to Cart" on any product. At checkout, pick "Store Pickup" for free same-day pickup at the service desk, or "Delivery" for home shipping. Use an 11% mail-in rebate or Home Depot card for discounts.' },
    ],
  },
  // ── GENEALOGY & FAMILY HISTORY ──────────────────────────────────────────────
  {
    slug: 'use-ancestry-family-tree',
    title: 'How to Build Your Family Tree on Ancestry.com',
    excerpt: 'Trace your ancestors back generations using census records, birth certificates, and your DNA.',
    category: 'app-guides',
    tags: ['Ancestry', 'genealogy', 'family tree', 'DNA'],
    readTime: '8 min',
    thumbnailEmoji: '🌳',
    publishedAt: '2026-04-17',
    difficulty: 'Intermediate',
    body: `Ancestry.com is the largest family history site, with billions of historical records like census forms, ship passenger lists, and old newspapers. You can build a family tree going back hundreds of years.

Basic searching is free, but the detailed records and DNA matching require a subscription of about $25 to $50 per month. Ancestry often offers free 14-day trials.`,
    steps: [
      { title: 'Start a free tree', content: 'Go to ancestry.com and click "Start your free tree." Enter your name, parents, and anything you know about your grandparents. You do not need to pay to start the tree.' },
      { title: 'Add what you know', content: 'Fill in names, birth years, marriage years, and locations for every family member you can remember. The more details you give, the better Ancestry can match historical records.' },
      { title: 'Watch for the green leaves', content: `Ancestry marks each person in your tree with a small green leaf when it finds matching records — a census, birth certificate, or someone else's tree. Click the leaf to review and add the record if it is truly the same person.` },
      { title: 'Start a subscription if you want more', content: 'A paid subscription unlocks the historical records themselves. Use the 14-day free trial to do a burst of research, then cancel if you are done. US Discovery plans cover American records only; World Explorer covers everywhere.' },
      { title: 'Take a DNA test (optional)', content: 'For about $99, Ancestry will mail you a saliva kit. You spit in the tube, mail it back, and 4 to 6 weeks later see your ethnicity estimate and any DNA cousin matches who are also on Ancestry.' },
    ],
  },
  {
    slug: 'use-familysearch-free-genealogy',
    title: 'How to Use FamilySearch for Free Genealogy Research',
    excerpt: 'Research your family tree with billions of records — all 100% free, run by the Church of Jesus Christ of Latter-day Saints.',
    category: 'app-guides',
    tags: ['FamilySearch', 'genealogy', 'free', 'records'],
    readTime: '7 min',
    thumbnailEmoji: '📜',
    publishedAt: '2026-04-17',
    difficulty: 'Intermediate',
    body: `FamilySearch is the free alternative to Ancestry, run as a public service by the Church of Jesus Christ of Latter-day Saints. It has billions of indexed records and a shared public family tree where everyone collaborates on the same tree.

Because the tree is shared, you can often find ancestors already researched by distant relatives — you just need to connect your branch to theirs.`,
    steps: [
      { title: 'Create a free account', content: 'Go to familysearch.org and click "Create a free account." Enter your name and email. You do not need to be a church member — the site is open to everyone.' },
      { title: 'Enter your parents and grandparents', content: 'Tap "Family Tree" then "Add Parent" or "Add Spouse" to start filling in what you know. Names, birth dates, places, and relationships are the key fields.' },
      { title: 'Check for existing records', content: `When you add a person, FamilySearch searches its database and shows matches in the "Record Hints" section. Each hint links to a historical record — click it to verify it's the same person and attach it to your tree.` },
      { title: 'Connect to the shared tree', content: `FamilySearch often finds that an ancestor is already in the shared tree from another relative's research. Tap "Attach" to merge your info with theirs — both sides benefit from shared sources.` },
      { title: 'Search records directly', content: 'Use the "Search" menu to look through specific record collections — 1950 US Census, Ellis Island passenger lists, county marriage records. All downloads are free, forever.' },
    ],
  },
  {
    slug: 'use-23andme-ancestry-health',
    title: 'How to Use 23andMe for DNA Ancestry',
    excerpt: 'Take an at-home DNA test to learn your ethnicity breakdown and find DNA relatives you did not know about.',
    category: 'app-guides',
    tags: ['23andMe', 'DNA', 'ancestry', 'genetics'],
    readTime: '7 min',
    thumbnailEmoji: '🧬',
    publishedAt: '2026-04-17',
    difficulty: 'Beginner',
    body: `23andMe is a DNA test you take at home by spitting into a tube and mailing it back. A few weeks later you get an ethnicity estimate (like "35% Irish, 40% Italian, 25% Scandinavian") and a list of DNA relatives who also took the test.

The basic ancestry-only kit runs about $99 on sale. A pricier health-plus-ancestry kit also includes reports on genetic traits and health risks like celiac disease and Alzheimer's.`,
    steps: [
      { title: 'Order your kit', content: 'Go to 23andme.com and pick the Ancestry kit ($99) or Ancestry + Health kit ($199). The kit arrives in the mail in 3 to 5 days.' },
      { title: 'Register online', content: 'Before spitting in the tube, go to 23andme.com/start and register the barcode on your kit. If you skip this step, the lab cannot match your sample to your account.' },
      { title: 'Provide your saliva sample', content: 'Do not eat, drink, or brush your teeth for 30 minutes first. Spit into the tube up to the fill line (about half a teaspoon). Cap it, shake it, and put it in the prepaid return box.' },
      { title: 'Wait 4 to 6 weeks', content: 'Drop the box in any mailbox. 23andMe emails you when the lab receives your sample, when they start processing, and when the results are ready — usually 4 to 6 weeks later.' },
      { title: 'Review your results', content: 'Log in to see your ethnicity breakdown, DNA relatives, and (if you bought the Health kit) health reports. You can message DNA relatives through the site — most matches are 3rd or 4th cousins you never met.' },
    ],
  },
];
