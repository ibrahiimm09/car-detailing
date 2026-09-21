export const getHomeSchema = (foundersImageUrl = 'https://dosbrosdetailingmn.com/logo.webp') => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutoWash',
      '@id': 'https://dosbrosdetailingmn.com/#business',
      'name': 'Dos Bros Detailing',
      'alternateName': 'Dos Bros Auto Detailing',
      'url': 'https://dosbrosdetailingmn.com/',
      'telephone': '+13202873573',
      'email': 'ordonezreyes75@gmail.com',
      'description': 'Dos Bros Detailing is a strictly mobile detailing business based in Morris, Minnesota, operated by brothers Reyes and Mariano. Interior and exterior detailing is provided at customers’ driveways, workplaces and farm sites across Morris and surrounding communities.',
      'logo': 'https://dosbrosdetailingmn.com/logo.webp',
      'image': foundersImageUrl,
      'founder': [
        {
          '@type': 'Person',
          'name': 'Reyes'
        },
        {
          '@type': 'Person',
          'name': 'Mariano'
        }
      ],
      'areaServed': [
        { '@type': 'City', 'name': 'Morris, Minnesota' },
        { '@type': 'City', 'name': 'Hancock, Minnesota' },
        { '@type': 'City', 'name': 'Alberta, Minnesota' },
        { '@type': 'City', 'name': 'Chokio, Minnesota' },
        { '@type': 'City', 'name': 'Donnelly, Minnesota' },
        { '@type': 'City', 'name': 'Cyrus, Minnesota' },
        { '@type': 'City', 'name': 'Hoffman, Minnesota' },
        { '@type': 'City', 'name': 'Kensington, Minnesota' },
        { '@type': 'City', 'name': 'Barrett, Minnesota' },
        { '@type': 'City', 'name': 'Elbow Lake, Minnesota' },
        { '@type': 'City', 'name': 'Herman, Minnesota' },
        { '@type': 'City', 'name': 'Ashby, Minnesota' },
        { '@type': 'City', 'name': 'Evansville, Minnesota' },
        { '@type': 'City', 'name': 'Brandon, Minnesota' },
        { '@type': 'City', 'name': 'Starbuck, Minnesota' },
        { '@type': 'City', 'name': 'Glenwood, Minnesota' },
        { '@type': 'City', 'name': 'Lowry, Minnesota' },
        { '@type': 'City', 'name': 'Villard, Minnesota' },
        { '@type': 'City', 'name': 'Farwell, Minnesota' },
        { '@type': 'City', 'name': 'Alexandria, Minnesota' },
        { '@type': 'City', 'name': 'Osakis, Minnesota' },
        { '@type': 'City', 'name': 'Benson, Minnesota' },
        { '@type': 'City', 'name': 'Kerkhoven, Minnesota' },
        { '@type': 'City', 'name': 'Murdock, Minnesota' },
        { '@type': 'City', 'name': 'Danvers, Minnesota' },
        { '@type': 'City', 'name': 'Clontarf, Minnesota' },
        { '@type': 'City', 'name': 'Sunburg, Minnesota' },
        { '@type': 'City', 'name': 'New London, Minnesota' },
        { '@type': 'City', 'name': 'Spicer, Minnesota' },
        { '@type': 'City', 'name': 'Wheaton, Minnesota' },
        { '@type': 'City', 'name': 'Graceville, Minnesota' },
        { '@type': 'City', 'name': 'Clinton, Minnesota' },
        { '@type': 'City', 'name': 'Beardsley, Minnesota' },
        { '@type': 'City', 'name': 'Appleton, Minnesota' },
        { '@type': 'City', 'name': 'Milan, Minnesota' },
        { '@type': 'City', 'name': 'Montevideo, Minnesota' },
        { '@type': 'City', 'name': 'Madison, Minnesota' },
        { '@type': 'City', 'name': 'Ortonville, Minnesota' },
        { '@type': 'City', 'name': 'Fergus Falls, Minnesota' },
        { '@type': 'City', 'name': 'Sauk Centre, Minnesota' },
        { '@type': 'City', 'name': 'Willmar, Minnesota' },
        { '@type': 'City', 'name': 'Melrose, Minnesota' },
        { '@type': 'City', 'name': 'Paynesville, Minnesota' },
        { '@type': 'City', 'name': 'Long Prairie, Minnesota' }
      ],
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'https://schema.org/Monday',
          'https://schema.org/Tuesday',
          'https://schema.org/Wednesday',
          'https://schema.org/Thursday',
          'https://schema.org/Friday',
          'https://schema.org/Saturday',
          'https://schema.org/Sunday'
        ],
        'opens': '06:00',
        'closes': '23:00'
      },
      'sameAs': [
        'https://www.facebook.com/DosBrosDetailingMN',
        'https://www.instagram.com/dosbrosmn',
        'https://www.tiktok.com/@dosbrosdetailing'
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Mobile detailing services',
        'itemListElement': [
          {
            '@type': 'Offer',
            'url': 'https://dosbrosdetailingmn.com/contact',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Interior Detailing',
              'serviceType': 'Interior Detailing',
              'description': 'Vacuuming, surface cleaning, mats and interior glass; Executive options include steam cleaning, shampoo and extraction, stain treatment and leather conditioning.',
              'provider': {
                '@id': 'https://dosbrosdetailingmn.com/#business'
              }
            }
          },
          {
            '@type': 'Offer',
            'url': 'https://dosbrosdetailingmn.com/contact',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Exterior Detailing and Hand Wash',
              'serviceType': 'Exterior Detailing and Hand Wash',
              'description': 'Foam pre-soak, hand wash, wheel and tire cleaning, bug and tar removal, exterior glass and spray wax protection; Executive options add decontamination.',
              'provider': {
                '@id': 'https://dosbrosdetailingmn.com/#business'
              }
            }
          },
          {
            '@type': 'Offer',
            'url': 'https://dosbrosdetailingmn.com/contact',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Full Detail',
              'serviceType': 'Full Detail',
              'description': 'Combined interior and exterior detailing.',
              'provider': {
                '@id': 'https://dosbrosdetailingmn.com/#business'
              }
            }
          },
          {
            '@type': 'Offer',
            'url': 'https://dosbrosdetailingmn.com/contact',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Truck and Farm Vehicle Detailing',
              'serviceType': 'Truck and Farm Vehicle Detailing',
              'description': 'Mobile detailing for trucks and farm vehicles.',
              'provider': {
                '@id': 'https://dosbrosdetailingmn.com/#business'
              }
            }
          },
          {
            '@type': 'Offer',
            'url': 'https://dosbrosdetailingmn.com/contact',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Fleet and Commercial Detailing',
              'serviceType': 'Fleet and Commercial Detailing',
              'description': 'On-site detailing with recurring schedules for business fleets.',
              'provider': {
                '@id': 'https://dosbrosdetailingmn.com/#business'
              }
            }
          },
          {
            '@type': 'Offer',
            'url': 'https://dosbrosdetailingmn.com/contact',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Boat and Pontoon Detailing',
              'serviceType': 'Boat and Pontoon Detailing',
              'description': 'Seasonal boat and pontoon detailing.',
              'provider': {
                '@id': 'https://dosbrosdetailingmn.com/#business'
              }
            }
          },
          {
            '@type': 'Offer',
            'url': 'https://dosbrosdetailingmn.com/contact',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Engine Bay Detail',
              'serviceType': 'Engine Bay Detail',
              'description': 'Engine bay cleaning.',
              'provider': {
                '@id': 'https://dosbrosdetailingmn.com/#business'
              }
            }
          },
          {
            '@type': 'Offer',
            'url': 'https://dosbrosdetailingmn.com/contact',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Pet Hair Removal',
              'serviceType': 'Pet Hair Removal',
              'description': 'Targeted pet hair removal.',
              'provider': {
                '@id': 'https://dosbrosdetailingmn.com/#business'
              }
            }
          },
          {
            '@type': 'Offer',
            'url': 'https://dosbrosdetailingmn.com/contact',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Odor Treatment',
              'serviceType': 'Odor Treatment',
              'description': 'Targeted vehicle odor treatment.',
              'provider': {
                '@id': 'https://dosbrosdetailingmn.com/#business'
              }
            }
          },
          {
            '@type': 'Offer',
            'url': 'https://dosbrosdetailingmn.com/contact',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Heavy Stain Removal',
              'serviceType': 'Heavy Stain Removal',
              'description': 'Targeted treatment for heavy stains.',
              'provider': {
                '@id': 'https://dosbrosdetailingmn.com/#business'
              }
            }
          },
          {
            '@type': 'Offer',
            'url': 'https://dosbrosdetailingmn.com/contact',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Headlight Restoration',
              'serviceType': 'Headlight Restoration',
              'description': 'Headlight restoration priced per vehicle.',
              'provider': {
                '@id': 'https://dosbrosdetailingmn.com/#business'
              }
            }
          },
          {
            '@type': 'Offer',
            'url': 'https://dosbrosdetailingmn.com/contact',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Maintenance Programs',
              'serviceType': 'Maintenance Programs',
              'description': 'Recurring vehicle details.',
              'provider': {
                '@id': 'https://dosbrosdetailingmn.com/#business'
              }
            }
          }
        ]
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://dosbrosdetailingmn.com/#website',
      'url': 'https://dosbrosdetailingmn.com/',
      'name': 'Dos Bros Detailing',
      'publisher': {
        '@id': 'https://dosbrosdetailingmn.com/#business'
      },
      'inLanguage': 'en-US'
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://dosbrosdetailingmn.com/#webpage',
      'url': 'https://dosbrosdetailingmn.com/',
      'name': 'Best Mobile Car Detailing in Morris, MN',
      'isPartOf': {
        '@id': 'https://dosbrosdetailingmn.com/#website'
      },
      'about': {
        '@id': 'https://dosbrosdetailingmn.com/#business'
      },
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Do you actually come to me?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. That is the whole business. We bring everything to your driveway, your workplace, or your farm site, anywhere in our service area. Your vehicle never has to leave home.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you need my water and power?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, we need access to an outdoor water spigot and a standard power outlet. We bring all the equipment, products, and tools ourselves. Most homes, shops, and business lots already have what we need. If you are unsure, just ask before booking and we will sort it out.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How long does a full detail take?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'An Express Full Detail runs about 3 to 4.5 hours. An Executive Full Detail runs 5 to 7 hours. Interior only is 2 to 5 hours depending on the package and condition. Larger vehicles take longer. We give you a realistic window when we quote.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How often should I get my vehicle detailed?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'For most vehicles around here, a full detail once or twice a year works well, with lighter Express services in between. If you drive gravel daily, haul pets, or park outside year-round, twice a year is closer to right. Every vehicle is different.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What happens if it rains?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'We keep an eye on the forecast and reach out ahead of time if it looks bad. If weather rolls in mid-job, we reschedule the outside work at no extra charge. If you have a garage or a covered shop area, even better, we can usually work right through it.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do I need to be home?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Not at all. Plenty of our customers leave for work and come back to a finished vehicle. We just need access to the vehicle, water, and power. One of our customers said coming home to a truck that was dialed in was priceless, and honestly that is our favorite kind of job.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can you get pet hair and smells out?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Usually, yes. Pet hair takes specialized tools and patience because it works into the fabric weave rather than sitting on top. Odor is different because you have to remove the source, not mask it, which means shampoo and extraction and sometimes an odor treatment. Heavy cases can take extra time, and we will tell you upfront if yours is one.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Does detailing help what I get on a trade-in?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'It does. Interior condition is one of the first things a dealer or a private buyer looks at, and a clean, conditioned interior reads as a well-maintained vehicle. Customers detail before selling all the time. It is one of the better returns you can get on a few hundred dollars.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is the difference between a detail and a car wash?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A car wash cleans the outside surface and it lasts a few days. A detail cleans, restores, and protects the inside and the outside, right down to the vents, the seams, and the carpet fibers. Results last months, not days. Think of a car wash as upkeep and detailing as maintenance.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do I tip?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No, and please do not feel awkward about it. We own the business and we price the job properly, so tips are never expected. If you want to do something for us, leave an honest Google review or mention us to a neighbor. That helps more than anything.'
          }
        }
      ],
      'inLanguage': 'en-US'
    }
  ]
});
