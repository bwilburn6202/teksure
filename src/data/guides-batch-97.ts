import { Guide } from './guides';

export const guidesBatch97: Guide[] = [
  {
    slug: `nest-thermostat-guide`,
    title: `How to Set Up a Google Nest Learning Thermostat`,
    excerpt: `A step-by-step walkthrough for installing a Google Nest Learning Thermostat, pairing it with the Google Home app, and saving on heating and cooling.`,
    category: `smart-home`,
    tags: [`Nest thermostat`, `smart thermostat`, `Google`, `HVAC`],
    readTime: `10 min`,
    thumbnailEmoji: `🌡️`,
    publishedAt: `2026-04-20`,
    difficulty: `Intermediate`,
    body: `The Google Nest Learning Thermostat is one of the most popular smart thermostats in the United States, and for good reason. It studies the temperatures you set over the first week or two, then builds a schedule automatically so your home stays comfortable without you touching a dial every day. It can also drop into Eco Mode when you leave the house, which often shaves 10 to 15 percent off heating and cooling bills.

Before you buy one, the most important thing to check is whether your home's HVAC wiring is compatible. Nest needs a steady trickle of power, and that usually comes from a wire called the C-wire (common wire). If your old thermostat does not have a C-wire, Nest can sometimes work without it, but in other cases you will need an adapter or a small amount of help from an HVAC technician. Google has a free online compatibility checker where you enter the wires you see behind your current thermostat.

Installation itself takes about 30 to 45 minutes. You will turn off power at the breaker, take a photo of your existing wiring, label each wire with the included stickers, mount Nest's base plate, and slot the wires into the spring-loaded terminals. After you restore power, the Nest walks you through setup on its round screen, you pair it with the Google Home app on your phone, and it starts learning. Within a couple weeks it should have built a schedule that matches your life — warmer mornings, cooler nights, energy savings when you're away.`,
    steps: [
      {
        title: `Check your HVAC compatibility`,
        content: `Turn off power to your HVAC system at the breaker, then remove the cover from your current thermostat. Take a clear photo of the wires so you have a backup reference. Enter the wire labels (R, C, W, Y, G, and so on) into Google's free Nest compatibility checker at nest.com/compat. If a C-wire is missing, Nest can often still work, but an HVAC technician or a simple adapter kit may be needed.`,
      },
      {
        title: `Safely remove the old thermostat`,
        content: `With the breaker still off, unscrew the old thermostat's face plate from the wall. Carefully pull the wires forward and use the small stickers that come with Nest to label each wire by terminal (R, C, W, and so on). Loosen the terminal screws and pull each wire free. If the wires try to slip back into the wall, wrap them around a pencil to hold them in place.`,
      },
      {
        title: `Mount the Nest base and connect wires`,
        content: `Hold Nest's base plate flat on the wall, level it with the built-in bubble level, and mark the mounting holes with a pencil. Screw the base into the wall using the included anchors. Press each labeled wire into its matching terminal — the spring clamp will hold it in place. Snap the round Nest display onto the base until you hear a click.`,
      },
      {
        title: `Run first-time setup`,
        content: `Turn the breaker back on. Nest's screen will light up and guide you through language, Wi-Fi, ZIP code, and HVAC type. Turn the outer ring to scroll and press the display to select. When it asks, scan the QR code on the back of the device with the Google Home app to link it to your account. Setup takes about 10 minutes total.`,
      },
      {
        title: `Let the learning feature do its work`,
        content: `Use the thermostat normally for the first 1 to 2 weeks — bump the temperature up when you're cold, down when you're warm. Nest watches these changes and builds a personalized schedule. After that, turn on Home/Away Assist in the Google Home app so it drops to Eco Mode when your phone leaves the house, and turn on Seasonal Savings for automatic small adjustments that add up over a year.`,
      },
    ],
  },
  {
    slug: `ecobee-smart-thermostat-guide`,
    title: `Set Up an ecobee Smart Thermostat with Room Sensors`,
    excerpt: `Install an ecobee smart thermostat, place its SmartSensors in your key rooms, and stop that one cold bedroom from ruining your whole comfort level.`,
    category: `smart-home`,
    tags: [`ecobee`, `smart thermostat`, `SmartSensor`, `HVAC`],
    readTime: `10 min`,
    thumbnailEmoji: `🏡`,
    publishedAt: `2026-04-20`,
    difficulty: `Intermediate`,
    body: `If your home has one room that always runs cold in winter or hot in summer — usually a back bedroom or a room above a garage — an ecobee thermostat is the single best fix short of replacing ductwork. What makes ecobee different from other smart thermostats is its wireless SmartSensors. You place small disc-shaped sensors in the rooms that matter to you, and ecobee averages the temperature across those sensors instead of reacting only to the hallway where most thermostats live.

The installation process is similar to a Nest. You turn off power at the breaker, label the wires on your old thermostat, mount ecobee's base plate, and connect each wire to a matching terminal. Ecobee includes a Power Extender Kit for homes without a C-wire — worth mentioning because not every brand does. Once mounted, ecobee walks you through Wi-Fi setup, HVAC settings, and pairing SmartSensors.

The real payoff is placing the sensors thoughtfully. Put one in the bedroom you sleep in, one in the living room where you spend evenings, and keep one in a frequently used spot like the kitchen. Then build ecobee's comfort profiles — Home, Away, and Sleep — and assign which sensors matter during each. The Follow Me feature tells the system to prioritize whichever sensor has detected recent motion, so it chases comfort to wherever you actually are.

Ecobee models also include a built-in Alexa speaker, intercom, and integration with utility rebate programs called eco+. Many power companies give $50 to $125 back for enrolling.`,
    steps: [
      {
        title: `Check wiring and run compatibility`,
        content: `Shut off power at the breaker and remove your old thermostat's cover. Snap a photo of the wires, then visit ecobee.com/compatibility and enter each labeled terminal. If you do not have a C-wire, ecobee's included Power Extender Kit solves that — you will install it inside your furnace's control board.`,
      },
      {
        title: `Mount the thermostat and connect wires`,
        content: `Use the included backplate or trim plate to cover any wall holes or paint mismatches from the old thermostat. Thread the wires through the backplate, push each wire into its matching labeled terminal, and attach the ecobee display until it clicks. Turn the breaker back on.`,
      },
      {
        title: `Pair SmartSensors to the thermostat`,
        content: `Pull the plastic tab out of each SmartSensor to activate the battery. Hold the sensor near the thermostat during initial setup — ecobee will detect and pair it automatically. Give each one a room name like "Bedroom" or "Living Room" so it's clear later in the app.`,
      },
      {
        title: `Place SmartSensors thoughtfully`,
        content: `Put sensors in the rooms whose comfort matters most at different times of day. A small wall stand is included, or use the adhesive pad to mount on a bookshelf. Keep sensors out of direct sunlight and away from heating vents, both of which fool the temperature reading.`,
      },
      {
        title: `Build comfort profiles and enable Follow Me`,
        content: `In the ecobee app, open Comfort Settings and edit the Home, Away, and Sleep profiles. Check which sensors count during each profile — for example, only the bedroom sensor during Sleep. Turn on Follow Me so ecobee prioritizes whichever sensor detected recent motion. Finally, enable eco+ and check whether your electric utility offers an enrollment rebate.`,
      },
    ],
    tip: `Quick Tip — Place a SmartSensor in the room that's always uncomfortable. One bedroom sensor has fixed more "my back room is freezing" complaints than any other tech upgrade.`,
  },
  {
    slug: `myq-garage-opener-guide`,
    title: `Open Your Garage from Anywhere with MyQ Smart Garage`,
    excerpt: `Make any standard Chamberlain or LiftMaster garage door smart with MyQ — open, close, and get alerts from your phone anywhere.`,
    category: `smart-home`,
    tags: [`MyQ`, `smart garage`, `Chamberlain`, `LiftMaster`],
    readTime: `9 min`,
    thumbnailEmoji: `🚪`,
    publishedAt: `2026-04-20`,
    difficulty: `Intermediate`,
    body: `MyQ is Chamberlain and LiftMaster's smart garage system, and it turns a regular garage door opener into one you can control from anywhere in the world through your phone. If you've ever driven halfway to work wondering whether you left the garage door open, MyQ solves that problem in about 20 minutes of setup.

The MyQ Smart Garage Hub is a small device that mounts near the ceiling of your garage, plugs into a standard outlet, and talks to your opener using a Wi-Fi bridge. Most Chamberlain and LiftMaster openers made after 1993 are compatible — there's a compatibility checker on the MyQ website. The hub works with a door sensor (a two-piece magnetic sensor that attaches to the door itself) so MyQ knows when the door opens and closes, not just when a command was sent.

Once installed, the MyQ app does several useful things. You can open or close the door from anywhere on your phone. You get a push notification each time the door opens or closes, including who in the family triggered it. You can schedule auto-close (for example, always close the door at 10:00 PM if it's left open). And through MyQ's guest feature, you can grant a dog walker, cleaner, or Amazon delivery driver temporary access.

The Amazon Key for Garage integration is notable — it allows Amazon drivers to open your garage door, place the package inside, and close it behind them. For anyone sick of porch pirates, this is a genuine upgrade.`,
    steps: [
      {
        title: `Check that your opener is compatible`,
        content: `Visit mychamberlain.com/compatibility and enter your opener's brand and model number (usually on a label on the side or back of the motor unit). Most Chamberlain, LiftMaster, and Craftsman openers made since 1993 work. Older or off-brand openers may need the MyQ universal bracket instead.`,
      },
      {
        title: `Mount the MyQ hub`,
        content: `Place the MyQ Smart Garage Hub near the ceiling of your garage, ideally within a few feet of the opener. Use the included screws or double-sided mounting tape. Plug the hub into a nearby standard outlet. The green light on top means it has power.`,
      },
      {
        title: `Install the door sensor`,
        content: `The MyQ door sensor is a small rectangular sensor that attaches to the inside of the garage door itself — usually on one of the upper panels. Peel off the adhesive backing and stick it firmly. The sensor detects the door's tilt angle to know if it's open or closed.`,
      },
      {
        title: `Pair everything in the app`,
        content: `Download the MyQ app, create an account, and tap Add a Device. Scan the QR code on the side of the hub, then press the learn button on your garage opener within 90 seconds to pair them. The app walks you through linking the door sensor next.`,
      },
      {
        title: `Turn on notifications and optional extras`,
        content: `In Settings, turn on notifications for open/close events. Turn on the Schedule feature if you want auto-close at a specific time each evening. Invite family members under Users so each person's activity is tracked separately. If you shop on Amazon, link Amazon Key for Garage under Partners to enable in-garage delivery.`,
      },
    ],
    warning: `Never install the hub or door sensor while the garage door is moving. Unplug the opener during setup, and pinch-test the safety sensors afterward to make sure the door still reverses correctly when something blocks it.`,
  },
  {
    slug: `nest-protect-smoke-detector`,
    title: `Installing Nest Protect Smoke and CO Detector`,
    excerpt: `Install Google's Nest Protect so you get voice pre-alerts before the siren screams and phone notifications if smoke or carbon monoxide is detected while you're away.`,
    category: `smart-home`,
    tags: [`Nest Protect`, `smoke detector`, `CO detector`, `Google Nest`],
    readTime: `8 min`,
    thumbnailEmoji: `🚨`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Every home needs working smoke detectors and — if you have any gas appliances, an attached garage, or a wood-burning fireplace — carbon monoxide detectors. The Nest Protect combines both in a single unit and adds two features a basic hardware-store detector cannot match: a friendly spoken pre-alert before the loud siren, and a phone notification if something is detected while you're away.

The pre-alert is worth explaining because it meaningfully changes how smoke detectors feel in daily life. Most detectors have one mode — silent or blaring. Nest Protect has a middle state. If it senses smoke in the kitchen (burned toast, oven smoking), a calm voice says "There's smoke in the kitchen" at a normal volume, giving you a moment to wave a dishtowel before it escalates to the full alarm. This alone drastically reduces the number of false-alarm midnight panic moments with ladders and batteries.

The Nest Protect also runs Sound Check — once a month, at a time you choose, it briefly tests its horn at a low volume so you know the siren works. Compare that to a basic detector that you only know works when it chirps at 3 AM with a dying battery.

Two versions exist: battery-powered (6-year AA lithium battery life) and wired (connects to household power with battery backup). Choose battery if you're replacing an existing battery unit, wired if you have existing wired detectors. Both need to be replaced after 10 years — the sensors degrade and no detector past that age is fully trustworthy.`,
    steps: [
      {
        title: `Choose battery or wired model`,
        content: `Pull down your current smoke detector and look behind it. If there is a black/white/red wire harness, you have wired detectors and should buy the wired Nest Protect so it matches. If there are no wires, buy the battery model. Wired models cost a little more but integrate with other wired detectors in your home.`,
      },
      {
        title: `Mount the base plate`,
        content: `Turn off the breaker controlling that circuit if you're installing a wired model. Screw the included base plate into the ceiling (or high on a wall) using the included screws and anchors. Nest Protect should be at least 10 feet from the stove to reduce cooking false alarms, and in every bedroom plus hallways.`,
      },
      {
        title: `Run the app setup`,
        content: `Download the Google Home app. Tap the plus icon, then Set Up Device, then Nest Protect. Scan the QR code on the back of the unit before you mount it fully — that's easier than scanning it on the ceiling. Name the unit for its room ("Kitchen," "Master Bedroom") so alerts are meaningful.`,
      },
      {
        title: `Twist the unit onto the base`,
        content: `Align the Nest Protect with the base plate and twist until it clicks into place. The LED ring will pulse green briefly to show it's connected. If you have multiple Nest Protects, pair each one to the same Google Home — they talk to each other, so an alarm in the basement alerts upstairs.`,
      },
      {
        title: `Set up monthly Sound Check and test`,
        content: `In the app, open the Nest Protect settings and pick a time for monthly Sound Check — a time when you're usually home, like Saturday morning. Run a manual test right now by pressing the button on the face of the unit. The siren will chirp briefly and your phone will get a notification confirming everything works.`,
      },
    ],
    warning: `Replace every Nest Protect (and any smoke detector) no later than 10 years after its manufacture date printed on the back. Sensors degrade past that point, and the protection you think you have is no longer reliable.`,
  },
  {
    slug: `water-leak-sensor-guide`,
    title: `Stop Water Damage Before It Starts with Smart Leak Sensors`,
    excerpt: `A small $20 leak sensor under your water heater or washing machine can prevent a $20,000 claim. Here's how to pick and place them.`,
    category: `smart-home`,
    tags: [`leak sensor`, `smart home`, `water damage`, `Moen Flo`, `Phyn`],
    readTime: `9 min`,
    thumbnailEmoji: `💧`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Water damage is one of the single most expensive home insurance claims in the United States — the average claim runs well over $10,000, and many are far higher. The frustrating part is that almost all water damage is slow, meaning a cheap sensor could have caught the leak long before it ruined floors and drywall.

Smart leak sensors come in two flavors. Point sensors are small pucks you set on the floor in specific risk spots — under the kitchen sink, next to the water heater, behind the washing machine, under the dishwasher, near toilets, and in the ice maker line's tray. They have a Wi-Fi chip and a battery that typically lasts 2 to 5 years. When water touches the two metal contacts on the bottom, the sensor sends you a phone alert and sounds a local beep. Point sensors cost roughly $20 to $40 each. Good brands include Samsung SmartThings, YoLink, Eve Water Guard, and Aqara.

Whole-home monitors are a step up. Brands like Moen Flo, Phyn Plus, and Flume attach to your main water line or water meter and measure water flow patterns. They can detect a slow leak behind a wall that point sensors would never see, alert you if someone leaves a tub running, and — in the case of Moen Flo and Phyn Plus — automatically shut off the water if they detect a major burst. These run $400 to $700 installed, but they can prevent catastrophic damage.

Here's a real money nudge: many home insurance companies (Travelers, State Farm, Liberty Mutual, Nationwide) give premium discounts of 3 to 10 percent for installing a whole-home leak monitor. The device can pay for itself in a few years, even before a leak.`,
    steps: [
      {
        title: `Identify your highest-risk spots`,
        content: `Walk through your house with a notepad. The top risk spots are: under every sink, behind the washing machine, next to the water heater, around toilets, under the dishwasher, behind the refrigerator (if it has an ice maker line), and in the attic near any HVAC drain pan. Write down the count — that's how many point sensors to buy.`,
      },
      {
        title: `Decide between point sensors and whole-home`,
        content: `If you are a renter or want an inexpensive first step, buy point sensors only. If you own your home, travel frequently, or had a previous water claim, add a whole-home monitor too. Moen Flo and Phyn Plus include auto-shutoff valves; Flume is detection-only but does not require plumbing work.`,
      },
      {
        title: `Place and pair point sensors`,
        content: `Lay each sensor flat on the floor in its spot, metal contacts down. Pair it through its brand's app — typically scan a QR code on the sensor and wait for it to appear. Give each one a clear name like "Under Kitchen Sink" so alerts tell you exactly where to run.`,
      },
      {
        title: `Install a whole-home monitor if chosen`,
        content: `Whole-home monitors with auto-shutoff (Moen Flo, Phyn Plus) almost always need a plumber to install — they sit on your main water line. Expect $150 to $300 in plumber time. Flume attaches to your water meter outside with a strap and needs no plumbing, but only detects — it cannot shut water off.`,
      },
      {
        title: `Test, then notify your insurance`,
        content: `Put a wet finger on a point sensor's contacts to trigger a test alarm. Confirm you received a phone alert within about 30 seconds. Then call your home insurance agent — ask whether they offer a premium discount for having installed a smart leak detector. Many do, and they almost never volunteer it.`,
      },
    ],
    tip: `Quick Tip — The single highest-value spot is next to your water heater. A burst tank can dump 40+ gallons onto the floor in minutes, and a point sensor under the pan pays for itself the first time.`,
  },
  {
    slug: `instagram-close-friends-guide`,
    title: `How to Use Instagram Close Friends for Private Stories`,
    excerpt: `Share Instagram Stories with a hand-picked list of family and close friends only. No one is told they're on or off the list.`,
    category: `social-media`,
    tags: [`Instagram`, `Close Friends`, `Stories`, `privacy`],
    readTime: `6 min`,
    thumbnailEmoji: `⭐`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Instagram's Close Friends feature is one of the most useful privacy tools on any social media platform, and a lot of people don't know it exists. It's a private list you curate yourself. Anyone on the list sees your Close Friends Stories and Notes; everyone else sees nothing. No one is notified when they're added or removed, so you can adjust it freely without awkward conversations.

Close Friends is designed for moments when a regular Story feels too public. Grandparents and cousins wanting the daily grandkid photos, without broadcasting to 800 followers. A small group watching a home renovation. Updates during a difficult life moment — a health issue, a job search, a loss — where a wider audience feels wrong. Some people also use it for "finsta"-style personal content, an inner ring of real friends who see unfiltered daily moments.

To post a Story to Close Friends only, you open the Story camera as usual and tap the green star icon at the bottom instead of Your Story. Stories posted this way appear with a green ring around your profile picture (only Close Friends members see the green ring) so recipients know this was a private share.

The setup is fast. You can add or remove people from Close Friends at any time through Settings. Instagram also gives suggestions — people you message often or interact with frequently — but you can also manually search for anyone. Many people start with immediate family and 5 to 15 truly close friends, and adjust from there.`,
    steps: [
      {
        title: `Open the Close Friends list`,
        content: `Open Instagram and tap your profile picture in the bottom right. Tap the three lines in the top right to open the menu, then tap Close Friends. You'll see a list of everyone you follow, sortable by recent activity or alphabetical.`,
      },
      {
        title: `Add people to the list`,
        content: `Tap the circle next to each person you want on the list. A green checkmark fills in. Start with immediate family and your closest friends. Instagram suggests accounts you message and interact with most; these suggestions are a good place to start.`,
      },
      {
        title: `Post a Story to Close Friends only`,
        content: `Tap the plus icon in the top right, choose Story, and take or select your photo or video. Before posting, tap the green star icon labeled Close Friends at the bottom. Your Story is now visible only to people on your list — no one else even sees that a Story was posted to that audience.`,
      },
      {
        title: `Post a Close Friends Note`,
        content: `Notes are small text posts that appear at the top of the DMs (direct messages) screen. When you write a Note, tap the audience toggle and choose Close Friends instead of Followers. Only your list will see the Note. Notes disappear after 24 hours.`,
      },
      {
        title: `Review and edit the list anytime`,
        content: `Return to Settings then Close Friends to remove anyone or add more people. No notification is sent when you add or remove someone, so you can shape the list to whatever feels right in the moment. A small green star next to someone's name means they are currently on the list.`,
      },
    ],
    tip: `Quick Tip — Think of Close Friends as a text-message group chat in Story form. If you'd text a photo to only those people, it probably belongs in Close Friends instead of a public Story.`,
  },
  {
    slug: `bluesky-social-guide`,
    title: `Getting Started with Bluesky — An Alternative to X (Twitter)`,
    excerpt: `Bluesky is the fastest-growing alternative to X/Twitter. Create an account, follow people, and understand what makes it different.`,
    category: `social-media`,
    tags: [`Bluesky`, `social network`, `Twitter alternative`, `X alternative`],
    readTime: `7 min`,
    thumbnailEmoji: `🦋`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Bluesky is one of the largest social networks that grew out of the dissatisfaction many people felt with X (formerly Twitter) over the past few years. It looks and feels similar to classic Twitter — short text posts, replies, reposts, likes — but it's built on a different kind of technology (the AT Protocol) that is decentralized, meaning no single company owns the entire network.

What that actually means for you as a user is simple: you get a chronological timeline with no ads by default, you choose which "feeds" (custom timelines built by users) to follow, and the company running the main Bluesky app can't arbitrarily hide things from you because another client app could always show them. You can follow anyone on Bluesky and they can follow you back, just like on Twitter.

Signing up takes about two minutes. You pick a handle (username) that ends in .bsky.social by default, fill in a profile picture and bio, and you're ready to post. The hard part for most people is finding accounts worth following in a brand-new network. Bluesky solved this well with "Starter Packs" — curated lists of people to follow around topics like science, news, gardening, birding, or local communities. Following one Starter Pack instantly gives you a full feed.

Custom feeds are Bluesky's secret weapon. Instead of one algorithm controlling what you see, anyone can build a feed — "Only Cat Photos," "Science News," "Posts from people who follow me back" — and you subscribe to whichever ones you like. The main Following feed stays strictly chronological and ad-free.`,
    steps: [
      {
        title: `Create an account`,
        content: `Go to bsky.app or download the Bluesky app from the App Store or Google Play. Tap Create Account. Enter your email, set a password, and choose a handle (username) — you can change it later. The default handle format is yourname.bsky.social.`,
      },
      {
        title: `Set up your profile`,
        content: `Tap your avatar in the top corner, then Edit Profile. Add a profile picture, a banner image, and a short bio. Unlike X, there are no character-per-post limits that change based on a paid tier — posts are 300 characters for everyone.`,
      },
      {
        title: `Follow a Starter Pack`,
        content: `Search for "Starter Pack" plus a topic you care about (news, photography, science, gardening). Open a Starter Pack, tap Follow All, and you'll instantly be following a curated list of people. This is the fastest way to have a full and interesting feed on day one.`,
      },
      {
        title: `Add custom feeds`,
        content: `Tap the Feeds icon (four lines) in the navigation. Browse or search for feeds that match your interests — "Science," "Pop Culture," "Discover." Pin the feeds you like to your Home tab. You can swipe between Following, Discover, and your pinned custom feeds.`,
      },
      {
        title: `Learn the moderation tools`,
        content: `Bluesky has strong content moderation. Tap Settings, then Moderation — you'll see labels for adult content, political content, spam, and more. You can turn labels on, off, or "warn" (blurs content with a tap to view). Bluesky also supports block lists and mute words, which work globally.`,
      },
    ],
  },
  {
    slug: `mastodon-beginners-guide`,
    title: `A Beginner's Guide to Mastodon — The Federated Social Network`,
    excerpt: `Mastodon is a network of independent servers that can talk to each other. Here's how to pick a server, create an account, and actually find things to read.`,
    category: `social-media`,
    tags: [`Mastodon`, `Fediverse`, `federated social`, `decentralized`],
    readTime: `9 min`,
    thumbnailEmoji: `🐘`,
    publishedAt: `2026-04-20`,
    difficulty: `Intermediate`,
    body: `Mastodon often gets described as "Twitter but different," and that's half true — it looks like Twitter, but the way it's built is genuinely unusual. Instead of one company running one website, Mastodon is a collection of thousands of independent servers (called "instances") that all speak the same language and connect to each other. Think of it like email: your Gmail account and a friend's Yahoo account can send messages to each other even though Gmail and Yahoo are different companies.

When you sign up for Mastodon, you first pick a server. Mastodon.social is the largest and the most common starting point, but there are servers focused on art (mastodon.art), tech (infosec.exchange, hachyderm.io), journalism (journa.host), and thousands of smaller communities. Your username looks like @yourname@servername — the server is part of your identity, like the @gmail.com part of an email.

You can still follow people on any other Mastodon server. If someone is @sarah@mastodon.art and you're on mastodon.social, you can follow her, reply to her, and she sees it — just like emailing across providers.

Mastodon shows three timelines. Home is people you follow. Local is everyone on your server (a great way to discover). Federated is everyone your server has ever seen a post from — it's firehose-like and overwhelming to most new users, safe to ignore at first.

The official Mastodon app is fine, but many people prefer third-party apps for iPhone like Ivory (from the Tweetbot makers) or Mona. Both polish the experience significantly.`,
    steps: [
      {
        title: `Pick a server`,
        content: `Visit joinmastodon.org and click Create Account. Browse servers by topic — general (mastodon.social, mastodon.world), tech (hachyderm.io), art (mastodon.art), or journalism (journa.host). The server choice matters less than it seems, because you can follow people on any server. When unsure, pick mastodon.social.`,
      },
      {
        title: `Create your account`,
        content: `Click Sign Up on your chosen server. Some servers auto-approve; others review applications within a day. You'll pick a username, set a password, and confirm by email. Your full handle is @username@servername and that's how people find you.`,
      },
      {
        title: `Set up your profile`,
        content: `Add a profile photo, header image, display name, and a short bio. Mastodon also lets you add up to 4 "profile fields" — nice for linking your website, LinkedIn, or other social profiles. Consider turning on the Discoverable toggle so search can find you.`,
      },
      {
        title: `Find people to follow`,
        content: `Mastodon doesn't have "suggested follows" like Twitter. Use the search bar to look up names or hashtags. Check out Starter Packs on starterpacks.fedi.tips. Browse the Local timeline of your server to see who's posting. If you had a Twitter or Bluesky, use Movetodon.org to find the same people on Mastodon.`,
      },
      {
        title: `Learn Content Warnings and the three timelines`,
        content: `Home shows people you follow (chronological, no algorithm). Local shows your server. Federated shows everything your server has seen. Content Warnings (CWs) are widely used on Mastodon — when composing a post, tap CW to add a short warning like "Politics" so people can choose whether to expand. Using CWs thoughtfully is considered good etiquette.`,
      },
    ],
    tip: `Quick Tip — If you pick a server and dislike it, Mastodon has a built-in Move Account feature. Your followers come with you automatically, so the first server choice is not permanent.`,
  },
  {
    slug: `tiktok-live-streaming-guide`,
    title: `How to Go Live on TikTok`,
    excerpt: `Broadcast live video to your TikTok audience, receive virtual gifts, and moderate comments. Requirements, setup, and safety tips.`,
    category: `social-media`,
    tags: [`TikTok Live`, `live streaming`, `TikTok`, `social media`],
    readTime: `7 min`,
    thumbnailEmoji: `📹`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `TikTok Live lets you broadcast real-time video to your followers and anyone else who happens to find the broadcast. Live streams show up at the top of the For You feed for interested viewers, and you can talk with them through live comments. The format is excellent for Q&As, crafting demos, cooking, gaming reactions, performances, or talking through an event as it happens.

Before you can go live, you need to meet two requirements. You must be at least 18 years old, and you must have 1,000 or more followers on your account. (TikTok may have some regional exceptions, but the 1,000-follower minimum is consistent for most US users.) These rules protect against spam and help make sure creators have an actual audience before the live button appears.

Once you qualify, the button is at the bottom of the screen. Tap the plus to create, then swipe across the capture modes until you see LIVE. You'll be prompted to set a title ("Friday night Q&A — ask me anything about gardening"), upload a cover image, and choose settings like whether comments are open, whether the broadcast is public, and whether you want to invite another user to co-host.

During the live, you'll see floating comments, heart animations when people tap the screen, and virtual gifts if viewers send them. Gifts are small animations that viewers buy with TikTok Coins; they convert to real money for the creator. You can invite up to three moderators (trusted viewers) to delete spam comments and ban problem accounts, which is essential on a larger broadcast.`,
    steps: [
      {
        title: `Confirm you meet the requirements`,
        content: `Open TikTok and check your follower count on your profile — you need 1,000 or more followers to unlock Live. You also need to be 18 or older. If you qualify, the LIVE option will appear in the camera's capture mode swiper. If not, focus on posting regular content first to reach 1,000 followers.`,
      },
      {
        title: `Open the Live composer`,
        content: `Tap the plus icon at the bottom center of TikTok. Swipe the mode selector at the bottom until you reach LIVE. Type a clear title — specific titles get more viewers than vague ones. Tap the cover image to upload a photo (TikTok will also offer to take one now). Choose any filters or effects you want.`,
      },
      {
        title: `Start the broadcast`,
        content: `Tap Go LIVE. You'll see yourself on camera and viewers start to join. A floating bubble shows live comments. Your follower count, likes (tap animations), and viewer count appear at the top. Talk to viewers naturally, greet people by their usernames, and respond to questions in comments.`,
      },
      {
        title: `Invite moderators and block troublemakers`,
        content: `Tap the Settings gear during the live, then Moderators, then Add — pick 1 to 3 trusted viewers. They can delete bad comments and mute users. You can also directly tap any viewer's comment to mute, kick, or block them without breaking the flow of the stream.`,
      },
      {
        title: `Receive gifts and end the stream`,
        content: `If viewers send gifts, they appear as animations on screen. You can see a summary after the stream ends. When you're ready to stop, tap the X in the top right corner and confirm. TikTok gives you an analytics summary — total viewers, new followers gained, gift value, and duration.`,
      },
    ],
    warning: `Never share personal information during a live stream — your home, license plate, workplace, school, kids' names. Lives are often recorded by viewers, and details you let slip cannot be taken back.`,
  },
  {
    slug: `ai-grocery-meal-plan`,
    title: `Plan Your Weekly Meals and Groceries with AI`,
    excerpt: `Use ChatGPT, Claude, or Gemini to plan a week of dinners that fits your budget, diet, and pantry — then generate a shopping list in seconds.`,
    category: `ai-guides`,
    tags: [`AI`, `meal planning`, `grocery list`, `ChatGPT`, `cooking`],
    readTime: `7 min`,
    thumbnailEmoji: `🛒`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Meal planning is one of those chores that most households never quite master. You walk into the grocery store without a list, buy random things, and three days later you're staring into the fridge with nothing that makes a meal. AI assistants — ChatGPT, Claude, and Google Gemini all work well here — turn this whole process into a 5-minute conversation.

The core trick is giving the AI enough information up front that it produces a useful plan on the first try. Good prompts include the number of people you're feeding, rough budget, dietary restrictions (vegetarian, low-sodium, gluten-free, diabetic-friendly), any allergies, how many meals per week you want (many households only need 4 to 5 weeknight dinners because of leftovers and eating out), cuisine preferences, and a sense of cooking skill level.

A useful starter prompt looks like this: "Plan 5 dinners for a family of 4 this week. Budget around $150 in groceries. One person is vegetarian, no shellfish allergies. We like Italian, Mexican, and Asian flavors. Weeknight dinners should take 30 minutes or less except Saturday, when I can cook for longer."

Once you have the plan, ask for a consolidated shopping list. The AI will combine ingredients across meals so you're not buying three separate half-onions. Ask it to group the list by store section (produce, dairy, pantry, meat) which matches how most grocery stores are laid out.

Two honest cautions. AI can sometimes suggest recipes with imprecise cooking times — verify with a real recipe site for anything unfamiliar. And AI doesn't know what's in your pantry, so tell it up front ("I already have rice, pasta, olive oil, canned tomatoes") so it doesn't put those on the list.`,
    steps: [
      {
        title: `Write a good starter prompt`,
        content: `Include family size, rough grocery budget, any dietary needs or allergies, number of dinners you want (most people need 4-5, not 7), cuisines you enjoy, and a target weeknight cooking time. The more specific the prompt, the better the plan. Example: "5 dinners for 2 adults, $100 budget, no red meat, Mediterranean and Asian preferred, 30 minutes or less on weeknights."`,
      },
      {
        title: `Review and refine`,
        content: `Read the proposed meals. If something doesn't fit — a recipe is too complicated, the family doesn't like something, or you already made it last week — tell the AI and ask for a replacement. Say "Swap Thursday for something using ground turkey" or "Replace the fish dish with a pasta."`,
      },
      {
        title: `Generate a consolidated shopping list`,
        content: `Ask: "Give me a complete shopping list grouped by grocery store section (produce, dairy, meat, pantry, frozen). Combine ingredients across recipes so I'm not buying duplicates. Skip these items I already have: [list what's in your pantry]."`,
      },
      {
        title: `Ask for side dishes and a cooking schedule`,
        content: `Ask the AI to suggest quick side dishes for each main. Then ask for a prep schedule — for example, "What can I prep on Sunday to make weeknight cooking faster?" Many AI assistants will suggest prepping grains, chopping vegetables, or marinating proteins ahead.`,
      },
      {
        title: `Save the list to your phone`,
        content: `Copy the shopping list into your phone's Notes app, iPhone Reminders, or a dedicated grocery app like AnyList. If your AI tool supports it, ask for the list in check-off format so you can tap items as you shop. Share the list with whoever in the household is going to the store.`,
      },
    ],
    tip: `Quick Tip — Save your best prompt as a template in your notes. Next week, paste it back in and change only the constraints that are different. Meal planning becomes a 2-minute task instead of 30 minutes.`,
  },
  {
    slug: `ai-greeting-card-maker`,
    title: `Write Heartfelt Greeting Cards and Notes with AI`,
    excerpt: `AI can help you write a birthday card, thank-you note, or sympathy message that actually sounds like you — here's how to prompt it the right way.`,
    category: `ai-guides`,
    tags: [`AI`, `greeting cards`, `writing`, `birthday`, `thank you note`],
    readTime: `6 min`,
    thumbnailEmoji: `💌`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `If you've ever sat with a blank birthday card for 10 minutes unsure what to write, you're not alone. AI assistants are genuinely good at this task — they can generate warm, personal, non-generic messages as long as you give them real details to work with. The key word is "real." Generic prompts produce generic messages. Specific prompts produce something that could only have been written for the person receiving it.

A weak prompt looks like this: "Write a birthday card for my mom." An AI will return something like "Happy birthday, Mom! I hope your day is filled with love and joy." That's fine, but it could be for anyone's mom. The same card for $4 at the drug store.

A strong prompt looks like this: "Write a birthday card for my mom, Linda, who is turning 70. She's been a retired schoolteacher for 5 years and spends most of her time now gardening and reading mysteries. Her favorite memory we share is the summer we drove to the Grand Canyon when I was 12. Tone should be warm and sentimental, not funny. Keep it to about 80 words." Now the AI has something to work with. It will reference her teaching, her garden, the road trip — and it will sound like you because the specifics came from you.

The same approach works for thank-you notes (mention what the gift was and how you'll use it), sympathy notes (share a memory of the person who passed), congratulations (name the specific accomplishment), and anniversary messages (include a small detail from the relationship). For digital greeting cards, tools like Microsoft Designer and DALL-E can generate a matching image.`,
    steps: [
      {
        title: `Pick your AI and open a new chat`,
        content: `Any of ChatGPT, Claude, or Google Gemini work well for card writing. Open a fresh chat so the AI isn't influenced by previous conversations. If you've used the AI before, don't worry — anything you've told it about yourself can actually help with tone.`,
      },
      {
        title: `Include the three essentials`,
        content: `Every good prompt needs: (1) your relationship to the recipient, (2) specific details about them or your shared history, and (3) the tone you want (sentimental, funny, formal, casual). Example: "Write a 60-word thank-you note to my neighbor Bob who shoveled my driveway after the February storm when I was recovering from surgery. Warm but not over-the-top."`,
      },
      {
        title: `Include a specific memory or detail`,
        content: `This is the single biggest quality improvement. Share one concrete moment — a road trip, a meal you cooked together, something they taught you, a shared inside joke. Tell the AI to weave that detail into the message. This is what keeps the result from sounding AI-generated.`,
      },
      {
        title: `Ask for two or three versions`,
        content: `Say "Give me three different versions, ranging from more sentimental to more lighthearted, so I can pick my favorite." Reading a few versions helps you decide what you actually want to say. You can also mix-and-match a line from one with the closing of another.`,
      },
      {
        title: `Add a matching image for digital cards`,
        content: `If you're sending an email or text card, ask Microsoft Designer or ChatGPT (with DALL-E) for a matching illustration. Prompt example: "A watercolor illustration of a 70-year-old woman reading in a sunny garden with blue hydrangeas." Pair the image with the message in an email or a Canva card.`,
      },
    ],
    tip: `Quick Tip — If the AI's version sounds too formal or "flowery," tell it: "Rewrite this in the way a real person would actually say it out loud. Drop any phrases that sound like a Hallmark card." That one instruction fixes 80 percent of AI-written messages.`,
  },
  {
    slug: `ai-travel-itinerary-plan`,
    title: `Build a Travel Itinerary with AI in Minutes`,
    excerpt: `Let AI plan a day-by-day trip itinerary around your interests and budget — then verify the details before you book anything.`,
    category: `ai-guides`,
    tags: [`AI`, `travel planning`, `itinerary`, `ChatGPT`, `vacation`],
    readTime: `8 min`,
    thumbnailEmoji: `✈️`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Planning a vacation used to mean a stack of guidebooks, a yellow highlighter, and hours on TripAdvisor. AI assistants can produce a reasonable first-draft itinerary in minutes, leaving the richer work of verifying and personalizing for you. The pattern that works best: ask the AI for structure, then verify the specifics yourself before booking anything.

The ingredients of a strong trip prompt are destination, travel dates, group size and ages, interests (museums, hiking, food, architecture, history, nightlife), travel style (budget, mid-range, luxury), and pace (relaxed with long dinners, packed full of activities). Mention any limitations — limited mobility, kids' attention spans, dietary restrictions. The more you share, the better the output.

Example: "Plan a 5-day trip to Rome for a couple in their 60s, moderate walking pace. We love Italian food, history, and art but not crowds. Mid-range budget for hotels. Two nice dinners and three simpler meals per day. Include which neighborhood to stay in."

AI will return a day-by-day itinerary with morning, afternoon, and evening activities, usually with approximate walking times. Ask it to group activities that are near each other geographically — the common flaw in AI itineraries is sending you across town for lunch and back again. Ask for restaurant suggestions that fit dietary needs.

Now the important part: AI hallucinations. AI can confidently invent restaurants that don't exist, list closed museums, or quote incorrect hours. Always verify specific names and addresses on Google Maps or the venue's official website before counting on them. Use the AI for the shape of the trip; use official sources for the bookings.`,
    steps: [
      {
        title: `Write a detailed trip prompt`,
        content: `Include: destination, dates, number of travelers and ages, interests, budget tier, pace, and any limitations (mobility, kids, dietary). Example: "7 days in Portugal — Lisbon 4 days then Porto 3 — for 2 adults in their 50s. Moderate walking, love food, wine, architecture. Mid-range budget. 1 relaxed day at start."`,
      },
      {
        title: `Review and iterate`,
        content: `Read the day-by-day plan. If day 3 looks too packed, ask "Make day 3 more relaxed — maybe one morning activity and a slow afternoon." If an activity doesn't interest you, ask for a swap. Iterate 2 to 4 times to get a plan that feels right.`,
      },
      {
        title: `Ask the AI to group activities geographically`,
        content: `Prompt: "For each day, group activities that are in the same neighborhood so we're not backtracking across the city. List approximate walking times between stops." This one step prevents the common AI flaw of zigzag routes.`,
      },
      {
        title: `Get restaurant and hotel suggestions`,
        content: `Ask for restaurant suggestions per meal with dietary needs included. Ask which neighborhood to book a hotel in based on your plan — near the metro, walking distance to the main sights, and so on. The AI can list 4 to 6 hotels per price tier.`,
      },
      {
        title: `Verify everything before booking`,
        content: `Copy each restaurant, museum, and attraction name into Google Maps to confirm it exists, check the current hours, and read recent reviews. Book hotels through a verified source (hotel's own site, Booking.com). Make restaurant reservations directly. AI is for shaping the trip, not for booking it.`,
      },
    ],
    warning: `AI tools sometimes invent specific restaurants, tour operators, or small museums that don't actually exist. Before you walk to a restaurant, verify the name and address in Google Maps. Trust the shape of the plan, not the specific names.`,
  },
  {
    slug: `ai-resume-cover-letter`,
    title: `Improve Your Resume and Write Cover Letters with AI`,
    excerpt: `Use AI to tighten resume bullets, tailor to a job description, and draft a cover letter — without letting it invent qualifications you don't have.`,
    category: `ai-guides`,
    tags: [`AI`, `resume`, `cover letter`, `job search`, `ChatGPT`],
    readTime: `9 min`,
    thumbnailEmoji: `📄`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `AI is one of the best tools for job applications in years, but using it well takes a little discipline. The wrong way is to paste a job posting and ask it to write you a resume and cover letter. The right way is to paste your real resume and a real job description, and ask it to help you tighten and tailor what you already have. The difference is the difference between a strong application and one that gets you rejected when the interviewer notices the resume doesn't match the person.

For resume work, AI is excellent at three specific tasks. First, rewriting weak bullet points into strong ones ("Responsible for team meetings" becomes "Led weekly cross-functional meetings for a team of 8, improving delivery predictability by 20 percent"). Second, tailoring the language of your bullets to the job description so keywords line up — most employers run resumes through an ATS (applicant tracking system) that scans for skill keywords. Third, formatting checks — making sure your dates, headers, and lengths are consistent.

For cover letters, AI can produce a solid first draft in 30 seconds if you give it your resume and the job posting. The draft will be bland on purpose — your job is to personalize it with why you want this specific company, a story about relevant experience, and your genuine voice. Ten minutes of rewriting the draft is far faster than starting from scratch.

The one absolute rule: never let AI invent qualifications. If it writes that you "led a team of 12" and you led a team of 3, correct it. If it claims you have Python experience and you don't, cut that line. Embellishment is bad ethics and the first question in the interview will catch you.`,
    steps: [
      {
        title: `Paste your resume and the job description`,
        content: `Open ChatGPT, Claude, or Gemini. Paste your current resume (or type "Here is my resume:" and paste the text). Then paste the full job description. Ask: "Compare my resume to this job description. Which of my bullet points most closely match the job's top requirements? Which skills mentioned in the job are missing or weak in my resume?"`,
      },
      {
        title: `Strengthen weak bullet points`,
        content: `Pick the 5 to 8 weakest bullets on your resume and feed them in one at a time. Prompt: "Rewrite this bullet to start with a strong action verb, quantify the result if possible, and use vocabulary that matches this job description [paste]. Here's the bullet: [paste]." Do not accept any rewrite that invents a number you don't actually have.`,
      },
      {
        title: `Run an ATS keyword check`,
        content: `Ask: "List the top 15 keywords from this job description. Then tell me which keywords appear in my resume and which are missing. For the missing ones, suggest natural places to work them into my existing experience — without inventing anything I haven't done."`,
      },
      {
        title: `Draft the cover letter`,
        content: `Prompt: "Write a 3-paragraph cover letter for this role. Paragraph 1: why I'm interested in this specific company [I'll give you a sentence about that]. Paragraph 2: two specific examples from my resume that match the job's requirements. Paragraph 3: a short confident closing. Tone: professional but not stiff."`,
      },
      {
        title: `Personalize and proofread`,
        content: `Read the draft out loud. Replace any generic phrase ("I'm excited to apply") with something real. Add one concrete detail about why you want this particular company — a product you admire, a mission that resonates, a team you've heard speak. Finally, paste the final letter back into AI and ask for a proofread to catch typos or awkward phrasing.`,
      },
    ],
    warning: `Never let AI invent metrics, job titles, team sizes, or skills you don't actually have. Interviewers ask about claims on your resume, and a fabrication that looks good on paper will end the conversation in the first five minutes.`,
  },
  {
    slug: `ai-bedtime-story-kids`,
    title: `Generate Bedtime Stories for Kids Using AI`,
    excerpt: `Make a custom bedtime story starring your child in minutes — with a calming tone, an age-appropriate length, and even a matching illustration.`,
    category: `ai-guides`,
    tags: [`AI`, `bedtime story`, `kids`, `ChatGPT`, `storytelling`],
    readTime: `6 min`,
    thumbnailEmoji: `🌙`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `AI bedtime stories are a small thing that make a big difference at the end of a long day. You can have a personalized 5-minute story ready in under a minute, starring your child as the main character, themed around their current favorite animal or topic, and ending with a gentle lesson if you want one. The kids love that the story is about them; parents love that bedtime doesn't require reading the same dinosaur book for the 400th night in a row.

A good bedtime story prompt includes the child's first name, age (so the vocabulary and attention span match), a theme or setting they love (pirates, octopuses, unicorns, trains, space), optional supporting characters (a sibling, a pet, a stuffed animal), a target length (5 minutes is about 500 to 700 words), and the mood you want — calming is usually the goal at bedtime, not thrilling.

A strong prompt example: "Write a calming 5-minute bedtime story for my 4-year-old named Emma who loves sea creatures. The main character is Emma, and she meets a friendly octopus who learns about sharing with underwater friends. Gentle, soothing tone. End with Emma feeling sleepy and safe at home."

You can build a whole series with recurring characters — "the Emma and the Friendly Octopus books" — by saving the opening paragraph describing Emma and her world and reusing it each night. If you want illustrations, Microsoft Designer or ChatGPT (with DALL-E) can generate a watercolor cover for each story.

A safety note worth flagging: avoid sharing more than a child's first name with the AI. Don't include their last name, school, street, or identifying photos. First names only keeps the experience personal while staying private.`,
    steps: [
      {
        title: `Write the prompt with key ingredients`,
        content: `Include: child's first name, age, a favorite theme or animal, optional supporting characters (a sibling, a pet), target length ("about 500 words" or "5 minutes read aloud"), and mood ("calming," "gentle"). Optional: a simple moral lesson like sharing, kindness, bravery, or going to bed when it's time.`,
      },
      {
        title: `Request specific style details`,
        content: `Add these to your prompt to improve quality: "Use simple sentences a 4-year-old can follow. Include a little bit of sensory detail — what things look, sound, or feel like. Repeat a calming phrase two or three times through the story (like a gentle refrain). End with the character feeling safe and sleepy."`,
      },
      {
        title: `Read it once and adjust`,
        content: `Read the story silently first. If anything is too stimulating for bedtime (a villain, a loud chase), ask AI to "Replace the scary part with something gentler — the character meets a sleepy friend instead of a monster." Keep stories low-energy before sleep.`,
      },
      {
        title: `Optional — build a recurring series`,
        content: `Save the opening paragraph that describes your child's character and world. Next night, paste it back in and say "Continue Emma's adventures. Tonight she visits a coral reef." Over a few weeks you'll build up a small personal library — kids love familiar recurring worlds.`,
      },
      {
        title: `Optional — create a matching illustration`,
        content: `Paste the story's first paragraph into Microsoft Designer or ChatGPT's image feature and ask for "a soft watercolor illustration of Emma and a friendly purple octopus in a coral reef at sunset." Save images to your phone's photos and show them on the phone screen while reading, or print a few and staple them into a homemade book.`,
      },
    ],
    warning: `Only share the child's first name with the AI — never last name, school, home address, birthday, or identifying photos. AI prompts may be stored and reviewed, so keep personal details minimal.`,
  },
  {
    slug: `public-wifi-safe-use-guide`,
    title: `How to Use Public WiFi Safely (and When Not to)`,
    excerpt: `Public WiFi in cafes, hotels, and airports is convenient but not safe for everything. Here's what's actually risky — and how to protect yourself.`,
    category: `online-privacy`,
    tags: [`public wifi`, `cafe wifi`, `hotel wifi`, `VPN`, `safety`],
    readTime: `7 min`,
    thumbnailEmoji: `☕`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Public WiFi has a mixed reputation that's mostly fair. A decade ago, public WiFi was genuinely dangerous — anyone sitting in the same cafe could easily read the web pages you were browsing and capture your passwords. Today, thanks to the widespread adoption of HTTPS (the lock icon in your browser's address bar), most traffic is encrypted between your device and the website you're visiting, even on public networks.

That said, public WiFi is still not as safe as your home network, and certain risks remain. An attacker on the same network can still see which websites you're visiting (the domain name), even if they can't see the page contents. Some older websites and apps don't use HTTPS properly. Fake WiFi networks that look legitimate ("FreeAirportWiFi") can be set up by attackers to trick users into connecting. And on Windows or macOS, if you have file sharing turned on for a home network and accidentally connect with that profile on a public network, your files can be exposed.

The practical rules are reasonable: avoid logging into your bank, filing taxes, or entering credit card information on public WiFi unless you have a trusted VPN (virtual private network). Browsing news, reading email, watching videos, and general web browsing on public WiFi is fine for most people. If you need to do sensitive work on the go, using your phone's mobile hotspot (also called tethering) is usually safer than any public WiFi. Your phone creates its own cellular-backed network that others on the cafe WiFi can't see.

A trusted VPN — NordVPN, Mullvad, Proton VPN are commonly recommended — encrypts all your traffic before it leaves your device. Avoid free VPNs; they often sell your browsing data to make money.`,
    steps: [
      {
        title: `Check it's the real network`,
        content: `Before connecting, ask a staff member what the official network name is. Attackers commonly set up fake networks with names like "Starbucks_Free" or "Airport_Public" near legitimate hotspots. Connecting to the wrong one lets them see more of your traffic than your device would normally expose.`,
      },
      {
        title: `Turn off auto-connect to unknown networks`,
        content: `On iPhone: Settings → WiFi → turn off Auto-Join for public networks. On Android: Settings → Network → WiFi preferences → turn off Connect to open networks. This prevents your phone from silently joining a fake network as you walk by.`,
      },
      {
        title: `Save sensitive tasks for home or cellular`,
        content: `Don't do banking, tax filing, medical portal visits, or shopping with a saved credit card on public WiFi. Wait until you're on your home network, or use your phone's cellular data by turning off WiFi on your phone. Cellular data is private by design.`,
      },
      {
        title: `Use a trusted VPN if you travel often`,
        content: `If you use public WiFi regularly (business travel, digital nomad life), pay for a reputable VPN: NordVPN, Mullvad, or Proton VPN are widely trusted. Install the app, connect before using public WiFi, and all your traffic is encrypted in a tunnel the cafe can't see into. Avoid free VPNs.`,
      },
      {
        title: `Turn off file sharing and printer sharing`,
        content: `On Mac: System Settings → General → Sharing → turn off File Sharing, Screen Sharing, Printer Sharing. On Windows: Settings → Network → Public network profile → turn off Network Discovery and File Sharing. If you connected to public WiFi with a "Home" or "Private" profile by mistake, switch it to "Public" immediately.`,
      },
    ],
    tip: `Quick Tip — Your phone's personal hotspot is the safest public internet option of all. Turn it on in Settings → Personal Hotspot (iPhone) or Settings → Connections → Mobile Hotspot (Android), then join that from your laptop. Now you're on your cellular connection, invisible to the cafe network.`,
  },
  {
    slug: `social-media-privacy-checkup`,
    title: `Run a Privacy Checkup on Facebook, Instagram, LinkedIn, and X`,
    excerpt: `Spend 30 minutes reviewing what's public on your social accounts. Most people are surprised by how much has changed since they first signed up.`,
    category: `online-privacy`,
    tags: [`privacy`, `Facebook`, `Instagram`, `LinkedIn`, `social media audit`],
    readTime: `9 min`,
    thumbnailEmoji: `🕶️`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Most people set up their social media accounts 5 to 15 years ago and haven't looked at the privacy settings since. In that time, each platform has added dozens of new settings and defaulted many of them to "public" or "everyone." Running a privacy checkup across your main accounts once a year catches all the small leaks and gives you clearer sense of what strangers can see about you.

Facebook has by far the most settings, and also the best guided tool for reviewing them. Open the menu and search for "Privacy Checkup." It walks you through a 5-step wizard covering who can see your posts, how people find you, your data settings, ad preferences, and how to secure your account. The wizard surfaces things most people never notice, like old tagged photos you forgot about.

Instagram is simpler — most of the important choice is whether your account is Public (anyone can see your posts) or Private (only followers you approve). For many users, switching to Private is the single biggest privacy improvement. Beyond that, check Story controls to limit who can see and share Stories, and check the tagging and mention controls.

LinkedIn is trickier because it's professional — you probably want a fair amount public. But check Profile Visibility (decide if your profile appears in search engine results), Connections Visibility (many people prefer hiding their connections list), and Activity Broadcasts (turn off when you're job hunting).

X (Twitter) lets you make all your posts Protected, meaning only approved followers see them. Review whether your direct messages are open to everyone. And on every platform, audit third-party apps you connected in the past — old Zynga games, quizzes, and long-dead apps often still have permission to read your data.`,
    steps: [
      {
        title: `Facebook Privacy Checkup`,
        content: `Open Facebook → tap your profile icon → Settings & Privacy → Privacy Checkup. Work through all 5 steps: Who Can See What You Share, How to Keep Your Account Secure, How People Can Find You, Your Data Settings, and Your Ad Preferences. Also open Activity Log and audit old posts and tagged photos — set anything you'd regret to Friends Only or remove the tag.`,
      },
      {
        title: `Instagram privacy settings`,
        content: `Open Instagram → Profile → the three-line menu → Settings and Privacy → Account Privacy. Decide Public or Private. Also check: Story controls (who can reply, who can share), Messages and Story Replies (limit to people you follow), Tags and Mentions (approve tags manually), and Close Friends list (useful for limiting Stories to family only).`,
      },
      {
        title: `LinkedIn visibility review`,
        content: `Open LinkedIn → Me → Settings & Privacy → Visibility tab. Turn off Public Profile Visibility Off-LinkedIn if you don't want search engines showing your profile. Decide whether Connections See Your Connections (many professionals prefer hiding this). Turn off Activity Broadcasts when job searching so employer profile views and updates don't notify your network.`,
      },
      {
        title: `X (Twitter) privacy and DMs`,
        content: `Open X → Settings → Privacy and Safety → Audience and Tagging. Decide whether to Protect your posts (only followers see them) or stay public. Under Direct Messages, consider setting Message Requests to "People you follow" so strangers can't DM you. Also review Connected Accounts and remove anything you no longer use.`,
      },
      {
        title: `Audit third-party app access on every platform`,
        content: `On each platform, find the "Apps and Websites" or "Connected Apps" section. Facebook: Settings → Apps and Websites. Google/Gmail: myaccount.google.com → Security → Third-Party Access. Instagram: Settings → Apps and Websites. Remove any app you don't recognize, haven't used in the past year, or never used — even if you played that old quiz game once in 2015, it may still read your data.`,
      },
    ],
    tip: `Quick Tip — Set a yearly calendar reminder on your birthday to run this checkup. Platforms add new settings constantly, and once-a-year is plenty to catch the drift.`,
  },
  {
    slug: `delete-old-accounts-guide`,
    title: `How to Find and Delete Old Online Accounts You Don't Use`,
    excerpt: `Every old account is a potential data breach waiting to happen. Here's how to hunt them down and close them properly.`,
    category: `online-privacy`,
    tags: [`delete accounts`, `old accounts`, `privacy`, `JustDeleteMe`, `account cleanup`],
    readTime: `9 min`,
    thumbnailEmoji: `🗑️`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `The average adult in the United States has dozens of online accounts they no longer use — an old Yahoo email, a MySpace profile, an account at a store that closed years ago, a forum they posted on in 2012, a free trial they forgot to cancel. Every one of those accounts holds some amount of your personal data (email, password, maybe address or phone number), and every one of them is a potential weak link if that company gets breached.

Breaches are frighteningly common. The websites Have I Been Pwned (haveibeenpwned.com) and Mozilla Monitor (monitor.mozilla.org) let you enter your email and see every known breach your address has appeared in. For many people, the list is 10 to 40 entries long. Closing old accounts removes your data from future breach lists.

Finding the accounts is the real work. Three techniques find about 95 percent of them. First, search your email inbox for the words "welcome," "verify your account," and "confirm your email." Every account creation sent at least one of those messages, and the messages are usually still in your Inbox or Archive. Second, open your password manager (if you use one) and scroll through — you'll see logins you haven't touched in years. Third, Google your own name, email address, and old usernames — sometimes you'll find public profiles you didn't know still existed.

Once you've found an account, the site JustDeleteMe.xyz is your friend. It's a crowd-sourced directory of account deletion links for over 700 websites, rated from "Easy" (one click) to "Impossible" (cannot be deleted). For US residents, CCPA gives you a legal right to request deletion at many companies; EU residents have the same right via GDPR. Both laws apply to companies that do business in their respective regions.`,
    steps: [
      {
        title: `Check breach history`,
        content: `Go to haveibeenpwned.com and enter each email address you use. The site shows every known breach involving that email — often 10 or more per address. Each entry confirms a specific old account is out there leaking your data. Keep this list as your deletion target.`,
      },
      {
        title: `Search your email for old sign-ups`,
        content: `Open your main email (Gmail, Outlook, Yahoo) and search for: "welcome" OR "verify your account" OR "confirm your email." Scroll through the results — each result is an account you created. Make a list (spreadsheet or notes app) of every service you no longer use.`,
      },
      {
        title: `Mine your password manager and browser saved passwords`,
        content: `If you use a password manager (1Password, Bitwarden, LastPass, iCloud Keychain, Chrome saved passwords), open its full list. You may have 200+ entries. Sort by Date Added or Last Used. Anything you haven't touched in 2+ years is a candidate for deletion.`,
      },
      {
        title: `Use JustDeleteMe to find the right delete page`,
        content: `Go to justdeleteme.xyz. Search for the company name. It'll give you a direct link to that company's account deletion page, plus a difficulty rating. Many companies hide the delete option deep in settings — JustDeleteMe saves you 20 minutes of hunting each time.`,
      },
      {
        title: `For stubborn sites, use the GDPR/CCPA request`,
        content: `If a site has no visible delete option, email their privacy team (usually privacy@company.com). Say: "I am a [US/EU] resident and under [CCPA / GDPR] I am requesting deletion of my account and all personal data associated with it. Account email: [your email]. Please confirm deletion within 30 days." Most companies comply because the legal penalty for not complying is significant.`,
      },
    ],
    warning: `Before deleting your primary email account, make sure no active accounts still rely on it for password resets. Move important accounts to a new email first, then give it a few months to catch any loose ends before closing the old email.`,
  },
  {
    slug: `5g-vs-wifi-explained`,
    title: `5G vs WiFi — When Each One Is Faster`,
    excerpt: `5G and WiFi are both wireless internet, but they work in completely different ways. Here's when each one is your best option.`,
    category: `tech-explained`,
    tags: [`5G`, `WiFi`, `internet speed`, `mobile data`, `tech explained`],
    readTime: `7 min`,
    thumbnailEmoji: `📶`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `5G and WiFi are both wireless ways to connect to the internet, but they work through different systems and are fast in different situations. Understanding the difference helps you know when to use your cellular data, when to rely on home WiFi, and whether upgrading one or the other is worth it.

WiFi is short-range wireless that comes from a router inside a building. Your home router, the one at a cafe, the one at a hotel — they all connect to the internet through a wired connection (fiber, cable, or DSL) and broadcast that connection over WiFi radio signals across maybe 100 feet indoors. The newest versions of WiFi — WiFi 6, WiFi 6E, and WiFi 7 — can deliver speeds of 1 Gbps or faster when the underlying wired connection supports it. Older routers (WiFi 4 or early WiFi 5) often cap at 100 to 300 Mbps regardless of your internet plan.

5G is cellular, meaning it comes from cell towers operated by Verizon, T-Mobile, AT&T, and others, and reaches you through your phone's SIM card. 5G has two flavors: sub-6GHz 5G covers most of the country and typically delivers 100 to 400 Mbps; mmWave 5G is the super-fast flavor (1+ Gbps) but has a very short range (often just downtown blocks of major cities). Your phone chooses automatically.

When does 5G beat home WiFi? If your home router is old and your cellular service is strong, 5G may be faster. T-Mobile and Verizon sell 5G home internet (a cellular router that stays in your house) as a replacement for cable or fiber for $50 to $70 per month — often competitive in suburbs with weak cable service.

Watch for data caps. Your home WiFi plan usually has no cap (or a very high one). Your phone plan often has a high-speed data cap after which speeds throttle. Don't stream 4K Netflix all month on a 15GB phone plan.`,
    steps: [
      {
        title: `Check your current speeds on both`,
        content: `On WiFi, visit fast.com or speedtest.net and run a speed test. Then turn off WiFi on your phone and run the same test on cellular. Write down both numbers. Most people are surprised — sometimes cellular is faster, sometimes WiFi is. It depends on your router age, your plan, and your carrier's coverage at that specific location.`,
      },
      {
        title: `Know what your home WiFi generation is`,
        content: `Log into your router's admin page (usually 192.168.1.1 or 192.168.0.1). Look for the WiFi standard it supports: WiFi 4 (2009), WiFi 5 (2013), WiFi 6 (2019), WiFi 6E (2020), WiFi 7 (2024). Anything before WiFi 6 is aging and may be the bottleneck even on a fast internet plan.`,
      },
      {
        title: `Know what your cellular plan's 5G cap is`,
        content: `Check your carrier's app or the plan details in your account. Most unlimited plans have a "high-speed data" cap like 15GB, 50GB, or 100GB per month, after which speeds slow down significantly. This matters if you're considering using 5G as a primary home internet source.`,
      },
      {
        title: `Consider 5G home internet if your options are limited`,
        content: `If you live somewhere with only slow DSL or overpriced cable, check whether T-Mobile Home Internet or Verizon 5G Home Internet is available at your address (their websites have checkers). Both are $50 to $70 per month, no annual contract, and often faster than local cable for rural and suburban homes.`,
      },
      {
        title: `Use tethering when you need speed away from home`,
        content: `When you're at a cafe or hotel with slow WiFi, turn on your phone's Personal Hotspot (iPhone: Settings → Personal Hotspot; Android: Settings → Connections → Mobile Hotspot). Connect your laptop to the phone's hotspot. You're now on your phone's 5G, which is often 3 to 10 times faster than hotel WiFi.`,
      },
    ],
  },
  {
    slug: `qr-code-safety-guide`,
    title: `QR Codes — How They Work and How to Stay Safe`,
    excerpt: `QR codes are everywhere now — on menus, parking meters, and flyers. Here's what they actually are, and how to avoid the scam versions called "quishing."`,
    category: `tech-explained`,
    tags: [`QR code`, `scan code`, `safety`, `phishing`, `tech explained`],
    readTime: `6 min`,
    thumbnailEmoji: `🔲`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `A QR code — the black-and-white square you scan with your phone — is nothing more than a 2D barcode. It stores a bit of text, usually a web address, in a pattern a camera can read quickly. When your phone's camera looks at one, it decodes the text and offers to open the web page. QR codes went from obscure to universal during 2020, when restaurants swapped paper menus for codes to reduce shared surfaces, and the habit stuck.

Modern phones (any iPhone in the past 8 years, most Android phones in the past 5) scan QR codes automatically through the regular camera app — you don't need a separate scanner app. Just open the camera, point it at the QR code, and a notification pops up asking if you want to open the encoded link.

The scam version is called "quishing" — QR code phishing. Scammers print fake QR codes and place them over real ones on parking meters, gas pumps, bike-share docks, restaurant menus, and public posters. You scan expecting to pay for parking or view a menu; instead the link goes to a fake payment page that captures your credit card, or to a page that quietly installs malware on your phone. In 2023 the FTC and FBI both issued warnings about quishing scams specifically targeting parking meters in cities including Austin, Atlanta, and Portland.

The simple defense is to preview the URL before you follow it. When your phone scans a QR code, it shows you the web address in a notification before opening. Read it. If the QR code is on a parking meter and the URL goes to some unfamiliar domain ("quick-park-pay.xyz") instead of the city's official parking site, do not tap. When paying or logging in after a QR scan, it's worth a second look.`,
    steps: [
      {
        title: `Scan with your regular camera app`,
        content: `You do not need a special QR scanner app. On iPhone, open Camera and point at the QR code — a notification slides down with the web link. On Android (Google Pixel, Samsung Galaxy, most others), the Camera app does the same. If yours doesn't, use Google Lens.`,
      },
      {
        title: `Read the URL before you tap it`,
        content: `The notification shows the full web address the QR code leads to. Look at it before you tap. Legitimate parking, menu, and payment QR codes go to recognizable domains — the city's actual parking website, the restaurant's actual domain. Unfamiliar subdomains and short URLs are red flags.`,
      },
      {
        title: `Check physical QR codes for tampering`,
        content: `Scammers stick fake QR codes over real ones, especially on parking meters and gas pumps. Feel the QR code with your finger. If it's a sticker placed over an underlying label, or if the sticker is peeling at the edges, do not scan — report it to the business or city.`,
      },
      {
        title: `Never enter login or payment info after a random QR scan`,
        content: `If a QR code takes you to a page asking for your Apple ID, Google, or bank password, stop. No legitimate service requires a password login from a QR code in public. If it's a legitimate parking meter or menu, it should not ask for a password — it will take a payment through Apple Pay or a card form on a clearly branded site.`,
      },
      {
        title: `Use Apple Pay or Google Pay when paying after a QR scan`,
        content: `Legitimate QR payment flows almost always support Apple Pay or Google Pay. Using them means your real credit card number is never typed into the web page, so even if the site is compromised, your card isn't exposed. If the only option is to type in your card number manually, that's a reason for extra caution.`,
      },
    ],
    warning: `Be especially careful with QR codes in emails, text messages, and paper mail. Scammers send "undelivered package" postcards with QR codes that go to phishing sites, and "your subscription is expired" emails with the same trick. Legitimate companies rarely require QR codes to resolve an account issue.`,
  },
  {
    slug: `2fa-methods-compared`,
    title: `Two-Factor Authentication Methods Compared — SMS vs App vs Hardware Key`,
    excerpt: `Not all two-factor authentication is equal. Here's the ranking from weakest to strongest — and which accounts deserve the strongest.`,
    category: `tech-explained`,
    tags: [`2FA`, `two-factor`, `security`, `Yubikey`, `authenticator`],
    readTime: `9 min`,
    thumbnailEmoji: `🔐`,
    publishedAt: `2026-04-20`,
    difficulty: `Beginner`,
    body: `Two-factor authentication (2FA) means that logging in requires two things: something you know (a password) and something you have (a phone, an app code, or a physical key). 2FA is the single most effective thing most people can do to prevent their accounts from being hacked. But not all 2FA is created equal — the four common methods vary wildly in how secure they actually are.

SMS 2FA is the weakest common form. A 6-digit code is texted to your phone, and you type it in. Better than nothing — but vulnerable to SIM swapping, an attack where a criminal tricks your phone carrier into transferring your number to their SIM card. Once they control your number, they receive your SMS codes. SIM swaps have drained bank accounts and crypto wallets worth millions. Use SMS 2FA only when it's the only option available.

Authenticator app 2FA (Google Authenticator, Authy, Microsoft Authenticator, 1Password) is significantly stronger. The app on your phone generates a 6-digit code that changes every 30 seconds. The code is calculated locally — no one texts it to you, so SIM swaps don't help the attacker. An authenticator app is the right choice for almost every account that offers 2FA.

Push-based 2FA (Apple ID, Duo, Microsoft Authenticator) is similar in strength. When you log in, a notification pops up on your phone asking Approve or Deny. Tap Approve and you're logged in. Very convenient, and secure as long as you actually pay attention to what you're approving — if you get an approval prompt when you weren't trying to log in, tap Deny.

Hardware security keys (YubiKey, Google Titan Key, other FIDO2 keys) are the strongest option available. A physical USB or NFC device you keep on your keychain. Logins require you to physically tap the key. These are phishing-resistant in a way software 2FA is not — even if someone tricks you onto a fake login page, the hardware key refuses to authenticate to the wrong domain. Use hardware keys for your most important accounts: primary email, bank, password manager, retirement accounts.

Passkeys are a newer method — they use your device's biometrics (Face ID, Touch ID, Windows Hello) as the second factor, built on the same phishing-resistant technology as hardware keys. Passkeys are spreading rapidly and will likely replace passwords for most services over the next few years.`,
    steps: [
      {
        title: `Upgrade everything from SMS to an authenticator app`,
        content: `Install a free authenticator app — Microsoft Authenticator, Google Authenticator, 1Password, or Authy. In each important account's 2FA settings, remove SMS and add Authenticator App instead. You'll scan a QR code, and from then on the app generates codes locally on your phone every 30 seconds.`,
      },
      {
        title: `Save your backup/recovery codes`,
        content: `Every time you turn on 2FA, the service gives you 8 to 10 backup codes in case you lose your phone. Print these out and store them in a safe place (fireproof safe, safety deposit box, or a sealed envelope at a relative's house). Also save them in your password manager's secure notes. Without backup codes, losing your phone can lock you out permanently.`,
      },
      {
        title: `Buy a hardware key for high-value accounts`,
        content: `For email, bank, password manager, and retirement accounts, buy two YubiKeys (around $50 each) — one primary, one backup kept in a fireproof safe. Register both keys on each important account. Yubico sells USB-C, USB-A, and NFC versions for different phones and laptops.`,
      },
      {
        title: `Turn on passkeys wherever offered`,
        content: `Many services now offer passkeys as an option — Google, Apple, Microsoft, Amazon, PayPal, many banks. In the security settings, look for Passkeys or Passwordless Sign-In and turn it on. Your device's fingerprint or face becomes your 2FA, and you never type a code again.`,
      },
      {
        title: `Tier your accounts by security level`,
        content: `Mentally sort your accounts: (1) highest-value — primary email, bank, password manager, retirement (hardware key plus authenticator app); (2) important — Amazon, work accounts, social media (authenticator app); (3) low — random shopping sites, forums (any 2FA is fine). Spend your effort where it matters — your primary email is the single most important account because password resets for everything else go there.`,
      },
    ],
    tip: `Quick Tip — Your primary email is the keys to the kingdom. Password resets for every other account go to it. Put the strongest 2FA you can on your email — a hardware key if possible, or a robust authenticator app at minimum.`,
  },
  {
    slug: `read-health-insurance-eob`,
    title: `How to Read Your Health Insurance Explanation of Benefits`,
    excerpt: `Decode the confusing paperwork your insurance company sends after a medical visit — what you owe, what was covered, and what to do if something looks wrong.`,
    category: `health-tech`,
    tags: [`health insurance`, `EOB`, `medical bills`, `insurance`, `seniors`],
    readTime: `7 min`,
    thumbnailEmoji: `🏥`,
    publishedAt: `2026-04-21`,
    difficulty: `Beginner`,
    body: `After you see a doctor or fill a prescription, your health insurance company sends you a document called an Explanation of Benefits, or EOB. Many people mistake this for a bill and panic — or assume it means nothing and throw it away. Neither reaction is right. An EOB is a summary of what happened with your claim: what was submitted, what insurance agreed to pay, and what (if anything) you owe. Understanding it can save you money and help you catch billing errors before they become collection calls.

The top of an EOB identifies you (your name and member ID), the date of service, and which provider submitted the claim. Always confirm these match your actual visit. Wrong member ID or wrong provider is a red flag for fraud.

The middle section breaks down the claim line by line. You'll see a "billed amount" — what the provider charged — followed by an "allowed amount" — the maximum your insurance agreed to pay under their contract with the provider. The difference between billed and allowed is simply written off; you don't owe it. Then the EOB shows how much insurance paid, and how much goes toward your deductible, copay, or coinsurance.

At the bottom you'll see a "your responsibility" total. This is what you may owe the provider. I say "may" because the EOB is not a bill — the provider will send a separate bill. Wait for that bill before paying anything.

Look at the "reason codes" column, usually a series of numbers or letters. Each code explains why a claim was denied or adjusted. Common codes include "service not covered," "out-of-network provider," or "deductible not met." If you get a denial you don't agree with, you have the right to appeal — the EOB must by law explain how to do this.

Keep every EOB for at least one year and match them against provider bills. Billing errors are surprisingly common. If you received a service and there's no corresponding EOB within four to six weeks, call your insurance company.`,
    steps: [
      {
        title: `Find your EOB`,
        content: `EOBs arrive by mail or through your insurance company's member portal online. Log in at your insurer's website (the address is on your insurance card), click Member Portal or MyAccount, and look for Explanation of Benefits or Claims History. You can also call the member services number on your insurance card and ask them to mail you a copy.`,
      },
      {
        title: `Confirm the basics at the top`,
        content: `Check your name, member ID, and date of service. Make sure the provider name matches who you actually saw. If any of these are wrong, call your insurance company immediately — a wrong member ID can mean someone else's claim was filed under your coverage, which is fraud.`,
      },
      {
        title: `Read the allowed amount vs. billed amount`,
        content: `The billed amount is what the provider charged. The allowed amount is the negotiated rate your insurance has with that provider. If you used an in-network provider, the difference between billed and allowed is simply written off — you don't owe it. If the allowed amount equals the billed amount, your provider is out-of-network, which means you may owe more.`,
      },
      {
        title: `Find what insurance paid and what you owe`,
        content: `After the allowed amount, the EOB shows what insurance paid. The remaining balance — labeled something like "member responsibility" or "your cost" — goes toward your deductible, copay, or coinsurance. This is the maximum you'll be asked to pay. Wait for a separate bill from the provider before sending any money.`,
      },
      {
        title: `Check for denial reason codes`,
        content: `If part of the claim was denied, look for a reason code or remark code in the right-hand column. Common ones: CO-4 means the service code didn't match the diagnosis; CO-97 means the service is considered included in another service already paid; OA-23 means the payment is the amount defined by the contract. Each denial code has instructions on whether you can appeal and how.`,
      },
      {
        title: `File an appeal if something seems wrong`,
        content: `If a covered service was denied or your share seems too high, you can appeal. Your EOB must list the appeals process. Gather supporting documents: the EOB, the provider's bill, and any notes from the visit. You typically have 180 days from the denial to file a first-level appeal. If denied again, you can request an external review by an independent organization.`,
      },
    ],
    tip: `Quick Tip — Never pay a medical bill before you receive the matching EOB. The provider bill might show more than you actually owe. Match both documents to make sure the numbers agree.`,
  },
  {
    slug: `bank-text-alerts-setup`,
    title: `How to Set Up Text Alerts from Your Bank`,
    excerpt: `Get a text message any time money moves in or out of your account — the fastest way to catch fraud or an unexpected charge before it becomes a big problem.`,
    category: `safety`,
    tags: [`bank alerts`, `fraud protection`, `online banking`, `text messages`, `security`],
    readTime: `6 min`,
    thumbnailEmoji: `🏦`,
    publishedAt: `2026-04-21`,
    difficulty: `Beginner`,
    body: `Bank text alerts are one of the simplest and most effective fraud-protection tools available — and most banks offer them for free. When you turn them on, your bank sends you a text message any time there is activity on your account: a purchase over a certain dollar amount, a new login from an unknown device, a low balance, a large ATM withdrawal, or any transaction at all. You find out in seconds instead of discovering a problem weeks later when your statement arrives.

Seniors are among the most common targets of bank fraud and identity theft, and catching it early is everything. If someone makes an unauthorized purchase on your debit card and you report it within two business days, federal law limits your liability to $50. Wait more than 60 days and you could be on the hook for the full amount. Text alerts give you the fastest possible notice.

Every major US bank — Chase, Bank of America, Wells Fargo, Citibank, U.S. Bank, Capital One, and most credit unions — offers account alerts through their mobile app or website. The setup takes about five minutes and is done entirely in your account settings.

The most useful alert to turn on first is the transaction alert with a low dollar threshold. Set it to $1 so you're notified of every single purchase. That way, if someone charges even a small test transaction (which fraudsters often do to verify a stolen card before making big purchases), you see it immediately.

Low-balance alerts are also worth setting up. Pick an amount below which you'd want to know — say $200 — and the bank will warn you before you accidentally overdraft. Overdraft fees average $35 per incident at most banks.

Login alerts are the third must-have. Any time someone logs into your online banking from a new browser or device, you get a text. If it wasn't you, you can change your password immediately before any damage is done.`,
    steps: [
      {
        title: `Log in to your bank's website or mobile app`,
        content: `Open your bank's app on your phone or go to your bank's website (the address is printed on your debit card or on the back of your bank statement). Log in with your username and password. If you don't have online banking set up yet, look for a "Register" or "Enroll" button on the login page and follow the steps — you'll need your account number and the last four digits of your Social Security number.`,
      },
      {
        title: `Find Account Alerts or Notifications settings`,
        content: `Once logged in, look for a gear icon (settings), your profile name, or a menu labeled something like "Account Settings," "Preferences," or "Alerts & Notifications." In mobile apps, this is often under the three-line menu in the top corner. The exact location varies by bank, but search for "alerts" in the app's search bar if you can't find it.`,
      },
      {
        title: `Turn on transaction alerts with a $1 threshold`,
        content: `Look for "Transaction Alerts," "Purchase Alerts," or "Debit Card Alerts." Set the threshold to $1.00 — this means you'll get a text for every single transaction. If you'd rather not receive that many messages, set it to $25. Make sure you select "Text Message" or "SMS" as the delivery method (not just email, which you might not check quickly).`,
      },
      {
        title: `Enable low balance warnings`,
        content: `Find "Low Balance Alert" or "Balance Alert." Enter an amount — $100, $200, or whatever feels like a warning sign for you. The bank will send a text when your balance falls below that number. This helps you avoid overdraft fees, which can add up fast.`,
      },
      {
        title: `Turn on login or new device alerts`,
        content: `Look for "Login Alerts," "Security Alerts," or "New Device Alerts." Turning this on means you'll get a text whenever someone logs into your account from a browser or device that hasn't been used before. This is a direct early warning system for account takeover attempts.`,
      },
      {
        title: `Confirm your phone number and save`,
        content: `The alerts go to the mobile number on file with your bank. Verify it is correct on the same settings page — look for "Contact Information" or "Profile." After enabling each alert type, click Save or Confirm. Some banks ask you to confirm by entering a code they text to your phone.`,
      },
    ],
    tip: `Quick Tip — If you ever get a bank alert and you don't recognize the transaction, don't call the phone number in the text. Instead, call the number printed on the back of your debit or credit card, or go directly to your bank's official website.`,
  },
  {
    slug: `package-shows-delivered-missing`,
    title: `What to Do When Your Package Shows Delivered But Wasn't There`,
    excerpt: `Step-by-step guide for tracking down a missing package that the carrier marked as delivered — including how to file a claim and get a replacement or refund.`,
    category: `essential-skills`,
    tags: [`package delivery`, `UPS`, `FedEx`, `USPS`, `Amazon`, `missing package`],
    readTime: `8 min`,
    thumbnailEmoji: `📦`,
    publishedAt: `2026-04-21`,
    difficulty: `Beginner`,
    body: `Few things are more frustrating than watching your tracking app switch to "Delivered" — then going to your door and finding nothing there. This happens more often than you'd think, and in most cases your package isn't stolen; it was left at the wrong address, delivered to a neighbor, or tucked somewhere out of the way. Here is a calm, step-by-step plan for tracking it down.

First, give it a little time. Carriers sometimes update tracking before the driver physically arrives. If it just turned to "Delivered," wait 30 to 60 minutes before starting your search.

Next, look everywhere around your property: front door, back door, side gate, garage, porch chair, between bushes, behind a potted plant. Carriers often tuck packages out of view specifically so they aren't obvious to passersby. Check with any neighbors — drivers sometimes leave packages at a neighbor's door by mistake, especially in apartments, condos, or townhomes where unit numbers can look similar.

If you live in an apartment complex, check the package locker or leasing office. Many buildings now have Amazon Hub lockers or a front desk that signs for deliveries.

If none of that works, open the tracking page and look for a delivery photo. UPS, FedEx, and Amazon now routinely take a photo of where they left the package. That photo might show a neighbor's porch, a building lobby, or even the wrong address.

Once you've done your physical search, it's time to contact the carrier and the retailer. Carriers can file a trace on a package — they contact the driver who made the delivery and try to recover it. This usually happens within 24 to 48 hours. In parallel, contact the retailer (Amazon, Walmart, Target, etc.) directly. Most large retailers will reship or refund a missing package without requiring you to first resolve the carrier investigation.`,
    steps: [
      {
        title: `Wait 30–60 minutes, then search your property`,
        content: `Carriers sometimes scan packages as delivered slightly before they physically arrive. Wait a short while, then check every spot around your home: front door, back door, side entrance, garage, behind planters, under outdoor furniture, and inside any mailbox or package box. Also ask any household members if they brought it inside already.`,
      },
      {
        title: `Check with neighbors and your building`,
        content: `Walk to two or three neighboring addresses — especially any with a similar house or unit number. Ask if they received an extra package. If you live in an apartment, check the leasing office, front desk, mail room, and any automated package lockers (often labeled Amazon Hub, Luxer One, or Package Concierge).`,
      },
      {
        title: `Look for a delivery photo in the tracking app`,
        content: `Open the tracking page for your package. UPS (UPS.com), FedEx (FedEx.com), Amazon (Your Orders), and USPS (USPS.com) often post a photo of where the package was left. The photo might show a different porch, a lobby, or a package locker — which tells you exactly where to look.`,
      },
      {
        title: `Contact the carrier to open a package trace`,
        content: `Call or chat with the carrier: UPS (1-800-742-5877), FedEx (1-800-463-3339), USPS (1-800-275-8777), or your regional carrier. Give them the tracking number and explain the package is missing. They'll open a "package trace" and contact the delivery driver, usually within 1 to 2 business days. Get a trace or case number for your records.`,
      },
      {
        title: `Contact the retailer for a reship or refund`,
        content: `Don't wait for the carrier investigation to conclude. Open Amazon, Walmart, Target, or wherever you ordered from. Go to Your Orders, find the item, and click "Problem with Order" or "Where's My Stuff." Most large retailers will offer a free reship or a full refund for a missing package — often without even requiring you to file a carrier claim first.`,
      },
      {
        title: `File a police report if you suspect theft`,
        content: `If you have video footage showing your package was stolen off the porch, or if multiple packages have gone missing, file a police report with your local non-emergency line (not 911). A police report number can be required by some carriers or insurance companies for larger claim amounts. It also helps local authorities track a pattern of porch theft in your neighborhood.`,
      },
    ],
    tip: `Quick Tip — Most missing packages are found within 48 hours, either at a neighbor's address or signed for at the building office. Before calling anyone, do a full physical search — it saves time and stress.`,
  },
  {
    slug: `fake-customer-service-numbers`,
    title: `How to Spot Fake Customer Service Numbers Online`,
    excerpt: `Scammers pay to put fake phone numbers at the top of search results. Learn how to find the real customer service number for any company — and avoid a costly mistake.`,
    category: `safety`,
    tags: [`scams`, `customer service`, `phone scams`, `online safety`, `fraud`],
    readTime: `6 min`,
    thumbnailEmoji: `📞`,
    publishedAt: `2026-04-21`,
    difficulty: `Beginner`,
    body: `Here is a trick scammers use that has cost people thousands of dollars: they pay for Google ads showing a fake phone number at the top of search results when you type "Amazon customer service" or "Microsoft support number." The ad looks legitimate — it may even show the company's real name and logo. But the number connects you to a scammer posing as a customer service agent.

Once you call, the scammer builds trust, tells you there's a serious problem with your account, and walks you toward sending gift cards, sharing your credit card number, or giving remote access to your computer. By the time you realize something is wrong, money is gone.

This scam is called "tech support fraud," and the FBI reports it costs seniors in the US over $800 million per year. The good news is that avoiding it comes down to one simple habit: never call a phone number you found through a search engine. Instead, always get the number directly from the company's official website — by typing the web address yourself — or from the paperwork that came with the product.

Every major company publishes its real support contact information at the bottom of their official website or on your purchase confirmation email. Amazon support is at amazon.com/help. Apple support is at apple.com/support. Microsoft support is at support.microsoft.com. Google support is at support.google.com. Use those pages, not Google search results.

The same rule applies to phone numbers you see in pop-up messages, emails, or text messages. Legitimate companies do not call or text you out of the blue saying your account has a problem and demanding you call a number right now. That is always a scam.`,
    steps: [
      {
        title: `Never search for a company's phone number in Google`,
        content: `When you need customer support, don't type "Amazon phone number" or "Apple support number" into Google. Scammers buy ads that place fake numbers at the top of these results. Even results that look official — with the company name and logo — may lead to a scammer.`,
      },
      {
        title: `Go directly to the company's official website`,
        content: `Type the company's website address directly into your browser address bar — not the search box. Examples: amazon.com, apple.com, microsoft.com, bestbuy.com. Then find a "Contact Us," "Help," or "Support" link, usually at the bottom of the page. The phone number or chat option listed there is the real one.`,
      },
      {
        title: `Use the phone number printed on your product or receipt`,
        content: `The safest source of all is the physical paperwork. Look on the back of your device, on the box it came in, on your purchase receipt or order confirmation email, or on your subscription billing statement. These are real, verified numbers that were printed before you ever encountered a scammer.`,
      },
      {
        title: `Recognize the signs that you've reached a fake number`,
        content: `Real customer service agents will never: ask you to buy gift cards to pay a fee or resolve a problem; ask for remote access to your computer to "fix" an issue you didn't report; ask for your full Social Security number, credit card number, or bank PIN to verify your identity over the phone. If any of these happen, hang up immediately.`,
      },
      {
        title: `Report the fake number`,
        content: `If you found a fake number in a Google ad, you can report it: scroll to the ad in your search results, click the three-dot menu next to it, and select "Report ad." You can also report the scammer to the FTC at reportfraud.ftc.gov. This helps get the fake numbers removed faster and protects other people from the same trap.`,
      },
    ],
    tip: `Quick Tip — Bookmark the support pages for companies you deal with regularly: amazon.com/help, apple.com/support, support.microsoft.com. Having them bookmarked means you'll never need to search for a number in a rush.`,
  },
  {
    slug: `google-chrome-setup-seniors`,
    title: `How to Set Up Google Chrome for Easier Reading and Browsing`,
    excerpt: `Adjust Chrome's text size, zoom, and safety settings so every website is easier to read and safer to use — takes about 10 minutes and makes a big difference.`,
    category: `essential-skills`,
    tags: [`Google Chrome`, `accessibility`, `large text`, `browser settings`, `seniors`],
    readTime: `8 min`,
    thumbnailEmoji: `🌐`,
    publishedAt: `2026-04-21`,
    difficulty: `Beginner`,
    body: `Google Chrome is the most popular web browser in the United States, and it comes with a handful of settings that can make a real difference for anyone who struggles with small text or wants a safer browsing experience. Out of the box, Chrome uses a standard font size that works well on big desktop monitors but can feel too small on a laptop or tablet. A few minutes of adjusting settings can make every website clearer and more comfortable.

The most impactful change is simply increasing the default zoom level. Chrome lets you set a global zoom — meaning every website loads at a larger size automatically. You can also increase the font size independently, so text is larger even on websites that try to use small fonts. These two settings together transform the browsing experience for most people who find reading websites tiring.

Chrome also has a built-in safety feature called Safe Browsing that warns you before you visit a dangerous website. There are three levels: standard, enhanced, and a basic version. Turning on Enhanced Safe Browsing gives you the fastest possible warning before you accidentally click on a phishing or malware site — it's the setting Google recommends.

Two more settings worth adjusting: turn on the pop-up blocker (it's on by default, but worth confirming) and consider turning off location sharing for websites you don't trust. Many websites ask for your location — most don't need it for anything useful. A setting called "Ask before accessing" means websites have to request permission each time rather than getting it automatically.

Finally, Chrome has a feature called Reading Mode that strips away ads, sidebars, and clutter from news articles, showing you just the text and images. It's available through the Reader Mode button or via an extension from the Chrome Web Store.`,
    steps: [
      {
        title: `Open Chrome Settings`,
        content: `In Chrome, click the three vertical dots in the top right corner of the browser window (it looks like ⋮). In the menu that drops down, click Settings. This opens the Chrome Settings page. Everything you'll adjust is in here.`,
      },
      {
        title: `Increase the page zoom for all websites`,
        content: `On the Settings page, look for the Appearance section (it's near the top). Find Page Zoom and click the dropdown — it probably says 100%. Change it to 110% or 125% to make all websites load at a larger size. If you're using a tablet or have any vision difficulty, 125% is a good starting point. You can always use Ctrl + Plus (Windows) or Cmd + Plus (Mac) on any individual website to zoom in further.`,
      },
      {
        title: `Make the font size larger`,
        content: `Still in the Appearance section, find Font Size and change it from Medium to Large. You can also click Customize Fonts to pick your preferred reading font and minimum font size. Choosing a font like Arial or Georgia and setting the minimum size to 14 or 16 makes text much easier to read across most websites.`,
      },
      {
        title: `Turn on Enhanced Safe Browsing`,
        content: `In the Settings search bar at the top, type "Safe Browsing." Click the Privacy and Security section, then click Security. Under Safe Browsing, select Enhanced Protection. This means Chrome checks every site you visit and every file you download against Google's constantly updated list of dangerous websites — in real time.`,
      },
      {
        title: `Check your pop-up and location settings`,
        content: `In Settings, go to Privacy and Security, then Site Settings. Under Permissions, check Pop-ups and Redirects — it should say Blocked. Also click Location — change it to "Sites can ask for your location" rather than "Allowed." This means websites have to ask permission before getting your location, and you can say no.`,
      },
      {
        title: `Enable Reader Mode for article pages`,
        content: `When reading a long news article, look for a small book-page icon at the right end of the address bar — that's Chrome's Reading Mode button. Click it to strip away ads and sidebars and show just the article text. If you don't see the button, you can enable it by going to chrome://flags in the address bar, searching for "Reading Mode," and setting it to Enabled, then restarting Chrome.`,
      },
    ],
    tip: `Quick Tip — To quickly zoom in on any single webpage, hold the Ctrl key (Windows) or Cmd key (Mac) and press the Plus key. To zoom back out, press Ctrl/Cmd + Minus. Ctrl/Cmd + 0 resets to the default size.`,
  },
];
