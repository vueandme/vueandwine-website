<template>
  <div>
    <Navbar :scrolled="scrolled" />

    <Hero>
      <template #main>
        <p class="text-dark-green">Vue and Wine</p>
        <p class="text-5xl">Eger, Hungary</p>
        <p class="text-3xl">September 27-29th 2019</p>
      </template>
      <template #sub>
        <p class="pb-4">
          Intimate code camp in a vineyard paradise.
        </p>
        <p class="pb-4">
          New series of events, taking Vue.js workshops to unique spots on the
          tourist map of Europe.
        </p>
      </template>
      <template #action>
        <TicketButton
          class="mx-auto lg:mx-0 hover:underline bg-white
        text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        />
      </template>
      <template #right>
        <Countdown />
        <img
          src="~/assets/images/undraw_finish_line_katerina_limpitsouni_xy20.svg"
          alt="race finish line"
        />
      </template>
    </Hero>

    <section class="bg-white border-b py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <SectionTitle id="TLDR">
          The real Vue adventure
        </SectionTitle>
        <SectionContent>
          <template #title>
            Optimal learning experience
          </template>
          <template #default>
            <p class="pb-4">
              Intense workshops in small groups, led by the top community
              authorities - library authors, content creators and Vue.js Core
              Team members.
            </p>
            <p>
              We'll focus on intermediate and advanced level knowledge, the new
              Vue 3 features and the top ecosystem libraries.
            </p>
          </template>
          <template #img>
            <img src="~assets/images/undraw_teaching_f1cm.svg" alt="teaching" />
          </template>
        </SectionContent>
        <SectionContent reverse>
          <template #title>
            Quality recreation time
          </template>
          <template>
            <p class="pb-4">
              The lessons will be followed by hand-picked leisure activities, to
              give us a taste of the area we visit.
            </p>
            <p>
              Our first Vue and Wine event will take place in Eger, a Hungarian
              vineyard paradise where we can make unforgettable memories and
              experience something magical together.
            </p>
          </template>
          <template #img>
            <img
              src="~assets/images/undraw_having_fun_iais.svg"
              alt="fun and drinks"
            />
          </template>
        </SectionContent>
      </div>
    </section>

    <section class="bg-white border-b py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <SectionTitle id="TLDR">
          About the event
        </SectionTitle>
        <SectionContent fullsize>
          <h4 class="text-2xl pb-4 text-center">
            Follow us on
            <strong><a href="https://twitter/vueandme">Twitter</a></strong> for
            the latest updates!
          </h4>

          <h4 class="font-bold pb-4">The concept</h4>
          <template>
            <p class="pb-4">
              Vue and Me is a series of events in which the attendees take part
              in both Vue workshops and side activities. The concurrent editions
              take place in different places around Europe. In opposite to big
              conferences, we meet in a limited group of 30-40 developers, to
              provide a more intimate experience, where we can all get to know
              and support each other.
            </p>
            <p class="pb-4">
              It's also a consulting opportunity. We've all got expertize in
              different areas, so let's take advantage of it. Ask any questions
              you want, show us what you work on, discuss your ideas with both
              the teachers and other attendees.
            </p>
            <h4 class="font-bold pb-4">Workshops</h4>
            <p class="pb-4">
              The 6h workshops take place at the same time in groups of 10-12
              attendees. Each day the groups switch between the teachers so that
              we all have a chance to learn every topic. The groups may be
              selected based on the users' experience and topic preferences, to
              prepare the optimal content for all the students.
            </p>
            <h4 class="font-bold pb-4">The price includes</h4>
            <p class="pb-4">
              The details of the venue, accommodation conditions and free-time
              activities will be provided in the upcoming future. That's why we
              offer early bird tickets for those who decide to trust us with
              this. However, there are some details we can commit to already:
            </p>
            <ul class="list-disc pl-4 pb-4">
              <li>
                Three daily workshops combined with talks and discussions about
                different areas of Vue ecosystem
              </li>
              <li>
                Two nights in a hotel in Eger, Hungary (Friday and Saturday)
              </li>
              <li>
                Additional night on Thursday in Budapest for 3-night ticket
                owners
              </li>
              <li>
                Full board meal plan. Friday & Saturday: Breakfast, Lunch,
                Dinner. Sunday: Breakfast and Lunch.
              </li>
              <li>
                Shuttle transport from Budapest to Eger (morning on Friday)
              </li>
              <li>
                Shuttle transport back from Eger to Budapest and the airport
                (evening on Sunday)
              </li>
            </ul>
            <p class="pb-4">
              If that's not enough, how about an additional warm-up day in
              Budapest, one of the most trendy capitals of Europe?
            </p>
            <h4 class="font-bold pb-4">Beginner workshop, Thursday 26th</h4>
            <p class="pb-4">
              We'll start with an additional beginner workshop for those who
              don't feel confident enough in their Vue-fu, to refresh your
              knowledge and skills.
            </p>
            <h4 class="font-bold pb-4">Vue-Budapest meetup, Thursday 26th</h4>
            <p class="pb-4">
              After that, we invite everybody to the local Vue-Budapest meetup.
              It's an extra chance to listen to prominent speakers, meet local
              developers community and enjoy a good time.
            </p>
            <h4 class="font-bold pb-4">Afterparty, Sunday 29th</h4>
            <p class="pb-4">
              If you don't have to hurry for the flight or to prepare for work
              the next day, why not spend some final moments in a fancy Budapest
              venue and celebrate the time we've spent together.
            </p>
          </template>
        </SectionContent>
      </div>
    </section>

    <section class=" border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <SectionTitle id="teachers">
          Teachers
        </SectionTitle>

        <ActionCard>
          <template #title>
            <Avatar
              src="https://avatars0.githubusercontent.com/u/18719025?s=460&v=4"
            >
              Natalia Tepluhina (Ukraine)
            </Avatar>
          </template>
          <template>
            <p class="pb-4">
              Natalia is a senior front-end engineer at Gitlab and a Vue.js Core
              Team member.
            </p>
            <p class="pb-4">
              She started getting active in Vue.js community as a CTO of Vue
              Vixens, where she wrote their workshops program from scratch. Now
              she's running advanced workshops on her own accord on events such
              as VueConf US or VueConf Toronto.
            </p>
            <p class="pb-4">
              Her technical talks were among the most praised at conferences as
              big as VueJS Amsterdam or JSHeroes. Same with her tutorials, known
              for clarity and interesting choice of non-trivial topics.
            </p>
            <p class="pb-4">
              Let's add a great effort on official Vue documentation, both with
              already existing and upcoming chapters and we can see why she
              secured a well deserved place in the Vue.js Core Team in less than
              a year.
            </p>
          </template>
          <template #actions>
            <a
              class="text-gray-800 flex items-center"
              href="https://twitter.com/N_Tepluhina"
              target="_blank"
            >
              <img
                src="~/assets/images/icons8-twitter.svg"
                alt="twitter-icon"
              />@N_Tepluhina</a
            >
          </template>
        </ActionCard>
        <ActionCard>
          <template #title>
            <Avatar
              src="https://avatars2.githubusercontent.com/u/5890166?s=460&v=4"
            >
              Nicolò Maria Mezzopera (Italy)
            </Avatar>
          </template>
          <template>
            <p class="pb-4">
              Nicolò is one of the masterminds from Budapest-based company
              Pulilab, standing behind the VuePeople.org project and the
              successful Vue-Budapest meetups.
            </p>
            <p class="pb-4">
              Don Nico, as we call him, is also the maintainer of Vue-Leaflet
              integration, a love-deserving map solution for Vue.js. Lately you
              could have seen him talking on VueDay conference in Verona, Italy.
            </p>
          </template>
          <template #actions>
            <a
              class="text-gray-800 flex items-center"
              href="https://twitter.com/DonNicoJs"
              target="_blank"
            >
              <img
                src="~/assets/images/icons8-twitter.svg"
                alt="twitter-icon"
              />@DonNicoJs</a
            >
          </template>
        </ActionCard>
        <ActionCard>
          <template #title>
            <Avatar
              src="https://avatars0.githubusercontent.com/u/25644507?s=460&v=4"
            >
              Dariusz Wędrychowski (Poland)
            </Avatar>
          </template>
          <template>
            <p class="pb-4">
              Popularily known as Gusto, Darek is a Vue.js Core Team member
              taking care of the community around the framework. As an admin of
              the official Vue.js chat, he has answered countless questions from
              Vue users.
            </p>
            <p class="pb-4">
              As a part of his Tour de Vue trip, he's meeting with Vue
              developers around the world, from Morocco to India, to share the
              love for the framework and offer help if needed, but also to learn
              about their daily life experiences.
            </p>
            <p class="pb-4">
              If you want to ask about the community or any part of the Vue
              ecosystem, he's the one to approach.
            </p>
          </template>
          <template #actions>
            <a
              class="text-gray-800 flex items-center"
              href="https://twitter.com/gustojs"
              target="_blank"
            >
              <img
                src="~/assets/images/icons8-twitter.svg"
                alt="twitter-icon"
              />@gustojs</a
            >
          </template>
        </ActionCard>
      </div>
    </section>

    <section class="bg-white border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <SectionTitle id="workshops">
          Workshops
        </SectionTitle>

        <SectionContent>
          <template #title>
            Natalia: GraphQL with Vue-Apollo
          </template>
          <template #default>
            <p class="pb-4">
              GraphQL is one of the most trendy technologies in the webdev world
              nowadays. The workshop focuses on using GraphQL at the frontend
              and specifically in Vue applications.
            </p>
            <span class="block py-2 font-bold">We'll learn:</span>
            <ul class="list-disc pl-4">
              <li>How to work with GraphQL schemas and write mutations</li>
              <li>How to use Apollo client and devtools</li>
              <li>How to setup, configure and use Vue</li>
              <li>Apollo integration</li>
              <li>How to use Apollo for Vue state management</li>
              <li>
                Best practices (loading and error states, naming, composing
                schema etc)
              </li>
              <li>A selection of more advanced features</li>
            </ul>
          </template>
          <template #img>
            <img
              src="~assets/images/undraw_setup_wizard_r6mr.svg"
              alt="setup wizard"
            />
          </template>
        </SectionContent>

        <SectionContent reverse>
          <template #title>
            Nicolò: Advanced components composition
          </template>
          <template #default>
            <p class="pb-4">
              There's much more to writing the components than initially meets
              the eye. Nicolo takes us on a trip around more advanced features
              and tricks that we can take advantage of.
            </p>
            <span class="block py-2 font-bold">We'll learn:</span>
            <ul class="list-disc pl-4">
              <li>
                Different ways to compose the components: scoped slots, higher
                order components, mixins etc
              </li>
              <li>
                How to take advantage of the new function API
              </li>
              <li>
                How and when to use render functions, functional components,
                portals or fragments
              </li>
              <li>Best practices regarding components composition</li>
            </ul>
          </template>
          <template #img>
            <img
              src="~assets/images/undraw_deliveries_131a.svg"
              alt="package and deliveries"
            />
          </template>
        </SectionContent>

        <SectionContent>
          <template #title>
            Gusto: Testing, performance and developer experience
          </template>
          <template #default>
            <p class="pb-4">
              With great projects come great requirements. We'll see how to
              enhance our apps with testing, performance optimizations, server
              side rendering and Nuxt.
            </p>
            <span class="block py-2 font-bold">We'll learn:</span>
            <ul class="list-disc pl-4">
              <li>Basics and best practices of testing Vue components</li>
              <li>How to use common performance optimizations</li>
              <li>How to properly do server side rendering</li>
              <li>
                Convention over configuration with Nuxt
              </li>
            </ul>
          </template>
          <template #img>
            <img
              src="~assets/images/undraw_business_analytics_l92d.svg"
              alt="business analytics"
            />
          </template>
        </SectionContent>
      </div>
    </section>

    <section class="bg-white border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <SectionTitle>
          A word from Gusto
        </SectionTitle>

        <SectionContent>
          <template #default>
            <p class="pb-4">
              What I've always loved about Vue.js is how intimate of an
              experience we can get with it. How the community sticks together -
              be it regular developers, content creators, library authors or
              Core Team members. How we share our ideas and learn from each
              other on daily basis, in a friendly atmosphere. Not only online or
              on big conferences, but in everyday life situations.
            </p>
            <p class="pb-4">
              Some of the top moments of my Vue adventures were a dance battle
              between the core team members in the heart of Budapest, discussing
              Vue source code in the middle of a visit in a famous chocolate
              manufacture in Ukraine or watching ice hockey with fellow Vue
              developers in the legendary Wayne Gretzky Bar in Canada, flooding
              our table with the best local specialties.
            </p>
            <p class="pb-4">
              That's the experience we want to share with you. To provide an
              environment in which we can both learn from each other and enjoy
              the time together, to make a deeper connection between us.
            </p>
            <p class="pb-4">
              Vue and Wine in Eger, Hungary is our first event and I can't wait
              to meet you there. See you at the place!
            </p>
          </template>
          <template #img>
            <img
              src="~assets/images/undraw_adventure_4hum.svg"
              alt="vue adventure"
            />
          </template>
        </SectionContent>
      </div>
    </section>

    <section class="container mx-auto text-center py-6 mb-12">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
      >
        Join us on the real Vue adventure!
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>

      <h3 class="mt-4 mb-8 text-3xl block">
        Vue and Me: Vue and Wine Hungary Edition
      </h3>

      <TicketButton
        class="mx-auto mt-5 lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
      />
    </section>
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Avatar from '@/components/Avatar'
import SectionTitle from '@/components/SectionTitle'
import SectionContent from '@/components/SectionContent'
import ActionCard from '@/components/ActionCard'
import Footer from '@/components/Footer'
import Countdown from '@/components/Countdown'
import TicketButton from '@/components/eventbrite/TicketButton'
export default {
  components: {
    Hero,
    Navbar,
    Avatar,
    TicketButton,
    SectionTitle,
    SectionContent,
    ActionCard,
    Footer,
    Countdown
  },
  data() {
    return {
      scrolled: false
    }
  },
  beforeDestroy() {
    if (this._scrollListener) {
      window.document.removeEventListener('scroll', this.scrollHandler)
    }
  },
  mounted() {
    this._scrollListener = window.document.addEventListener(
      'scroll',
      this.scrollHandler
    )
    this.scrollHandler()
  },
  methods: {
    scrollHandler() {
      this.scrolled = window.scrollY > 10
    }
  }
}
</script>

<style></style>
