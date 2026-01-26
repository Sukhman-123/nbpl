// Player data for Season 3 Auction
export interface Player {
  id: number;
  name: string;
  category: "Foreign" | "Ward - 77";
  basePrice: number;
  style: "Batsman" | "Bowler" | "All rounder";
  photoUrl: string;
}

export interface Team {
  id: number;
  name: string;
  shortName: string;
  purse: number;
  players: SoldPlayer[];
  color: string;
}

export interface SoldPlayer extends Player {
  soldPrice: number;
  soldAt: string;
}

export const INITIAL_PURSE = 10000;

export const teams: Omit<Team, "purse" | "players">[] = [
  { id: 1, name: "Ishan Mavericks", shortName: "IM", color: "#3B82F6" },
  { id: 2, name: "Deep Dragons", shortName: "DD", color: "#EF4444" },
  { id: 3, name: "Ritesh Warriors", shortName: "RW", color: "#F59E0B" },
  { id: 4, name: "Prince XI", shortName: "PXI", color: "#8B5CF6" },
  { id: 5, name: "NMCC Titans", shortName: "NT", color: "#10B981" },
  { id: 6, name: "Maa Janki's Publications", shortName: "MJP", color: "#EC4899" },
  { id: 7, name: "Abhinav Cricket Crushers", shortName: "ACC", color: "#06B6D4" },
  { id: 8, name: "Rahul Strikers", shortName: "RS", color: "#F97316" },
];

export const players: Player[] = [
  { id: 1, name: "Bibek Biswas (Banti)", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=10W5DUlvsAsIdZGV22gHjv2KhJ_pv3lsn&sz=w400" },
  { id: 2, name: "Subhajit Sarkar Tubun", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=18ZfLMYgGXmGjGBCGdc8_FYUsTfwGyanx&sz=w400" },
  { id: 3, name: "Shyam", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=16ACDOhJdYQbzOmtzFYYmB5r876CKtHsM&sz=w400" },
  { id: 4, name: "Abhijit Kewra (Babu Sona)", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1rvipJs6al1Nap9UE684JXOYM7pwacDoX&sz=w400" },
  { id: 5, name: "Prince Sah", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1GxGP4JjKWuJWpo_zZwCXZOBbNrsZ2Hd5&sz=w400" },
  { id: 6, name: "Rabi Verma", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1W5iVkkUkRp6q_0e7wzsAYk5NkbnRHIpL&sz=w400" },
  { id: 7, name: "Sunil Yadav", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1pKLhlK0dLFvrgL_DSepM_knFx-mit_Rn&sz=w400" },
  { id: 8, name: "Bikram Prasad", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=19CEFQqb70pK3eiCFXpnmoQyscIO63B-4&sz=w400" },
  { id: 9, name: "Rahul", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=14q1m6Us5697jJl9OnsPy3amzoxIrsSNF&sz=w400" },
  { id: 10, name: "Sunny Yadav", category: "Ward - 77", basePrice: 100, style: "Bowler", photoUrl: "https://drive.google.com/thumbnail?id=17Va9r8QMZE5VdgBgsd-iAmItZ5DsKYYw&sz=w400" },
  { id: 11, name: "Wasim Akram", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1L01TKRlgNKGHyq58viKvuX7b26gj49oE&sz=w400" },
  { id: 12, name: "Yousuf Khan", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1fEY5Y7JQ7eZhQ-oW7-hrYT1OP7GLXNU8&sz=w400" },
  { id: 13, name: "Brijesh Yadav", category: "Ward - 77", basePrice: 100, style: "Bowler", photoUrl: "https://drive.google.com/thumbnail?id=1sUbx_xh4FTe6_Uub6szbCxe7tdKQydfP&sz=w400" },
  { id: 14, name: "Gaurav Kumar Prasad", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=15KY24MRa25dzuRAH7CZqWxosIUDBG_56&sz=w400" },
  { id: 15, name: "Navin Gupta", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1SjWiTUuuS-DEvTobE_kBWi6WpxIJbWSH&sz=w400" },
  { id: 16, name: "Abdul Hamid", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1_JobsPsEMMFrHZ1qkUfxnY7DplqvG7zQ&sz=w400" },
  { id: 17, name: "Faisal Khan", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1vMGh8V_z8dcrhKPwH0yA9gsFj8gJzncL&sz=w400" },
  { id: 18, name: "Md Shahid (Raj)", category: "Foreign", basePrice: 300, style: "Bowler", photoUrl: "https://drive.google.com/thumbnail?id=1GkSymr0YsjOrtPSwktwrWG__cBr09PNs&sz=w400" },
  { id: 19, name: "Lucky", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1g8plLz4OEndoAJFLekI0ohBK9LNCa7c5&sz=w400" },
  { id: 20, name: "Jhantu", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=12wUbB2dVu1mneHIls3dGDJ6uoBCEMNY3&sz=w400" },
  { id: 21, name: "Minta", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1RNJOVWSfOh1bMOjwZOKpazO3t1uSLs6R&sz=w400" },
  { id: 22, name: "Rahul Choudhury", category: "Ward - 77", basePrice: 100, style: "Bowler", photoUrl: "https://drive.google.com/thumbnail?id=10_py1SeDOCIbCzcjuKx5rntpXP4WNS9R&sz=w400" },
  { id: 23, name: "Salman", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1dj4c4P5lQcwFqe057H8KAAQoP0wbxEjs&sz=w400" },
  { id: 24, name: "Md Kaif", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1uL_XBI8PsKv2uT8EOWPJS1oYimWXgy0n&sz=w400" },
  { id: 25, name: "Aditya Viswakarma (Meet)", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=10qGXYl58iEVOeaXwGG_fSWFNVSquLCgY&sz=w400" },
  { id: 26, name: "Tabrez", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=13BjWS0N_bEs0RB0oobjPj2y_-JeXIsJT&sz=w400" },
  { id: 27, name: "Raju Ali", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1IXLu6Ib1M45vqnDYjgbiB84Yre67WIVY&sz=w400" },
  { id: 28, name: "Golu Choudhary", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1uuJVZNUj_oMBHDMOEC2J3AdERjMjOkNy&sz=w400" },
  { id: 29, name: "Suraj Choudhary", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1RAfaInMc7DmCpoZRiFMp_CkxCi5wHeYk&sz=w400" },
  { id: 30, name: "Debraj Ghosh", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1wBNaBBW1y57wXxUIx17Xtac6th4uP7IX&sz=w400" },
  { id: 31, name: "Randhir Yadav", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1JJ9xa7q9j7Xj6fCO1cGfzUFYb4mHMqAl&sz=w400" },
  { id: 32, name: "Rajiv Yadav", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1oNxb3XGpJjw6_7rsfd4v_HdJiAfaNdgK&sz=w400" },
  { id: 33, name: "Prince Kumar", category: "Ward - 77", basePrice: 100, style: "Bowler", photoUrl: "https://drive.google.com/thumbnail?id=1QEPogtQ9C9t4mdZ9fKV1gahAKXinxuyN&sz=w400" },
  { id: 34, name: "Rocky Singh", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1FFAElTJSC6pvmVxNu8f7IIUqDhkkdaFa&sz=w400" },
  { id: 35, name: "Pintu Yadav", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1VFGBqIMpPlbYTE5fjavP3khv4INrYNbD&sz=w400" },
  { id: 36, name: "Abhijit Singh", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1TyYKPihmsCkAh3hOQonOLEEjcpAGPmCc&sz=w400" },
  { id: 37, name: "Mohan (Munna)", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=137lZi2pGs_3nrVAkQPEcT3egsao3lhma&sz=w400" },
  { id: 38, name: "Samrat Sengupta", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1ngyIN-gmlYLlHClDaPyw78fxgTob5XuQ&sz=w400" },
  { id: 39, name: "Pankaj Yadav", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1XjISahyB-KX6XIHjxDS4ttIgHOwQBis3&sz=w400" },
  { id: 40, name: "Niraj Thanamath", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1s7XANfKljPhipBDbPGDbDKmEvF2VMCVf&sz=w400" },
  { id: 41, name: "Sonu Kumar", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1gAT9IqCsK4m2Www1bBSSMuSgOXmLpu0K&sz=w400" },
  { id: 42, name: "Manjay Shaw", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1U-NVbiQKI_xX_IPIS7ayXC80ZDuyG8PT&sz=w400" },
  { id: 43, name: "Dipak Kumar", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=17jMgpj_SNC7xgD2NK2Tw4bsx7Skr7bjt&sz=w400" },
  { id: 44, name: "Rahul Nayak (Govinda)", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1AY4071_71j6AcmpqLA-Xa_Agx8Dq78Xh&sz=w400" },
  { id: 45, name: "Chandan Kumar", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1mnE7WSv_nBDOHpf-3yrJue-dl2i9KmZz&sz=w400" },
  { id: 46, name: "Rahul Shaw (Chotu)", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=11DQNaFKZukH0PSlT4-3i0t_Dk0t9LSCh&sz=w400" },
  { id: 47, name: "Malay Chakraborty", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1wJ__FYfrLfHvmgp1JbAFklMt9B5iocvo&sz=w400" },
  { id: 48, name: "Rajat Hela", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=105_c5ZT3dyPdpRDYBTPjDU_oH3eZkpih&sz=w400" },
  { id: 49, name: "Manish Ray", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1vHHK5ltzcu8Gac3CEc5j5f7fOpmTN4sy&sz=w400" },
  { id: 50, name: "D.S. Dash (Dashu)", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1w7k0BrVLUYG0_pXu-vzdmZ5JsPFFDZo3&sz=w400" },
  { id: 51, name: "Pappu Sharma", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1azJEPBjtfS5_lko_ZPNg-z9IdXZa5kB7&sz=w400" },
  { id: 52, name: "Ashok Orang", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=17HeYOm0T7a7iLuS98ph-H1nadbUlW4X5&sz=w400" },
  { id: 53, name: "Falguni Dubey", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1_kCULgCvbEsx3X1zFn0c6nH-rnpF_Ln6&sz=w400" },
  { id: 54, name: "Raja", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1n2FLGfsniGfoKWmfDtjP6ABGKRzGs-_I&sz=w400" },
  { id: 55, name: "Vivek Pathak", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1lXNSqVv5jysx_aBmh1_l9zG9CoIdlt9o&sz=w400" },
  { id: 56, name: "Deepak Kumar Yadav", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1aPIVIqSia1j5lwllapXq8oFlC2TSe2b8&sz=w400" },
  { id: 57, name: "Golu Yadav", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1sUn3ZBe2cH-l9quA1RBQfHlIyTse5bsH&sz=w400" },
  { id: 58, name: "Bittu Mallick", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1jk2E89146NxUUvvmsH1ZlvdH11sO3IeK&sz=w400" },
  { id: 59, name: "Satish Prashad", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1X8HJ3yqrvmINXOfA26ms6f7QY4J2HHqG&sz=w400" },
  { id: 60, name: "Sandip Shaw", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=18pnrRgX6AIZsmX65BN_koS42ByTN_JeB&sz=w400" },
  { id: 61, name: "Raja Kumar Hela", category: "Ward - 77", basePrice: 100, style: "Bowler", photoUrl: "https://drive.google.com/thumbnail?id=1Aml_b27uczH_eW7n8BIDGvf1bQkQRn4Y&sz=w400" },
  { id: 62, name: "Raj Roy", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1ep7NkCYIVuFZwqesvUJUmmQWCWvFGKe3&sz=w400" },
  { id: 63, name: "Sahil Kumar", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1-CyPTtC-PRWSO0NXesi2X0DOc5Rx5jBk&sz=w400" },
  { id: 64, name: "Akash Yadav (Karu)", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1hLtGa93ck2tE2Vufi3Y-unl6k8fzePQ3&sz=w400" },
  { id: 65, name: "Pintu Hussain", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1tzOQDoIXIfeZwwdt62USmS6sVPPvrDhz&sz=w400" },
  { id: 66, name: "Ankan Banerjee", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=12iNNs_7X5xoGisjsaHU9R9Su9J8iV-_Y&sz=w400" },
  { id: 67, name: "Akshat Kumar", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1yn7a-E7-6W3BPdNaKIZlcoo6e_TNGfkM&sz=w400" },
  { id: 68, name: "Pandya", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=11MooD5hP0cyEuI_mlIsB9I4GWZeCZOqy&sz=w400" },
  { id: 69, name: "Sukhman", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1XMZexQRtHTKqGrINZWcXiOoQA0CDXX1_&sz=w400" },
  { id: 70, name: "Manish Mandal", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=17f8jAa1vLNqGTI8GMVhSM6pcrTjClIr2&sz=w400" },
  { id: 71, name: "Aman Kumar Singh", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1f92E0Dr4ubPVkAYZBuXnyYjKLEfqMwYA&sz=w400" },
  { id: 72, name: "Pachok Sarkar", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1HLvReoO_f6nvoEj5BSp-FwkhMqIj8J6P&sz=w400" },
  { id: 73, name: "Akshay Singh", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1j4J46zz0vG2JwjCzvmJ_qgObIsiQCG_F&sz=w400" },
  { id: 74, name: "Amritpal Singh", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1fg47n-sMSoVPQcSyjeEzmvA3hKMsvxbS&sz=w400" },
  { id: 75, name: "Sham Khan", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1v2z-PU2OfV_6e-OoJgfu4kmCNxBVR6Qj&sz=w400" },
  { id: 76, name: "Rohit Pal", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1uNiDML5ljpdIrQyqk4Ir0xwrFNnSolOD&sz=w400" },
  { id: 77, name: "Aman Mondal", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1vumbPg2HnBm4LK2L4tZEbXClwhnxIFNH&sz=w400" },
  { id: 78, name: "Chotu Verma", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1gpzxdNY0uUTTB57BY2lmBElZSOimzpcL&sz=w400" },
  { id: 79, name: "Sohail Akhter", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1aNzdG_wEkeOlB2187H79pZqiU9aR-rJd&sz=w400" },
  { id: 80, name: "Rounak", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1E2iW-5o_r5QgNDjbozCfgVHay7Sy3GOI&sz=w400" },
  { id: 81, name: "Kanchan Dey", category: "Ward - 77", basePrice: 100, style: "Bowler", photoUrl: "https://drive.google.com/thumbnail?id=1e2Uuet8XWa4IruiMa3054iYoY3un2XN3&sz=w400" },
  { id: 82, name: "Aryan", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1t3IqP_RSnYXqyPMHOorS9aVD4Q3HiaXd&sz=w400" },
  { id: 83, name: "Rahul Singh (Bittu)", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1oDX1uuJE1_YoviGZ4twSqHKbR6e9cmum&sz=w400" },
  { id: 84, name: "Akash Yadav", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=11Pyp-IGdKZ9hoLPza9UfTgsrLNtY4Ep6&sz=w400" },
  { id: 85, name: "Dhiraj Sharma", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1b07BM2XsmLlVzaDs_BryHQFkYLtZ2Ugz&sz=w400" },
  { id: 86, name: "Ankit Yadav", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=10iSW4oXp0qR3R4BU782yekcgUdrEwJDP&sz=w400" },
  { id: 87, name: "Samnan Khan", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1zEjvKCf3fIFwOygXEoS-1mMLbutgb2Db&sz=w400" },
  { id: 88, name: "Sourav Prasad", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1appFNcUwCa_gVEc5Bl70TPfkSYuWIjae&sz=w400" },
  { id: 89, name: "Akhilesh Kr Yadav", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1KronuMOrC3DgpcKusClt4EVPBNl6S9eG&sz=w400" },
  { id: 90, name: "Vishwajeet Singh", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1gqDNYFmlpX_XiAPL6tYUCl0I1HiHykCu&sz=w400" },
  { id: 91, name: "Farhan", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=10zAEi0uPABgdFoluRqkGToTnX5mHBLvg&sz=w400" },
  { id: 92, name: "Asif Raja Khan", category: "Foreign", basePrice: 300, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1zg80zm5st3dkW9Z3yhIKd1LAro0dUm6k&sz=w400" },
  { id: 93, name: "Kunal Shaw", category: "Ward - 77", basePrice: 100, style: "All rounder", photoUrl: "https://drive.google.com/thumbnail?id=1wgAuU_GQANuycALxKLof1C5aqrtR1l9q&sz=w400" },
  { id: 94, name: "Kanchan Shaw", category: "Ward - 77", basePrice: 100, style: "Bowler", photoUrl: "https://drive.google.com/thumbnail?id=15Wbo498tpaHucZVGWxM8rwG4nj1ji7H_&sz=w400" },
  { id: 95, name: "Manoj", category: "Foreign", basePrice: 300, style: "Bowler", photoUrl: "https://drive.google.com/thumbnail?id=1JmXaIxKb4sZJ2Uo9vwdslEQHGEqyKjXb&sz=w400" },
  { id: 96, name: "Nikhil", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1LhMxtzBLZtGroa3NaNebVxImYJGOes4m&sz=w400" },
  { id: 97, name: "Samardeep", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=14afZiCc5NozwfaCV1cZuhNwnxoBGAxvo&sz=w400" },
  { id: 98, name: "Rohit", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1BsFlIeAXr7obnQ1OnuEnygRmbz0V7xkX&sz=w400" },
  { id: 99, name: "Mohan", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1vYJ72k_SD-TDeWg5Q2u_ZMhOC4x26y10&sz=w400" },
  { id: 100, name: "Rishab Shaw", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1plRELnPHDDr_SCByL1HdIXUGOKq4w88c&sz=w400" },
  { id: 101, name: "Rajveer", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1eIqvJNJLUNIYHqzrCdS7DIXXAuWO-VL9&sz=w400" },
  { id: 102, name: "Pintu Kumar", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1kHeIHzym8u6uFn2w7EKDI32ht7AN6X4g&sz=w400" },
  { id: 103, name: "Sonu Rpf", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=10-0AtkLuHTrjEEfcaz-AIE3HTIvbXYtg&sz=w400" },
  { id: 104, name: "Baakai", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1mRrkXD5GlXszzBj5ZmgMFALUcVP3CRG0&sz=w400" },
  { id: 105, name: "Abhinadh Jha", category: "Ward - 77", basePrice: 100, style: "Bowler", photoUrl: "https://drive.google.com/thumbnail?id=1sjNIiWmzQfO5AhZ7cr8nGyl5_5H_ygHm&sz=w400" },
  { id: 106, name: "Chinu", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1wYeiHf8Z2G_a80P5_Vtl2JOeRxEebJ7E&sz=w400" },
  { id: 107, name: "Jitu Pandit", category: "Ward - 77", basePrice: 100, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1QAzsdk8sBEbJMqmOmEx-AHlbVegFe7Bj&sz=w400" },
  { id: 108, name: "Sourav", category: "Foreign", basePrice: 300, style: "Batsman", photoUrl: "https://drive.google.com/thumbnail?id=1zqODQLg71RqcwvDd5936LgJF_xXoIxOE&sz=w400" },
];

// Helper to generate Google Sheet columns for auction tracking
export const AUCTION_TRACKING_COLUMNS = `
For tracking auction results in Google Sheets, create columns:
| Sr No | Player Name | Category | Base Price | Cricketing Style | Team Sold To | Sold Price | Purse Left | Timestamp |
`;
