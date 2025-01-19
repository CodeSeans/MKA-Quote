function Generate() {
  let quotes = {
    "― Mustafa Kemal Atatürk":
      '"Teachers are the one and only people who save nations."',
    " — ― Mustafa Kemal Atatürk":
      '"Peace at Home, Peace in the World"',
    "— Mustafa Kemal Atatürk": 
        '"Our true mentor in life is science."',
    "— Mustafa Kemal Atatürk":
      '"Unless a nation is life faces peril, war is murder.”"',
    "— Mustafa Kemal Atatürk":
     '"Sovereignty is not given, it is taken."',
    " ― Mustafa Kemal Atatürk":
      '"Science is the most reliable guide in life"',
    "  ― Mustafa Kemal Atatürk":
      'Victory is for those who can say "Victory is mine". Success is for those who can begin saying "I will succeed" and say "I have succeeded" in the end.."',
    " — ― Mustafa Kemal Atatürk":
      '"Authority, without any condition and reservation, belongs to the nation."',
    " — Mustafa Kemal Atatürk": 
    '"İnsanlık tek bir vücuttur ve her ulus bu vücudun bir parçasıdır.."',
    " — Mustafa Kemal Atatürk":
      '"A nation that does not know its past has no future."',
    " — Mustafa Kemal Atatürk":
      '"Education is the most important weapon to change the fate of a nation"',
    " — Mustafa Kemal Atatürk":
      '"The foundation of a democratic society is tolerance and mutual respect"',
  };

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = authorPicker;

    let randomAuthors = Object.keys(quotes);
    let authorPicker =
      randomAuthors[Math.floor(Math.random() * randomAuthors.length)];
    let quote = quotes[authorPicker];
  
  }
  Generate();








