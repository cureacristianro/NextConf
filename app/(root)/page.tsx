import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection'
import Search from '@/components/shared/Search';
import { Button } from '@/components/ui/button'
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image'
import Link from 'next/link'

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 custom-bg">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Conferințele tale, logistica pe capul nostru!</h1>
            <p className="p-regular-20 md:p-regular-24">Caută sau publică evenimente cu o ușurință nemaipomenită! </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Caută Evenimente
              </Link>
            </Button>
          </div>

          <Image 
            src="/assets/images/hero.jpg"
            alt="hero"
            width={400}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            style={{ borderRadius: '50px', marginLeft: '20%' }}
          />
        </div>
      </section> 

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Caută un eveniment, <br /> în 2 click-uri ești înscris!</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection 
          data={events?.data}
          emptyTitle="Nu s-au găsit evenimente"
          emptyStateSubtext="Încearcă mai târziu"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  )
}
