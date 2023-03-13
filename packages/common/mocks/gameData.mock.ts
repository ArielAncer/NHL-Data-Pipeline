export const gameDataMock = {
  copyright:
    'NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2023. All Rights Reserved.',
  gamePk: 2022021053,
  link: '/api/v1/game/2022021053/feed/live',
  metaData: {
    wait: 10,
    timeStamp: '20230313_034901'
  },
  gameData: {
    game: {
      pk: 2022021053,
      season: '20222023',
      type: 'R'
    },
    datetime: {
      dateTime: '2023-03-12T17:30:00Z',
      endDateTime: '2023-03-12T19:14:38Z'
    },
    status: {
      abstractGameState: 'Final',
      codedGameState: '7',
      detailedState: 'Final',
      statusCode: '7',
      startTimeTBD: false
    },
    teams: {
      away: {
        id: 6,
        name: 'Boston Bruins',
        link: '/api/v1/teams/6',
        venue: {
          id: 5085,
          name: 'TD Garden',
          link: '/api/v1/venues/5085',
          city: 'Boston',
          timeZone: {
            id: 'America/New_York',
            offset: -4,
            tz: 'EDT'
          }
        },
        abbreviation: 'BOS',
        triCode: 'BOS',
        teamName: 'Bruins',
        locationName: 'Boston',
        firstYearOfPlay: '1924',
        division: {
          id: 17,
          name: 'Atlantic',
          nameShort: 'ATL',
          link: '/api/v1/divisions/17',
          abbreviation: 'A'
        },
        conference: {
          id: 6,
          name: 'Eastern',
          link: '/api/v1/conferences/6'
        },
        franchise: {
          franchiseId: 6,
          teamName: 'Bruins',
          link: '/api/v1/franchises/6'
        },
        shortName: 'Boston',
        officialSiteUrl: 'http://www.bostonbruins.com/',
        franchiseId: 6,
        active: true
      },
      home: {
        id: 17,
        name: 'Detroit Red Wings',
        link: '/api/v1/teams/17',
        venue: {
          id: 5145,
          name: 'Little Caesars Arena',
          link: '/api/v1/venues/5145',
          city: 'Detroit',
          timeZone: {
            id: 'America/Detroit',
            offset: -4,
            tz: 'EDT'
          }
        },
        abbreviation: 'DET',
        triCode: 'DET',
        teamName: 'Red Wings',
        locationName: 'Detroit',
        firstYearOfPlay: '1932',
        division: {
          id: 17,
          name: 'Atlantic',
          nameShort: 'ATL',
          link: '/api/v1/divisions/17',
          abbreviation: 'A'
        },
        conference: {
          id: 6,
          name: 'Eastern',
          link: '/api/v1/conferences/6'
        },
        franchise: {
          franchiseId: 12,
          teamName: 'Red Wings',
          link: '/api/v1/franchises/12'
        },
        shortName: 'Detroit',
        officialSiteUrl: 'http://www.detroitredwings.com/',
        franchiseId: 12,
        active: true
      }
    },
    players: {
      ID8473419: {
        id: 8473419,
        fullName: 'Brad Marchand',
        link: '/api/v1/people/8473419',
        firstName: 'Brad',
        lastName: 'Marchand',
        primaryNumber: '63',
        birthDate: '1988-05-11',
        currentAge: 34,
        birthCity: 'Halifax',
        birthStateProvince: 'NS',
        birthCountry: 'CAN',
        nationality: 'CAN',
        height: '5\' 9"',
        weight: 176,
        active: true,
        alternateCaptain: true,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'L',
          name: 'Left Wing',
          type: 'Forward',
          abbreviation: 'LW'
        }
      },
      ID8471276: {
        id: 8471276,
        fullName: 'David Krejci',
        link: '/api/v1/people/8471276',
        firstName: 'David',
        lastName: 'Krejci',
        primaryNumber: '46',
        birthDate: '1986-04-28',
        currentAge: 36,
        birthCity: 'Sternberk',
        birthCountry: 'CZE',
        nationality: 'CZE',
        height: '6\' 0"',
        weight: 192,
        active: true,
        alternateCaptain: true,
        captain: false,
        rookie: false,
        shootsCatches: 'R',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'C',
          name: 'Center',
          type: 'Forward',
          abbreviation: 'C'
        }
      },
      ID8477931: {
        id: 8477931,
        fullName: 'Tomas Nosek',
        link: '/api/v1/people/8477931',
        firstName: 'Tomas',
        lastName: 'Nosek',
        primaryNumber: '92',
        birthDate: '1992-09-01',
        currentAge: 30,
        birthCity: 'Pardubice',
        birthCountry: 'CZE',
        nationality: 'CZE',
        height: '6\' 3"',
        weight: 205,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'L',
          name: 'Left Wing',
          type: 'Forward',
          abbreviation: 'LW'
        }
      },
      ID8477956: {
        id: 8477956,
        fullName: 'David Pastrnak',
        link: '/api/v1/people/8477956',
        firstName: 'David',
        lastName: 'Pastrnak',
        primaryNumber: '88',
        birthDate: '1996-05-25',
        currentAge: 26,
        birthCity: 'Havirov',
        birthCountry: 'CZE',
        nationality: 'CZE',
        height: '6\' 1"',
        weight: 195,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'R',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'R',
          name: 'Right Wing',
          type: 'Forward',
          abbreviation: 'RW'
        }
      },
      ID8480821: {
        id: 8480821,
        fullName: 'Filip Zadina',
        link: '/api/v1/people/8480821',
        firstName: 'Filip',
        lastName: 'Zadina',
        primaryNumber: '11',
        birthDate: '1999-11-27',
        currentAge: 23,
        birthCity: 'Pardubice',
        birthCountry: 'CZE',
        nationality: 'CZE',
        height: '6\' 0"',
        weight: 190,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'R',
          name: 'Right Wing',
          type: 'Forward',
          abbreviation: 'RW'
        }
      },
      ID8475200: {
        id: 8475200,
        fullName: 'Dmitry Orlov',
        link: '/api/v1/people/8475200',
        firstName: 'Dmitry',
        lastName: 'Orlov',
        primaryNumber: '81',
        birthDate: '1991-07-23',
        currentAge: 31,
        birthCity: 'Novokuznetsk',
        birthCountry: 'RUS',
        nationality: 'RUS',
        height: '5\' 11"',
        weight: 214,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'D',
          name: 'Defenseman',
          type: 'Defenseman',
          abbreviation: 'D'
        }
      },
      ID8475762: {
        id: 8475762,
        fullName: 'Derek Forbort',
        link: '/api/v1/people/8475762',
        firstName: 'Derek',
        lastName: 'Forbort',
        primaryNumber: '28',
        birthDate: '1992-03-04',
        currentAge: 31,
        birthCity: 'Duluth',
        birthStateProvince: 'MN',
        birthCountry: 'USA',
        nationality: 'USA',
        height: '6\' 4"',
        weight: 208,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'D',
          name: 'Defenseman',
          type: 'Defenseman',
          abbreviation: 'D'
        }
      },
      ID8479325: {
        id: 8479325,
        fullName: 'Charlie McAvoy',
        link: '/api/v1/people/8479325',
        firstName: 'Charlie',
        lastName: 'McAvoy',
        primaryNumber: '73',
        birthDate: '1997-12-21',
        currentAge: 25,
        birthCity: 'Long Beach',
        birthStateProvince: 'NY',
        birthCountry: 'USA',
        nationality: 'USA',
        height: '6\' 1"',
        weight: 209,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'R',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'D',
          name: 'Defenseman',
          type: 'Defenseman',
          abbreviation: 'D'
        }
      },
      ID8476874: {
        id: 8476874,
        fullName: 'Olli Maatta',
        link: '/api/v1/people/8476874',
        firstName: 'Olli',
        lastName: 'Maatta',
        primaryNumber: '2',
        birthDate: '1994-08-22',
        currentAge: 28,
        birthCity: 'Jyväskylä',
        birthCountry: 'FIN',
        nationality: 'FIN',
        height: '6\' 2"',
        weight: 207,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'D',
          name: 'Defenseman',
          type: 'Defenseman',
          abbreviation: 'D'
        }
      },
      ID8478512: {
        id: 8478512,
        fullName: 'Austin Czarnik',
        link: '/api/v1/people/8478512',
        firstName: 'Austin',
        lastName: 'Czarnik',
        primaryNumber: '21',
        birthDate: '1992-12-12',
        currentAge: 30,
        birthCity: 'Detroit',
        birthStateProvince: 'MI',
        birthCountry: 'USA',
        nationality: 'USA',
        height: '5\' 9"',
        weight: 170,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'R',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'C',
          name: 'Center',
          type: 'Forward',
          abbreviation: 'C'
        }
      },
      ID8477462: {
        id: 8477462,
        fullName: 'Robert Hagg',
        link: '/api/v1/people/8477462',
        firstName: 'Robert',
        lastName: 'Hagg',
        primaryNumber: '38',
        birthDate: '1995-02-08',
        currentAge: 28,
        birthCity: 'Uppsala',
        birthCountry: 'SWE',
        nationality: 'SWE',
        height: '6\' 2"',
        weight: 210,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'D',
          name: 'Defenseman',
          type: 'Defenseman',
          abbreviation: 'D'
        }
      },
      ID8475163: {
        id: 8475163,
        fullName: 'Alex Chiasson',
        link: '/api/v1/people/8475163',
        firstName: 'Alex',
        lastName: 'Chiasson',
        primaryNumber: '48',
        birthDate: '1990-10-01',
        currentAge: 32,
        birthCity: 'Montréal',
        birthStateProvince: 'QC',
        birthCountry: 'CAN',
        nationality: 'CAN',
        height: '6\' 4"',
        weight: 208,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'R',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'R',
          name: 'Right Wing',
          type: 'Forward',
          abbreviation: 'RW'
        }
      },
      ID8476891: {
        id: 8476891,
        fullName: 'Matt Grzelcyk',
        link: '/api/v1/people/8476891',
        firstName: 'Matt',
        lastName: 'Grzelcyk',
        primaryNumber: '48',
        birthDate: '1994-01-05',
        currentAge: 29,
        birthCity: 'Charlestown',
        birthStateProvince: 'MA',
        birthCountry: 'USA',
        nationality: 'USA',
        height: '5\' 10"',
        weight: 176,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'D',
          name: 'Defenseman',
          type: 'Defenseman',
          abbreviation: 'D'
        }
      },
      ID8478498: {
        id: 8478498,
        fullName: 'Jake DeBrusk',
        link: '/api/v1/people/8478498',
        firstName: 'Jake',
        lastName: 'DeBrusk',
        primaryNumber: '74',
        birthDate: '1996-10-17',
        currentAge: 26,
        birthCity: 'Edmonton',
        birthStateProvince: 'AB',
        birthCountry: 'CAN',
        nationality: 'CAN',
        height: '6\' 0"',
        weight: 197,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'L',
          name: 'Left Wing',
          type: 'Forward',
          abbreviation: 'LW'
        }
      },
      ID8477365: {
        id: 8477365,
        fullName: 'Connor Clifton',
        link: '/api/v1/people/8477365',
        firstName: 'Connor',
        lastName: 'Clifton',
        primaryNumber: '75',
        birthDate: '1995-04-28',
        currentAge: 27,
        birthCity: 'Matawan',
        birthStateProvince: 'NJ',
        birthCountry: 'USA',
        nationality: 'USA',
        height: '5\' 11"',
        weight: 190,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'R',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'D',
          name: 'Defenseman',
          type: 'Defenseman',
          abbreviation: 'D'
        }
      },
      ID8479365: {
        id: 8479365,
        fullName: 'Trent Frederic',
        link: '/api/v1/people/8479365',
        firstName: 'Trent',
        lastName: 'Frederic',
        primaryNumber: '11',
        birthDate: '1998-02-11',
        currentAge: 25,
        birthCity: 'St. Louis',
        birthStateProvince: 'MO',
        birthCountry: 'USA',
        nationality: 'USA',
        height: '6\' 3"',
        weight: 214,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'C',
          name: 'Center',
          type: 'Forward',
          abbreviation: 'C'
        }
      },
      ID8478013: {
        id: 8478013,
        fullName: 'Jake Walman',
        link: '/api/v1/people/8478013',
        firstName: 'Jake',
        lastName: 'Walman',
        primaryNumber: '96',
        birthDate: '1996-02-20',
        currentAge: 27,
        birthCity: 'Toronto',
        birthStateProvince: 'ON',
        birthCountry: 'CAN',
        nationality: 'CAN',
        height: '6\' 2"',
        weight: 215,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'D',
          name: 'Defenseman',
          type: 'Defenseman',
          abbreviation: 'D'
        }
      },
      ID8480880: {
        id: 8480880,
        fullName: 'Jakub Lauko',
        link: '/api/v1/people/8480880',
        firstName: 'Jakub',
        lastName: 'Lauko',
        primaryNumber: '94',
        birthDate: '2000-03-28',
        currentAge: 22,
        birthCity: 'Prague',
        birthCountry: 'CZE',
        nationality: 'CZE',
        height: '6\' 0"',
        weight: 196,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: true,
        shootsCatches: 'L',
        rosterStatus: 'N',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'C',
          name: 'Center',
          type: 'Forward',
          abbreviation: 'C'
        }
      },
      ID8481013: {
        id: 8481013,
        fullName: 'Jonatan Berggren',
        link: '/api/v1/people/8481013',
        firstName: 'Jonatan',
        lastName: 'Berggren',
        primaryNumber: '52',
        birthDate: '2000-07-16',
        currentAge: 22,
        birthCity: 'Uppsala',
        birthCountry: 'SWE',
        nationality: 'SWE',
        height: '5\' 11"',
        weight: 197,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: true,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'R',
          name: 'Right Wing',
          type: 'Forward',
          abbreviation: 'RW'
        }
      },
      ID8470638: {
        id: 8470638,
        fullName: 'Patrice Bergeron',
        link: '/api/v1/people/8470638',
        firstName: 'Patrice',
        lastName: 'Bergeron',
        primaryNumber: '37',
        birthDate: '1985-07-24',
        currentAge: 37,
        birthCity: "L'Ancienne-Lorette",
        birthStateProvince: 'QC',
        birthCountry: 'CAN',
        nationality: 'CAN',
        height: '6\' 1"',
        weight: 196,
        active: true,
        alternateCaptain: false,
        captain: true,
        rookie: false,
        shootsCatches: 'R',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'C',
          name: 'Center',
          type: 'Forward',
          abbreviation: 'C'
        }
      },
      ID8480280: {
        id: 8480280,
        fullName: 'Jeremy Swayman',
        link: '/api/v1/people/8480280',
        firstName: 'Jeremy',
        lastName: 'Swayman',
        primaryNumber: '1',
        birthDate: '1998-11-24',
        currentAge: 24,
        birthCity: 'Anchorage',
        birthStateProvince: 'AK',
        birthCountry: 'USA',
        nationality: 'USA',
        height: '6\' 2"',
        weight: 194,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'G',
          name: 'Goalie',
          type: 'Goalie',
          abbreviation: 'G'
        }
      },
      ID8480184: {
        id: 8480184,
        fullName: 'Gustav Lindstrom',
        link: '/api/v1/people/8480184',
        firstName: 'Gustav',
        lastName: 'Lindstrom',
        primaryNumber: '28',
        birthDate: '1998-10-20',
        currentAge: 24,
        birthCity: 'Ostervala',
        birthCountry: 'SWE',
        nationality: 'SWE',
        height: '6\' 2"',
        weight: 186,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'R',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'D',
          name: 'Defenseman',
          type: 'Defenseman',
          abbreviation: 'D'
        }
      },
      ID8477903: {
        id: 8477903,
        fullName: 'Garnet Hathaway',
        link: '/api/v1/people/8477903',
        firstName: 'Garnet',
        lastName: 'Hathaway',
        primaryNumber: '21',
        birthDate: '1991-11-23',
        currentAge: 31,
        birthCity: 'Naples',
        birthStateProvince: 'FL',
        birthCountry: 'USA',
        nationality: 'USA',
        height: '6\' 3"',
        weight: 208,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'R',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'R',
          name: 'Right Wing',
          type: 'Forward',
          abbreviation: 'RW'
        }
      },
      ID8477429: {
        id: 8477429,
        fullName: 'Andrew Copp',
        link: '/api/v1/people/8477429',
        firstName: 'Andrew',
        lastName: 'Copp',
        primaryNumber: '18',
        birthDate: '1994-07-08',
        currentAge: 28,
        birthCity: 'Ann Arbor',
        birthStateProvince: 'MI',
        birthCountry: 'USA',
        nationality: 'USA',
        height: '6\' 1"',
        weight: 199,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'C',
          name: 'Center',
          type: 'Forward',
          abbreviation: 'C'
        }
      },
      ID8477946: {
        id: 8477946,
        fullName: 'Dylan Larkin',
        link: '/api/v1/people/8477946',
        firstName: 'Dylan',
        lastName: 'Larkin',
        primaryNumber: '71',
        birthDate: '1996-07-30',
        currentAge: 26,
        birthCity: 'Waterford',
        birthStateProvince: 'MI',
        birthCountry: 'USA',
        nationality: 'USA',
        height: '6\' 1"',
        weight: 198,
        active: true,
        alternateCaptain: false,
        captain: true,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'C',
          name: 'Center',
          type: 'Forward',
          abbreviation: 'C'
        }
      },
      ID8476854: {
        id: 8476854,
        fullName: 'Hampus Lindholm',
        link: '/api/v1/people/8476854',
        firstName: 'Hampus',
        lastName: 'Lindholm',
        primaryNumber: '27',
        birthDate: '1994-01-20',
        currentAge: 29,
        birthCity: 'Helsingborg',
        birthCountry: 'SWE',
        nationality: 'SWE',
        height: '6\' 4"',
        weight: 215,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'D',
          name: 'Defenseman',
          type: 'Defenseman',
          abbreviation: 'D'
        }
      },
      ID8478415: {
        id: 8478415,
        fullName: 'Jakub Zboril',
        link: '/api/v1/people/8478415',
        firstName: 'Jakub',
        lastName: 'Zboril',
        primaryNumber: '67',
        birthDate: '1997-02-21',
        currentAge: 26,
        birthCity: 'Brno',
        birthCountry: 'CZE',
        nationality: 'CZE',
        height: '6\' 1"',
        weight: 201,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'D',
          name: 'Defenseman',
          type: 'Defenseman',
          abbreviation: 'D'
        }
      },
      ID8475745: {
        id: 8475745,
        fullName: 'Charlie Coyle',
        link: '/api/v1/people/8475745',
        firstName: 'Charlie',
        lastName: 'Coyle',
        primaryNumber: '13',
        birthDate: '1992-03-02',
        currentAge: 31,
        birthCity: 'East Weymouth',
        birthStateProvince: 'MA',
        birthCountry: 'USA',
        nationality: 'USA',
        height: '6\' 3"',
        weight: 223,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'R',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'C',
          name: 'Center',
          type: 'Forward',
          abbreviation: 'C'
        }
      },
      ID8478401: {
        id: 8478401,
        fullName: 'Pavel Zacha',
        link: '/api/v1/people/8478401',
        firstName: 'Pavel',
        lastName: 'Zacha',
        primaryNumber: '18',
        birthDate: '1997-04-06',
        currentAge: 25,
        birthCity: 'Brno',
        birthCountry: 'CZE',
        nationality: 'CZE',
        height: '6\' 4"',
        weight: 199,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'C',
          name: 'Center',
          type: 'Forward',
          abbreviation: 'C'
        }
      },
      ID8477851: {
        id: 8477851,
        fullName: 'Jordan Oesterle',
        link: '/api/v1/people/8477851',
        firstName: 'Jordan',
        lastName: 'Oesterle',
        primaryNumber: '82',
        birthDate: '1992-06-25',
        currentAge: 30,
        birthCity: 'Dearborn Heights',
        birthStateProvince: 'MI',
        birthCountry: 'USA',
        nationality: 'USA',
        height: '6\' 0"',
        weight: 187,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'D',
          name: 'Defenseman',
          type: 'Defenseman',
          abbreviation: 'D'
        }
      },
      ID8480459: {
        id: 8480459,
        fullName: 'Pius Suter',
        link: '/api/v1/people/8480459',
        firstName: 'Pius',
        lastName: 'Suter',
        primaryNumber: '24',
        birthDate: '1996-05-24',
        currentAge: 26,
        birthCity: 'Zurich',
        birthCountry: 'CHE',
        nationality: 'CHE',
        height: '5\' 11"',
        weight: 179,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'C',
          name: 'Center',
          type: 'Forward',
          abbreviation: 'C'
        }
      },
      ID8477454: {
        id: 8477454,
        fullName: 'Adam Erne',
        link: '/api/v1/people/8477454',
        firstName: 'Adam',
        lastName: 'Erne',
        primaryNumber: '73',
        birthDate: '1995-04-20',
        currentAge: 27,
        birthCity: 'New Haven',
        birthStateProvince: 'CT',
        birthCountry: 'USA',
        nationality: 'USA',
        height: '6\' 1"',
        weight: 212,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'L',
          name: 'Left Wing',
          type: 'Forward',
          abbreviation: 'LW'
        }
      },
      ID8477479: {
        id: 8477479,
        fullName: 'Tyler Bertuzzi',
        link: '/api/v1/people/8477479',
        firstName: 'Tyler',
        lastName: 'Bertuzzi',
        primaryNumber: '59',
        birthDate: '1995-02-24',
        currentAge: 28,
        birthCity: 'Sudbury',
        birthStateProvince: 'ON',
        birthCountry: 'CAN',
        nationality: 'CAN',
        height: '6\' 1"',
        weight: 186,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'L',
          name: 'Left Wing',
          type: 'Forward',
          abbreviation: 'LW'
        }
      },
      ID8477952: {
        id: 8477952,
        fullName: 'Robby Fabbri',
        link: '/api/v1/people/8477952',
        firstName: 'Robby',
        lastName: 'Fabbri',
        primaryNumber: '14',
        birthDate: '1996-01-22',
        currentAge: 27,
        birthCity: 'Mississauga',
        birthStateProvince: 'ON',
        birthCountry: 'CAN',
        nationality: 'CAN',
        height: '5\' 11"',
        weight: 185,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'C',
          name: 'Center',
          type: 'Forward',
          abbreviation: 'C'
        }
      },
      ID8475279: {
        id: 8475279,
        fullName: 'Ben Chiarot',
        link: '/api/v1/people/8475279',
        firstName: 'Ben',
        lastName: 'Chiarot',
        primaryNumber: '8',
        birthDate: '1991-05-09',
        currentAge: 31,
        birthCity: 'Hamilton',
        birthStateProvince: 'ON',
        birthCountry: 'CAN',
        nationality: 'CAN',
        height: '6\' 3"',
        weight: 232,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'D',
          name: 'Defenseman',
          type: 'Defenseman',
          abbreviation: 'D'
        }
      },
      ID8480813: {
        id: 8480813,
        fullName: 'Joe Veleno',
        link: '/api/v1/people/8480813',
        firstName: 'Joe',
        lastName: 'Veleno',
        primaryNumber: '90',
        birthDate: '2000-01-13',
        currentAge: 23,
        birthCity: 'Montréal',
        birthStateProvince: 'QC',
        birthCountry: 'CAN',
        nationality: 'CAN',
        height: '6\' 1"',
        weight: 203,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'C',
          name: 'Center',
          type: 'Forward',
          abbreviation: 'C'
        }
      },
      ID8474102: {
        id: 8474102,
        fullName: 'David Perron',
        link: '/api/v1/people/8474102',
        firstName: 'David',
        lastName: 'Perron',
        primaryNumber: '57',
        birthDate: '1988-05-28',
        currentAge: 34,
        birthCity: 'Sherbrooke',
        birthStateProvince: 'QC',
        birthCountry: 'CAN',
        nationality: 'CAN',
        height: '6\' 1"',
        weight: 196,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'R',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'L',
          name: 'Left Wing',
          type: 'Forward',
          abbreviation: 'LW'
        }
      },
      ID8477330: {
        id: 8477330,
        fullName: 'Dominik Kubalik',
        link: '/api/v1/people/8477330',
        firstName: 'Dominik',
        lastName: 'Kubalik',
        primaryNumber: '81',
        birthDate: '1995-08-21',
        currentAge: 27,
        birthCity: 'Plzen',
        birthCountry: 'CZE',
        nationality: 'CZE',
        height: '6\' 2"',
        weight: 190,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'L',
          name: 'Left Wing',
          type: 'Forward',
          abbreviation: 'LW'
        }
      },
      ID8478421: {
        id: 8478421,
        fullName: 'A.J. Greer',
        link: '/api/v1/people/8478421',
        firstName: 'A.J.',
        lastName: 'Greer',
        primaryNumber: '10',
        birthDate: '1996-12-14',
        currentAge: 26,
        birthCity: 'Joliette',
        birthStateProvince: 'QC',
        birthCountry: 'CAN',
        nationality: 'CAN',
        height: '6\' 3"',
        weight: 208,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'L',
          name: 'Left Wing',
          type: 'Forward',
          abbreviation: 'LW'
        }
      },
      ID8478443: {
        id: 8478443,
        fullName: 'Brandon Carlo',
        link: '/api/v1/people/8478443',
        firstName: 'Brandon',
        lastName: 'Carlo',
        primaryNumber: '25',
        birthDate: '1996-11-26',
        currentAge: 26,
        birthCity: 'Colorado Springs',
        birthStateProvince: 'CO',
        birthCountry: 'USA',
        nationality: 'USA',
        height: '6\' 6"',
        weight: 218,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'R',
        rosterStatus: 'Y',
        currentTeam: {
          id: 6,
          name: 'Boston Bruins',
          link: '/api/v1/teams/6',
          triCode: 'BOS'
        },
        primaryPosition: {
          code: 'D',
          name: 'Defenseman',
          type: 'Defenseman',
          abbreviation: 'D'
        }
      },
      ID8478024: {
        id: 8478024,
        fullName: 'Ville Husso',
        link: '/api/v1/people/8478024',
        firstName: 'Ville',
        lastName: 'Husso',
        primaryNumber: '35',
        birthDate: '1995-02-06',
        currentAge: 28,
        birthCity: 'Helsinki',
        birthCountry: 'FIN',
        nationality: 'FIN',
        height: '6\' 3"',
        weight: 200,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'L',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'G',
          name: 'Goalie',
          type: 'Goalie',
          abbreviation: 'G'
        }
      },
      ID8482078: {
        id: 8482078,
        fullName: 'Lucas Raymond',
        link: '/api/v1/people/8482078',
        firstName: 'Lucas',
        lastName: 'Raymond',
        primaryNumber: '23',
        birthDate: '2002-03-28',
        currentAge: 20,
        birthCity: 'Gothenburg',
        birthCountry: 'SWE',
        nationality: 'SWE',
        height: '5\' 11"',
        weight: 176,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'R',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'L',
          name: 'Left Wing',
          type: 'Forward',
          abbreviation: 'LW'
        }
      },
      ID8481542: {
        id: 8481542,
        fullName: 'Moritz Seider',
        link: '/api/v1/people/8481542',
        firstName: 'Moritz',
        lastName: 'Seider',
        primaryNumber: '53',
        birthDate: '2001-04-06',
        currentAge: 21,
        birthCity: 'Zell',
        birthCountry: 'DEU',
        nationality: 'DEU',
        height: '6\' 4"',
        weight: 204,
        active: true,
        alternateCaptain: false,
        captain: false,
        rookie: false,
        shootsCatches: 'R',
        rosterStatus: 'Y',
        currentTeam: {
          id: 17,
          name: 'Detroit Red Wings',
          link: '/api/v1/teams/17',
          triCode: 'DET'
        },
        primaryPosition: {
          code: 'D',
          name: 'Defenseman',
          type: 'Defenseman',
          abbreviation: 'D'
        }
      }
    },
    venue: {
      id: 5145,
      name: 'Little Caesars Arena',
      link: '/api/v1/venues/5145'
    }
  },
  liveData: {
    plays: {
      allPlays: [
        {
          result: {
            event: 'Game Scheduled',
            eventCode: 'DET1',
            eventTypeId: 'GAME_SCHEDULED',
            description: 'Game Scheduled'
          },
          about: {
            eventIdx: 0,
            eventId: 1,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '00:00',
            periodTimeRemaining: '20:00',
            dateTime: '2023-03-12T15:44:30Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {}
        },
        {
          result: {
            event: 'Period Ready',
            eventCode: 'DET5',
            eventTypeId: 'PERIOD_READY',
            description: 'Period Ready'
          },
          about: {
            eventIdx: 1,
            eventId: 5,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '00:00',
            periodTimeRemaining: '20:00',
            dateTime: '2023-03-12T16:37:23Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {}
        },
        {
          result: {
            event: 'Period Start',
            eventCode: 'DET51',
            eventTypeId: 'PERIOD_START',
            description: 'Period Start'
          },
          about: {
            eventIdx: 2,
            eventId: 51,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '00:00',
            periodTimeRemaining: '20:00',
            dateTime: '2023-03-12T16:38:24Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477931,
                fullName: 'Tomas Nosek',
                link: '/api/v1/people/8477931'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET52',
            eventTypeId: 'FACEOFF',
            description: 'Tomas Nosek faceoff won against Andrew Copp'
          },
          about: {
            eventIdx: 3,
            eventId: 52,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '00:00',
            periodTimeRemaining: '20:00',
            dateTime: '2023-03-12T16:38:24Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 0,
            y: 0
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475279,
                fullName: 'Ben Chiarot',
                link: '/api/v1/people/8475279'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8477479,
                fullName: 'Tyler Bertuzzi',
                link: '/api/v1/people/8477479'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET9',
            eventTypeId: 'HIT',
            description: 'Ben Chiarot hit Tyler Bertuzzi'
          },
          about: {
            eventIdx: 4,
            eventId: 9,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '00:14',
            periodTimeRemaining: '19:46',
            dateTime: '2023-03-12T16:38:38Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -38,
            y: 40
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET53',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Dylan Larkin'
          },
          about: {
            eventIdx: 5,
            eventId: 53,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '00:48',
            periodTimeRemaining: '19:12',
            dateTime: '2023-03-12T16:39:12Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 49,
            y: 41
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8479365,
                fullName: 'Trent Frederic',
                link: '/api/v1/people/8479365'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET102',
            eventTypeId: 'SHOT',
            description: 'Trent Frederic Snap Shot saved by Ville Husso',
            secondaryType: 'Snap Shot'
          },
          about: {
            eventIdx: 6,
            eventId: 102,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '00:49',
            periodTimeRemaining: '19:11',
            dateTime: '2023-03-12T16:39:13Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 65,
            y: 21
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET10',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 7,
            eventId: 10,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '00:52',
            periodTimeRemaining: '19:08',
            dateTime: '2023-03-12T16:39:16Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET54',
            eventTypeId: 'FACEOFF',
            description: 'Dylan Larkin faceoff won against Patrice Bergeron'
          },
          about: {
            eventIdx: 8,
            eventId: 54,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '00:52',
            periodTimeRemaining: '19:08',
            dateTime: '2023-03-12T16:39:45Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 69,
            y: 22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET103',
            eventTypeId: 'MISSED_SHOT',
            description: 'Charlie McAvoy Hit Crossbar Ville Husso'
          },
          about: {
            eventIdx: 9,
            eventId: 103,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '00:59',
            periodTimeRemaining: '19:01',
            dateTime: '2023-03-12T16:39:52Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 49,
            y: 7
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET12',
            eventTypeId: 'STOP',
            description: 'Puck in Netting'
          },
          about: {
            eventIdx: 10,
            eventId: 12,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '01:01',
            periodTimeRemaining: '18:59',
            dateTime: '2023-03-12T16:39:54Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET55',
            eventTypeId: 'FACEOFF',
            description: 'Dylan Larkin faceoff won against Patrice Bergeron'
          },
          about: {
            eventIdx: 11,
            eventId: 55,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '01:01',
            periodTimeRemaining: '18:59',
            dateTime: '2023-03-12T16:40:12Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 69,
            y: 22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8482078,
                fullName: 'Lucas Raymond',
                link: '/api/v1/people/8482078'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET104',
            eventTypeId: 'MISSED_SHOT',
            description: 'Lucas Raymond Wide of Net Jeremy Swayman'
          },
          about: {
            eventIdx: 12,
            eventId: 104,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '01:20',
            periodTimeRemaining: '18:40',
            dateTime: '2023-03-12T16:40:31Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -81,
            y: 38
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8480813,
                fullName: 'Joe Veleno',
                link: '/api/v1/people/8480813'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET105',
            eventTypeId: 'SHOT',
            description: 'Joe Veleno Wrist Shot saved by Jeremy Swayman',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 13,
            eventId: 105,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '02:03',
            periodTimeRemaining: '17:57',
            dateTime: '2023-03-12T16:41:14Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -74,
            y: 0
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET13',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 14,
            eventId: 13,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '02:05',
            periodTimeRemaining: '17:55',
            dateTime: '2023-03-12T16:41:16Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8480813,
                fullName: 'Joe Veleno',
                link: '/api/v1/people/8480813'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8475745,
                fullName: 'Charlie Coyle',
                link: '/api/v1/people/8475745'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET56',
            eventTypeId: 'FACEOFF',
            description: 'Joe Veleno faceoff won against Charlie Coyle'
          },
          about: {
            eventIdx: 15,
            eventId: 56,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '02:05',
            periodTimeRemaining: '17:55',
            dateTime: '2023-03-12T16:41:57Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -69,
            y: -22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8480821,
                fullName: 'Filip Zadina',
                link: '/api/v1/people/8480821'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8476891,
                fullName: 'Matt Grzelcyk',
                link: '/api/v1/people/8476891'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET106',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Matt Grzelcyk shot blocked shot by Filip Zadina'
          },
          about: {
            eventIdx: 16,
            eventId: 106,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '02:42',
            periodTimeRemaining: '17:18',
            dateTime: '2023-03-12T16:42:34Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 41,
            y: 10
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8480821,
                fullName: 'Filip Zadina',
                link: '/api/v1/people/8480821'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET14',
            eventTypeId: 'SHOT',
            description: 'Filip Zadina Tip-In saved by Jeremy Swayman',
            secondaryType: 'Tip-In'
          },
          about: {
            eventIdx: 17,
            eventId: 14,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '02:48',
            periodTimeRemaining: '17:12',
            dateTime: '2023-03-12T16:42:40Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -75,
            y: -7
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478512,
                fullName: 'Austin Czarnik',
                link: '/api/v1/people/8478512'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET107',
            eventTypeId: 'MISSED_SHOT',
            description: 'Austin Czarnik Wide of Net Jeremy Swayman'
          },
          about: {
            eventIdx: 18,
            eventId: 107,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '02:53',
            periodTimeRemaining: '17:07',
            dateTime: '2023-03-12T16:42:45Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -56,
            y: 21
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475163,
                fullName: 'Alex Chiasson',
                link: '/api/v1/people/8475163'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET108',
            eventTypeId: 'SHOT',
            description: 'Alex Chiasson Tip-In saved by Jeremy Swayman',
            secondaryType: 'Tip-In'
          },
          about: {
            eventIdx: 19,
            eventId: 108,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '02:59',
            periodTimeRemaining: '17:01',
            dateTime: '2023-03-12T16:42:51Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -74,
            y: 8
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8473419,
                fullName: 'Brad Marchand',
                link: '/api/v1/people/8473419'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Takeaway',
            eventCode: 'DET58',
            eventTypeId: 'TAKEAWAY',
            description: 'Takeaway by Brad Marchand'
          },
          about: {
            eventIdx: 20,
            eventId: 58,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '04:09',
            periodTimeRemaining: '15:51',
            dateTime: '2023-03-12T16:44:01Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -38,
            y: -34
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478443,
                fullName: 'Brandon Carlo',
                link: '/api/v1/people/8478443'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8480813,
                fullName: 'Joe Veleno',
                link: '/api/v1/people/8480813'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET109',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Joe Veleno shot blocked shot by Brandon Carlo'
          },
          about: {
            eventIdx: 21,
            eventId: 109,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '05:13',
            periodTimeRemaining: '14:47',
            dateTime: '2023-03-12T16:45:05Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -88,
            y: -7
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET15',
            eventTypeId: 'STOP',
            description: 'Icing'
          },
          about: {
            eventIdx: 22,
            eventId: 15,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '05:36',
            periodTimeRemaining: '14:24',
            dateTime: '2023-03-12T16:45:29Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8475745,
                fullName: 'Charlie Coyle',
                link: '/api/v1/people/8475745'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8480813,
                fullName: 'Joe Veleno',
                link: '/api/v1/people/8480813'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET60',
            eventTypeId: 'FACEOFF',
            description: 'Charlie Coyle faceoff won against Joe Veleno'
          },
          about: {
            eventIdx: 23,
            eventId: 60,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '05:36',
            periodTimeRemaining: '14:24',
            dateTime: '2023-03-12T16:45:57Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 69,
            y: -22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475279,
                fullName: 'Ben Chiarot',
                link: '/api/v1/people/8475279'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET131',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Charlie McAvoy shot blocked shot by Ben Chiarot'
          },
          about: {
            eventIdx: 24,
            eventId: 131,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '05:40',
            periodTimeRemaining: '14:20',
            dateTime: '2023-03-12T16:46:01Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 83,
            y: -4
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Takeaway',
            eventCode: 'DET61',
            eventTypeId: 'TAKEAWAY',
            description: 'Takeaway by Charlie McAvoy'
          },
          about: {
            eventIdx: 25,
            eventId: 61,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '05:53',
            periodTimeRemaining: '14:07',
            dateTime: '2023-03-12T16:46:14Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -58,
            y: 27
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477851,
                fullName: 'Jordan Oesterle',
                link: '/api/v1/people/8477851'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET110',
            eventTypeId: 'SHOT',
            description: 'Jordan Oesterle Wrist Shot saved by Jeremy Swayman',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 26,
            eventId: 110,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '06:39',
            periodTimeRemaining: '13:21',
            dateTime: '2023-03-12T16:47:00Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -45,
            y: 0
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475762,
                fullName: 'Derek Forbort',
                link: '/api/v1/people/8475762'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8482078,
                fullName: 'Lucas Raymond',
                link: '/api/v1/people/8482078'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET16',
            eventTypeId: 'HIT',
            description: 'Derek Forbort hit Lucas Raymond'
          },
          about: {
            eventIdx: 27,
            eventId: 16,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '07:06',
            periodTimeRemaining: '12:54',
            dateTime: '2023-03-12T16:47:27Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -92,
            y: 31
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477931,
                fullName: 'Tomas Nosek',
                link: '/api/v1/people/8477931'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Takeaway',
            eventCode: 'DET62',
            eventTypeId: 'TAKEAWAY',
            description: 'Takeaway by Tomas Nosek'
          },
          about: {
            eventIdx: 28,
            eventId: 62,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '07:26',
            periodTimeRemaining: '12:34',
            dateTime: '2023-03-12T16:47:47Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -44,
            y: 27
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477931,
                fullName: 'Tomas Nosek',
                link: '/api/v1/people/8477931'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET63',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Tomas Nosek'
          },
          about: {
            eventIdx: 29,
            eventId: 63,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '07:27',
            periodTimeRemaining: '12:33',
            dateTime: '2023-03-12T16:47:48Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -43,
            y: 23
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8476874,
                fullName: 'Olli Maatta',
                link: '/api/v1/people/8476874'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8478421,
                fullName: 'A.J. Greer',
                link: '/api/v1/people/8478421'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET111',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'A.J. Greer shot blocked shot by Olli Maatta'
          },
          about: {
            eventIdx: 30,
            eventId: 111,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '07:47',
            periodTimeRemaining: '12:13',
            dateTime: '2023-03-12T16:48:08Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 60,
            y: 26
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET17',
            eventTypeId: 'STOP',
            description: 'Hand Pass'
          },
          about: {
            eventIdx: 31,
            eventId: 17,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '08:18',
            periodTimeRemaining: '11:42',
            dateTime: '2023-03-12T16:48:40Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8481542,
                fullName: 'Moritz Seider',
                link: '/api/v1/people/8481542'
              },
              playerType: 'PenaltyOn'
            },
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'DrewBy'
            }
          ],
          result: {
            event: 'Penalty',
            eventCode: 'DET239',
            eventTypeId: 'PENALTY',
            description: 'Moritz Seider High-sticking against Patrice Bergeron',
            secondaryType: 'High-sticking',
            penaltySeverity: 'Minor',
            penaltyMinutes: 2
          },
          about: {
            eventIdx: 32,
            eventId: 239,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '08:18',
            periodTimeRemaining: '11:42',
            dateTime: '2023-03-12T16:48:40Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 98,
            y: -19
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET65',
            eventTypeId: 'FACEOFF',
            description: 'Andrew Copp faceoff won against Patrice Bergeron'
          },
          about: {
            eventIdx: 33,
            eventId: 65,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '08:18',
            periodTimeRemaining: '11:42',
            dateTime: '2023-03-12T16:51:17Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 69,
            y: -22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8473419,
                fullName: 'Brad Marchand',
                link: '/api/v1/people/8473419'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET112',
            eventTypeId: 'SHOT',
            description: 'Brad Marchand Tip-In saved by Ville Husso',
            secondaryType: 'Tip-In'
          },
          about: {
            eventIdx: 34,
            eventId: 112,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '08:51',
            periodTimeRemaining: '11:09',
            dateTime: '2023-03-12T16:51:50Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 84,
            y: 3
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478013,
                fullName: 'Jake Walman',
                link: '/api/v1/people/8478013'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET66',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Jake Walman'
          },
          about: {
            eventIdx: 35,
            eventId: 66,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '09:13',
            periodTimeRemaining: '10:47',
            dateTime: '2023-03-12T16:52:12Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 57,
            y: -38
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478013,
                fullName: 'Jake Walman',
                link: '/api/v1/people/8478013'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8477956,
                fullName: 'David Pastrnak',
                link: '/api/v1/people/8477956'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET113',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'David Pastrnak shot blocked shot by Jake Walman'
          },
          about: {
            eventIdx: 36,
            eventId: 113,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '09:28',
            periodTimeRemaining: '10:32',
            dateTime: '2023-03-12T16:52:27Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 76,
            y: -5
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Takeaway',
            eventCode: 'DET67',
            eventTypeId: 'TAKEAWAY',
            description: 'Takeaway by Dylan Larkin'
          },
          about: {
            eventIdx: 37,
            eventId: 67,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '09:36',
            periodTimeRemaining: '10:24',
            dateTime: '2023-03-12T16:52:35Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 46,
            y: 31
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET18',
            eventTypeId: 'STOP',
            description: 'Icing'
          },
          about: {
            eventIdx: 38,
            eventId: 18,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '10:06',
            periodTimeRemaining: '09:54',
            dateTime: '2023-03-12T16:53:04Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8471276,
                fullName: 'David Krejci',
                link: '/api/v1/people/8471276'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET68',
            eventTypeId: 'FACEOFF',
            description: 'Andrew Copp faceoff won against David Krejci'
          },
          about: {
            eventIdx: 39,
            eventId: 68,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '10:06',
            periodTimeRemaining: '09:54',
            dateTime: '2023-03-12T16:53:41Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -69,
            y: -22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8476874,
                fullName: 'Olli Maatta',
                link: '/api/v1/people/8476874'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET70',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Olli Maatta'
          },
          about: {
            eventIdx: 40,
            eventId: 70,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '10:50',
            periodTimeRemaining: '09:10',
            dateTime: '2023-03-12T16:54:25Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 57,
            y: -36
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477462,
                fullName: 'Robert Hagg',
                link: '/api/v1/people/8477462'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8475745,
                fullName: 'Charlie Coyle',
                link: '/api/v1/people/8475745'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET20',
            eventTypeId: 'HIT',
            description: 'Robert Hagg hit Charlie Coyle'
          },
          about: {
            eventIdx: 41,
            eventId: 20,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '11:10',
            periodTimeRemaining: '08:50',
            dateTime: '2023-03-12T16:54:45Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 98,
            y: -15
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET21',
            eventTypeId: 'STOP',
            description: 'TV timeout'
          },
          about: {
            eventIdx: 42,
            eventId: 21,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '11:15',
            periodTimeRemaining: '08:45',
            dateTime: '2023-03-12T16:54:49Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8478421,
                fullName: 'A.J. Greer',
                link: '/api/v1/people/8478421'
              },
              playerType: 'PenaltyOn'
            },
            {
              player: {
                id: 8476874,
                fullName: 'Olli Maatta',
                link: '/api/v1/people/8476874'
              },
              playerType: 'DrewBy'
            }
          ],
          result: {
            event: 'Penalty',
            eventCode: 'DET270',
            eventTypeId: 'PENALTY',
            description: 'A.J. Greer Interference against Olli Maatta',
            secondaryType: 'Interference',
            penaltySeverity: 'Minor',
            penaltyMinutes: 2
          },
          about: {
            eventIdx: 43,
            eventId: 270,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '11:15',
            periodTimeRemaining: '08:45',
            dateTime: '2023-03-12T16:54:49Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: 96,
            y: 10
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477931,
                fullName: 'Tomas Nosek',
                link: '/api/v1/people/8477931'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET72',
            eventTypeId: 'FACEOFF',
            description: 'Dylan Larkin faceoff won against Tomas Nosek'
          },
          about: {
            eventIdx: 44,
            eventId: 72,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '11:15',
            periodTimeRemaining: '08:45',
            dateTime: '2023-03-12T16:57:12Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -69,
            y: 22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8474102,
                fullName: 'David Perron',
                link: '/api/v1/people/8474102'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET115',
            eventTypeId: 'MISSED_SHOT',
            description: 'David Perron Wide of Net Jeremy Swayman'
          },
          about: {
            eventIdx: 45,
            eventId: 115,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '11:19',
            periodTimeRemaining: '08:41',
            dateTime: '2023-03-12T16:57:16Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -74,
            y: -11
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475762,
                fullName: 'Derek Forbort',
                link: '/api/v1/people/8475762'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8482078,
                fullName: 'Lucas Raymond',
                link: '/api/v1/people/8482078'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET22',
            eventTypeId: 'HIT',
            description: 'Derek Forbort hit Lucas Raymond'
          },
          about: {
            eventIdx: 46,
            eventId: 22,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '11:35',
            periodTimeRemaining: '08:25',
            dateTime: '2023-03-12T16:57:32Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -40,
            y: 41
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475762,
                fullName: 'Derek Forbort',
                link: '/api/v1/people/8475762'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8475163,
                fullName: 'Alex Chiasson',
                link: '/api/v1/people/8475163'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET23',
            eventTypeId: 'HIT',
            description: 'Derek Forbort hit Alex Chiasson'
          },
          about: {
            eventIdx: 47,
            eventId: 23,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '11:57',
            periodTimeRemaining: '08:03',
            dateTime: '2023-03-12T16:57:54Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -97,
            y: -16
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET116',
            eventTypeId: 'SHOT',
            description: 'Dylan Larkin Wrist Shot saved by Jeremy Swayman',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 48,
            eventId: 116,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '12:20',
            periodTimeRemaining: '07:40',
            dateTime: '2023-03-12T16:58:17Z',
            goals: {
              away: 0,
              home: 0
            }
          },
          coordinates: {
            x: -67,
            y: 7
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475163,
                fullName: 'Alex Chiasson',
                link: '/api/v1/people/8475163'
              },
              playerType: 'Scorer',
              seasonTotal: 2
            },
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Assist',
              seasonTotal: 38
            },
            {
              player: {
                id: 8482078,
                fullName: 'Lucas Raymond',
                link: '/api/v1/people/8482078'
              },
              playerType: 'Assist',
              seasonTotal: 19
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Goal',
            eventCode: 'DET117',
            eventTypeId: 'GOAL',
            description:
              'Alex Chiasson (2) Wrist Shot, assists: Dylan Larkin (38), Lucas Raymond (19)',
            secondaryType: 'Wrist Shot',
            strength: {
              code: 'PPG',
              name: 'Power Play'
            },
            gameWinningGoal: false,
            emptyNet: false
          },
          about: {
            eventIdx: 49,
            eventId: 117,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '12:22',
            periodTimeRemaining: '07:38',
            dateTime: '2023-03-12T16:58:19Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -84,
            y: -3
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8471276,
                fullName: 'David Krejci',
                link: '/api/v1/people/8471276'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET73',
            eventTypeId: 'FACEOFF',
            description: 'David Krejci faceoff won against Andrew Copp'
          },
          about: {
            eventIdx: 50,
            eventId: 73,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '12:22',
            periodTimeRemaining: '07:38',
            dateTime: '2023-03-12T16:59:24Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 0,
            y: 0
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8476891,
                fullName: 'Matt Grzelcyk',
                link: '/api/v1/people/8476891'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET118',
            eventTypeId: 'MISSED_SHOT',
            description: 'Matt Grzelcyk Over Net Ville Husso'
          },
          about: {
            eventIdx: 51,
            eventId: 118,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '12:54',
            periodTimeRemaining: '07:06',
            dateTime: '2023-03-12T16:59:56Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 40,
            y: 28
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8476874,
                fullName: 'Olli Maatta',
                link: '/api/v1/people/8476874'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET120',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Charlie McAvoy shot blocked shot by Olli Maatta'
          },
          about: {
            eventIdx: 52,
            eventId: 120,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '13:19',
            periodTimeRemaining: '06:41',
            dateTime: '2023-03-12T17:00:21Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 80,
            y: 1
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477479,
                fullName: 'Tyler Bertuzzi',
                link: '/api/v1/people/8477479'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET74',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Tyler Bertuzzi'
          },
          about: {
            eventIdx: 53,
            eventId: 74,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '13:32',
            periodTimeRemaining: '06:28',
            dateTime: '2023-03-12T17:00:34Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 90,
            y: -30
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8480821,
                fullName: 'Filip Zadina',
                link: '/api/v1/people/8480821'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET75',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Filip Zadina'
          },
          about: {
            eventIdx: 54,
            eventId: 75,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '13:50',
            periodTimeRemaining: '06:10',
            dateTime: '2023-03-12T17:00:52Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 41,
            y: 40
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477365,
                fullName: 'Connor Clifton',
                link: '/api/v1/people/8477365'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET121',
            eventTypeId: 'SHOT',
            description: 'Connor Clifton Wrist Shot saved by Ville Husso',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 55,
            eventId: 121,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '13:57',
            periodTimeRemaining: '06:03',
            dateTime: '2023-03-12T17:00:59Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 3,
            y: -40
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET24',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 56,
            eventId: 24,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '13:58',
            periodTimeRemaining: '06:02',
            dateTime: '2023-03-12T17:01:00Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8473419,
                fullName: 'Brad Marchand',
                link: '/api/v1/people/8473419'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET76',
            eventTypeId: 'FACEOFF',
            description: 'Brad Marchand faceoff won against Dylan Larkin'
          },
          about: {
            eventIdx: 57,
            eventId: 76,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '13:58',
            periodTimeRemaining: '06:02',
            dateTime: '2023-03-12T17:02:14Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 69,
            y: -22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478013,
                fullName: 'Jake Walman',
                link: '/api/v1/people/8478013'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8478498,
                fullName: 'Jake DeBrusk',
                link: '/api/v1/people/8478498'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET122',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Jake DeBrusk shot blocked shot by Jake Walman'
          },
          about: {
            eventIdx: 58,
            eventId: 122,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '14:04',
            periodTimeRemaining: '05:56',
            dateTime: '2023-03-12T17:02:20Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 55,
            y: 35
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8475200,
                fullName: 'Dmitry Orlov',
                link: '/api/v1/people/8475200'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET26',
            eventTypeId: 'HIT',
            description: 'Dylan Larkin hit Dmitry Orlov'
          },
          about: {
            eventIdx: 59,
            eventId: 26,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '14:25',
            periodTimeRemaining: '05:35',
            dateTime: '2023-03-12T17:02:41Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -23,
            y: 17
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET25',
            eventTypeId: 'STOP',
            description: 'Offside'
          },
          about: {
            eventIdx: 60,
            eventId: 25,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '14:26',
            periodTimeRemaining: '05:34',
            dateTime: '2023-03-12T17:02:42Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8478512,
                fullName: 'Austin Czarnik',
                link: '/api/v1/people/8478512'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477931,
                fullName: 'Tomas Nosek',
                link: '/api/v1/people/8477931'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET77',
            eventTypeId: 'FACEOFF',
            description: 'Austin Czarnik faceoff won against Tomas Nosek'
          },
          about: {
            eventIdx: 61,
            eventId: 77,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '14:26',
            periodTimeRemaining: '05:34',
            dateTime: '2023-03-12T17:05:40Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -20,
            y: 22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477454,
                fullName: 'Adam Erne',
                link: '/api/v1/people/8477454'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8477365,
                fullName: 'Connor Clifton',
                link: '/api/v1/people/8477365'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET27',
            eventTypeId: 'HIT',
            description: 'Adam Erne hit Connor Clifton'
          },
          about: {
            eventIdx: 62,
            eventId: 27,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '14:51',
            periodTimeRemaining: '05:09',
            dateTime: '2023-03-12T17:06:05Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -32,
            y: -40
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477851,
                fullName: 'Jordan Oesterle',
                link: '/api/v1/people/8477851'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8478421,
                fullName: 'A.J. Greer',
                link: '/api/v1/people/8478421'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET123',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'A.J. Greer shot blocked shot by Jordan Oesterle'
          },
          about: {
            eventIdx: 63,
            eventId: 123,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '14:53',
            periodTimeRemaining: '05:07',
            dateTime: '2023-03-12T17:06:07Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 69,
            y: -20
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477903,
                fullName: 'Garnet Hathaway',
                link: '/api/v1/people/8477903'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8475163,
                fullName: 'Alex Chiasson',
                link: '/api/v1/people/8475163'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET28',
            eventTypeId: 'HIT',
            description: 'Garnet Hathaway hit Alex Chiasson'
          },
          about: {
            eventIdx: 64,
            eventId: 28,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '15:06',
            periodTimeRemaining: '04:54',
            dateTime: '2023-03-12T17:06:20Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 32,
            y: 41
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477365,
                fullName: 'Connor Clifton',
                link: '/api/v1/people/8477365'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET78',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Connor Clifton'
          },
          about: {
            eventIdx: 65,
            eventId: 78,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '15:17',
            periodTimeRemaining: '04:43',
            dateTime: '2023-03-12T17:06:31Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -85,
            y: -37
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET124',
            eventTypeId: 'SHOT',
            description: 'Andrew Copp Wrist Shot saved by Jeremy Swayman',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 66,
            eventId: 124,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '15:20',
            periodTimeRemaining: '04:40',
            dateTime: '2023-03-12T17:06:34Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -70,
            y: 25
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8474102,
                fullName: 'David Perron',
                link: '/api/v1/people/8474102'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Takeaway',
            eventCode: 'DET79',
            eventTypeId: 'TAKEAWAY',
            description: 'Takeaway by David Perron'
          },
          about: {
            eventIdx: 67,
            eventId: 79,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '15:28',
            periodTimeRemaining: '04:32',
            dateTime: '2023-03-12T17:06:42Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -56,
            y: -17
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8474102,
                fullName: 'David Perron',
                link: '/api/v1/people/8474102'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET125',
            eventTypeId: 'SHOT',
            description: 'David Perron Snap Shot saved by Jeremy Swayman',
            secondaryType: 'Snap Shot'
          },
          about: {
            eventIdx: 68,
            eventId: 125,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '15:29',
            periodTimeRemaining: '04:31',
            dateTime: '2023-03-12T17:06:43Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -69,
            y: -7
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET29',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 69,
            eventId: 29,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '15:32',
            periodTimeRemaining: '04:28',
            dateTime: '2023-03-12T17:06:47Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8475745,
                fullName: 'Charlie Coyle',
                link: '/api/v1/people/8475745'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET80',
            eventTypeId: 'FACEOFF',
            description: 'Andrew Copp faceoff won against Charlie Coyle'
          },
          about: {
            eventIdx: 70,
            eventId: 80,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '15:32',
            periodTimeRemaining: '04:28',
            dateTime: '2023-03-12T17:07:27Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -69,
            y: -22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475200,
                fullName: 'Dmitry Orlov',
                link: '/api/v1/people/8475200'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8474102,
                fullName: 'David Perron',
                link: '/api/v1/people/8474102'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET126',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'David Perron shot blocked shot by Dmitry Orlov'
          },
          about: {
            eventIdx: 71,
            eventId: 126,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '15:34',
            periodTimeRemaining: '04:26',
            dateTime: '2023-03-12T17:07:29Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -79,
            y: -11
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477330,
                fullName: 'Dominik Kubalik',
                link: '/api/v1/people/8477330'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8478443,
                fullName: 'Brandon Carlo',
                link: '/api/v1/people/8478443'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET30',
            eventTypeId: 'HIT',
            description: 'Dominik Kubalik hit Brandon Carlo'
          },
          about: {
            eventIdx: 72,
            eventId: 30,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '15:40',
            periodTimeRemaining: '04:20',
            dateTime: '2023-03-12T17:07:35Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -98,
            y: -6
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8473419,
                fullName: 'Brad Marchand',
                link: '/api/v1/people/8473419'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8476874,
                fullName: 'Olli Maatta',
                link: '/api/v1/people/8476874'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET31',
            eventTypeId: 'HIT',
            description: 'Brad Marchand hit Olli Maatta'
          },
          about: {
            eventIdx: 73,
            eventId: 31,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '16:06',
            periodTimeRemaining: '03:54',
            dateTime: '2023-03-12T17:08:01Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -17,
            y: -39
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Takeaway',
            eventCode: 'DET81',
            eventTypeId: 'TAKEAWAY',
            description: 'Takeaway by Dylan Larkin'
          },
          about: {
            eventIdx: 74,
            eventId: 81,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '16:33',
            periodTimeRemaining: '03:27',
            dateTime: '2023-03-12T17:08:28Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -77,
            y: 26
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8480813,
                fullName: 'Joe Veleno',
                link: '/api/v1/people/8480813'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8477365,
                fullName: 'Connor Clifton',
                link: '/api/v1/people/8477365'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET32',
            eventTypeId: 'HIT',
            description: 'Joe Veleno hit Connor Clifton'
          },
          about: {
            eventIdx: 75,
            eventId: 32,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '17:43',
            periodTimeRemaining: '02:17',
            dateTime: '2023-03-12T17:09:38Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -89,
            y: -33
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8480821,
                fullName: 'Filip Zadina',
                link: '/api/v1/people/8480821'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8475200,
                fullName: 'Dmitry Orlov',
                link: '/api/v1/people/8475200'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET127',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Dmitry Orlov shot blocked shot by Filip Zadina'
          },
          about: {
            eventIdx: 76,
            eventId: 127,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '18:02',
            periodTimeRemaining: '01:58',
            dateTime: '2023-03-12T17:09:57Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 59,
            y: 17
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478401,
                fullName: 'Pavel Zacha',
                link: '/api/v1/people/8478401'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET128',
            eventTypeId: 'MISSED_SHOT',
            description: 'Pavel Zacha Wide of Net Ville Husso'
          },
          about: {
            eventIdx: 77,
            eventId: 128,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '18:16',
            periodTimeRemaining: '01:44',
            dateTime: '2023-03-12T17:10:11Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 80,
            y: 6
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477903,
                fullName: 'Garnet Hathaway',
                link: '/api/v1/people/8477903'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET129',
            eventTypeId: 'SHOT',
            description: 'Garnet Hathaway Slap Shot saved by Ville Husso',
            secondaryType: 'Slap Shot'
          },
          about: {
            eventIdx: 78,
            eventId: 129,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '18:33',
            periodTimeRemaining: '01:27',
            dateTime: '2023-03-12T17:10:28Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 79,
            y: 1
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477454,
                fullName: 'Adam Erne',
                link: '/api/v1/people/8477454'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8477903,
                fullName: 'Garnet Hathaway',
                link: '/api/v1/people/8477903'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET33',
            eventTypeId: 'HIT',
            description: 'Adam Erne hit Garnet Hathaway'
          },
          about: {
            eventIdx: 79,
            eventId: 33,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '18:47',
            periodTimeRemaining: '01:13',
            dateTime: '2023-03-12T17:10:42Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 87,
            y: -34
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8475163,
                fullName: 'Alex Chiasson',
                link: '/api/v1/people/8475163'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET34',
            eventTypeId: 'HIT',
            description: 'Charlie McAvoy hit Alex Chiasson'
          },
          about: {
            eventIdx: 80,
            eventId: 34,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '19:01',
            periodTimeRemaining: '00:59',
            dateTime: '2023-03-12T17:10:56Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 42,
            y: 36
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477931,
                fullName: 'Tomas Nosek',
                link: '/api/v1/people/8477931'
              },
              playerType: 'PenaltyOn'
            },
            {
              player: {
                id: 8477851,
                fullName: 'Jordan Oesterle',
                link: '/api/v1/people/8477851'
              },
              playerType: 'DrewBy'
            }
          ],
          result: {
            event: 'Penalty',
            eventCode: 'DET328',
            eventTypeId: 'PENALTY',
            description: 'Tomas Nosek Roughing against Jordan Oesterle',
            secondaryType: 'Roughing',
            penaltySeverity: 'Minor',
            penaltyMinutes: 2
          },
          about: {
            eventIdx: 81,
            eventId: 328,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '19:04',
            periodTimeRemaining: '00:56',
            dateTime: '2023-03-12T17:11:00Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 49,
            y: 37
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477851,
                fullName: 'Jordan Oesterle',
                link: '/api/v1/people/8477851'
              },
              playerType: 'PenaltyOn'
            },
            {
              player: {
                id: 8477931,
                fullName: 'Tomas Nosek',
                link: '/api/v1/people/8477931'
              },
              playerType: 'DrewBy'
            }
          ],
          result: {
            event: 'Penalty',
            eventCode: 'DET332',
            eventTypeId: 'PENALTY',
            description: 'Jordan Oesterle Roughing against Tomas Nosek',
            secondaryType: 'Roughing',
            penaltySeverity: 'Minor',
            penaltyMinutes: 2
          },
          about: {
            eventIdx: 82,
            eventId: 332,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '19:04',
            periodTimeRemaining: '00:56',
            dateTime: '2023-03-12T17:11:00Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 45,
            y: 38
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'PenaltyOn'
            },
            {
              player: {
                id: 8478512,
                fullName: 'Austin Czarnik',
                link: '/api/v1/people/8478512'
              },
              playerType: 'DrewBy'
            }
          ],
          result: {
            event: 'Penalty',
            eventCode: 'DET335',
            eventTypeId: 'PENALTY',
            description: 'Charlie McAvoy Roughing against Austin Czarnik',
            secondaryType: 'Roughing',
            penaltySeverity: 'Minor',
            penaltyMinutes: 2
          },
          about: {
            eventIdx: 83,
            eventId: 335,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '19:04',
            periodTimeRemaining: '00:56',
            dateTime: '2023-03-12T17:11:00Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 44,
            y: 39
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478512,
                fullName: 'Austin Czarnik',
                link: '/api/v1/people/8478512'
              },
              playerType: 'PenaltyOn'
            },
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'DrewBy'
            }
          ],
          result: {
            event: 'Penalty',
            eventCode: 'DET338',
            eventTypeId: 'PENALTY',
            description: 'Austin Czarnik Slashing against Charlie McAvoy',
            secondaryType: 'Slashing',
            penaltySeverity: 'Minor',
            penaltyMinutes: 2
          },
          about: {
            eventIdx: 84,
            eventId: 338,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '19:04',
            periodTimeRemaining: '00:56',
            dateTime: '2023-03-12T17:11:00Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 44,
            y: 39
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET82',
            eventTypeId: 'FACEOFF',
            description: 'Patrice Bergeron faceoff won against Andrew Copp'
          },
          about: {
            eventIdx: 85,
            eventId: 82,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '19:04',
            periodTimeRemaining: '00:56',
            dateTime: '2023-03-12T17:13:47Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 69,
            y: 22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478443,
                fullName: 'Brandon Carlo',
                link: '/api/v1/people/8478443'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8477330,
                fullName: 'Dominik Kubalik',
                link: '/api/v1/people/8477330'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET130',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Dominik Kubalik shot blocked shot by Brandon Carlo'
          },
          about: {
            eventIdx: 86,
            eventId: 130,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '19:24',
            periodTimeRemaining: '00:36',
            dateTime: '2023-03-12T17:14:07Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -81,
            y: 6
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET83',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Andrew Copp'
          },
          about: {
            eventIdx: 87,
            eventId: 83,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '19:34',
            periodTimeRemaining: '00:26',
            dateTime: '2023-03-12T17:14:17Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -93,
            y: 29
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8481542,
                fullName: 'Moritz Seider',
                link: '/api/v1/people/8481542'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8473419,
                fullName: 'Brad Marchand',
                link: '/api/v1/people/8473419'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET35',
            eventTypeId: 'HIT',
            description: 'Moritz Seider hit Brad Marchand'
          },
          about: {
            eventIdx: 88,
            eventId: 35,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '19:42',
            periodTimeRemaining: '00:18',
            dateTime: '2023-03-12T17:14:25Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 63,
            y: 35
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Period End',
            eventCode: 'DET39',
            eventTypeId: 'PERIOD_END',
            description: 'End of 1st Period'
          },
          about: {
            eventIdx: 89,
            eventId: 39,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '20:00',
            periodTimeRemaining: '00:00',
            dateTime: '2023-03-12T17:14:43Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8473419,
                fullName: 'Brad Marchand',
                link: '/api/v1/people/8473419'
              },
              playerType: 'PenaltyOn'
            },
            {
              player: {
                id: 8474102,
                fullName: 'David Perron',
                link: '/api/v1/people/8474102'
              },
              playerType: 'DrewBy'
            }
          ],
          result: {
            event: 'Penalty',
            eventCode: 'DET43',
            eventTypeId: 'PENALTY',
            description: 'Brad Marchand Cross-checking against David Perron',
            secondaryType: 'Cross-checking',
            penaltySeverity: 'Minor',
            penaltyMinutes: 2
          },
          about: {
            eventIdx: 90,
            eventId: 43,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '20:00',
            periodTimeRemaining: '00:00',
            dateTime: '2023-03-12T17:14:43Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -2,
            y: 42
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Period Official',
            eventCode: 'DET42',
            eventTypeId: 'PERIOD_OFFICIAL',
            description: 'Period Official'
          },
          about: {
            eventIdx: 91,
            eventId: 42,
            period: 1,
            periodType: 'REGULAR',
            ordinalNum: '1st',
            periodTime: '20:00',
            periodTimeRemaining: '00:00',
            dateTime: '2023-03-12T17:15:35Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {}
        },
        {
          result: {
            event: 'Period Ready',
            eventCode: 'DET46',
            eventTypeId: 'PERIOD_READY',
            description: 'Period Ready'
          },
          about: {
            eventIdx: 92,
            eventId: 46,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '00:00',
            periodTimeRemaining: '20:00',
            dateTime: '2023-03-12T17:33:40Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {}
        },
        {
          result: {
            event: 'Period Start',
            eventCode: 'DET84',
            eventTypeId: 'PERIOD_START',
            description: 'Period Start'
          },
          about: {
            eventIdx: 93,
            eventId: 84,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '00:00',
            periodTimeRemaining: '20:00',
            dateTime: '2023-03-12T17:34:03Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8475745,
                fullName: 'Charlie Coyle',
                link: '/api/v1/people/8475745'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET85',
            eventTypeId: 'FACEOFF',
            description: 'Dylan Larkin faceoff won against Charlie Coyle'
          },
          about: {
            eventIdx: 94,
            eventId: 85,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '00:00',
            periodTimeRemaining: '20:00',
            dateTime: '2023-03-12T17:34:20Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 0,
            y: 0
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477903,
                fullName: 'Garnet Hathaway',
                link: '/api/v1/people/8477903'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET133',
            eventTypeId: 'MISSED_SHOT',
            description: 'Garnet Hathaway Hit Crossbar Ville Husso'
          },
          about: {
            eventIdx: 95,
            eventId: 133,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '00:21',
            periodTimeRemaining: '19:39',
            dateTime: '2023-03-12T17:34:41Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -72,
            y: 27
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477365,
                fullName: 'Connor Clifton',
                link: '/api/v1/people/8477365'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET47',
            eventTypeId: 'HIT',
            description: 'Connor Clifton hit Andrew Copp'
          },
          about: {
            eventIdx: 96,
            eventId: 47,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '01:40',
            periodTimeRemaining: '18:20',
            dateTime: '2023-03-12T17:36:00Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 59,
            y: 42
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477330,
                fullName: 'Dominik Kubalik',
                link: '/api/v1/people/8477330'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET134',
            eventTypeId: 'SHOT',
            description: 'Dominik Kubalik Snap Shot saved by Jeremy Swayman',
            secondaryType: 'Snap Shot'
          },
          about: {
            eventIdx: 97,
            eventId: 134,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '01:53',
            periodTimeRemaining: '18:07',
            dateTime: '2023-03-12T17:36:13Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 56,
            y: -18
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8476874,
                fullName: 'Olli Maatta',
                link: '/api/v1/people/8476874'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET135',
            eventTypeId: 'SHOT',
            description: 'Olli Maatta Snap Shot saved by Jeremy Swayman',
            secondaryType: 'Snap Shot'
          },
          about: {
            eventIdx: 98,
            eventId: 135,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '02:23',
            periodTimeRemaining: '17:37',
            dateTime: '2023-03-12T17:36:43Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 57,
            y: 27
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477454,
                fullName: 'Adam Erne',
                link: '/api/v1/people/8477454'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET136',
            eventTypeId: 'SHOT',
            description: 'Adam Erne Tip-In saved by Jeremy Swayman',
            secondaryType: 'Tip-In'
          },
          about: {
            eventIdx: 99,
            eventId: 136,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '02:32',
            periodTimeRemaining: '17:28',
            dateTime: '2023-03-12T17:36:52Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 82,
            y: 5
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478443,
                fullName: 'Brandon Carlo',
                link: '/api/v1/people/8478443'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8480813,
                fullName: 'Joe Veleno',
                link: '/api/v1/people/8480813'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET48',
            eventTypeId: 'HIT',
            description: 'Brandon Carlo hit Joe Veleno'
          },
          about: {
            eventIdx: 100,
            eventId: 48,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '02:39',
            periodTimeRemaining: '17:21',
            dateTime: '2023-03-12T17:36:59Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 94,
            y: -27
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477956,
                fullName: 'David Pastrnak',
                link: '/api/v1/people/8477956'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET137',
            eventTypeId: 'MISSED_SHOT',
            description: 'David Pastrnak Wide of Net Ville Husso'
          },
          about: {
            eventIdx: 101,
            eventId: 137,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '02:56',
            periodTimeRemaining: '17:04',
            dateTime: '2023-03-12T17:37:16Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -76,
            y: 18
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477454,
                fullName: 'Adam Erne',
                link: '/api/v1/people/8477454'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8477365,
                fullName: 'Connor Clifton',
                link: '/api/v1/people/8477365'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET49',
            eventTypeId: 'HIT',
            description: 'Adam Erne hit Connor Clifton'
          },
          about: {
            eventIdx: 102,
            eventId: 49,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '02:59',
            periodTimeRemaining: '17:01',
            dateTime: '2023-03-12T17:37:19Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -91,
            y: 30
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477479,
                fullName: 'Tyler Bertuzzi',
                link: '/api/v1/people/8477479'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Takeaway',
            eventCode: 'DET86',
            eventTypeId: 'TAKEAWAY',
            description: 'Takeaway by Tyler Bertuzzi'
          },
          about: {
            eventIdx: 103,
            eventId: 86,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '03:05',
            periodTimeRemaining: '16:55',
            dateTime: '2023-03-12T17:37:25Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 1,
            y: -27
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8476891,
                fullName: 'Matt Grzelcyk',
                link: '/api/v1/people/8476891'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET138',
            eventTypeId: 'SHOT',
            description: 'Matt Grzelcyk Wrist Shot saved by Ville Husso',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 104,
            eventId: 138,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '03:27',
            periodTimeRemaining: '16:33',
            dateTime: '2023-03-12T17:37:47Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 3,
            y: -1
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET50',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 105,
            eventId: 50,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '03:31',
            periodTimeRemaining: '16:29',
            dateTime: '2023-03-12T17:37:50Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET87',
            eventTypeId: 'FACEOFF',
            description: 'Patrice Bergeron faceoff won against Dylan Larkin'
          },
          about: {
            eventIdx: 106,
            eventId: 87,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '03:31',
            periodTimeRemaining: '16:29',
            dateTime: '2023-03-12T17:38:35Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -69,
            y: 22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET139',
            eventTypeId: 'SHOT',
            description: 'Charlie McAvoy Wrist Shot saved by Ville Husso',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 107,
            eventId: 139,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '03:58',
            periodTimeRemaining: '16:02',
            dateTime: '2023-03-12T17:39:02Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -51,
            y: 3
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478013,
                fullName: 'Jake Walman',
                link: '/api/v1/people/8478013'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET140',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Charlie McAvoy shot blocked shot by Jake Walman'
          },
          about: {
            eventIdx: 108,
            eventId: 140,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '04:19',
            periodTimeRemaining: '15:41',
            dateTime: '2023-03-12T17:39:23Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -81,
            y: -1
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8473419,
                fullName: 'Brad Marchand',
                link: '/api/v1/people/8473419'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET141',
            eventTypeId: 'SHOT',
            description: 'Brad Marchand Wrist Shot saved by Ville Husso',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 109,
            eventId: 141,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '04:25',
            periodTimeRemaining: '15:35',
            dateTime: '2023-03-12T17:39:29Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -54,
            y: 23
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478013,
                fullName: 'Jake Walman',
                link: '/api/v1/people/8478013'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET143',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Charlie McAvoy shot blocked shot by Jake Walman'
          },
          about: {
            eventIdx: 110,
            eventId: 143,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '04:29',
            periodTimeRemaining: '15:31',
            dateTime: '2023-03-12T17:39:33Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -65,
            y: 4
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET142',
            eventTypeId: 'SHOT',
            description: 'Charlie McAvoy Wrist Shot saved by Ville Husso',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 111,
            eventId: 142,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '04:34',
            periodTimeRemaining: '15:26',
            dateTime: '2023-03-12T17:39:38Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -73,
            y: -16
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475745,
                fullName: 'Charlie Coyle',
                link: '/api/v1/people/8475745'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET1001',
            eventTypeId: 'SHOT',
            description: 'Charlie Coyle Backhand saved by Ville Husso',
            secondaryType: 'Backhand'
          },
          about: {
            eventIdx: 112,
            eventId: 1001,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '04:36',
            periodTimeRemaining: '15:24',
            dateTime: '2023-03-12T17:39:40Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -82,
            y: -1
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET144',
            eventTypeId: 'SHOT',
            description: 'Charlie McAvoy Wrist Shot saved by Ville Husso',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 113,
            eventId: 144,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '04:37',
            periodTimeRemaining: '15:23',
            dateTime: '2023-03-12T17:39:41Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -83,
            y: -7
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET401',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 114,
            eventId: 401,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '04:39',
            periodTimeRemaining: '15:21',
            dateTime: '2023-03-12T17:39:43Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8475745,
                fullName: 'Charlie Coyle',
                link: '/api/v1/people/8475745'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET88',
            eventTypeId: 'FACEOFF',
            description: 'Charlie Coyle faceoff won against Andrew Copp'
          },
          about: {
            eventIdx: 115,
            eventId: 88,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '04:39',
            periodTimeRemaining: '15:21',
            dateTime: '2023-03-12T17:40:26Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -69,
            y: -22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477330,
                fullName: 'Dominik Kubalik',
                link: '/api/v1/people/8477330'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8477365,
                fullName: 'Connor Clifton',
                link: '/api/v1/people/8477365'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET145',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Connor Clifton shot blocked shot by Dominik Kubalik'
          },
          about: {
            eventIdx: 116,
            eventId: 145,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '04:41',
            periodTimeRemaining: '15:19',
            dateTime: '2023-03-12T17:40:28Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -59,
            y: -4
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477330,
                fullName: 'Dominik Kubalik',
                link: '/api/v1/people/8477330'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET146',
            eventTypeId: 'MISSED_SHOT',
            description: 'Dominik Kubalik Hit Crossbar Jeremy Swayman'
          },
          about: {
            eventIdx: 117,
            eventId: 146,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '05:09',
            periodTimeRemaining: '14:51',
            dateTime: '2023-03-12T17:40:57Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 55,
            y: -2
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET402',
            eventTypeId: 'STOP',
            description: 'Puck in Netting'
          },
          about: {
            eventIdx: 118,
            eventId: 402,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '05:09',
            periodTimeRemaining: '14:51',
            dateTime: '2023-03-12T17:40:57Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8478512,
                fullName: 'Austin Czarnik',
                link: '/api/v1/people/8478512'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477931,
                fullName: 'Tomas Nosek',
                link: '/api/v1/people/8477931'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET89',
            eventTypeId: 'FACEOFF',
            description: 'Austin Czarnik faceoff won against Tomas Nosek'
          },
          about: {
            eventIdx: 119,
            eventId: 89,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '05:09',
            periodTimeRemaining: '14:51',
            dateTime: '2023-03-12T17:41:31Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 69,
            y: -22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475163,
                fullName: 'Alex Chiasson',
                link: '/api/v1/people/8475163'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8477931,
                fullName: 'Tomas Nosek',
                link: '/api/v1/people/8477931'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET403',
            eventTypeId: 'HIT',
            description: 'Alex Chiasson hit Tomas Nosek'
          },
          about: {
            eventIdx: 120,
            eventId: 403,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '05:19',
            periodTimeRemaining: '14:41',
            dateTime: '2023-03-12T17:41:41Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 44,
            y: 41
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477851,
                fullName: 'Jordan Oesterle',
                link: '/api/v1/people/8477851'
              },
              playerType: 'PenaltyOn'
            },
            {
              player: {
                id: 8478421,
                fullName: 'A.J. Greer',
                link: '/api/v1/people/8478421'
              },
              playerType: 'DrewBy'
            }
          ],
          result: {
            event: 'Penalty',
            eventCode: 'DET526',
            eventTypeId: 'PENALTY',
            description: 'Jordan Oesterle Tripping against A.J. Greer',
            secondaryType: 'Tripping',
            penaltySeverity: 'Minor',
            penaltyMinutes: 2
          },
          about: {
            eventIdx: 121,
            eventId: 526,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '05:20',
            periodTimeRemaining: '14:40',
            dateTime: '2023-03-12T17:41:42Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: 10,
            y: 40
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8478401,
                fullName: 'Pavel Zacha',
                link: '/api/v1/people/8478401'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET90',
            eventTypeId: 'FACEOFF',
            description: 'Andrew Copp faceoff won against Pavel Zacha'
          },
          about: {
            eventIdx: 122,
            eventId: 90,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '05:20',
            periodTimeRemaining: '14:40',
            dateTime: '2023-03-12T17:42:59Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -69,
            y: 22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8476874,
                fullName: 'Olli Maatta',
                link: '/api/v1/people/8476874'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET147',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Charlie McAvoy shot blocked shot by Olli Maatta'
          },
          about: {
            eventIdx: 123,
            eventId: 147,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '05:52',
            periodTimeRemaining: '14:08',
            dateTime: '2023-03-12T17:43:31Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -76,
            y: 12
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477479,
                fullName: 'Tyler Bertuzzi',
                link: '/api/v1/people/8477479'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET91',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Tyler Bertuzzi'
          },
          about: {
            eventIdx: 124,
            eventId: 91,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '06:02',
            periodTimeRemaining: '13:58',
            dateTime: '2023-03-12T17:43:41Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -84,
            y: 13
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8481542,
                fullName: 'Moritz Seider',
                link: '/api/v1/people/8481542'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Takeaway',
            eventCode: 'DET92',
            eventTypeId: 'TAKEAWAY',
            description: 'Takeaway by Moritz Seider'
          },
          about: {
            eventIdx: 125,
            eventId: 92,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '06:30',
            periodTimeRemaining: '13:30',
            dateTime: '2023-03-12T17:44:09Z',
            goals: {
              away: 0,
              home: 1
            }
          },
          coordinates: {
            x: -33,
            y: -37
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8481542,
                fullName: 'Moritz Seider',
                link: '/api/v1/people/8481542'
              },
              playerType: 'Scorer',
              seasonTotal: 5
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Goal',
            eventCode: 'DET148',
            eventTypeId: 'GOAL',
            description: 'Moritz Seider (5) Backhand, assists: none',
            secondaryType: 'Backhand',
            strength: {
              code: 'SHG',
              name: 'Short Handed'
            },
            gameWinningGoal: false,
            emptyNet: false
          },
          about: {
            eventIdx: 126,
            eventId: 148,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '06:34',
            periodTimeRemaining: '13:26',
            dateTime: '2023-03-12T17:44:13Z',
            goals: {
              away: 0,
              home: 2
            }
          },
          coordinates: {
            x: 75,
            y: 0
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8471276,
                fullName: 'David Krejci',
                link: '/api/v1/people/8471276'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET93',
            eventTypeId: 'FACEOFF',
            description: 'David Krejci faceoff won against Andrew Copp'
          },
          about: {
            eventIdx: 127,
            eventId: 93,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '06:34',
            periodTimeRemaining: '13:26',
            dateTime: '2023-03-12T17:45:01Z',
            goals: {
              away: 0,
              home: 2
            }
          },
          coordinates: {
            x: 0,
            y: 0
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8476891,
                fullName: 'Matt Grzelcyk',
                link: '/api/v1/people/8476891'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET149',
            eventTypeId: 'SHOT',
            description: 'Matt Grzelcyk Snap Shot saved by Ville Husso',
            secondaryType: 'Snap Shot'
          },
          about: {
            eventIdx: 128,
            eventId: 149,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '07:00',
            periodTimeRemaining: '13:00',
            dateTime: '2023-03-12T17:45:27Z',
            goals: {
              away: 0,
              home: 2
            }
          },
          coordinates: {
            x: -61,
            y: -21
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8480821,
                fullName: 'Filip Zadina',
                link: '/api/v1/people/8480821'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Takeaway',
            eventCode: 'DET94',
            eventTypeId: 'TAKEAWAY',
            description: 'Takeaway by Filip Zadina'
          },
          about: {
            eventIdx: 129,
            eventId: 94,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '07:20',
            periodTimeRemaining: '12:40',
            dateTime: '2023-03-12T17:45:47Z',
            goals: {
              away: 0,
              home: 2
            }
          },
          coordinates: {
            x: -47,
            y: 37
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8480821,
                fullName: 'Filip Zadina',
                link: '/api/v1/people/8480821'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET95',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Filip Zadina'
          },
          about: {
            eventIdx: 130,
            eventId: 95,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '07:22',
            periodTimeRemaining: '12:38',
            dateTime: '2023-03-12T17:45:49Z',
            goals: {
              away: 0,
              home: 2
            }
          },
          coordinates: {
            x: -48,
            y: 31
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8480821,
                fullName: 'Filip Zadina',
                link: '/api/v1/people/8480821'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8479365,
                fullName: 'Trent Frederic',
                link: '/api/v1/people/8479365'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET150',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Trent Frederic shot blocked shot by Filip Zadina'
          },
          about: {
            eventIdx: 131,
            eventId: 150,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '08:11',
            periodTimeRemaining: '11:49',
            dateTime: '2023-03-12T17:46:38Z',
            goals: {
              away: 0,
              home: 2
            }
          },
          coordinates: {
            x: -77,
            y: -14
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8479365,
                fullName: 'Trent Frederic',
                link: '/api/v1/people/8479365'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET96',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Trent Frederic'
          },
          about: {
            eventIdx: 132,
            eventId: 96,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '08:30',
            periodTimeRemaining: '11:30',
            dateTime: '2023-03-12T17:46:57Z',
            goals: {
              away: 0,
              home: 2
            }
          },
          coordinates: {
            x: 52,
            y: -40
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478013,
                fullName: 'Jake Walman',
                link: '/api/v1/people/8478013'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET451',
            eventTypeId: 'SHOT',
            description: 'Jake Walman Wrist Shot saved by Jeremy Swayman',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 133,
            eventId: 451,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '08:31',
            periodTimeRemaining: '11:29',
            dateTime: '2023-03-12T17:46:58Z',
            goals: {
              away: 0,
              home: 2
            }
          },
          coordinates: {
            x: 51,
            y: 4
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET404',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 134,
            eventId: 404,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '08:32',
            periodTimeRemaining: '11:28',
            dateTime: '2023-03-12T17:46:59Z',
            goals: {
              away: 0,
              home: 2
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477931,
                fullName: 'Tomas Nosek',
                link: '/api/v1/people/8477931'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8475163,
                fullName: 'Alex Chiasson',
                link: '/api/v1/people/8475163'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET97',
            eventTypeId: 'FACEOFF',
            description: 'Tomas Nosek faceoff won against Alex Chiasson'
          },
          about: {
            eventIdx: 135,
            eventId: 97,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '08:32',
            periodTimeRemaining: '11:28',
            dateTime: '2023-03-12T17:49:42Z',
            goals: {
              away: 0,
              home: 2
            }
          },
          coordinates: {
            x: 69,
            y: -22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475200,
                fullName: 'Dmitry Orlov',
                link: '/api/v1/people/8475200'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8477454,
                fullName: 'Adam Erne',
                link: '/api/v1/people/8477454'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET405',
            eventTypeId: 'HIT',
            description: 'Dmitry Orlov hit Adam Erne'
          },
          about: {
            eventIdx: 136,
            eventId: 405,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '09:05',
            periodTimeRemaining: '10:55',
            dateTime: '2023-03-12T17:50:15Z',
            goals: {
              away: 0,
              home: 2
            }
          },
          coordinates: {
            x: 96,
            y: -26
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477903,
                fullName: 'Garnet Hathaway',
                link: '/api/v1/people/8477903'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET452',
            eventTypeId: 'SHOT',
            description: 'Garnet Hathaway Snap Shot saved by Ville Husso',
            secondaryType: 'Snap Shot'
          },
          about: {
            eventIdx: 137,
            eventId: 452,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '09:25',
            periodTimeRemaining: '10:35',
            dateTime: '2023-03-12T17:50:35Z',
            goals: {
              away: 0,
              home: 2
            }
          },
          coordinates: {
            x: -64,
            y: 5
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477931,
                fullName: 'Tomas Nosek',
                link: '/api/v1/people/8477931'
              },
              playerType: 'PenaltyOn'
            },
            {
              player: {
                id: 8474102,
                fullName: 'David Perron',
                link: '/api/v1/people/8474102'
              },
              playerType: 'DrewBy'
            }
          ],
          result: {
            event: 'Penalty',
            eventCode: 'DET407',
            eventTypeId: 'PENALTY',
            description: 'Tomas Nosek Tripping against David Perron',
            secondaryType: 'Tripping',
            penaltySeverity: 'Minor',
            penaltyMinutes: 2
          },
          about: {
            eventIdx: 138,
            eventId: 407,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '09:34',
            periodTimeRemaining: '10:26',
            dateTime: '2023-03-12T17:50:44Z',
            goals: {
              away: 0,
              home: 2
            }
          },
          coordinates: {
            x: -50,
            y: -39
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET98',
            eventTypeId: 'FACEOFF',
            description: 'Dylan Larkin faceoff won against Patrice Bergeron'
          },
          about: {
            eventIdx: 139,
            eventId: 98,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '09:34',
            periodTimeRemaining: '10:26',
            dateTime: '2023-03-12T17:51:33Z',
            goals: {
              away: 0,
              home: 2
            }
          },
          coordinates: {
            x: 69,
            y: -22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475163,
                fullName: 'Alex Chiasson',
                link: '/api/v1/people/8475163'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET453',
            eventTypeId: 'MISSED_SHOT',
            description: 'Alex Chiasson Wide of Net Jeremy Swayman'
          },
          about: {
            eventIdx: 140,
            eventId: 453,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '10:29',
            periodTimeRemaining: '09:31',
            dateTime: '2023-03-12T17:52:28Z',
            goals: {
              away: 0,
              home: 2
            }
          },
          coordinates: {
            x: 83,
            y: 5
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8474102,
                fullName: 'David Perron',
                link: '/api/v1/people/8474102'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Takeaway',
            eventCode: 'DET99',
            eventTypeId: 'TAKEAWAY',
            description: 'Takeaway by David Perron'
          },
          about: {
            eventIdx: 141,
            eventId: 99,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '10:32',
            periodTimeRemaining: '09:28',
            dateTime: '2023-03-12T17:52:31Z',
            goals: {
              away: 0,
              home: 2
            }
          },
          coordinates: {
            x: 51,
            y: 40
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Scorer',
              seasonTotal: 25
            },
            {
              player: {
                id: 8482078,
                fullName: 'Lucas Raymond',
                link: '/api/v1/people/8482078'
              },
              playerType: 'Assist',
              seasonTotal: 20
            },
            {
              player: {
                id: 8481542,
                fullName: 'Moritz Seider',
                link: '/api/v1/people/8481542'
              },
              playerType: 'Assist',
              seasonTotal: 30
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Goal',
            eventCode: 'DET454',
            eventTypeId: 'GOAL',
            description:
              'Dylan Larkin (25) Wrist Shot, assists: Lucas Raymond (20), Moritz Seider (30)',
            secondaryType: 'Wrist Shot',
            strength: {
              code: 'PPG',
              name: 'Power Play'
            },
            gameWinningGoal: false,
            emptyNet: false
          },
          about: {
            eventIdx: 142,
            eventId: 454,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '10:39',
            periodTimeRemaining: '09:21',
            dateTime: '2023-03-12T17:52:37Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: 63,
            y: 2
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET100',
            eventTypeId: 'FACEOFF',
            description: 'Patrice Bergeron faceoff won against Andrew Copp'
          },
          about: {
            eventIdx: 143,
            eventId: 100,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '10:39',
            periodTimeRemaining: '09:21',
            dateTime: '2023-03-12T17:53:57Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: 0,
            y: 0
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET410',
            eventTypeId: 'STOP',
            description: 'Puck in Benches'
          },
          about: {
            eventIdx: 144,
            eventId: 410,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '10:44',
            periodTimeRemaining: '09:16',
            dateTime: '2023-03-12T17:54:02Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET352',
            eventTypeId: 'FACEOFF',
            description: 'Andrew Copp faceoff won against Patrice Bergeron'
          },
          about: {
            eventIdx: 145,
            eventId: 352,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '10:44',
            periodTimeRemaining: '09:16',
            dateTime: '2023-03-12T17:56:37Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: 0,
            y: 0
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8481542,
                fullName: 'Moritz Seider',
                link: '/api/v1/people/8481542'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8477479,
                fullName: 'Tyler Bertuzzi',
                link: '/api/v1/people/8477479'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET455',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Tyler Bertuzzi shot blocked shot by Moritz Seider'
          },
          about: {
            eventIdx: 146,
            eventId: 455,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '11:04',
            periodTimeRemaining: '08:56',
            dateTime: '2023-03-12T17:56:57Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: -80,
            y: 1
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477479,
                fullName: 'Tyler Bertuzzi',
                link: '/api/v1/people/8477479'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET1002',
            eventTypeId: 'MISSED_SHOT',
            description: 'Tyler Bertuzzi Wide of Net Ville Husso'
          },
          about: {
            eventIdx: 147,
            eventId: 1002,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '11:05',
            periodTimeRemaining: '08:55',
            dateTime: '2023-03-12T17:56:58Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: -75,
            y: 2
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET456',
            eventTypeId: 'MISSED_SHOT',
            description: 'Patrice Bergeron Wide of Net Ville Husso'
          },
          about: {
            eventIdx: 148,
            eventId: 456,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '11:34',
            periodTimeRemaining: '08:26',
            dateTime: '2023-03-12T17:57:27Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: -33,
            y: 38
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477330,
                fullName: 'Dominik Kubalik',
                link: '/api/v1/people/8477330'
              },
              playerType: 'PenaltyOn'
            },
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'DrewBy'
            }
          ],
          result: {
            event: 'Penalty',
            eventCode: 'DET625',
            eventTypeId: 'PENALTY',
            description: 'Dominik Kubalik Slashing against Charlie McAvoy',
            secondaryType: 'Slashing',
            penaltySeverity: 'Minor',
            penaltyMinutes: 2
          },
          about: {
            eventIdx: 149,
            eventId: 625,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '11:36',
            periodTimeRemaining: '08:24',
            dateTime: '2023-03-12T17:57:29Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: -59,
            y: 39
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8471276,
                fullName: 'David Krejci',
                link: '/api/v1/people/8471276'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET353',
            eventTypeId: 'FACEOFF',
            description: 'David Krejci faceoff won against Dylan Larkin'
          },
          about: {
            eventIdx: 150,
            eventId: 353,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '11:36',
            periodTimeRemaining: '08:24',
            dateTime: '2023-03-12T17:58:21Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: -69,
            y: 22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8471276,
                fullName: 'David Krejci',
                link: '/api/v1/people/8471276'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET457',
            eventTypeId: 'SHOT',
            description: 'David Krejci Wrist Shot saved by Ville Husso',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 151,
            eventId: 457,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '11:42',
            periodTimeRemaining: '08:18',
            dateTime: '2023-03-12T17:58:27Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: -60,
            y: -13
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET412',
            eventTypeId: 'STOP',
            description: 'Puck in Netting'
          },
          about: {
            eventIdx: 152,
            eventId: 412,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '11:48',
            periodTimeRemaining: '08:12',
            dateTime: '2023-03-12T17:58:34Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET355',
            eventTypeId: 'FACEOFF',
            description: 'Patrice Bergeron faceoff won against Dylan Larkin'
          },
          about: {
            eventIdx: 153,
            eventId: 355,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '11:48',
            periodTimeRemaining: '08:12',
            dateTime: '2023-03-12T17:59:14Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: -69,
            y: -22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET458',
            eventTypeId: 'SHOT',
            description: 'Patrice Bergeron Tip-In saved by Ville Husso',
            secondaryType: 'Tip-In'
          },
          about: {
            eventIdx: 154,
            eventId: 458,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '12:40',
            periodTimeRemaining: '07:20',
            dateTime: '2023-03-12T18:00:06Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: -81,
            y: 1
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET413',
            eventTypeId: 'STOP',
            description: 'Puck Frozen'
          },
          about: {
            eventIdx: 155,
            eventId: 413,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '12:43',
            periodTimeRemaining: '07:17',
            dateTime: '2023-03-12T18:00:09Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8478401,
                fullName: 'Pavel Zacha',
                link: '/api/v1/people/8478401'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET356',
            eventTypeId: 'FACEOFF',
            description: 'Pavel Zacha faceoff won against Andrew Copp'
          },
          about: {
            eventIdx: 156,
            eventId: 356,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '12:43',
            periodTimeRemaining: '07:17',
            dateTime: '2023-03-12T18:00:45Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: -69,
            y: -22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475279,
                fullName: 'Ben Chiarot',
                link: '/api/v1/people/8475279'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8471276,
                fullName: 'David Krejci',
                link: '/api/v1/people/8471276'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET459',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'David Krejci shot blocked shot by Ben Chiarot'
          },
          about: {
            eventIdx: 157,
            eventId: 459,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '12:51',
            periodTimeRemaining: '07:09',
            dateTime: '2023-03-12T18:00:53Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: -72,
            y: -8
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8476874,
                fullName: 'Olli Maatta',
                link: '/api/v1/people/8476874'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET460',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Charlie McAvoy shot blocked shot by Olli Maatta'
          },
          about: {
            eventIdx: 158,
            eventId: 460,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '13:20',
            periodTimeRemaining: '06:40',
            dateTime: '2023-03-12T18:01:22Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: -80,
            y: -1
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8471276,
                fullName: 'David Krejci',
                link: '/api/v1/people/8471276'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET461',
            eventTypeId: 'SHOT',
            description: 'David Krejci Slap Shot saved by Ville Husso',
            secondaryType: 'Slap Shot'
          },
          about: {
            eventIdx: 159,
            eventId: 461,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '13:27',
            periodTimeRemaining: '06:33',
            dateTime: '2023-03-12T18:01:29Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: -53,
            y: -23
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET414',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 160,
            eventId: 414,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '13:28',
            periodTimeRemaining: '06:32',
            dateTime: '2023-03-12T18:01:30Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET357',
            eventTypeId: 'FACEOFF',
            description: 'Dylan Larkin faceoff won against Patrice Bergeron'
          },
          about: {
            eventIdx: 161,
            eventId: 357,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '13:28',
            periodTimeRemaining: '06:32',
            dateTime: '2023-03-12T18:02:17Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: -69,
            y: -22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478013,
                fullName: 'Jake Walman',
                link: '/api/v1/people/8478013'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET415',
            eventTypeId: 'HIT',
            description: 'Jake Walman hit Charlie McAvoy'
          },
          about: {
            eventIdx: 162,
            eventId: 415,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '14:12',
            periodTimeRemaining: '05:48',
            dateTime: '2023-03-12T18:03:01Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: -90,
            y: 34
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8473419,
                fullName: 'Brad Marchand',
                link: '/api/v1/people/8473419'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET462',
            eventTypeId: 'SHOT',
            description: 'Brad Marchand Snap Shot saved by Ville Husso',
            secondaryType: 'Snap Shot'
          },
          about: {
            eventIdx: 163,
            eventId: 462,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '14:13',
            periodTimeRemaining: '05:47',
            dateTime: '2023-03-12T18:03:02Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: -63,
            y: -11
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478498,
                fullName: 'Jake DeBrusk',
                link: '/api/v1/people/8478498'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET463',
            eventTypeId: 'SHOT',
            description: 'Jake DeBrusk Wrist Shot saved by Ville Husso',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 164,
            eventId: 463,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '14:34',
            periodTimeRemaining: '05:26',
            dateTime: '2023-03-12T18:03:23Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: -81,
            y: -19
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477851,
                fullName: 'Jordan Oesterle',
                link: '/api/v1/people/8477851'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8478498,
                fullName: 'Jake DeBrusk',
                link: '/api/v1/people/8478498'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET464',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Jake DeBrusk shot blocked shot by Jordan Oesterle'
          },
          about: {
            eventIdx: 165,
            eventId: 464,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '14:43',
            periodTimeRemaining: '05:17',
            dateTime: '2023-03-12T18:03:32Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: -78,
            y: -2
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8480813,
                fullName: 'Joe Veleno',
                link: '/api/v1/people/8480813'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET465',
            eventTypeId: 'SHOT',
            description: 'Joe Veleno Slap Shot saved by Jeremy Swayman',
            secondaryType: 'Slap Shot'
          },
          about: {
            eventIdx: 166,
            eventId: 465,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '14:49',
            periodTimeRemaining: '05:11',
            dateTime: '2023-03-12T18:03:38Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: 71,
            y: -32
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8481013,
                fullName: 'Jonatan Berggren',
                link: '/api/v1/people/8481013'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET473',
            eventTypeId: 'MISSED_SHOT',
            description: 'Jonatan Berggren Goalpost Jeremy Swayman'
          },
          about: {
            eventIdx: 167,
            eventId: 473,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '15:06',
            periodTimeRemaining: '04:54',
            dateTime: '2023-03-12T18:03:55Z',
            goals: {
              away: 0,
              home: 3
            }
          },
          coordinates: {
            x: 55,
            y: -25
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477454,
                fullName: 'Adam Erne',
                link: '/api/v1/people/8477454'
              },
              playerType: 'Scorer',
              seasonTotal: 8
            },
            {
              player: {
                id: 8481013,
                fullName: 'Jonatan Berggren',
                link: '/api/v1/people/8481013'
              },
              playerType: 'Assist',
              seasonTotal: 11
            },
            {
              player: {
                id: 8477851,
                fullName: 'Jordan Oesterle',
                link: '/api/v1/people/8477851'
              },
              playerType: 'Assist',
              seasonTotal: 4
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Goal',
            eventCode: 'DET466',
            eventTypeId: 'GOAL',
            description:
              'Adam Erne (8) Wrist Shot, assists: Jonatan Berggren (11), Jordan Oesterle (4)',
            secondaryType: 'Wrist Shot',
            strength: {
              code: 'EVEN',
              name: 'Even'
            },
            gameWinningGoal: true,
            emptyNet: false
          },
          about: {
            eventIdx: 168,
            eventId: 466,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '15:08',
            periodTimeRemaining: '04:52',
            dateTime: '2023-03-12T18:03:57Z',
            goals: {
              away: 0,
              home: 4
            }
          },
          coordinates: {
            x: 86,
            y: -6
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477931,
                fullName: 'Tomas Nosek',
                link: '/api/v1/people/8477931'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8478512,
                fullName: 'Austin Czarnik',
                link: '/api/v1/people/8478512'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET358',
            eventTypeId: 'FACEOFF',
            description: 'Tomas Nosek faceoff won against Austin Czarnik'
          },
          about: {
            eventIdx: 169,
            eventId: 358,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '15:08',
            periodTimeRemaining: '04:52',
            dateTime: '2023-03-12T18:04:56Z',
            goals: {
              away: 0,
              home: 4
            }
          },
          coordinates: {
            x: 0,
            y: 0
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477454,
                fullName: 'Adam Erne',
                link: '/api/v1/people/8477454'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET467',
            eventTypeId: 'SHOT',
            description: 'Adam Erne Wrap-around saved by Jeremy Swayman',
            secondaryType: 'Wrap-around'
          },
          about: {
            eventIdx: 170,
            eventId: 467,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '15:38',
            periodTimeRemaining: '04:22',
            dateTime: '2023-03-12T18:05:26Z',
            goals: {
              away: 0,
              home: 4
            }
          },
          coordinates: {
            x: 90,
            y: 7
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8476874,
                fullName: 'Olli Maatta',
                link: '/api/v1/people/8476874'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET468',
            eventTypeId: 'MISSED_SHOT',
            description: 'Olli Maatta Wide of Net Jeremy Swayman'
          },
          about: {
            eventIdx: 171,
            eventId: 468,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '15:52',
            periodTimeRemaining: '04:08',
            dateTime: '2023-03-12T18:05:40Z',
            goals: {
              away: 0,
              home: 4
            }
          },
          coordinates: {
            x: 46,
            y: 41
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477956,
                fullName: 'David Pastrnak',
                link: '/api/v1/people/8477956'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET416',
            eventTypeId: 'HIT',
            description: 'David Pastrnak hit Dylan Larkin'
          },
          about: {
            eventIdx: 172,
            eventId: 416,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '16:31',
            periodTimeRemaining: '03:29',
            dateTime: '2023-03-12T18:06:19Z',
            goals: {
              away: 0,
              home: 4
            }
          },
          coordinates: {
            x: 37,
            y: -40
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478443,
                fullName: 'Brandon Carlo',
                link: '/api/v1/people/8478443'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8482078,
                fullName: 'Lucas Raymond',
                link: '/api/v1/people/8482078'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET469',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Lucas Raymond shot blocked shot by Brandon Carlo'
          },
          about: {
            eventIdx: 173,
            eventId: 469,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '16:43',
            periodTimeRemaining: '03:17',
            dateTime: '2023-03-12T18:06:31Z',
            goals: {
              away: 0,
              home: 4
            }
          },
          coordinates: {
            x: 74,
            y: 9
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8476891,
                fullName: 'Matt Grzelcyk',
                link: '/api/v1/people/8476891'
              },
              playerType: 'Scorer',
              seasonTotal: 4
            },
            {
              player: {
                id: 8477956,
                fullName: 'David Pastrnak',
                link: '/api/v1/people/8477956'
              },
              playerType: 'Assist',
              seasonTotal: 42
            },
            {
              player: {
                id: 8478401,
                fullName: 'Pavel Zacha',
                link: '/api/v1/people/8478401'
              },
              playerType: 'Assist',
              seasonTotal: 28
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Goal',
            eventCode: 'DET470',
            eventTypeId: 'GOAL',
            description:
              'Matt Grzelcyk (4) Snap Shot, assists: David Pastrnak (42), Pavel Zacha (28)',
            secondaryType: 'Snap Shot',
            strength: {
              code: 'EVEN',
              name: 'Even'
            },
            gameWinningGoal: false,
            emptyNet: false
          },
          about: {
            eventIdx: 174,
            eventId: 470,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '16:52',
            periodTimeRemaining: '03:08',
            dateTime: '2023-03-12T18:06:41Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: -71,
            y: 21
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET359',
            eventTypeId: 'FACEOFF',
            description: 'Patrice Bergeron faceoff won against Andrew Copp'
          },
          about: {
            eventIdx: 175,
            eventId: 359,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '16:52',
            periodTimeRemaining: '03:08',
            dateTime: '2023-03-12T18:07:22Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 0,
            y: 0
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8476891,
                fullName: 'Matt Grzelcyk',
                link: '/api/v1/people/8476891'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET471',
            eventTypeId: 'MISSED_SHOT',
            description: 'Matt Grzelcyk Wide of Net Ville Husso'
          },
          about: {
            eventIdx: 176,
            eventId: 471,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '17:27',
            periodTimeRemaining: '02:33',
            dateTime: '2023-03-12T18:07:57Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: -76,
            y: 22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477330,
                fullName: 'Dominik Kubalik',
                link: '/api/v1/people/8477330'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET472',
            eventTypeId: 'SHOT',
            description: 'Dominik Kubalik Wrist Shot saved by Jeremy Swayman',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 177,
            eventId: 472,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '17:36',
            periodTimeRemaining: '02:24',
            dateTime: '2023-03-12T18:08:06Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 22,
            y: -10
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET417',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 178,
            eventId: 417,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '17:37',
            periodTimeRemaining: '02:23',
            dateTime: '2023-03-12T18:08:08Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477330,
                fullName: 'Dominik Kubalik',
                link: '/api/v1/people/8477330'
              },
              playerType: 'PenaltyOn'
            },
            {
              player: {
                id: 8475745,
                fullName: 'Charlie Coyle',
                link: '/api/v1/people/8475745'
              },
              playerType: 'DrewBy'
            }
          ],
          result: {
            event: 'Penalty',
            eventCode: 'DET668',
            eventTypeId: 'PENALTY',
            description: 'Dominik Kubalik Roughing against Charlie Coyle',
            secondaryType: 'Roughing',
            penaltySeverity: 'Minor',
            penaltyMinutes: 2
          },
          about: {
            eventIdx: 180,
            eventId: 668,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '17:37',
            periodTimeRemaining: '02:23',
            dateTime: '2023-03-12T18:08:08Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 83,
            y: -7
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475745,
                fullName: 'Charlie Coyle',
                link: '/api/v1/people/8475745'
              },
              playerType: 'PenaltyOn'
            },
            {
              player: {
                id: 8477330,
                fullName: 'Dominik Kubalik',
                link: '/api/v1/people/8477330'
              },
              playerType: 'DrewBy'
            }
          ],
          result: {
            event: 'Penalty',
            eventCode: 'DET671',
            eventTypeId: 'PENALTY',
            description: 'Charlie Coyle Roughing against Dominik Kubalik',
            secondaryType: 'Roughing',
            penaltySeverity: 'Minor',
            penaltyMinutes: 2
          },
          about: {
            eventIdx: 181,
            eventId: 671,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '17:37',
            periodTimeRemaining: '02:23',
            dateTime: '2023-03-12T18:08:08Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 81,
            y: -6
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET784',
            eventTypeId: 'STOP',
            description: 'TV timeout'
          },
          about: {
            eventIdx: 179,
            eventId: 784,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '17:37',
            periodTimeRemaining: '02:23',
            dateTime: '2023-03-12T18:08:08Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8478401,
                fullName: 'Pavel Zacha',
                link: '/api/v1/people/8478401'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8480813,
                fullName: 'Joe Veleno',
                link: '/api/v1/people/8480813'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET360',
            eventTypeId: 'FACEOFF',
            description: 'Pavel Zacha faceoff won against Joe Veleno'
          },
          about: {
            eventIdx: 182,
            eventId: 360,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '17:37',
            periodTimeRemaining: '02:23',
            dateTime: '2023-03-12T18:11:35Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 69,
            y: -22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8480813,
                fullName: 'Joe Veleno',
                link: '/api/v1/people/8480813'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Takeaway',
            eventCode: 'DET361',
            eventTypeId: 'TAKEAWAY',
            description: 'Takeaway by Joe Veleno'
          },
          about: {
            eventIdx: 183,
            eventId: 361,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '18:08',
            periodTimeRemaining: '01:52',
            dateTime: '2023-03-12T18:12:06Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: -19,
            y: -30
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477365,
                fullName: 'Connor Clifton',
                link: '/api/v1/people/8477365'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8476874,
                fullName: 'Olli Maatta',
                link: '/api/v1/people/8476874'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET785',
            eventTypeId: 'HIT',
            description: 'Connor Clifton hit Olli Maatta'
          },
          about: {
            eventIdx: 184,
            eventId: 785,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '18:19',
            periodTimeRemaining: '01:41',
            dateTime: '2023-03-12T18:12:17Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 97,
            y: 19
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8480459,
                fullName: 'Pius Suter',
                link: '/api/v1/people/8480459'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET474',
            eventTypeId: 'SHOT',
            description: 'Pius Suter Wrist Shot saved by Jeremy Swayman',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 185,
            eventId: 474,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '18:40',
            periodTimeRemaining: '01:20',
            dateTime: '2023-03-12T18:12:38Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 53,
            y: 23
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET786',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 186,
            eventId: 786,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '18:42',
            periodTimeRemaining: '01:18',
            dateTime: '2023-03-12T18:12:39Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET362',
            eventTypeId: 'FACEOFF',
            description: 'Patrice Bergeron faceoff won against Andrew Copp'
          },
          about: {
            eventIdx: 187,
            eventId: 362,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '18:42',
            periodTimeRemaining: '01:18',
            dateTime: '2023-03-12T18:13:12Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 69,
            y: 22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475200,
                fullName: 'Dmitry Orlov',
                link: '/api/v1/people/8475200'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET477',
            eventTypeId: 'SHOT',
            description: 'Dmitry Orlov Backhand saved by Ville Husso',
            secondaryType: 'Backhand'
          },
          about: {
            eventIdx: 188,
            eventId: 477,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '18:58',
            periodTimeRemaining: '01:02',
            dateTime: '2023-03-12T18:13:28Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: -87,
            y: 9
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET476',
            eventTypeId: 'SHOT',
            description: 'Patrice Bergeron Wrist Shot saved by Ville Husso',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 189,
            eventId: 476,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '19:01',
            periodTimeRemaining: '00:59',
            dateTime: '2023-03-12T18:13:33Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: -83,
            y: 11
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET787',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 190,
            eventId: 787,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '19:01',
            periodTimeRemaining: '00:59',
            dateTime: '2023-03-12T18:13:33Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8471276,
                fullName: 'David Krejci',
                link: '/api/v1/people/8471276'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8480813,
                fullName: 'Joe Veleno',
                link: '/api/v1/people/8480813'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET363',
            eventTypeId: 'FACEOFF',
            description: 'David Krejci faceoff won against Joe Veleno'
          },
          about: {
            eventIdx: 191,
            eventId: 363,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '19:01',
            periodTimeRemaining: '00:59',
            dateTime: '2023-03-12T18:14:13Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: -69,
            y: 22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475279,
                fullName: 'Ben Chiarot',
                link: '/api/v1/people/8475279'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8477956,
                fullName: 'David Pastrnak',
                link: '/api/v1/people/8477956'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET478',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'David Pastrnak shot blocked shot by Ben Chiarot'
          },
          about: {
            eventIdx: 192,
            eventId: 478,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '19:11',
            periodTimeRemaining: '00:49',
            dateTime: '2023-03-12T18:14:23Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: -70,
            y: 8
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET788',
            eventTypeId: 'STOP',
            description: 'Puck in Netting'
          },
          about: {
            eventIdx: 193,
            eventId: 788,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '19:12',
            periodTimeRemaining: '00:48',
            dateTime: '2023-03-12T18:14:24Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8471276,
                fullName: 'David Krejci',
                link: '/api/v1/people/8471276'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET364',
            eventTypeId: 'FACEOFF',
            description: 'David Krejci faceoff won against Andrew Copp'
          },
          about: {
            eventIdx: 194,
            eventId: 364,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '19:12',
            periodTimeRemaining: '00:48',
            dateTime: '2023-03-12T18:15:05Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: -69,
            y: 22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET789',
            eventTypeId: 'STOP',
            description: 'Offside'
          },
          about: {
            eventIdx: 195,
            eventId: 789,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '19:31',
            periodTimeRemaining: '00:29',
            dateTime: '2023-03-12T18:15:23Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477479,
                fullName: 'Tyler Bertuzzi',
                link: '/api/v1/people/8477479'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET365',
            eventTypeId: 'FACEOFF',
            description: 'Andrew Copp faceoff won against Tyler Bertuzzi'
          },
          about: {
            eventIdx: 196,
            eventId: 365,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '19:31',
            periodTimeRemaining: '00:29',
            dateTime: '2023-03-12T18:15:55Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 20,
            y: -22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Period End',
            eventCode: 'DET790',
            eventTypeId: 'PERIOD_END',
            description: 'End of 2nd Period'
          },
          about: {
            eventIdx: 197,
            eventId: 790,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '20:00',
            periodTimeRemaining: '00:00',
            dateTime: '2023-03-12T18:16:24Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          result: {
            event: 'Period Official',
            eventCode: 'DET793',
            eventTypeId: 'PERIOD_OFFICIAL',
            description: 'Period Official'
          },
          about: {
            eventIdx: 198,
            eventId: 793,
            period: 2,
            periodType: 'REGULAR',
            ordinalNum: '2nd',
            periodTime: '20:00',
            periodTimeRemaining: '00:00',
            dateTime: '2023-03-12T18:16:30Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          result: {
            event: 'Period Ready',
            eventCode: 'DET794',
            eventTypeId: 'PERIOD_READY',
            description: 'Period Ready'
          },
          about: {
            eventIdx: 199,
            eventId: 794,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '00:00',
            periodTimeRemaining: '20:00',
            dateTime: '2023-03-12T18:34:59Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          result: {
            event: 'Period Start',
            eventCode: 'DET366',
            eventTypeId: 'PERIOD_START',
            description: 'Period Start'
          },
          about: {
            eventIdx: 200,
            eventId: 366,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '00:00',
            periodTimeRemaining: '20:00',
            dateTime: '2023-03-12T18:35:26Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8478512,
                fullName: 'Austin Czarnik',
                link: '/api/v1/people/8478512'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477931,
                fullName: 'Tomas Nosek',
                link: '/api/v1/people/8477931'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET367',
            eventTypeId: 'FACEOFF',
            description: 'Austin Czarnik faceoff won against Tomas Nosek'
          },
          about: {
            eventIdx: 201,
            eventId: 367,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '00:00',
            periodTimeRemaining: '20:00',
            dateTime: '2023-03-12T18:35:26Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 0,
            y: 0
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477903,
                fullName: 'Garnet Hathaway',
                link: '/api/v1/people/8477903'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET479',
            eventTypeId: 'SHOT',
            description: 'Garnet Hathaway Wrist Shot saved by Ville Husso',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 202,
            eventId: 479,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '00:18',
            periodTimeRemaining: '19:42',
            dateTime: '2023-03-12T18:35:44Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 23,
            y: -33
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET795',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 203,
            eventId: 795,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '00:20',
            periodTimeRemaining: '19:40',
            dateTime: '2023-03-12T18:35:46Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8478512,
                fullName: 'Austin Czarnik',
                link: '/api/v1/people/8478512'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8475745,
                fullName: 'Charlie Coyle',
                link: '/api/v1/people/8475745'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET368',
            eventTypeId: 'FACEOFF',
            description: 'Austin Czarnik faceoff won against Charlie Coyle'
          },
          about: {
            eventIdx: 204,
            eventId: 368,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '00:20',
            periodTimeRemaining: '19:40',
            dateTime: '2023-03-12T18:36:34Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 69,
            y: -22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475745,
                fullName: 'Charlie Coyle',
                link: '/api/v1/people/8475745'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET480',
            eventTypeId: 'SHOT',
            description: 'Charlie Coyle Wrist Shot saved by Ville Husso',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 205,
            eventId: 480,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '00:39',
            periodTimeRemaining: '19:21',
            dateTime: '2023-03-12T18:36:53Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 85,
            y: -17
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET796',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 206,
            eventId: 796,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '00:41',
            periodTimeRemaining: '19:19',
            dateTime: '2023-03-12T18:36:55Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET369',
            eventTypeId: 'FACEOFF',
            description: 'Patrice Bergeron faceoff won against Andrew Copp'
          },
          about: {
            eventIdx: 207,
            eventId: 369,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '00:41',
            periodTimeRemaining: '19:19',
            dateTime: '2023-03-12T18:37:32Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 69,
            y: -22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477956,
                fullName: 'David Pastrnak',
                link: '/api/v1/people/8477956'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET481',
            eventTypeId: 'MISSED_SHOT',
            description: 'David Pastrnak Wide of Net Ville Husso'
          },
          about: {
            eventIdx: 208,
            eventId: 481,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '01:49',
            periodTimeRemaining: '18:11',
            dateTime: '2023-03-12T18:38:40Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 89,
            y: 14
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8471276,
                fullName: 'David Krejci',
                link: '/api/v1/people/8471276'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET482',
            eventTypeId: 'MISSED_SHOT',
            description: 'David Krejci Wide of Net Ville Husso'
          },
          about: {
            eventIdx: 209,
            eventId: 482,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '02:01',
            periodTimeRemaining: '17:59',
            dateTime: '2023-03-12T18:38:52Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 79,
            y: -1
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477903,
                fullName: 'Garnet Hathaway',
                link: '/api/v1/people/8477903'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET483',
            eventTypeId: 'SHOT',
            description: 'Garnet Hathaway Wrist Shot saved by Ville Husso',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 210,
            eventId: 483,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '02:32',
            periodTimeRemaining: '17:28',
            dateTime: '2023-03-12T18:39:23Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 83,
            y: -2
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477903,
                fullName: 'Garnet Hathaway',
                link: '/api/v1/people/8477903'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET484',
            eventTypeId: 'MISSED_SHOT',
            description: 'Garnet Hathaway Wide of Net Ville Husso'
          },
          about: {
            eventIdx: 211,
            eventId: 484,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '02:38',
            periodTimeRemaining: '17:22',
            dateTime: '2023-03-12T18:39:29Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: 80,
            y: 2
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477454,
                fullName: 'Adam Erne',
                link: '/api/v1/people/8477454'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET485',
            eventTypeId: 'SHOT',
            description: 'Adam Erne Slap Shot saved by Jeremy Swayman',
            secondaryType: 'Slap Shot'
          },
          about: {
            eventIdx: 212,
            eventId: 485,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '02:44',
            periodTimeRemaining: '17:16',
            dateTime: '2023-03-12T18:39:35Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: -63,
            y: -3
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477365,
                fullName: 'Connor Clifton',
                link: '/api/v1/people/8477365'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8475163,
                fullName: 'Alex Chiasson',
                link: '/api/v1/people/8475163'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET487',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Alex Chiasson shot blocked shot by Connor Clifton'
          },
          about: {
            eventIdx: 213,
            eventId: 487,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '02:51',
            periodTimeRemaining: '17:09',
            dateTime: '2023-03-12T18:39:42Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: -73,
            y: -2
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477462,
                fullName: 'Robert Hagg',
                link: '/api/v1/people/8477462'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET486',
            eventTypeId: 'SHOT',
            description: 'Robert Hagg Slap Shot saved by Jeremy Swayman',
            secondaryType: 'Slap Shot'
          },
          about: {
            eventIdx: 214,
            eventId: 486,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '02:54',
            periodTimeRemaining: '17:06',
            dateTime: '2023-03-12T18:39:45Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: -82,
            y: 14
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477462,
                fullName: 'Robert Hagg',
                link: '/api/v1/people/8477462'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET488',
            eventTypeId: 'MISSED_SHOT',
            description: 'Robert Hagg Wide of Net Jeremy Swayman'
          },
          about: {
            eventIdx: 215,
            eventId: 488,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '03:07',
            periodTimeRemaining: '16:53',
            dateTime: '2023-03-12T18:39:58Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: -38,
            y: 23
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477365,
                fullName: 'Connor Clifton',
                link: '/api/v1/people/8477365'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8481013,
                fullName: 'Jonatan Berggren',
                link: '/api/v1/people/8481013'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET797',
            eventTypeId: 'HIT',
            description: 'Connor Clifton hit Jonatan Berggren'
          },
          about: {
            eventIdx: 216,
            eventId: 797,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '03:22',
            periodTimeRemaining: '16:38',
            dateTime: '2023-03-12T18:40:13Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: -97,
            y: -10
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8481542,
                fullName: 'Moritz Seider',
                link: '/api/v1/people/8481542'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET489',
            eventTypeId: 'SHOT',
            description: 'Moritz Seider Wrist Shot saved by Jeremy Swayman',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 217,
            eventId: 489,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '03:29',
            periodTimeRemaining: '16:31',
            dateTime: '2023-03-12T18:40:20Z',
            goals: {
              away: 1,
              home: 4
            }
          },
          coordinates: {
            x: -36,
            y: 23
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478498,
                fullName: 'Jake DeBrusk',
                link: '/api/v1/people/8478498'
              },
              playerType: 'Scorer',
              seasonTotal: 20
            },
            {
              player: {
                id: 8477365,
                fullName: 'Connor Clifton',
                link: '/api/v1/people/8477365'
              },
              playerType: 'Assist',
              seasonTotal: 12
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Goal',
            eventCode: 'DET490',
            eventTypeId: 'GOAL',
            description:
              'Jake DeBrusk (20) Wrist Shot, assists: Connor Clifton (12)',
            secondaryType: 'Wrist Shot',
            strength: {
              code: 'EVEN',
              name: 'Even'
            },
            gameWinningGoal: false,
            emptyNet: false
          },
          about: {
            eventIdx: 218,
            eventId: 490,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '03:37',
            periodTimeRemaining: '16:23',
            dateTime: '2023-03-12T18:40:29Z',
            goals: {
              away: 2,
              home: 4
            }
          },
          coordinates: {
            x: 69,
            y: 4
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475745,
                fullName: 'Charlie Coyle',
                link: '/api/v1/people/8475745'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET370',
            eventTypeId: 'FACEOFF',
            description: 'Charlie Coyle faceoff won against Andrew Copp'
          },
          about: {
            eventIdx: 219,
            eventId: 370,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '03:37',
            periodTimeRemaining: '16:23',
            dateTime: '2023-03-12T18:41:14Z',
            goals: {
              away: 2,
              home: 4
            }
          },
          coordinates: {
            x: 0,
            y: 0
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET798',
            eventTypeId: 'STOP',
            description: 'Offside'
          },
          about: {
            eventIdx: 220,
            eventId: 798,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '04:29',
            periodTimeRemaining: '15:31',
            dateTime: '2023-03-12T18:42:06Z',
            goals: {
              away: 2,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET371',
            eventTypeId: 'FACEOFF',
            description: 'Patrice Bergeron faceoff won against Dylan Larkin'
          },
          about: {
            eventIdx: 221,
            eventId: 371,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '04:29',
            periodTimeRemaining: '15:31',
            dateTime: '2023-03-12T18:42:31Z',
            goals: {
              away: 2,
              home: 4
            }
          },
          coordinates: {
            x: 20,
            y: -22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET491',
            eventTypeId: 'SHOT',
            description: 'Dylan Larkin Wrist Shot saved by Jeremy Swayman',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 222,
            eventId: 491,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '04:49',
            periodTimeRemaining: '15:11',
            dateTime: '2023-03-12T18:42:51Z',
            goals: {
              away: 2,
              home: 4
            }
          },
          coordinates: {
            x: 0,
            y: -18
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477479,
                fullName: 'Tyler Bertuzzi',
                link: '/api/v1/people/8477479'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET372',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Tyler Bertuzzi'
          },
          about: {
            eventIdx: 223,
            eventId: 372,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '04:56',
            periodTimeRemaining: '15:04',
            dateTime: '2023-03-12T18:42:58Z',
            goals: {
              away: 2,
              home: 4
            }
          },
          coordinates: {
            x: -50,
            y: 37
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475200,
                fullName: 'Dmitry Orlov',
                link: '/api/v1/people/8475200'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8482078,
                fullName: 'Lucas Raymond',
                link: '/api/v1/people/8482078'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET799',
            eventTypeId: 'HIT',
            description: 'Dmitry Orlov hit Lucas Raymond'
          },
          about: {
            eventIdx: 224,
            eventId: 799,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '05:01',
            periodTimeRemaining: '14:59',
            dateTime: '2023-03-12T18:43:03Z',
            goals: {
              away: 2,
              home: 4
            }
          },
          coordinates: {
            x: -94,
            y: -27
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478013,
                fullName: 'Jake Walman',
                link: '/api/v1/people/8478013'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET492',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Patrice Bergeron shot blocked shot by Jake Walman'
          },
          about: {
            eventIdx: 225,
            eventId: 492,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '05:16',
            periodTimeRemaining: '14:44',
            dateTime: '2023-03-12T18:43:18Z',
            goals: {
              away: 2,
              home: 4
            }
          },
          coordinates: {
            x: 81,
            y: 0
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET493',
            eventTypeId: 'MISSED_SHOT',
            description: 'Dylan Larkin Goalpost Jeremy Swayman'
          },
          about: {
            eventIdx: 226,
            eventId: 493,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '05:22',
            periodTimeRemaining: '14:38',
            dateTime: '2023-03-12T18:43:24Z',
            goals: {
              away: 2,
              home: 4
            }
          },
          coordinates: {
            x: -79,
            y: 1
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477365,
                fullName: 'Connor Clifton',
                link: '/api/v1/people/8477365'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8477462,
                fullName: 'Robert Hagg',
                link: '/api/v1/people/8477462'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET494',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Robert Hagg shot blocked shot by Connor Clifton'
          },
          about: {
            eventIdx: 227,
            eventId: 494,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '05:38',
            periodTimeRemaining: '14:22',
            dateTime: '2023-03-12T18:43:40Z',
            goals: {
              away: 2,
              home: 4
            }
          },
          coordinates: {
            x: -79,
            y: 6
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8480813,
                fullName: 'Joe Veleno',
                link: '/api/v1/people/8480813'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8477365,
                fullName: 'Connor Clifton',
                link: '/api/v1/people/8477365'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET800',
            eventTypeId: 'HIT',
            description: 'Joe Veleno hit Connor Clifton'
          },
          about: {
            eventIdx: 228,
            eventId: 800,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '05:46',
            periodTimeRemaining: '14:14',
            dateTime: '2023-03-12T18:43:48Z',
            goals: {
              away: 2,
              home: 4
            }
          },
          coordinates: {
            x: -80,
            y: -38
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477956,
                fullName: 'David Pastrnak',
                link: '/api/v1/people/8477956'
              },
              playerType: 'Scorer',
              seasonTotal: 46
            },
            {
              player: {
                id: 8478401,
                fullName: 'Pavel Zacha',
                link: '/api/v1/people/8478401'
              },
              playerType: 'Assist',
              seasonTotal: 29
            },
            {
              player: {
                id: 8476891,
                fullName: 'Matt Grzelcyk',
                link: '/api/v1/people/8476891'
              },
              playerType: 'Assist',
              seasonTotal: 19
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Goal',
            eventCode: 'DET495',
            eventTypeId: 'GOAL',
            description:
              'David Pastrnak (46) Wrist Shot, assists: Pavel Zacha (29), Matt Grzelcyk (19)',
            secondaryType: 'Wrist Shot',
            strength: {
              code: 'EVEN',
              name: 'Even'
            },
            gameWinningGoal: false,
            emptyNet: false
          },
          about: {
            eventIdx: 229,
            eventId: 495,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '06:24',
            periodTimeRemaining: '13:36',
            dateTime: '2023-03-12T18:44:27Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 47,
            y: 2
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477931,
                fullName: 'Tomas Nosek',
                link: '/api/v1/people/8477931'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8478512,
                fullName: 'Austin Czarnik',
                link: '/api/v1/people/8478512'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET373',
            eventTypeId: 'FACEOFF',
            description: 'Tomas Nosek faceoff won against Austin Czarnik'
          },
          about: {
            eventIdx: 230,
            eventId: 373,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '06:24',
            periodTimeRemaining: '13:36',
            dateTime: '2023-03-12T18:45:17Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 0,
            y: 0
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478443,
                fullName: 'Brandon Carlo',
                link: '/api/v1/people/8478443'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8474102,
                fullName: 'David Perron',
                link: '/api/v1/people/8474102'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET497',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'David Perron shot blocked shot by Brandon Carlo'
          },
          about: {
            eventIdx: 231,
            eventId: 497,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '07:22',
            periodTimeRemaining: '12:38',
            dateTime: '2023-03-12T18:46:15Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: -76,
            y: 5
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477330,
                fullName: 'Dominik Kubalik',
                link: '/api/v1/people/8477330'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8479365,
                fullName: 'Trent Frederic',
                link: '/api/v1/people/8479365'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET498',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Trent Frederic shot blocked shot by Dominik Kubalik'
          },
          about: {
            eventIdx: 232,
            eventId: 498,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '07:40',
            periodTimeRemaining: '12:20',
            dateTime: '2023-03-12T18:46:33Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 63,
            y: 5
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET374',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Andrew Copp'
          },
          about: {
            eventIdx: 233,
            eventId: 374,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '07:56',
            periodTimeRemaining: '12:04',
            dateTime: '2023-03-12T18:46:49Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: -62,
            y: 19
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8479365,
                fullName: 'Trent Frederic',
                link: '/api/v1/people/8479365'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET499',
            eventTypeId: 'SHOT',
            description: 'Trent Frederic Wrist Shot saved by Ville Husso',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 234,
            eventId: 499,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '08:03',
            periodTimeRemaining: '11:57',
            dateTime: '2023-03-12T18:46:56Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 52,
            y: 21
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8476874,
                fullName: 'Olli Maatta',
                link: '/api/v1/people/8476874'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET500',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Charlie McAvoy shot blocked shot by Olli Maatta'
          },
          about: {
            eventIdx: 235,
            eventId: 500,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '08:08',
            periodTimeRemaining: '11:52',
            dateTime: '2023-03-12T18:47:01Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 80,
            y: 1
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475279,
                fullName: 'Ben Chiarot',
                link: '/api/v1/people/8475279'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8477479,
                fullName: 'Tyler Bertuzzi',
                link: '/api/v1/people/8477479'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET701',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Tyler Bertuzzi shot blocked shot by Ben Chiarot'
          },
          about: {
            eventIdx: 236,
            eventId: 701,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '08:23',
            periodTimeRemaining: '11:37',
            dateTime: '2023-03-12T18:47:16Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 64,
            y: -2
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET801',
            eventTypeId: 'STOP',
            description: 'Puck in Netting'
          },
          about: {
            eventIdx: 237,
            eventId: 801,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '08:24',
            periodTimeRemaining: '11:36',
            dateTime: '2023-03-12T18:47:17Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET375',
            eventTypeId: 'FACEOFF',
            description: 'Dylan Larkin faceoff won against Patrice Bergeron'
          },
          about: {
            eventIdx: 238,
            eventId: 375,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '08:24',
            periodTimeRemaining: '11:36',
            dateTime: '2023-03-12T18:49:43Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 69,
            y: -22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET702',
            eventTypeId: 'SHOT',
            description: 'Patrice Bergeron Wrist Shot saved by Ville Husso',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 239,
            eventId: 702,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '08:30',
            periodTimeRemaining: '11:30',
            dateTime: '2023-03-12T18:49:49Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 64,
            y: -2
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET802',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 240,
            eventId: 802,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '09:07',
            periodTimeRemaining: '10:53',
            dateTime: '2023-03-12T18:50:25Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8471276,
                fullName: 'David Krejci',
                link: '/api/v1/people/8471276'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET376',
            eventTypeId: 'FACEOFF',
            description: 'Andrew Copp faceoff won against David Krejci'
          },
          about: {
            eventIdx: 241,
            eventId: 376,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '09:07',
            periodTimeRemaining: '10:53',
            dateTime: '2023-03-12T18:51:14Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: -69,
            y: -22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8476874,
                fullName: 'Olli Maatta',
                link: '/api/v1/people/8476874'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET703',
            eventTypeId: 'SHOT',
            description: 'Olli Maatta Wrist Shot saved by Jeremy Swayman',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 242,
            eventId: 703,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '09:12',
            periodTimeRemaining: '10:48',
            dateTime: '2023-03-12T18:51:20Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: -38,
            y: -27
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET803',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 243,
            eventId: 803,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '09:12',
            periodTimeRemaining: '10:48',
            dateTime: '2023-03-12T18:51:20Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8471276,
                fullName: 'David Krejci',
                link: '/api/v1/people/8471276'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET377',
            eventTypeId: 'FACEOFF',
            description: 'Andrew Copp faceoff won against David Krejci'
          },
          about: {
            eventIdx: 244,
            eventId: 377,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '09:12',
            periodTimeRemaining: '10:48',
            dateTime: '2023-03-12T18:51:45Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: -69,
            y: -22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET804',
            eventTypeId: 'STOP',
            description: 'Icing'
          },
          about: {
            eventIdx: 245,
            eventId: 804,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '09:32',
            periodTimeRemaining: '10:28',
            dateTime: '2023-03-12T18:52:05Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8473419,
                fullName: 'Brad Marchand',
                link: '/api/v1/people/8473419'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET378',
            eventTypeId: 'FACEOFF',
            description: 'Andrew Copp faceoff won against Brad Marchand'
          },
          about: {
            eventIdx: 246,
            eventId: 378,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '09:32',
            periodTimeRemaining: '10:28',
            dateTime: '2023-03-12T18:52:53Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 69,
            y: -22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8480821,
                fullName: 'Filip Zadina',
                link: '/api/v1/people/8480821'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Takeaway',
            eventCode: 'DET379',
            eventTypeId: 'TAKEAWAY',
            description: 'Takeaway by Filip Zadina'
          },
          about: {
            eventIdx: 247,
            eventId: 379,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '09:59',
            periodTimeRemaining: '10:01',
            dateTime: '2023-03-12T18:53:20Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 44,
            y: -17
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'Hitter'
            },
            {
              player: {
                id: 8480813,
                fullName: 'Joe Veleno',
                link: '/api/v1/people/8480813'
              },
              playerType: 'Hittee'
            }
          ],
          result: {
            event: 'Hit',
            eventCode: 'DET805',
            eventTypeId: 'HIT',
            description: 'Charlie McAvoy hit Joe Veleno'
          },
          about: {
            eventIdx: 248,
            eventId: 805,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '10:19',
            periodTimeRemaining: '09:41',
            dateTime: '2023-03-12T18:53:40Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: -23,
            y: -39
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478443,
                fullName: 'Brandon Carlo',
                link: '/api/v1/people/8478443'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Takeaway',
            eventCode: 'DET380',
            eventTypeId: 'TAKEAWAY',
            description: 'Takeaway by Brandon Carlo'
          },
          about: {
            eventIdx: 249,
            eventId: 380,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '10:37',
            periodTimeRemaining: '09:23',
            dateTime: '2023-03-12T18:53:58Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 7,
            y: -33
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475762,
                fullName: 'Derek Forbort',
                link: '/api/v1/people/8475762'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET704',
            eventTypeId: 'MISSED_SHOT',
            description: 'Derek Forbort Wide of Net Ville Husso'
          },
          about: {
            eventIdx: 250,
            eventId: 704,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '11:07',
            periodTimeRemaining: '08:53',
            dateTime: '2023-03-12T18:54:28Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 53,
            y: 40
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8476874,
                fullName: 'Olli Maatta',
                link: '/api/v1/people/8476874'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET381',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Olli Maatta'
          },
          about: {
            eventIdx: 251,
            eventId: 381,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '11:39',
            periodTimeRemaining: '08:21',
            dateTime: '2023-03-12T18:55:00Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 90,
            y: -10
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET806',
            eventTypeId: 'STOP',
            description: 'Icing'
          },
          about: {
            eventIdx: 252,
            eventId: 806,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '11:45',
            periodTimeRemaining: '08:15',
            dateTime: '2023-03-12T18:55:06Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8478512,
                fullName: 'Austin Czarnik',
                link: '/api/v1/people/8478512'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET382',
            eventTypeId: 'FACEOFF',
            description: 'Patrice Bergeron faceoff won against Austin Czarnik'
          },
          about: {
            eventIdx: 253,
            eventId: 382,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '11:45',
            periodTimeRemaining: '08:15',
            dateTime: '2023-03-12T18:55:34Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 69,
            y: -22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8481542,
                fullName: 'Moritz Seider',
                link: '/api/v1/people/8481542'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET383',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Moritz Seider'
          },
          about: {
            eventIdx: 254,
            eventId: 383,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '12:14',
            periodTimeRemaining: '07:46',
            dateTime: '2023-03-12T18:56:03Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 98,
            y: -15
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477479,
                fullName: 'Tyler Bertuzzi',
                link: '/api/v1/people/8477479'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET705',
            eventTypeId: 'MISSED_SHOT',
            description: 'Tyler Bertuzzi Wide of Net Ville Husso'
          },
          about: {
            eventIdx: 255,
            eventId: 705,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '12:16',
            periodTimeRemaining: '07:44',
            dateTime: '2023-03-12T18:56:05Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 76,
            y: -40
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477479,
                fullName: 'Tyler Bertuzzi',
                link: '/api/v1/people/8477479'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET384',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Tyler Bertuzzi'
          },
          about: {
            eventIdx: 256,
            eventId: 384,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '12:30',
            periodTimeRemaining: '07:30',
            dateTime: '2023-03-12T18:56:19Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 63,
            y: -3
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477479,
                fullName: 'Tyler Bertuzzi',
                link: '/api/v1/people/8477479'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET706',
            eventTypeId: 'SHOT',
            description: 'Tyler Bertuzzi Tip-In saved by Ville Husso',
            secondaryType: 'Tip-In'
          },
          about: {
            eventIdx: 257,
            eventId: 706,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '12:33',
            periodTimeRemaining: '07:27',
            dateTime: '2023-03-12T18:56:22Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 82,
            y: 0
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8481542,
                fullName: 'Moritz Seider',
                link: '/api/v1/people/8481542'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET385',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Moritz Seider'
          },
          about: {
            eventIdx: 258,
            eventId: 385,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '12:37',
            periodTimeRemaining: '07:23',
            dateTime: '2023-03-12T18:56:26Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 67,
            y: -10
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8482078,
                fullName: 'Lucas Raymond',
                link: '/api/v1/people/8482078'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET707',
            eventTypeId: 'MISSED_SHOT',
            description: 'Lucas Raymond Wide of Net Jeremy Swayman'
          },
          about: {
            eventIdx: 259,
            eventId: 707,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '12:45',
            periodTimeRemaining: '07:15',
            dateTime: '2023-03-12T18:56:34Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: -77,
            y: -14
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Takeaway',
            eventCode: 'DET386',
            eventTypeId: 'TAKEAWAY',
            description: 'Takeaway by Andrew Copp'
          },
          about: {
            eventIdx: 260,
            eventId: 386,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '13:01',
            periodTimeRemaining: '06:59',
            dateTime: '2023-03-12T18:56:50Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: -77,
            y: -36
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477330,
                fullName: 'Dominik Kubalik',
                link: '/api/v1/people/8477330'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET708',
            eventTypeId: 'SHOT',
            description: 'Dominik Kubalik Slap Shot saved by Jeremy Swayman',
            secondaryType: 'Slap Shot'
          },
          about: {
            eventIdx: 261,
            eventId: 708,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '13:04',
            periodTimeRemaining: '06:56',
            dateTime: '2023-03-12T18:56:53Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: -64,
            y: -11
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET807',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 262,
            eventId: 807,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '13:05',
            periodTimeRemaining: '06:55',
            dateTime: '2023-03-12T18:56:53Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8475745,
                fullName: 'Charlie Coyle',
                link: '/api/v1/people/8475745'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET387',
            eventTypeId: 'FACEOFF',
            description: 'Andrew Copp faceoff won against Charlie Coyle'
          },
          about: {
            eventIdx: 263,
            eventId: 387,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '13:05',
            periodTimeRemaining: '06:55',
            dateTime: '2023-03-12T18:59:36Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: -69,
            y: -22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8481542,
                fullName: 'Moritz Seider',
                link: '/api/v1/people/8481542'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8475200,
                fullName: 'Dmitry Orlov',
                link: '/api/v1/people/8475200'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET709',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Dmitry Orlov shot blocked shot by Moritz Seider'
          },
          about: {
            eventIdx: 264,
            eventId: 709,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '13:45',
            periodTimeRemaining: '06:15',
            dateTime: '2023-03-12T19:00:16Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 76,
            y: 9
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8481542,
                fullName: 'Moritz Seider',
                link: '/api/v1/people/8481542'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8478401,
                fullName: 'Pavel Zacha',
                link: '/api/v1/people/8478401'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET710',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Pavel Zacha shot blocked shot by Moritz Seider'
          },
          about: {
            eventIdx: 265,
            eventId: 710,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '14:35',
            periodTimeRemaining: '05:25',
            dateTime: '2023-03-12T19:01:06Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 54,
            y: -1
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8480813,
                fullName: 'Joe Veleno',
                link: '/api/v1/people/8480813'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8477956,
                fullName: 'David Pastrnak',
                link: '/api/v1/people/8477956'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET711',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'David Pastrnak shot blocked shot by Joe Veleno'
          },
          about: {
            eventIdx: 266,
            eventId: 711,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '14:45',
            periodTimeRemaining: '05:15',
            dateTime: '2023-03-12T19:01:16Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 81,
            y: 2
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET388',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Charlie McAvoy'
          },
          about: {
            eventIdx: 267,
            eventId: 388,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '15:09',
            periodTimeRemaining: '04:51',
            dateTime: '2023-03-12T19:01:40Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 31,
            y: 10
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8480821,
                fullName: 'Filip Zadina',
                link: '/api/v1/people/8480821'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET712',
            eventTypeId: 'MISSED_SHOT',
            description: 'Filip Zadina Over Net Jeremy Swayman'
          },
          about: {
            eventIdx: 268,
            eventId: 712,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '15:13',
            periodTimeRemaining: '04:47',
            dateTime: '2023-03-12T19:01:44Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: -80,
            y: 4
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8476874,
                fullName: 'Olli Maatta',
                link: '/api/v1/people/8476874'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET713',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'Patrice Bergeron shot blocked shot by Olli Maatta'
          },
          about: {
            eventIdx: 269,
            eventId: 713,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '15:33',
            periodTimeRemaining: '04:27',
            dateTime: '2023-03-12T19:02:04Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 84,
            y: -5
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8473419,
                fullName: 'Brad Marchand',
                link: '/api/v1/people/8473419'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET714',
            eventTypeId: 'SHOT',
            description: 'Brad Marchand Wrist Shot saved by Ville Husso',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 270,
            eventId: 714,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '15:39',
            periodTimeRemaining: '04:21',
            dateTime: '2023-03-12T19:02:11Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 46,
            y: 5
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET808',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 271,
            eventId: 808,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '15:39',
            periodTimeRemaining: '04:21',
            dateTime: '2023-03-12T19:02:11Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET391',
            eventTypeId: 'FACEOFF',
            description: 'Patrice Bergeron faceoff won against Dylan Larkin'
          },
          about: {
            eventIdx: 272,
            eventId: 391,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '15:39',
            periodTimeRemaining: '04:21',
            dateTime: '2023-03-12T19:04:42Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 69,
            y: 22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8479365,
                fullName: 'Trent Frederic',
                link: '/api/v1/people/8479365'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Unknown'
            }
          ],
          result: {
            event: 'Missed Shot',
            eventCode: 'DET715',
            eventTypeId: 'MISSED_SHOT',
            description: 'Trent Frederic Wide of Net Ville Husso'
          },
          about: {
            eventIdx: 273,
            eventId: 715,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '16:21',
            periodTimeRemaining: '03:39',
            dateTime: '2023-03-12T19:05:24Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 86,
            y: 8
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8475745,
                fullName: 'Charlie Coyle',
                link: '/api/v1/people/8475745'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET716',
            eventTypeId: 'SHOT',
            description: 'Charlie Coyle Backhand saved by Ville Husso',
            secondaryType: 'Backhand'
          },
          about: {
            eventIdx: 274,
            eventId: 716,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '16:22',
            periodTimeRemaining: '03:38',
            dateTime: '2023-03-12T19:05:25Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 83,
            y: 4
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET809',
            eventTypeId: 'STOP',
            description: 'Goalie Stopped'
          },
          about: {
            eventIdx: 275,
            eventId: 809,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '16:23',
            periodTimeRemaining: '03:37',
            dateTime: '2023-03-12T19:05:26Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8471276,
                fullName: 'David Krejci',
                link: '/api/v1/people/8471276'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET394',
            eventTypeId: 'FACEOFF',
            description: 'David Krejci faceoff won against Andrew Copp'
          },
          about: {
            eventIdx: 276,
            eventId: 394,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '16:23',
            periodTimeRemaining: '03:37',
            dateTime: '2023-03-12T19:06:18Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 69,
            y: 22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8479365,
                fullName: 'Trent Frederic',
                link: '/api/v1/people/8479365'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET717',
            eventTypeId: 'SHOT',
            description: 'Trent Frederic Wrist Shot saved by Ville Husso',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 277,
            eventId: 717,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '17:11',
            periodTimeRemaining: '02:49',
            dateTime: '2023-03-12T19:07:06Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 34,
            y: 30
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET810',
            eventTypeId: 'STOP',
            description: 'Icing'
          },
          about: {
            eventIdx: 278,
            eventId: 810,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '17:37',
            periodTimeRemaining: '02:23',
            dateTime: '2023-03-12T19:07:32Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET396',
            eventTypeId: 'FACEOFF',
            description: 'Patrice Bergeron faceoff won against Dylan Larkin'
          },
          about: {
            eventIdx: 279,
            eventId: 396,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '17:37',
            periodTimeRemaining: '02:23',
            dateTime: '2023-03-12T19:08:19Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 69,
            y: -22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8481542,
                fullName: 'Moritz Seider',
                link: '/api/v1/people/8481542'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8477956,
                fullName: 'David Pastrnak',
                link: '/api/v1/people/8477956'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET721',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'David Pastrnak shot blocked shot by Moritz Seider'
          },
          about: {
            eventIdx: 280,
            eventId: 721,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '18:02',
            periodTimeRemaining: '01:58',
            dateTime: '2023-03-12T19:08:44Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 62,
            y: 1
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET811',
            eventTypeId: 'STOP',
            description: 'Offside'
          },
          about: {
            eventIdx: 281,
            eventId: 811,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '18:06',
            periodTimeRemaining: '01:54',
            dateTime: '2023-03-12T19:08:48Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8475745,
                fullName: 'Charlie Coyle',
                link: '/api/v1/people/8475745'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET397',
            eventTypeId: 'FACEOFF',
            description: 'Charlie Coyle faceoff won against Andrew Copp'
          },
          about: {
            eventIdx: 282,
            eventId: 397,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '18:06',
            periodTimeRemaining: '01:54',
            dateTime: '2023-03-12T19:09:55Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: -69,
            y: -22
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET398',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Andrew Copp'
          },
          about: {
            eventIdx: 283,
            eventId: 398,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '18:23',
            periodTimeRemaining: '01:37',
            dateTime: '2023-03-12T19:10:12Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 77,
            y: 37
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET812',
            eventTypeId: 'STOP',
            description: 'Icing'
          },
          about: {
            eventIdx: 284,
            eventId: 812,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '18:33',
            periodTimeRemaining: '01:27',
            dateTime: '2023-03-12T19:10:22Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET399',
            eventTypeId: 'FACEOFF',
            description: 'Andrew Copp faceoff won against Patrice Bergeron'
          },
          about: {
            eventIdx: 285,
            eventId: 399,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '18:33',
            periodTimeRemaining: '01:27',
            dateTime: '2023-03-12T19:11:11Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 69,
            y: -22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET813',
            eventTypeId: 'STOP',
            description: 'Icing'
          },
          about: {
            eventIdx: 286,
            eventId: 813,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '18:41',
            periodTimeRemaining: '01:19',
            dateTime: '2023-03-12T19:11:18Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET400',
            eventTypeId: 'FACEOFF',
            description: 'Andrew Copp faceoff won against Patrice Bergeron'
          },
          about: {
            eventIdx: 287,
            eventId: 400,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '18:41',
            periodTimeRemaining: '01:19',
            dateTime: '2023-03-12T19:11:44Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 69,
            y: -22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8476874,
                fullName: 'Olli Maatta',
                link: '/api/v1/people/8476874'
              },
              playerType: 'Blocker'
            },
            {
              player: {
                id: 8471276,
                fullName: 'David Krejci',
                link: '/api/v1/people/8471276'
              },
              playerType: 'Shooter'
            }
          ],
          result: {
            event: 'Blocked Shot',
            eventCode: 'DET723',
            eventTypeId: 'BLOCKED_SHOT',
            description: 'David Krejci shot blocked shot by Olli Maatta'
          },
          about: {
            eventIdx: 288,
            eventId: 723,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '18:47',
            periodTimeRemaining: '01:13',
            dateTime: '2023-03-12T19:11:50Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 70,
            y: 17
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Stoppage',
            eventCode: 'DET814',
            eventTypeId: 'STOP',
            description: 'Puck in Netting'
          },
          about: {
            eventIdx: 289,
            eventId: 814,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '18:48',
            periodTimeRemaining: '01:12',
            dateTime: '2023-03-12T19:11:52Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {}
        },
        {
          players: [
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Takeaway',
            eventCode: 'DET1051',
            eventTypeId: 'TAKEAWAY',
            description: 'Takeaway by Charlie McAvoy'
          },
          about: {
            eventIdx: 290,
            eventId: 1051,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '18:48',
            periodTimeRemaining: '01:12',
            dateTime: '2023-03-12T19:11:52Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 28,
            y: -37
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET1052',
            eventTypeId: 'FACEOFF',
            description: 'Andrew Copp faceoff won against Patrice Bergeron'
          },
          about: {
            eventIdx: 291,
            eventId: 1052,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '18:48',
            periodTimeRemaining: '01:12',
            dateTime: '2023-03-12T19:12:30Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 69,
            y: 22
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'PlayerID'
            }
          ],
          result: {
            event: 'Giveaway',
            eventCode: 'DET1053',
            eventTypeId: 'GIVEAWAY',
            description: 'Giveaway by Dylan Larkin'
          },
          about: {
            eventIdx: 292,
            eventId: 1053,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '19:01',
            periodTimeRemaining: '00:59',
            dateTime: '2023-03-12T19:12:44Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 50,
            y: -35
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477956,
                fullName: 'David Pastrnak',
                link: '/api/v1/people/8477956'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET724',
            eventTypeId: 'SHOT',
            description: 'David Pastrnak Slap Shot saved by Ville Husso',
            secondaryType: 'Slap Shot'
          },
          about: {
            eventIdx: 293,
            eventId: 724,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '19:03',
            periodTimeRemaining: '00:57',
            dateTime: '2023-03-12T19:12:45Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 70,
            y: 21
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325'
              },
              playerType: 'Shooter'
            },
            {
              player: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024'
              },
              playerType: 'Goalie'
            }
          ],
          result: {
            event: 'Shot',
            eventCode: 'DET725',
            eventTypeId: 'SHOT',
            description: 'Charlie McAvoy Wrist Shot saved by Ville Husso',
            secondaryType: 'Wrist Shot'
          },
          about: {
            eventIdx: 294,
            eventId: 725,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '19:12',
            periodTimeRemaining: '00:48',
            dateTime: '2023-03-12T19:12:54Z',
            goals: {
              away: 3,
              home: 4
            }
          },
          coordinates: {
            x: 62,
            y: -2
          },
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            triCode: 'BOS'
          }
        },
        {
          players: [
            {
              player: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429'
              },
              playerType: 'Scorer',
              seasonTotal: 8
            },
            {
              player: {
                id: 8480459,
                fullName: 'Pius Suter',
                link: '/api/v1/people/8480459'
              },
              playerType: 'Assist',
              seasonTotal: 8
            },
            {
              player: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946'
              },
              playerType: 'Assist',
              seasonTotal: 39
            }
          ],
          result: {
            event: 'Goal',
            eventCode: 'DET726',
            eventTypeId: 'GOAL',
            description:
              'Andrew Copp (8) Wrist Shot, assists: Pius Suter (8), Dylan Larkin (39)',
            secondaryType: 'Wrist Shot',
            strength: {
              code: 'EVEN',
              name: 'Even'
            },
            gameWinningGoal: false,
            emptyNet: true
          },
          about: {
            eventIdx: 295,
            eventId: 726,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '19:36',
            periodTimeRemaining: '00:24',
            dateTime: '2023-03-12T19:13:19Z',
            goals: {
              away: 3,
              home: 5
            }
          },
          coordinates: {
            x: 7,
            y: -20
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          players: [
            {
              player: {
                id: 8478512,
                fullName: 'Austin Czarnik',
                link: '/api/v1/people/8478512'
              },
              playerType: 'Winner'
            },
            {
              player: {
                id: 8477931,
                fullName: 'Tomas Nosek',
                link: '/api/v1/people/8477931'
              },
              playerType: 'Loser'
            }
          ],
          result: {
            event: 'Faceoff',
            eventCode: 'DET1054',
            eventTypeId: 'FACEOFF',
            description: 'Austin Czarnik faceoff won against Tomas Nosek'
          },
          about: {
            eventIdx: 296,
            eventId: 1054,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '19:36',
            periodTimeRemaining: '00:24',
            dateTime: '2023-03-12T19:14:07Z',
            goals: {
              away: 3,
              home: 5
            }
          },
          coordinates: {
            x: 0,
            y: 0
          },
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            triCode: 'DET'
          }
        },
        {
          result: {
            event: 'Period End',
            eventCode: 'DET815',
            eventTypeId: 'PERIOD_END',
            description: 'End of 3rd Period'
          },
          about: {
            eventIdx: 297,
            eventId: 815,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '20:00',
            periodTimeRemaining: '00:00',
            dateTime: '2023-03-12T19:14:30Z',
            goals: {
              away: 3,
              home: 5
            }
          },
          coordinates: {}
        },
        {
          result: {
            event: 'Period Official',
            eventCode: 'DET818',
            eventTypeId: 'PERIOD_OFFICIAL',
            description: 'Period Official'
          },
          about: {
            eventIdx: 298,
            eventId: 818,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '20:00',
            periodTimeRemaining: '00:00',
            dateTime: '2023-03-12T19:14:36Z',
            goals: {
              away: 3,
              home: 5
            }
          },
          coordinates: {}
        },
        {
          result: {
            event: 'Game End',
            eventCode: 'DET819',
            eventTypeId: 'GAME_END',
            description: 'Game End'
          },
          about: {
            eventIdx: 299,
            eventId: 819,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '20:00',
            periodTimeRemaining: '00:00',
            dateTime: '2023-03-12T19:14:38Z',
            goals: {
              away: 3,
              home: 5
            }
          },
          coordinates: {}
        },
        {
          result: {
            event: 'Game Official',
            eventCode: 'DET1201',
            eventTypeId: 'GAME_OFFICIAL',
            description: 'Game Official'
          },
          about: {
            eventIdx: 300,
            eventId: 1201,
            period: 3,
            periodType: 'REGULAR',
            ordinalNum: '3rd',
            periodTime: '20:00',
            periodTimeRemaining: '00:00',
            dateTime: '2023-03-12T20:09:31Z',
            goals: {
              away: 3,
              home: 5
            }
          },
          coordinates: {}
        }
      ],
      scoringPlays: [49, 126, 142, 168, 174, 218, 229, 295],
      penaltyPlays: [32, 43, 81, 82, 83, 84, 90, 121, 138, 149, 179, 180],
      playsByPeriod: [
        {
          startIndex: 0,
          plays: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
            36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
            53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
            70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
            87, 88, 89, 90, 91
          ],
          endIndex: 90
        },
        {
          startIndex: 92,
          plays: [
            92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
            107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
            120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132,
            133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145,
            146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158,
            159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171,
            172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184,
            185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198
          ],
          endIndex: 197
        },
        {
          startIndex: 199,
          plays: [
            199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211,
            212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224,
            225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237,
            238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250,
            251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263,
            264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276,
            277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289,
            290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300
          ],
          endIndex: 300
        }
      ],
      currentPlay: {
        result: {
          event: 'Game Official',
          eventCode: 'DET1201',
          eventTypeId: 'GAME_OFFICIAL',
          description: 'Game Official'
        },
        about: {
          eventIdx: 300,
          eventId: 1201,
          period: 3,
          periodType: 'REGULAR',
          ordinalNum: '3rd',
          periodTime: '20:00',
          periodTimeRemaining: '00:00',
          dateTime: '2023-03-12T20:09:31Z',
          goals: {
            away: 3,
            home: 5
          }
        },
        coordinates: {}
      }
    },
    linescore: {
      currentPeriod: 3,
      currentPeriodOrdinal: '3rd',
      currentPeriodTimeRemaining: 'Final',
      periods: [
        {
          periodType: 'REGULAR',
          startTime: '2023-03-12T16:38:24Z',
          endTime: '2023-03-12T17:14:43Z',
          num: 1,
          ordinalNum: '1st',
          home: {
            goals: 1,
            shotsOnGoal: 8,
            rinkSide: 'right'
          },
          away: {
            goals: 0,
            shotsOnGoal: 4,
            rinkSide: 'left'
          }
        },
        {
          periodType: 'REGULAR',
          startTime: '2023-03-12T17:34:03Z',
          endTime: '2023-03-12T18:16:24Z',
          num: 2,
          ordinalNum: '2nd',
          home: {
            goals: 3,
            shotsOnGoal: 11,
            rinkSide: 'left'
          },
          away: {
            goals: 1,
            shotsOnGoal: 16,
            rinkSide: 'right'
          }
        },
        {
          periodType: 'REGULAR',
          startTime: '2023-03-12T18:35:26Z',
          endTime: '2023-03-12T19:14:30Z',
          num: 3,
          ordinalNum: '3rd',
          home: {
            goals: 1,
            shotsOnGoal: 7,
            rinkSide: 'right'
          },
          away: {
            goals: 2,
            shotsOnGoal: 13,
            rinkSide: 'left'
          }
        }
      ],
      shootoutInfo: {
        away: {
          scores: 0,
          attempts: 0
        },
        home: {
          scores: 0,
          attempts: 0
        }
      },
      teams: {
        home: {
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            abbreviation: 'DET',
            triCode: 'DET'
          },
          goals: 5,
          shotsOnGoal: 26,
          goaliePulled: false,
          numSkaters: 5,
          powerPlay: false
        },
        away: {
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            abbreviation: 'BOS',
            triCode: 'BOS'
          },
          goals: 3,
          shotsOnGoal: 33,
          goaliePulled: false,
          numSkaters: 5,
          powerPlay: false
        }
      },
      powerPlayStrength: 'Even',
      hasShootout: false,
      intermissionInfo: {
        intermissionTimeRemaining: 0,
        intermissionTimeElapsed: 0,
        inIntermission: false
      },
      powerPlayInfo: {
        situationTimeRemaining: 0,
        situationTimeElapsed: 24,
        inSituation: false
      }
    },
    boxscore: {
      teams: {
        away: {
          team: {
            id: 6,
            name: 'Boston Bruins',
            link: '/api/v1/teams/6',
            abbreviation: 'BOS',
            triCode: 'BOS'
          },
          teamStats: {
            teamSkaterStats: {
              goals: 3,
              pim: 12,
              shots: 33,
              powerPlayPercentage: '0.0',
              powerPlayGoals: 0,
              powerPlayOpportunities: 3,
              faceOffWinPercentage: '51.9',
              blocked: 7,
              takeaways: 6,
              giveaways: 8,
              hits: 14
            }
          },
          players: {
            ID8470638: {
              person: {
                id: 8470638,
                fullName: 'Patrice Bergeron',
                link: '/api/v1/people/8470638',
                shootsCatches: 'R',
                rosterStatus: 'Y'
              },
              jerseyNumber: '37',
              position: {
                code: 'C',
                name: 'Center',
                type: 'Forward',
                abbreviation: 'C'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '17:19',
                  assists: 0,
                  goals: 0,
                  shots: 3,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffPct: 52.38,
                  faceOffWins: 11,
                  faceoffTaken: 21,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: -2,
                  evenTimeOnIce: '13:40',
                  powerPlayTimeOnIce: '2:47',
                  shortHandedTimeOnIce: '0:52'
                }
              }
            },
            ID8473419: {
              person: {
                id: 8473419,
                fullName: 'Brad Marchand',
                link: '/api/v1/people/8473419',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '63',
              position: {
                code: 'L',
                name: 'Left Wing',
                type: 'Forward',
                abbreviation: 'LW'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '19:38',
                  assists: 0,
                  goals: 0,
                  shots: 4,
                  hits: 1,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 2,
                  faceOffPct: 50,
                  faceOffWins: 1,
                  faceoffTaken: 2,
                  takeaways: 1,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: -2,
                  evenTimeOnIce: '16:24',
                  powerPlayTimeOnIce: '2:52',
                  shortHandedTimeOnIce: '0:22'
                }
              }
            },
            ID8480280: {
              person: {
                id: 8480280,
                fullName: 'Jeremy Swayman',
                link: '/api/v1/people/8480280',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '1',
              position: {
                code: 'G',
                name: 'Goalie',
                type: 'Goalie',
                abbreviation: 'G'
              },
              stats: {
                goalieStats: {
                  timeOnIce: '58:07',
                  assists: 0,
                  goals: 0,
                  pim: 0,
                  shots: 25,
                  saves: 21,
                  powerPlaySaves: 2,
                  shortHandedSaves: 0,
                  evenSaves: 19,
                  shortHandedShotsAgainst: 1,
                  evenShotsAgainst: 20,
                  powerPlayShotsAgainst: 4,
                  decision: 'L',
                  savePercentage: 84,
                  powerPlaySavePercentage: 50,
                  shortHandedSavePercentage: 0,
                  evenStrengthSavePercentage: 95
                }
              }
            },
            ID8477903: {
              person: {
                id: 8477903,
                fullName: 'Garnet Hathaway',
                link: '/api/v1/people/8477903',
                shootsCatches: 'R',
                rosterStatus: 'Y'
              },
              jerseyNumber: '21',
              position: {
                code: 'R',
                name: 'Right Wing',
                type: 'Forward',
                abbreviation: 'RW'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '9:39',
                  assists: 0,
                  goals: 0,
                  shots: 4,
                  hits: 1,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 0,
                  evenTimeOnIce: '8:51',
                  powerPlayTimeOnIce: '0:00',
                  shortHandedTimeOnIce: '0:48'
                }
              }
            },
            ID8471276: {
              person: {
                id: 8471276,
                fullName: 'David Krejci',
                link: '/api/v1/people/8471276',
                shootsCatches: 'R',
                rosterStatus: 'Y'
              },
              jerseyNumber: '46',
              position: {
                code: 'C',
                name: 'Center',
                type: 'Forward',
                abbreviation: 'C'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '17:10',
                  assists: 0,
                  goals: 0,
                  shots: 2,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffPct: 66.67,
                  faceOffWins: 6,
                  faceoffTaken: 9,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 1,
                  evenTimeOnIce: '13:53',
                  powerPlayTimeOnIce: '3:14',
                  shortHandedTimeOnIce: '0:03'
                }
              }
            },
            ID8477931: {
              person: {
                id: 8477931,
                fullName: 'Tomas Nosek',
                link: '/api/v1/people/8477931',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '92',
              position: {
                code: 'L',
                name: 'Left Wing',
                type: 'Forward',
                abbreviation: 'LW'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '10:31',
                  assists: 0,
                  goals: 0,
                  shots: 0,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 4,
                  faceOffPct: 44.44,
                  faceOffWins: 4,
                  faceoffTaken: 9,
                  takeaways: 1,
                  giveaways: 1,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 0,
                  evenTimeOnIce: '9:24',
                  powerPlayTimeOnIce: '0:00',
                  shortHandedTimeOnIce: '1:07'
                }
              }
            },
            ID8476854: {
              person: {
                id: 8476854,
                fullName: 'Hampus Lindholm',
                link: '/api/v1/people/8476854',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '27',
              position: {
                code: 'N/A',
                name: 'Unknown',
                type: 'Unknown',
                abbreviation: 'N/A'
              },
              stats: {}
            },
            ID8478415: {
              person: {
                id: 8478415,
                fullName: 'Jakub Zboril',
                link: '/api/v1/people/8478415',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '67',
              position: {
                code: 'N/A',
                name: 'Unknown',
                type: 'Unknown',
                abbreviation: 'N/A'
              },
              stats: {}
            },
            ID8477956: {
              person: {
                id: 8477956,
                fullName: 'David Pastrnak',
                link: '/api/v1/people/8477956',
                shootsCatches: 'R',
                rosterStatus: 'Y'
              },
              jerseyNumber: '88',
              position: {
                code: 'R',
                name: 'Right Wing',
                type: 'Forward',
                abbreviation: 'RW'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '18:35',
                  assists: 1,
                  goals: 1,
                  shots: 2,
                  hits: 1,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 0,
                  evenTimeOnIce: '15:26',
                  powerPlayTimeOnIce: '3:08',
                  shortHandedTimeOnIce: '0:01'
                }
              }
            },
            ID8475745: {
              person: {
                id: 8475745,
                fullName: 'Charlie Coyle',
                link: '/api/v1/people/8475745',
                shootsCatches: 'R',
                rosterStatus: 'Y'
              },
              jerseyNumber: '13',
              position: {
                code: 'C',
                name: 'Center',
                type: 'Forward',
                abbreviation: 'C'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '16:12',
                  assists: 0,
                  goals: 0,
                  shots: 3,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 2,
                  faceOffPct: 44.44,
                  faceOffWins: 4,
                  faceoffTaken: 9,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 0,
                  evenTimeOnIce: '13:30',
                  powerPlayTimeOnIce: '0:00',
                  shortHandedTimeOnIce: '2:42'
                }
              }
            },
            ID8478401: {
              person: {
                id: 8478401,
                fullName: 'Pavel Zacha',
                link: '/api/v1/people/8478401',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '18',
              position: {
                code: 'C',
                name: 'Center',
                type: 'Forward',
                abbreviation: 'C'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '15:15',
                  assists: 2,
                  goals: 0,
                  shots: 0,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffPct: 66.67,
                  faceOffWins: 2,
                  faceoffTaken: 3,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 2,
                  evenTimeOnIce: '11:40',
                  powerPlayTimeOnIce: '2:52',
                  shortHandedTimeOnIce: '0:43'
                }
              }
            },
            ID8475200: {
              person: {
                id: 8475200,
                fullName: 'Dmitry Orlov',
                link: '/api/v1/people/8475200',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '81',
              position: {
                code: 'D',
                name: 'Defenseman',
                type: 'Defenseman',
                abbreviation: 'D'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '21:17',
                  assists: 0,
                  goals: 0,
                  shots: 1,
                  hits: 2,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 1,
                  plusMinus: -1,
                  evenTimeOnIce: '17:22',
                  powerPlayTimeOnIce: '2:43',
                  shortHandedTimeOnIce: '1:12'
                }
              }
            },
            ID8475762: {
              person: {
                id: 8475762,
                fullName: 'Derek Forbort',
                link: '/api/v1/people/8475762',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '28',
              position: {
                code: 'D',
                name: 'Defenseman',
                type: 'Defenseman',
                abbreviation: 'D'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '16:54',
                  assists: 0,
                  goals: 0,
                  shots: 0,
                  hits: 3,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: -1,
                  evenTimeOnIce: '13:50',
                  powerPlayTimeOnIce: '0:00',
                  shortHandedTimeOnIce: '3:04'
                }
              }
            },
            ID8477479: {
              person: {
                id: 8477479,
                fullName: 'Tyler Bertuzzi',
                link: '/api/v1/people/8477479',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '59',
              position: {
                code: 'L',
                name: 'Left Wing',
                type: 'Forward',
                abbreviation: 'LW'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '17:02',
                  assists: 0,
                  goals: 0,
                  shots: 1,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffPct: 0,
                  faceOffWins: 0,
                  faceoffTaken: 1,
                  takeaways: 1,
                  giveaways: 4,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 0,
                  evenTimeOnIce: '14:05',
                  powerPlayTimeOnIce: '2:57',
                  shortHandedTimeOnIce: '0:00'
                }
              }
            },
            ID8479325: {
              person: {
                id: 8479325,
                fullName: 'Charlie McAvoy',
                link: '/api/v1/people/8479325',
                shootsCatches: 'R',
                rosterStatus: 'Y'
              },
              jerseyNumber: '73',
              position: {
                code: 'D',
                name: 'Defenseman',
                type: 'Defenseman',
                abbreviation: 'D'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '22:44',
                  assists: 0,
                  goals: 0,
                  shots: 4,
                  hits: 2,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 2,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 2,
                  giveaways: 1,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 2,
                  evenTimeOnIce: '19:32',
                  powerPlayTimeOnIce: '3:12',
                  shortHandedTimeOnIce: '0:00'
                }
              }
            },
            ID8478421: {
              person: {
                id: 8478421,
                fullName: 'A.J. Greer',
                link: '/api/v1/people/8478421',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '10',
              position: {
                code: 'L',
                name: 'Left Wing',
                type: 'Forward',
                abbreviation: 'LW'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '9:01',
                  assists: 0,
                  goals: 0,
                  shots: 0,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 2,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 0,
                  evenTimeOnIce: '9:01',
                  powerPlayTimeOnIce: '0:00',
                  shortHandedTimeOnIce: '0:00'
                }
              }
            },
            ID8478443: {
              person: {
                id: 8478443,
                fullName: 'Brandon Carlo',
                link: '/api/v1/people/8478443',
                shootsCatches: 'R',
                rosterStatus: 'Y'
              },
              jerseyNumber: '25',
              position: {
                code: 'D',
                name: 'Defenseman',
                type: 'Defenseman',
                abbreviation: 'D'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '17:03',
                  assists: 0,
                  goals: 0,
                  shots: 0,
                  hits: 1,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 1,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 4,
                  plusMinus: 0,
                  evenTimeOnIce: '14:03',
                  powerPlayTimeOnIce: '0:00',
                  shortHandedTimeOnIce: '3:00'
                }
              }
            },
            ID8476891: {
              person: {
                id: 8476891,
                fullName: 'Matt Grzelcyk',
                link: '/api/v1/people/8476891',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '48',
              position: {
                code: 'D',
                name: 'Defenseman',
                type: 'Defenseman',
                abbreviation: 'D'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '20:46',
                  assists: 1,
                  goals: 1,
                  shots: 3,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 3,
                  evenTimeOnIce: '17:29',
                  powerPlayTimeOnIce: '3:17',
                  shortHandedTimeOnIce: '0:00'
                }
              }
            },
            ID8478498: {
              person: {
                id: 8478498,
                fullName: 'Jake DeBrusk',
                link: '/api/v1/people/8478498',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '74',
              position: {
                code: 'L',
                name: 'Left Wing',
                type: 'Forward',
                abbreviation: 'LW'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '16:49',
                  assists: 0,
                  goals: 1,
                  shots: 2,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: -2,
                  evenTimeOnIce: '12:42',
                  powerPlayTimeOnIce: '2:58',
                  shortHandedTimeOnIce: '1:09'
                }
              }
            },
            ID8477365: {
              person: {
                id: 8477365,
                fullName: 'Connor Clifton',
                link: '/api/v1/people/8477365',
                shootsCatches: 'R',
                rosterStatus: 'Y'
              },
              jerseyNumber: '75',
              position: {
                code: 'D',
                name: 'Defenseman',
                type: 'Defenseman',
                abbreviation: 'D'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '17:00',
                  assists: 1,
                  goals: 0,
                  shots: 1,
                  hits: 3,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 1,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 2,
                  plusMinus: -1,
                  evenTimeOnIce: '15:50',
                  powerPlayTimeOnIce: '0:00',
                  shortHandedTimeOnIce: '1:10'
                }
              }
            },
            ID8479365: {
              person: {
                id: 8479365,
                fullName: 'Trent Frederic',
                link: '/api/v1/people/8479365',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '11',
              position: {
                code: 'C',
                name: 'Center',
                type: 'Forward',
                abbreviation: 'C'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '12:46',
                  assists: 0,
                  goals: 0,
                  shots: 3,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 1,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 0,
                  evenTimeOnIce: '12:11',
                  powerPlayTimeOnIce: '0:00',
                  shortHandedTimeOnIce: '0:35'
                }
              }
            },
            ID8480880: {
              person: {
                id: 8480880,
                fullName: 'Jakub Lauko',
                link: '/api/v1/people/8480880',
                shootsCatches: 'L',
                rosterStatus: 'N'
              },
              jerseyNumber: '94',
              position: {
                code: 'N/A',
                name: 'Unknown',
                type: 'Unknown',
                abbreviation: 'N/A'
              },
              stats: {}
            }
          },
          goalies: [8480280],
          skaters: [
            8478421, 8479365, 8475745, 8478401, 8477903, 8478443, 8475762,
            8470638, 8471276, 8476891, 8477479, 8473419, 8479325, 8478498,
            8477365, 8475200, 8477956, 8477931, 8476854, 8478415, 8480880
          ],
          onIce: [8475762, 8477903, 8477931, 8478421, 8478443, 8480280],
          onIcePlus: [
            {
              playerId: 8475762,
              shiftDuration: 24,
              stamina: 100
            },
            {
              playerId: 8477903,
              shiftDuration: 24,
              stamina: 100
            },
            {
              playerId: 8477931,
              shiftDuration: 24,
              stamina: 100
            },
            {
              playerId: 8478421,
              shiftDuration: 24,
              stamina: 100
            },
            {
              playerId: 8478443,
              shiftDuration: 24,
              stamina: 100
            },
            {
              playerId: 8480280,
              shiftDuration: 24,
              stamina: 100
            }
          ],
          scratches: [8476854, 8478415, 8480880],
          penaltyBox: [],
          coaches: [
            {
              person: {
                fullName: 'Jim Montgomery',
                link: '/api/v1/people/null'
              },
              position: {
                code: 'HC',
                name: 'Head Coach',
                type: 'Head Coach',
                abbreviation: 'Head Coach'
              }
            }
          ]
        },
        home: {
          team: {
            id: 17,
            name: 'Detroit Red Wings',
            link: '/api/v1/teams/17',
            abbreviation: 'DET',
            triCode: 'DET'
          },
          teamStats: {
            teamSkaterStats: {
              goals: 5,
              pim: 12,
              shots: 26,
              powerPlayPercentage: '66.7',
              powerPlayGoals: 2,
              powerPlayOpportunities: 3,
              faceOffWinPercentage: '48.1',
              blocked: 28,
              takeaways: 9,
              giveaways: 12,
              hits: 12
            }
          },
          players: {
            ID8480184: {
              person: {
                id: 8480184,
                fullName: 'Gustav Lindstrom',
                link: '/api/v1/people/8480184',
                shootsCatches: 'R',
                rosterStatus: 'Y'
              },
              jerseyNumber: '28',
              position: {
                code: 'N/A',
                name: 'Unknown',
                type: 'Unknown',
                abbreviation: 'N/A'
              },
              stats: {}
            },
            ID8477429: {
              person: {
                id: 8477429,
                fullName: 'Andrew Copp',
                link: '/api/v1/people/8477429',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '18',
              position: {
                code: 'C',
                name: 'Center',
                type: 'Forward',
                abbreviation: 'C'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '20:09',
                  assists: 0,
                  goals: 1,
                  shots: 2,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffPct: 48.15,
                  faceOffWins: 13,
                  faceoffTaken: 27,
                  takeaways: 1,
                  giveaways: 3,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 0,
                  evenTimeOnIce: '14:53',
                  powerPlayTimeOnIce: '1:08',
                  shortHandedTimeOnIce: '4:08'
                }
              }
            },
            ID8477946: {
              person: {
                id: 8477946,
                fullName: 'Dylan Larkin',
                link: '/api/v1/people/8477946',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '71',
              position: {
                code: 'C',
                name: 'Center',
                type: 'Forward',
                abbreviation: 'C'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '18:16',
                  assists: 2,
                  goals: 1,
                  shots: 3,
                  hits: 1,
                  powerPlayGoals: 1,
                  powerPlayAssists: 1,
                  penaltyMinutes: 0,
                  faceOffPct: 50,
                  faceOffWins: 7,
                  faceoffTaken: 14,
                  takeaways: 2,
                  giveaways: 2,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 2,
                  evenTimeOnIce: '13:10',
                  powerPlayTimeOnIce: '3:28',
                  shortHandedTimeOnIce: '1:38'
                }
              }
            },
            ID8480821: {
              person: {
                id: 8480821,
                fullName: 'Filip Zadina',
                link: '/api/v1/people/8480821',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '11',
              position: {
                code: 'R',
                name: 'Right Wing',
                type: 'Forward',
                abbreviation: 'RW'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '12:32',
                  assists: 0,
                  goals: 0,
                  shots: 1,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 2,
                  giveaways: 2,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 3,
                  plusMinus: -1,
                  evenTimeOnIce: '11:37',
                  powerPlayTimeOnIce: '0:44',
                  shortHandedTimeOnIce: '0:11'
                }
              }
            },
            ID8477851: {
              person: {
                id: 8477851,
                fullName: 'Jordan Oesterle',
                link: '/api/v1/people/8477851',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '82',
              position: {
                code: 'D',
                name: 'Defenseman',
                type: 'Defenseman',
                abbreviation: 'D'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '13:40',
                  assists: 1,
                  goals: 0,
                  shots: 1,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 4,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 2,
                  plusMinus: 1,
                  evenTimeOnIce: '13:40',
                  powerPlayTimeOnIce: '0:00',
                  shortHandedTimeOnIce: '0:00'
                }
              }
            },
            ID8480459: {
              person: {
                id: 8480459,
                fullName: 'Pius Suter',
                link: '/api/v1/people/8480459',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '24',
              position: {
                code: 'C',
                name: 'Center',
                type: 'Forward',
                abbreviation: 'C'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '19:01',
                  assists: 1,
                  goals: 0,
                  shots: 1,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 1,
                  evenTimeOnIce: '15:23',
                  powerPlayTimeOnIce: '0:00',
                  shortHandedTimeOnIce: '3:38'
                }
              }
            },
            ID8477454: {
              person: {
                id: 8477454,
                fullName: 'Adam Erne',
                link: '/api/v1/people/8477454',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '73',
              position: {
                code: 'L',
                name: 'Left Wing',
                type: 'Forward',
                abbreviation: 'LW'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '15:12',
                  assists: 0,
                  goals: 1,
                  shots: 4,
                  hits: 3,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 1,
                  evenTimeOnIce: '13:03',
                  powerPlayTimeOnIce: '0:00',
                  shortHandedTimeOnIce: '2:09'
                }
              }
            },
            ID8477952: {
              person: {
                id: 8477952,
                fullName: 'Robby Fabbri',
                link: '/api/v1/people/8477952',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '14',
              position: {
                code: 'N/A',
                name: 'Unknown',
                type: 'Unknown',
                abbreviation: 'N/A'
              },
              stats: {}
            },
            ID8476874: {
              person: {
                id: 8476874,
                fullName: 'Olli Maatta',
                link: '/api/v1/people/8476874',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '2',
              position: {
                code: 'D',
                name: 'Defenseman',
                type: 'Defenseman',
                abbreviation: 'D'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '24:14',
                  assists: 0,
                  goals: 0,
                  shots: 2,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 2,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 7,
                  plusMinus: -1,
                  evenTimeOnIce: '20:27',
                  powerPlayTimeOnIce: '0:00',
                  shortHandedTimeOnIce: '3:47'
                }
              }
            },
            ID8475279: {
              person: {
                id: 8475279,
                fullName: 'Ben Chiarot',
                link: '/api/v1/people/8475279',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '8',
              position: {
                code: 'D',
                name: 'Defenseman',
                type: 'Defenseman',
                abbreviation: 'D'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '20:22',
                  assists: 0,
                  goals: 0,
                  shots: 0,
                  hits: 1,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 4,
                  plusMinus: -1,
                  evenTimeOnIce: '16:36',
                  powerPlayTimeOnIce: '0:00',
                  shortHandedTimeOnIce: '3:46'
                }
              }
            },
            ID8478512: {
              person: {
                id: 8478512,
                fullName: 'Austin Czarnik',
                link: '/api/v1/people/8478512',
                shootsCatches: 'R',
                rosterStatus: 'Y'
              },
              jerseyNumber: '21',
              position: {
                code: 'C',
                name: 'Center',
                type: 'Forward',
                abbreviation: 'C'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '9:05',
                  assists: 0,
                  goals: 0,
                  shots: 0,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 2,
                  faceOffPct: 62.5,
                  faceOffWins: 5,
                  faceoffTaken: 8,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 1,
                  evenTimeOnIce: '9:05',
                  powerPlayTimeOnIce: '0:00',
                  shortHandedTimeOnIce: '0:00'
                }
              }
            },
            ID8480813: {
              person: {
                id: 8480813,
                fullName: 'Joe Veleno',
                link: '/api/v1/people/8480813',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '90',
              position: {
                code: 'C',
                name: 'Center',
                type: 'Forward',
                abbreviation: 'C'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '13:43',
                  assists: 0,
                  goals: 0,
                  shots: 2,
                  hits: 2,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffPct: 25,
                  faceOffWins: 1,
                  faceoffTaken: 4,
                  takeaways: 1,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 1,
                  plusMinus: -2,
                  evenTimeOnIce: '13:30',
                  powerPlayTimeOnIce: '0:00',
                  shortHandedTimeOnIce: '0:13'
                }
              }
            },
            ID8477462: {
              person: {
                id: 8477462,
                fullName: 'Robert Hagg',
                link: '/api/v1/people/8477462',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '38',
              position: {
                code: 'D',
                name: 'Defenseman',
                type: 'Defenseman',
                abbreviation: 'D'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '15:06',
                  assists: 0,
                  goals: 0,
                  shots: 1,
                  hits: 1,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 1,
                  evenTimeOnIce: '14:01',
                  powerPlayTimeOnIce: '0:00',
                  shortHandedTimeOnIce: '1:05'
                }
              }
            },
            ID8474102: {
              person: {
                id: 8474102,
                fullName: 'David Perron',
                link: '/api/v1/people/8474102',
                shootsCatches: 'R',
                rosterStatus: 'Y'
              },
              jerseyNumber: '57',
              position: {
                code: 'L',
                name: 'Left Wing',
                type: 'Forward',
                abbreviation: 'LW'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '14:22',
                  assists: 0,
                  goals: 0,
                  shots: 1,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 2,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: -1,
                  evenTimeOnIce: '11:07',
                  powerPlayTimeOnIce: '3:15',
                  shortHandedTimeOnIce: '0:00'
                }
              }
            },
            ID8477330: {
              person: {
                id: 8477330,
                fullName: 'Dominik Kubalik',
                link: '/api/v1/people/8477330',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '81',
              position: {
                code: 'L',
                name: 'Left Wing',
                type: 'Forward',
                abbreviation: 'LW'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '12:27',
                  assists: 0,
                  goals: 0,
                  shots: 3,
                  hits: 1,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 4,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 2,
                  plusMinus: 0,
                  evenTimeOnIce: '11:43',
                  powerPlayTimeOnIce: '0:44',
                  shortHandedTimeOnIce: '0:00'
                }
              }
            },
            ID8475163: {
              person: {
                id: 8475163,
                fullName: 'Alex Chiasson',
                link: '/api/v1/people/8475163',
                shootsCatches: 'R',
                rosterStatus: 'Y'
              },
              jerseyNumber: '48',
              position: {
                code: 'R',
                name: 'Right Wing',
                type: 'Forward',
                abbreviation: 'RW'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '11:15',
                  assists: 0,
                  goals: 1,
                  shots: 2,
                  hits: 1,
                  powerPlayGoals: 1,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffPct: 0,
                  faceOffWins: 0,
                  faceoffTaken: 1,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: 0,
                  evenTimeOnIce: '8:11',
                  powerPlayTimeOnIce: '3:04',
                  shortHandedTimeOnIce: '0:00'
                }
              }
            },
            ID8478013: {
              person: {
                id: 8478013,
                fullName: 'Jake Walman',
                link: '/api/v1/people/8478013',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '96',
              position: {
                code: 'D',
                name: 'Defenseman',
                type: 'Defenseman',
                abbreviation: 'D'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '21:11',
                  assists: 0,
                  goals: 0,
                  shots: 1,
                  hits: 1,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 1,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 5,
                  plusMinus: 0,
                  evenTimeOnIce: '18:10',
                  powerPlayTimeOnIce: '0:57',
                  shortHandedTimeOnIce: '2:04'
                }
              }
            },
            ID8478024: {
              person: {
                id: 8478024,
                fullName: 'Ville Husso',
                link: '/api/v1/people/8478024',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '35',
              position: {
                code: 'G',
                name: 'Goalie',
                type: 'Goalie',
                abbreviation: 'G'
              },
              stats: {
                goalieStats: {
                  timeOnIce: '60:00',
                  assists: 0,
                  goals: 0,
                  pim: 0,
                  shots: 33,
                  saves: 30,
                  powerPlaySaves: 5,
                  shortHandedSaves: 0,
                  evenSaves: 25,
                  shortHandedShotsAgainst: 0,
                  evenShotsAgainst: 28,
                  powerPlayShotsAgainst: 5,
                  decision: 'W',
                  savePercentage: 90.9090909090909,
                  powerPlaySavePercentage: 100,
                  evenStrengthSavePercentage: 89.28571428571429
                }
              }
            },
            ID8482078: {
              person: {
                id: 8482078,
                fullName: 'Lucas Raymond',
                link: '/api/v1/people/8482078',
                shootsCatches: 'R',
                rosterStatus: 'Y'
              },
              jerseyNumber: '23',
              position: {
                code: 'L',
                name: 'Left Wing',
                type: 'Forward',
                abbreviation: 'LW'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '18:34',
                  assists: 2,
                  goals: 0,
                  shots: 0,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 2,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: -1,
                  evenTimeOnIce: '15:06',
                  powerPlayTimeOnIce: '3:28',
                  shortHandedTimeOnIce: '0:00'
                }
              }
            },
            ID8481013: {
              person: {
                id: 8481013,
                fullName: 'Jonatan Berggren',
                link: '/api/v1/people/8481013',
                shootsCatches: 'L',
                rosterStatus: 'Y'
              },
              jerseyNumber: '52',
              position: {
                code: 'R',
                name: 'Right Wing',
                type: 'Forward',
                abbreviation: 'RW'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '10:04',
                  assists: 1,
                  goals: 0,
                  shots: 0,
                  hits: 0,
                  powerPlayGoals: 0,
                  powerPlayAssists: 0,
                  penaltyMinutes: 0,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 0,
                  giveaways: 0,
                  shortHandedGoals: 0,
                  shortHandedAssists: 0,
                  blocked: 0,
                  plusMinus: -1,
                  evenTimeOnIce: '10:04',
                  powerPlayTimeOnIce: '0:00',
                  shortHandedTimeOnIce: '0:00'
                }
              }
            },
            ID8481542: {
              person: {
                id: 8481542,
                fullName: 'Moritz Seider',
                link: '/api/v1/people/8481542',
                shootsCatches: 'R',
                rosterStatus: 'Y'
              },
              jerseyNumber: '53',
              position: {
                code: 'D',
                name: 'Defenseman',
                type: 'Defenseman',
                abbreviation: 'D'
              },
              stats: {
                skaterStats: {
                  timeOnIce: '22:47',
                  assists: 1,
                  goals: 1,
                  shots: 2,
                  hits: 1,
                  powerPlayGoals: 0,
                  powerPlayAssists: 1,
                  penaltyMinutes: 2,
                  faceOffWins: 0,
                  faceoffTaken: 0,
                  takeaways: 1,
                  giveaways: 2,
                  shortHandedGoals: 1,
                  shortHandedAssists: 0,
                  blocked: 4,
                  plusMinus: 0,
                  evenTimeOnIce: '17:14',
                  powerPlayTimeOnIce: '4:12',
                  shortHandedTimeOnIce: '1:21'
                }
              }
            }
          },
          goalies: [8478024],
          skaters: [
            8476874, 8475279, 8480821, 8477429, 8478512, 8482078, 8480459,
            8477462, 8475163, 8481013, 8481542, 8474102, 8477946, 8477454,
            8477330, 8477851, 8480813, 8478013, 8477952, 8480184
          ],
          onIce: [8475163, 8477454, 8477462, 8477851, 8478024, 8478512],
          onIcePlus: [
            {
              playerId: 8475163,
              shiftDuration: 24,
              stamina: 100
            },
            {
              playerId: 8477454,
              shiftDuration: 24,
              stamina: 100
            },
            {
              playerId: 8477462,
              shiftDuration: 24,
              stamina: 100
            },
            {
              playerId: 8477851,
              shiftDuration: 24,
              stamina: 100
            },
            {
              playerId: 8478024,
              shiftDuration: 380,
              stamina: 33
            },
            {
              playerId: 8478512,
              shiftDuration: 24,
              stamina: 100
            }
          ],
          scratches: [8477952, 8480184],
          penaltyBox: [],
          coaches: [
            {
              person: {
                fullName: 'Derek Lalonde',
                link: '/api/v1/people/null'
              },
              position: {
                code: 'HC',
                name: 'Head Coach',
                type: 'Head Coach',
                abbreviation: 'Head Coach'
              }
            }
          ]
        }
      },
      officials: [
        {
          official: {
            id: 2292,
            fullName: 'Chris Lee',
            link: '/api/v1/people/2292'
          },
          officialType: 'Referee'
        },
        {
          official: {
            id: 2303,
            fullName: 'Kevin Pollock',
            link: '/api/v1/people/2303'
          },
          officialType: 'Referee'
        },
        {
          official: {
            id: 7939,
            fullName: 'CJ Murray',
            link: '/api/v1/people/7939'
          },
          officialType: 'Linesman'
        },
        {
          official: {
            id: 2298,
            fullName: 'Brad Kovachik',
            link: '/api/v1/people/2298'
          },
          officialType: 'Linesman'
        }
      ]
    },
    decisions: {
      winner: {
        id: 8478024,
        fullName: 'Ville Husso',
        link: '/api/v1/people/8478024'
      },
      loser: {
        id: 8480280,
        fullName: 'Jeremy Swayman',
        link: '/api/v1/people/8480280'
      },
      firstStar: {
        id: 8477946,
        fullName: 'Dylan Larkin',
        link: '/api/v1/people/8477946'
      },
      secondStar: {
        id: 8481542,
        fullName: 'Moritz Seider',
        link: '/api/v1/people/8481542'
      },
      thirdStar: {
        id: 8477956,
        fullName: 'David Pastrnak',
        link: '/api/v1/people/8477956'
      }
    }
  }
};
