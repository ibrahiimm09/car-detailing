<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>
          <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">XML Sitemap Index | Dos Bros Detailing</xsl:when>
            <xsl:when test="//image:image">XML Image Sitemap | Dos Bros Detailing</xsl:when>
            <xsl:otherwise>XML Pages Sitemap | Dos Bros Detailing</xsl:otherwise>
          </xsl:choose>
        </title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
        <style>
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            background-color: #0a0a0a;
            color: #e5e5e5;
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            min-height: 100vh;
            padding: 2.5rem 1rem;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          .header {
            background: linear-gradient(135deg, #171717 0%, #0d0d0d 100%);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 2rem 2.25rem;
            margin-bottom: 2rem;
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
            position: relative;
            overflow: hidden;
          }
          .header::before {
            content: '';
            position: absolute;
            top: -50px;
            right: -50px;
            width: 220px;
            height: 220px;
            background: radial-gradient(circle, rgba(251, 44, 54, 0.15) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
          }
          .brand-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 14px;
            background: rgba(251, 44, 54, 0.1);
            border: 1px solid rgba(251, 44, 54, 0.25);
            border-radius: 9999px;
            font-size: 12px;
            font-weight: 700;
            color: #fb2c36;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 1rem;
          }
          .pulse-dot {
            width: 7px;
            height: 7px;
            background: #fb2c36;
            border-radius: 50%;
            box-shadow: 0 0 8px #fb2c36;
          }
          h1 {
            font-family: 'Outfit', sans-serif;
            font-size: 2rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 0.5rem;
            letter-spacing: -0.02em;
          }
          p.subtitle {
            color: #a3a3a3;
            font-size: 0.95rem;
            max-width: 680px;
          }
          .meta-stats {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
            flex-wrap: wrap;
          }
          .stat-pill {
            background: #1f1f1f;
            border: 1px solid rgba(255, 255, 255, 0.06);
            padding: 8px 16px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: #d4d4d4;
          }
          .stat-pill strong {
            color: #ffffff;
            font-family: 'Outfit', sans-serif;
            font-size: 15px;
          }
          .table-card {
            background: #121212;
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }
          thead th {
            background: #171717;
            padding: 1rem 1.25rem;
            font-family: 'Outfit', sans-serif;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #a3a3a3;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }
          tbody tr {
            border-bottom: 1px solid rgba(255, 255, 255, 0.04);
            transition: background 0.15s ease;
          }
          tbody tr:hover {
            background: rgba(255, 255, 255, 0.03);
          }
          tbody tr:last-child {
            border-bottom: none;
          }
          td {
            padding: 1rem 1.25rem;
            vertical-align: middle;
          }
          td.index-num {
            color: #737373;
            font-size: 12px;
            font-family: 'Outfit', sans-serif;
            font-weight: 600;
            width: 50px;
          }
          .thumb-wrapper {
            width: 54px;
            height: 54px;
            border-radius: 8px;
            overflow: hidden;
            background: #1c1c1c;
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .thumb-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          a.item-link {
            color: #fb2c36;
            text-decoration: underline;
            font-weight: 500;
            word-break: break-all;
            transition: color 0.15s ease;
          }
          a.item-link:hover {
            color: #fb2c36;
          }
          .page-badge {
            display: inline-block;
            padding: 4px 10px;
            background: #1f1f1f;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 6px;
            color: #a3a3a3;
            font-size: 12px;
            text-decoration: none;
            transition: all 0.15s ease;
          }
          .page-badge:hover {
            background: rgba(251, 44, 54, 0.15);
            border-color: rgba(251, 44, 54, 0.3);
            color: #ffffff;
          }
          .footer {
            margin-top: 2rem;
            text-align: center;
            color: #737373;
            font-size: 12px;
          }
          .footer a {
            color: #a3a3a3;
            text-decoration: none;
          }
          .footer a:hover {
            color: #fb2c36;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header class="header">
            <div class="brand-badge">
              <span class="pulse-dot"></span>
              Dos Bros Detailing · XML Sitemap
            </div>

            <xsl:choose>
              <xsl:when test="sitemap:sitemapindex">
                <h1>Master Sitemap </h1>
                <p class="subtitle">This XML Sitemap index contains links to the sub-sitemaps for pages and images, fully optimized for Google Search Console.</p>
                <div class="meta-stats">
                  <div class="stat-pill">Sub-Sitemaps: <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong></div>
                </div>
              </xsl:when>

              <xsl:when test="//image:image">
                <h1>Image Sitemap</h1>
                <p class="subtitle">Search engine image sitemap index containing official media assets, project gallery photos, and page graphics for dosbrosdetailingmn.com.</p>
                <div class="meta-stats">
                  <div class="stat-pill">Total Images: <strong><xsl:value-of select="count(//image:image)"/></strong></div>
                  <div class="stat-pill">Status: <strong style="color: #22c55e;">Live &amp; Validated</strong></div>
                </div>
              </xsl:when>

              <xsl:otherwise>
                <h1>Pages Sitemap</h1>
                <p class="subtitle">Index of all primary public website routes and pages crawled by Google Search.</p>
                <div class="meta-stats">
                  <div class="stat-pill">Total Pages: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong></div>
                </div>
              </xsl:otherwise>
            </xsl:choose>
          </header>

          <main class="table-card">
            <!-- SITEMAP INDEX TABLE -->
            <xsl:if test="sitemap:sitemapindex">
              <table>
                <thead>
                  <tr>
                    <th class="index-num">#</th>
                    <th>Sitemap URL</th>
                    <th>Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                    <tr>
                      <td class="index-num"><xsl:value-of select="position()"/></td>
                      <td>
                        <a class="item-link" href="{sitemap:loc}">
                          <xsl:value-of select="sitemap:loc"/>
                        </a>
                      </td>
                      <td style="color: #a3a3a3; font-size: 13px;">
                        <xsl:choose>
                          <xsl:when test="sitemap:lastmod">
                            <xsl:value-of select="sitemap:lastmod"/>
                          </xsl:when>
                          <xsl:otherwise>Current</xsl:otherwise>
                        </xsl:choose>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:if>

            <!-- IMAGE SITEMAP TABLE -->
            <xsl:if test="//image:image">
              <table>
                <thead>
                  <tr>
                    <th class="index-num">#</th>
                    <th>Preview</th>
                    <th>Image Location</th>
                    <th>Page Context</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:variable name="counter" select="0"/>
                  <xsl:for-each select="sitemap:urlset/sitemap:url">
                    <xsl:variable name="pageUrl" select="sitemap:loc"/>
                    <xsl:for-each select="image:image">
                      <tr>
                        <td class="index-num"><xsl:number value="position()" format="1"/></td>
                        <td>
                          <div class="thumb-wrapper">
                            <img src="{image:loc}" alt="Sitemap Image" loading="lazy"/>
                          </div>
                        </td>
                        <td>
                          <a class="item-link" href="{image:loc}" target="_blank" rel="noopener">
                            <xsl:value-of select="image:loc"/>
                          </a>
                        </td>
                        <td>
                          <a class="page-badge" href="{$pageUrl}" target="_blank" rel="noopener">
                            <xsl:choose>
                              <xsl:when test="$pageUrl = 'https://dosbrosdetailingmn.com/'">Home (/)</xsl:when>
                              <xsl:when test="contains($pageUrl, '/about')">About (/about)</xsl:when>
                              <xsl:when test="contains($pageUrl, '/cost-calculator')">Cost Calculator</xsl:when>
                              <xsl:when test="contains($pageUrl, '/service-areas')">Service Areas</xsl:when>
                              <xsl:when test="contains($pageUrl, '/contact')">Contact (/contact)</xsl:when>
                              <xsl:otherwise><xsl:value-of select="$pageUrl"/></xsl:otherwise>
                            </xsl:choose>
                          </a>
                        </td>
                      </tr>
                    </xsl:for-each>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:if>

            <!-- PAGES SITEMAP TABLE -->
            <xsl:if test="sitemap:urlset and not(//image:image)">
              <table>
                <thead>
                  <tr>
                    <th class="index-num">#</th>
                    <th>Page URL</th>
                    <th>Last Modified</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:urlset/sitemap:url">
                    <tr>
                      <td class="index-num"><xsl:value-of select="position()"/></td>
                      <td>
                        <a class="item-link" href="{sitemap:loc}">
                          <xsl:value-of select="sitemap:loc"/>
                        </a>
                      </td>
                      <td style="color: #a3a3a3; font-size: 13px;"><xsl:value-of select="sitemap:lastmod"/></td>
                      <td>
                        <span class="page-badge"><xsl:value-of select="sitemap:priority"/></span>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:if>
          </main>

          <!-- <footer class="footer">
            <p>Generated for <a href="https://dosbrosdetailingmn.com">Dos Bros Detailing</a></p>
          </footer> -->
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
