<template>
  <div>
    <Hero>
      <template #right>
        <img
          class="sm:mx-auto"
          src="~/assets/images/vueandme_logo.jpg"
          alt="vueand.me logo"
        />
      </template>

      <template #main>
        <p class="text-vue-green">Vueand.me</p>
        <p class="text-5xl">Budapest Edition</p>
        <p class="text-2xl">September 28-29th 2019</p>
      </template>
      <template #sub>
        <p class="pb-4">
          A new series of events, taking Vue.js workshops<br />
          to best spots on the tourist map of Europe.
        </p>
      </template>
      <template #action>
        <TicketButton
          class="mx-auto lg:mx-0 hover:underline bg-white
        text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
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
              On our first event, we have beginner, advanced and GraphQL
              workshops for you to choose from.
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
              give us a taste of the area we visit and make memories together.
            </p>
            <p>
              To hit it off, let's go wine tasting in Budapest! An evening
              dinner will take us on a trip around all the top vineyard places
              in Hungary.
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
          Budapest Edition
        </SectionTitle>
        <SectionContent fullsize>
          <h4 class="font-bold pb-4 text-xl">About the series</h4>
          <p class="pb-4">
            Vueand.me is a series of events in which the attendees take part in
            both Vue workshops and side activities. The concurrent editions take
            place in different places around Europe and have different themes.
            In opposite to big conferences, we meet in a limited group of 30-40
            developers, to provide a more intimate experience, where we can all
            get to know and support each other.
          </p>
          <h3 class="font-bold pb-4 text-xl">
            Vue-Budapest meetup, Friday 27th
          </h3>
          <p class="pb-4">
            As an appetizer, we invite everybody to the Vue-Budapest meetup.
            It's an extra chance to listen to prominent speakers, meet local
            developers community and enjoy a good time.
          </p>
          <h3 class="font-bold pb-4 text-xl">
            Workshop Day One, Saturday 28th
          </h3>
          <p class="pb-4">
            Take part in one of our workshops - be it beginner, advanced or
            GraphQL. Each course lasts 6 hours and the groups are limited to
            10-12 attendees.
          </p>
          <h3 class="font-bold pb-4 text-xl">Evening event - Vue and Wine</h3>
          <p class="pb-4">
            This optional event takes place on Day One and will be paid
            separately. We'll send out the details to the attendees at a later
            time.
          </p>
          <h3 class="font-bold pb-4 text-xl">
            Workshop Day Two, Sunday 29th
          </h3>
          <p class="pb-4">
            Again, we'll provide all three workshops for you, so take advantage
            of it and choose two if you can!
          </p>
          <h4 class="text-2xl pb-4 mt-8 text-center">
            Follow us on
            <strong><a href="https://twitter.com/vueandme">Twitter</a></strong>
            for the latest updates!
          </h4>
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
          <template #subtitle>
            <span class="rounded gradient text-black p-1">
              Senior front-end engineer in Gitlab
            </span>
            <span class="rounded gradient text-black p-1 mt-2">
              Vue.js Core Team member</span
            >
          </template>
          <template>
            <p class="pb-4">
              Natalia may be the latest addition to Vue.js Core Team, but she's
              one of the brightest stars in the community right now.
            </p>
            <p class="pb-4">
              Thanks to hard work, clarity and interesting choice of non-trivial
              topics, she quickly became one of the most desired speakers and
              workshop teachers not only on Vue-related conferences, as well as
              a popular tutorial author.
            </p>
            <p class="pb-4">
              When she's not busy enjoying hot chocolate, she spends time
              playing World of Warcraft with her family.
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
          <template #subtitle>
            <span class="rounded gradient text-black p-1">
              Senior front-end engineer in Pulilab
            </span>
            <span class="rounded gradient text-black p-1 mt-2">
              Vue2Leaflet maintainer
            </span>
          </template>
          <template>
            <p class="pb-4">
              Nicolò is the mastermind behind the VuePeople.org project and the
              successful Vue-Budapest meetups. Lately you could have seen him
              talking on VueDay conference in Verona, Italy.
            </p>
            <p class="pb-4">
              Thanks to his experience, he's one of the experts on using
              external libraries with Vue.js, but you can learn much more from
              him.
            </p>
            <p class="pb-4">
              Look around the town and you may find him walking his Border
              Collie, Mr. Colly, who by now has become a Vue.js expert himself.
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
          <template #subtitle>
            <span class="rounded gradient text-black p-1">
              Admin of the official Vue.js chat
            </span>
            <span class="rounded gradient text-black p-1 mt-2">
              Vue.js Core Team member
            </span>
          </template>
          <template>
            <p class="pb-4">
              Popularily known as Gusto, Darek is one of the Core Team members
              taking care of the Vue.js community.
            </p>
            <p class="pb-4">
              As a part of his Tour de Vue trip, he's meeting with Vue
              developers around the world, from Morocco to India, to share the
              love for the framework and offer help if needed, but also to learn
              about their daily life experiences.
            </p>
            <p class="pb-4">
              Other than coding, his main passion is writing short stories. Be
              sure to ask him about his pet project - a text-based roleplaying
              platform.
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
            Gusto: My first Vue.js application
          </template>
          <template #default>
            <p class="pb-4 font-bold">Saturday or Sunday, 6h, 150 euro</p>
            <p class="pb-4">
              Planning to take your first steps into Vue.js world? Gusto
              explains all the necessary steps to write a Single Page
              Application, touching not only core Vue features but also some of
              the most important pieces of the ecosystem around it.
            </p>
            <span class="block py-2 font-bold">We'll learn:</span>
            <ul class="list-disc pl-4">
              <li>How to use common Vue.js API features</li>
              <li>How to create a SPA with Vue CLI and Vue Router</li>
              <li>How to manage the application state with Vuex</li>
              <li>How to communicate with the server using Axios</li>
              <li>
                A selection of typical frontend tasks - authentication,
                validation, internalization
              </li>
              <li>Best practices, conventions and common gotchas</li>
            </ul>
          </template>
          <template #img>
            <img
              src="~assets/images/undraw_business_analytics_l92d.svg"
              alt="business analytics"
            />
          </template>
        </SectionContent>

        <SectionContent reverse>
          <template #title>
            Nicolò: Advanced components composition and testing
          </template>
          <template #default>
            <p class="pb-4 font-bold">Saturday or Sunday, 6h, 150 euro</p>
            <p class="pb-4">
              There's much more to writing the components than initially meets
              the eye. Nicolò takes us on a trip around more advanced features
              and tricks that we can take advantage of.
            </p>
            <span class="block py-2 font-bold">We'll learn:</span>
            <ul class="list-disc pl-4">
              <li>
                Different ways of component composition: scoped slots, higher
                order components, mixins and more.
              </li>
              <li>
                How to take advantage of the new function API
              </li>
              <li>
                How and when to use render functions, functional components,
                portals or fragments
              </li>
              <li>Best practices regarding components composition</li>
              <li>How to efficently test our components</li>
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
            Natalia: GraphQL with Vue-Apollo
          </template>
          <template #default>
            <p class="pb-4 font-bold">Saturday or Sunday, 6h, 150 euro</p>
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
      </div>
    </section>

    <section class="container mx-auto text-center py-6 mb-12">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
      >
        Join us in Budapest!
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>

      <h3 class="mt-4 mb-8 text-3xl block">
        Vueand.me: Budapest Edition
      </h3>

      <TicketButton
        class="mx-auto mt-5 lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
      />
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Avatar from '@/components/Avatar'
import SectionTitle from '@/components/SectionTitle'
import SectionContent from '@/components/SectionContent'
import ActionCard from '@/components/ActionCard'
import TicketButton from '@/components/eventbrite/TicketButton'
export default {
  components: {
    Hero,
    Avatar,
    TicketButton,
    SectionTitle,
    SectionContent,
    ActionCard
  }
}
</script>

<style></style>
