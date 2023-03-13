import { Schedule } from '../interfaces';

export const scheduleMock: Schedule = {
  copyright:
    'NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2023. All Rights Reserved.',
  totalItems: 8,
  totalEvents: 0,
  totalGames: 8,
  totalMatches: 0,
  metaData: {
    timeStamp: '20230313_035750'
  },
  wait: 10,
  dates: [
    {
      date: '2023-03-12',
      totalItems: 8,
      totalEvents: 0,
      totalGames: 8,
      totalMatches: 0,
      games: [
        {
          gamePk: 2022021058,
          link: '/api/v1/game/2022021058/feed/live',
          gameType: 'R',
          season: '20222023',
          gameDate: '2023-03-13T01:30:00Z',
          status: {
            abstractGameState: 'Live',
            codedGameState: '3',
            detailedState: 'In Progress',
            statusCode: '3',
            startTimeTBD: false
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 38,
                losses: 21,
                ot: 7,
                type: 'league'
              },
              score: 4,
              team: {
                id: 30,
                name: 'Minnesota Wild',
                link: '/api/v1/teams/30'
              }
            },
            home: {
              leagueRecord: {
                wins: 23,
                losses: 32,
                ot: 11,
                type: 'league'
              },
              score: 4,
              team: {
                id: 53,
                name: 'Arizona Coyotes',
                link: '/api/v1/teams/53'
              }
            }
          },
          venue: {
            name: 'Mullett Arena',
            link: '/api/v1/venues/null'
          },
          content: {
            link: '/api/v1/game/2022021058/content'
          }
        },
        {
          gamePk: 2022021060,
          link: '/api/v1/game/2022021060/feed/live',
          gameType: 'R',
          season: '20222023',
          gameDate: '2023-03-13T01:30:00Z',
          status: {
            abstractGameState: 'Live',
            codedGameState: '4',
            detailedState: 'In Progress - Critical',
            statusCode: '4',
            startTimeTBD: false
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 32,
                losses: 24,
                ot: 7,
                type: 'league'
              },
              score: 4,
              team: {
                id: 18,
                name: 'Nashville Predators',
                link: '/api/v1/teams/18'
              }
            },
            home: {
              leagueRecord: {
                wins: 22,
                losses: 35,
                ot: 9,
                type: 'league'
              },
              score: 3,
              team: {
                id: 24,
                name: 'Anaheim Ducks',
                link: '/api/v1/teams/24'
              }
            }
          },
          venue: {
            id: 5046,
            name: 'Honda Center',
            link: '/api/v1/venues/5046'
          },
          content: {
            link: '/api/v1/game/2022021060/content'
          }
        },
        {
          gamePk: 2022021053,
          link: '/api/v1/game/2022021053/feed/live',
          gameType: 'R',
          season: '20222023',
          gameDate: '2023-03-12T17:30:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 50,
                losses: 10,
                ot: 5,
                type: 'league'
              },
              score: 3,
              team: {
                id: 6,
                name: 'Boston Bruins',
                link: '/api/v1/teams/6'
              }
            },
            home: {
              leagueRecord: {
                wins: 30,
                losses: 27,
                ot: 9,
                type: 'league'
              },
              score: 5,
              team: {
                id: 17,
                name: 'Detroit Red Wings',
                link: '/api/v1/teams/17'
              }
            }
          },
          venue: {
            id: 5145,
            name: 'Little Caesars Arena',
            link: '/api/v1/venues/5145'
          },
          content: {
            link: '/api/v1/game/2022021053/content'
          }
        },
        {
          gamePk: 2022021054,
          link: '/api/v1/game/2022021054/feed/live',
          gameType: 'R',
          season: '20222023',
          gameDate: '2023-03-12T20:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 37,
                losses: 19,
                ot: 10,
                type: 'league'
              },
              score: 2,
              team: {
                id: 3,
                name: 'New York Rangers',
                link: '/api/v1/teams/3'
              }
            },
            home: {
              leagueRecord: {
                wins: 34,
                losses: 22,
                ot: 10,
                type: 'league'
              },
              score: 3,
              team: {
                id: 5,
                name: 'Pittsburgh Penguins',
                link: '/api/v1/teams/5'
              }
            }
          },
          venue: {
            id: 5034,
            name: 'PPG Paints Arena',
            link: '/api/v1/venues/5034'
          },
          content: {
            link: '/api/v1/game/2022021054/content'
          }
        },
        {
          gamePk: 2022021056,
          link: '/api/v1/game/2022021056/feed/live',
          gameType: 'R',
          season: '20222023',
          gameDate: '2023-03-12T23:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 41,
                losses: 20,
                ot: 6,
                type: 'league'
              },
              score: 5,
              team: {
                id: 54,
                name: 'Vegas Golden Knights',
                link: '/api/v1/teams/54'
              }
            },
            home: {
              leagueRecord: {
                wins: 29,
                losses: 32,
                ot: 5,
                type: 'league'
              },
              score: 3,
              team: {
                id: 19,
                name: 'St. Louis Blues',
                link: '/api/v1/teams/19'
              }
            }
          },
          venue: {
            id: 5076,
            name: 'Enterprise Center',
            link: '/api/v1/venues/5076'
          },
          content: {
            link: '/api/v1/game/2022021056/content'
          }
        },
        {
          gamePk: 2022021055,
          link: '/api/v1/game/2022021055/feed/live',
          gameType: 'R',
          season: '20222023',
          gameDate: '2023-03-12T23:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 43,
                losses: 14,
                ot: 8,
                type: 'league'
              },
              score: 0,
              team: {
                id: 12,
                name: 'Carolina Hurricanes',
                link: '/api/v1/teams/12'
              }
            },
            home: {
              leagueRecord: {
                wins: 44,
                losses: 16,
                ot: 6,
                type: 'league'
              },
              score: 3,
              team: {
                id: 1,
                name: 'New Jersey Devils',
                link: '/api/v1/teams/1'
              }
            }
          },
          venue: {
            name: 'Prudential Center',
            link: '/api/v1/venues/null'
          },
          content: {
            link: '/api/v1/game/2022021055/content'
          }
        },
        {
          gamePk: 2022021057,
          link: '/api/v1/game/2022021057/feed/live',
          gameType: 'R',
          season: '20222023',
          gameDate: '2023-03-12T23:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '7',
            detailedState: 'Final',
            statusCode: '7',
            startTimeTBD: false
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 38,
                losses: 26,
                ot: 3,
                type: 'league'
              },
              score: 3,
              team: {
                id: 52,
                name: 'Winnipeg Jets',
                link: '/api/v1/teams/52'
              }
            },
            home: {
              leagueRecord: {
                wins: 39,
                losses: 22,
                ot: 6,
                type: 'league'
              },
              score: 2,
              team: {
                id: 14,
                name: 'Tampa Bay Lightning',
                link: '/api/v1/teams/14'
              }
            }
          },
          venue: {
            id: 5017,
            name: 'Amalie Arena',
            link: '/api/v1/venues/5017'
          },
          content: {
            link: '/api/v1/game/2022021057/content'
          }
        },
        {
          gamePk: 2022021059,
          link: '/api/v1/game/2022021059/feed/live',
          gameType: 'R',
          season: '20222023',
          gameDate: '2023-03-13T01:00:00Z',
          status: {
            abstractGameState: 'Final',
            codedGameState: '6',
            detailedState: 'Final',
            statusCode: '6',
            startTimeTBD: false
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 33,
                losses: 29,
                ot: 4,
                type: 'league'
              },
              score: 1,
              team: {
                id: 9,
                name: 'Ottawa Senators',
                link: '/api/v1/teams/9'
              }
            },
            home: {
              leagueRecord: {
                wins: 30,
                losses: 24,
                ot: 13,
                type: 'league'
              },
              score: 5,
              team: {
                id: 20,
                name: 'Calgary Flames',
                link: '/api/v1/teams/20'
              }
            }
          },
          venue: {
            id: 5075,
            name: 'Scotiabank Saddledome',
            link: '/api/v1/venues/5075'
          },
          content: {
            link: '/api/v1/game/2022021059/content'
          }
        }
      ],
      events: [],
      matches: []
    }
  ]
};
