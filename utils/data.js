import bcrypt from 'bcryptjs';

export const data = {
  users: [
    {
      name: 'Rahul Pradhan',
      email: 'rahul@hmamil.com',
      password: bcrypt.hashSync('123456'),
    },
    {
      name: 'Jhon',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
    },
  ],

  news: [
    {
      title:
        'T20 World Cup, IND vs PAK Preview: India, Pakistan Renew Rivalry In Dubai',

      subTitle:
        'India and Pakistan face off in a blockbuster clash in the Super 12 stage of the 2021 T20 World Cup in Dubai on Sunday.',
      poster:
        'https://c.ndtvimg.com/2021-10/cqlpqha8_india-afp_625x300_24_October_21.jpg',
      details: `India are yet to lose against Pakistan in a World Cup meeting, having beaten the latter seven out of seven times in the ODI World Cup and five times out of five in previous editions of this competition.

        One of India's five wins over Pakistan in the T20 World Cup came in a bowl-out in the inaugural 2007 edition, when the two sides went on to meet in the final as well, which India won by five runs.
        
        The pressure will be on Kohli's India as they seek to maintain their perfect World Cup record against Pakistan. Kohli, for whom this will be the last assignment as captain of the country's T20I side, has already warned his teammates of the quality of the opposition.
        
        "Pakistan are strong, you have to play your best cricket against them every time. They have players who are game-changers. We definitely have to bring our A game against Pakistan," Kohli said in the pre-match virtual press conference on Friday.
        
        Possessing a strong batting line-up that includes the likes of Kohli, Rohit Sharma, KL Rahul, Rishabh Pant, Hardik Pandya, among others, India's bowling department also features a few big names in the form of Ravichandran Ashwin, Ravindra Jadeja, Jasprit Bumrah, Mohammed Shami and others.
        
        The only major concern is whether all-rounder Hardik, who hasn't bowled in the last few months, would be ready to resume bowling duties on Sunday. Kohli tried to allay fears over the same in Friday's press conference.
        
        "I feel Hardik presently is getting better in terms of being prepared to bowl two overs for us. Till the time he starts bowling, we have created a few options for ourselves. What he offers at number 6 as a batter, we can't create something like that overnight," said the Indian captain.
        
        Listen to the latest songs, only on JioSaavn.com
        
        Pakistan, on the other hand, boast of a formidable team themselves. Skipper Babar Azam, Mohammad Rizwan, Fakhar Zaman Mohammad Hafeez, Shoaib Malik and others form a strong batting line-up while their fearsome bowling unit consists of Shaheen Afridi, Hasan Ali, Shadab Khan, Imad Wasim, Haris Rauf, among others.
        
        Speaking to reporters on Saturday, Pakistan captain Azam asked his side to forget the past. "To be honest, what has passed is beyond us," he said. "We want to use our ability and confidence on the day of the match so that we can get a better result. Records are meant to be broken," he added.
        `,
      comments: [],
    },
    {
      title:
        'Sri Lanka vs Bangladesh: War of words between Lahiru Kumara and Liton Das',
      subTitle:
        'Sri Lanka bowler Lahiru Kumara and batter Liton Das were seen having a war of words after the latter was dismissed.',
      poster: 'https://images.indianexpress.com/2021/10/sl-ban.jpg',
      details: `Sri Lanka captain Dasun Shanaka won the toss and opted to bowl in their T20 World Cup Super 12 Group 1 match against Bangladesh on Sunday. But things took a heated turn soon after. Sri Lanka bowler Lahiru Kumara and batter Liton Das were seen having a war of words after the latter was dismissed.

      During the sixth over, Das shimmed it down the track, moved leg-side in an attempt to go over mid-off. The ball, however, did not get enough elevation and Dasan Shanaka, who was at the edge of the circle, took an overhead catch.
      
      Kumara provided the breakthrough for Sri Lanka in the fifth over, and after picking the wicket, he went to Das and exchanged a few words. The batsman clearly did not like what was said to him and responded back. Things got ugly on the pitch as both side players as well as the match umpire intervened to separate the two players before Das went back to the hut for 16.`,
      comments: [],
    },
    {
      title:
        '“Dhoni not this match please”: Pakistan fan makes hilarious plea before India vs Pakistan',
      subTitle:
        'Pakistan have never beaten India at any cricket World Cup – the record stands at 7-0 in favour of India in the 50-over format, while it is 5-0 in the T20 form.',
      poster: 'https://images.indianexpress.com/2021/10/dhoni-ind-vs-pak.jpg',
      details: `India and Pakistan begin their T20 World Cup 2021 campaign in Dubai on Sunday. This will be the first time the two sides will lock horns since the 2019 World Cup league match in Manchester more than two years ago.

      Tickets for the game, as expected, were sold out within hours of going on sale. Pakistan have never beaten India at any cricket World Cup – the record stands at 7-0 in favour of India in the 50-over format, while it is 5-0 in the T20 form.
      
      While an ICC trophy has eluded Kohli as a leader, he will have plenty of experience to tap into with the addition of team mentor Mahendra Singh Dhoni, who led India to the inaugural World T20 trophy in 2007 and the 50-over title four years later.
      
      As the Indo-Pak clash nears the d-day, the banters and fun have begun with fans joining in the revelry. In one of such recent instance, a Pakistan fan girl was seen asking Indian players and mentor MS Dhoni to not perform against Pakistan.
      
      “Rahul, please don’t play good tomorrow. No, please don’t play good tomorrow,” she can be heard saying as the India opener was making his way back after a practice session. A few moments, as Dhoni emerged into the scene he is also heard answering a question from the crowd, saying, “Humara kaam hi aisa hai.” The woman who asked Rahul to not perform then says to MSD, “Mahi just leave this match… in the next match. Not this match please.”`,
      comments: [],
    },
    {
      title:
        'New IPL teams: BCCI expecting anything between Rs7k cr-10k cr with Adani, Goenka, Aurobindo in fray',
      subTitle:
        'It is still not clear whether the BCCI will announce the successful bidders on Monday itself after doing the technical evaluation of the bids.',
      poster: 'https://images.indianexpress.com/2021/10/BCCIK.jpg',
      details: `The Indian cricket board will be expecting the two new IPL franchises to go for Rs 7000 crore to Rs 10,000 crore each after the bidding process begins here on Monday.

      It is still not clear whether the BCCI will announce the successful bidders on Monday itself after doing the technical evaluation of the bids.
      
      There are 22 companies which have picked up tender document worth Rs 10 lakh but with base price for new teams pegged at INR 2000 crore, there is expected to be only five to six serious bidders in fray.
      
      The BCCI is also allowing a consortium of up to three companies/individuals to bid for a franchise.`,
      comments: [],
    },
    {
      title:
        'Men’s Boxing World C’ships: New-look Indian squad eyes strong show',
      subTitle: `World no.1 Amit Panghal, who claimed the country's maiden silver at the event's 2019 edition, and Manish Kaushik, a bronze-winner from the same year, are absent from the squad as they recover from an underwhelming Olympic campaign.`,
      poster: 'https://images.indianexpress.com/2021/10/BFI-pic.jpg',
      details: `With a largely fresh-faced squad, the Indian men’s boxing team would be in for a challenging time at the AIBA world championships starting here on Monday, up against a top-notch field but nonetheless hopeful of equalling or bettering the two medals secured in the previous edition.

      World no.1 Amit Panghal, who claimed the country’s maiden silver at the event’s 2019 edition, and Manish Kaushik, a bronze-winner from the same year, are absent from the squad as they recover from an underwhelming Olympic campaign.
      
      Asian medal-winners Deepak Kumar (51kg), Shiva Thapa (63.5kg), and Sanjeet (92kg) form the experienced core of the new-look that flew off to the Serbian capital on October 20.
      
      While Sanjeet is the reigning Asian champion, Deepak is a former silver-medallist and Shiva is a record five-time podium finisher at the continental showpiece.
      
      Of these, Shiva is the only one with prior experience of competing in the world event, having claimed a bronze in the 2015 edition.
      
      The remaining 10 in the squad are newly-crowned national champions, eager to make a mark, which might just be crucial to make up for the lack of experience.`,
      comments: [],
    },
  ],
};
