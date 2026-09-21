export const getServiceAreasSchema = (serviceAreaHeroImageUrl = 'https://dosbrosdetailingmn.com/logo.webp') => ({
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
      'description': 'Dos Bros Detailing provides mobile interior and exterior detailing at driveways, workplaces and farm sites across Morris and surrounding Minnesota communities. Vehicle drop-off in Morris is also available; contact the business to arrange it.',
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
        { '@type': 'City', 'name': 'Long Prairie, Minnesota' },
        { '@type': 'AdministrativeArea', 'name': 'Stevens County, Minnesota' },
        { '@type': 'AdministrativeArea', 'name': 'Pope County, Minnesota' },
        { '@type': 'AdministrativeArea', 'name': 'Douglas County, Minnesota' },
        { '@type': 'AdministrativeArea', 'name': 'Grant County, Minnesota' },
        { '@type': 'AdministrativeArea', 'name': 'Swift County, Minnesota' },
        { '@type': 'AdministrativeArea', 'name': 'Big Stone County, Minnesota' },
        { '@type': 'AdministrativeArea', 'name': 'Otter Tail County, Minnesota' }
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
      '@type': 'FAQPage',
      '@id': 'https://dosbrosdetailingmn.com/service-areas#webpage',
      'url': 'https://dosbrosdetailingmn.com/service-areas',
      'name': 'Where We Detail: Morris, MN and Surrounding Towns',
      'description': 'Explore Dos Bros Detailing service areas across Morris and surrounding Minnesota towns, travel fees, drop-off options and requirements for mobile detailing.',
      'isPartOf': {
        '@id': 'https://dosbrosdetailingmn.com/#website'
      },
      'about': {
        '@id': 'https://dosbrosdetailingmn.com/#business'
      },
      'primaryImageOfPage': {
        '@type': 'ImageObject',
        'url': serviceAreaHeroImageUrl
      },
      'inLanguage': 'en-US',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'My town is not on the list. Do you still come out?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Probably. That list covers where we work regularly, not the edge of what we will do. Send us your town with a quote request and we will tell you straight away whether it works and what the travel would be.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How is the travel fee calculated?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'By distance from Morris, not by the hour. No travel fee within about 20 miles of Morris. Twenty to thirty five miles starts at 15 dollars, thirty five to fifty starts at 25 dollars, and beyond that we quote it. The fee is confirmed with your price before you book, never added afterward.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can I bring my vehicle to you instead?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, and sometimes that is the better deal. If you are further out and it is a single vehicle, dropping it in Morris skips the travel fee entirely. Just ask and we will tell you honestly which way saves you money.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you do multiple vehicles at one location?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'We do, and that is one of the best ways to use us. Several vehicles at one address, one farm, or one business lot means we are there anyway, so the travel cost gets spread out. Businesses running a fleet should look at our fleet page.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you work in winter?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, though weather changes what makes sense. Interior work goes ahead year round with no problem. Exterior work depends on conditions, and we will tell you honestly if a day is not going to give you a good result. Most people around here get a full detail after thaw and Express interiors through the winter to stay ahead of the salt.'
          }
        }
      ]
    }
  ]
});
