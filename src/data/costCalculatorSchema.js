export const getCostCalculatorSchema = (calculatorHeroImageUrl = 'https://dosbrosdetailingmn.com/logo.webp') => ({
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
      'logo': 'https://dosbrosdetailingmn.com/logo.webp',
      'description': 'Mobile interior and exterior detailing based in Morris, Minnesota, serving customers at their driveways, workplaces and farm sites in Morris and surrounding communities.',
      'sameAs': [
        'https://www.facebook.com/DosBrosDetailingMN',
        'https://www.instagram.com/dosbrosmn',
        'https://www.tiktok.com/@dosbrosdetailing'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': 'https://dosbrosdetailingmn.com/#website',
      'name': 'Dos Bros Detailing',
      'url': 'https://dosbrosdetailingmn.com/',
      'publisher': {
        '@id': 'https://dosbrosdetailingmn.com/#business'
      },
      'inLanguage': 'en-US'
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://dosbrosdetailingmn.com/cost-calculator#webpage',
      'url': 'https://dosbrosdetailingmn.com/cost-calculator',
      'name': 'Car Detailing Cost Calculator for Morris, MN',
      'description': 'Estimate a starting price and service time for mobile detailing based on service, vehicle condition, size, optional add-ons and town. No email or signup required.',
      'isPartOf': {
        '@id': 'https://dosbrosdetailingmn.com/#website'
      },
      'about': {
        '@id': 'https://dosbrosdetailingmn.com/#business'
      },
      'primaryImageOfPage': {
        '@type': 'ImageObject',
        'url': calculatorHeroImageUrl
      },
      'inLanguage': 'en-US',
      'hasPart': {
        '@id': 'https://dosbrosdetailingmn.com/cost-calculator#calculator'
      },
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How much does car detailing cost in Morris, MN?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Our packages start at 75 dollars for an Express Exterior and 330 dollars for a full Executive detail. Vehicle size adds 20 to 50 dollars. Travel is free within about 20 miles of Morris. Most customers land somewhere between 200 and 400 dollars depending on vehicle and condition.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Why is detailing more expensive than a car wash?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Because it is a completely different job. A car wash is ten minutes and cleans the outside surface. A full detail is hours of hands-on work using extraction, steam, and decontamination on both the inside and outside, and the result lasts months instead of days.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is the calculator price what I will actually pay?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'It is a starting price, and for most vehicles in normal condition it is very close. What can move it is heavy pet hair, set-in stains, strong odor, or years of buildup. If that is your vehicle, we tell you before we start, not after.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you charge extra to come to my town?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Not within about 20 miles of Morris. Beyond that there is a travel fee starting at 15 dollars to cover fuel and time, and it is always confirmed with your quote before you book.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do I tip?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No, and please do not feel awkward about it. We own the business and we price the job properly, so a tip is never expected. If you want to do something for us, leave an honest Google review or mention us to a neighbor. That helps far more.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you offer payment plans or take cards?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ask us when you book and we will tell you what we can take. We keep this simple.'
          }
        }
      ]
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://dosbrosdetailingmn.com/cost-calculator#calculator',
      'name': 'Dos Bros Car Detailing Cost Calculator',
      'url': 'https://dosbrosdetailingmn.com/cost-calculator#cost-calculator',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Car detailing cost calculator',
      'description': 'A free online calculator that estimates starting mobile detailing prices and service time. Estimates depend on package, vehicle condition and size, extras and travel. The final quote is confirmed by Dos Bros Detailing.',
      'isAccessibleForFree': true,
      'publisher': {
        '@id': 'https://dosbrosdetailingmn.com/#business'
      },
      'isPartOf': {
        '@id': 'https://dosbrosdetailingmn.com/cost-calculator#webpage'
      },
      'inLanguage': 'en-US',
      'featureList': [
        'Select interior, exterior or full detailing',
        'Choose maintenance or deep-clean vehicle condition',
        'Adjust for vehicle size and extra cargo space',
        'Select pet hair, odor, heavy stain or engine bay add-ons',
        'Include the service town for travel calculation',
        'Display an estimated starting price and service time',
        'Use without email, phone number or signup'
      ]
    }
  ]
});
