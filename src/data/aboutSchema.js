export const getAboutSchema = ({
  foundersImageUrl = 'https://dosbrosdetailingmn.com/logo.webp',
  teamHeroImageUrl = 'https://dosbrosdetailingmn.com/logo.webp',
} = {}) => ({
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
      'image': foundersImageUrl,
      'description': 'Dos Bros Detailing is a family-run mobile detailing business based in Morris, Minnesota. Brothers Reyes and Mariano bring interior and exterior detailing directly to customers’ driveways, workplaces and farm sites in Morris and surrounding communities.',
      'founder': [
        {
          '@id': 'https://dosbrosdetailingmn.com/#reyes'
        },
        {
          '@id': 'https://dosbrosdetailingmn.com/#mariano'
        }
      ],
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
        'AboutPage',
        'FAQPage'
      ],
      '@id': 'https://dosbrosdetailingmn.com/about#webpage',
      'url': 'https://dosbrosdetailingmn.com/about',
      'name': 'About Dos Bros Detailing',
      'description': 'Meet Reyes and Mariano, the brothers behind Dos Bros Detailing in Morris, Minnesota, and learn about their background, mobile detailing service and standards.',
      'isPartOf': {
        '@id': 'https://dosbrosdetailingmn.com/#website'
      },
      'about': {
        '@id': 'https://dosbrosdetailingmn.com/#business'
      },
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Who actually shows up at my house?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'One of us. Usually Reyes, and both of us on bigger jobs. You will have already messaged with whoever arrives, so nobody is turning up unannounced. We are not a company that sends out a rotating crew.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Are you a franchise or locally owned?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Locally owned. Dos Bros is two brothers from Morris and that is the entire company. No franchise, no parent company, no call center somewhere else.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you actually know what you are doing?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Fair question and we would ask it too. Mariano worked at a professional detailing shop before we started this, which is where most of our process came from. We both grew up working alongside our dad. And every review on our Google profile is a five star, which you can go check yourself right now.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is it really just the two of you?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. That is a limitation on how many vehicles we can do in a week, and it is the reason we book out. It is also why the work is consistent. Same two people, same standards, every single time.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What if I am not happy with something?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tell us before we leave. We walk around the vehicle with you at the end for exactly this reason. If something got missed, we fix it right there. We would much rather spend another twenty minutes than have you drive around unhappy with our name on it.'
          }
        }
      ],
      'mentions': [
        {
          '@id': 'https://dosbrosdetailingmn.com/#reyes'
        },
        {
          '@id': 'https://dosbrosdetailingmn.com/#mariano'
        }
      ],
      'primaryImageOfPage': {
        '@type': 'ImageObject',
        'url': teamHeroImageUrl
      },
      'inLanguage': 'en-US'
    },
    {
      '@type': 'Person',
      '@id': 'https://dosbrosdetailingmn.com/#reyes',
      'name': 'Reyes',
      'jobTitle': 'Co-founder and Mobile Detailer',
      'worksFor': {
        '@id': 'https://dosbrosdetailingmn.com/#business'
      },
      'description': 'Reyes is a co-founder of Dos Bros Detailing in Morris, Minnesota. He handles most customer messages and quotes and works alongside his brother Mariano.'
    },
    {
      '@type': 'Person',
      '@id': 'https://dosbrosdetailingmn.com/#mariano',
      'name': 'Mariano',
      'jobTitle': 'Co-founder and Mobile Detailer',
      'worksFor': {
        '@id': 'https://dosbrosdetailingmn.com/#business'
      },
      'description': 'Mariano is a co-founder of Dos Bros Detailing in Morris, Minnesota. He worked at a professional detailing shop before starting the business with his brother Reyes.'
    }
  ]
});
