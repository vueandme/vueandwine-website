<template>
  <div>
    <Navbar />
    <Hero>
      <div class="flex flex-col w-full">
        <Box class="self-start">
          <p>
            Start a day with an intimate learning experience - intense workshops
            in small groups, led by the top community authorities - library
            authors, content creators and Vue.js Core Team members.
          </p>
        </Box>
        <Box class="self-center">
          <p>
            End it with hand-picked free-time activities, taking advantage of
            the best of what our destination has to offer.
          </p>
        </Box>
        <Box class="self-end">
          <p>
            Then put it on repeat! There's still so much knowledge to share and
            so much fun to have together next day.
          </p>
        </Box>
      </div>
    </Hero>
    <Hero>
      <div class="w-full flex flex-col justify-start items-center">
        <h2 class="text-4xl">
          Join us on the real Vue adventure!
        </h2>
        <h3 class="text-lg my-4">
          Vueand.me: Vue and Wine Hungary, September 27-29th 2019
        </h3>
        <TicketButton />
      </div>
    </Hero>

    <Hero>
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
    </Hero>

    <Hero>
      <template #header>
        Teachers
      </template>
      <div class="w-full flex flex-col">
        <Teacher
          avatar="https://avatars0.githubusercontent.com/u/18719025?s=460&v=4"
        >
          <template #title>
            Natalia Tepluhina (Ukraine)
          </template>
          <template #default>
            <p>
              Natalia is a senior front-end developer at Gitlab and a Vue.js
              Core Team member.
            </p>
            <p class="my-2">
              She started getting active in Vue.js community as a CTO of Vue
              Vixen, where she wrote their workshops program from scratch. Now
              she's running advanced workshops on her own accord on events such
              as VueConf US or VueConf Toronto. Her technical talks were among
              the most praised at conferences as big as VueJS Amsterdam or
              JSHeroes. Same with her tutorials, known for clarity and
              interesting choice of non-trivial topics.
            </p>
            <p>
              Let's add a great effort on official Vue documentation, both with
              already existing and upcoming chapters and we can see why she
              secured a well deserved place in the Vue.js Core Team in less than
              a year.
            </p>
          </template>
        </Teacher>
      </div>
    </Hero>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Box from '@/components/Box'
import Navbar from '@/components/Navbar'
import Quote from '@/components/Quote'
import Teacher from '@/components/Teacher'
import TicketButton from '@/components/eventbrite/TicketButton'
export default {
  components: {
    Hero,
    Box,
    Navbar,
    Quote,
    Teacher,
    TicketButton
  }
}
</script>

<style></style>
