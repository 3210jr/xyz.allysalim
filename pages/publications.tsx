import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import publicationsData from '@/data/publicationsData'
import Link from '@/components/Link'

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Research & Publications - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Research & Publications
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Research efforts I have contributed to. Some of it is even good!
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {publicationsData.map(
              ({ title, description, href, dateString, doi, journal, authors }) => (
                <div key={title} className="md p-4">
                  <div
                    className={`
                    overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
                  >
                    <div className="p-6">
                      <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                        {href ? (
                          <Link href={href} aria-label={`Link to ${title}`}>
                            {title}
                          </Link>
                        ) : (
                          title
                        )}
                      </h2>
                      <p className="mb-3 max-w-none text-sm text-primary-600">{authors}</p>
                      <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                        {description}
                      </p>
                      <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                        {dateString} &bull; {journal} &bull; {doi}
                      </p>
                      {href && (
                        <Link
                          href={href}
                          className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Link to ${title}`}
                        >
                          Learn more &rarr;
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}
