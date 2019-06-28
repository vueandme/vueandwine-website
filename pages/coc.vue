<template>
  <div>
    <section class="bg-white border-b py-8">
      <div class="container max-w-5xl mx-auto m-8 mt-16">
        <SectionTitle id="TLDR">
          Code Of Conduct
        </SectionTitle>
        <SectionContent fullsize>
          <template #default>
            <p class="pb-4">
              All attendees, teachers and other staff members at our events are
              required to agree with the following code of conduct. Organisers
              will enforce this code throughout the event. We expect cooperation
              from all participants to help ensure a safe environment for
              everybody.
            </p>
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
              The Quick Version
            </h3>

            <p class="pb-4">
              Our event is dedicated to providing a harassment-free conference
              experience for everyone, regardless of gender, gender identity and
              expression, age, sexual orientation, disability, physical
              appearance, body size, race, ethnicity, religion (or lack
              thereof), or technology choices. We do not tolerate harassment of
              event participants in any form. Sexual language and imagery is not
              appropriate for any conference venue, including talks, workshops,
              parties, Twitter and other online media. Event participants
              violating these rules may be sanctioned or expelled from the
              conference without a refund at the discretion of the event
              organisers.
            </p>
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
              The Less Quick Version
            </h3>

            <p class="pb-4">
              Harassment includes offensive verbal comments related to gender,
              gender identity and expression, age, sexual orientation,
              disability, physical appearance, body size, race, ethnicity,
              religion, technology choices, sexual images in public spaces,
              deliberate intimidation, stalking, following, harassing
              photography or recording, sustained disruption of talks or other
              events, inappropriate physical contact, and unwelcome sexual
              attention.
            </p>
            <p class="pb-4">
              Participants asked to stop any harassing behavior are expected to
              comply immediately.
            </p>
            <p class="pb-4">
              The staff members are also subject to the anti-harassment policy.
              In particular, they should not use sexualised images, activities,
              or other material.
            </p>
            <p class="pb-4">
              If a participant engages in harassing behavior, the event
              organisers may take any action they deem appropriate, including
              warning the offender or expulsion from the event with no refund.
            </p>
            <p class="pb-4">
              If you are being harassed, notice that someone else is being
              harassed, or have any other concerns, please contact a member of
              conference staff immediately. Event staff can be identified as
              they'll be wearing branded clothing and/or badges.
            </p>
            <p class="pb-4">
              Event staff will be happy to help participants contact hotel/venue
              security or local law enforcement, provide escorts, or otherwise
              assist those experiencing harassment to feel safe for the duration
              of the event. We value your attendance.
            </p>
            <p class="pb-4">
              We expect participants to follow these rules at conference and
              workshop venues and conference-related social events.
            </p>

            <p class="pb-4 italic">
              Original source and credit:
              <a href="http://2012.jsconf.us/#/about">JSConf</a> &
              <a
                href="
                http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy"
                >The Ada Initiative</a
              >
            </p>
          </template>
        </SectionContent>
      </div>
    </section>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle'
import SectionContent from '@/components/SectionContent'
export default {
  components: {
    SectionTitle,
    SectionContent
  }
}
</script>
