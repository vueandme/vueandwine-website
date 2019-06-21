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
        Is the latest initiative in the Vue.js ecosystem - a series of few days
        long, cameral events in unique spots on the tourist map of Europe.
      </template>
      <template #action>
        <TicketButton />
      </template>
    </Hero>

    <section class="bg-white border-b py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <SectionTitle>
          TLDR
        </SectionTitle>
        <SectionContent>
          <template #title>
            Learn
          </template>
          <template #default>
            Start a day with an intimate learning experience - intense workshops
            in small groups, led by the top community authorities - library
            authors, content creators and Vue.js Core Team members.
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

    <section class="bg-white border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <SectionTitle>
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
              Nicolò Mezzopera (Italy)
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

    <!-- <Hero>
      <Quote>
        <p>
          What I've always loved about Vue.js is how intimate of an experience
          we can get with it. How the community sticks together - be it regular
          developers, content creators, library authors or Core Team members.
          How we share our ideas and learn from each other on daily basis, in a
          friendly atmosphere. Not only online or on big conferences, but in
          everyday life situations.
        </p>
        <p class="my-4">
          Some of the top moments of my Vue adventures were discussing Vue
          source code in the middle of a visit in a famous chocolate manufacture
          in Ukraine or watching ice hockey with fellow Vue developers in the
          legendary Wayne Gretzky Bar in Canada, flooding our table with the
          best local specialties.
        </p>
        <p>
          That's the experience we want to share with you. To provide an
          environment in which we can both learn from each other and enjoy the
          time together, to make a deeper connection between us.
        </p>
        <p class="my-4">
          Vue and Wine in Eger, Hungary is our first event and I can't wait to
          meet you there. See you at the place!
        </p>
        <template #footer>
          Darek "Gusto" Wędrychowski
        </template>
      </Quote>
    </Hero> -->
  </div>
</template>

<script>
import Hero from '@/components/Hero'
// import Box from '@/components/Box'
import Navbar from '@/components/Navbar'
// import Quote from '@/components/Quote'
import Avatar from '@/components/Avatar'
import SectionTitle from '@/components/SectionTitle'
import SectionContent from '@/components/SectionContent'
import ActionCard from '@/components/ActionCard'
import TicketButton from '@/components/eventbrite/TicketButton'
export default {
  components: {
    Hero,
    // Box,
    Navbar,
    // Quote,
    Avatar,
    TicketButton,
    SectionTitle,
    SectionContent,
    ActionCard
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
  },
  methods: {
    scrollHandler() {
      this.scrolled = window.scrollY > 10
    }
  }
}
</script>

<style></style>
