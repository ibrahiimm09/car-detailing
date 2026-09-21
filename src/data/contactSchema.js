export const getContactSchema = (contactHeroImageUrl = 'https://dosbrosdetailingmn.com/logo.webp') => ({
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
      'description': 'Dos Bros Detailing is a mobile detailing business run by brothers Reyes and Mariano in Morris, Minnesota, providing interior and exterior detailing at customers’ driveways, workplaces and farm sites.',
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'Quotes and booking enquiries',
        'telephone': '+13202873573',
        'email': 'ordonezreyes75@gmail.com',
        'url': 'https://dosbrosdetailingmn.com/contact',
        'description': 'Call, text, email or use the quote request form to contact Dos Bros Detailing.'
      },
      'sameAs': [
        'https://www.facebook.com/DosBrosDetailingMN',
        'https://www.instagram.com/dosbrosmn',
        'https://www.tiktok.com/@dosbrosdetailing'
      ]
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
      '@type': [
        'ContactPage',
        'FAQPage'
      ],
      '@id': 'https://dosbrosdetailingmn.com/contact#webpage',
      'url': 'https://dosbrosdetailingmn.com/contact',
      'name': 'Contact Dos Bros Detailing',
      'description': 'Contact Dos Bros Detailing for a free detailing quote in Morris and surrounding Minnesota communities. Call, text, email or submit your vehicle and town through the quote form.',
      'isPartOf': {
        '@id': 'https://dosbrosdetailingmn.com/#website'
      },
      'about': {
        '@id': 'https://dosbrosdetailingmn.com/#business'
      },
      'primaryImageOfPage': {
        '@type': 'ImageObject',
        'url': contactHeroImageUrl
      },
      'inLanguage': 'en-US',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How fast will you get back to me?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Usually the same day. If we are mid-job it might be a few hours, but we answer everything. If you have not heard from us by the next morning, something went wrong on our end so please try again or just call.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do I have to book right away?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. A quote is a quote. Plenty of people ask for a price, think about it, and come back weeks later. We will not chase you and we will not add you to any list.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can I ask a question without getting a quote?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Of course. Text or message us. If you want to know whether we can get a specific stain out or whether we handle a certain vehicle, just ask. We would rather answer honestly than have you book something that is not right.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How far ahead do I need to book?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'It depends on the season. Spring after thaw is our busiest stretch and we book out further then. Winter is usually easier to get a spot. Either way, ask and we will tell you the real next available day.'
          }
        }
      ]
    }
  ]
});
