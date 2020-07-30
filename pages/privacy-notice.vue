<template>
  <main>
    <article>
      <section class="content">
        <h1>Privacy Notice</h1>

        <div class="row">
          <div class="col-md-8">
            <p>
              At JusTaxis we take your privacy very seriously and we do our best
              to adhere to Data Protection principals and comply with
              <a href="https://gdpr-info.eu/" target="blank">GDPR</a> (General
              Data Protection Regulations).
            </p>

            <h2>Cookies</h2>
            <p>
              Cookies are small text files which can store website preferences
              on your computer, so they can be remembered when you return to web
              pages.
              <strong
                >JusTaxis website does NOT use cookies as there is no need to
                store anything locally to your computer or device.</strong
              >
            </p>

            <h2>Data Owner</h2>
            <p>
              JusTaxis is operated by <strong>Justin Miller</strong> and
              <strong>Dawn Miller</strong> as 'JusTaxis'.
            </p>

            <p>
              Ruckles, Shapwick Road<br />
              Westhay, Glastonbury<br />
              Somerset<br />
              BA6 9TT
            </p>

            <p>
              Under the GDPR, it is the legal responsibility of website owners
              and operators to make sure that personal data is collected and
              processed lawfully. JusTaxis will always ensure this is the case.
            </p>

            <h2>Data Processors</h2>
            <p>
              By using our contact form your personal details will be stored by
              our web hosting service <strong>Netlify</strong> and we will
              receive an email notification containing the personal details to
              our business email address which is ran by
              <strong>Google</strong>.
            </p>

            <p>
              We will never pass your personal details to any other third
              parties than those named above for the necessary processing of
              your contact form request.
            </p>

            <h2>Data Retention</h2>
            <p>
              We will delete any contact information from at most one year after
              your latest enquiry or correspondence in compliance with GDPR, but
              we aim to delete information 21 days after contact.
            </p>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: "Privacy",
  head() {
    return {
      title: "Privacy Notice",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "JusTaxis Privacy Notice",
        },
      ],
    };
  },
};
</script>

<style></style>
