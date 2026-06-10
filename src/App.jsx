import './App.css';
import Card from './components/Card'

const App = () => {
  return(
    <>
      <div className="App">
        <div className="header">
        <img src="/images/playbill.png"></img>
        </div>
          <h1>Browadway Musical Board</h1>
      </div>

      <div className="container">
        <div className="Card">
          <Card name="Hamilton" image="/images/hamilton.jpg" link="https://hamiltonmusical.com" description="A revolutionary story of passion, unstoppable ambition, and the dawn of a new nation. Hamilton is the epic saga that follows the rise of Founding Father Alexander Hamilton as he fights for honor, love, and a legacy that would shape the course of a nation. Based on Ron Chernow’s acclaimed biography and set to a score that blends hip-hop, jazz, R&B, and Broadway, Hamilton has had a profound impact on culture, politics, and education. Hamilton features book, music, and lyrics by Lin-Manuel Miranda, direction by Thomas Kail, choreography by Andy Blankenbuehler, and musical supervision and orchestrations by Alex Lacamoire. In addition to its 11 Tony Awards, it has won Grammy®, Olivier Awards, the Pulitzer Prize for Drama, and an unprecedented special citation from the Kennedy Center Honors.

 "/>
        </div>
        <div className="Card">
          <Card 
          name="Wicked"
          image="/images/wicked.webp"
          link="https://wickedthemusical.com"
          description="Welcome to the wonderful Land of Oz, where there is a young woman, born with emerald-green skin—smart, fiery, misunderstood and possessing an extraordinary talent. When she meets a bubbly blonde who is exceptionally popular, their initial rivalry turns into the unlikeliest of friendships…until the world decides to call one good and the other one wicked."/>
        </div>
        <div className="Card">
          <Card 
          name="Hadestown"
          image="/images/hadestown.jpeg"
          link="https://www.hadestown.com"
          description="Hadestown intertwines two mythic tales—that of young dreamers Orpheus and Eurydice, and that of King Hades and his wife Persephone—as it invites you on a hell-raising journey to the underworld and back. Mitchell’s beguiling melodies and Chavkin’s poetic imagination pit industry against nature, doubt against faith, and fear against love. Performed by a vibrant ensemble of actors, singers, dancers, and musicians, Hadestown is a haunting and hopeful theatrical experience that grabs you and never lets go."/>
        </div>
        <div className="Card">
          <Card 
          name="Maybe Happy Ending"
          image="/images/maybe_happy_ending.webp"
          link="https://maybehappyending.com"
          description={"Winner of 6 Tony Awards®, including Best Musical, Maybe Happy Ending tells the deeply human story of a chance encounter that sparks connection, adventure, and maybe even love. Helmed by Tony Award-winning director Michael Arden (Parade), Maybe Happy Ending has been hailed as \"one of the most visually stunning shows to hit New York in ages\" (USA Today) and “the best new musical on Broadway” (The Daily Beast). Don't miss the show that’s loaded with love, Maybe Happy Ending!"}/>
        </div>
        <div className="Card">
          <Card 
          name="Two Strangers"
          image="/images/two_strangers.webp"
          link="https://twostrangersmusical.com"
          description="You’ll meet Dougal, an impossibly upbeat Brit who has just landed in New York City for the first time to attend the wedding of the father he’s never met. And you’ll meet Robin, the sister of the bride and a no-nonsense New Yorker with a lot of errands to do for the bride—including picking up the groom’s estranged son from the airport. These two strangers begin their journey together navigating New York City, secrets, and second chances."/>
        </div>
        <div className="Card">
          <Card 
          name="Six: The Musical"
          image="/images/six_the_musical.jpg"
          link="https://www.sixthemusical.com"
          description="From Tudor Queens to Pop Icons, the SIX wives of Henry VIII take the microphone to remix five hundred years of historical heartbreak into a Euphoric Celebration of 21st century girl power! This new original musical is the global sensation that everyone is losing their head over!"/>
        </div>
        <div className="Card">
          <Card 
          name="Chicago"
          image="/images/chicago_musical.jpg"
          link="https://chicagothemusical.com"
          description="Set in the legendary city during the roaring “jazz hot” 20s, Chicago tells the story of two rival vaudevillian murderesses locked up in Cook County Jail. Nightclub star Velma’s serving time for killing her husband and sister after finding the two in bed together. Driven chorus girl Roxie’s been tossed in the joint for bumping off the lover she’s been cheating on her husband with. Not one to rest on her laurels, Velma enlists the help of prison matron Mama Morton and slickster lawyer Billy Flynn, who turn Velma’s incarceration into a murder-of-the-week media frenzy, thus preparing the world for a splashy showbiz comeback. But Roxie’s got some of her own tricks up her sleeve…"/>
        </div>
        <div className="Card">
          <Card 
          name="The Outsiders"
          image="/images/the_outsiders.jpg"
          link="https://outsidersmusical.com"
          description="{The winner of the Tony Award® for Best Musical is The Outsiders. This classic coming-of-age story takes you to Tulsa, Oklahoma in 1967, where Ponyboy Curtis, his best friend Johnny Cade, and their family of Greaser “outsiders” dream about who they want to become in a world that will never accept them. The Outsiders features a “tuneful and soul-bearing” (New York Stage Review) original score, “high-octane choreography” (New York Magazine), and a “sensational young cast” (The Wall Street Journal) that brings the show to life.}"/>
        </div>
        <div className="Card">
          <Card 
          name="The Lion King"
          image="/images/the_lion_king.jpg"
          link="https://www.lionking.com"
          description="A lively stage adaptation of the Academy Award-winning 1994 Disney film, The Lion King is the story of a young lion prince living in the flourishing African Pride Lands. When an unthinkable tragedy, orchestrated by Simba’s wicked uncle, Scar, takes his father’s life, Simba flees the Pride Lands, leaving his loss and the life he knew behind. Eventually companioned by two hilarious and unlikely friends, Simba starts anew. But when weight of responsibility and a desperate plea from the now ravaged Pride Lands come to find the adult prince, Simba must take on a formidable enemy, and fulfill his destiny to be king."/>
        </div>
        <div className="Card">
          <Card 
          name="MJ: The Musical"
          image="/images/mj_the_musical.webp"
          link="https://mjthemusical.com"
          description="He is one of the greatest entertainers of all time. Now, Michael Jackson’s unique and unparalleled artistry has finally arrived on Broadway in a brand-new musical. Centered around the making of his 1992 Dangerous World Tour, and created by Tony Award-winning director/choreographer Christopher Wheeldon and two-time Pulitzer Prize winner Lynn Nottage, MJ goes beyond the singular moves and signature sound of the star, offering a rare look at the creative mind and collaborative spirit that catapulted Jackson into legendary status."/>
        </div>
      </div>
    </>
  )
}
export default App
