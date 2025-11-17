'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaPrint, FaMusic } from 'react-icons/fa'
import { useTranslations, useLocale } from 'next-intl'

interface LyricsModalProps {
  isOpen: boolean
  onClose: () => void
  songKey: string
}

export default function LyricsModal({ isOpen, onClose, songKey }: LyricsModalProps) {
  const locale = useLocale()
  const t = useTranslations(`lyrics.${songKey}`)
  const tCommon = useTranslations('lyrics.common')
  const isFrench = locale === 'fr'

  // Define sections array - hardcoded to avoid translation errors
  // Radio has 6 sections (indices 0-5)
  const sections = [0, 1, 2, 3, 4, 5]

  // Line counts per section to avoid translation errors
  const lineCounts: { [key: number]: number } = {
    0: 9,  // verse: 9 lines
    1: 5,  // chorus: 5 lines
    2: 6,  // verse: 6 lines
    3: 5,  // chorus: 5 lines
    4: 4,  // bridge: 4 lines
    5: 5   // chorus: 5 lines
  }

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handlePrint = () => {
    // Create a new window with just the lyrics content
    const printWindow = window.open('', '_blank', 'width=800,height=600')

    if (!printWindow) return

    // Get all the lyrics text using hardcoded indices
    const sectionIndices = [0, 1, 2, 3, 4, 5]
    const sectionLineCounts: { [key: number]: number } = {
      0: 9, 1: 5, 2: 6, 3: 5, 4: 4, 5: 5
    }

    const lyricsData = sectionIndices.map((index) => {
      const sectionType = t(`sections.${index}.type`)
      const lineCount = sectionLineCounts[index] || 0
      const lines = []

      for (let lineIndex = 0; lineIndex < lineCount; lineIndex++) {
        const line = t(`sections.${index}.lines.${lineIndex}`)
        lines.push(line)
      }

      return { type: sectionType, lines }
    })

    // Build HTML content
    let lyricsHTML = ''
    lyricsData.forEach((section) => {
      if (section.type === 'chorus') {
        lyricsHTML += '<p style="font-weight: 600; text-transform: uppercase; font-size: 9pt; color: #666; margin-top: 16px; margin-bottom: 8px;">' + tCommon('chorus') + '</p>'
        lyricsHTML += '<div style="margin-left: 20px; border-left: 3px solid #000; padding-left: 15px;">'
      } else if (section.type === 'bridge') {
        lyricsHTML += '<p style="font-weight: 600; text-transform: uppercase; font-size: 9pt; color: #666; margin-top: 16px; margin-bottom: 8px;">' + tCommon('bridge') + '</p>'
      } else {
        lyricsHTML += '<div style="margin-top: 16px;">'
      }

      section.lines.forEach((line) => {
        if (line === '') {
          lyricsHTML += '<p style="height: 12pt;">&nbsp;</p>'
        } else {
          lyricsHTML += '<p style="margin: 0; line-height: 1.6;">' + line + '</p>'
        }
      })

      if (section.type === 'chorus') {
        lyricsHTML += '</div>'
      } else {
        lyricsHTML += '</div>'
      }
    })

    // Write the complete HTML document
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${t('title')} - Lyrics</title>
          <style>
            @page {
              margin: 0.75in;
              size: letter;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              font-size: 11pt;
              line-height: 1.6;
              color: #000;
              margin: 0;
              padding: 20px;
            }
            h1 {
              font-size: 18pt;
              font-weight: bold;
              margin: 0 0 10pt 0;
              padding-bottom: 10pt;
              border-bottom: 2px solid #000;
            }
            .artist {
              font-size: 12pt;
              margin-bottom: 20pt;
              color: #333;
            }
            .credits {
              margin-top: 30pt;
              padding-top: 15pt;
              border-top: 1px solid #000;
              font-size: 9pt;
              color: #666;
            }
            @media print {
              body {
                padding: 0;
              }
            }
          </style>
        </head>
        <body>
          <h1>${t('title')} - Lyrics</h1>
          <p class="artist">${t('artist')}</p>
          ${lyricsHTML}
          <div class="credits">
            <p style="margin-top: 10pt; font-size: 8pt;">© ${new Date().getFullYear()} Music Is Medicine. All rights reserved.</p>
          </div>
        </body>
      </html>
    `)

    printWindow.document.close()

    // Wait for content to load, then print
    setTimeout(() => {
      printWindow.focus()
      printWindow.print()
      printWindow.close()
    }, 250)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto lyrics-modal"
            >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-accent-purple to-accent-orange text-white p-6 rounded-t-2xl z-10">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FaMusic className="text-2xl" />
                    <h2 className="text-3xl font-bold">{t('title')}</h2>
                  </div>
                  <p className="text-lg opacity-90">{t('artist')}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handlePrint}
                    className="p-3 hover:bg-white/20 rounded-lg transition-colors duration-200"
                    aria-label={tCommon('print')}
                  >
                    <FaPrint className="text-xl" />
                  </button>
                  <button
                    onClick={onClose}
                    className="p-3 hover:bg-white/20 rounded-lg transition-colors duration-200"
                    aria-label={tCommon('close')}
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>
              </div>
            </div>

            {/* Lyrics Content */}
            <div className="p-8 print:p-0">
              <article className="lyrics-content" data-song-title={t('title')}>
                {sections.map((sectionIndex) => {
                  const sectionType = t(`sections.${sectionIndex}.type`)
                  const getLines = () => {
                    const lines = []
                    const lineCount = lineCounts[sectionIndex] || 0

                    for (let lineIndex = 0; lineIndex < lineCount; lineIndex++) {
                      const line = t(`sections.${sectionIndex}.lines.${lineIndex}`)
                      lines.push(line)
                    }
                    return lines
                  }

                  const getLinesEn = () => {
                    if (!isFrench) return []
                    const lines = []
                    const lineCount = lineCounts[sectionIndex] || 0

                    for (let lineIndex = 0; lineIndex < lineCount; lineIndex++) {
                      const line = t(`sectionsEn.${sectionIndex}.lines.${lineIndex}`)
                      lines.push(line)
                    }
                    return lines
                  }

                  const lines = getLines()
                  const linesEn = getLinesEn()

                  return (
                    <div key={sectionIndex} className="mb-8">
                      {sectionType === 'chorus' && (
                        <p className="text-accent-purple font-semibold text-sm uppercase tracking-wide mb-2">
                          {tCommon('chorus')}
                        </p>
                      )}
                      {sectionType === 'bridge' && (
                        <p className="text-accent-orange font-semibold text-sm uppercase tracking-wide mb-2">
                          {tCommon('bridge')}
                        </p>
                      )}

                      {isFrench ? (
                        // Bilingual display for French
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* English Original */}
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                              {tCommon('englishVersion')}
                            </p>
                            <div className={sectionType === 'chorus' ? 'ml-2 border-l-2 border-gray-300 pl-3' : ''}>
                              {linesEn.map((line, lineIndex) => (
                                <p
                                  key={lineIndex}
                                  className={`leading-relaxed ${
                                    line === '' ? 'h-4' : 'text-gray-600 text-base'
                                  }`}
                                >
                                  {line || '\u00A0'}
                                </p>
                              ))}
                            </div>
                          </div>

                          {/* French Translation */}
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                              {tCommon('frenchTranslation')}
                            </p>
                            <div className={sectionType === 'chorus' ? 'ml-2 border-l-4 border-accent-purple pl-3' : ''}>
                              {lines.map((line, lineIndex) => (
                                <p
                                  key={lineIndex}
                                  className={`leading-relaxed ${
                                    line === '' ? 'h-4' : 'text-text-primary text-lg font-medium'
                                  }`}
                                >
                                  {line || '\u00A0'}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        // English only display
                        <div className={sectionType === 'chorus' ? 'ml-4 border-l-4 border-accent-purple pl-4' : ''}>
                          {lines.map((line, lineIndex) => (
                            <p
                              key={lineIndex}
                              className={`leading-relaxed ${
                                line === '' ? 'h-4' : 'text-text-primary text-lg'
                              }`}
                            >
                              {line || '\u00A0'}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </article>

              {/* Credits */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-sm text-text-secondary space-y-2">
                  <p className="text-xs text-text-secondary mt-4">
                    © {new Date().getFullYear()} Music Is Medicine. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  )
}
