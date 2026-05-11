// guides-batch-199 — 4 senior-friendly guides on home gardening with helpful tech tools
// Drafted 2026-05-08 to help older gardeners grow food and care for plants using simple tech aids
// Sourced from USDA, Old Farmer's Almanac, university extension services, and manufacturer guides

import type { Guide } from "./guides";

export const guidesBatch199: Guide[] = [
  {
    slug: "how-to-start-small-vegetable-garden",
    title: "How to Start a Small Vegetable Garden at Home",
    excerpt: "Plan, plant, and care for a small backyard or container vegetable garden with steps a first-time gardener can follow at any age.",
    category: "tips-tricks",
    tags: ["gardening", "vegetables", "outdoors", "hobbies", "food"],
    readTime: "9 min",
    thumbnailEmoji: "🥕",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "A small vegetable garden is one of the most rewarding hobbies for anyone over 60. It gets you outside in fresh air, gives gentle exercise without the strain of a gym, and ends with real food on your table — tomatoes that taste like the ones you remember from childhood, lettuce picked ten minutes before dinner, and herbs that cost five dollars a tiny package at the grocery store but grow free on a sunny step. The US Department of Agriculture estimates that a 4-foot by 8-foot raised bed, well planned, can grow $600 worth of produce in a single summer. A pot of basil and a pot of cherry tomatoes on an apartment balcony will pay for themselves by the second harvest.\n\nThe trouble for many older first-time gardeners is that gardening books are written for people with strong backs, big yards, and unlimited weekends. The truth is that a productive vegetable garden does not need any of those things. It needs about 4 to 6 hours of direct sun, water two to three times a week, soil that drains, and a few plants that are forgiving of mistakes. Lettuce, green beans, cherry tomatoes, peppers, zucchini, and herbs are all in that forgiving group. Cauliflower, melons, and corn are not — they want full-time attention and lots of space, and they are not the place to start.\n\nThis guide walks through starting a small garden from scratch in one growing season. The plan keeps the work load low, picks crops that almost always succeed, and uses a few free phone apps and websites that take the guessing out of when to plant and how often to water. By the end of the season, the goal is a steady harvest of three or four vegetables and herbs from a footprint no larger than a parking space — or a few large pots on a sunny patio. After one season of practice, the garden can grow as much as you would like the next year.\n\nReal sources for everything in this guide include your local university extension service (every state has one, and the advice is free), the USDA Plant Hardiness Zone map, and the Old Farmer's Almanac planting calendar.",
    steps: [
      {
        title: "Find your sunniest spot and your USDA hardiness zone",
        content: "Walk outside three times in one day — morning, noon, and late afternoon — and note which spot in the yard or on the balcony has direct sun for the longest stretch. Vegetables need 6 hours of direct sun for fruiting crops like tomatoes and 4 hours for leafy crops like lettuce. Then look up your USDA Plant Hardiness Zone at planthardiness.ars.usda.gov by entering your ZIP code. The zone number (for example 6a, 7b, 8a) tells you the last frost date, which controls when you can plant outside.",
        tip: "If no spot has 4 hours of sun, plan a container garden on a balcony or front step instead. Pots can be moved to follow the sun across the day.",
      },
      {
        title: "Pick four forgiving crops and order seeds or starter plants",
        content: "For a first garden, pick from this short list: cherry tomatoes, leaf lettuce, bush green beans, sweet bell peppers, zucchini, basil, and parsley. All seven are sold as starter plants at any garden center in spring, which is far less work than starting from seed. Buy one or two plants of each — a single zucchini plant feeds a household of two, and a single cherry tomato plant produces hundreds of tomatoes. Burpee.com, Bonnie Plants (sold at Lowe's and Home Depot), and your local nursery all carry these.",
      },
      {
        title: "Build a raised bed or pick out three large containers",
        content: "A raised bed kit from Lowe's, Home Depot, or VegTrug runs $80 to $250 and assembles in one afternoon. Pick a 4-foot by 4-foot or 4-foot by 8-foot size. Fill it with bagged \"raised bed soil\" or \"vegetable garden soil\" — never plain topsoil, which packs down hard. For containers, pick pots that are at least 12 inches across and 12 inches deep, with drainage holes in the bottom. One large pot per plant is the rule.",
        warning: "Do not place a raised bed directly on grass without a layer of cardboard underneath — grass and weeds will push up through the soil. A simple flattened cardboard box on the ground, then soil on top, smothers the grass within weeks.",
      },
      {
        title: "Plant after the last frost date for your zone",
        content: "The Old Farmer's Almanac at almanac.com/gardening/planting-calendar gives the exact last-frost date for your ZIP code. Wait until that date has passed before putting tomatoes, peppers, beans, or zucchini outside — a single late frost will kill them. Lettuce, parsley, and other cool-weather crops can go in two weeks earlier. Dig a hole the size of the plant's pot, set the plant in, fill in soil around it, and water deeply.",
      },
      {
        title: "Set up a simple watering routine",
        content: "New plants need water every day for the first week. After that, most vegetables want a deep soaking two or three times a week — about 1 inch of water per week, including rainfall. The finger test is reliable: push a finger 2 inches into the soil. If it feels dry, water; if it feels damp, wait a day. Water early in the morning so leaves dry before evening, which prevents fungus. A simple soaker hose on a battery timer ($25 to $40 at any hardware store) automates this entirely.",
      },
      {
        title: "Add mulch and check weekly for pests",
        content: "Spread 2 inches of straw, shredded leaves, or wood chip mulch around each plant — never piled against the stem. Mulch keeps weeds down and water in the soil. Once a week, walk through the garden and turn over a few leaves looking for holes, sticky spots, or small green caterpillars. Pick off any pests by hand into a cup of soapy water. Aphids wash off with a strong stream from the hose. Most pest problems on a small garden never need a sprayed chemical.",
      },
      {
        title: "Harvest often and let the plants keep producing",
        content: "Pick lettuce one outer leaf at a time and the plant keeps growing. Pick green beans, zucchini, and cherry tomatoes the moment they look ripe — leaving them on the plant tells the plant to stop making more. Pick basil from the top to keep it bushy. The more often you harvest, the more the garden produces. By mid-summer a small bed can fill a basket every two or three days.",
        tip: "Take a picture of the garden once a week with your phone. By the end of the season the photos make a clear record of what worked, what failed, and what to plant again next year.",
      },
    ],
  },
  {
    slug: "how-to-test-garden-soil-at-home",
    title: "How to Test Your Garden Soil at Home",
    excerpt: "Use an at-home soil test kit or a free state extension lab to find out what your garden soil needs before you plant anything.",
    category: "tips-tricks",
    tags: ["gardening", "soil", "testing", "outdoors", "diy"],
    readTime: "8 min",
    thumbnailEmoji: "🌱",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "Healthy plants come from healthy soil, and most gardens fail not because of the gardener but because of what is or is not in the dirt. Soil testing is the gardening step that almost every beginner skips and that almost every experienced gardener swears by. A test takes about 30 minutes of work, costs between $15 and $25, and tells you three things that change every planting decision: the pH of the soil (how acidic or alkaline it is), the level of three main nutrients (nitrogen, phosphorus, potassium), and whether the soil drains well or holds water.\n\nA tomato plant in soil with a pH of 5.0 will grow stunted and yellow no matter how much fertilizer you add — the roots cannot absorb nutrients at that acidity level. The same plant in soil at pH 6.5 will produce buckets of fruit. Without a test, the gardener never knows the difference and blames the seed, the sun, or the weather. With a test in hand, the fix is often a $7 bag of garden lime spread once and never thought about again.\n\nThere are two ways to test soil at home. The first is a do-it-yourself kit from any garden center — Luster Leaf's Rapitest is the most common, sells for about $18, and contains 40 individual color-match tests for pH and the main nutrients. Results take 10 minutes and are accurate enough for a backyard garden. The second is a mail-in test through your state's land-grant university extension service. Every state has one. Cornell, Penn State, University of Georgia, Texas A&M, UC Davis — all run soil testing labs that mail you a small box, you mail back two cups of soil, and a few weeks later a report comes back with exact recommendations for your specific garden. The cost is usually $15 to $20, and the results are far more detailed than the home kit.\n\nThis guide walks through both options. For most senior gardeners, the home kit is faster and gives an answer the same afternoon. The mail-in lab is better when something has gone wrong in a previous season and you want a professional opinion.",
    steps: [
      {
        title: "Decide which kind of test you want",
        content: "For a first-time test in a brand-new garden bed, the home kit is more than enough — it tells you pH and rough levels of nitrogen, phosphorus, and potassium. Pick a home kit if you want answers today and you are willing to do a small color match. Pick a mail-in extension lab test if your last garden failed for unknown reasons, if you suspect a chemical contamination (an old gas station, lead paint near the house, or a former driveway), or if you want a written planting recommendation tailored to your soil. The mail-in lab is also better for vegetable gardens where you plan to eat what you grow.",
      },
      {
        title: "Collect a soil sample the right way",
        content: "Both tests need a sample taken the same way. With a clean trowel, dig a small hole 6 inches deep at one spot in the garden bed. Take a thin slice of soil from the side of the hole, top to bottom, about half a cup. Put it in a clean plastic bucket. Move 5 to 10 feet, dig another hole, take another slice. Repeat for a total of 5 to 7 spots across the bed. Mix the slices together in the bucket — this gives one sample that represents the whole bed.",
        tip: "Never use a metal trowel that has touched fertilizer, and never put soil in a metal can. Trace metal will throw off the nutrient readings. A plastic bucket and a stainless-steel garden trowel are fine.",
      },
      {
        title: "Spread the sample to dry for 24 hours",
        content: "Spread the mixed soil on a flat sheet of newspaper or a paper plate, in a single thin layer, somewhere indoors and out of the sun. Let it dry overnight or for a full 24 hours. Wet soil will not give a clean test result in either kind of kit. Once the soil is dry enough to crumble between your fingers, break up any large clumps and remove pebbles, root pieces, and worms.",
      },
      {
        title: "Run a home kit test for pH and nutrients",
        content: "If you bought a Rapitest or similar home kit, the box has four small plastic tubes — one for pH, one each for nitrogen, phosphorus, and potassium. Each tube has a colored capsule that opens. Open the box and follow the printed steps: small spoon of soil into the tube, water to the fill line, capsule contents added, cap on, shake for 10 seconds, wait the printed amount of time. Compare the color in the tube to the chart on the side of the kit. Write down the result for each test.",
      },
      {
        title: "Or mail the sample to your state extension lab",
        content: "Search online for \"[your state] soil testing extension\" — for example \"Pennsylvania soil testing extension\" leads to Penn State's lab page. Order a kit online for $15 to $20. The lab mails a small cardboard box with a sample bag and a form. Fill in the form (your name, the type of garden, the crops you plan to grow), put one cup of dried soil in the bag, seal it, and drop the prepaid box in any US mailbox. Results come back by email or mail in 1 to 3 weeks.",
        warning: "Do not skip the form. The lab uses your crop list — vegetables, lawn, blueberries, fruit trees — to write the recommendation. \"Vegetable garden\" gets a very different answer than \"acid-loving shrubs.\"",
      },
      {
        title: "Read your results and adjust the soil",
        content: "Most vegetables want a pH between 6.0 and 6.8. If the test shows pH below 6.0, spread garden lime at the rate the kit or lab recommends. If the test shows pH above 7.0, work in elemental sulfur or peat moss to bring it down. Low nitrogen is fixed with composted manure or a balanced fertilizer like 10-10-10. Low phosphorus is fixed with bone meal. Low potassium is fixed with wood ash or greensand. Work the amendment into the top 6 inches of soil with a garden fork two weeks before planting.",
      },
      {
        title: "Re-test every 2 to 3 years",
        content: "Soil shifts over time as plants take up nutrients and rain washes minerals away. Mark the calendar to test the same bed again in two or three years, and any time a previously productive bed starts producing weak plants. A second test costs the same $15 to $25 and prevents years of poor harvests. Keep the printed reports in a labeled folder so you can track changes from one test to the next.",
      },
    ],
  },
  {
    slug: "how-to-use-moisture-meter-for-plants",
    title: "How to Use a Moisture Meter for Indoor Plants",
    excerpt: "Stop killing houseplants with too much or too little water by using a $15 moisture meter that tells you exactly when to water.",
    category: "tips-tricks",
    tags: ["plants", "houseplants", "watering", "tools", "indoor"],
    readTime: "7 min",
    thumbnailEmoji: "🪴",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "Overwatering kills more houseplants than any other cause. The University of Maryland Extension reports that 90% of houseplant deaths come from a single mistake — water poured into a pot whose soil was already wet from the last time. Roots that sit in soggy soil cannot breathe, they rot, the plant droops, the gardener thinks the plant needs more water, pours in more, and the plant dies inside a week. The hard part is that wet soil and dry soil look almost identical from the surface. A pot can look bone-dry on top and still be a swamp two inches down.\n\nA moisture meter solves the problem in five seconds. The tool is a long metal probe with a dial on top, sells for $10 to $20 at any garden center, hardware store, or online retailer like Amazon, and needs no batteries. Push the probe into the soil, wait 60 seconds, and read the dial. Most meters use a 1 to 10 scale where 1 to 3 means dry, 4 to 7 means moist, and 8 to 10 means wet. Each plant has a preferred range — succulents like 1 to 3 before the next watering, ferns like 5 to 7, peace lilies droop dramatically below 4. Once the gardener knows the right range for each plant, watering becomes a question with a real answer instead of a guess.\n\nMoisture meters also work outdoors in pots and small raised beds, and they save older gardeners from the deep-bend, finger-in-the-dirt test that is hard on knees and backs. A 12-inch probe reaches deeper than a finger and gives a cleaner reading.\n\nThis guide covers picking a meter, using it correctly, learning the right number for each common houseplant, and avoiding the two main mistakes that make readings unreliable. The same instructions work for any brand of analog meter — XLUX, Sonkir, Atree, and the cheaper unbranded models from any garden center are all built the same way.",
    steps: [
      {
        title: "Pick a meter with a long enough probe",
        content: "For most houseplants, an 8-inch to 12-inch probe is long enough. For large floor plants like fiddle-leaf figs or 14-inch pots, pick a 12-inch probe. The XLUX T10 ($14 on Amazon), Sonkir MS02 ($12), and Atree 3-in-1 ($16, also reads light and pH) are three reliable models. Skip the digital battery-powered meters under $10 — the cheap ones drift and give wrong readings within a few months.",
        tip: "If the household has more than 10 houseplants, buy two meters and keep one upstairs and one downstairs. Walking up and down stairs to fetch a meter is the reason many people stop using one.",
      },
      {
        title: "Push the probe into the soil at the right spot",
        content: "Pick a spot about halfway between the stem of the plant and the edge of the pot. Push the probe slowly straight down — never at an angle — until it reaches roughly two-thirds of the way to the bottom of the pot. For an 8-inch deep pot, that means pushing the probe 5 to 6 inches in. Going too shallow only reads the dry surface. Going to the very bottom can hit a drainage rock and give a false reading.",
        warning: "Do not jam the probe in fast or force it through hard soil. The thin metal tip can bend or break. If the soil is too hard to push through, water lightly first, wait an hour, then try again.",
      },
      {
        title: "Wait 60 seconds before reading the dial",
        content: "The dial moves to its final position over about a minute. Reading it after 5 seconds gives a number that is too low. Set a timer on a phone or watch the second hand on a wall clock. After 60 seconds, look straight down at the dial and write down the number. Then pull the probe straight out, wipe the metal clean with a paper towel, and put it back in its sleeve.",
      },
      {
        title: "Learn the right number for each plant",
        content: "Common houseplant ranges: succulents and cacti want 1 to 2 (water only at 1), snake plants and ZZ plants want 2 to 3, pothos and philodendrons want 3 to 4, spider plants and dracaenas want 4 to 5, peace lilies and ferns want 5 to 6, and African violets want 4 to 5. Write the target number on a piece of masking tape stuck to the bottom of each pot. The first time you check, water if the reading is below the target.",
      },
      {
        title: "Water deeply when the reading is low",
        content: "When the meter says it is time to water, water until liquid runs out the bottom drainage hole. A small drink on top wets only the top inch and trains roots to stay shallow. After watering, wait 5 minutes, then test again — the reading should now be at the high end of the range, around 7 to 9. The next test is in 3 to 7 days depending on the plant and the season.",
      },
      {
        title: "Clean the probe between plants",
        content: "Wipe the metal probe with a clean paper towel before putting it in the next plant. Soil from a sick or fungus-affected pot can carry the problem to a healthy plant on the next test. Once a month, wipe the probe with a paper towel dipped in rubbing alcohol. Never wash the meter under running water — the dial is not waterproof and water inside the dial ruins the spring.",
      },
      {
        title: "Avoid the two readings that lie",
        content: "First, a brand-new bag of dry potting mix can read as \"wet\" because the meter measures conductivity and dry peat with a lot of fertilizer salts confuses the probe. Water the new pot once thoroughly, wait a day, then start using the meter. Second, a pot that has gone bone dry and pulled away from the sides of the container can give a false \"dry\" reading even after watering — the water runs around the soil ball instead of into it. Re-pot or soak the whole pot in a bucket of water for 20 minutes to fix it.",
      },
    ],
  },
  {
    slug: "how-to-plan-watering-weather-apps",
    title: "How to Plan Garden Watering with Weather Apps",
    excerpt: "Use free weather apps on your phone to predict rain, skip wasted watering, and protect your garden from heat waves and frost.",
    category: "tips-tricks",
    tags: ["gardening", "weather", "apps", "watering", "phone"],
    readTime: "8 min",
    thumbnailEmoji: "🌦️",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "Watering a garden the right amount, at the right time, is the single biggest factor in whether plants thrive or struggle. Most gardeners over-water — partly out of love for the plants, partly because the morning paper said it would be hot, and partly because nobody wants to watch a tomato wilt. The result is wasted water (the average US household pours 30% of household water on the lawn and garden, according to the EPA), root rot, fungal disease, and a higher water bill. Underwatering is the other extreme — a 95-degree week without a soaking and even tough plants like zucchini will collapse.\n\nA free weather app on a phone solves this problem better than any soil moisture sensor or sprinkler timer. Modern apps pull data from National Weather Service radar, hour-by-hour rainfall forecasts, and ground station readings. Three apps stand out for gardeners: the National Weather Service site at weather.gov (the original government source, no ads, totally free), AccuWeather (free with ads, has a 90-day forecast), and Weather Underground or Wunderground.com (uses thousands of backyard weather stations and shows actual rainfall in your specific neighborhood, not just the airport 20 miles away). All three have free phone apps for iPhone and Android.\n\nWith one of these apps and a 5-minute morning routine, the gardener can decide before breakfast whether to water that day. The decision is based on three numbers: how much rain is expected in the next 48 hours, the daily high temperature for the next three days, and the wind speed (high wind dries soil twice as fast as still air). A rule of thumb that works for most home gardens is that 1 inch of rain per week from any source is enough — and if the forecast shows that inch arriving in the next two days, watering today is a waste of water.\n\nThis guide walks through using the weather app on a phone to plan the week's watering, set up a simple rain alert, and protect plants from upcoming heat waves and late frosts.",
    steps: [
      {
        title: "Pick one weather app and put it on your home screen",
        content: "Open the App Store on iPhone or the Play Store on Android. Search \"NOAA Weather,\" \"AccuWeather,\" or \"Weather Underground.\" Tap Install or Get on the one you want and wait for it to download. Open the app, allow it to use your location (this is what makes the forecast match your actual yard, not the city center), and let it run through the introduction screens. Then long-press the app icon and drag it to a spot on the home screen where you will see it every morning.",
        tip: "The Apple Weather app and the Google Weather widget that come built in to most phones are also fine for this purpose — both pull from the same National Weather Service data. The only reason to install a separate app is if you want the longer 15-day or 90-day forecast.",
      },
      {
        title: "Read the next 48 hours of rain probability",
        content: "Open the app and look for the hourly forecast — a row of hours, each with a small percentage. That percentage is the chance of measurable rain (more than 0.01 inch) in that hour. If any 6-hour stretch in the next 48 hours shows 60% or higher, plan to skip watering. If the next 48 hours all show 30% or lower, plan to water this morning. The 30% to 60% range is the judgment call — check soil moisture with a finger or meter before deciding.",
      },
      {
        title: "Find the actual rainfall amount expected",
        content: "Tap the day in the forecast for the detail screen. Most apps show \"Precipitation\" with a number in inches — for example, 0.4 inch. Add up the numbers for the next 7 days. If the total is 1 inch or more, the garden does not need supplemental watering this week. If the total is less than 0.5 inch and temperatures are above 80 degrees, plan two deep waterings. If rainfall is between 0.5 and 1 inch, plan one watering mid-week.",
        warning: "A short heavy thunderstorm of 1 inch in 30 minutes does not soak in the same way as 1 inch of light rain over 6 hours. Most of a hard rain runs off into the gutter. Check the soil with a finger after any quick storm — if it is dry 2 inches down, water anyway.",
      },
      {
        title: "Check daily highs for heat waves",
        content: "Tap the 7-day or 10-day forecast view. Look for any 3-day stretch where the daily high is above 90 degrees Fahrenheit. A heat wave doubles or triples a plant's water needs. The day before a heat wave starts, water the garden deeply early in the morning, then add a 2-inch layer of mulch around each plant if there is none yet. During the heat wave, water again in the early morning every day until the temperature drops back below 85.",
      },
      {
        title: "Watch for late spring frost or early fall frost",
        content: "In the forecast, look at the overnight low for any night in the next 10 days. A reading of 36 degrees or lower means frost is possible — even at 36 the grass and tender leaves will frost. Tomatoes, peppers, basil, and zucchini are all killed by a single frost. The day before, cover each plant with an old bedsheet, frost cloth, or even an upside-down 5-gallon bucket. Take the cover off the next morning after the sun comes up.",
        tip: "Set a phone alarm for the night a frost is forecast. \"Cover plants 8 PM\" beats trying to remember during the news.",
      },
      {
        title: "Set up a rain alert for the next 24 hours",
        content: "In AccuWeather, Weather Underground, and the iPhone Weather app, the settings menu has a \"Notifications\" or \"Alerts\" option. Turn on \"Rain in next hour\" and \"Severe weather alerts.\" The phone will then ping when rain is starting in your specific area. This catches the storms that pop up in the afternoon and lets you skip the evening watering — or rush outside to harvest a ripe tomato before the wind knocks it off.",
      },
      {
        title: "Keep a simple weekly watering log",
        content: "On a piece of paper or a note in the phone, write the date, the inches of rain that fell, and whether you watered. After 4 to 6 weeks the log shows the real pattern of your yard — how often the rain matches the forecast, which week the garden truly needed extra water, and how often the app saved a wasted trip with the hose. The log also helps if a plant struggles later in the season — looking back tells you whether the problem was water, weather, or something else entirely.",
      },
    ],
  },
];
