// ComicVerse Hub - Static Comic Data
const comicsData = [
  {
    id: '001',
    title: 'The Amazing Spider-Man #1',
    publisher: 'Marvel',
    character: 'Spider-Man',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2024-01-15',
    coverImage: 'https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6eb491718fa21b6df58950a3e26e8c196355cdc0a1cc96c30d8cfccff75fece5a081c1de0e169859f263813addd4b71706',
    synopsis: 'Peter Parker faces his greatest challenge yet as a new villain emerges from the shadows. With great power comes great responsibility, but what happens when that responsibility becomes too much to bear?',
    creators: {
      writer: 'Stan Lee',
      artist: 'Steve Ditko',
      colorist: 'Frank D\'Armata'
    },
    featured: true,
    newRelease: true
  },
  {
    id: '002',
    title: 'Batman: The Dark Knight Returns',
    publisher: 'DC',
    character: 'Batman',
    genre: 'Superhero',
    price: 5.99,
    releaseDate: '2024-01-20',
    coverImage: 'https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6efe726f588b0b5cb08ae279c07ccbbd7d932f272922529df9900bb536c334f5ff6cc87ac4388e90b2cb496643dd330188',
    synopsis: 'An older Bruce Wayne returns to the cape and cowl in a dystopian future. This groundbreaking story redefined the Dark Knight for a new generation.',
    creators: {
      writer: 'Frank Miller',
      artist: 'Frank Miller',
      colorist: 'Lynn Varley'
    },
    featured: true,
    newRelease: false
  },
  {
    id: '003',
    title: 'X-Men: Days of Future Past',
    publisher: 'Marvel',
    character: 'X-Men',
    genre: 'Superhero',
    price: 6.99,
    releaseDate: '2024-02-01',
    coverImage: 'https://pplx-res.cloudinary.com/image/fetch/s--BeXf918e--/t_limit_thumbnail/https://m.media-amazon.com/images/M/MV5BNzNiYWE4NjMtMTU4OS00NmM4LWE4ZjAtYmE5OTA5NjkzODExXkEyXkFqcGc%40._V1_.jpg',
    synopsis: 'The X-Men must prevent a dystopian future by traveling back in time. A classic tale of hope, sacrifice, and the fight for mutant rights.',
    creators: {
      writer: 'Chris Claremont',
      artist: 'John Byrne',
      colorist: 'Glynis Wein'
    },
    featured: true,
    newRelease: true
  },
  {
    id: '004',
    title: 'Watchmen',
    publisher: 'DC',
    character: 'Watchmen',
    genre: 'Superhero',
    price: 7.99,
    releaseDate: '2024-02-10',
    coverImage: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/67cbb39a-437f-5a7e-b5f7-1cec42d1bdef/6d0f1d0c-f843-553d-a45a-f40530316e26.jpg',
    synopsis: 'A deconstruction of the superhero genre set in an alternate 1985 where masked vigilantes are outlawed. A masterpiece of graphic storytelling.',
    creators: {
      writer: 'Alan Moore',
      artist: 'Dave Gibbons',
      colorist: 'John Higgins'
    },
    featured: false,
    newRelease: false
  },
  {
    id: '005',
    title: 'Saga #1',
    publisher: 'Image',
    character: 'Saga',
    genre: 'Sci-Fi',
    price: 3.99,
    releaseDate: '2024-02-15',
    coverImage: 'https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6eb85d9e31d4af013a9d9557a702b9d0983a33fbae0c1a1b7e375015f62df2050c677fcfa80b0825a627d3fbd7247ac8a82ffa88546af0b48b44a94aee9049883c',
    synopsis: 'Two soldiers from opposite sides of an intergalactic war fall in love and must protect their newborn daughter from both armies.',
    creators: {
      writer: 'Brian K. Vaughan',
      artist: 'Fiona Staples',
      colorist: 'Fiona Staples'
    },
    featured: true,
    newRelease: true
  },
  {
    id: '006',
    title: 'The Walking Dead #1',
    publisher: 'Image',
    character: 'Walking Dead',
    genre: 'Horror',
    price: 4.99,
    releaseDate: '2024-02-20',
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop',
    synopsis: 'Rick Grimes awakens from a coma to find the world overrun by zombies. The survival story that changed the horror genre forever.',
    creators: {
      writer: 'Robert Kirkman',
      artist: 'Tony Moore',
      colorist: 'Tony Moore'
    },
    featured: false,
    newRelease: false
  },
  {
    id: '007',
    title: 'Superman: All-Star',
    publisher: 'DC',
    character: 'Superman',
    genre: 'Superhero',
    price: 5.99,
    releaseDate: '2024-03-01',
    coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=450&fit=crop&auto=format',
    synopsis: 'A timeless retelling of Superman\'s origin and early days. A celebration of the Man of Steel that captures the essence of hope and heroism.',
    creators: {
      writer: 'Grant Morrison',
      artist: 'Frank Quitely',
      colorist: 'Jamie Grant'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '008',
    title: 'The Incredible Hulk #1',
    publisher: 'Marvel',
    character: 'Hulk',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2024-03-05',
    coverImage: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Dr. Bruce Banner transforms into the Incredible Hulk when angered. A tale of inner conflict and raw power.',
    creators: {
      writer: 'Stan Lee',
      artist: 'Jack Kirby',
      colorist: 'Stan Goldberg'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '009',
    title: 'Invincible #1',
    publisher: 'Image',
    character: 'Invincible',
    genre: 'Superhero',
    price: 3.99,
    releaseDate: '2024-03-10',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Mark Grayson discovers he has superpowers inherited from his father. But being a superhero is more complicated than he imagined.',
    creators: {
      writer: 'Robert Kirkman',
      artist: 'Cory Walker',
      colorist: 'Bill Crabtree'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '010',
    title: 'Wonder Woman: Year One',
    publisher: 'DC',
    character: 'Wonder Woman',
    genre: 'Superhero',
    price: 5.99,
    releaseDate: '2024-03-15',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Diana Prince leaves Themyscira to become Wonder Woman in the world of men. A modern origin story for the Amazon warrior.',
    creators: {
      writer: 'Greg Rucka',
      artist: 'Nicola Scott',
      colorist: 'Romulo Fajardo Jr.'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '011',
    title: 'Iron Man: Extremis',
    publisher: 'Marvel',
    character: 'Iron Man',
    genre: 'Superhero',
    price: 6.99,
    releaseDate: '2024-03-20',
    coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Tony Stark faces a new technological threat that pushes his abilities to the limit. A story that redefined Iron Man for the modern era.',
    creators: {
      writer: 'Warren Ellis',
      artist: 'Adi Granov',
      colorist: 'Adi Granov'
    },
    featured: false,
    newRelease: false
  },
  {
    id: '012',
    title: 'The Flash: Rebirth',
    publisher: 'DC',
    character: 'The Flash',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2024-03-25',
    coverImage: 'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Barry Allen returns from the Speed Force to face new challenges and protect Central City from threats that move faster than light.',
    creators: {
      writer: 'Geoff Johns',
      artist: 'Ethan Van Sciver',
      colorist: 'Brian Buccellato'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '013',
    title: 'Deadpool #1',
    publisher: 'Marvel',
    character: 'Deadpool',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2024-04-01',
    coverImage: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=450&fit=crop&auto=format',
    synopsis: 'The Merc with a Mouth returns in an all-new series filled with action, humor, and fourth-wall breaking antics.',
    creators: {
      writer: 'Joe Kelly',
      artist: 'Ed McGuinness',
      colorist: 'Jason Keith'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '014',
    title: 'Green Lantern: Rebirth',
    publisher: 'DC',
    character: 'Green Lantern',
    genre: 'Superhero',
    price: 5.99,
    releaseDate: '2024-04-05',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Hal Jordan returns as Green Lantern in this epic rebirth story that reignites the Green Lantern Corps.',
    creators: {
      writer: 'Geoff Johns',
      artist: 'Ethan Van Sciver',
      colorist: 'Moose Baumann'
    },
    featured: false,
    newRelease: false
  },
  {
    id: '015',
    title: 'Y: The Last Man #1',
    publisher: 'Vertigo',
    character: 'Y: The Last Man',
    genre: 'Sci-Fi',
    price: 3.99,
    releaseDate: '2024-04-10',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Yorick Brown is the last man on Earth after a mysterious plague wipes out every male mammal. A journey of survival and discovery.',
    creators: {
      writer: 'Brian K. Vaughan',
      artist: 'Pia Guerra',
      colorist: 'Jose Marzan Jr.'
    },
    featured: false,
    newRelease: false
  },
  {
    id: '016',
    title: 'The Sandman #1',
    publisher: 'Vertigo',
    character: 'Sandman',
    genre: 'Fantasy',
    price: 6.99,
    releaseDate: '2024-04-15',
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Dream of the Endless escapes from captivity and must rebuild his realm. A masterpiece of fantasy and mythology.',
    creators: {
      writer: 'Neil Gaiman',
      artist: 'Sam Kieth',
      colorist: 'Daniel Vozzo'
    },
    featured: true,
    newRelease: false
  },
  {
    id: '017',
    title: 'Mystery Box - Limited Edition',
    publisher: 'Various',
    character: 'Mystery',
    genre: 'Collectible',
    price: 30.00,
    releaseDate: '2024-05-01',
    coverImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Limited Edition Mystery Box containing prizes worth $60! Each box is unique and may contain rare comics, signed editions, collectibles, and exclusive merchandise. Perfect for collectors and comic enthusiasts.',
    creators: {
      writer: 'Various',
      artist: 'Various',
      colorist: 'Various'
    },
    featured: true,
    newRelease: true
  },
  {
    id: '018',
    title: 'Spectacular Spider-Man #189 Signed By Stan Lee',
    publisher: 'Marvel',
    character: 'Spider-Man',
    genre: 'Superhero',
    price: 299.99,
    releaseDate: '2024-05-05',
    coverImage: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=450&fit=crop&auto=format',
    synopsis: 'A rare collectible issue of Spectacular Spider-Man #189, personally signed by the legendary Stan Lee. This is a must-have for any serious Spider-Man collector. Comes with certificate of authenticity.',
    creators: {
      writer: 'Stan Lee',
      artist: 'Various',
      colorist: 'Various'
    },
    featured: true,
    newRelease: false
  },
  {
    id: '019',
    title: 'Amazing Adventures #11 Signed By Stan Lee With COA',
    publisher: 'Marvel',
    character: 'Various',
    genre: 'Superhero',
    price: 349.99,
    releaseDate: '2024-05-10',
    coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=450&fit=crop&auto=format',
    synopsis: 'An extremely rare issue of Amazing Adventures #11, signed by the iconic Stan Lee. Includes Certificate of Authenticity (COA) verifying the signature. A prized possession for any Marvel collector.',
    creators: {
      writer: 'Stan Lee',
      artist: 'Various',
      colorist: 'Various'
    },
    featured: true,
    newRelease: false
  },
  {
    id: '020',
    title: 'Doom Treasury Edition',
    publisher: 'Marvel',
    character: 'Doctor Doom',
    genre: 'Superhero',
    price: 59.99,
    releaseDate: '2024-05-15',
    coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=450&fit=crop&auto=format',
    synopsis: 'The complete Doom Treasury Edition featuring the greatest stories of Victor Von Doom. This oversized hardcover collection includes classic tales of Marvel\'s most complex villain.',
    creators: {
      writer: 'Various',
      artist: 'Various',
      colorist: 'Various'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '021',
    title: 'Absolute Batman #3',
    publisher: 'DC',
    character: 'Batman',
    genre: 'Superhero',
    price: 35.99,
    releaseDate: '2024-05-20',
    coverImage: 'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=300&h=450&fit=crop&auto=format',
    synopsis: 'The Absolute Edition of Batman #3 in premium oversized hardcover format. Features enhanced artwork, bonus content, and slipcase presentation. A deluxe collector\'s edition.',
    creators: {
      writer: 'Various',
      artist: 'Various',
      colorist: 'Various'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '022',
    title: 'Absolute Batman #2',
    publisher: 'DC',
    character: 'Batman',
    genre: 'Superhero',
    price: 35.99,
    releaseDate: '2024-05-25',
    coverImage: 'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=300&h=450&fit=crop&auto=format',
    synopsis: 'The Absolute Edition of Batman #2 in premium oversized hardcover format. Features enhanced artwork, bonus content, and slipcase presentation. A deluxe collector\'s edition.',
    creators: {
      writer: 'Various',
      artist: 'Various',
      colorist: 'Various'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '023',
    title: 'Absolute Batman: Three Jokers HC',
    publisher: 'DC',
    character: 'Batman',
    genre: 'Superhero',
    price: 119.99,
    releaseDate: '2024-06-01',
    coverImage: 'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=300&h=450&fit=crop&auto=format',
    synopsis: 'The complete Three Jokers story in Absolute format. This hardcover edition features the groundbreaking story that explores the mystery of the Joker. Includes bonus material and enhanced artwork.',
    creators: {
      writer: 'Geoff Johns',
      artist: 'Jason Fabok',
      colorist: 'Brad Anderson'
    },
    featured: true,
    newRelease: false
  },
  {
    id: '024',
    title: 'Marvel Encyclopedia New Edition HC',
    publisher: 'DK',
    character: 'Various',
    genre: 'Reference',
    price: 35.99,
    releaseDate: '2024-06-05',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop&auto=format',
    synopsis: 'The definitive guide to the Marvel Universe! This comprehensive hardcover encyclopedia features detailed profiles of hundreds of Marvel characters, teams, and storylines. Updated with the latest heroes and villains.',
    creators: {
      writer: 'DK Publishing',
      artist: 'Various',
      colorist: 'Various'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '025',
    title: 'Marvel Year By Year: A Visual History New Edition',
    publisher: 'DK',
    character: 'Various',
    genre: 'Reference',
    price: 41.99,
    releaseDate: '2024-06-10',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop&auto=format',
    synopsis: 'A comprehensive visual history of Marvel Comics from its inception to the present day. This updated edition chronicles the evolution of the Marvel Universe year by year with stunning artwork and detailed timelines.',
    creators: {
      writer: 'DK Publishing',
      artist: 'Various',
      colorist: 'Various'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '026',
    title: 'The DC Comics Encyclopedia New Edition HC',
    publisher: 'DK',
    character: 'Various',
    genre: 'Reference',
    price: 35.99,
    releaseDate: '2024-06-15',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop&auto=format',
    synopsis: 'The ultimate guide to the DC Universe! This comprehensive hardcover encyclopedia features detailed profiles of DC\'s greatest heroes, villains, and teams. Updated with the latest characters and storylines from the DC multiverse.',
    creators: {
      writer: 'DK Publishing',
      artist: 'Various',
      colorist: 'Various'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '027',
    title: 'Immortal Thor',
    publisher: 'Marvel',
    character: 'Thor',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2025-01-10',
    coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=450&fit=crop&auto=format',
    synopsis: 'The Roxxon Age of Marvel Comics begins! Thor faces new challenges as the immortal god of thunder in this epic new series.',
    creators: {
      writer: 'Al Ewing',
      artist: 'Martin Coccolo',
      colorist: 'Matthew Wilson'
    },
    featured: true,
    newRelease: true
  },
  {
    id: '028',
    title: 'Resurrection of Magneto',
    publisher: 'Marvel',
    character: 'Magneto',
    genre: 'Superhero',
    price: 5.99,
    releaseDate: '2025-01-15',
    coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Storm and Magneto\'s friendship explained in this powerful story of resurrection and redemption.',
    creators: {
      writer: 'Al Ewing',
      artist: 'Luciano Vecchio',
      colorist: 'David Curiel'
    },
    featured: true,
    newRelease: true
  },
  {
    id: '029',
    title: '1776 (2025) #1',
    publisher: 'Marvel',
    character: 'Various',
    genre: 'Historical',
    price: 4.99,
    releaseDate: '2025-01-20',
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop&auto=format',
    synopsis: 'A historical retelling of America\'s founding, reimagined through the Marvel Universe lens.',
    creators: {
      writer: 'J. Michael Straczynski',
      artist: 'Steve Epting',
      colorist: 'Frank D\'Armata'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '030',
    title: 'PREDATOR: BADLANDS (2025) #1',
    publisher: 'Marvel',
    character: 'Predator',
    genre: 'Sci-Fi',
    price: 4.99,
    releaseDate: '2025-01-22',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop&auto=format',
    synopsis: 'The ultimate hunter returns in the badlands. A new Predator story that pushes the boundaries of survival horror.',
    creators: {
      writer: 'Ed Brisson',
      artist: 'Kev Walker',
      colorist: 'Frank D\'Armata'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '031',
    title: 'X-MEN: TALES FROM THE AGE OF APOCALYPSE (2025) #1',
    publisher: 'Marvel',
    character: 'X-Men',
    genre: 'Superhero',
    price: 5.99,
    releaseDate: '2025-01-25',
    coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Return to the Age of Apocalypse in this collection of tales from the darkest timeline in X-Men history.',
    creators: {
      writer: 'Larry Hama',
      artist: 'Steve Epting',
      colorist: 'Laura Martin'
    },
    featured: true,
    newRelease: true
  },
  {
    id: '032',
    title: 'Amazing Spider-Man: Torn (2025) #2',
    publisher: 'Marvel',
    character: 'Spider-Man',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2025-01-28',
    coverImage: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Peter Parker faces his greatest internal conflict as Spider-Man is torn between duty and desire.',
    creators: {
      writer: 'J. Michael Straczynski',
      artist: 'John Romita Jr.',
      colorist: 'Dean White'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '033',
    title: 'Strange Tales (2025) #2',
    publisher: 'Marvel',
    character: 'Doctor Strange',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2025-01-30',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop&auto=format',
    synopsis: 'The Sorcerer Supreme faces mystical threats from beyond the veil of reality in this anthology series.',
    creators: {
      writer: 'Jed MacKay',
      artist: 'Lee Garbett',
      colorist: 'Antonio Fabela'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '034',
    title: 'Spider-Man Noir (2025) #2',
    publisher: 'Marvel',
    character: 'Spider-Man',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2025-02-01',
    coverImage: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=450&fit=crop&auto=format',
    synopsis: 'The wall-crawler returns to the dark streets of 1930s New York in this noir-inspired adventure.',
    creators: {
      writer: 'David Hine',
      artist: 'Fabrice Sapolsky',
      colorist: 'Carmine Di Giandomenico'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '035',
    title: 'Marvel: Black, White & Blood and Guts (2025) #2',
    publisher: 'Marvel',
    character: 'Various',
    genre: 'Superhero',
    price: 5.99,
    releaseDate: '2025-02-05',
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop&auto=format',
    synopsis: 'An anthology series featuring Marvel\'s greatest heroes in stunning black, white, and red artwork.',
    creators: {
      writer: 'Various',
      artist: 'Various',
      colorist: 'Various'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '036',
    title: 'Rogue Storm (2025) #2',
    publisher: 'Marvel',
    character: 'Storm',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2025-02-08',
    coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Ororo Munroe embraces her full power as the weather goddess in this solo series exploring her destiny.',
    creators: {
      writer: 'Al Ewing',
      artist: 'Valerio Schiti',
      colorist: 'David Curiel'
    },
    featured: true,
    newRelease: true
  },
  {
    id: '037',
    title: 'Sinister\'s Six (2025) #2',
    publisher: 'Marvel',
    character: 'Spider-Man',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2025-02-10',
    coverImage: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Mister Sinister assembles his own team of six to challenge Spider-Man in this twisted tale.',
    creators: {
      writer: 'Zeb Wells',
      artist: 'John Romita Jr.',
      colorist: 'Morry Hollowell'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '038',
    title: 'Iron & Frost (2025) #2',
    publisher: 'Marvel',
    character: 'Iron Man',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2025-02-12',
    coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Iron Man and the Frost Giants clash in this epic crossover that tests the limits of technology and magic.',
    creators: {
      writer: 'Christopher Cantwell',
      artist: 'CAFU',
      colorist: 'Frank D\'Armata'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '039',
    title: 'Spider-Man \'94 (2025) #3',
    publisher: 'Marvel',
    character: 'Spider-Man',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2025-02-15',
    coverImage: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Relive the classic 1990s Spider-Man adventures in this nostalgic series that captures the era perfectly.',
    creators: {
      writer: 'Peter David',
      artist: 'Todd McFarlane',
      colorist: 'Steve Oliff'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '040',
    title: 'Star Wars: Han Solo - Hunt for the Falcon (2025) #3',
    publisher: 'Marvel',
    character: 'Han Solo',
    genre: 'Sci-Fi',
    price: 4.99,
    releaseDate: '2025-02-18',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Han Solo embarks on a galaxy-spanning quest to recover his beloved Millennium Falcon.',
    creators: {
      writer: 'Charles Soule',
      artist: 'Phil Noto',
      colorist: 'Phil Noto'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '041',
    title: 'Marvel Knights: The World to Come (2025) #4',
    publisher: 'Marvel',
    character: 'Various',
    genre: 'Superhero',
    price: 5.99,
    releaseDate: '2025-02-20',
    coverImage: 'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=300&h=450&fit=crop&auto=format',
    synopsis: 'The Marvel Knights face a threat that could reshape reality itself in this mind-bending series.',
    creators: {
      writer: 'Christopher Priest',
      artist: 'Joe Quesada',
      colorist: 'Richard Isanove'
    },
    featured: true,
    newRelease: true
  },
  {
    id: '042',
    title: 'Fantastic Four (2025) #5',
    publisher: 'Marvel',
    character: 'Fantastic Four',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2025-02-22',
    coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Marvel\'s First Family faces their greatest challenge yet as they explore the furthest reaches of the multiverse.',
    creators: {
      writer: 'Ryan North',
      artist: 'Iban Coello',
      colorist: 'Jesus Aburtov'
    },
    featured: true,
    newRelease: true
  },
  {
    id: '043',
    title: 'New Avengers (2025) #6',
    publisher: 'Marvel',
    character: 'Avengers',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2025-02-25',
    coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=450&fit=crop&auto=format',
    synopsis: 'A new team of Avengers assembles to face threats too great for any single hero to handle alone.',
    creators: {
      writer: 'Jonathan Hickman',
      artist: 'Esad Ribic',
      colorist: 'Ive Svorcina'
    },
    featured: true,
    newRelease: true
  },
  {
    id: '044',
    title: 'Moon Knight: Fist of Khonshu (2024)',
    publisher: 'Marvel',
    character: 'Moon Knight',
    genre: 'Superhero',
    price: 5.99,
    releaseDate: '2024-12-15',
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Marc Spector embraces his role as the Fist of Khonshu in this action-packed series exploring the many faces of Moon Knight.',
    creators: {
      writer: 'Jed MacKay',
      artist: 'Alessandro Cappuccio',
      colorist: 'Rachelle Rosenberg'
    },
    featured: true,
    newRelease: false
  },
  {
    id: '045',
    title: 'Captain America (2018)',
    publisher: 'Marvel',
    character: 'Captain America',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2018-07-04',
    coverImage: 'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Steve Rogers returns as Captain America in this modern take on the Sentinel of Liberty.',
    creators: {
      writer: 'Ta-Nehisi Coates',
      artist: 'Leinil Francis Yu',
      colorist: 'Sunny Gho'
    },
    featured: false,
    newRelease: false
  },
  {
    id: '046',
    title: 'Miracleman (2022)',
    publisher: 'Marvel',
    character: 'Miracleman',
    genre: 'Superhero',
    price: 6.99,
    releaseDate: '2022-03-15',
    coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=450&fit=crop&auto=format',
    synopsis: 'The legendary hero returns in this groundbreaking series that redefined the superhero genre.',
    creators: {
      writer: 'Alan Moore',
      artist: 'Alan Davis',
      colorist: 'Steve Oliff'
    },
    featured: true,
    newRelease: false
  },
  {
    id: '047',
    title: 'Immortal Hulk (2020)',
    publisher: 'Marvel',
    character: 'Hulk',
    genre: 'Superhero',
    price: 5.99,
    releaseDate: '2020-06-10',
    coverImage: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Bruce Banner cannot die, but the Hulk can. A horror-infused take on the Green Goliath that explores the darkest corners of the character.',
    creators: {
      writer: 'Al Ewing',
      artist: 'Joe Bennett',
      colorist: 'Paul Mounts'
    },
    featured: true,
    newRelease: false
  },
  {
    id: '048',
    title: 'Wolverine By Chris Claremont (2025) #1',
    publisher: 'Marvel',
    character: 'Wolverine',
    genre: 'Superhero',
    price: 5.99,
    releaseDate: '2025-01-12',
    coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=450&fit=crop&auto=format',
    synopsis: 'The legendary X-Men writer returns to tell new stories of the best there is at what he does.',
    creators: {
      writer: 'Chris Claremont',
      artist: 'John Byrne',
      colorist: 'Glynis Wein'
    },
    featured: true,
    newRelease: true
  },
  {
    id: '049',
    title: 'Captain America (2025) #2',
    publisher: 'Marvel',
    character: 'Captain America',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2025-01-18',
    coverImage: 'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Steve Rogers continues his mission as Captain America in a world that needs heroes more than ever.',
    creators: {
      writer: 'Chip Zdarsky',
      artist: 'Daniel Acuña',
      colorist: 'Daniel Acuña'
    },
    featured: false,
    newRelease: true
  },
  {
    id: '050',
    title: 'The Amazing Spider-Man (2025) #9',
    publisher: 'Marvel',
    character: 'Spider-Man',
    genre: 'Superhero',
    price: 4.99,
    releaseDate: '2025-02-28',
    coverImage: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=450&fit=crop&auto=format',
    synopsis: 'Peter Parker faces new challenges as Spider-Man in this ongoing series that captures the essence of the web-slinger.',
    creators: {
      writer: 'Zeb Wells',
      artist: 'John Romita Jr.',
      colorist: 'Morry Hollowell'
    },
    featured: true,
    newRelease: true
  }
];

// Helper functions to get filtered data
function getComicsByPublisher(publisher) {
  return comicsData.filter(comic => comic.publisher === publisher);
}

function getComicsByCharacter(character) {
  return comicsData.filter(comic => comic.character === character);
}

function getComicsByGenre(genre) {
  return comicsData.filter(comic => comic.genre === genre);
}

function getFeaturedComics() {
  return comicsData.filter(comic => comic.featured);
}

function getNewReleases() {
  return comicsData.filter(comic => comic.newRelease);
}

function getComicById(id) {
  return comicsData.find(comic => comic.id === id);
}

// Get unique values for filters
function getUniquePublishers() {
  return [...new Set(comicsData.map(comic => comic.publisher))];
}

function getUniqueCharacters() {
  return [...new Set(comicsData.map(comic => comic.character))];
}

function getUniqueGenres() {
  return [...new Set(comicsData.map(comic => comic.genre))];
}