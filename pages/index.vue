<template>
  <div>
    <Navbar :scrolled="scrolled" />

    <Hero>
      <template #intro>
        Join us on the real Vue adventure!
      </template>
      <template #main>
        Vueand.me: Vue and Wine Hungary, September 27-29th 2019
      </template>
      <template #sub>
        The latest initiative in the Vue.js ecosystem - a series of few days
        long, cameral events in unique spots on the tourist map of Europe.
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
        />
      </template>
    </Hero>

    <section class="bg-white border-b py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <SectionTitle id="TLDR">
          TLDR
        </SectionTitle>
        <SectionContent>
          <template #title>
            Intimate learning experience
          </template>
          <template #default>
            Intense workshops in small groups, led by the top community
            authorities - library authors, content creators and Vue.js Core Team
            members. We'll focus on intermediate and advanced level features,
            from both core Vue libraries and wider ecosystem like Nuxt or
            Vue-Apollo.
          </template>
          <template #img>
            <img src="~assets/images/undraw_teaching_f1cm.svg" />
          </template>
        </SectionContent>
        <SectionContent reverse>
          <template #title>
            Have fun
          </template>
          <template>
            End it with hand-picked free-time activities, taking advantage of
            the best of what our destination has to offer.
          </template>
          <template #img>
            <img src="~assets/images/undraw_having_fun_iais.svg" />
          </template>
        </SectionContent>
        <SectionContent>
          <template #title>
            Repeat
          </template>
          <template>
            Then put it on repeat! There's still so much knowledge to share and
            so much fun to have together next day.
          </template>
          <template #img>
            <img src="~assets/images/undraw_in_no_time_6igu.svg" />
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
            Natalia is a senior front-end developer at Gitlab and a Vue.js Core
            Team member.
            <br />
            <br />
            She started getting active in Vue.js community as a CTO of Vue
            Vixen, where she wrote their workshops program from scratch. Now
            she's running advanced workshops on her own accord on events such as
            VueConf US or VueConf Toronto.
            <br />
            <br />
            Her technical talks were among the most praised at conferences as
            big as VueJS Amsterdam or JSHeroes. Same with her tutorials, known
            for clarity and interesting choice of non-trivial topics.
            <br />
            <br />
            Let's add a great effort on official Vue documentation, both with
            already existing and upcoming chapters and we can see why she
            secured a well deserved place in the Vue.js Core Team in less than a
            year.
          </template>
          <template #actions>
            <a
              class="text-gray-800 flex items-center"
              href="https://twitter.com/N_Tepluhina"
              target="_blank"
            >
              <img src="~/assets/images/icons8-twitter.svg" />@N_Tepluhina</a
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
            Nicolò is one of the masterminds from Budapest-based company
            Pulilab, standing behind the VuePeople.org project and the
            successful Vue-Budapest meetups.
            <br />
            <br />
            Don Nico, as we call him, is also the maintainer of Vue-Leaflet
            integration, a love-deserving map solution for Vue.js. Lately you
            could have seen him talking on VueDay conference in Verona, Italy.
          </template>
          <template #actions>
            <a
              class="text-gray-800 flex items-center"
              href="https://twitter.com/DonNicoJs"
              target="_blank"
            >
              <img src="~/assets/images/icons8-twitter.svg" />@DonNicoJs</a
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
            Gusto, because that's how he's known among other developers, is a
            Vue.js Core Team member taking care of the community around the
            framework. As an admin of the official Vue.js chat, he has answered
            countless questions from Vue users.
            <br />
            <br />
            As a part of his Tour de Vue trip, he's meeting with Vue developers
            around the world, from Morocco to India, to share the love for the
            framework and offer help if needed, but also to learn about their
            daily life experiences.
            <br />
            <br />
            If you want to ask about the community or any part of the Vue
            ecosystem, he's the one to approach.
          </template>
          <template #actions>
            <a
              class="text-gray-800 flex items-center"
              href="https://twitter.com/gustojs"
              target="_blank"
            >
              <img src="~/assets/images/icons8-twitter.svg" />@gustojs</a
            >
          </template>
        </ActionCard>
      </div>
    </section>

    <section class="bg-white border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <SectionTitle>
          A word from Gusto
        </SectionTitle>

        <SectionContent>
          <template #title>
            Vuejs adventure
          </template>
          <template #default>
            What I've always loved about Vue.js is how intimate of an experience
            we can get with it. How the community sticks together - be it
            regular developers, content creators, library authors or Core Team
            members. How we share our ideas and learn from each other on daily
            basis, in a friendly atmosphere. Not only online or on big
            conferences, but in everyday life situations.
            <br />
            <br />
            Some of the top moments of my Vue adventures were discussing Vue
            source code in the middle of a visit in a famous chocolate
            manufacture in Ukraine or watching ice hockey with fellow Vue
            developers in the legendary Wayne Gretzky Bar in Canada, flooding
            our table with the best local specialties.
            <br />
            <br />
            That's the experience we want to share with you. To provide an
            environment in which we can both learn from each other and enjoy the
            time together, to make a deeper connection between us.
            <br />
            <br />
            Vue and Wine in Eger, Hungary is our first event and I can't wait to
            meet you there. See you at the place!
          </template>
          <template #img>
            <img src="~assets/images/undraw_adventure_4hum.svg" />
          </template>
        </SectionContent>
      </div>
    </section>

    <section class="bg-white border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <SectionTitle id="curriculum">
          Curriculum
        </SectionTitle>

        <SectionContent>
          <template #title>
            Natalia: GraphQL with Vue-Apollo
          </template>
          <template #default>
            GraphQL is one of the most trendy technologies in the webdev world
            nowadays. The workshop focuses on using GraphQL at the frontend and
            specifically in Vue applications.
            <span class="block py-2 font-bold">We'll learn:</span>
            <ul class="list-disc">
              <li>How to work with GraphQL schemas and write mutations</li>
              <li>How to use Apollo client and devtools</li>
              <li>How to setup, configure and use Vue</li>
              <li>Apollo integration</li>
              <li>How to use Apollo for Vue state management</li>
              <li>
                best practices (loading and error states, naming, composing
                schema etc)
              </li>
              <li>a selection of more advanced features</li>
            </ul>
          </template>
          <template #img>
            <img src="~assets/images/undraw_setup_wizard_r6mr.svg" />
          </template>
        </SectionContent>

        <SectionContent reverse>
          <template #title>
            Nicolò: Advanced components features
          </template>
          <template #default>
            There's much more to writing the components than initially meets the
            eye. Nicolo takes us on a trip around more advanced features and
            tricks that we can take advantage of.
            <span class="block py-2 font-bold">We'll learn:</span>
            <ul class="list-disc">
              <li>
                Different ways to compose the components (scoped slots, higher
                order components etc)
              </li>
              <li>
                How to approach different component use cases (layouts, wrappers
                etc)
              </li>
              <li>How to use common performance optimizations</li>
              <li>How and when to use render functions</li>
              <li>How and when to use functional components</li>
              <li>Best practices regarding components composition</li>
            </ul>
          </template>
          <template #img>
            <img src="~assets/images/undraw_deliveries_131a.svg" />
          </template>
        </SectionContent>

        <SectionContent>
          <template #title>
            Gusto: Big projects with Vue.js
          </template>
          <template #default>
            Bigger projects mean bigger requirements. With Gusto, we'll see how
            to enhance our apps with testing and some of the more advanced
            features of other core libraries.
            <span class="block py-2 font-bold">We'll learn:</span>
            <ul class="list-disc">
              <li>Basics and best practices of testing Vue components</li>
              <li>How to enhance Vue with custom plugins</li>
              <li>How to use vue-router navigation guards</li>
              <li>How to add internalization to our projects</li>
              <li>How to write Vuex modules and plugins</li>
              <li>
                Best practices regarding state management and application
                structure
              </li>
            </ul>
          </template>
          <template #img>
            <img src="~assets/images/undraw_business_analytics_l92d.svg" />
          </template>
        </SectionContent>
      </div>
    </section>

    <section class="bg-white border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <SectionTitle id="coc">
          Code of Conduct
        </SectionTitle>

        <SectionContent>
          <template #title>
            No Harrassment
          </template>
          <template #default>
            <p>
              Harassment includes offensive verbal comments related to gender,
              sexual orientation, disability, physical appearance, body size,
              race, religion, sexual images in public spaces, deliberate
              intimidation, stalking, following, harassing photography or
              recording, sustained disruption of talks or other events,
              inappropriate physical contact, and unwelcome sexual attention.
              Participants asked to stop any harassing behavior are expected to
              comply immediately.
            </p>
            <p class="mt-2">
              Be careful in the words that you choose. Remember that sexist,
              racist, and other exclusionary jokes can be offensive to those
              around you. Excessive swearing and offensive jokes are not
              appropriate for this event
            </p>
          </template>
          <template #img>
            <img src="~assets/images/undraw_work_chat_erdt.svg" />
          </template>
        </SectionContent>
        <SectionContent>
          <template #title>
            Violation = No Refund
          </template>
          <template #default>
            <p>
              If a participant engages in behavior that violates this code of
              conduct, the conference organizers may take any action they deem
              appropriate, including warning the offender or expulsion from the
              workshop with no refund.
            </p>
          </template>
          <template #img> </template>
        </SectionContent>
      </div>
    </section>

    <section class="container mx-auto text-center py-6 mb-12">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
      >
        What are you waiting for?
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>

      <h3 class="mt-4 mb-8 text-3xl block">
        Join Vue and Me: Vue and Wine Hungary Edition
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
