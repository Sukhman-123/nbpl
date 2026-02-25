// Season 3 Auction Results - Held on 14 February 2026
// Data sourced from official Auctionhat report

export interface AuctionPlayer {
  playerNo: number;
  name: string;
  category: "Foreign Player" | "Player";
  basePrice: number;
  soldPrice: number;
  style: "Batsman" | "Bowler" | "All rounder";
  address: "Foreign" | "Ward - 77";
}

export interface TeamRoster {
  teamId: number;
  teamName: string;
  shortName: string;
  color: string;
  owner: string;
  totalSpent: number;
  purseRemaining: number;
  players: AuctionPlayer[];
}

export const SEASON_3_PURSE = 12000;

export const season3Results: TeamRoster[] = [
  {
    teamId: 3,
    teamName: "Ritesh Warriors",
    shortName: "RW",
    color: "#F59E0B",
    owner: "Naveen Gupta",
    totalSpent: 11600,
    purseRemaining: 400,
    players: [
      { playerNo: 52, name: "Ashok Orang", category: "Foreign Player", basePrice: 300, soldPrice: 1300, style: "All rounder", address: "Foreign" },
      { playerNo: 37, name: "Mohan (Munna)", category: "Player", basePrice: 100, soldPrice: 600, style: "Batsman", address: "Ward - 77" },
      { playerNo: 112, name: "Sachin Dubey (Gopal)", category: "Player", basePrice: 100, soldPrice: 400, style: "Bowler", address: "Ward - 77" },
      { playerNo: 108, name: "Sourav", category: "Foreign Player", basePrice: 300, soldPrice: 500, style: "Batsman", address: "Foreign" },
      { playerNo: 15, name: "Navin Gupta", category: "Player", basePrice: 100, soldPrice: 400, style: "Batsman", address: "Ward - 77" },
      { playerNo: 49, name: "Manish Ray", category: "Player", basePrice: 100, soldPrice: 1300, style: "All rounder", address: "Ward - 77" },
      { playerNo: 92, name: "Asif Raja Khan", category: "Foreign Player", basePrice: 300, soldPrice: 1300, style: "All rounder", address: "Foreign" },
      { playerNo: 51, name: "Pappu Sharma", category: "Player", basePrice: 100, soldPrice: 100, style: "All rounder", address: "Ward - 77" },
      { playerNo: 14, name: "Gaurav Kumar Prasad", category: "Player", basePrice: 100, soldPrice: 400, style: "All rounder", address: "Ward - 77" },
      { playerNo: 16, name: "Abdul Hamid", category: "Foreign Player", basePrice: 300, soldPrice: 2900, style: "All rounder", address: "Foreign" },
      { playerNo: 71, name: "Aman Kumar Singh", category: "Player", basePrice: 100, soldPrice: 500, style: "Batsman", address: "Ward - 77" },
      { playerNo: 6, name: "Rabi Verma", category: "Player", basePrice: 100, soldPrice: 100, style: "Batsman", address: "Ward - 77" },
      { playerNo: 57, name: "Golu Yadav", category: "Player", basePrice: 100, soldPrice: 1500, style: "Batsman", address: "Ward - 77" },
      { playerNo: 8, name: "Bikram Prasad", category: "Foreign Player", basePrice: 300, soldPrice: 300, style: "Batsman", address: "Foreign" },
    ],
  },
  {
    teamId: 1,
    teamName: "Ishan Mavericks",
    shortName: "IM",
    color: "#3B82F6",
    owner: "Aman Mondal",
    totalSpent: 11500,
    purseRemaining: 500,
    players: [
      { playerNo: 28, name: "Golu Choudhary", category: "Foreign Player", basePrice: 300, soldPrice: 2800, style: "All rounder", address: "Foreign" },
      { playerNo: 7, name: "Sunil Yadav", category: "Foreign Player", basePrice: 300, soldPrice: 1100, style: "All rounder", address: "Foreign" },
      { playerNo: 34, name: "Rocky Singh", category: "Player", basePrice: 100, soldPrice: 200, style: "All rounder", address: "Ward - 77" },
      { playerNo: 66, name: "Ankan Banerjee", category: "Foreign Player", basePrice: 300, soldPrice: 600, style: "Batsman", address: "Foreign" },
      { playerNo: 26, name: "Tabrez", category: "Player", basePrice: 100, soldPrice: 300, style: "All rounder", address: "Ward - 77" },
      { playerNo: 83, name: "Rahul Singh (Bittu)", category: "Foreign Player", basePrice: 300, soldPrice: 2600, style: "All rounder", address: "Foreign" },
      { playerNo: 76, name: "Rohit Pal", category: "Player", basePrice: 100, soldPrice: 100, style: "Batsman", address: "Ward - 77" },
      { playerNo: 82, name: "Aryan", category: "Foreign Player", basePrice: 300, soldPrice: 3100, style: "Batsman", address: "Foreign" },
      { playerNo: 85, name: "Dhiraj Sharma", category: "Player", basePrice: 100, soldPrice: 200, style: "Batsman", address: "Ward - 77" },
      { playerNo: 93, name: "Kunal Shaw", category: "Player", basePrice: 100, soldPrice: 100, style: "All rounder", address: "Ward - 77" },
      { playerNo: 50, name: "D.S. Dash (Dashu)", category: "Player", basePrice: 100, soldPrice: 100, style: "All rounder", address: "Ward - 77" },
      { playerNo: 94, name: "Kanchan Shaw", category: "Player", basePrice: 100, soldPrice: 100, style: "Bowler", address: "Ward - 77" },
      { playerNo: 106, name: "Chinu", category: "Player", basePrice: 100, soldPrice: 100, style: "Batsman", address: "Ward - 77" },
      { playerNo: 99, name: "Mohan", category: "Player", basePrice: 100, soldPrice: 100, style: "Batsman", address: "Ward - 77" },
    ],
  },
  {
    teamId: 8,
    teamName: "Rahul Strikers",
    shortName: "RS",
    color: "#F97316",
    owner: "Rahul Tiwari",
    totalSpent: 10600,
    purseRemaining: 1400,
    players: [
      { playerNo: 98, name: "Rohit", category: "Player", basePrice: 100, soldPrice: 600, style: "Batsman", address: "Ward - 77" },
      { playerNo: 33, name: "Prince Kumar", category: "Player", basePrice: 100, soldPrice: 700, style: "Bowler", address: "Ward - 77" },
      { playerNo: 103, name: "Sonu RPF", category: "Player", basePrice: 100, soldPrice: 800, style: "Batsman", address: "Ward - 77" },
      { playerNo: 86, name: "Ankit Yadav", category: "Foreign Player", basePrice: 300, soldPrice: 3100, style: "Batsman", address: "Foreign" },
      { playerNo: 109, name: "Nayab", category: "Foreign Player", basePrice: 300, soldPrice: 900, style: "Batsman", address: "Foreign" },
      { playerNo: 80, name: "Rounak", category: "Foreign Player", basePrice: 300, soldPrice: 1700, style: "All rounder", address: "Foreign" },
      { playerNo: 25, name: "Aditya Viswakarma (Meet)", category: "Player", basePrice: 100, soldPrice: 700, style: "Batsman", address: "Ward - 77" },
      { playerNo: 55, name: "Vivek Pathak", category: "Foreign Player", basePrice: 300, soldPrice: 600, style: "Batsman", address: "Foreign" },
      { playerNo: 107, name: "Jitu Pandit", category: "Player", basePrice: 100, soldPrice: 100, style: "Batsman", address: "Ward - 77" },
      { playerNo: 101, name: "Rajveer", category: "Player", basePrice: 100, soldPrice: 200, style: "Batsman", address: "Ward - 77" },
      { playerNo: 78, name: "Chotu Verma", category: "Player", basePrice: 100, soldPrice: 100, style: "Batsman", address: "Ward - 77" },
      { playerNo: 90, name: "Vishwajeet Singh", category: "Foreign Player", basePrice: 300, soldPrice: 700, style: "All rounder", address: "Foreign" },
      { playerNo: 70, name: "Manish Mandal", category: "Player", basePrice: 100, soldPrice: 300, style: "Batsman", address: "Ward - 77" },
      { playerNo: 105, name: "Abhinadh Jha", category: "Player", basePrice: 100, soldPrice: 100, style: "Bowler", address: "Ward - 77" },
    ],
  },
  {
    teamId: 2,
    teamName: "Deep Dragons",
    shortName: "DD",
    color: "#EF4444",
    owner: "Deep Singh",
    totalSpent: 12000,
    purseRemaining: 0,
    players: [
      { playerNo: 13, name: "Brijesh Yadav", category: "Player", basePrice: 100, soldPrice: 1400, style: "Bowler", address: "Ward - 77" },
      { playerNo: 31, name: "Randhir Yadav", category: "Player", basePrice: 100, soldPrice: 100, style: "Batsman", address: "Ward - 77" },
      { playerNo: 91, name: "Farhan", category: "Foreign Player", basePrice: 300, soldPrice: 2500, style: "Batsman", address: "Foreign" },
      { playerNo: 104, name: "Amit (Bako)", category: "Foreign Player", basePrice: 300, soldPrice: 1900, style: "Batsman", address: "Foreign" },
      { playerNo: 113, name: "Sandeep Yadav", category: "Player", basePrice: 100, soldPrice: 100, style: "Batsman", address: "Ward - 77" },
      { playerNo: 116, name: "Deep Singh", category: "Player", basePrice: 100, soldPrice: 300, style: "Batsman", address: "Ward - 77" },
      { playerNo: 23, name: "Salman", category: "Foreign Player", basePrice: 300, soldPrice: 400, style: "All rounder", address: "Foreign" },
      { playerNo: 84, name: "Akash Yadav", category: "Foreign Player", basePrice: 300, soldPrice: 2500, style: "All rounder", address: "Foreign" },
      { playerNo: 102, name: "Pintu Kumar", category: "Player", basePrice: 100, soldPrice: 100, style: "Batsman", address: "Ward - 77" },
      { playerNo: 96, name: "Nikhil", category: "Player", basePrice: 100, soldPrice: 100, style: "Batsman", address: "Ward - 77" },
      { playerNo: 79, name: "Sohail Akhter", category: "Player", basePrice: 100, soldPrice: 400, style: "All rounder", address: "Ward - 77" },
      { playerNo: 18, name: "Md Shahid (Raj)", category: "Player", basePrice: 100, soldPrice: 200, style: "Bowler", address: "Ward - 77" },
      { playerNo: 115, name: "Bikash Yadav", category: "Foreign Player", basePrice: 300, soldPrice: 300, style: "Batsman", address: "Foreign" },
      { playerNo: 35, name: "Pintu Yadav", category: "Player", basePrice: 100, soldPrice: 1700, style: "Batsman", address: "Ward - 77" },
    ],
  },
  {
    teamId: 6,
    teamName: "The Janki's XI",
    shortName: "MJP",
    color: "#EC4899",
    owner: "Abhinash Singh",
    totalSpent: 8900,
    purseRemaining: 3100,
    players: [
      { playerNo: 4, name: "Abhijit Kewra (Babu Sona)", category: "Foreign Player", basePrice: 300, soldPrice: 1600, style: "All rounder", address: "Foreign" },
      { playerNo: 32, name: "Rajiv Yadav", category: "Player", basePrice: 100, soldPrice: 1700, style: "Batsman", address: "Ward - 77" },
      { playerNo: 74, name: "Amritpal Singh", category: "Player", basePrice: 100, soldPrice: 1000, style: "All rounder", address: "Ward - 77" },
      { playerNo: 111, name: "Rehan Alam", category: "Player", basePrice: 100, soldPrice: 100, style: "All rounder", address: "Ward - 77" },
      { playerNo: 12, name: "Yousuf Khan", category: "Player", basePrice: 100, soldPrice: 700, style: "All rounder", address: "Ward - 77" },
      { playerNo: 46, name: "Rahul Shaw (Chotu)", category: "Player", basePrice: 100, soldPrice: 300, style: "Batsman", address: "Ward - 77" },
      { playerNo: 20, name: "Jhantu", category: "Player", basePrice: 100, soldPrice: 600, style: "All rounder", address: "Ward - 77" },
      { playerNo: 19, name: "Lucky India", category: "Player", basePrice: 100, soldPrice: 100, style: "Batsman", address: "Ward - 77" },
      { playerNo: 68, name: "Pandya", category: "Player", basePrice: 100, soldPrice: 100, style: "Batsman", address: "Ward - 77" },
      { playerNo: 21, name: "Minta", category: "Foreign Player", basePrice: 300, soldPrice: 2100, style: "All rounder", address: "Foreign" },
      { playerNo: 2, name: "Subhajit Sarkar Tubun", category: "Foreign Player", basePrice: 300, soldPrice: 300, style: "Batsman", address: "Foreign" },
      { playerNo: 54, name: "Raja", category: "Foreign Player", basePrice: 300, soldPrice: 300, style: "All rounder", address: "Foreign" },
    ],
  },
  {
    teamId: 7,
    teamName: "Abhinav Cricket Crushers",
    shortName: "ACC",
    color: "#06B6D4",
    owner: "Rahul Nayak",
    totalSpent: 10600,
    purseRemaining: 1400,
    players: [
      { playerNo: 81, name: "Kanchan Dey", category: "Player", basePrice: 100, soldPrice: 1000, style: "Bowler", address: "Ward - 77" },
      { playerNo: 30, name: "Debraj Ghosh", category: "Player", basePrice: 100, soldPrice: 800, style: "Batsman", address: "Ward - 77" },
      { playerNo: 53, name: "Falguni Dubey", category: "Foreign Player", basePrice: 300, soldPrice: 300, style: "All rounder", address: "Foreign" },
      { playerNo: 38, name: "Samrat Sengupta", category: "Player", basePrice: 100, soldPrice: 400, style: "All rounder", address: "Ward - 77" },
      { playerNo: 29, name: "Suraj Choudhary", category: "Foreign Player", basePrice: 300, soldPrice: 1000, style: "Batsman", address: "Foreign" },
      { playerNo: 110, name: "Asif", category: "Player", basePrice: 100, soldPrice: 1200, style: "All rounder", address: "Ward - 77" },
      { playerNo: 44, name: "Rahul Nayak (Govinda)", category: "Player", basePrice: 100, soldPrice: 300, style: "All rounder", address: "Ward - 77" },
      { playerNo: 77, name: "Aman Mondal", category: "Player", basePrice: 100, soldPrice: 300, style: "All rounder", address: "Ward - 77" },
      { playerNo: 11, name: "Wasim Akram", category: "Foreign Player", basePrice: 300, soldPrice: 1700, style: "Batsman", address: "Foreign" },
      { playerNo: 22, name: "Rahul Choudhury", category: "Player", basePrice: 100, soldPrice: 900, style: "Bowler", address: "Ward - 77" },
      { playerNo: 88, name: "Sourav Prasad", category: "Player", basePrice: 100, soldPrice: 100, style: "Batsman", address: "Ward - 77" },
      { playerNo: 42, name: "Manjay Shaw", category: "Foreign Player", basePrice: 300, soldPrice: 1500, style: "All rounder", address: "Foreign" },
      { playerNo: 24, name: "Md Kaif", category: "Player", basePrice: 100, soldPrice: 800, style: "All rounder", address: "Ward - 77" },
      { playerNo: 43, name: "Dipak Kumar", category: "Foreign Player", basePrice: 300, soldPrice: 300, style: "Batsman", address: "Foreign" },
    ],
  },
  {
    teamId: 4,
    teamName: "Prince XI",
    shortName: "PXI",
    color: "#8B5CF6",
    owner: "Prince",
    totalSpent: 11600,
    purseRemaining: 400,
    players: [
      { playerNo: 87, name: "Samnan Khan", category: "Foreign Player", basePrice: 300, soldPrice: 1700, style: "Batsman", address: "Foreign" },
      { playerNo: 73, name: "Akshay Singh", category: "Foreign Player", basePrice: 300, soldPrice: 2900, style: "Batsman", address: "Foreign" },
      { playerNo: 5, name: "Prince Sah", category: "Foreign Player", basePrice: 300, soldPrice: 1300, style: "All rounder", address: "Foreign" },
      { playerNo: 59, name: "Satish Prashad", category: "Player", basePrice: 100, soldPrice: 100, style: "Batsman", address: "Ward - 77" },
      { playerNo: 36, name: "Abhijit Singh", category: "Player", basePrice: 100, soldPrice: 800, style: "Batsman", address: "Ward - 77" },
      { playerNo: 45, name: "Chandan Kumar", category: "Player", basePrice: 100, soldPrice: 100, style: "All rounder", address: "Ward - 77" },
      { playerNo: 95, name: "Manoj", category: "Foreign Player", basePrice: 300, soldPrice: 1300, style: "Bowler", address: "Foreign" },
      { playerNo: 47, name: "Malay Chakraborty", category: "Player", basePrice: 100, soldPrice: 100, style: "Batsman", address: "Ward - 77" },
      { playerNo: 72, name: "Pachok Sarkar", category: "Foreign Player", basePrice: 300, soldPrice: 2400, style: "All rounder", address: "Foreign" },
      { playerNo: 62, name: "Raj Roy", category: "Player", basePrice: 100, soldPrice: 100, style: "All rounder", address: "Ward - 77" },
      { playerNo: 10, name: "Sunny Yadav", category: "Player", basePrice: 100, soldPrice: 100, style: "Bowler", address: "Ward - 77" },
      { playerNo: 56, name: "Deepak Kumar Yadav", category: "Player", basePrice: 100, soldPrice: 100, style: "All rounder", address: "Ward - 77" },
      { playerNo: 48, name: "Rajat Hela", category: "Player", basePrice: 100, soldPrice: 500, style: "Batsman", address: "Ward - 77" },
      { playerNo: 27, name: "Raju Ali", category: "Player", basePrice: 100, soldPrice: 100, style: "Batsman", address: "Ward - 77" },
    ],
  },
  {
    teamId: 5,
    teamName: "NMCC Titans",
    shortName: "NT",
    color: "#10B981",
    owner: "Naresh and Gopi Hela",
    totalSpent: 11300,
    purseRemaining: 700,
    players: [
      { playerNo: 114, name: "Binit Mandal", category: "Player", basePrice: 100, soldPrice: 1300, style: "Bowler", address: "Ward - 77" },
      { playerNo: 65, name: "Pintu Hussain", category: "Player", basePrice: 100, soldPrice: 600, style: "Batsman", address: "Ward - 77" },
      { playerNo: 117, name: "Abid Hussain (Raj)", category: "Foreign Player", basePrice: 300, soldPrice: 1000, style: "Batsman", address: "Foreign" },
      { playerNo: 1, name: "Bibek Biswas (Banti)", category: "Foreign Player", basePrice: 300, soldPrice: 900, style: "Batsman", address: "Foreign" },
      { playerNo: 97, name: "Samardeep", category: "Player", basePrice: 100, soldPrice: 800, style: "Batsman", address: "Ward - 77" },
      { playerNo: 69, name: "Sukhman", category: "Player", basePrice: 100, soldPrice: 400, style: "Batsman", address: "Ward - 77" },
      { playerNo: 17, name: "Faisal Khan", category: "Player", basePrice: 100, soldPrice: 600, style: "All rounder", address: "Ward - 77" },
      { playerNo: 39, name: "Pankaj Yadav", category: "Player", basePrice: 100, soldPrice: 200, style: "Batsman", address: "Ward - 77" },
      { playerNo: 63, name: "Sahil Kumar", category: "Player", basePrice: 100, soldPrice: 1300, style: "Batsman", address: "Ward - 77" },
      { playerNo: 58, name: "Bittu Mallick", category: "Player", basePrice: 100, soldPrice: 300, style: "Batsman", address: "Ward - 77" },
      { playerNo: 61, name: "Raja Kumar Hela", category: "Player", basePrice: 100, soldPrice: 100, style: "Bowler", address: "Ward - 77" },
      { playerNo: 75, name: "Sham Khan", category: "Foreign Player", basePrice: 300, soldPrice: 3100, style: "All rounder", address: "Foreign" },
      { playerNo: 9, name: "Rahul", category: "Foreign Player", basePrice: 300, soldPrice: 300, style: "Batsman", address: "Foreign" },
      { playerNo: 89, name: "Akhilesh Kr Yadav", category: "Foreign Player", basePrice: 300, soldPrice: 400, style: "Batsman", address: "Foreign" },
    ],
  },
];

// Top auction picks (highest sold prices across all teams)
export const topAuctionPicks = season3Results
  .flatMap((team) =>
    team.players.map((p) => ({
      ...p,
      teamName: team.teamName,
      teamColor: team.color,
    }))
  )
  .sort((a, b) => b.soldPrice - a.soldPrice)
  .slice(0, 10);
